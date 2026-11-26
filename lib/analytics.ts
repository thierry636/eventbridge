/** Envoie un événement à Google Analytics, s'il est chargé (production uniquement). */
export function track(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof g === "function") g("event", name, params);
}
