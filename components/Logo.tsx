import type { SVGProps } from "react";

/** Monogramme : une arche de pont posée sur son tablier — le web relié au système d'information touristique. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" rx="8" fill="#4C43C9" />
      <path d="M6 21.5c3-6.5 6.5-9.5 10-9.5s7 3 10 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 21.5h22" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 16.2v5.3M16 12v9.5M21 16.2v5.3" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-8 w-8" />
      <span className={`text-[17px] font-semibold tracking-[-0.01em] ${tone === "light" ? "text-white" : "text-ink"}`}>
        EventBridge
      </span>
    </span>
  );
}
