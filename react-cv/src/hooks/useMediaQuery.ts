import { useCallback, useSyncExternalStore } from "react";

/** Tracks whether a CSS media query currently matches. */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
}

export const PHONE_QUERY = "(max-width: 720px)";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
