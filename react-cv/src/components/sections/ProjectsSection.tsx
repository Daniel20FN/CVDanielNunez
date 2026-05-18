import { getLocalizedText } from "../../data/cv";
import type { CVData, Language } from "../../types/cv";
import { SectionHeading } from "../SectionHeading";

interface ProjectsSectionProps {
  cv: CVData;
  language: Language;
}

export function ProjectsSection({ cv, language }: ProjectsSectionProps) {
  return (
    <section id="proyectos" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={language === "es" ? "Seleccion" : "Selection"}
          title={getLocalizedText(cv.projectsTitle, language)}
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {cv.projects.map((project, index) => (
            <article
              key={project.title}
              className={project.featured ?? index === 0
                ? "rounded-[2.5rem] border border-stone-200 bg-stone-950 p-8 text-stone-50 shadow-[0_24px_90px_rgba(28,25,23,0.14)] xl:col-span-2"
                : "rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-[0_24px_90px_rgba(28,25,23,0.07)]"}
            >
              {project.coverImagePath ? (
                <div className="mb-6 overflow-hidden rounded-[2rem] border border-black/5 bg-stone-100">
                  <img
                    src={project.coverImagePath}
                    alt={project.coverImageAlt ? getLocalizedText(project.coverImageAlt, language) : project.title}
                    className="h-56 w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <p className={project.featured ?? index === 0
                ? "text-xs font-semibold uppercase tracking-[0.35em] text-stone-400"
                : "text-xs font-semibold uppercase tracking-[0.35em] text-stone-500"}>
                {getLocalizedText(project.category, language)}
              </p>
              <h3 className={project.featured ?? index === 0
                ? "mt-6 font-display text-4xl text-white"
                : "mt-6 font-display text-3xl text-stone-950"}>
                {project.title}
              </h3>
              <p className={project.featured ?? index === 0
                ? "mt-4 max-w-2xl text-base leading-7 text-stone-300"
                : "mt-4 text-base leading-7 text-stone-700"}>
                {getLocalizedText(project.description, language)}
              </p>
              <p className={project.featured ?? index === 0
                ? "mt-4 max-w-2xl text-sm leading-7 text-stone-400"
                : "mt-4 text-sm leading-7 text-stone-500"}>
                {getLocalizedText(project.summary, language)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={project.featured ?? index === 0
                      ? "rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-200"
                      : "rounded-full border border-stone-300 bg-stone-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600"}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.resources.map((resource) => {
                  const resourceLabel = getLocalizedText(resource.label, language);

                  if (resource.href) {
                    return (
                      <a
                        key={resourceLabel + resource.href}
                        href={resource.href}
                        download={resource.download ? true : undefined}
                        target={resource.download ? undefined : "_blank"}
                        rel={resource.download ? undefined : "noreferrer"}
                        className={project.featured ?? index === 0
                          ? "rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-stone-200 transition hover:bg-white/10"
                          : "rounded-full border border-stone-300 bg-stone-100 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950"}
                      >
                        {resourceLabel}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={resourceLabel + (resource.assetPath ?? "")}
                      className={project.featured ?? index === 0
                        ? "rounded-full border border-dashed border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-stone-300"
                        : "rounded-full border border-dashed border-stone-300 bg-stone-50 px-3 py-2 text-xs font-medium text-stone-500"}
                      title={resource.assetPath}
                    >
                      {resourceLabel}
                    </span>
                  );
                })}
              </div>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                className={project.featured ?? index === 0
                  ? "mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/50"
                  : "mt-8 inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-700 transition hover:border-stone-950 hover:text-stone-950"}
              >
                {getLocalizedText(project.cta, language)}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
