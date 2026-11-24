const FAQ = [
  {
    q: "Quelles sources EventBridge sait-il capter ?",
    a: "Tout ce qui est publié publiquement sur le web : sites de communes et d'intercommunalités, associations, salles et lieux culturels, billetteries, pages publiques de réseaux sociaux, ainsi que les programmes en PDF ou en image. Nous validons ensemble la liste lors du test gratuit.",
  },
  {
    q: "Comment les événements arrivent-ils dans notre système d'information touristique ?",
    a: "Les fiches sont mises en forme selon le référentiel de votre système d'information touristique (catégories, champs, formats), puis créées et mises à jour directement dans votre base (Apidae, …). Elles peuvent aussi être exposées par API ou par export standardisé pour vos autres outils.",
  },
  {
    q: "Comment fonctionne le dédoublonnage ?",
    a: "EventBridge compare les événements par le sens — dates, lieu, organisateur, contenu — et pas seulement par le titre. Un événement annoncé sur trois sources devient une fiche unique, qui réunit les meilleures informations de chacune en conservant leur provenance.",
  },
  {
    q: "Que se passe-t-il si un événement change ou est annulé ?",
    a: "Les sources sont surveillées en continu. Une modification d'horaire, de tarif ou une annulation est détectée, présentée à votre équipe avec le détail du changement, puis répercutée sur la fiche.",
  },
  {
    q: "Gardons-nous la main sur ce qui est publié ?",
    a: "Oui. Une étape de relecture permet de valider, corriger ou écarter chaque fiche avant son envoi dans votre système d'information touristique. Vous choisissez le niveau d'automatisation qui vous convient, source par source.",
  },
  {
    q: "Comment se déroule le test gratuit ?",
    a: "Vous nous indiquez quelques sites représentatifs de votre territoire via le formulaire. Nous les traitons dans EventBridge, puis nous vous recontactons pour une démonstration sur vos propres événements : ce qui a été capté, normalisé et dédoublonné. Sans engagement.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-indigo-500" />
            FAQ
          </span>
          <h2 className="section-title">Vos questions, nos réponses.</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500">
            Une question qui n&apos;est pas ici ? Décrivez-la dans le formulaire de test, nous y
            répondrons lors de la démo.
          </p>
        </div>
        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-500 transition group-open:rotate-45 group-open:border-indigo-500 group-open:text-indigo-500">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pr-10 text-sm leading-relaxed text-ink-500">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
