import { UI, WINDOWS } from "../../data/cv";
import type { WindowState } from "../../hooks/useWindowManager";
import { TOUR_WINDOWS, WINDOW_IDS, type Language, type WindowId } from "../../types/cv";

interface TaskbarProps {
  language: Language;
  windows: Record<WindowId, WindowState>;
  focusedId: WindowId | null;
  seenCount: number;
  onStart: () => void;
  onTaskClick: (id: WindowId) => void;
}

const RING_LENGTH = 50.27; // 2 * PI * r, with r = 8

export function Taskbar({ language, windows, focusedId, seenCount, onStart, onTaskClick }: TaskbarProps) {
  const tasks = WINDOW_IDS.filter((id) => windows[id].status !== "closed");
  const total = TOUR_WINDOWS.length;

  return (
    <footer className="taskbar">
      <button className="start" type="button" onClick={onStart}>
        <i aria-hidden="true" />
        <span>{UI.start[language]}</span>
      </button>
      <div className="tasks" aria-label={UI.openWindows[language]}>
        {tasks.map((id) => {
          const isMinimized = windows[id].status === "minimized";
          const className = ["task", id === focusedId ? "is-focused" : "", isMinimized ? "is-min" : ""]
            .filter(Boolean)
            .join(" ");
          return (
            <button key={id} className={className} type="button" onClick={() => onTaskClick(id)}>
              {WINDOWS[id].title[language]}
            </button>
          );
        })}
      </div>
      <div className="progress-wrap" title={UI.tourProgress[language]}>
        <svg className="ring" viewBox="0 0 22 22" aria-hidden="true">
          <circle className="bg" cx="11" cy="11" r="8" />
          <circle
            className="fg"
            cx="11"
            cy="11"
            r="8"
            strokeDasharray={RING_LENGTH}
            strokeDashoffset={RING_LENGTH * (1 - seenCount / total)}
          />
        </svg>
        <span>
          {seenCount}/{total} <span className="lbl">{UI.seen[language]}</span>
        </span>
      </div>
    </footer>
  );
}
