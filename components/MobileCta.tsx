"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/booking";

/** Barre d'action flottante, mobile uniquement : apparaît après le hero,
 *  s'efface quand le formulaire ou le pied de page est à l'écran. */
export function MobileCta() {
  const [past, setPast] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = ["test-gratuit", "site-footer"]
      .map((id) => document.getElementById(id))
      .filter((x): x is HTMLElement => Boolean(x));
    const seen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
        setHidden(seen.size > 0);
      },
      { threshold: 0.05 },
    );
    targets.forEach((t) => io.observe(t));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = past && !hidden;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-500 ease-out lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[130%] opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-ink/85 p-2 shadow-[0_20px_50px_-12px_rgba(22,20,43,0.6)] backdrop-blur-xl">
        <a
          href="#test-gratuit"
          tabIndex={show ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-iris text-[15px] font-semibold text-white shadow-lg shadow-iris/30 active:scale-[0.98]"
        >
          <span className="relative flex h-2 w-2">
            <span className="ping-dot h-2 w-2 rounded-full bg-white" />
          </span>
          Test gratuit sur mes sources
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          aria-label="Prendre rendez-vous"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-white/15 text-white active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
            <path d="M3.5 10h17M8 3v4M16 3v4" />
          </svg>
        </a>
      </div>
    </div>
  );
}
