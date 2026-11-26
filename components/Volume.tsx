import { Threads } from "./Threads";
import { ThreadsMobile } from "./ThreadsMobile";

const FIELDS = [
  ["Date", "21 juin 2026, 18:00 – 23:59"],
  ["Lieu", "Place du Marché, Die"],
  ["Catégorie", "Manifestation › Musique"],
  ["Tarif", "Gratuit"],
  ["Sources", "3 annonces fusionnées"],
];

const FACTS = [
  { t: "Des centaines de sources", d: "par territoire, ajoutées en quelques minutes." },
  { t: "Passages réguliers", d: "chaque source est revisitée pour suivre les nouveautés." },
  { t: "Tous les formats", d: "pages HTML, PDF, images et publications sociales." },
  { t: "Zéro ressaisie", d: "du web jusqu'à la fiche publiée dans votre base touristique." },
];

export function Volume() {
  return (
    <section id="volume" className="relative scroll-mt-[72px] overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 50% at 70% 55%, rgba(76,67,201,0.3), transparent 70%)" }}
      />
      <div className="wrap relative">
        <div data-reveal className="grid gap-6 lg:grid-cols-[6fr_5fr] lg:items-end lg:gap-20">
          <div>
            <p className="kicker !text-iris-light">Toutes vos sources</p>
            <h2 className="h-section mt-3 max-w-[18ch] !text-white">
              Des centaines de sources en entrée. Une seule fiche en sortie.
            </h2>
          </div>
          <p className="max-w-[32rem] text-[17px] leading-[1.6] text-white/60">
            Chaque source tire ses annonces, souvent les mêmes, dans des formats différents.
            Agendata les fait converger : un événement, une fiche, prête pour votre système d&apos;information touristique.
          </p>
        </div>

        <div className="mt-12 grid items-center sm:mt-14 lg:grid-cols-[1fr_340px]">
          <div className="lg:hidden">
            <ThreadsMobile />
          </div>
          <div className="hidden lg:block">
            <Threads />
          </div>
          <figure data-reveal className="relative mt-2 rounded-2xl bg-white p-6 text-body shadow-float max-lg:shadow-[0_30px_80px_-20px_rgba(76,67,201,0.75)] lg:mt-0">
            <figcaption className="flex items-center justify-between">
              <span className="text-[12.5px] text-muted">Fiche livrée à Apidae</span>
              <span className="badge bg-sage/10 text-sage">Prêt pour Apidae</span>
            </figcaption>
            <p className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-ink">Fête de la musique</p>
            <dl className="mt-4 divide-y divide-line border-y border-line text-[13.5px]">
              {FIELDS.map(([k, v]) => (
                <div key={k} className="flex gap-4 py-2.5">
                  <dt className="w-[78px] flex-none text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </figure>
        </div>

        <dl data-reveal-stagger="90" className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.t} className="bg-ink-2 p-4 sm:p-6">
              <dt className="text-[15px] font-semibold leading-snug tracking-[-0.02em] sm:text-[17px]">{f.t}</dt>
              <dd className="mt-1.5 text-[13px] leading-snug text-white/55 sm:text-[14.5px]">{f.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
