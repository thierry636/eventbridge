const STATS = [
  {
    value: "+95%",
    label: "de couverture événementielle",
    sub: "vs. saisie manuelle",
  },
  {
    value: "−80%",
    label: "de temps de saisie",
    sub: "pour vos équipes",
  },
  {
    value: "< 1h",
    label: "de latence",
    sub: "entre publication source et diffusion",
  },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-12 text-white shadow-card sm:px-12 sm:py-16">
          {/* decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">
              Bénéfices mesurés
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              Plus de couverture, moins de saisie, et une donnée toujours à
              jour.
            </h2>

            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="border-t border-white/20 pt-6"
                >
                  <dt className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2">
                    <span className="block text-sm font-semibold text-white">
                      {s.label}
                    </span>
                    <span className="block text-xs text-brand-100">
                      {s.sub}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
