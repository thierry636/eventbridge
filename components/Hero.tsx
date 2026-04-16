import { HeroMap } from "./HeroMap";

export function Hero() {
  return (
    <section
      id="produit"
      className="relative overflow-hidden bg-hero-gradient pt-12 pb-24 sm:pt-20 sm:pb-32"
    >
      {/* decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="animate-fade-up">
          <span className="pill">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Plateforme dédiée aux territoires · Données ouvertes &amp; temps réel
          </span>

          <h1 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-[56px] lg:text-[64px]">
            Centralisez et diffusez les{" "}
            <span className="text-brand-600">événements</span> de votre
            territoire.
          </h1>

          <p className="mt-6 max-w-xl text-base text-ink-700 sm:text-lg">
            EventBridge collecte automatiquement les événements culturels
            publiés sur votre territoire, les normalise au standard{" "}
            <strong className="font-semibold text-ink-900">
              Apidae / DATAtourisme
            </strong>
            , et les diffuse en temps réel sur tous vos canaux.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#demo" className="btn-primary">
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
            </a>
            <a href="#how" className="btn-secondary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 2.5v9l8-4.5-8-4.5Z"
                  fill="currentColor"
                />
              </svg>
              Voir comment ça marche
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-500">
            <span className="inline-flex items-center gap-2">
              <Check />
              Compatible Apidae
            </span>
            <span className="inline-flex items-center gap-2">
              <Check />
              DATAtourisme
            </span>
            <span className="inline-flex items-center gap-2">
              <Check />
              Hébergement France
            </span>
            <span className="inline-flex items-center gap-2">
              <Check />
              Conforme RGPD
            </span>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <HeroMap />
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path
          d="M2 5.2 4 7l4-4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
