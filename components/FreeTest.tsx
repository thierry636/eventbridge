"use client";

import { useMemo, useState, type FormEvent } from "react";
import { MAX_SITES, parseSites, validateLead, type LeadErrors } from "@/lib/lead";
import { bookingEmbedUrl } from "@/lib/booking";
import { track } from "@/lib/analytics";

const STEPS = [
  { t: "Vous indiquez vos sources", d: "Quelques sites représentatifs : mairies, associations, salles, billetteries." },
  { t: "Nous les traitons dans Agendata", d: "Captation réelle, normalisation et dédoublonnage sur vos propres pages." },
  { t: "Nous vous présentons le résultat", d: "Une démonstration sur vos événements, avec les fiches obtenues." },
];

type Status = "idle" | "sending" | "sent" | "error";

export function FreeTest() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [sitesRaw, setSitesRaw] = useState("");
  const [contact, setContact] = useState<{ name: string; email: string }>({ name: "", email: "" });
  const sites = useMemo(() => parseSites(sitesRaw), [sitesRaw]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "");
    const lead = {
      firstName: get("firstName"),
      lastName: get("lastName"),
      email: get("email"),
      description: get("description"),
      sites,
    };
    const v = validateLead(lead);
    setErrors(v);
    setServerError(null);
    if (Object.keys(v).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/test-gratuit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, sites: sitesRaw, eb_hp_x7: get("eb_hp_x7") }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: LeadErrors; error?: string };
      if (res.ok && data.ok) {
        setContact({ name: `${lead.firstName} ${lead.lastName}`.trim(), email: lead.email.trim() });
        setStatus("sent");
        track("generate_lead", { form: "test_gratuit", nb_sources: sites.length });
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerError(data.error ?? "La demande n'a pas été envoyée. Vérifiez les champs signalés puis renvoyez-la.");
      setStatus("error");
    } catch {
      setServerError("La demande n'a pas été envoyée : connexion impossible. Vérifiez votre réseau puis renvoyez-la.");
      setStatus("error");
    }
  }

  return (
    <section id="test-gratuit" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 text-white sm:scroll-mt-[72px] sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 40% at 80% 60%, rgba(76,67,201,0.35), transparent 70%)" }} />
      <div className="wrap relative grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div data-reveal>
          <p className="kicker !text-iris-light">Test gratuit</p>
          <h2 className="h-section mt-3 max-w-[16ch] !text-white">Envoyez-nous vos sites. On vous montre ce qu&apos;on en tire.</h2>
          <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.65] text-white/60 sm:text-lg">
            Pas de démonstration générique. Indiquez-nous les sites dont vous voulez récupérer
            les événements, nous les traitons, puis nous vous recontactons pour vous montrer le
            résultat. Gratuit et sans engagement.
          </p>
          <ol className="mt-10 border-t border-white/10 sm:mt-12">
            {STEPS.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[2.75rem_1fr] border-b border-white/10 py-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-iris text-[13px] font-semibold text-white">{i + 1}</span>
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="mt-1 text-[15px] text-white/55">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="glow-border rounded-3xl p-5 shadow-float sm:rounded-2xl sm:p-10">
          {status === "sent" ? (
            <div className="flex flex-col" role="status">
              <p className="text-[30px] font-semibold tracking-[-0.03em]">Demande envoyée.</p>
              <p className="mt-4 max-w-[30rem] text-white/60">
                Nous traitons {sites.length > 1 ? `vos ${sites.length} sources` : "votre source"}.
                Choisissez dès maintenant le créneau de votre démonstration de 30 minutes sur vos exemples.
              </p>
              <iframe
                title="Prendre rendez-vous pour la démonstration"
                src={bookingEmbedUrl(contact)}
                className="mt-6 h-[1000px] w-full rounded-xl bg-white sm:h-[700px]"
                loading="lazy"
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="Prénom" name="firstName" autoComplete="given-name" error={errors.firstName} />
              <Field label="Nom" name="lastName" autoComplete="family-name" error={errors.lastName} />
              <div className="sm:col-span-2">
                <Field
                  label="Email professionnel"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="prenom.nom@office-tourisme.fr"
                  error={errors.email}
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="description" text="Votre besoin" />
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Par exemple : nous voulons récupérer l'agenda de nos 40 communes pour alimenter Apidae."
                  className="field resize-y"
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? "description-err" : undefined}
                />
                <FieldError id="description-err" msg={errors.description} />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="sites" text="Sites à analyser" />
                <textarea
                  id="sites"
                  name="sites"
                  rows={4}
                  value={sitesRaw}
                  onChange={(e) => setSitesRaw(e.target.value)}
                  placeholder={"www.mairie-exemple.fr/agenda\nwww.comite-des-fetes.fr\nwww.theatre-exemple.fr/saison"}
                  className="field resize-y"
                  aria-invalid={Boolean(errors.sites)}
                  aria-describedby="sites-help"
                />
                <div id="sites-help" className="mt-2 flex justify-between gap-4 text-[13px]">
                  <span className={errors.sites ? "text-[#F2A193]" : "text-white/45"}>
                    {errors.sites ?? "Une adresse par ligne, idéalement la page agenda."}
                  </span>
                  <span className={`flex-none tabular-nums ${sites.length > MAX_SITES ? "text-[#F2A193]" : "text-white/45"}`}>
                    {sites.length} / {MAX_SITES}
                  </span>
                </div>
              </div>

              {/* Pot de miel anti-robots : nom et libellé neutres pour que la
                  saisie automatique des navigateurs ne le remplisse jamais. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Ne pas remplir
                  <input type="text" name="eb_hp_x7" tabIndex={-1} autoComplete="off" data-lpignore="true" data-1p-ignore />
                </label>
              </div>

              {serverError ? (
                <p role="alert" className="rounded-[10px] border border-coral/50 px-4 py-3 text-[14px] text-[#F2A193] sm:col-span-2">
                  {serverError}
                </p>
              ) : null}

              <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] leading-relaxed text-white/40 sm:max-w-[16rem]">
                  Vos informations servent uniquement à préparer le test et à vous recontacter.
                </p>
                <button type="submit" className="btn-light w-full !py-4 text-[16px] font-semibold active:scale-[0.98] sm:w-auto sm:!py-3 sm:text-[15px]" disabled={status === "sending"}>
                  {status === "sending" ? "Envoi en cours…" : "Demander le test gratuit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Label({ htmlFor, text }: { htmlFor: string; text: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[14px] text-white/75">
      {text}
    </label>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} className="mt-2 text-[13px] text-[#F2A193]">
      {msg}
    </p>
  ) : null;
}

function Field({
  label,
  name,
  type = "text",
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} text={label} />
      <input
        id={name}
        name={name}
        type={type}
        required
        className="field"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
        {...rest}
      />
      <FieldError id={`${name}-err`} msg={error} />
    </div>
  );
}
