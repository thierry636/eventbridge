import { ICheck } from "./Icons";

/** Hero mobile : l'application vue dans un téléphone, avec un flux vivant
 *  et des bulles flottantes (données fictives). */

const FEED = [
  { t: "Concert du parc", m: "28 juin · Crest", badge: "Horaire modifié", cls: "bg-coral/10 text-coral", dot: "bg-coral" },
  { t: "Marché nocturne", m: "4 juil. · Saillans", badge: "Prêt pour Apidae", cls: "bg-sage/10 text-sage", ok: true },
  { t: "Quatuor Arpège", m: "4 juil. · Die", badge: "Prêt pour Apidae", cls: "bg-sage/10 text-sage", ok: true },
  { t: "Rando des crêtes", m: "11 juil. · Pontaix", badge: "À relire", cls: "bg-amber-500/10 text-amber-700", dot: "bg-amber-500" },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[min(78vw,300px)]" aria-hidden="true">
      {/* halo */}
      <div className="absolute inset-x-[-20%] top-[10%] -z-10 h-[70%] rounded-full bg-iris/50 blur-[70px]" />

      <div className="float-slow">
        <div className="rounded-[46px] bg-gradient-to-b from-[#3a3560] to-[#1b1834] p-[7px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          <div className="relative overflow-hidden rounded-[39px] bg-paper">
            {/* îlot */}
            <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
            {/* barre d'état */}
            <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10.5px] font-semibold text-ink">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-3.5 rounded-[3px] border border-ink/70 p-[1px]"><span className="block h-full w-3/4 rounded-[1px] bg-ink" /></span>
              </span>
            </div>

            <div className="px-3.5 pb-4 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted">Vallée de la Drôme</div>
                  <div className="text-[16px] font-semibold tracking-[-0.03em] text-ink">Flux d&apos;événements</div>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[9.5px] font-semibold text-white">VD</span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {[
                  ["248", "sources"],
                  ["3 412", "captés"],
                  ["1 096", "fusionnés"],
                ].map(([v, k]) => (
                  <div key={k} className="rounded-xl bg-white px-2 py-1.5 ring-1 ring-line">
                    <div className="text-[13px] font-semibold tracking-[-0.02em] text-ink">{v}</div>
                    <div className="text-[9px] text-muted">{k}</div>
                  </div>
                ))}
              </div>

              {/* carte entrante */}
              <div className="feed-in mt-3 rounded-2xl bg-ink p-3 text-white shadow-lg shadow-iris/30">
                <div className="flex items-center gap-1.5 text-[9.5px] text-iris-light">
                  <span className="ping-dot h-1.5 w-1.5 rounded-full bg-iris-light" />
                  Nouveau · capté il y a 2 s
                </div>
                <div className="mt-1 text-[13px] font-semibold tracking-[-0.02em]">Fête de la musique</div>
                <div className="text-[10px] text-white/60">21 juin · 18:00 · Place du Marché, Die</div>
                <div className="mt-2 flex gap-1">
                  {["Mairie", "Facebook", "PDF"].map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-1.5 py-0.5 text-[8.5px] text-white/80">{s}</span>
                  ))}
                  <span className="rounded-full bg-iris px-1.5 py-0.5 text-[8.5px] font-medium">→ 1 fiche</span>
                </div>
              </div>

              <ul className="mt-2 space-y-1.5">
                {FEED.map((r) => (
                  <li key={r.t} className="flex items-center justify-between gap-2 rounded-xl bg-white px-2.5 py-2 ring-1 ring-line">
                    <div className="min-w-0">
                      <div className="truncate text-[11.5px] font-medium text-ink">{r.t}</div>
                      <div className="text-[9.5px] text-muted">{r.m}</div>
                    </div>
                    <span className={`inline-flex flex-none items-center gap-1 rounded-full px-1.5 py-0.5 text-[8.5px] font-medium ${r.cls}`}>
                      {r.ok ? <ICheck width={9} height={9} strokeWidth={2.8} /> : <span className={`h-1 w-1 rounded-full ${r.dot}`} />}
                      {r.badge}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex h-9 items-center justify-center rounded-xl bg-iris text-[11.5px] font-semibold text-white">
                Envoyer 18 fiches vers Apidae
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bulles flottantes */}
      <div className="float-slower absolute -left-[9%] top-[31%] rounded-2xl border border-white/15 bg-ink-2/95 px-3 py-2 text-white shadow-[0_16px_40px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="text-[9.5px] text-white/60">Doublons fusionnés</div>
        <div className="text-[15px] font-semibold tracking-[-0.02em]">−32 %</div>
      </div>
      <div className="float-slow absolute -right-[9%] top-[60%] rounded-2xl border border-white/15 bg-ink-2/95 px-3 py-2 text-white shadow-[0_16px_40px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="text-[9.5px] text-white/60">Changement détecté</div>
        <div className="mt-0.5 flex items-center gap-1 font-mono text-[11px]">
          <span className="text-[#F2A193] line-through">20:00</span>
          <span className="text-white/50">→</span>
          <span className="text-[#7fe0bd]">21:00</span>
        </div>
      </div>
      <div className="float-slower absolute -right-[6%] -top-[1.5%] flex items-center gap-1.5 rounded-full bg-sage px-2.5 py-1 text-[10px] font-semibold text-white shadow-xl shadow-sage/30">
        <ICheck width={11} height={11} strokeWidth={2.8} /> Apidae synchronisé
      </div>
    </div>
  );
}
