"use client";

import { useMemo, useState, type FormEvent } from "react";
import { MAX_SITES, parseSites, validateLead, type LeadErrors } from "@/lib/lead";
import { IconArrow, IconCheck } from "./Icons";

const STEPS = [
  { n: "1", t: "Vous indiquez vos sources", d: "Les sites dont vous aimeriez récupérer les événements : mairies, associations, salles…" },
  { n: "2", t: "Nous les passons dans EventBridge", d: "Captation réelle, normalisation et dédoublonnage sur vos propres pages." },
  { n: "3", t: "On vous montre le résultat", d: "Démo personnalisée sur vos exemples : les fiches obtenues, prêtes pour votre SIT." },
];

type Status = "idle" | "sending" | "sent" | "error";

export function FreeTest() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [sitesRaw, setSitesRaw] = useState("");
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
        body: JSON.stringify({ ...lead, sites: sitesRaw, company_website: get("company_website") }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: LeadErrors; error?: string };
      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerError(data.error ?? "Votre demande n'a pas pu être envoyée. Vérifiez les champs et réessayez.");
      setStatus("error");
    } catch {
      setServerError("Connexion impossible. Vérifiez votre réseau et réessayez.");
      setStatus("error");
    }
  }

  return (
    <section id="test-gratuit" className="night-bg grid-overlay relative scroll-mt-16 overflow-hidden py-20 text-white sm:py-28">
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow-dark">
            <span className="h-px w-6 bg-indigo-200" />
            Test gratuit
          </span>
          <h2 className="section-title-dark">
            Envoyez-nous vos sites.{" "}
            <span className="gradient-text">On vous montre ce qu&apos;on en tire.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Pas de démo générique : nous lançons EventBridge sur les sources que vous choisissez,
            puis nous revenons vers vous pour vous présenter le résultat sur vos propres
            événements. Gratuit et sans engagement.
          </p>

          <ol className="mt-9 space-y-5">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-white/15 bg-white/10 font-display text-sm font-bold">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.01em]">{s.t}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/60">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="glass-card p-5 sm:p-8">
          {status === "sent" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center" role="status">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-500/20 text-mint-300">
                <IconCheck width={26} height={26} strokeWidth={2.4} />
              </span>
              <h3 className="text-2xl font-bold">Demande bien reçue, merci !</h3>
              <p className="max-w-md text-sm leading-relaxed text-white/65">
                Nous analysons vos {sites.length} source{sites.length > 1 ? "s" : ""} et revenons
                vers vous très vite pour caler une démo sur vos propres exemples.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <Field label="Prénom" name="firstName" autoComplete="given-name" placeholder="Camille" error={errors.firstName} />
              <Field label="Nom" name="lastName" autoComplete="family-name" placeholder="Dupont" error={errors.lastName} />
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
                  placeholder="Ex. : Office de tourisme de…, nous voulons récupérer l'agenda de nos 40 communes pour alimenter notre SIT."
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
                  placeholder={"www.mairie-exemple.fr/agenda\nwww.comite-des-fetes.fr\nwww.salle-de-spectacle.fr/programmation"}
                  className="field resize-y font-mono text-[13px]"
                  aria-invalid={Boolean(errors.sites)}
                  aria-describedby="sites-help"
                />
                <div id="sites-help" className="mt-1.5 flex items-center justify-between gap-3 text-xs">
                  <span className={errors.sites ? "text-coral-200" : "text-white/45"}>
                    {errors.sites ?? "Une adresse par ligne — la page d'agenda idéalement."}
                  </span>
                  <span className={`flex-none font-mono ${sites.length > MAX_SITES ? "text-coral-200" : "text-white/55"}`}>
                    {sites.length}/{MAX_SITES} site{sites.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Pot de miel anti-robots, invisible pour les humains */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Site de votre société
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {serverError ? (
                <p role="alert" className="rounded-xl border border-coral-400/40 bg-coral-500/10 px-4 py-3 text-sm text-coral-200 sm:col-span-2">
                  {serverError}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-white/45 sm:max-w-[260px]">
                  Vos informations servent uniquement à préparer votre test et à vous recontacter.
                </p>
                <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
                  {status === "sending" ? "Envoi en cours…" : "Lancer mon test gratuit"}
                  {status === "sending" ? null : <IconArrow />}
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
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-white/80">
      {text}
      <span className="ml-1 text-coral-200" aria-hidden="true">*</span>
    </label>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} className="mt-1.5 text-xs text-coral-200">
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
