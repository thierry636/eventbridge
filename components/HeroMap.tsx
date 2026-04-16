// Stylized "carte de France" with pulsing event dots — pure SVG, no JS.

const DOTS = [
  { cx: 180, cy: 110, color: "#2563EB", delay: "0s", label: "Lille" },
  { cx: 230, cy: 175, color: "#10B981", delay: "0.4s", label: "Reims" },
  { cx: 145, cy: 175, color: "#F59E0B", delay: "0.8s", label: "Rennes" },
  { cx: 175, cy: 230, color: "#2563EB", delay: "1.1s", label: "Nantes" },
  { cx: 235, cy: 260, color: "#10B981", delay: "0.6s", label: "Lyon" },
  { cx: 195, cy: 305, color: "#F59E0B", delay: "1.3s", label: "Toulouse" },
  { cx: 265, cy: 320, color: "#2563EB", delay: "0.2s", label: "Marseille" },
  { cx: 200, cy: 200, color: "#2563EB", delay: "1.6s", label: "Paris" },
];

export function HeroMap() {
  return (
    <div className="relative">
      {/* card frame */}
      <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-4 shadow-card sm:p-6">
        {/* faint grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-60" />

        <div className="relative aspect-[4/3] w-full">
          <svg
            viewBox="0 0 400 420"
            className="h-full w-full"
            role="img"
            aria-label="Carte de France stylisée avec événements en temps réel"
          >
            <defs>
              <linearGradient id="franceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#EFF6FF" />
              </linearGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* Stylized France hexagon outline */}
            <path
              d="M180 60
                 C220 60 260 80 280 110
                 C310 130 320 160 315 195
                 C325 220 320 255 305 285
                 C295 320 265 350 235 360
                 C220 380 195 385 175 375
                 C150 380 125 365 115 340
                 C95 325 85 295 95 270
                 C80 245 80 215 100 195
                 C95 165 115 135 145 120
                 C150 90 165 65 180 60 Z"
              fill="url(#franceFill)"
              stroke="#BFDBFE"
              strokeWidth="1.5"
            />

            {/* Corsica */}
            <path
              d="M315 330
                 C322 330 328 338 326 348
                 C328 360 320 372 312 370
                 C306 365 305 352 308 342
                 C309 336 312 332 315 330 Z"
              fill="url(#franceFill)"
              stroke="#BFDBFE"
              strokeWidth="1.5"
            />

            {/* connecting lines */}
            <g
              stroke="#93C5FD"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.7"
            >
              <line x1="200" y1="200" x2="180" y2="110" />
              <line x1="200" y1="200" x2="230" y2="175" />
              <line x1="200" y1="200" x2="145" y2="175" />
              <line x1="200" y1="200" x2="175" y2="230" />
              <line x1="200" y1="200" x2="235" y2="260" />
              <line x1="200" y1="200" x2="195" y2="305" />
              <line x1="200" y1="200" x2="265" y2="320" />
            </g>

            {/* dots */}
            {DOTS.map((d) => (
              <g key={d.label}>
                <circle
                  cx={d.cx}
                  cy={d.cy}
                  r="10"
                  fill={d.color}
                  opacity="0.25"
                  style={{
                    transformOrigin: `${d.cx}px ${d.cy}px`,
                    animation: `ping 2.4s cubic-bezier(0,0,0.2,1) ${d.delay} infinite`,
                  }}
                />
                <circle cx={d.cx} cy={d.cy} r="4.5" fill={d.color} />
                <circle cx={d.cx} cy={d.cy} r="1.8" fill="white" />
              </g>
            ))}

            {/* small "Paris" highlight ring */}
            <circle
              cx="200"
              cy="200"
              r="14"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1.2"
              opacity="0.6"
            />
          </svg>

          {/* floating mini badges */}
          <div className="absolute left-4 top-4 hidden rounded-full border border-ink-100 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-ink-700 shadow-soft backdrop-blur sm:inline-flex">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            12 sources synchronisées
          </div>
          <div className="absolute right-4 top-4 hidden rounded-full border border-ink-100 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-ink-700 shadow-soft backdrop-blur sm:inline-flex">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-600" />
            Temps réel
          </div>
        </div>

        {/* Event card overlay */}
        <div className="absolute -bottom-3 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:bottom-4 sm:left-6 sm:translate-x-0 sm:w-[78%]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 2v3M10 15v3M2 10h3M15 10h3M4.5 4.5l2 2M13.5 13.5l2 2M4.5 15.5l2-2M13.5 6.5l2-2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="2.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">
                Festival des Lumières
              </p>
              <p className="mt-0.5 text-xs text-ink-500">
                12 sources synchronisées · Lyon · 8–10 déc.
              </p>
            </div>
            <span className="ml-2 inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 6.5l2.5 2.5L9.5 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Publié
            </span>
          </div>
        </div>
      </div>

      {/* halo behind */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-200/50 via-transparent to-emerald-200/40 blur-2xl" />
    </div>
  );
}
