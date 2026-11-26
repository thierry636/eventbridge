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
        {/* Google Analytics : chargé uniquement sur le domaine de production,
            pour ne compter ni le développement local ni les préversions. */}
        <Script id="google-tag-init" strategy="afterInteractive">
          {`(function () {
  var h = location.hostname;
  if (h !== 'agendata.fr' && h !== 'www.agendata.fr') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
  document.head.appendChild(s);
  // Clic vers la prise de rendez-vous (Calendly), où qu'il soit sur la page.
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*="calendly.com"]') : null;
    if (a) gtag('event', 'prise_rendez_vous', { link_url: a.href, transport_type: 'beacon' });
  }, true);
})();`}
        </Script>
      </body>
    </html>
  );
}
