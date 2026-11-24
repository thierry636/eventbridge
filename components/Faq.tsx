const FAQ = [
  {
    q: "Quelles sources EventBridge sait-il capter ?",
    a: "Tout ce qui est publié publiquement sur le web : sites de communes et d'intercommunalités, associations, salles et lieux culturels, billetteries, pages publiques de réseaux sociaux, ainsi que les programmes en PDF ou en image. Nous validons ensemble la liste lors du test gratuit.",
  },
  {
    q: "Comment les événements arrivent-ils dans notre SIT ?",
    a: "Les fiches sont mises en forme selon le référentiel de votre système d'information touristique (catégories, champs, formats), puis créées et mises à jour directement dans le SIT. Elles peuvent aussi être exposées par API ou par export standardisé pour vos autres outils.",
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
    a: "Oui. Une étape de relecture permet de valider, corriger ou écarter chaque fiche avant son envoi au SIT. Vous choisissez le niveau d'automatisation qui vous convient, source par source.",
  },
  {
    q: "Comment se déroule le test gratuit ?",
    a: "Vous nous indiquez quelques sites représentatifs de votre territoire via le formulaire. Nous les traitons dans EventBridge, puis nous vous recontactons pour une démonstration sur vos propres événements : ce qui a été capté, normalisé et dédoublonné. Sans engagement.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div>
          <p className="kicker">FAQ</p>
          <h2 className="h-section mt-3">Vos questions, nos réponses.</h2>
          <p className="lede mt-6 max-w-[26rem]">
            Une autre question ? Posez-la dans le formulaire de test, nous y répondrons pendant
            la démonstration.
          </p>
        </div>
        <div className="border-t border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-1.5 flex-none text-muted transition-transform duration-300 group-open:rotate-45">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="-mt-2 max-w-[38rem] pb-6 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
