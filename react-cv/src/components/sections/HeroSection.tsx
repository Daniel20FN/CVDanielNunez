import type { CVData, Language } from "../../types/cv";
import { getLocalizedText } from "../../data/cv";

interface HeroSectionProps {
  cv: CVData;
  language: Language;
}

export function HeroSection({ cv, language }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-8 sm:px-10 lg:px-16 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">
              {getLocalizedText(cv.heroEyebrow, language)}
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-stone-950 sm:text-6xl lg:text-8xl">
              {getLocalizedText(cv.heroTitle, language)}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              {getLocalizedText(cv.heroRole, language)}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            {getLocalizedText(cv.heroIntro, language)}
          </p>

          <div className="flex flex-wrap gap-4">
            {cv.heroActions.map((action, index) => (
              <a
                key={action.href + action.label.es}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                className={index === 0
                  ? "rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-50 transition hover:bg-stone-800"
                  : "rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950"}
              >
                {getLocalizedText(action.label, language)}
              </a>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {cv.heroStats.map((stat) => (
              <article key={stat.value + stat.label.es} className="rounded-[2rem] border border-stone-200 bg-white/70 p-5 shadow-[0_20px_60px_rgba(28,25,23,0.06)] backdrop-blur">
                <p className="font-display text-4xl text-stone-950">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-500">
                  {getLocalizedText(stat.label, language)}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-40 w-40 rounded-full bg-amber-200/60 blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-10 hidden h-56 w-56 rounded-full bg-orange-200/60 blur-3xl lg:block" />
          <article className="relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-950 p-8 text-stone-50 shadow-[0_24px_90px_rgba(28,25,23,0.16)] sm:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
              {cv.brand}
            </p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="font-display text-3xl leading-tight sm:text-4xl">
                {language === "es" ? "Ingenieria, producto y ejecucion visual." : "Engineering, product, and visual execution."}
              </p>
              <p className="mt-6 max-w-md text-sm leading-7 text-stone-300">
                {getLocalizedText(cv.availability, language)}
              </p>
            </div>
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-sm text-stone-300 sm:grid-cols-2">
              {cv.profileFacts.map((fact) => (
                <div key={fact.label.es} className="space-y-1">
                  <p className="uppercase tracking-[0.2em] text-stone-500">
                    {getLocalizedText(fact.label, language)}
                  </p>
                  <p className="text-base text-stone-50">{getLocalizedText(fact.value, language)}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                {language === "es" ? "Tecnologias destacadas" : "Featured technologies"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cv.featuredTechnologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
