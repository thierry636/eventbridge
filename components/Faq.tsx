import { FAQ } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white py-20 sm:scroll-mt-[72px] sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div data-reveal>
          <p className="kicker">FAQ</p>
          <h2 className="h-section mt-3">Vos questions, nos réponses.</h2>
          <p className="lede mt-6 max-w-[26rem]">
            Une autre question ? Posez-la dans le formulaire de test, nous y répondrons pendant
            la démonstration.
          </p>
        </div>
        <div data-reveal className="border-t border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[16.5px] font-medium leading-snug text-ink sm:py-6 sm:text-[17px] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-paper text-muted transition-colors duration-300 group-open:bg-iris group-open:text-white">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-open:rotate-45">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                </span>
              </summary>
              <p className="-mt-2 max-w-[38rem] pb-6 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
