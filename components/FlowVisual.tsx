import { LogoMark } from "./Logo";
import { IconCheck } from "./Icons";

/**
 * Le visuel du hero : des sources hétérogènes (dont trois annoncent le même
 * événement) convergent vers EventBridge, qui en sort une fiche unique,
 * normalisée et prête à intégrer. Décoratif — le texte du hero porte le sens.
 */
const SOURCES = [
  { kind: "Site mairie", raw: "FETE DE LA MUSIQUE !! samedi 21 juin à partir de 18h place du marché", dup: true },
  { kind: "Facebook", raw: "🎶 On vous attend le 21/06 dès 18h00 pl. du Marché, entrée libre", dup: true },
  { kind: "Programme PDF", raw: "Sam. 21 juin — 18h-minuit — Fête de la musique (gratuit)", dup: true },
  { kind: "Billetterie", raw: "Quatuor Arpège · 04/07 · 20h30 · Église St-Pierre · 12 €", dup: false },
  { kind: "Agenda asso", raw: "Rando nocturne vendredi 27 rdv parking salle des fêtes", dup: false },
];

const FIELDS = [
  { k: "Dates", v: "2026-06-21 · 18:00 → 00:00" },
  { k: "Lieu", v: "Place du Marché · géolocalisé" },
  { k: "Catégorie", v: "Fête et manifestation › Musique" },
  { k: "Tarif", v: "Gratuit" },
  { k: "Sources", v: "3 fusionnées" },
];

export function FlowVisual() {
  return (
    <div className="glass-card relative p-4 sm:p-5" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
        <span>Flux entrant</span>
        <span className="flex items-center gap-1.5">
          <span className="live-dot !h-1.5 !w-1.5" /> captation en cours
        </span>
      </div>

      <ul className="space-y-1.5">
        {SOURCES.map((s) => (
          <li
            key={s.raw}
            className={`flex items-center gap-2.5 rounded-lg border px-2.5 py-1.5 ${
              s.dup ? "border-coral-400/30 bg-coral-500/[0.08]" : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <span className="w-[86px] flex-none truncate rounded-md bg-white/10 px-1.5 py-0.5 text-center text-[10px] font-medium text-white/75">
              {s.kind}
            </span>
            <span className="truncate font-mono text-[11px] text-white/55">{s.raw}</span>
          </li>
        ))}
      </ul>

      {/* convergence */}
      <svg viewBox="0 0 400 44" className="h-10 w-full" preserveAspectRatio="none">
        {[40, 120, 200, 280, 360].map((x) => (
          <path
            key={x}
            d={`M${x} 0 C ${x} 26, 200 18, 200 44`}
            stroke="url(#fv-g)"
            strokeWidth="1.5"
            fill="none"
            className="flow-line"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <defs>
          <linearGradient id="fv-g" x1="0" y1="0" x2="0" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C9B8FF" stopOpacity=".2" />
            <stop offset="1" stopColor="#C9B8FF" stopOpacity=".9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-indigo-200/25 bg-indigo-500/15 px-3 py-2.5">
        <LogoMark className="h-7 w-7" />
        {["Extraction IA", "Normalisation", "Dédoublonnage", "Contrôle"].map((step, i) => (
          <span key={step} className="flex items-center gap-3 text-[11px] font-medium text-white/85">
            {step}
            {i < 3 ? <span className="text-white/30">→</span> : null}
          </span>
        ))}
      </div>

      <svg viewBox="0 0 400 28" className="h-7 w-full" preserveAspectRatio="none">
        <path
          d="M200 0 V28"
          stroke="#5EF0C0"
          strokeOpacity=".7"
          strokeWidth="1.5"
          className="flow-line"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="rounded-xl bg-white p-4 text-ink-900 shadow-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
              Fiche normalisée
            </div>
            <div className="mt-1 font-display text-lg font-bold leading-tight tracking-[-0.02em]">
              Fête de la musique
            </div>
          </div>
          <span className="inline-flex flex-none items-center gap-1 rounded-full bg-mint-500/15 px-2 py-1 text-[10px] font-semibold text-mint-500">
            <IconCheck width={11} height={11} strokeWidth={3} />
            Prêt pour le SIT
          </span>
        </div>
        <dl className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 text-[12px] sm:grid-cols-2">
          {FIELDS.map((f) => (
            <div key={f.k} className="flex gap-2">
              <dt className="w-[64px] flex-none text-ink-400">{f.k}</dt>
              <dd className="font-medium text-ink-700">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
