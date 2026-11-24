const POINTS = [
  {
    t: "L'information est éparpillée",
    d: "Un même territoire annonce ses événements sur des centaines de pages, dans des formats qui ne se ressemblent jamais.",
  },
  {
    t: "Les doublons s'accumulent",
    d: "La fête du village est annoncée par la mairie, le comité et l'association, chaque fois dans une version différente.",
  },
  {
    t: "Les changements passent inaperçus",
    d: "Un horaire décalé ou une annulation ne prévient personne, et la fiche publiée devient fausse.",
  },
  {
    t: "La ressaisie use les équipes",
    d: "Copier, reformater, catégoriser, géolocaliser : des heures chaque semaine, pour un résultat toujours incomplet.",
  },
];

export function Problem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div>
          <h2 className="h-section max-w-[16ch]">Votre territoire publie bien plus qu&apos;il n&apos;en arrive au SIT.</h2>
          <p className="lede mt-6 max-w-[30rem]">
            L&apos;offre événementielle existe, en ligne. Elle est simplement dispersée,
            redondante et changeante. EventBridge la rassemble à grande échelle et la remet en
            forme.
          </p>
        </div>
        <dl className="border-t border-line">
          {POINTS.map((p) => (
            <div key={p.t} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <dt className="font-medium text-ink">{p.t}</dt>
              <dd className="text-muted">{p.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
