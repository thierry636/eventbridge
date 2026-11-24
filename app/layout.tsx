import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const DESCRIPTION =
  "EventBridge capte en continu les événements publiés sur le web, les analyse avec l'IA et les restitue en fiches prêtes à intégrer dans votre système d'information touristique (Apidae, …).";

export const metadata: Metadata = {
  title: {
    default: "EventBridge — Le flux événementiel du web, capté, analysé, restitué",
    template: "%s · EventBridge",
  },
  description: DESCRIPTION,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventbridge.example.com"),
  openGraph: {
    title: "EventBridge — Le flux événementiel du web, capté, analysé, restitué",
    description: DESCRIPTION,
    type: "website",
    locale: "fr_FR",
    siteName: "EventBridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "EventBridge — Les événements du web, prêts pour les systèmes d'information touristique",
    description: DESCRIPTION,
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#0E0B26",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
