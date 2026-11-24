import { permanentRedirect } from "next/navigation";

/** Ancienne adresse de la page : on garde les liens déjà partagés. */
export default function LegacyAgendataPage() {
  permanentRedirect("/");
}
