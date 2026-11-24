"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#volume", label: "Grand volume" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#faq", label: "Questions" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-ink/95 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link href="/eventbridge" aria-label="EventBridge, accueil">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[14px] text-white/65 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#test-gratuit" className="btn-iris hidden !py-2.5 !text-[14px] lg:inline-flex">
          Demander un test gratuit
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 lg:hidden">
          <div className="wrap flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-[15px] text-white/80"
              >
                {link.label}
              </a>
            ))}
            <a href="#test-gratuit" onClick={() => setOpen(false)} className="btn-light mt-4 w-full">
              Demander un test gratuit
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
