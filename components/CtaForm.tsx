"use client";

import { useState, type FormEvent } from "react";

export function CtaForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="demo"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white"
      />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-brand-600" />
            Démo personnalisée
          </span>
          <h2 className="section-title">
            Prêt à connecter votre territoire ?
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            Présentation 30 minutes, sans engagement. Nous ferons un focus sur
            les sources et les besoins spécifiques de votre territoire.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5 10 17l9-9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-ink-900">
                  Demande reçue, merci !
                </h3>
                <p className="max-w-md text-sm text-ink-500">
                  Notre équipe revient vers vous sous 24h ouvrées pour caler
                  un créneau de démo adapté à votre territoire.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Field
                  label="Nom"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Camille Dupont"
                />
                <Field
                  label="Email professionnel"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="prenom.nom@territoire.fr"
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Territoire"
                    name="territory"
                    type="text"
                    required
                    placeholder="Office de tourisme de…, Région…, EPCI…"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-ink-500">
                    En soumettant ce formulaire, vous acceptez d'être recontacté
                    par notre équipe.
                  </p>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Demander une démo
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, ...rest }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-ink-700">
        {label}
        {rest.required ? (
          <span className="ml-1 text-brand-600" aria-hidden="true">
            *
          </span>
        ) : null}
      </span>
      <input
        id={name}
        name={name}
        {...rest}
        className="block w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-100"
      />
    </label>
  );
}
