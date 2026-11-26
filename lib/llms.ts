import { BOOKING_URL } from "@/lib/booking";
import { FAQ } from "@/lib/faq";
import { APP_URL, AUDIENCES, FORMATS, PILLARS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/** Fichiers llms.txt (https://llmstxt.org) : résumé Markdown du site destiné aux modèles de langage. */
export function llmsTxt(): string {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} est un service français (SaaS) destiné aux acteurs du tourisme : il repère automatiquement les événements (concerts, fêtes, marchés, expositions, randonnées, spectacles…) publiés sur les sites de communes, d'associations, de salles, de billetteries et sur les réseaux sociaux, puis les transforme en fiches normalisées, dédoublonnées et prêtes à être intégrées dans un système d'information touristique (SIT) comme Apidae.

## Pages

- [Accueil](${SITE_URL}/): présentation du service, fonctionnement, public visé, FAQ et test gratuit
- [Fonctionnement](${SITE_URL}/#fonctionnement): la chaîne de traitement, de la page web à la fiche touristique
- [Questions fréquentes](${SITE_URL}/#faq): sources captées, intégration au SIT, dédoublonnage, relecture
- [Test gratuit](${SITE_URL}/#test-gratuit): formulaire pour tester ${SITE_NAME} sur ses propres sources
- [Version complète pour LLM](${SITE_URL}/llms-full.txt): tout le contenu du site en Markdown

## Contact

- [Prendre rendez-vous (démonstration de 30 minutes)](${BOOKING_URL})
- [Se connecter à l'application](${APP_URL})
`;
}

export function llmsFullTxt(): string {
  return `# ${SITE_NAME} — Le flux événementiel du web, capté, analysé, restitué

> ${SITE_DESCRIPTION}

Site : ${SITE_URL}/
Langue : français · Marché : France (offices de tourisme, collectivités, ADT/CRT)

## Le constat

Sur un territoire, l'offre événementielle réelle est bien plus riche que ce qui arrive jusqu'au système d'information touristique. Elle existe pourtant, en ligne : il suffit de la capter à grande échelle et de la remettre en forme.

- **L'information est éclatée** : un même territoire publie ses événements sur des centaines de pages, dans des formats qui ne se ressemblent jamais.
- **Les doublons s'accumulent** : la fête du village est annoncée par la mairie, le comité et l'association — trois fois, trois versions.
- **Les mises à jour passent inaperçues** : un horaire décalé, une annulation, et la fiche publiée devient fausse.
- **La ressaisie épuise les équipes** : copier, reformater, catégoriser, géolocaliser — des heures chaque semaine.

## Fonctionnement : une chaîne complète, de la page web à la fiche touristique

${PILLARS.map((p, i) => `${i + 1}. **${p.name}** — ${p.text}`).join("\n")}

## Formats et référentiels

${FORMATS.map((f) => `- ${f}`).join("\n")}

## Volume

- Des centaines de sources par territoire, ajoutées en quelques minutes.
- Passages réguliers : chaque source est revisitée pour suivre les nouveautés.
- Tous les formats : pages HTML, PDF, images et publications sociales.
- Zéro ressaisie, du web jusqu'à la fiche publiée dans la base touristique.

## Pour qui

${AUDIENCES.map((a) => `- **${a.name}** : ${a.text}`).join("\n")}

## Questions fréquentes

${FAQ.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Test gratuit et contact

Envoyez quelques sites représentatifs de votre territoire via le formulaire ${SITE_URL}/#test-gratuit : ${SITE_NAME} les traite puis vous présente, lors d'une démonstration, ce qui a été capté, normalisé et dédoublonné. Sans engagement.

- Prendre rendez-vous : ${BOOKING_URL}
- Application : ${APP_URL}
`;
}
