import { useEffect, useState } from "react";
import { PROFILE, UI } from "../../data/cv";
import type { Language } from "../../types/cv";
import { LanguageToggle } from "../LanguageToggle";

interface MenuBarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onOpenGuide: () => void;
  onOpenContact: () => void;
  onTidy: () => void;
}

const clockFormat = new Intl.DateTimeFormat("es-ES", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: PROFILE.timeZone,
});

function useCityClock(): string {
  const [time, setTime] = useState(() => clockFormat.format(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => setTime(clockFormat.format(new Date())), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}

export function MenuBar({ language, onLanguageChange, onOpenGuide, onOpenContact, onTidy }: MenuBarProps) {
  const time = useCityClock();

  return (
    <header className="menubar">
      <span className="brand">
        dn<span>.</span>os
      </span>
      <button className="menu-btn" type="button" onClick={onOpenGuide}>
        {UI.menuGuide[language]}
      </button>
      <button className="menu-btn desk-only" type="button" onClick={onOpenContact}>
        {UI.menuContact[language]}
      </button>
      <button className="menu-btn desk-only" type="button" onClick={onTidy}>
        {UI.menuTidy[language]}
      </button>
      <div className="menu-right">
        <LanguageToggle language={language} label={UI.languageGroup[language]} onChange={onLanguageChange} />
        <span className="clock">
          {PROFILE.city} {time}
        </span>
      </div>
    </header>
  );
}
