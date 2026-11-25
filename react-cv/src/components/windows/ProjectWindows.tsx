import { PROJECTS, UI, WINDOWS } from "../../data/cv";
import type { Language, ProjectItem, ProjectPreviewKind, ProjectWindowId } from "../../types/cv";
import { DesktopIcon } from "../desktop/DesktopIcon";
import { TagList } from "./TagList";

interface ProjectsFolderProps {
  language: Language;
  onOpen: (id: ProjectWindowId) => void;
}

export function ProjectsFolderWindow({ language, onOpen }: ProjectsFolderProps) {
  return (
    <>
      <p>{UI.projectsHint[language]}</p>
      <div className="finder">
        {PROJECTS.map((project) => (
          <DesktopIcon
            key={project.window}
            label={WINDOWS[project.window].title[language]}
            glyph="app"
            onOpen={() => onOpen(project.window)}
          />
        ))}
      </div>
    </>
  );
}

/**
 * Abstract product sketch instead of a real screenshot: the production platform is a
 * client's private tool, so its screens are not published.
 */
function ProjectPreview({ kind }: { kind: ProjectPreviewKind }) {
  if (kind === "dashboard") {
    return (
      <div className="shot preview-dashboard" aria-hidden="true">
        <span className="pv-side" />
        <span className="pv-main">
          <span className="pv-bar" />
          <span className="pv-cards">
            <span />
            <span />
            <span />
          </span>
          <span className="pv-rows">
            <span />
            <span />
            <span />
            <span />
          </span>
        </span>
      </div>
    );
  }

  return (
    <div className="shot preview-recipes" aria-hidden="true">
      {[0, 1, 2].map((card) => (
        <span key={card} className="pv-recipe">
          <span className="pv-plate" />
          <span className="pv-line" />
          <span className="pv-line short" />
          <span className="pv-score" />
        </span>
      ))}
    </div>
  );
}

export function ProjectDetailWindow({ project, language }: { project: ProjectItem; language: Language }) {
  return (
    <>
      <ProjectPreview kind={project.preview} />
      <h2>{project.title[language]}</h2>
      <p>{project.description[language]}</p>
      <dl className="facts">
        <dt>{UI.factWhere[language]}</dt>
        <dd>{project.place}</dd>
        <dt>{UI.factWhen[language]}</dt>
        <dd>{project.period[language]}</dd>
        <dt>{UI.factRole[language]}</dt>
        <dd>{project.role[language]}</dd>
      </dl>
      <TagList items={project.stack} />
    </>
  );
}
