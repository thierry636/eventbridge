const SOURCE_TYPES = [
  { label: "Sites des communes", detail: "Agendas municipaux, actualités, bulletins" },
  { label: "Associations & comités", detail: "Sites, blogs, pages d'agenda partagées" },
  { label: "Salles & lieux culturels", detail: "Programmations de saison, théâtres, musées" },
  { label: "Billetteries", detail: "Plateformes de réservation et de vente" },
  { label: "Réseaux sociaux", detail: "Pages publiques et publications d'événements" },
  { label: "Documents", detail: "Programmes PDF, affiches, flyers en ligne" },
];

const PAINS = [
  {
    title: "L'information est éclatée",
    text: "Un même territoire publie ses événements sur des centaines de pages, dans des formats qui ne se ressemblent jamais.",
  },
  {
    title: "Les doublons s'accumulent",
    text: "La fête du village est annoncée par la mairie, le comité des fêtes et la page Facebook — trois fois, trois versions.",
  },
  {
    title: "Les mises à jour passent inaperçues",
    text: "Un horaire décalé, une annulation : rien ne prévient votre équipe, et la fiche publiée devient fausse.",
  },
  {
    title: "La ressaisie épuise les équipes",
    text: "Copier, reformater, catégoriser, géolocaliser… des heures de saisie à faible valeur, chaque semaine.",
  },
];

export function Captation() {
  return (
    <section id="captation" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-indigo-500" />
              Le constat
            </span>
            <h2 className="section-title">
              Le web publie plus d&apos;événements que vos équipes ne peuvent en saisir.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Sur un territoire, l&apos;offre événementielle réelle est bien plus riche que ce qui
              arrive jusqu&apos;au système d&apos;information touristique. Elle existe pourtant, en ligne : il suffit de savoir la capter
              à grande échelle — et de la remettre en forme.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {PAINS.map((p) => (
                <div key={p.title} className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-ink-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl night-bg-soft p-6 text-white sm:p-8">
            <span className="eyebrow-dark">
              <span className="h-px w-6 bg-indigo-200" />
              Captation massive
            </span>
            <h3 className="text-2xl font-bold leading-tight sm:text-[30px]">
              Toutes les sources du territoire, surveillées en continu.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
              Vous nous donnez les adresses, ou nous les identifions avec vous. EventBridge les
              parcourt à intervalle régulier, suit la pagination et les pages de détail, et lit
              aussi bien le HTML que les PDF et les images.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {SOURCE_TYPES.map((s) => (
                <li key={s.label} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="mt-0.5 text-xs text-white/55">{s.detail}</div>
                </li>
              ))}
            </ul>

            <dl className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {[
                { v: "100+", k: "sources par territoire" },
                { v: "24/7", k: "surveillance des pages" },
                { v: "0", k: "ressaisie manuelle" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="sr-only">{s.k}</dt>
                  <dd className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    <span className="gradient-text">{s.v}</span>
                  </dd>
                  <dd className="mt-1 text-[11px] leading-snug text-white/55 sm:text-xs">{s.k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
