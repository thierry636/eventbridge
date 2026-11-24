import { NextResponse } from "next/server";
import { parseSites, validateLead, type LeadInput } from "@/lib/lead";

/**
 * Réception des demandes de test gratuit.
 *
 * Canaux de livraison (cumulables), configurés par variables d'environnement :
 *  - LEAD_WEBHOOK_URL               → POST JSON (Make, n8n, Zapier, Slack…)
 *  - RESEND_API_KEY + LEAD_NOTIFY_EMAIL (+ LEAD_FROM_EMAIL) → email via Resend
 * Sans canal configuré, la demande est écrite dans les logs du serveur.
 */
/**
 * Diagnostic : GET /api/test-gratuit indique quels canaux sont configurés,
 * sans jamais exposer de valeur secrète.
 */
export async function GET() {
  const from = process.env.LEAD_FROM_EMAIL;
  return NextResponse.json({
    resend: {
      apiKey: Boolean(process.env.RESEND_API_KEY),
      notifyEmail: Boolean(process.env.LEAD_NOTIFY_EMAIL),
      fromEmail: Boolean(from),
      fromDomain: from ? (from.match(/@([^>\s]+)/)?.[1] ?? "illisible") : "onboarding@resend.dev (par défaut)",
    },
    webhook: Boolean(process.env.LEAD_WEBHOOK_URL),
    willSendEmail: Boolean(process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL),
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  // Pot de miel : un humain ne remplit jamais ce champ caché.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const lead: LeadInput = {
    firstName: str(body.firstName),
    lastName: str(body.lastName),
    email: str(body.email).toLowerCase(),
    description: str(body.description),
    sites: parseSites(str(body.sites)),
  };

  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const payload = { ...lead, receivedAt: new Date().toISOString(), source: "eventbridge-landing" };
  const deliveries: Promise<void>[] = [];

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) deliveries.push(postWebhook(webhook, payload));

  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notifyTo) deliveries.push(sendEmail(resendKey, notifyTo, payload));

  if (deliveries.length === 0) {
    console.warn("[test-gratuit] Aucun canal configuré — demande reçue :", JSON.stringify(payload));
    return NextResponse.json({ ok: true });
  }

  const results = await Promise.allSettled(deliveries);
  const failures = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  failures.forEach((f) => console.error("[test-gratuit] Échec de livraison :", f.reason));

  if (failures.length === results.length) {
    console.error("[test-gratuit] Demande non livrée :", JSON.stringify(payload));
    return NextResponse.json(
      { ok: false, error: "Envoi impossible pour le moment. Réessayez dans quelques minutes." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}

type Payload = LeadInput & { receivedAt: string; source: string };

async function postWebhook(url: string, payload: Payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Webhook ${res.status}`);
}

async function sendEmail(apiKey: string, to: string, p: Payload) {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const html = `
    <h2>Nouvelle demande de test gratuit EventBridge</h2>
    <p><strong>${esc(p.firstName)} ${esc(p.lastName)}</strong> — <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
    <h3>Besoin</h3>
    <p style="white-space:pre-wrap">${esc(p.description)}</p>
    <h3>Sites à analyser (${p.sites.length})</h3>
    <ul>${p.sites.map((s) => `<li><a href="${esc(s)}">${esc(s)}</a></li>`).join("")}</ul>
    <p style="color:#888">Reçu le ${esc(p.receivedAt)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "EventBridge <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: p.email,
      subject: `Test gratuit — ${p.firstName} ${p.lastName} (${p.sites.length} site${p.sites.length > 1 ? "s" : ""})`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  console.info("[test-gratuit] Email accepté par Resend :", await res.text());
}
