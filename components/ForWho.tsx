import { IBuilding, IDatabase, IMap, IGlobe } from "./Icons";
import { SnapRail } from "./SnapRail";

const AUDIENCES = [
  { icon: IGlobe, t: "Offices de tourisme", d: "Une offre événementielle exhaustive sur votre destination, sans y passer vos journées." },
  { icon: IMap, t: "Agences départementales et CRT", d: "Un flux homogène à l'échelle d'un département ou d'une région, quel que soit le nombre de sources." },
  { icon: IBuilding, t: "Intercommunalités et collectivités", d: "L'agenda de toutes vos communes valorisé, y compris celles qui n'alimentent jamais votre base touristique." },
  { icon: IDatabase, t: "Gestionnaires de bases touristiques (Apidae, …)", d: "Un apport de données qualifiées, normalisées et dédoublonnées, prêtes à entrer dans votre base." },
];

export function ForWho() {
  return (
    <section id="pour-qui" className="scroll-mt-[72px] bg-white py-20 sm:py-28">
      <div className="wrap">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="kicker">Pour qui</p>
          <h2 className="h-section mx-auto mt-3 max-w-[22ch]">Pensé pour ceux qui alimentent les systèmes d&apos;information touristique.</h2>
          <p className="lede mx-auto mt-5 max-w-[38rem]">
            Les structures qui doivent garantir une offre événementielle complète, fiable et à
            jour, sur un territoire petit ou grand.
          </p>
        </div>
        <div data-reveal className="mt-10 sm:mt-14">
        <SnapRail className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {AUDIENCES.map(({ icon: Icon, t, d }) => (
            <div key={t} className="panel relative overflow-hidden p-6 max-sm:min-h-[220px]">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-iris/10 blur-2xl sm:hidden" />
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-iris text-white">
                <Icon width={18} height={18} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em]">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </SnapRail>
        </div>
      </div>
    </section>
  );
}
