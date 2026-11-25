import { useEffect, useState } from "react";
import { METHOD_STEPS, UI } from "../../data/cv";
import { REDUCED_MOTION_QUERY, useMediaQuery } from "../../hooks/useMediaQuery";
import type { Language } from "../../types/cv";

interface MethodWindowProps {
  language: Language;
  /** Autoplay only runs while the window is on screen. */
  active: boolean;
}

const AUTOPLAY_MS = 3200;
const TASK_ROWS = [
  { label: "A", y: 38 },
  { label: "B", y: 108 },
  { label: "C", y: 178 },
];

export function MethodWindow({ language, active }: MethodWindowProps) {
  const [step, setStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);

  useEffect(() => {
    if (!active || !autoplay || reducedMotion) {
      return;
    }
    const timer = window.setInterval(() => setStep((current) => (current + 1) % METHOD_STEPS.length), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [active, autoplay, reducedMotion]);

  function selectStep(index: number) {
    setAutoplay(false);
    setStep(index);
  }

  const current = METHOD_STEPS[step];

  return (
    <>
      <h2>
        {UI.methodTitleLead[language]} <em>{UI.methodTitleAccent[language]}</em>
      </h2>
      <svg className="flow" data-step={step + 1} viewBox="0 0 520 260" role="img" aria-label={UI.methodDiagram[language]}>
        <path className="edge lane e-lane" d="M118 130 C160 130 160 60 200 60" />
        <path className="edge lane e-lane" d="M118 130 L200 130" />
        <path className="edge lane e-lane" d="M118 130 C160 130 160 200 200 200" />
        <path className="edge lane e-review" d="M300 60 C330 60 330 130 350 130" />
        <path className="edge lane e-review" d="M300 130 L350 130" />
        <path className="edge lane e-review" d="M300 200 C330 200 330 130 350 130" />
        <path className="edge e-prod" d="M440 130 L460 130" />
        <g className="node n-scope">
          <rect x="18" y="108" width="100" height="44" rx="10" />
          <text x="68" y="135" textAnchor="middle">
            {UI.flowScope[language]}
          </text>
        </g>
        {TASK_ROWS.map((row) => (
          <g key={row.label} className="node n-lane">
            <rect x="200" y={row.y} width="100" height="44" rx="10" />
            <text x="250" y={row.y + 27} textAnchor="middle">
              {UI.flowTask[language]} {row.label}
            </text>
          </g>
        ))}
        <g className="node n-review">
          <rect x="350" y="108" width="90" height="44" rx="10" />
          <text x="395" y="135" textAnchor="middle">
            {UI.flowReview[language]}
          </text>
        </g>
        <g className="node n-prod">
          <rect x="460" y="98" width="52" height="64" rx="10" />
          <text x="486" y="135" textAnchor="middle">
            prod
          </text>
        </g>
      </svg>
      <div className={autoplay ? "steps-tabs" : "steps-tabs paused"} role="tablist">
        {METHOD_STEPS.map((methodStep, index) => (
          <button
            key={methodStep.title.en}
            type="button"
            role="tab"
            aria-selected={index === step}
            aria-label={methodStep.title[language]}
            onClick={() => selectStep(index)}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      <div className="step-text" role="tabpanel" aria-live="polite">
        <h3>{current.title[language]}</h3>
        <p>{current.text[language]}</p>
      </div>
    </>
  );
}
