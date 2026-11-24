import { IconArrow } from "./Icons";
import { FluxBand } from "./FluxBand";

const PROOF = [
  { v: "Des centaines", k: "de sources surveillées en continu" },
  { v: "1 fiche", k: "par événement, quel que soit le nombre d'annonces" },
  { v: "0 ressaisie", k: "du web jusqu'à votre SIT" },
];

export function Hero() {
  return (
    <section className="night-bg grid-overlay relative overflow-hidden pb-16 pt-28 text-white sm:pb-24 sm:pt-32">
      {/* halo central derrière le titre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[120px]"
      />

      <div className="container-x relative z-10 text-center">
        <span className="pill-dark animate-fade-up">
          <span className="live-dot" />
          Du web aux SIT, sans ressaisie
        </span>

        <h1 className="mx-auto mt-7 max-w-[1100px] text-[44px] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[72px] lg:text-[96px]">
          <span className="block animate-word-in">Tout l&apos;agenda du web.</span>
          <span className="mt-2 block sm:mt-3">
            {["Capté.", "Normalisé.", "Dédoublonné."].map((w, i) => (
              <span
                key={w}
                className="hero-gradient inline-block animate-word-in pr-[0.18em] last:pr-0"
                style={{ animationDelay: `${250 + i * 180}ms` }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-2xl animate-fade-up text-base leading-relaxed text-white/70 sm:text-xl"
          style={{ animationDelay: "800ms" }}
        >
          Sites de communes, associations, salles, billetteries, réseaux sociaux : EventBridge
          avale le flux événementiel de tout votre territoire et le restitue en{" "}
          <strong className="font-semibold text-white">une seule base propre</strong>, prête à
          entrer dans votre SIT.
        </p>

        <div
          className="mt-9 flex animate-fade-up flex-col justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "950ms" }}
        >
          <a href="#test-gratuit" className="btn-primary sm:!px-7 sm:!py-4 sm:!text-base">
            Tester gratuitement sur mes sources
            <IconArrow />
          </a>
          <a href="#pipeline" className="btn-glass sm:!px-7 sm:!py-4 sm:!text-base">
            Voir le pipeline
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-14 animate-fade-up px-4 sm:mt-16 sm:px-8" style={{ animationDelay: "1100ms" }}>
        <FluxBand />
      </div>

      <div className="container-x relative z-10 mt-14 sm:mt-20">
        <dl className="grid gap-6 border-t border-white/10 pt-10 text-center sm:grid-cols-3">
          {PROOF.map((p) => (
            <div key={p.v}>
              <dt className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                <span className="gradient-text">{p.v}</span>
              </dt>
              <dd className="mt-2 text-sm text-white/55">{p.k}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
