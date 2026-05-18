import { useEffect, useState } from "react";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { JourneySection } from "./components/sections/JourneySection";
import { ProfileSection } from "./components/sections/ProfileSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { LanguageToggle } from "./components/LanguageToggle";
import { cvData, DEFAULT_LANGUAGE, getLocalizedText } from "./data/cv";
import type { Language } from "./types/cv";

const STORAGE_KEY = "cv-language";

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

    return savedLanguage === "en" ? "en" : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = cvData.metaTitle;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <div className="app-shell min-h-screen text-stone-950">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-white/60 to-transparent" />

      <header className="app-header sticky top-0 z-20 border-b border-stone-200/70 px-6 py-4 backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-3xl">{cvData.brand}</p>
            <p className="text-sm text-stone-600">{getLocalizedText(cvData.availability, language)}</p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <nav aria-label="Primary" className="overflow-x-auto">
              <ul className="flex min-w-max items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
                {cvData.nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="transition hover:text-stone-950">
                      {getLocalizedText(item.label, language)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageToggle language={language} onChange={setLanguage} />
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <HeroSection cv={cvData} language={language} />
        <ProfileSection cv={cvData} language={language} />
        <JourneySection cv={cvData} language={language} />
        <ProjectsSection cv={cvData} language={language} />
        <SkillsSection cv={cvData} language={language} />
        <ContactSection cv={cvData} language={language} />
      </main>

      <footer className="px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-stone-200 pt-6 text-sm text-stone-500">
          {getLocalizedText(cvData.footer, language)}
        </div>
      </footer>
    </div>
  );
}
