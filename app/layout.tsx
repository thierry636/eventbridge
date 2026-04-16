import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EventBridge — Centralisez et diffusez les événements de votre territoire",
    template: "%s · EventBridge",
  },
  description:
    "EventBridge collecte automatiquement les événements culturels publiés sur votre territoire, les normalise au standard DATAtourisme et les diffuse en temps réel sur tous vos canaux.",
  metadataBase: new URL("https://eventbridge.example.com"),
  openGraph: {
    title:
      "EventBridge — La plateforme événementielle des territoires",
    description:
      "Collecte, normalisation et diffusion en temps réel des événements culturels de votre territoire. Compatible DATAtourisme.",
    type: "website",
    locale: "fr_FR",
    siteName: "EventBridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "EventBridge — La plateforme événementielle des territoires",
    description:
      "Collectez, normalisez et diffusez les événements culturels de votre territoire en temps réel.",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
