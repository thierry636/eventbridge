const AUDIENCES = [
  { t: "Offices de tourisme", d: "Une offre événementielle complète sur votre destination, sans y consacrer vos journées." },
  { t: "Agences départementales et comités régionaux", d: "Un flux homogène à l'échelle d'un département ou d'une région, quel que soit le nombre de sources." },
  { t: "Intercommunalités et collectivités", d: "L'agenda de toutes vos communes valorisé, y compris celles qui n'alimentent jamais le SIT." },
  { t: "Gestionnaires de SIT et réseaux", d: "Des données qualifiées, normalisées et dédoublonnées, prêtes à entrer dans votre base." },
];

export function ForWho() {
  return (
    <section id="pour-qui" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div>
          <h2 className="h-section max-w-[14ch]">Pour celles et ceux qui alimentent les SIT.</h2>
          <p className="lede mt-6 max-w-[30rem]">
            Des structures qui doivent garantir une offre événementielle complète, fiable et à
            jour, sur un territoire petit ou grand.
          </p>
        </div>
        <ul className="border-t border-ink/10">
          {AUDIENCES.map((a) => (
            <li key={a.t} className="border-b border-ink/10 py-6">
              <h3 className="font-serif text-[24px] leading-snug">{a.t}</h3>
              <p className="mt-1.5 max-w-[36rem] text-muted">{a.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
