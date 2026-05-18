import { getLocalizedText } from "../../data/cv";
import type { CVData, Language } from "../../types/cv";
import { SectionHeading } from "../SectionHeading";

interface ContactSectionProps {
  cv: CVData;
  language: Language;
}

export function ContactSection({ cv, language }: ContactSectionProps) {
  return (
    <section id="contacto" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-stone-200 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 p-8 text-stone-50 shadow-[0_28px_100px_rgba(28,25,23,0.16)] sm:p-10 lg:p-12">
        <SectionHeading
          eyebrow={language === "es" ? "Contacto" : "Contact"}
          title={getLocalizedText(cv.contactTitle, language)}
          description={getLocalizedText(cv.contactIntro, language)}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cv.contacts.map((contact) => (
            <a
              key={contact.label.es}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
                {getLocalizedText(contact.label, language)}
              </p>
              <p className="mt-4 text-lg text-white">{contact.value}</p>
              {contact.detail ? (
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  {getLocalizedText(contact.detail, language)}
                </p>
              ) : null}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {cv.contactActions.map((action) => (
            <a
              key={action.label.es}
              href={action.href}
              download={action.download ? true : undefined}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className={action.download
                ? "rounded-full border border-amber-300/30 bg-amber-200/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-50 transition hover:border-amber-200/60 hover:bg-amber-200/15"
                : "rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/50 hover:bg-white/5"}
            >
              {getLocalizedText(action.label, language)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
