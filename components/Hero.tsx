import { Threads } from "./Threads";

const FIELDS = [
  ["Date", "21 juin 2026, de 18 h à minuit"],
  ["Lieu", "Place du Marché, géolocalisée"],
  ["Catégorie", "Manifestation culturelle, musique"],
  ["Tarif", "Gratuit"],
  ["Organisateur", "Comité des fêtes"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 75% 55%, rgba(76,67,201,0.28), transparent 70%)" }}
      />

      <div className="wrap relative">
        <h1 className="reveal max-w-[19ch] text-[42px] font-light leading-[1.06] !text-white sm:text-[60px] lg:text-[70px]">
          Le web publie vos événements. Nous en faisons des données.
        </h1>

        <div className="mt-7 flex flex-col gap-8 sm:mt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="reveal max-w-[34rem] text-[17px] leading-[1.65] text-white/65 sm:text-lg" style={{ animationDelay: "150ms" }}>
            EventBridge capte en continu les agendas publiés par les communes, les associations,
            les salles et les billetteries, puis les normalise et les dédoublonne pour livrer à
            votre SIT des fiches fiables, sans ressaisie.
          </p>
          <div className="reveal flex flex-wrap items-center gap-x-7 gap-y-4" style={{ animationDelay: "250ms" }}>
            <a href="#test-gratuit" className="btn-light">
              Demander un test gratuit
            </a>
            <a href="#fonctionnement" className="link-quiet text-white/80 decoration-white/30 hover:text-white">
              Voir le fonctionnement
            </a>
          </div>
        </div>

        <div className="mt-12 grid items-center sm:mt-14 lg:grid-cols-[1fr_360px]">
          <Threads />

          <figure
            className="reveal relative mt-6 rounded-2xl bg-white p-6 text-body shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] lg:mt-0"
            style={{ animationDelay: "2.2s" }}
          >
            <figcaption className="text-[13px] text-muted">Fiche livrée au SIT</figcaption>
            <p className="mt-1 font-serif text-[26px] leading-tight text-ink">Fête de la musique</p>
            <dl className="mt-5 divide-y divide-line border-y border-line text-[14px]">
              {FIELDS.map(([k, v]) => (
                <div key={k} className="flex gap-4 py-2.5">
                  <dt className="w-[88px] flex-none text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex items-center gap-2 text-[13px] text-muted">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              Réunit trois annonces du même événement
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
