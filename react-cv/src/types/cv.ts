export const LANGUAGES = {
  ES: "es",
  EN: "en",
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export interface LocalizedText {
  es: string;
  en: string;
}

/** Windows that belong to the guided tour, in the order the visitor is led through them. */
export const TOUR_WINDOWS = ["about", "journey", "method", "projects", "cv", "contact"] as const;

export const PROJECT_WINDOWS = ["project-platform", "project-evolx"] as const;

/** Every window on the desktop; this order is also the render and taskbar order. */
export const WINDOW_IDS = ["welcome", ...TOUR_WINDOWS, ...PROJECT_WINDOWS, "trash"] as const;

export type TourWindowId = (typeof TOUR_WINDOWS)[number];
export type ProjectWindowId = (typeof PROJECT_WINDOWS)[number];
export type WindowId = (typeof WINDOW_IDS)[number];

export type IconGlyph = "folder" | "folder-warm" | "pdf" | "txt" | "app" | "trash";

export interface DesktopIconItem {
  window: WindowId;
  label: LocalizedText;
  glyph: IconGlyph;
}

export interface WindowMeta {
  title: LocalizedText;
  /** CSS width used on desktop screens; phones always get a full-screen sheet. */
  width: string;
}

export interface JourneyStep {
  period: LocalizedText;
  title: LocalizedText;
  place: string;
  text?: LocalizedText;
  /** Marks stages that are still ongoing. */
  current?: boolean;
}

export interface MethodStep {
  title: LocalizedText;
  text: LocalizedText;
}

export type ProjectPreviewKind = "dashboard" | "recipes";

export interface ProjectItem {
  window: ProjectWindowId;
  title: LocalizedText;
  description: LocalizedText;
  place: string;
  period: LocalizedText;
  role: LocalizedText;
  stack: string[];
  preview: ProjectPreviewKind;
}

export interface TrashItem {
  name: LocalizedText;
  size: string;
}
