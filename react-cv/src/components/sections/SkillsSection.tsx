import { getLocalizedText } from "../../data/cv";
import type { CVData, Language } from "../../types/cv";
import { SectionHeading } from "../SectionHeading";

interface SkillsSectionProps {
  cv: CVData;
  language: Language;
}

export function SkillsSection({ cv, language }: SkillsSectionProps) {
  return (
    <section id="tecnologias" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={language === "es" ? "Stack" : "Stack"}
          title={getLocalizedText(cv.skillsTitle, language)}
        />

        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {cv.skills.map((skill) => (
              <article key={skill.name} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_60px_rgba(28,25,23,0.05)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-stone-950">{skill.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
                      {getLocalizedText(skill.category, language)}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-stone-600">{skill.level}%</p>
                </div>
                <div className="mt-5 h-3 rounded-full bg-stone-200">
                  <div
                    className="h-3 rounded-full bg-stone-950 transition-[width]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[2.5rem] border border-stone-200 bg-stone-950 p-8 text-stone-50 shadow-[0_24px_90px_rgba(28,25,23,0.14)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
              {language === "es" ? "Capas complementarias" : "Complementary layers"}
            </p>
            <div className="mt-6 space-y-6">
              {cv.skillGroups.map((group) => (
                <div key={group.title.es} className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{getLocalizedText(group.title, language)}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-200"
                      >
                        {item}
                      </span>
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
