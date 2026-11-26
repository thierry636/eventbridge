"use client";

import { useEffect, useRef, useState } from "react";

/** Version verticale du motif des fils, pour mobile : les sources tombent
 *  en pluie de fils et convergent vers la fiche unique, en dessous. */

const SOURCES = [
  { label: "Mairie", dup: true },
  { label: "Comité des fêtes", dup: false },
  { label: "Facebook", dup: true },
  { label: "PDF de l'été", dup: true },
  { label: "Théâtre", dup: false },
  { label: "Billetterie", dup: false },
  { label: "Médiathèque", dup: false },
  { label: "Instagram", dup: false },
];

const W = 360;
const H = 210;
const CX = W / 2;
const CY = H - 6;
const OFFSETS = [-6, -2, 2, 6];

function x0(i: number) {
  return 18 + i * ((W - 36) / (SOURCES.length - 1));
}
function path(i: number, j: number) {
  const x = x0(i) + OFFSETS[j];
  return `M${x} 4 C ${x} 110, ${CX} 90, ${CX} ${CY}`;
}

const PULSES = [
  { i: 0, j: 1, dur: 4.2, begin: 2.2 },
  { i: 2, j: 2, dur: 5, begin: 2.8 },
  { i: 3, j: 0, dur: 4.6, begin: 3.4 },
  { i: 5, j: 3, dur: 5.4, begin: 2.5 },
  { i: 7, j: 1, dur: 4.8, begin: 3.9 },
];

export function ThreadsMobile() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
    <div ref={ref} className={visible ? "" : "is-paused"} aria-hidden="true">
      <ul className="flex flex-wrap justify-center gap-1.5">
        {SOURCES.map((s, i) => (
          <li
            key={s.label}
            className="reveal flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[12px] text-white/70"
            style={{ animationDelay: `${200 + i * 70}ms` }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${s.dup ? "bg-coral" : "bg-iris-light"}`} />
            {s.label}
          </li>
        ))}
      </ul>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 block h-auto w-full">
        {SOURCES.flatMap((_, i) =>
          OFFSETS.map((__, j) => (
            <path
              key={`${i}-${j}`}
              id={`tm-${i}-${j}`}
              d={path(i, j)}
              pathLength={1}
              fill="none"
              stroke="#B9B3FF"
              strokeOpacity={0.18 + ((i + j) % 4) * 0.1}
              strokeWidth={0.8}
              className="thread"
              style={{ animationDelay: `${500 + i * 60 + j * 30}ms`, animationDuration: "1.6s" }}
            />
          )),
        )}
        <circle cx={CX} cy={CY} r="4" fill="#fff" className="reveal" style={{ animationDelay: "1.8s" }} />
        <circle cx={CX} cy={CY} r="11" fill="none" stroke="#fff" strokeOpacity=".3" className="reveal" style={{ animationDelay: "1.9s" }} />
        {PULSES.map((p) => (
          <circle key={`${p.i}-${p.j}`} r="2.2" fill="#fff" className="pulse" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" />
            <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.6 1">
              <mpath href={`#tm-${p.i}-${p.j}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  );
}
