import { TRASH, UI } from "../../data/cv";
import type { Language } from "../../types/cv";

export function TrashWindow({ language }: { language: Language }) {
  return (
    <>
      <p>{UI.trashText[language]}</p>
      <ul className="trash-list">
        {TRASH.map((item) => (
          <li key={item.name.en}>
            <span>{item.name[language]}</span>
            <span>{item.size}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
