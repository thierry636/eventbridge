import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identité partagée avec l'application : nuit, indigo, violet, corail.
        night: {
          950: "#07051A",
          900: "#0E0B26",
          800: "#161236",
          700: "#211C4A",
          600: "#2E2862",
        },
        indigo: {
          50: "#F1EFFF",
          100: "#E4E0FF",
          200: "#C9B8FF",
          400: "#7D6CFF",
          500: "#5B4BF5",
          600: "#4A3AE0",
          700: "#3A2DB8",
        },
        violet: {
          400: "#B27DFF",
          500: "#9B4DFF",
        },
        coral: {
          200: "#FFB4AA",
          400: "#FF8A7D",
          500: "#FF6B5B",
        },
        mint: {
          300: "#5EF0C0",
          500: "#12B886",
        },
        ink: {
          900: "#14112E",
          700: "#3B3757",
          500: "#6B6787",
          400: "#9A97B3",
          200: "#E4E2EF",
          100: "#F0EFF6",
          50: "#F8F7FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(20, 17, 46, 0.14)",
        card: "0 24px 60px -24px rgba(91, 75, 245, 0.35)",
        glass: "0 20px 50px -20px rgba(0, 0, 0, 0.55)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        flow: "flow 3.2s linear infinite",
        marquee: "marquee 40s linear infinite",
        stream: "stream 36s linear infinite",
        "word-in": "wordIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        shine: "shine 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flow: {
          "0%": { strokeDashoffset: "40" },
          "100%": { strokeDashoffset: "0" },
        },
        stream: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        wordIn: {
          "0%": { opacity: "0", transform: "translateY(0.35em)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
