import type { SVGProps } from "react";

/**
 * Monogramme Agendata : une page d'agenda dont le contenu devient des lignes
 * de données — le point lavande, c'est la fiche structurée qui en sort.
 * Même dessin que le favicon et que le logo de l'application.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" rx="8" fill="#4C43C9" />
      <rect x="7" y="8.5" width="18" height="16.5" rx="3.5" stroke="#fff" strokeWidth="1.8" />
      <path d="M7.9 13.2h16.2" stroke="#fff" strokeWidth="1.8" />
      <path d="M12 6.3v4.2M20 6.3v4.2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.8 17.3h10.4M10.8 21h5.6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20.2" cy="21" r="1.5" fill="#B9B3FF" />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-8 w-8" />
      <span className={`text-[18px] font-semibold tracking-[-0.03em] ${tone === "light" ? "text-white" : "text-ink"}`}>
        Agendata
      </span>
    </span>
  );
}
