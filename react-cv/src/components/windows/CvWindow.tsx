import { PROFILE, UI } from "../../data/cv";
import type { Language } from "../../types/cv";

export function CvWindow({ language }: { language: Language }) {
  return (
    <>
      <div className="paper" aria-hidden="true">
        <div className="nm">{PROFILE.name}</div>
        <div className="sub">
          {PROFILE.role} · {PROFILE.city}, Spain
        </div>
        <h4>Summary</h4>
        <div className="ln" />
        <div className="ln s" />
        <h4>Experience</h4>
        <div className="ln" />
        <div className="ln" />
        <div className="ln s" />
        <div className="ln xs" />
        <h4>Education</h4>
        <div className="ln s" />
        <div className="ln xs" />
      </div>
      <div className="row">
        <a className="btn primary" href={PROFILE.cvPath} download={PROFILE.cvFileName}>
          {UI.cvDownload[language]}
        </a>
        <span className="eyebrow">{UI.cvMeta[language]}</span>
      </div>
    </>
  );
}
