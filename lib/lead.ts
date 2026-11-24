/** Demande de test gratuit — partagé entre le formulaire et la route API. */
export type LeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  sites: string[];
};

export const MAX_SITES = 20;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Découpe la saisie libre (une adresse par ligne, ou séparées par virgules/espaces). */
export function parseSites(raw: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const token of raw.split(/[\s,;]+/)) {
    const t = token.trim();
    if (!t) continue;
    const withScheme = /^https?:\/\//i.test(t) ? t : `https://${t}`;
    try {
      const url = new URL(withScheme);
      if (!url.hostname.includes(".")) continue;
      const normalized = url.toString();
      if (!seen.has(normalized)) {
        seen.add(normalized);
        out.push(normalized);
      }
    } catch {
      // jeton non exploitable : ignoré
    }
  }
  return out;
}

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

export function validateLead(input: LeadInput): LeadErrors {
  const errors: LeadErrors = {};
  if (!input.firstName.trim()) errors.firstName = "Indiquez votre prénom.";
  if (!input.lastName.trim()) errors.lastName = "Indiquez votre nom.";
  if (!EMAIL_RE.test(input.email.trim())) errors.email = "Adresse email invalide.";
  if (input.description.trim().length < 10)
    errors.description = "Décrivez votre besoin en quelques mots (structure, territoire…).";
  if (input.sites.length === 0) errors.sites = "Ajoutez au moins un site à analyser.";
  else if (input.sites.length > MAX_SITES) errors.sites = `${MAX_SITES} sites maximum pour le test.`;
  if (input.firstName.length > 100 || input.lastName.length > 100) errors.lastName = "Nom trop long.";
  if (input.description.length > 4000) errors.description = "Description trop longue (4 000 caractères max).";
  return errors;
}
