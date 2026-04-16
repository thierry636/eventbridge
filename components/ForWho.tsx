import type { ReactNode } from "react";

const AUDIENCES: Array<{
  title: string;
  description: string;
  icon: ReactNode;
  bullets: string[];
}> = [
  {
    title: "Offices de tourisme",
    description:
      "Enrichissez votre base Apidae sans saisie manuelle, et garantissez une information à jour pour vos visiteurs.",
    bullets: [
      "Synchronisation Apidae bidirectionnelle",
      "Modération assistée par IA",
      "Couverture de toute l'offre du territoire",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 20V10l8-6 8 6v10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 20v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Collectivités & EPCI",
    description:
      "Valorisez l'offre culturelle de votre territoire en un clic, et alimentez votre site et vos partenaires.",
    bullets: [
      "Widget agenda intégrable",
      "Connecteur site web (WordPress, Drupal…)",
      "Statistiques de fréquentation par commune",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 21V8l9-5 9 5v13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 21v-7M15 21v-7M3 21h18"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "Départements & Régions",
    description:
      "Agrégez et redistribuez les événements à l'échelle régionale, avec une qualité de donnée homogène.",
    bullets: [
      "Tableau de bord multi-territoires",
      "Export DATAtourisme natif",
      "API publique pour vos partenaires",
    ],
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
];

export function ForWho() {
  return (
    <section
      id="pour-qui"
      className="bg-ink-50 py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-brand-600" />
            Pour qui ?
          </span>
          <h2 className="section-title">
            Conçu pour les acteurs publics du tourisme et de la culture.
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            Une plateforme unique, des usages adaptés à chaque échelle de
            territoire.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <article key={a.title} className="card card-hover flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                <span className="block h-6 w-6">{a.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {a.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5.2 4 7l4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
