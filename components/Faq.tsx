const FAQS = [
  {
    q: "EventBridge remplace-t-il Apidae ?",
    a: "Non. EventBridge alimente Apidae : nous collectons et normalisons les événements de votre territoire, puis les publions automatiquement dans votre base Apidae. La donnée reste votre propriété et reste interopérable avec tout l'écosystème.",
  },
  {
    q: "D'où viennent les événements collectés ?",
    a: "Sites web des acteurs culturels, agendas municipaux, billetteries (Mapado, Weezevent, etc.), plateformes de réservation, réseaux sociaux et flux RSS. Nous configurons ensemble les sources prioritaires de votre territoire.",
  },
  {
    q: "Combien de temps pour déployer EventBridge sur notre territoire ?",
    a: "Le déploiement standard prend 4 à 6 semaines : cadrage des sources, paramétrage des connecteurs Apidae/DATAtourisme, recette avec vos équipes, mise en production et formation.",
  },
  {
    q: "La plateforme est-elle conforme RGPD ?",
    a: "Oui. Données hébergées en France chez un hébergeur SecNumCloud, traitements documentés, registre des activités fourni, et accompagnement de votre DPO si nécessaire.",
  },
  {
    q: "Peut-on conserver une étape de validation humaine ?",
    a: "Bien sûr. EventBridge propose un mode 'modération assistée' où vos équipes valident en un clic les événements détectés, avec suggestions de l'IA pour gagner du temps.",
  },
  {
    q: "Quel lien avec EvenTrack ?",
    a: "EventBridge est édité par EvenTrack et s'appuie sur le moteur de collecte et d'IA développé pour la plateforme grand public. EventBridge est la déclinaison B2B dédiée aux territoires.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-brand-600" />
              FAQ
            </span>
            <h2 className="section-title">
              Vos questions, nos réponses.
            </h2>
            <p className="mt-4 text-base text-ink-500">
              Vous ne trouvez pas votre réponse ? Notre équipe est à votre
              disposition.
            </p>
            <a href="#demo" className="btn-secondary mt-6">
              Nous contacter
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
            {FAQS.map((item, i) => (
              <details
                key={item.q}
                className="group p-5 sm:p-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition group-open:rotate-45 group-open:border-brand-600 group-open:text-brand-600">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 2v10M2 7h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
