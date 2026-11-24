import { useId, type SVGProps } from "react";

/** Le monogramme EventBridge : un pont qui relie le web (à gauche) au SIT (à droite). */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5B4BF5" />
          <stop offset="0.6" stopColor="#9B4DFF" />
          <stop offset="1" stopColor="#FF6B5B" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${id})`} />
      <path d="M7 27c4-9 9-13 13-13s9 4 13 13" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M6 27h28" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M14 18.6V27M20 14v13M26 18.6V27"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".75"
      />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9" />
      <span
        className={`font-display text-[20px] font-bold tracking-[-0.03em] ${
          tone === "light" ? "text-white" : "text-ink-900"
        }`}
      >
        Event
        <span className={tone === "light" ? "gradient-text" : "gradient-text-strong"}>Bridge</span>
      </span>
    </span>
  );
}
