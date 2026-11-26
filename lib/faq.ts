/** Questions fréquentes : affichées sur la page et publiées en JSON-LD (FAQPage) et dans llms.txt. */
export const FAQ = [
  {
    q: "Quelles sources Agendata sait-il capter ?",
    a: "Tout ce qui est publié publiquement sur le web : sites de communes et d'intercommunalités, associations, salles et lieux culturels, billetteries, pages publiques de réseaux sociaux, ainsi que les programmes en PDF ou en image. Nous validons ensemble la liste lors du test gratuit.",
  },
  {
    q: "Comment les événements arrivent-ils dans notre système d'information touristique ?",
    a: "Les fiches sont mises en forme selon le référentiel de votre système d'information touristique (catégories, champs, formats), puis créées et mises à jour directement dans votre base (Apidae, …). Elles peuvent aussi être exposées par API ou par export standardisé pour vos autres outils.",
  },
  {
    q: "Comment fonctionne le dédoublonnage ?",
    a: "Agendata compare les événements par le sens — dates, lieu, organisateur, contenu — et pas seulement par le titre. Un événement annoncé sur trois sources devient une fiche unique, qui réunit les meilleures informations de chacune en conservant leur provenance.",
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
    a: "Vous nous indiquez quelques sites représentatifs de votre territoire via le formulaire. Nous les traitons dans Agendata, puis nous vous recontactons pour une démonstration sur vos propres événements : ce qui a été capté, normalisé et dédoublonné. Sans engagement.",
  },
];
