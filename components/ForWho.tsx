import { IBuilding, IDatabase, IMap, IGlobe } from "./Icons";

const AUDIENCES = [
  { icon: IGlobe, t: "Offices de tourisme", d: "Une offre événementielle exhaustive sur votre destination, sans y passer vos journées." },
  { icon: IMap, t: "Agences départementales et CRT", d: "Un flux homogène à l'échelle d'un département ou d'une région, quel que soit le nombre de sources." },
  { icon: IBuilding, t: "Intercommunalités et collectivités", d: "L'agenda de toutes vos communes valorisé, y compris celles qui n'alimentent jamais le SIT." },
  { icon: IDatabase, t: "Gestionnaires de SIT et réseaux", d: "Un apport de données qualifiées, normalisées et dédoublonnées, prêtes à entrer dans votre base." },
];

export function ForWho() {
  return (
    <section id="pour-qui" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Pour qui</p>
          <h2 className="h-section mx-auto mt-3 max-w-[18ch]">Pensé pour ceux qui alimentent les SIT.</h2>
          <p className="lede mx-auto mt-5 max-w-[38rem]">
            Les structures qui doivent garantir une offre événementielle complète, fiable et à
            jour, sur un territoire petit ou grand.
          </p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map(({ icon: Icon, t, d }) => (
            <li key={t} className="panel p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-iris text-white">
                <Icon width={18} height={18} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em]">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
