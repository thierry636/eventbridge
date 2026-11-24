import { IBolt, ICheck, IDatabase, IEye, IGlobe, IGrid, IMerge, IUpload } from "./Icons";

/** Capture d'interface illustrative du produit (données fictives). */

const NAV = [
  { icon: IGrid, label: "Événements", count: "3 412", active: true },
  { icon: IGlobe, label: "Sources", count: "248" },
  { icon: IMerge, label: "Doublons", count: "1 096" },
  { icon: IBolt, label: "Changements", count: "37" },
  { icon: IEye, label: "À relire", count: "18" },
  { icon: IUpload, label: "Export Apidae", count: "" },
];

const KPIS = [
  { k: "Sources surveillées", v: "248", d: "+12 ce mois" },
  { k: "Événements captés", v: "3 412", d: "+184 cette semaine" },
  { k: "Doublons fusionnés", v: "1 096", d: "32 % du flux brut" },
  { k: "Fiches prêtes pour Apidae", v: "2 187", d: "Synchronisées" },
];

type Status = "ready" | "merged" | "update" | "review";
const STATUS: Record<Status, { label: string; cls: string; dot: string }> = {
  ready: { label: "Prêt pour Apidae", cls: "bg-sage/10 text-sage", dot: "bg-sage" },
  merged: { label: "3 sources fusionnées", cls: "bg-iris-soft text-iris", dot: "bg-iris" },
  update: { label: "Horaire modifié", cls: "bg-coral/10 text-coral", dot: "bg-coral" },
  review: { label: "À relire", cls: "bg-amber-500/10 text-amber-700", dot: "bg-amber-500" },
};

const ROWS: { title: string; cat: string; date: string; place: string; src: number; status: Status }[] = [
  { title: "Fête de la musique", cat: "Musique", date: "21 juin · 18:00", place: "Place du Marché, Die", src: 3, status: "merged" },
  { title: "Concert du parc", cat: "Musique", date: "28 juin · 21:00", place: "Parc Jean-Moulin, Crest", src: 2, status: "update" },
  { title: "Marché nocturne des producteurs", cat: "Marché", date: "4 juil. · 18:30", place: "Quai de la Drôme, Saillans", src: 1, status: "ready" },
  { title: "Quatuor Arpège", cat: "Concert classique", date: "4 juil. · 20:30", place: "Église Saint-Pierre, Die", src: 2, status: "ready" },
  { title: "Rando nocturne des crêtes", cat: "Sport nature", date: "11 juil. · 20:00", place: "Salle des fêtes, Pontaix", src: 1, status: "review" },
  { title: "Festival Jazz en Vignes", cat: "Festival", date: "18 → 20 juil.", place: "Domaine des Clairettes, Vercheny", src: 4, status: "merged" },
];

export function AppMockup() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white text-body shadow-float ring-1 ring-black/5" aria-hidden="true">
      {/* barre de fenêtre */}
      <div className="flex items-center gap-4 border-b border-line bg-paper px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3E2EA]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3E2EA]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3E2EA]" />
        </div>
        <div className="mx-auto w-full max-w-[340px] rounded-md bg-white px-3 py-1 text-center font-mono text-[11px] text-muted ring-1 ring-line">
          app.agendata.fr/flux
        </div>
        <div className="w-10" />
      </div>

      <div className="flex">
        {/* barre latérale */}
        <aside className="hidden w-[210px] flex-none border-r border-line bg-paper/60 p-3 md:block">
          <div className="mb-3 flex items-center gap-2 px-2 py-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-[10px] font-semibold text-white">VD</span>
            <div className="min-w-0">
              <div className="truncate text-[12.5px] font-semibold text-ink">Vallée de la Drôme</div>
              <div className="text-[10.5px] text-muted">Office de tourisme</div>
            </div>
          </div>
          <ul className="space-y-0.5">
            {NAV.map(({ icon: Icon, label, count, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[12.5px] ${
                  active ? "bg-white font-medium text-ink shadow-card" : "text-muted"
                }`}
              >
                <Icon width={15} height={15} />
                <span className="flex-1 truncate">{label}</span>
                {count ? <span className="font-mono text-[10.5px] text-muted">{count}</span> : null}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-lg border border-line bg-white p-3">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink">
              <IDatabase width={13} height={13} /> Apidae connecté
            </div>
            <div className="mt-1 text-[10.5px] text-muted">Dernière synchro il y a 4 min</div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[86%] rounded-full bg-sage" />
            </div>
          </div>
        </aside>

        {/* contenu */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[15px] font-semibold tracking-[-0.02em] text-ink">Flux d&apos;événements</div>
              <div className="text-[11.5px] text-muted">Toutes sources · été 2026</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-md border border-line px-2.5 py-1 text-[11.5px] text-muted sm:inline">Filtrer</span>
              <span className="rounded-md bg-ink px-2.5 py-1 text-[11.5px] font-medium text-white">Envoyer vers Apidae</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.k} className="rounded-xl border border-line p-3">
                <div className="truncate text-[11px] text-muted">{k.k}</div>
                <div className="mt-1 text-[20px] font-semibold tracking-[-0.03em] text-ink">{k.v}</div>
                <div className="truncate text-[10.5px] text-sage">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-line">
            <div className="hidden grid-cols-[1.6fr_1fr_1.4fr_0.5fr_1.1fr] gap-3 border-b border-line bg-paper px-3.5 py-2 text-[10.5px] font-medium text-muted sm:grid">
              <span>Événement</span>
              <span>Date</span>
              <span>Lieu</span>
              <span>Sources</span>
              <span>Statut</span>
            </div>
            {ROWS.map((r) => {
              const s = STATUS[r.status];
              return (
                <div
                  key={r.title}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-line px-3.5 py-2.5 text-[12px] last:border-b-0 sm:grid-cols-[1.6fr_1fr_1.4fr_0.5fr_1.1fr]"
                >
                  <div className="min-w-0">
                    <div className="truncate font-medium text-ink">{r.title}</div>
                    <div className="truncate text-[10.5px] text-muted">{r.cat}</div>
                  </div>
                  <span className="hidden truncate text-muted sm:block">{r.date}</span>
                  <span className="hidden truncate text-muted sm:block">{r.place}</span>
                  <span className="hidden font-mono text-[11px] text-muted sm:block">{r.src}</span>
                  <span className={`badge justify-self-start ${s.cls}`}>
                    {r.status === "ready" ? <ICheck width={11} height={11} strokeWidth={2.5} /> : <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />}
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
