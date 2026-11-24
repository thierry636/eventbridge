import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-white/55">
      <div className="wrap flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[22rem]">
          <Logo />
          <p className="mt-4 text-[14px] leading-relaxed">
            La captation et la mise en forme des événements du web pour les systèmes
            d&apos;information touristique.
          </p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-8 gap-y-3 text-[14px]">
          <a href="#fonctionnement" className="hover:text-white">Fonctionnement</a>
          <a href="#volume" className="hover:text-white">Sources</a>
          <a href="#faq" className="hover:text-white">Questions</a>
          <a href="#test-gratuit" className="hover:text-white">Test gratuit</a>
          <a href="https://app.agendata.fr/" className="hover:text-white">Se connecter</a>
        </nav>
      </div>
      <div className="wrap mt-12 text-[13px] text-white/35">© {new Date().getFullYear()} Agendata</div>
    </footer>
  );
}
