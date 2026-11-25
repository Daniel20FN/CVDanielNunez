import { JOURNEY, UI } from "../../data/cv";
import type { Language } from "../../types/cv";

export function JourneyWindow({ language }: { language: Language }) {
  return (
    <>
      <h2>
        {UI.journeyTitleLead[language]} <em>{UI.journeyTitleAccent[language]}</em>
      </h2>
      <ol className="timeline">
        {JOURNEY.map((step) => (
          <li key={step.title.en} className={step.current ? "now" : undefined}>
            <span className="when">{step.period[language]}</span>
            <b>{step.title[language]}</b>
            <span className="where">{step.place}</span>
            {step.text && <p>{step.text[language]}</p>}
          </li>
        ))}
      </ol>
    </>
  );
}
