import { getLocalizedText } from "../../data/cv";
import type { CVData, Language } from "../../types/cv";
import { SectionHeading } from "../SectionHeading";

interface ProfileSectionProps {
  cv: CVData;
  language: Language;
}

export function ProfileSection({ cv, language }: ProfileSectionProps) {
  return (
    <section id="perfil" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-[0_24px_90px_rgba(28,25,23,0.07)] sm:p-10">
          <SectionHeading
            eyebrow={language === "es" ? "Perfil" : "Profile"}
            title={getLocalizedText(cv.aboutTitle, language)}
          />

          <div className="space-y-5 text-base leading-8 text-stone-700">
            {cv.aboutBody.map((paragraph) => (
              <p key={paragraph.es}>{getLocalizedText(paragraph, language)}</p>
            ))}
          </div>

          <div className="grid gap-4 border-t border-stone-200 pt-8 sm:grid-cols-3">
            {cv.profileHighlights.map((highlight) => (
              <article key={highlight.es} className="rounded-[1.75rem] bg-stone-100 p-5">
                <p className="text-sm leading-7 text-stone-700">{getLocalizedText(highlight, language)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-stone-200 bg-stone-100 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
            {language === "es" ? "Soft skills" : "Soft skills"}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {cv.softSkills.map((skill) => (
              <span
                key={skill.es}
                className="rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-700"
              >
                {getLocalizedText(skill, language)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
