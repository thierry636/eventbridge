import type { ReactNode } from "react";
import { IBolt, ICheck, IEye, IGlobe, ILayers, IMerge, ISpark, IUpload } from "./Icons";

function Cell({
  icon,
  title,
  text,
  className = "",
  children,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article className={`panel flex flex-col overflow-hidden ${className}`}>
      <div className="p-6 pb-0 sm:p-7 sm:pb-0">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-iris-soft text-iris">{icon}</span>
          <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{title}</h3>
        </div>
        <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed text-muted">{text}</p>
      </div>
      <div className="mt-6 flex-1 border-t border-line bg-paper/70 p-5 sm:p-6">{children}</div>
    </article>
  );
}

const SOURCES = [
  { name: "mairie-die.fr/agenda", type: "Site de commune", pages: 42, ago: "il y a 8 min", ok: true },
  { name: "facebook.com/comitedesfetesdie", type: "Page Facebook", pages: 17, ago: "il y a 21 min", ok: true },
  { name: "theatre-crest.fr/saison-26-27", type: "Salle de spectacle", pages: 63, ago: "il y a 34 min", ok: true },
  { name: "programme-ete-2026.pdf", type: "Programme PDF", pages: 12, ago: "il y a 1 h", ok: true },
  { name: "billetterie-drome.fr", type: "Billetterie", pages: 128, ago: "en cours", ok: false },
];

