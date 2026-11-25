import { useLayoutEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { computeWindowPosition, type WindowPosition, type WindowState } from "../../hooks/useWindowManager";

interface WindowProps {
  id: string;
  title: string;
  width: string;
  state: WindowState;
  focused: boolean;
  isPhone: boolean;
  closeLabel: string;
  minimizeLabel: string;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMove: (position: WindowPosition) => void;
  nextCascadeOffset: () => number;
}

interface DragState {
  offsetX: number;
  offsetY: number;
  desk: DOMRect;
  width: number;
  last: WindowPosition | null;
}

/** Part of the title bar that must stay reachable so a dragged window can be pulled back. */
const GRIP_PX = 120;
const TITLEBAR_PX = 44;

export function Window({
  id,
  title,
  width,
  state,
  focused,
  isPhone,
  closeLabel,
  minimizeLabel,
  footer,
  className,
  children,
  onFocus,
  onClose,
  onMinimize,
  onMove,
  nextCascadeOffset,
}: WindowProps) {
  const windowRef = useRef<HTMLElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const needsPlacement = !isPhone && state.status === "open" && state.position === null;

  useLayoutEffect(() => {
    const element = windowRef.current;
    // The desk is the window's parent; parent refs are not attached yet when this first runs.
    const desk = element?.parentElement;
    if (!needsPlacement || !element || !desk) {
      return;
    }
    onMove(
      computeWindowPosition(
        { width: desk.clientWidth, height: desk.clientHeight },
        { width: element.offsetWidth, height: element.offsetHeight },
        nextCascadeOffset(),
      ),
    );
  }, [needsPlacement, onMove, nextCascadeOffset]);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const element = windowRef.current;
    const desk = element?.parentElement;
    const target = event.target;
    if (isPhone || !element || !desk || (target instanceof Element && target.closest("button"))) {
      return;
    }
    const rect = element.getBoundingClientRect();
    dragRef.current = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      desk: desk.getBoundingClientRect(),
      width: rect.width,
      last: null,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  // The position is written straight to the element while dragging and committed once on release.
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const element = windowRef.current;
    if (!drag || !element) {
      return;
    }
    const x = Math.min(
      Math.max(event.clientX - drag.desk.left - drag.offsetX, -drag.width + GRIP_PX),
      drag.desk.width - GRIP_PX,
    );
    const y = Math.min(Math.max(event.clientY - drag.desk.top - drag.offsetY, 0), drag.desk.height - TITLEBAR_PX);
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    drag.last = { x, y };
  }

  function handlePointerEnd() {
    const last = dragRef.current?.last;
    dragRef.current = null;
    if (last) {
      onMove(last);
    }
  }

  const classes = ["win", className, focused ? "is-focused" : "", state.animation ?? ""].filter(Boolean).join(" ");
  const titleId = `title-${id}`;

  return (
    <section
      ref={windowRef}
      className={classes}
      hidden={state.status === "minimized"}
      aria-labelledby={titleId}
      onPointerDown={() => {
        if (!focused) {
          onFocus();
        }
      }}
      style={{
        width: `min(${width}, calc(100% - 32px))`,
        left: state.position?.x,
        top: state.position?.y,
        zIndex: 10 + state.z,
        // Measured before it is shown, so it never flashes in the corner.
        visibility: needsPlacement ? "hidden" : undefined,
      }}
    >
      <div
        className="titlebar"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <div className="lights">
          <button className="x" type="button" aria-label={closeLabel} onClick={onClose} />
          <button className="m" type="button" aria-label={minimizeLabel} onClick={onMinimize} />
        </div>
        <span className="wtitle" id={titleId}>
          {title}
        </span>
      </div>
      <div className="wbody">{children}</div>
      {footer && <div className="wfoot">{footer}</div>}
    </section>
  );
}
