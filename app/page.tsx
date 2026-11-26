import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { Volume } from "@/components/Volume";
import { ForWho } from "@/components/ForWho";
import { FreeTest } from "@/components/FreeTest";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { ScrollFx } from "@/components/ScrollFx";
import { MobileCta } from "@/components/MobileCta";
import { JsonLd } from "@/components/JsonLd";
import { SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-iris focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Features />
        <Volume />
        <ForWho />
        <FreeTest />
        <Faq />
      </main>
      <Footer />
      <MobileCta />
      <ScrollFx />
    </>
  );
}
