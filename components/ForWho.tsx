const AUDIENCES = [
  {
    title: "Offices de tourisme",
    text: "Une offre événementielle exhaustive sur votre destination, sans y passer vos journées.",
  },
  {
    title: "Agences départementales & CRT",
    text: "Un flux homogène à l'échelle de tout un département ou d'une région, quel que soit le nombre de sources.",
  },
  {
    title: "Intercommunalités & collectivités",
    text: "Valorisez l'agenda de toutes vos communes, y compris celles qui n'alimentent jamais le SIT.",
  },
  {
    title: "Gestionnaires de SIT & réseaux",
    text: "Un apport de données qualifiées, normalisées et dédoublonnées, prêtes à entrer dans votre base.",
  },
];

export function ForWho() {
  return (
    <section id="pour-qui" className="scroll-mt-16 bg-ink-50 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-indigo-500" />
              Pour qui ?
            </span>
            <h2 className="section-title">Pensé pour ceux qui alimentent les SIT.</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              EventBridge s&apos;adresse aux structures qui doivent garantir une offre événementielle
              complète, fiable et à jour — sur un territoire, petit ou grand.
            </p>
            <a href="#test-gratuit" className="btn-primary mt-8">
              Tester sur mon territoire
            </a>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {AUDIENCES.map((a, i) => (
              <li key={a.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <span className="font-mono text-xs text-indigo-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
