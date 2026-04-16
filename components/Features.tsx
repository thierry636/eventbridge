import type { ReactNode } from "react";

const FEATURES: Array<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Connecteurs Apidae & DATAtourisme natifs",
    description:
      "Synchronisation bidirectionnelle, sans configuration complexe et sans intermédiaire.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 8h-2a4 4 0 0 0 0 8h2M15 8h2a4 4 0 0 1 0 8h-2M9 12h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Extraction IA multi-sources",
    description:
      "Web, PDF, réseaux sociaux : EventBridge comprend les contenus comme un humain le ferait.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l2 4 4 .6-3 3 .8 4.4L12 13l-3.8 2 .8-4.4-3-3 4-.6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Déduplication intelligente",
    description:
      "Reconnaissance des doublons même si le titre, l'horaire ou l'adresse varient légèrement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Tableau de bord de monitoring",
    description:
      "Suivi en temps réel des sources, anomalies, taux de couverture et qualité de la donnée.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 19V5M4 19h16M8 15v-3M12 15V8M16 15v-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "API publique & webhooks",
    description:
      "Une API REST documentée et des webhooks pour brancher EventBridge à tout votre écosystème.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 6l-4 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Conformité RGPD & hébergement France",
    description:
      "Données hébergées en France chez un hébergeur SecNumCloud, conformité RGPD garantie.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-brand-600" />
            Fonctionnalités clés
          </span>
          <h2 className="section-title">
            Tout ce qu'il faut pour piloter la donnée événementielle d'un
            territoire.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card card-hover">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <span className="block h-5 w-5">{f.icon}</span>
              </div>
              <h3 className="text-base font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
