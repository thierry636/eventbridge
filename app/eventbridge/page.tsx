import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Captation } from "@/components/Captation";
import { Pipeline } from "@/components/Pipeline";
import { Quality } from "@/components/Quality";
import { ForWho } from "@/components/ForWho";
import { FreeTest } from "@/components/FreeTest";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "EventBridge — Le flux événementiel du web, capté, analysé, restitué" },
  alternates: { canonical: "/eventbridge" },
  openGraph: { url: "/eventbridge" },
};

export default function EventBridgePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Captation />
        <Pipeline />
        <Quality />
        <ForWho />
        <FreeTest />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
