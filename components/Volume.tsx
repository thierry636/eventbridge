import { Threads } from "./Threads";

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
    <section id="volume" className="relative scroll-mt-20 overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 50% at 70% 55%, rgba(76,67,201,0.3), transparent 70%)" }}
      />
      <div className="wrap relative">
        <div className="grid gap-6 lg:grid-cols-[6fr_5fr] lg:items-end lg:gap-20">
          <div>
            <p className="kicker !text-iris-light">Conçu pour le volume</p>
            <h2 className="h-section mt-3 max-w-[18ch] !text-white">
              Des centaines de sources en entrée. Une seule fiche en sortie.
            </h2>
          </div>
          <p className="max-w-[32rem] text-[17px] leading-[1.6] text-white/60">
            Chaque source tire ses annonces, souvent les mêmes, dans des formats différents.
            EventBridge les fait converger : un événement, une fiche, prête pour votre système d&apos;information touristique.
          </p>
        </div>

        <div className="mt-14 grid items-center lg:grid-cols-[1fr_340px]">
          <Threads />
          <figure className="relative mt-6 rounded-2xl bg-white p-6 text-body shadow-float lg:mt-0">
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

        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.t} className="bg-ink-2 p-6">
              <dt className="text-[17px] font-semibold tracking-[-0.02em]">{f.t}</dt>
              <dd className="mt-1.5 text-[14.5px] text-white/55">{f.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
