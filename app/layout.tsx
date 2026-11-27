import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: SITE_TITLE, template: "%s · Agendata" },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
    types: { "text/plain": [{ url: "/llms.txt", title: "llms.txt" }] },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendata — Les événements du web, prêts pour les systèmes d'information touristique",
    description: SITE_DESCRIPTION,
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

const GA_ID = "G-HDWEC9FKM9";

export const viewport: Viewport = {
  themeColor: "#16142B",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Active les apparitions au défilement avant le premier rendu (pas de flash). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Script
          id="google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
// Trafic interne : ouvrir une fois /?interne=1 sur chaque appareil (/?interne=0 pour annuler).
var internal = false;
try {
  var flag = new URLSearchParams(location.search).get('interne');
  if (flag === '1') localStorage.setItem('agendata_interne', '1');
  if (flag === '0') localStorage.removeItem('agendata_interne');
  internal = localStorage.getItem('agendata_interne') === '1';
} catch (e) {}
gtag('config', '${GA_ID}', internal ? { traffic_type: 'internal' } : {});`}
        </Script>
      </body>
    </html>
  );
}
