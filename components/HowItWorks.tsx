import type { ReactNode } from "react";

const STEPS: Array<{
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
}> = [
  {
    number: "01",
    title: "Collecte automatique",
    description:
      "Scan continu des sites web, agendas, billetteries et réseaux sociaux des acteurs culturels du territoire.",
    accent: "bg-brand-50 text-brand-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Normalisation par IA",
    description:
      "Extraction et structuration au format Apidae / DATAtourisme : dates, lieux, tarifs, accessibilité.",
    accent: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 7h10M5 12h14M5 17h8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="19" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Détection des changements",
    description:
      "Suivi en temps réel des modifications : annulations, reports, nouveaux événements, mises à jour de programmation.",
    accent: "bg-amber-50 text-amber-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Diffusion multi-canaux",
    description:
      "Publication automatique vers Apidae, votre site, vos partenaires et vos applications mobiles.",
    accent: "bg-brand-50 text-brand-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 12h6l2-3 4 6 2-3h2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="12" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-brand-600" />
            Comment ça marche
          </span>
          <h2 className="section-title">
            De la donnée brute à la diffusion, en quatre étapes.
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            EventBridge automatise toute la chaîne, de la collecte à la
            redistribution, sans saisie manuelle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="card card-hover relative flex flex-col"
            >
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${step.accent}`}
              >
                <span className="block h-5 w-5">{step.icon}</span>
              </div>
              <span className="text-xs font-semibold tracking-[0.18em] text-ink-400">
                ÉTAPE {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>

              {/* connector arrow */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-ink-200 lg:block"
                >
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path
                      d="M0 6h22M16 1l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
