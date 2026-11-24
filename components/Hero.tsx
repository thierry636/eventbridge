import { AppMockup } from "./AppMockup";
import { IArrow, ICheck } from "./Icons";

const PILLARS = ["Captation à grande échelle", "Normalisation des données", "Dédoublonnage multi-sources", "Détection des changements"];

export function Hero() {
  return (
    <section className="relative overflow-x-clip bg-ink pt-32 text-white sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 0%, rgba(76,67,201,0.45), transparent 70%), radial-gradient(40% 40% at 90% 60%, rgba(76,67,201,0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(60%_50%_at_50%_20%,#000,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="wrap relative text-center">
        <a
          href="#test-gratuit"
          className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 text-[13px] text-white/80 transition-colors hover:bg-white/10"
        >
          <span className="rounded-full bg-iris px-2 py-0.5 text-[11.5px] font-medium text-white">Gratuit</span>
          <span className="sm:hidden">Testez sur vos sources</span><span className="hidden sm:inline">Testez EventBridge sur vos propres sources</span>
          <IArrow width={13} height={13} />
        </a>

        <h1
          className="reveal mx-auto mt-7 max-w-[20ch] text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] !text-white sm:text-[56px] lg:text-[66px]"
          style={{ animationDelay: "80ms" }}
        >
          Le flux événementiel du web,{" "}
          <span className="text-white/55">capté, analysé, restitué.</span>
        </h1>

        <p
          className="reveal mx-auto mt-6 max-w-[42rem] text-[17px] leading-[1.6] text-white/65 sm:text-[19px]"
          style={{ animationDelay: "160ms" }}
        >
          EventBridge capte en continu les événements publiés par les communes, associations,
          salles et billetteries, les analyse avec l&apos;IA, les normalise, les dédoublonne et
          les restitue en fiches prêtes pour votre système d&apos;information touristique (Apidae, …).
        </p>

        <div className="reveal mt-9 flex flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <a href="#test-gratuit" className="btn-iris !px-6 !py-3.5">
            Tester gratuitement sur mes sources
          </a>
          <a href="#fonctionnement" className="btn !px-6 !py-3.5 border border-white/15 text-white hover:bg-white/[0.06]">
            Découvrir le fonctionnement
          </a>
        </div>

        <ul
          className="reveal mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-x-7 gap-y-2.5 text-[14px] text-white/60"
          style={{ animationDelay: "320ms" }}
        >
          {PILLARS.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <ICheck width={15} height={15} className="text-iris-light" strokeWidth={2.2} />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* capture produit qui déborde sur la section suivante */}
      <div className="wrap relative mt-16 sm:mt-20">
        <div className="reveal relative z-10 -mb-40 sm:-mb-56" style={{ animationDelay: "420ms" }}>
          <div aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-1/2 -z-10 rounded-[40px] bg-iris/30 blur-3xl" />
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
