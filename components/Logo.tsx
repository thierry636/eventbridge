import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="#2563EB" />
      <path
        d="M9 18c0-2.21 1.79-4 4-4h2.25v2.5H13a1.5 1.5 0 0 0 0 3h2.25V22H13c-2.21 0-4-1.79-4-4Z"
        fill="white"
      />
      <path
        d="M23 14c0 2.21-1.79 4-4 4h-2.25v-2.5H19a1.5 1.5 0 0 0 0-3h-2.25V10H19c2.21 0 4 1.79 4 4Z"
        fill="white"
      />
      <rect x="14" y="15" width="4" height="2" rx="1" fill="white" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8" />
      <span className="text-lg font-bold tracking-tight text-ink-900">
        EventBridge
      </span>
    </div>
  );
}
