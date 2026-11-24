import type { ReactNode } from "react";
import { IconBolt, IconEye, IconGlobe, IconLayers, IconMerge, IconSpark, IconUpload } from "./Icons";

const STEPS: { icon: ReactNode; title: string; text: string; tint: string }[] = [
  {
    icon: <IconGlobe />,
    title: "Captation",
    text: "Parcours régulier de toutes vos sources : pages d'agenda, fiches détail, PDF, publications.",
    tint: "bg-indigo-500/20 text-indigo-200",
  },
  {
    icon: <IconSpark />,
    title: "Extraction IA",
    text: "L'IA lit chaque contenu comme un humain et isole les événements : titre, dates, lieu, tarifs, contacts.",
    tint: "bg-violet-500/20 text-violet-400",
  },
  {
    icon: <IconLayers />,
    title: "Normalisation",
    text: "Dates et horaires au format standard, adresses géocodées, catégories alignées sur le thésaurus du SIT.",
    tint: "bg-indigo-500/20 text-indigo-200",
  },
  {
    icon: <IconMerge />,
    title: "Dédoublonnage",
    text: "Le même événement vu sur plusieurs sources devient une fiche unique, enrichie du meilleur de chacune.",
    tint: "bg-coral-500/20 text-coral-200",
  },
  {
    icon: <IconBolt />,
    title: "Détection de changements",
    text: "Horaire décalé, annulation, nouveau tarif : chaque modification est repérée et tracée.",
    tint: "bg-coral-500/20 text-coral-200",
  },
  {
    icon: <IconEye />,
    title: "Relecture",
    text: "Votre équipe valide en un clic ce qui part au SIT. Rien n'est publié sans contrôle si vous le souhaitez.",
    tint: "bg-mint-500/20 text-mint-300",
  },
  {
    icon: <IconUpload />,
    title: "Restitution SIT",
    text: "Fiches créées et mises à jour directement dans votre SIT, ou exposées par API et export standardisé.",
    tint: "bg-mint-500/20 text-mint-300",
  },
];

export function Pipeline() {
  return (
    <section id="pipeline" className="night-bg grid-overlay relative scroll-mt-16 overflow-hidden py-20 text-white sm:py-28">
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-dark">
            <span className="h-px w-6 bg-indigo-200" />
            Le pipeline
            <span className="h-px w-6 bg-indigo-200" />
          </span>
          <h2 className="section-title-dark">
            Du contenu brut à la fiche SIT,{" "}
            <span className="gradient-text">en sept étapes automatisées.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Chaque événement traverse la même chaîne de traitement. Vous gardez la main sur la
            validation ; EventBridge fait tout le reste.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`glass-card relative p-5 ${i === STEPS.length - 1 ? "lg:col-span-1" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${step.tint}`}>
                  {step.icon}
                </span>
                <span className="font-mono text-xs text-white/35">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.text}</p>
            </li>
          ))}
          <li className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 text-white"
            style={{ background: "linear-gradient(135deg, #5B4BF5 0%, #9B4DFF 60%, #FF6B5B 130%)" }}
          >
            <p className="font-display text-xl font-bold leading-snug tracking-[-0.02em]">
              Et si on le faisait tourner sur vos propres sources ?
            </p>
            <a
              href="#test-gratuit"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Demander le test gratuit →
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
