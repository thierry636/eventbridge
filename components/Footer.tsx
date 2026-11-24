import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-night-950 py-12 text-white/60">
      <div className="container-x flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Captation, normalisation et dédoublonnage des événements du web, restitués prêts pour
            les systèmes d&apos;information touristique.
          </p>
        </div>
        <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#pipeline" className="hover:text-white">Pipeline</a>
          <a href="#qualite" className="hover:text-white">Qualité des données</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#test-gratuit" className="hover:text-white">Test gratuit</a>
        </nav>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} EventBridge. Tous droits réservés.
      </div>
    </footer>
  );
}
