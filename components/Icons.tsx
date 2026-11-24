import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
  </svg>
);
export const ISpark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
  </svg>
);
export const ILayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);
export const IMerge = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3v5a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v5" />
    <path d="M18 3v5a4 4 0 0 1-4 4" />
  </svg>
);
export const IBolt = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
  </svg>
);
export const IEye = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const IUpload = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 18a4 4 0 0 1-.6-8A6 6 0 0 1 18 9a4 4 0 0 1-1 8.9" />
    <path d="M12 12v8M9 15l3-3 3 3" />
  </svg>
);
export const ICheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12.5 10 17l9-9" />
  </svg>
);
export const IBuilding = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M3 21h18M9 10h.01M15 10h.01" />
  </svg>
);
export const IMap = (p: P) => (
  <svg {...base} {...p}>
    <path d="m9 4-6 3v13l6-3 6 3 6-3V4l-6 3-6-3Z" />
    <path d="M9 4v13M15 7v13" />
  </svg>
);
export const IGrid = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
export const IDatabase = (p: P) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);
export const IArrow = (p: P) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
