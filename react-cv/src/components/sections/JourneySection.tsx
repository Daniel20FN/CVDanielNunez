import { getLocalizedText } from "../../data/cv";
import type { CVData, Language } from "../../types/cv";
import { SectionHeading } from "../SectionHeading";

interface JourneySectionProps {
  cv: CVData;
  language: Language;
}

export function JourneySection({ cv, language }: JourneySectionProps) {
  return (
    <section id="trayectoria" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={language === "es" ? "Trayectoria" : "Journey"}
          title={getLocalizedText(cv.experienceTitle, language)}
          description={getLocalizedText(cv.educationTitle, language)}
        />

        <div className="grid gap-8 xl:grid-cols-2">
          <div className="rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-[0_24px_90px_rgba(28,25,23,0.07)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              {language === "es" ? "Experiencia" : "Experience"}
            </p>
            <div className="mt-8 space-y-6">
              {cv.experiences.map((item) => (
                <article key={item.company} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-stone-500">{item.company}</p>
                      <h3 className="mt-2 font-display text-2xl text-stone-950">
                        {getLocalizedText(item.role, language)}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-stone-600">{item.period}</p>
                  </div>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    {getLocalizedText(item.description, language)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 space-y-2">
                    {item.highlights.map((highlight) => (
                      <p key={highlight.es} className="text-sm leading-7 text-stone-600">
                        {getLocalizedText(highlight, language)}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-stone-200 bg-stone-950 p-8 text-stone-50 shadow-[0_24px_90px_rgba(28,25,23,0.14)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
              {language === "es" ? "Educacion" : "Education"}
            </p>
            <div className="mt-8 space-y-8">
              {cv.educationGroups.map((group) => (
                <div key={group.title.es} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{getLocalizedText(group.title, language)}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-300">
                      {getLocalizedText(group.description, language)}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <article key={item.institution + item.program.es + item.period} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">{item.institution}</p>
                            <h4 className="mt-2 text-xl text-white">
                              {getLocalizedText(item.program, language)}
                            </h4>
                            {item.note ? (
                              <p className="mt-2 text-sm text-stone-300">
                                {getLocalizedText(item.note, language)}
                              </p>
                            ) : null}
                          </div>
                          <p className="text-sm font-semibold text-stone-300">{item.period}</p>
                        </div>
                        {item.resources && item.resources.length > 0 ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.resources.map((resource) => {
                              const resourceLabel = getLocalizedText(resource.label, language);

                              if (!resource.href) {
                                return (
                                  <span
                                    key={resource.label.es + (resource.assetPath ?? "")}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-stone-200"
                                    title={resource.assetPath}
                                  >
                                    {resourceLabel}
                                  </span>
                                );
                              }

                              return (
                                <a
                                  key={resource.label.es + resource.href}
                                  href={resource.href}
                                  download={resource.download ? true : undefined}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-stone-200 transition hover:border-white/30 hover:bg-white/10"
                                  title={resource.assetPath}
                                >
                                  {resourceLabel}
                                </a>
                              );
                            })}
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
