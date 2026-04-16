import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ForWho } from "@/components/ForWho";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Faq } from "@/components/Faq";
import { CtaForm } from "@/components/CtaForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Centralisez et diffusez les événements de votre territoire",
  description:
    "EventBridge collecte, normalise (Apidae / DATAtourisme) et diffuse en temps réel les événements culturels de votre territoire. Pour les offices de tourisme, collectivités, départements et régions.",
  alternates: {
    canonical: "/eventbridge",
  },
  openGraph: {
    title:
      "EventBridge — Centralisez et diffusez les événements de votre territoire",
    description:
      "Collecte automatique, normalisation Apidae/DATAtourisme, diffusion temps réel multi-canaux.",
    url: "/eventbridge",
    type: "website",
    locale: "fr_FR",
  },
};

export default function EventBridgePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <ForWho />
        <Features />
        <Stats />
        <Faq />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
