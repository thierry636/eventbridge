"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { IconBolt, IconCheck } from "./Icons";

/**
 * Le « torrent » du hero : des rangées d'annonces brutes défilent vers la porte
 * EventBridge, d'où sortent des fiches propres. Décoratif (aria-hidden).
 */

type Raw = { tag: string; text: string; dup?: boolean };

const ROWS: Raw[][] = [
  [
    { tag: "Site mairie", text: "FETE DE LA MUSIQUE !! sam 21 juin dès 18h place du marché", dup: true },
    { tag: "Instagram", text: "🔥 Marché nocturne ce vendredi, venez nombreux" },
    { tag: "PDF", text: "PROGRAMME ÉTÉ 2026 — p.3 — Cinéma plein air 14/07" },
    { tag: "Billetterie", text: "Quatuor Arpège · 04/07 · 20h30 · 12 €" },
    { tag: "Agenda asso", text: "rando nocturne vendredi 27 rdv parking salle des fêtes" },
  ],
  [
    { tag: "Facebook", text: "🎶 On vous attend le 21/06 dès 18h00 pl. du Marché", dup: true },
    { tag: "Théâtre", text: "Saison 26-27 : « Le Misanthrope », 3 dates en octobre" },
    { tag: "Site OT", text: "Vide-grenier annuel — dim. 7 sept — 6h/18h — gratuit" },
    { tag: "Médiathèque", text: "Heure du conte mercredi 10h30 (réservation conseillée)" },
    { tag: "Affiche", text: "GRAND LOTO samedi soir salle polyvalente ouverture 19h" },
  ],
  [
    { tag: "PDF", text: "Sam. 21 juin — 18h-minuit — Fête de la musique (gratuit)", dup: true },
    { tag: "Musée", text: "Expo temporaire « Lumières du Rhône » jusqu'au 30/09" },
    { tag: "Comité", text: "Feu d'artifice reporté au 15 août cause météo !!" },
    { tag: "Site mairie", text: "Conseil municipal + concert de l'harmonie le 12" },
    { tag: "Facebook", text: "Trail des crêtes 2026 inscriptions ouvertes 🏃" },
  ],
  [
    { tag: "Salle", text: "Concert du parc — horaire modifié 20h → 21h", dup: true },
    { tag: "Blog", text: "Fête du pain au four banal dimanche matin" },
    { tag: "Billetterie", text: "Festival Jazz en Vignes 18-20 juillet pass 3 j 45€" },
    { tag: "Agenda asso", text: "Atelier vannerie samedi 14h-17h inscr. au 06…" },
    { tag: "Instagram", text: "Brocante du port ce week-end ⚓ toute la journée" },
  ],
];

type Out = { title: string; meta: string; kind: "ok" | "merge" | "update" };

const OUTPUTS: Out[] = [
  { title: "Fête de la musique", meta: "21/06 · 18:00–24:00 · Place du Marché", kind: "merge" },
  { title: "Concert du parc", meta: "Horaire mis à jour : 20h → 21h", kind: "update" },
  { title: "Quatuor Arpège", meta: "04/07 · 20:30 · Église St-Pierre · 12 €", kind: "ok" },
  { title: "Vide-grenier annuel", meta: "07/09 · 06:00–18:00 · Gratuit", kind: "ok" },
  { title: "Feu d'artifice", meta: "Reporté au 15/08 · source suivie", kind: "update" },
  { title: "Jazz en Vignes", meta: "18 → 20/07 · Pass 3 jours 45 €", kind: "ok" },
];

const BADGE: Record<Out["kind"], { label: string; cls: string }> = {
  ok: { label: "Prêt pour le SIT", cls: "bg-mint-500/15 text-mint-500" },
  merge: { label: "3 sources fusionnées", cls: "bg-indigo-500/15 text-indigo-600" },
  update: { label: "Mise à jour", cls: "bg-coral-500/15 text-coral-500" },
};

const STEPS = ["Extraction IA", "Normalisation", "Dédoublonnage", "Contrôle"];

export function FluxBand() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1800);
    return () => window.clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((i) => OUTPUTS[(tick + i) % OUTPUTS.length]);
  const step = STEPS[tick % STEPS.length];

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[1400px]">
      <div className="grid items-center gap-6 lg:grid-cols-[1.35fr_auto_1fr] lg:gap-0">
        {/* Torrent entrant */}
        <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] lg:[mask-image:linear-gradient(90deg,transparent,#000_15%,#000_92%,transparent)]">
          <div className="space-y-2.5">
            {ROWS.map((row, r) => (
              <div
                key={r}
                className="flex w-max animate-stream gap-2.5"
                style={{ animationDuration: `${[38, 30, 44, 34][r]}s`, animationDelay: `${-r * 7}s` }}
              >
                {[...row, ...row].map((c, i) => (
                  <span
                    key={i}
                    className={`flex flex-none items-center gap-2 rounded-lg border px-2.5 py-2 ${
                      c.dup ? "border-coral-400/40 bg-coral-500/[0.12]" : "border-white/10 bg-white/[0.05]"
                    }`}
                  >
                    <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-white/80">
                      {c.tag}
                    </span>
                    <span className="whitespace-nowrap font-mono text-[11.5px] text-white/65">{c.text}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* La porte EventBridge */}
        <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center lg:w-[200px] lg:max-w-none">
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-violet-500/40 blur-3xl" />
          <div className="relative flex w-full flex-row items-center gap-3 rounded-2xl border border-white/25 p-3 shadow-[0_0_60px_-10px_rgba(155,77,255,0.9)] lg:h-[230px] lg:flex-col lg:justify-center lg:gap-4 lg:p-5"
            style={{ background: "linear-gradient(160deg, rgba(91,75,245,0.55), rgba(155,77,255,0.35) 55%, rgba(255,107,91,0.35))" }}
          >
            <LogoMark className="h-11 w-11 flex-none lg:h-14 lg:w-14" />
            <div className="min-w-0 lg:text-center">
              <div className="font-display text-base font-bold tracking-[-0.02em] text-white lg:text-lg">EventBridge</div>
              <div key={step} className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.14em] text-indigo-100">
                {step}…
              </div>
            </div>
            <div className="ml-auto flex gap-1 lg:ml-0">
              {STEPS.map((s) => (
                <span key={s} className={`h-1.5 w-5 rounded-full transition ${s === step ? "bg-white" : "bg-white/25"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Fiches sortantes */}
        <div className="relative lg:pl-8">
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-white/70 to-mint-300 lg:block" />
          <div className="space-y-2.5">
            {visible.map((o, i) => (
              <div
                key={`${tick}-${i}`}
                className={`animate-fade-up rounded-xl bg-white p-3.5 text-ink-900 shadow-card ${i === 0 ? "" : i === 1 ? "opacity-85" : "opacity-60"}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate font-display text-[15px] font-bold tracking-[-0.02em]">{o.title}</span>
                  <span className={`inline-flex flex-none items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${BADGE[o.kind].cls}`}>
                    {o.kind === "update" ? <IconBolt width={10} height={10} strokeWidth={2.6} /> : <IconCheck width={10} height={10} strokeWidth={3} />}
                    {BADGE[o.kind].label}
                  </span>
                </div>
                <div className="mt-1 truncate font-mono text-[11px] text-ink-500">{o.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
