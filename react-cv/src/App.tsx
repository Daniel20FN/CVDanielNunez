import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { DesktopIcon } from "./components/desktop/DesktopIcon";
import { MenuBar } from "./components/desktop/MenuBar";
import { Taskbar } from "./components/desktop/Taskbar";
import { Window } from "./components/desktop/Window";
import { AboutWindow } from "./components/windows/AboutWindow";
import { ContactWindow } from "./components/windows/ContactWindow";
import { CvWindow } from "./components/windows/CvWindow";
import { JourneyWindow } from "./components/windows/JourneyWindow";
import { MethodWindow } from "./components/windows/MethodWindow";
import { ProjectDetailWindow, ProjectsFolderWindow } from "./components/windows/ProjectWindows";
import { TrashWindow } from "./components/windows/TrashWindow";
import { WelcomeWindow } from "./components/windows/WelcomeWindow";
import {
  DEFAULT_LANGUAGE,
  DESKTOP_ICONS,
  fillTemplate,
  PROFILE,
  PROJECTS,
  TOUR_LABELS,
  UI,
  WINDOWS,
} from "./data/cv";
import { PHONE_QUERY, useMediaQuery } from "./hooks/useMediaQuery";
import { useWindowManager, type WindowPosition } from "./hooks/useWindowManager";
import { TOUR_WINDOWS, WINDOW_IDS, type Language, type WindowId } from "./types/cv";

const STORAGE_KEY = "cv-language";

function readSavedLanguage(): Language {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>(readSavedLanguage);
  const isPhone = useMediaQuery(PHONE_QUERY);
  const deskRef = useRef<HTMLDivElement>(null);
  const manager = useWindowManager();
  const { windows, seen, focusedId, open, close, minimize, focus, move, tidy, unplace, nextCascadeOffset } = manager;

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage can be blocked; the language simply resets on the next visit.
    }
  }, [language]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && focusedId) {
        close(focusedId);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, focusedId]);

  // Windows left outside the desk after a resize are placed again.
  useEffect(() => {
    function handleResize() {
      const desk = deskRef.current;
      if (!desk || isPhone) {
        return;
      }
      unplace(
        WINDOW_IDS.filter((id) => {
          const position = windows[id].position;
          return position !== null && (position.x > desk.clientWidth - 120 || position.y > desk.clientHeight - 44);
        }),
      );
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isPhone, unplace, windows]);

  /** On phones each window is a full-screen sheet, so moving on closes the current one. */
  const goNext = useCallback(
    (from: WindowId, to: WindowId) => {
      if (isPhone) {
        close(from);
      }
      open(to);
    },
    [close, isPhone, open],
  );

  function handleTaskClick(id: WindowId) {
    if (windows[id].status === "minimized") {
      open(id);
    } else if (id === focusedId) {
      minimize(id);
    } else {
      focus(id);
    }
  }

  function renderBody(id: WindowId): ReactNode {
    switch (id) {
      case "welcome":
        return <WelcomeWindow language={language} seen={seen} onOpen={(tourId) => goNext("welcome", tourId)} />;
      case "about":
        return <AboutWindow language={language} />;
      case "journey":
        return <JourneyWindow language={language} />;
      case "method":
        return <MethodWindow language={language} active={windows.method.status === "open"} />;
      case "projects":
        return <ProjectsFolderWindow language={language} onOpen={open} />;
      case "project-platform":
      case "project-evolx": {
        const project = PROJECTS.find((item) => item.window === id);
        return project ? <ProjectDetailWindow project={project} language={language} /> : null;
      }
      case "cv":
        return <CvWindow language={language} />;
      case "contact":
        return <ContactWindow language={language} />;
      case "trash":
        return <TrashWindow language={language} />;
    }
  }

  function renderFooter(id: WindowId): ReactNode {
    if (id === "welcome") {
      return (
        <>
          <span className="desk-only">{UI.welcomeHint[language]}</span>
          <button className="btn primary" type="button" onClick={() => goNext("welcome", TOUR_WINDOWS[0])}>
            {UI.welcomeStart[language]}
          </button>
        </>
      );
    }

    const index = TOUR_WINDOWS.findIndex((tourId) => tourId === id);
    if (index === -1) {
      return null;
    }
    const stepLabel = fillTemplate(UI.stepOf[language], { n: index + 1, total: TOUR_WINDOWS.length });
    const nextId = TOUR_WINDOWS[index + 1];

    if (!nextId) {
      return (
        <>
          <span>
            {stepLabel} · {UI.tourEnd[language]}
          </span>
          <button className="btn" type="button" onClick={() => goNext(id, "welcome")}>
            {UI.backToStart[language]}
          </button>
        </>
      );
    }

    return (
      <>
        <span>{stepLabel}</span>
        <button className="btn" type="button" onClick={() => goNext(id, nextId)}>
          {fillTemplate(UI.next[language], { name: TOUR_LABELS[nextId].name[language] })}
        </button>
      </>
    );
  }

  return (
    <div className="os">
      <MenuBar
        language={language}
        onLanguageChange={setLanguage}
        onOpenGuide={() => open("welcome")}
        onOpenContact={() => open("contact")}
        onTidy={tidy}
      />

      <div className="desk" ref={deskRef}>
        <div className="signature" aria-hidden="true">
          <b>{PROFILE.name}</b>
          <span>
            {PROFILE.role} · {PROFILE.city}
          </span>
        </div>

        <div className="icons" aria-label={UI.desktopLabel[language]}>
          {DESKTOP_ICONS.map((icon) => {
            const tourIndex = TOUR_WINDOWS.findIndex((tourId) => tourId === icon.window);
            return (
              <DesktopIcon
                key={icon.window}
                label={icon.label[language]}
                glyph={icon.glyph}
                order={tourIndex === -1 ? undefined : tourIndex + 1}
                selected={focusedId === icon.window}
                seen={seen.some((tourId) => tourId === icon.window)}
                onOpen={() => open(icon.window)}
              />
            );
          })}
        </div>

        {WINDOW_IDS.filter((id) => windows[id].status !== "closed").map((id) => (
          <Window
            key={id}
            id={id}
            title={WINDOWS[id].title[language]}
            width={WINDOWS[id].width}
            state={windows[id]}
            focused={focusedId === id}
            isPhone={isPhone}
            closeLabel={UI.close[language]}
            minimizeLabel={UI.minimize[language]}
            className={id === "welcome" ? "hello" : undefined}
            footer={renderFooter(id)}
            onFocus={() => focus(id)}
            onClose={() => close(id)}
            onMinimize={() => minimize(id)}
            onMove={(position: WindowPosition) => move(id, position)}
            nextCascadeOffset={nextCascadeOffset}
          >
            {renderBody(id)}
          </Window>
        ))}
      </div>

      <Taskbar
        language={language}
        windows={windows}
        focusedId={focusedId}
        seenCount={seen.length}
        onStart={() => open("welcome")}
        onTaskClick={handleTaskClick}
      />
    </div>
  );
}