export function Features() {
  return (
    <section id="fonctionnement" className="scroll-mt-[72px] bg-paper py-20 sm:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Fonctionnement</p>
          <h2 className="h-section mt-3">Une chaîne complète, de la page web à la fiche touristique.</h2>
          <p className="lede mx-auto mt-5 max-w-[40rem]">
            Captation, extraction, normalisation, dédoublonnage, suivi des changements, relecture
            et restitution : chaque événement suit la même chaîne de traitement, automatisée de
            bout en bout.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {/* Captation */}
          <Cell
            className="lg:col-span-4"
            icon={<IGlobe width={17} height={17} />}
            title="Captation à grande échelle"
            text="Des centaines de sources surveillées en continu : agendas municipaux, associations, salles, billetteries, réseaux sociaux. Pagination, pages détail, PDF et images compris."
          >
            <ul className="space-y-2">
              {SOURCES.map((s) => (
                <li key={s.name} className="flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-2.5 text-[13px]">
                  <span className={`h-2 w-2 flex-none rounded-full ${s.ok ? "bg-sage" : "animate-pulse bg-iris"}`} />
                  <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-ink">{s.name}</span>
                  <span className="hidden w-[130px] truncate text-muted sm:block">{s.type}</span>
                  <span className="hidden w-[70px] text-right font-mono text-[12px] text-muted md:block">{s.pages} p.</span>
                  <span className="w-[86px] text-right text-[12px] text-muted">{s.ago}</span>
                </li>
              ))}
            </ul>
          </Cell>

          {/* Extraction IA */}
          <Cell
            className="lg:col-span-2"
            icon={<ISpark width={17} height={17} />}
            title="Extraction par l'IA"
            text="L'IA lit chaque page comme un humain et isole titre, dates, lieu, tarif et organisateur."
          >
            <p className="rounded-lg border border-line bg-white p-4 text-[14px] leading-[1.9] text-body">
              <mark className="rounded bg-iris-soft px-1 text-iris">FETE DE LA MUSIQUE</mark> !! rendez-vous{" "}
              <mark className="rounded bg-sage/10 px-1 text-sage">samedi 21 juin à partir de 18h</mark>{" "}
              <mark className="rounded bg-amber-500/10 px-1 text-amber-700">place du marché</mark>, concerts toute la soirée,{" "}
              <mark className="rounded bg-coral/10 px-1 text-coral">entrée libre</mark> 🎶
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[11.5px]">
              <span className="badge bg-iris-soft text-iris">Titre</span>
              <span className="badge bg-sage/10 text-sage">Dates</span>
              <span className="badge bg-amber-500/10 text-amber-700">Lieu</span>
              <span className="badge bg-coral/10 text-coral">Tarif</span>
            </div>
            <pre className="mt-4 overflow-hidden rounded-lg bg-ink p-4 font-mono text-[11.5px] leading-[1.7] text-white/70">
{`{
  "titre": "Fête de la musique",
  "debut": "2026-06-21T18:00",
  "lieu": "Place du Marché",
  "tarif": "gratuit"
}`}
            </pre>
          </Cell>

          {/* Normalisation */}
          <Cell
            className="lg:col-span-3"
            icon={<ILayers width={17} height={17} />}
            title="Normalisation au format touristique"
            text="Dates au format standard, adresses géocodées, catégories alignées sur le référentiel de votre système d'information touristique."
          >
            <dl className="overflow-hidden rounded-lg border border-line bg-white text-[13px]">
              {[
                ["Dates", "samedi 21 juin à partir de 18h", "2026-06-21T18:00 → 23:59"],
                ["Lieu", "place du marché", "Place du Marché, 26150 Die · 44.753, 5.370"],
                ["Catégorie", "concert, fête", "Manifestation › Musique › Fête populaire"],
                ["Tarif", "entrée libre", "Gratuit"],
              ].map(([k, raw, out]) => (
                <div key={k} className="grid grid-cols-[76px_1fr] gap-x-3 border-b border-line px-3.5 py-2.5 last:border-b-0">
                  <dt className="row-span-2 text-muted">{k}</dt>
                  <dd className="truncate text-[12px] text-muted line-through decoration-coral/50">{raw}</dd>
                  <dd className="truncate font-mono text-[12px] text-ink">{out}</dd>
                </div>
              ))}
            </dl>
          </Cell>

          {/* Dédoublonnage */}
          <Cell
            className="lg:col-span-3"
            icon={<IMerge width={17} height={17} />}
            title="Dédoublonnage multi-sources"
            text="Rapprochement par le sens — dates, lieu, contenu — pas seulement par le titre. Une fiche unique, enrichie du meilleur de chaque source."
          >
            <div className="grid items-center gap-3 sm:grid-cols-[1fr_28px_1fr]">
              <ul className="space-y-1.5">
                {[
                  ["Site mairie", "titre, lieu"],
                  ["Facebook", "visuel, horaire de fin"],
                  ["Programme PDF", "tarif, organisateur"],
                ].map(([s, n]) => (
                  <li key={s} className="rounded-lg border border-coral/25 bg-white px-3 py-2 text-[12.5px]">
                    <div className="font-medium text-ink">{s}</div>
                    <div className="text-[11.5px] text-muted">apporte : {n}</div>
                  </li>
                ))}
              </ul>
              <svg viewBox="0 0 28 150" className="mx-auto hidden h-[150px] w-7 sm:block" aria-hidden="true">
                <path d="M0 25 C 18 25, 10 75, 28 75 M0 75 H28 M0 125 C 18 125, 10 75, 28 75" fill="none" stroke="#4C43C9" strokeOpacity=".5" strokeWidth="1.3" />
              </svg>
              <div className="rounded-lg bg-ink p-4 text-white">
                <span className="badge bg-white/10 text-white/80">Fiche unique</span>
                <div className="mt-2 text-[15px] font-semibold tracking-[-0.02em]">Fête de la musique</div>
                <div className="mt-1 text-[12px] text-white/60">21/06 · 18:00 – 23:59</div>
                <div className="text-[12px] text-white/60">Place du Marché, Die · Gratuit</div>
                <div className="mt-2 text-[11px] text-iris-light">3 sources · provenance conservée</div>
              </div>
            </div>
          </Cell>

          {/* Changements */}
          <Cell
            className="lg:col-span-2"
            icon={<IBolt width={17} height={17} />}
            title="Détection des changements"
            text="Horaire décalé, report, annulation : chaque modification est repérée et tracée."
          >
            <div className="rounded-lg border border-line bg-white p-4 text-[13px]">
              <div className="font-medium text-ink">Concert du parc</div>
              <div className="mt-2 flex items-center gap-2 font-mono text-[12px]">
                <span className="rounded bg-coral/10 px-1.5 py-0.5 text-coral line-through">20:00</span>
                <span className="text-muted">→</span>
                <span className="rounded bg-sage/10 px-1.5 py-0.5 text-sage">21:00</span>
              </div>
              <div className="mt-2 text-[11.5px] text-muted">Détecté sur theatre-crest.fr · il y a 2 h</div>
            </div>
          </Cell>

          {/* Relecture */}
          <Cell
            className="lg:col-span-2"
            icon={<IEye width={17} height={17} />}
            title="Relecture en un clic"
            text="Votre équipe garde la main : valider, corriger ou écarter avant l'envoi dans votre base touristique."
          >
            <div className="rounded-lg border border-line bg-white p-4">
              <div className="text-[13px] font-medium text-ink">Rando nocturne des crêtes</div>
              <div className="text-[11.5px] text-muted">Lieu à confirmer · 1 source</div>
              <div className="mt-3 flex gap-2">
                <span className="rounded-md bg-ink px-3 py-1.5 text-[12px] font-medium text-white">Valider</span>
                <span className="rounded-md border border-line px-3 py-1.5 text-[12px] text-body">Corriger</span>
                <span className="rounded-md px-2 py-1.5 text-[12px] text-muted">Écarter</span>
              </div>
            </div>
          </Cell>

          {/* Restitution */}
          <Cell
            className="lg:col-span-2"
            icon={<IUpload width={17} height={17} />}
            title="Restitution dans votre base"
            text="Fiches créées et mises à jour directement dans votre système d'information touristique (Apidae, …), ou exposées par API."
          >
            <ul className="space-y-1.5 font-mono text-[11.5px]">
              {[
                ["Fiche créée", "Festival Jazz en Vignes"],
                ["Fiche mise à jour", "Concert du parc"],
                ["Fiche créée", "Marché nocturne"],
              ].map(([a, b]) => (
                <li key={b} className="flex items-center gap-2 rounded-md border border-line bg-white px-2.5 py-2">
                  <ICheck width={13} height={13} strokeWidth={2.4} className="flex-none text-sage" />
                  <span className="text-ink">{a}</span>
                  <span className="truncate text-muted">{b}</span>
                </li>
              ))}
            </ul>
          </Cell>
        </div>
      </div>
    </section>
  );
}
