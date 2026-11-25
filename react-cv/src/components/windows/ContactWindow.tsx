import { useEffect, useRef, useState } from "react";
import { PROFILE, UI } from "../../data/cv";
import type { Language } from "../../types/cv";

type CopyResult = "copied" | "failed" | null;

const FEEDBACK_MS = 2200;

export function ContactWindow({ language }: { language: Language }) {
  const [copyResult, setCopyResult] = useState<CopyResult>(null);
  const emailRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (copyResult === null) {
      return;
    }
    const timer = window.setTimeout(() => setCopyResult(null), FEEDBACK_MS);
    return () => window.clearTimeout(timer);
  }, [copyResult]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyResult("copied");
    } catch {
      // Clipboard access can be denied; select the address so the visitor can copy it by hand.
      if (emailRef.current) {
        window.getSelection()?.selectAllChildren(emailRef.current);
      }
      setCopyResult("failed");
    }
  }

  return (
    <>
      <h2>
        {UI.contactTitleLead[language]}
        <em>{UI.contactTitleAccent[language]}</em>
        {UI.contactTitleTail[language]}
      </h2>
      <p>{UI.contactText[language]}</p>
      <div className="mail">
        <code ref={emailRef}>{PROFILE.email}</code>
        <button className="btn" type="button" onClick={copyEmail}>
          {UI.copy[language]}
        </button>
        <span className="copied" role="status" aria-live="polite">
          {copyResult === "copied" && UI.copied[language]}
          {copyResult === "failed" && UI.copyFailed[language]}
        </span>
      </div>
      <div className="row">
        <a className="btn" href={`mailto:${PROFILE.email}`}>
          Email ↗
        </a>
        <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </>
  );
}
