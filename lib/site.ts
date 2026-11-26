/** Données de référence du site, partagées par les métadonnées, le JSON-LD, robots, sitemap et llms.txt. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agendata.fr").replace(/\/$/, "");
export const SITE_NAME = "Agendata";
export const APP_URL = "https://app.agendata.fr/";
export const SITE_TITLE = "Agendata — Le flux événementiel du web, capté, analysé, restitué";
export const SITE_DESCRIPTION =
  "Agendata capte en continu les événements publiés sur le web, les analyse avec l'IA et les restitue en fiches prêtes à intégrer dans votre système d'information touristique (Apidae, …).";

/** Date de dernière mise à jour éditoriale (sitemap, JSON-LD). À changer quand le contenu évolue. */
export const LAST_UPDATED = "2026-11-26";

export const KEYWORDS = [
  "agenda événementiel",
  "captation d'événements",
  "système d'information touristique",
  "SIT",
  "Apidae",
  "DATAtourisme",
  "office de tourisme",
  "agenda des manifestations",
  "dédoublonnage d'événements",
  "extraction IA",
  "données touristiques",
  "web scraping événements",
];

export const PILLARS = [
  {
    name: "Captation à grande échelle",
    text: "Des centaines de sources surveillées en continu : agendas municipaux, associations, salles, billetteries, réseaux sociaux. Pagination, pages détail, PDF et images compris.",
  },
  {
    name: "Extraction par l'IA",
    text: "L'IA lit chaque page comme un humain et isole titre, dates, lieu, tarif et organisateur.",
  },
  {
    name: "Normalisation au format touristique",
    text: "Dates au format standard, adresses géocodées, catégories alignées sur le référentiel de votre système d'information touristique.",
  },
  {
    name: "Dédoublonnage multi-sources",
    text: "Rapprochement par le sens — dates, lieu, contenu — pas seulement par le titre. Une fiche unique, enrichie du meilleur de chaque source.",
  },
  {
    name: "Détection des changements",
    text: "Horaire décalé, report, annulation : chaque modification est repérée et tracée.",
  },
  {
    name: "Relecture en un clic",
    text: "Votre équipe garde la main : valider, corriger ou écarter avant l'envoi dans votre base touristique.",
  },
  {
    name: "Restitution dans votre base",
    text: "Fiches créées et mises à jour directement dans votre système d'information touristique (Apidae, …), ou exposées par API.",
  },
];

export const AUDIENCES = [
  { name: "Offices de tourisme", text: "Une offre événementielle exhaustive sur votre destination, sans y passer vos journées." },
  { name: "Agences départementales et CRT", text: "Un flux homogène à l'échelle d'un département ou d'une région, quel que soit le nombre de sources." },
  { name: "Intercommunalités et collectivités", text: "L'agenda de toutes vos communes valorisé, y compris celles qui n'alimentent jamais votre base touristique." },
  { name: "Gestionnaires de bases touristiques (Apidae, …)", text: "Un apport de données qualifiées, normalisées et dédoublonnées, prêtes à entrer dans votre base." },
];

export const FORMATS = ["Apidae", "Ontologie DATAtourisme", "API REST", "JSON structuré", "Géocodage des lieux"];
