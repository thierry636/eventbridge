import { IBolt, IGlobe, IMerge, IEye } from "./Icons";
import { SnapRail } from "./SnapRail";

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
    d: "Un horaire décalé, une annulation : rien ne prévient votre équipe, et la fiche publiée devient fausse.",
  },
  {
    icon: IEye,
    t: "La ressaisie épuise les équipes",
    d: "Copier, reformater, catégoriser, géolocaliser : des heures de saisie chaque semaine, pour un résultat incomplet.",
  },
];

const FORMATS = ["Apidae", "Ontologie DATAtourisme", "API REST", "JSON structuré", "Géocodage des lieux"];

export function Problem() {
  return (
    <section className="bg-white pb-20 pt-[11.5rem] sm:pb-28 sm:pt-[20rem]">
      <div className="wrap">
        <div className="flex flex-col items-center gap-5 border-b border-line pb-12 text-center sm:pb-14">
          <p className="text-[14px] text-muted">Des fiches conformes aux référentiels du tourisme</p>
          <div className="marquee -mx-4 w-[calc(100%+2rem)] overflow-hidden sm:hidden" aria-hidden="true">
            <div className="marquee-track flex w-max gap-10 text-[16px] font-semibold tracking-[-0.02em] text-ink/45">
              {[...FORMATS, ...FORMATS].map((f, i) => (
                <span key={i} className="whitespace-nowrap">{f}</span>
              ))}
            </div>
          </div>
          <ul className="sr-only sm:not-sr-only sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-3 sm:text-[16px] sm:font-semibold sm:tracking-[-0.02em] sm:text-ink/45">
            {FORMATS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-10 sm:mt-20 sm:gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div data-reveal>
            <p className="kicker">Le constat</p>
            <h2 className="h-section mt-3 max-w-[16ch]">Le web publie plus d&apos;événements que vos équipes ne peuvent en saisir.</h2>
            <p className="lede mt-5 max-w-[30rem]">
              Sur un territoire, l&apos;offre événementielle réelle est bien plus riche que ce qui
              arrive jusqu&apos;au système d&apos;information touristique. Elle existe pourtant, en ligne : il suffit de la capter à
              grande échelle et de la remettre en forme.
            </p>
          </div>
          <div data-reveal className="min-w-0">
          <SnapRail className="sm:grid sm:grid-cols-2 sm:gap-4">
            {POINTS.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="panel relative overflow-hidden p-6 max-sm:min-h-[230px]">
                <span aria-hidden="true" className="absolute -right-2 -top-5 text-[92px] font-semibold leading-none tracking-[-0.06em] text-ink/[0.04] sm:hidden">
                  0{i + 1}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper text-ink max-sm:bg-iris max-sm:text-white">
                  <Icon width={17} height={17} />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em]">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </SnapRail>
          </div>
        </div>
      </div>
    </section>
  );
}
