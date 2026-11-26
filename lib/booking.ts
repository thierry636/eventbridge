/** Page de prise de rendez-vous (Calendly) — démonstration de 30 minutes. */
export const BOOKING_URL = "https://calendly.com/thierry-almes-roadbridge/30min";

/** URL d'intégration Calendly, préremplie avec le nom et l'email si connus. */
export function bookingEmbedUrl(prefill: { name?: string; email?: string } = {}): string {
  const url = new URL(BOOKING_URL);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("embed_domain", "www.agendata.fr");
  url.searchParams.set("hide_gdpr_banner", "1");
  if (prefill.name) url.searchParams.set("name", prefill.name);
  if (prefill.email) url.searchParams.set("email", prefill.email);
  return url.toString();
}
