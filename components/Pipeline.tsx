const STEPS = [
  { t: "Captation", d: "Vos sources sont parcourues en continu : agendas, pages détail, programmes PDF, publications." },
  { t: "Lecture", d: "L'IA lit chaque contenu et isole les événements : titre, dates, lieu, tarif, contact." },
  { t: "Normalisation", d: "Formats standard, adresses géocodées, catégories alignées sur le référentiel du SIT." },
  { t: "Dédoublonnage", d: "Un événement vu sur plusieurs sources devient une fiche unique, enrichie de chacune." },
  { t: "Suivi", d: "Horaire modifié, report, annulation : chaque changement est repéré et tracé." },
  { t: "Relecture et livraison", d: "Votre équipe valide, la fiche part dans le SIT ou par API." },
];

export function Pipeline() {
  return (
    <section id="fonctionnement" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[5fr_6fr] lg:gap-24">
          <h2 className="h-section max-w-[14ch]">De la page web à la fiche SIT, en six étapes.</h2>
          <p className="lede max-w-[32rem] lg:pt-3">
            Chaque événement suit la même chaîne de traitement. EventBridge automatise le travail
            répétitif ; vous gardez la décision sur ce qui est publié.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-0 lg:mt-20 lg:grid-cols-6 lg:gap-8">
          <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[5px] lg:h-px lg:w-auto" />
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative pb-9 pl-9 lg:pb-0 lg:pl-0 lg:pt-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 lg:top-0 ${
                  i === STEPS.length - 1 ? "border-iris bg-iris" : "border-iris bg-paper"
                }`}
              />
              <span className="text-[13px] tabular-nums text-muted">Étape {i + 1}</span>
              <h3 className="mt-1 font-sans text-[17px] font-medium tracking-normal">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
