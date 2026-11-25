import { useCallback, useEffect, useReducer, useRef } from "react";
import { TOUR_WINDOWS, WINDOW_IDS, type TourWindowId, type WindowId } from "../types/cv";

export type WindowStatus = "closed" | "open" | "minimized";
export type WindowAnimation = "opening" | "closing" | null;

export interface WindowPosition {
  x: number;
  y: number;
}

export interface WindowState {
  status: WindowStatus;
  z: number;
  /** Null until the window has been measured and placed on the desk. */
  position: WindowPosition | null;
  animation: WindowAnimation;
}

interface DesktopState {
  windows: Record<WindowId, WindowState>;
  topZ: number;
  seen: TourWindowId[];
}

type DesktopAction =
  | { type: "open"; id: WindowId }
  | { type: "focus"; id: WindowId }
  | { type: "start-close"; id: WindowId }
  | { type: "finish-close"; id: WindowId; minimize: boolean }
  | { type: "clear-opening"; id: WindowId }
  | { type: "move"; id: WindowId; position: WindowPosition }
  | { type: "unplace"; ids: WindowId[] };

const OPEN_ANIMATION_MS = 700;
const CLOSE_ANIMATION_MS = 150;
const CASCADE_STEP_PX = 28;
const CASCADE_SLOTS = 6;
/** Space kept free on the left so the desktop icons stay clickable. */
const ICON_COLUMN_PX = 110;

function createInitialState(): DesktopState {
  const windows = {} as Record<WindowId, WindowState>; // filled for every id right below
  for (const id of WINDOW_IDS) {
    windows[id] = { status: "closed", z: 0, position: null, animation: null };
  }
  windows.welcome = { status: "open", z: 1, position: null, animation: null };

  return { windows, topZ: 1, seen: [] };
}

function updateWindow(state: DesktopState, id: WindowId, patch: Partial<WindowState>): DesktopState {
  return { ...state, windows: { ...state.windows, [id]: { ...state.windows[id], ...patch } } };
}

function desktopReducer(state: DesktopState, action: DesktopAction): DesktopState {
  switch (action.type) {
    case "open": {
      const current = state.windows[action.id];
      const topZ = state.topZ + 1;
      const tourId = TOUR_WINDOWS.find((windowId) => windowId === action.id);
      const seen = tourId && !state.seen.includes(tourId) ? [...state.seen, tourId] : state.seen;
      const isAppearing = current.status !== "open" || current.animation === "closing";

      return {
        ...updateWindow(state, action.id, {
          status: "open",
          z: topZ,
          // A closed window is placed again; a minimized one comes back where it was.
          position: current.status === "closed" ? null : current.position,
          animation: isAppearing ? "opening" : current.animation,
        }),
        topZ,
        seen,
      };
    }
    case "focus": {
      if (state.windows[action.id].z === state.topZ) {
        return state;
      }
      const topZ = state.topZ + 1;
      return { ...updateWindow(state, action.id, { z: topZ }), topZ };
    }
    case "start-close":
      return updateWindow(state, action.id, { animation: "closing" });
    case "finish-close": {
      // The window was reopened while the closing animation was running.
      if (state.windows[action.id].animation !== "closing") {
        return state;
      }
      return updateWindow(state, action.id, {
        status: action.minimize ? "minimized" : "closed",
        animation: null,
        position: action.minimize ? state.windows[action.id].position : null,
      });
    }
    case "clear-opening":
      return state.windows[action.id].animation === "opening"
        ? updateWindow(state, action.id, { animation: null })
        : state;
    case "move":
      return updateWindow(state, action.id, { position: action.position });
    case "unplace":
      return action.ids.reduce((next, id) => updateWindow(next, id, { position: null }), state);
  }
}

/** Returns the visible window with the highest stacking order, if any. */
function findFocusedWindow(windows: Record<WindowId, WindowState>): WindowId | null {
  let focused: WindowId | null = null;
  for (const id of WINDOW_IDS) {
    const win = windows[id];
    if (win.status !== "open" || win.animation === "closing") {
      continue;
    }
    if (focused === null || win.z > windows[focused].z) {
      focused = id;
    }
  }
  return focused;
}

/**
 * Centers a window on the desk, shifted by the cascade offset so new windows do not hide
 * the previous one, and keeps it inside the desk without covering the icon column.
 */
export function computeWindowPosition(
  desk: { width: number; height: number },
  size: { width: number; height: number },
  cascadeOffset: number,
): WindowPosition {
  const baseX = Math.max(130, (desk.width - size.width) / 2 + 40);
  const baseY = Math.max(16, (desk.height - size.height) / 2 - 20);
  const x = Math.min(baseX + cascadeOffset, desk.width - size.width - 16);
  const y = Math.min(baseY + cascadeOffset, desk.height - size.height - 12);

  return { x: Math.max(ICON_COLUMN_PX, x), y: Math.max(12, y) };
}

/**
 * Owns the desktop: which windows are open, minimized or closed, their stacking order and
 * position, and which tour windows the visitor has already seen.
 */
export function useWindowManager() {
  const [state, dispatch] = useReducer(desktopReducer, undefined, createInitialState);
  const cascadeRef = useRef(0);
  const timersRef = useRef(new Set<number>());

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const schedule = useCallback((callback: () => void, delay: number) => {
    const timer = window.setTimeout(() => {
      timersRef.current.delete(timer);
      callback();
    }, delay);
    timersRef.current.add(timer);
  }, []);

  const open = useCallback(
    (id: WindowId) => {
      dispatch({ type: "open", id });
      schedule(() => dispatch({ type: "clear-opening", id }), OPEN_ANIMATION_MS);
    },
    [schedule],
  );

  const hide = useCallback(
    (id: WindowId, minimize: boolean) => {
      dispatch({ type: "start-close", id });
      schedule(() => dispatch({ type: "finish-close", id, minimize }), CLOSE_ANIMATION_MS);
    },
    [schedule],
  );

  const close = useCallback((id: WindowId) => hide(id, false), [hide]);
  const minimize = useCallback((id: WindowId) => hide(id, true), [hide]);
  const focus = useCallback((id: WindowId) => dispatch({ type: "focus", id }), []);
  const move = useCallback((id: WindowId, position: WindowPosition) => dispatch({ type: "move", id, position }), []);

  /** Next cascade offset for a window that is being placed. */
  const nextCascadeOffset = useCallback(() => {
    const offset = (cascadeRef.current % CASCADE_SLOTS) * CASCADE_STEP_PX;
    cascadeRef.current += 1;
    return offset;
  }, []);

  /** Drops the stored positions so the windows place themselves again. */
  const unplace = useCallback((ids: WindowId[]) => {
    if (ids.length > 0) {
      dispatch({ type: "unplace", ids });
    }
  }, []);

  const tidy = useCallback(() => {
    cascadeRef.current = 0;
    unplace(WINDOW_IDS.filter((id) => state.windows[id].status === "open"));
  }, [state.windows, unplace]);

  return {
    windows: state.windows,
    seen: state.seen,
    focusedId: findFocusedWindow(state.windows),
    open,
    close,
    minimize,
    focus,
    move,
    tidy,
    unplace,
    nextCascadeOffset,
  };
}
