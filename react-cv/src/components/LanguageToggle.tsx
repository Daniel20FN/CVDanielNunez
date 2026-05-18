import { LANGUAGE_LABELS } from "../data/cv";
import { LANGUAGES, type Language } from "../types/cv";

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-stone-300 bg-white/80 p-1 backdrop-blur">
      {(Object.values(LANGUAGES) as Language[]).map((value) => {
        const isActive = language === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={isActive
              ? "rounded-full bg-stone-950 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-stone-50 transition"
              : "rounded-full px-4 py-2 text-xs font-semibold tracking-[0.25em] text-stone-500 transition hover:text-stone-950"}
            aria-pressed={isActive}
          >
            {LANGUAGE_LABELS[value]}
          </button>
        );
      })}
    </div>
  );
}
