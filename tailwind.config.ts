import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte EventBridge : encre indigo, papier froid, un seul accent iris.
        ink: { DEFAULT: "#16142B", 2: "#1F1C38", 3: "#2C2849" },
        paper: "#F4F4F7",
        line: "#E3E2EA",
        body: "#2B2840",
        muted: "#6E6B85",
        iris: { DEFAULT: "#4C43C9", dark: "#3B33A6", soft: "#ECEBFB", light: "#B9B3FF" },
        coral: "#D9604E",
        sage: "#2F9E77",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1240px" },
      boxShadow: {
        card: "0 1px 2px rgba(22,20,43,0.04), 0 8px 24px -12px rgba(22,20,43,0.12)",
        float: "0 40px 120px -30px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
