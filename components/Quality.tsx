const ROWS = [
  { k: "Date", raw: "sam. 21 juin à partir de 18h", out: "21/06/2026, 18:00 – 24:00" },
  { k: "Lieu", raw: "pl. du marché", out: "Place du Marché · 44,933 N · 4,892 E" },
  { k: "Catégorie", raw: "concert, fête", out: "Manifestation culturelle › Musique" },
  { k: "Tarif", raw: "entrée libre", out: "Gratuit" },
  { k: "Organisateur", raw: "le comité", out: "Comité des fêtes, contact vérifié" },
];

const DUPES = [
  { src: "Site de la mairie", text: "FETE DE LA MUSIQUE !! samedi 21 juin à partir de 18h" },
  { src: "Facebook de l'association", text: "On vous attend le 21/06 dès 18h, pl. du Marché" },
  { src: "Programme de l'été", text: "Sam. 21 juin, 18h-minuit, Fête de la musique (gratuit)" },
];

const EXTRAS = [
  { t: "Mises à jour suivies", d: "Une source change, la fiche suit, avec l'historique de la modification." },
  { t: "Événements passés écartés", d: "Seul ce qui est à venir et pertinent remonte dans votre flux." },
  { t: "Provenance conservée", d: "Chaque donnée garde le lien vers sa page d'origine, vérifiable en un clic." },
];

export function Quality() {
  return (
    <section id="qualite" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[5fr_6fr] lg:gap-24">
          <h2 className="h-section max-w-[15ch]">Capter ne suffit pas. Un SIT attend des données.</h2>
          <p className="lede max-w-[32rem] lg:pt-3">
            Un système d&apos;information touristique n&apos;accepte pas du texte libre. Chaque
            annonce est interprétée, convertie et alignée sur votre référentiel.
          </p>
        </div>

        {/* Normalisation : la pièce maîtresse */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-line">
          <div className="hidden grid-cols-[11rem_1fr_1fr] border-b border-line bg-paper px-8 py-4 text-[13px] text-muted md:grid">
            <span>Champ</span>
            <span>Publié sur le web</span>
            <span>Livré au SIT</span>
          </div>
          <dl>
            {ROWS.map((r) => (
              <div key={r.k} className="grid gap-1 border-b border-line px-5 py-5 last:border-b-0 sm:px-8 md:grid-cols-[11rem_1fr_1fr] md:items-baseline md:gap-6">
                <dt className="text-[13px] text-muted md:text-[15px] md:text-ink">{r.k}</dt>
                <dd className="font-serif text-[19px] italic text-muted">« {r.raw} »</dd>
                <dd className="text-[16px] font-medium text-ink">{r.out}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dédoublonnage */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-24">
          <div>
            <h3 className="text-[28px] leading-tight sm:text-[34px]">Trois annonces, une seule fiche.</h3>
            <p className="lede mt-4 max-w-[30rem]">
              Les événements sont rapprochés par le sens : dates, lieu, organisateur et contenu
              sont comparés, pas seulement les titres. La fiche retenue réunit le meilleur de
              chaque source.
            </p>
          </div>
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_48px_200px]">
            <ul className="space-y-2.5">
              {DUPES.map((d) => (
                <li key={d.src} className="rounded-xl border border-line px-4 py-3">
                  <span className="flex items-center gap-2 text-[13px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
                    {d.src}
                  </span>
                  <span className="mt-0.5 block text-[14px] text-body">{d.text}</span>
                </li>
              ))}
            </ul>
            <svg viewBox="0 0 48 200" className="hidden h-[200px] w-12 sm:block" aria-hidden="true">
              <path d="M0 34 C 30 34, 18 100, 48 100 M0 100 H48 M0 166 C 30 166, 18 100, 48 100" fill="none" stroke="#B9B3FF" strokeWidth="1.2" />
            </svg>
            <div className="rounded-xl bg-ink p-5 text-white">
              <p className="text-[13px] text-white/55">Fiche unique</p>
              <p className="mt-1 font-serif text-[22px] leading-tight">Fête de la musique</p>
              <p className="mt-3 text-[13px] text-white/60">21/06, 18:00 – 24:00</p>
              <p className="text-[13px] text-white/60">Place du Marché, gratuit</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          {EXTRAS.map((x) => (
            <div key={x.t}>
              <h3 className="font-sans text-[17px] font-medium tracking-normal">{x.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
