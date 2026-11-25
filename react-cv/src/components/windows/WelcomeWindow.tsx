import { PROFILE, TOUR_LABELS, UI } from "../../data/cv";
import { TOUR_WINDOWS, type Language, type TourWindowId } from "../../types/cv";

interface WelcomeWindowProps {
  language: Language;
  seen: TourWindowId[];
  onOpen: (id: TourWindowId) => void;
}

export function WelcomeWindow({ language, seen, onOpen }: WelcomeWindowProps) {
  const [firstName, lastName] = PROFILE.name.split(" ");

  return (
    <>
      <span className="status">
        <span className="dot" aria-hidden="true" />
        <span>{UI.status[language]}</span>
      </span>
      <h1>
        {firstName} <em>{lastName}</em>
      </h1>
      <p>{UI.welcomeLead[language]}</p>
      <ul className="tour">
        {TOUR_WINDOWS.map((id, index) => {
          const isSeen = seen.includes(id);
          return (
            <li key={id}>
              <button type="button" className={isSeen ? "is-seen" : undefined} onClick={() => onOpen(id)}>
                <span className="n">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="t">{TOUR_LABELS[id].name[language]}</span>
                  <br />
                  <span className="d">{TOUR_LABELS[id].summary[language]}</span>
                </span>
                <span className="ok">{isSeen ? UI.tourSeen[language] : UI.tourOpen[language]}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
