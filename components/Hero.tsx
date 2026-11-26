import { AppMockup } from "./AppMockup";
import { PhoneMockup } from "./PhoneMockup";
import { BOOKING_URL } from "@/lib/booking";
import { IArrow, ICheck } from "./Icons";

const PILLARS = ["Captation à grande échelle", "Normalisation des données", "Dédoublonnage multi-sources", "Détection des changements"];

export function Hero() {
  return (
    <section className="relative overflow-x-clip bg-ink pt-28 text-white sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 0%, rgba(76,67,201,0.45), transparent 70%), radial-gradient(40% 40% at 90% 60%, rgba(76,67,201,0.18), transparent 70%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora aurora-a left-[-10%] top-[8%] h-[340px] w-[340px] bg-iris sm:h-[520px] sm:w-[520px]" />
        <div className="aurora aurora-b right-[-15%] top-[38%] h-[300px] w-[300px] bg-[#D9604E]/50 sm:h-[460px] sm:w-[460px]" />
      </div>
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
          <span className="sm:hidden">Testez sur vos sources</span><span className="hidden sm:inline">Testez Agendata sur vos propres sources</span>
          <IArrow width={13} height={13} />
        </a>

        <h1
          className="reveal mx-auto mt-6 max-w-[20ch] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-7 !text-white sm:text-[56px] lg:text-[66px]"
          style={{ animationDelay: "80ms" }}
        >
          Le flux événementiel du web,{" "}
          <span className="shimmer-text">capté, analysé, restitué.</span>
        </h1>

        <p
          className="reveal mx-auto mt-5 max-w-[34rem] text-[16.5px] leading-[1.55] text-white/65 sm:hidden"
          style={{ animationDelay: "160ms" }}
        >
          Les événements publiés partout sur le web, analysés par l&apos;IA, dédoublonnés et livrés
          en fiches prêtes pour votre système d&apos;information touristique (Apidae, …).
        </p>
        <p
          className="reveal mx-auto mt-6 hidden max-w-[42rem] text-[17px] leading-[1.6] text-white/65 sm:block sm:text-[19px]"
          style={{ animationDelay: "160ms" }}
        >
          Agendata capte en continu les événements publiés par les communes, associations,
          salles et billetteries, les analyse avec l&apos;IA, les normalise, les dédoublonne et
          les restitue en fiches prêtes pour votre système d&apos;information touristique (Apidae, …).
        </p>

        <div className="reveal mt-8 flex flex-col justify-center gap-2.5 sm:mt-9 sm:flex-row sm:gap-3" style={{ animationDelay: "240ms" }}>
          <a
            href="#test-gratuit"
            className="btn-iris group relative overflow-hidden !px-6 !py-4 shadow-[0_10px_40px_-10px_rgba(76,67,201,0.9)] active:scale-[0.98] sm:!py-3.5"
          >
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              Tester gratuitement sur mes sources
              <IArrow width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !px-6 !py-4 border border-white/15 text-white backdrop-blur hover:bg-white/[0.06] active:scale-[0.98] sm:!py-3.5"
          >
            Prendre rendez-vous
          </a>
        </div>

        <ul
          className="reveal mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2 text-left text-[12.5px] text-white/70 sm:mt-9 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-2.5 sm:text-[14px] sm:text-white/60"
          style={{ animationDelay: "320ms" }}
        >
          {PILLARS.map((p) => (
            <li
              key={p}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 leading-tight sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
            >
              <ICheck width={15} height={15} className="flex-none text-iris-light" strokeWidth={2.2} />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* capture produit qui déborde sur la section suivante */}
      <div className="relative mt-14 pb-4 sm:hidden">
        <div className="reveal relative z-10 -mb-32" style={{ animationDelay: "420ms" }}>
          <PhoneMockup />
        </div>
      </div>
      <div className="wrap relative mt-16 hidden sm:mt-20 sm:block">
        <div className="reveal relative z-10 -mb-40 sm:-mb-56" style={{ animationDelay: "420ms" }}>
          <div aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-1/2 -z-10 rounded-[40px] bg-iris/30 blur-3xl" />
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
