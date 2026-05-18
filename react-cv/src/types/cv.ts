export const LANGUAGES = {
  ES: "es",
  EN: "en",
} as const;

export const RESOURCE_KINDS = {
  LIVE: "live",
  DOWNLOAD: "download",
  VIDEO: "video",
  CERTIFICATE: "certificate",
  LEGACY: "legacy",
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export type ResourceKind = (typeof RESOURCE_KINDS)[keyof typeof RESOURCE_KINDS];

export interface LocalizedText {
  es: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: LocalizedText;
}

export interface ActionLink {
  label: LocalizedText;
  href: string;
  download?: boolean;
  external?: boolean;
}

export interface HeroStat {
  label: LocalizedText;
  value: string;
}

export interface ProfileFact {
  label: LocalizedText;
  value: LocalizedText;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedText;
  period: string;
  description: LocalizedText;
  stack: string[];
  highlights: LocalizedText[];
}

export interface EducationResource {
  label: LocalizedText;
  kind: ResourceKind;
  href?: string;
  assetPath?: string;
  download?: boolean;
  note?: LocalizedText;
}

export interface EducationItem {
  institution: string;
  program: LocalizedText;
  period: string;
  note?: LocalizedText;
  resources?: EducationResource[];
}

export interface EducationGroup {
  title: LocalizedText;
  description: LocalizedText;
  items: EducationItem[];
}

export interface ProjectResource {
  label: LocalizedText;
  kind: ResourceKind;
  href?: string;
  assetPath?: string;
  download?: boolean;
  note?: LocalizedText;
}

export interface ProjectItem {
  title: string;
  category: LocalizedText;
  coverImageAlt?: LocalizedText;
  coverImagePath?: string;
  description: LocalizedText;
  href: string;
  cta: LocalizedText;
  summary: LocalizedText;
  tags: string[];
  resources: ProjectResource[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  category: LocalizedText;
}

export interface SkillGroup {
  title: LocalizedText;
  items: string[];
}

export interface ContactItem {
  label: LocalizedText;
  value: string;
  href: string;
  detail?: LocalizedText;
}

export interface CVData {
  metaTitle: string;
  brand: string;
  availability: LocalizedText;
  nav: NavItem[];
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroRole: LocalizedText;
  heroIntro: LocalizedText;
  heroActions: ActionLink[];
  heroStats: HeroStat[];
  featuredTechnologies: string[];
  profileFacts: ProfileFact[];
  aboutTitle: LocalizedText;
  aboutBody: LocalizedText[];
  profileHighlights: LocalizedText[];
  softSkills: LocalizedText[];
  experienceTitle: LocalizedText;
  experiences: ExperienceItem[];
  educationTitle: LocalizedText;
  educationGroups: EducationGroup[];
  projectsTitle: LocalizedText;
  projects: ProjectItem[];
  skillsTitle: LocalizedText;
  skills: SkillItem[];
  skillGroups: SkillGroup[];
  contactTitle: LocalizedText;
  contactIntro: LocalizedText;
  contacts: ContactItem[];
  contactActions: ActionLink[];
  footer: LocalizedText;
}
