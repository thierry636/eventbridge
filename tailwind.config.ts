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
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { page: "1240px" },
    },
  },
  plugins: [],
};

export default config;
