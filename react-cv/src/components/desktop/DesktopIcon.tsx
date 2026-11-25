import type { IconGlyph } from "../../types/cv";

interface DesktopIconProps {
  label: string;
  glyph: IconGlyph;
  /** Position in the guided tour; only tour icons get one. */
  order?: number;
  selected?: boolean;
  seen?: boolean;
  onOpen: () => void;
}

function Glyph({ glyph }: { glyph: IconGlyph }) {
  switch (glyph) {
    case "folder":
      return <span className="folder" />;
    case "folder-warm":
      return <span className="folder warm" />;
    case "pdf":
      return <span className="file pdf" data-ext="PDF" />;
    case "txt":
      return <span className="file" data-ext="TXT" />;
    case "app":
      return <span className="file app" data-ext="APP" />;
    case "trash":
      return <span className="trash" />;
  }
}

export function DesktopIcon({ label, glyph, order, selected = false, seen = false, onOpen }: DesktopIconProps) {
  const className = ["icon", selected ? "is-selected" : "", seen ? "is-seen" : ""].filter(Boolean).join(" ");

  return (
    <button className={className} type="button" onClick={onOpen}>
      {order !== undefined && <span className="order">{order}</span>}
      {order !== undefined && (
        <span className="seen" aria-hidden="true">
          ✓
        </span>
      )}
      <Glyph glyph={glyph} />
      <span className="label">{label}</span>
    </button>
  );
}
