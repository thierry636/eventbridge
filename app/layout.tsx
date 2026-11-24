import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const DESCRIPTION =
  "EventBridge capte en masse les événements publiés sur le web, les normalise, les dédoublonne et les restitue en fiches prêtes à intégrer dans votre système d'information touristique.";

export const metadata: Metadata = {
  title: {
    default: "EventBridge — Le flux événementiel du web, prêt pour votre SIT",
    template: "%s · EventBridge",
  },
  description: DESCRIPTION,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventbridge.example.com"),
  openGraph: {
    title: "EventBridge — Le flux événementiel du web, prêt pour votre SIT",
    description: DESCRIPTION,
    type: "website",
    locale: "fr_FR",
    siteName: "EventBridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "EventBridge — Captation et mise en forme des événements pour les SIT",
    description: DESCRIPTION,
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#16142B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
