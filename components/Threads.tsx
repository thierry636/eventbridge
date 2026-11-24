"use client";

import { useEffect, useRef, useState } from "react";
/**
 * Le motif signature : chaque source du territoire tire ses fils, qui
 * convergent en un seul point et aboutissent à une fiche propre.
 * Dessiné une fois au chargement ; quelques points lumineux circulent ensuite.
 */

const SOURCES = [
  { label: "Site de la mairie", dup: true },
  { label: "Comité des fêtes", dup: false },
  { label: "Page Facebook de l'association", dup: true },
  { label: "Programme de l'été (PDF)", dup: true },
  { label: "Théâtre municipal", dup: false },
  { label: "Billetterie en ligne", dup: false },
  { label: "Médiathèque", dup: false },
  { label: "Office de tourisme voisin", dup: false },
  { label: "Affiche publiée sur Instagram", dup: false },
];

const W = 820;
const H = 480;
const CX = W - 40;
const CY = H / 2;
const OFFSETS = [-7, -3.5, 0, 3.5, 7];

function threadPath(i: number, j: number) {
  const y = 34 + i * ((H - 68) / (SOURCES.length - 1)) + OFFSETS[j];
  const x = 236 + ((i * 7 + j * 13) % 22);
  return `M${x} ${y} C ${x + 260} ${y}, ${CX - 200} ${CY}, ${CX} ${CY}`;
}

const PULSES = [
  { i: 0, j: 2, dur: 5.5, begin: 2.4 },
  { i: 2, j: 1, dur: 6.5, begin: 3.4 },
  { i: 3, j: 3, dur: 5, begin: 4.1 },
  { i: 5, j: 2, dur: 7, begin: 2.9 },
  { i: 7, j: 4, dur: 6, begin: 4.8 },
  { i: 8, j: 0, dur: 6.8, begin: 3.7 },
];

export function Threads() {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  // Le dessin démarre quand le visuel entre dans l'écran.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className={`block h-auto w-full ${visible ? "" : "is-paused"}`}
      aria-hidden="true"
    >
      {SOURCES.map((s, i) => {
        const y = 34 + i * ((H - 68) / (SOURCES.length - 1));
        return (
          <g key={s.label} className="reveal" style={{ animationDelay: `${300 + i * 60}ms` }}>
            <text
              x="220"
              y={y + 4.5}
              textAnchor="end"
              className="hidden fill-white/55 font-sans text-[13px] lg:inline"
            >
              {s.label}
            </text>
            <circle cx="230" cy={y} r="2.5" fill={s.dup ? "#D9604E" : "#B9B3FF"} />
          </g>
        );
      })}

      {SOURCES.flatMap((_, i) =>
        OFFSETS.map((__, j) => (
          <path
            key={`${i}-${j}`}
            id={`t-${i}-${j}`}
            d={threadPath(i, j)}
            pathLength={1}
            fill="none"
            stroke="#B9B3FF"
            strokeOpacity={0.16 + ((i + j) % 4) * 0.09}
            strokeWidth={0.8}
            className="thread"
            style={{ animationDelay: `${400 + i * 70 + j * 25}ms` }}
          />
        )),
      )}

      <path
        d={`M${CX} ${CY} H${W}`}
        stroke="#fff"
        strokeWidth="1.5"
        pathLength={1}
        className="thread"
        style={{ animationDelay: "1.9s", animationDuration: "0.6s" }}
      />
      <circle cx={CX} cy={CY} r="4" fill="#fff" className="reveal" style={{ animationDelay: "2s" }} />
      <circle cx={CX} cy={CY} r="12" fill="none" stroke="#fff" strokeOpacity=".25" className="reveal" style={{ animationDelay: "2.1s" }} />

      {PULSES.map((p) => (
        <circle key={`${p.i}-${p.j}`} r="2" fill="#fff" className="pulse" opacity="0">
          <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.85;1" dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" />
          <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.6 1">
            <mpath href={`#t-${p.i}-${p.j}`} />
          </animateMotion>
        </circle>
      ))}
    </svg>
  );
}
