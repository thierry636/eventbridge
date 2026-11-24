import { IconArrow, IconBolt, IconCheck } from "./Icons";
import { FlowVisual } from "./FlowVisual";

export function Hero() {
  return (
    <section className="night-bg grid-overlay relative overflow-hidden pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12 [&>*]:min-w-0">
        <div className="animate-fade-up">
          <span className="pill-dark">
            <span className="live-dot" />
            Du web aux SIT, sans ressaisie
          </span>

          <h1 className="mt-6 text-[40px] font-bold leading-[1.02] sm:text-[52px] lg:text-[56px]">
            Des milliers d&apos;événements épars.{" "}
            <span className="gradient-text">Une seule base propre, prête pour votre SIT.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            EventBridge capte en continu le flux événementiel publié sur le web — sites de
            communes, associations, salles, billetteries, réseaux sociaux — puis le{" "}
            <strong className="font-semibold text-white">normalise</strong>,{" "}
            <strong className="font-semibold text-white">dédoublonne</strong> et le restitue en
            fiches structurées, directement intégrables dans votre système d&apos;information
            touristique.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#test-gratuit" className="btn-primary">
              Tester gratuitement sur mes sources
              <IconArrow />
            </a>
            <a href="#pipeline" className="btn-glass">
              Voir le pipeline
            </a>
          </div>

          <ul className="mt-10 grid max-w-lg grid-cols-1 gap-x-6 gap-y-3 text-sm text-white/70 sm:grid-cols-2">
            {[
              "Captation à grande échelle",
              "Normalisation au format SIT",
              "Dédoublonnage multi-sources",
              "Mises à jour détectées",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint-500/20 text-mint-300">
                  <IconCheck width={12} height={12} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <FlowVisual />
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="glass-card flex animate-float items-center gap-3 px-4 py-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-coral-500/20 text-coral-200">
                <IconBolt width={17} height={17} />
              </span>
              <div>
                <div className="text-sm font-semibold">Changement détecté</div>
                <div className="text-xs text-white/60">Concert du parc · horaire 20h → 21h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
