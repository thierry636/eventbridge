import { IconCheck, IconClock, IconEuro, IconPin, IconTag, IconUser } from "./Icons";

const NORMALIZED = [
  { icon: <IconClock width={16} height={16} />, k: "Dates & horaires", raw: "sam. 21 juin à partir de 18h", out: "2026-06-21 18:00 → 24:00" },
  { icon: <IconPin width={16} height={16} />, k: "Lieu", raw: "pl. du marché", out: "Place du Marché · 44.93, 4.89" },
  { icon: <IconTag width={16} height={16} />, k: "Catégorie", raw: "« concert, fête »", out: "Manifestation › Musique › Fête populaire" },
  { icon: <IconEuro width={16} height={16} />, k: "Tarif", raw: "entrée libre", out: "Gratuit" },
  { icon: <IconUser width={16} height={16} />, k: "Organisateur", raw: "le comité", out: "Comité des fêtes · contact vérifié" },
];

const DUPES = [
  { src: "Site mairie", note: "titre officiel, lieu" },
  { src: "Facebook", note: "visuel, horaire de fin" },
  { src: "Programme PDF", note: "tarif, organisateur" },
];

export function Quality() {
  return (
    <section id="qualite" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-indigo-500" />
            Qualité des données
            <span className="h-px w-6 bg-indigo-500" />
          </span>
          <h2 className="section-title">
            Capter, c&apos;est la moitié du travail.{" "}
            <span className="gradient-text-strong">La mise en forme fait le reste.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            Un SIT n&apos;accepte pas du texte libre. EventBridge transforme chaque annonce en
            données structurées, cohérentes et sans doublon — celles que vos partenaires et vos
            sites de diffusion attendent.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          {/* Normalisation */}
          <article className="rounded-3xl border border-ink-100 bg-ink-50 p-5 sm:p-7">
            <h3 className="text-xl font-bold sm:text-2xl">Normalisation</h3>
            <p className="mt-1.5 text-sm text-ink-500">
              Chaque champ est interprété, converti et aligné sur le référentiel de votre SIT.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 bg-white">
              <div className="hidden grid-cols-[150px_1fr_1.3fr] gap-4 border-b border-ink-100 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400 sm:grid">
                <span>Champ</span>
                <span>Texte capté</span>
                <span>Donnée normalisée</span>
              </div>
              <ul className="divide-y divide-ink-100">
                {NORMALIZED.map((row) => (
                  <li key={row.k} className="grid gap-1.5 px-4 py-3 sm:grid-cols-[150px_1fr_1.3fr] sm:items-center sm:gap-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                      <span className="text-indigo-500">{row.icon}</span>
                      {row.k}
                    </span>
                    <span className="font-mono text-xs text-ink-400 line-through decoration-coral-400/60">
                      {row.raw}
                    </span>
                    <span className="font-mono text-xs font-medium text-ink-900">
                      <span className="mr-1.5 text-mint-500">→</span>
                      {row.out}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Dédoublonnage */}
          <article className="rounded-3xl border border-ink-100 bg-ink-50 p-5 sm:p-7">
            <h3 className="text-xl font-bold sm:text-2xl">Dédoublonnage</h3>
            <p className="mt-1.5 text-sm text-ink-500">
              Rapprochement par le sens, pas seulement par le titre : dates, lieu et contenu sont
              comparés pour reconnaître un même événement.
            </p>

            <div className="mt-6 space-y-2">
              {DUPES.map((d) => (
                <div key={d.src} className="flex items-center justify-between gap-3 rounded-xl border border-coral-400/30 bg-white px-4 py-2.5">
                  <span className="text-sm font-medium text-ink-700">{d.src}</span>
                  <span className="text-xs text-ink-400">apporte : {d.note}</span>
                </div>
              ))}
            </div>

            <div className="my-3 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
              <span className="h-px w-8 bg-ink-200" />
              3 annonces → 1 fiche
              <span className="h-px w-8 bg-ink-200" />
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-base font-bold tracking-[-0.02em]">Fête de la musique</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-mint-500/15 px-2 py-1 text-[10px] font-semibold text-mint-500">
                  <IconCheck width={11} height={11} strokeWidth={3} />
                  Fiche unique
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-500">
                Champs consolidés, provenance conservée pour chaque information.
              </p>
            </div>
          </article>
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { t: "Mises à jour suivies", d: "Une source modifiée ? La fiche est mise à jour, avec l'historique du changement." },
            { t: "Événements passés écartés", d: "Seuls les événements à venir et pertinents remontent dans votre flux." },
            { t: "Traçabilité complète", d: "Chaque donnée garde le lien vers la page d'origine, pour vérifier en un clic." },
          ].map((x) => (
            <li key={x.t} className="rounded-2xl border border-ink-100 p-5">
              <h3 className="text-base font-semibold tracking-[-0.01em]">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{x.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
