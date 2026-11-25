import { ABOUT, PROFILE, UI } from "../../data/cv";
import type { Language } from "../../types/cv";
import { TagList } from "./TagList";

export function AboutWindow({ language }: { language: Language }) {
  return (
    <>
      <span className="eyebrow">
        {PROFILE.role} · {PROFILE.city}
      </span>
      <h2>
        {UI.aboutTitleLead[language]} <em>{UI.aboutTitleAccent[language]}</em>
      </h2>
      {ABOUT.paragraphs.map((paragraph) => (
        <p key={paragraph.en}>{paragraph[language]}</p>
      ))}
      <TagList items={ABOUT.stack} />
    </>
  );
}
