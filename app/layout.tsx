import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const DESCRIPTION =
  "Agendata capte en continu les événements publiés sur le web, les analyse avec l'IA et les restitue en fiches prêtes à intégrer dans votre système d'information touristique (Apidae, …).";

export const metadata: Metadata = {
  title: {
    default: "Agendata — Le flux événementiel du web, capté, analysé, restitué",
    template: "%s · Agendata",
  },
  description: DESCRIPTION,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://agendata.fr"),
  openGraph: {
    title: "Agendata — Le flux événementiel du web, capté, analysé, restitué",
    description: DESCRIPTION,
    type: "website",
    locale: "fr_FR",
    siteName: "Agendata",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendata — Les événements du web, prêts pour les systèmes d'information touristique",
    description: DESCRIPTION,
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

const GTM_ID = "GTM-N38SKH6J";

export const viewport: Viewport = {
  themeColor: "#16142B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Script
          id="google-tag"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
      </body>
    </html>
  );
}
