"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sur mobile : rail horizontal à aimantation, avec pastilles (ou onglets
 * nommés) synchronisés. Au-delà du point de rupture : la grille d'origine,
 * décrite par `className`, s'applique telle quelle.
 */
const MODES = {
  sm: {
    rail: "max-sm:-mx-4 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:gap-3 max-sm:overflow-x-auto max-sm:px-4 max-sm:pb-2 max-sm:scroll-px-4 max-sm:[&>*]:w-[82%] max-sm:[&>*]:flex-none max-sm:[&>*]:snap-start",
    nav: "sm:hidden",
  },
  lg: {
    rail: "max-lg:-mx-4 max-lg:flex max-lg:snap-x max-lg:snap-mandatory max-lg:gap-3 max-lg:overflow-x-auto max-lg:px-4 max-lg:pb-2 max-lg:scroll-px-4 max-lg:[&>*]:w-[86%] max-lg:[&>*]:max-w-[420px] max-lg:[&>*]:flex-none max-lg:[&>*]:snap-start",
    nav: "lg:hidden",
  },
} as const;

export function SnapRail({
  children,
  className = "",
  until = "sm",
  labels,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  until?: keyof typeof MODES;
  labels?: string[];
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);
  const mode = MODES[until];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const kids = Array.from(el.children) as HTMLElement[];
        const left = el.scrollLeft + 16;
        let best = 0;
        let dist = Infinity;
        kids.forEach((k, i) => {
          const d = Math.abs(k.offsetLeft - left);
          if (d < dist) {
            dist = d;
            best = i;
          }
        });
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = kids.length - 1;
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Garde l'onglet actif visible dans la barre d'onglets.
  useEffect(() => {
    const bar = tabs.current;
    const tab = bar?.children[active] as HTMLElement | undefined;
    if (bar && tab) bar.scrollTo({ left: tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const go = (i: number) => {
    const el = ref.current;
    const kid = el?.children[i] as HTMLElement | undefined;
    if (el && kid) el.scrollTo({ left: kid.offsetLeft - 16, behavior: "smooth" });
  };

  const dark = tone === "dark";

  return (
    <>
      {labels ? (
        <div
          ref={tabs}
          className={`rail -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 ${mode.nav}`}
          role="tablist"
          aria-label="Étapes"
        >
          {labels.map((l, i) => (
            <button
              key={l}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => go(i)}
              className={`flex flex-none items-center gap-2 rounded-full py-2 pl-2 pr-3.5 text-[13px] font-medium transition-all duration-300 ${
                active === i
                  ? "bg-ink text-white shadow-lg shadow-iris/20"
                  : dark
                    ? "bg-white/[0.06] text-white/60"
                    : "bg-white text-muted ring-1 ring-line"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10.5px] tabular-nums transition-colors ${
                  active === i ? "bg-iris text-white" : "bg-paper text-muted"
                }`}
              >
                {i + 1}
              </span>
              {l}
            </button>
          ))}
        </div>
      ) : null}

      <div ref={ref} className={`rail ${mode.rail} ${className}`}>
        {children}
      </div>

      <div className={`mt-5 flex items-center justify-center gap-1.5 ${mode.nav}`} aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            tabIndex={-1}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-iris" : dark ? "w-1.5 bg-white/20" : "w-1.5 bg-ink/15"
            }`}
          />
        ))}
      </div>
    </>
  );
}
