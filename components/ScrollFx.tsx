"use client";

import { useEffect } from "react";

/**
 * Fait apparaître les éléments marqués `data-reveal` quand ils entrent à
 * l'écran. `data-reveal-stagger` sur un parent décale ses enfants directs.
 */
export function ScrollFx() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
      const step = Number(parent.dataset.revealStagger) || 80;
      Array.from(parent.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.setAttribute("data-reveal", "");
        el.style.setProperty("--d", `${i * step}ms`);
      });
    });

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
