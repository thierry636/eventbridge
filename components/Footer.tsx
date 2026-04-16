import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-x py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-ink-500">
              La plateforme de centralisation et diffusion des événements
              culturels des territoires.
            </p>
          </div>

          <nav
            aria-label="Navigation pied de page"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500"
          >
            <a href="#" className="hover:text-ink-900">
              Mentions légales
            </a>
            <a href="#" className="hover:text-ink-900">
              RGPD
            </a>
            <a href="#" className="hover:text-ink-900">
              Contact
            </a>
            <a href="#" className="hover:text-ink-900">
              Statut
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EventBridge. Tous droits réservés.</p>
          <p>
            EventBridge est édité par{" "}
            <span className="font-semibold text-ink-700">EvenTrack</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
