import { IBolt, IGlobe, IMerge, IEye } from "./Icons";

const POINTS = [
  {
    icon: IGlobe,
    t: "L'information est éclatée",
    d: "Un même territoire publie ses événements sur des centaines de pages, dans des formats qui ne se ressemblent jamais.",
  },
  {
    icon: IMerge,
    t: "Les doublons s'accumulent",
    d: "La fête du village est annoncée par la mairie, le comité et l'association : trois fois, trois versions.",
  },
  {
    icon: IBolt,
    t: "Les mises à jour passent inaperçues",
    d: "Un horaire décalé, une annulation : rien ne prévient votre équipe, et la fiche du SIT devient fausse.",
  },
  {
    icon: IEye,
    t: "La ressaisie épuise les équipes",
    d: "Copier, reformater, catégoriser, géolocaliser : des heures de saisie chaque semaine, pour un résultat incomplet.",
  },
];

const FORMATS = ["Référentiel de votre SIT", "Ontologie DATAtourisme", "API REST", "JSON structuré", "Géocodage des lieux"];

export function Problem() {
  return (
    <section className="bg-white pb-20 pt-[14rem] sm:pb-28 sm:pt-[20rem]">
      <div className="wrap">
        <div className="flex flex-col items-center gap-5 border-b border-line pb-14 text-center">
          <p className="text-[14px] text-muted">Des fiches conformes aux référentiels du tourisme</p>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[16px] font-semibold tracking-[-0.02em] text-ink/45">
            {FORMATS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <p className="kicker">Le constat</p>
            <h2 className="h-section mt-3 max-w-[16ch]">Le web publie plus d&apos;événements que vos équipes ne peuvent en saisir.</h2>
            <p className="lede mt-5 max-w-[30rem]">
              Sur un territoire, l&apos;offre événementielle réelle est bien plus riche que ce qui
              arrive jusqu&apos;au SIT. Elle existe pourtant, en ligne : il suffit de la capter à
              grande échelle et de la remettre en forme.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map(({ icon: Icon, t, d }) => (
              <div key={t} className="panel p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper text-ink">
                  <Icon width={17} height={17} />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em]">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
