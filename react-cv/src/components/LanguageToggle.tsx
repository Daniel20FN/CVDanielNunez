import { LANGUAGE_LABELS } from "../data/cv";
import { LANGUAGES, type Language } from "../types/cv";

interface LanguageToggleProps {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
}

export function LanguageToggle({ language, label, onChange }: LanguageToggleProps) {
  return (
    <div className="lang" role="group" aria-label={label}>
      {Object.values(LANGUAGES).map((value) => (
        <button key={value} type="button" aria-pressed={language === value} onClick={() => onChange(value)}>
          {LANGUAGE_LABELS[value]}
        </button>
      ))}
    </div>
  );
}
