import type {
  DesktopIconItem,
  JourneyStep,
  Language,
  LocalizedText,
  MethodStep,
  ProjectItem,
  TourWindowId,
  TrashItem,
  WindowId,
  WindowMeta,
} from "../types/cv";
import { ASSET_PATHS } from "./assets";

export const DEFAULT_LANGUAGE: Language = "es";

export const LANGUAGE_LABELS: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

export function getLocalizedText(copy: LocalizedText, language: Language): string {
  return copy[language];
}

export const PROFILE = {
  name: "Daniel Núñez",
  role: "Full Stack Developer",
  city: "Valencia",
  email: "dnunez200508@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-felipe-n%C3%BA%C3%B1ez-moreno-891654297/",
  cvPath: ASSET_PATHS.documents.cv.en,
  cvFileName: "CV_Daniel_Nunez.pdf",
  timeZone: "Europe/Madrid",
} as const;

export const UI = {
  menuGuide: { es: "Guía", en: "Guide" },
  menuContact: { es: "Contacto", en: "Contact" },
  menuTidy: { es: "Ordenar ventanas", en: "Tidy windows" },
  languageGroup: { es: "Idioma", en: "Language" },
  desktopLabel: { es: "Escritorio", en: "Desktop" },
  openWindows: { es: "Ventanas abiertas", en: "Open windows" },
  start: { es: "Inicio", en: "Start" },
  seen: { es: "vistos", en: "seen" },
  tourProgress: { es: "Visita guiada", en: "Guided tour" },
  close: { es: "Cerrar", en: "Close" },
  minimize: { es: "Minimizar", en: "Minimize" },
  stepOf: { es: "Paso {n} de {total}", en: "Step {n} of {total}" },
  tourEnd: { es: "fin de la visita", en: "end of the tour" },
  next: { es: "Siguiente: {name} →", en: "Next: {name} →" },
  backToStart: { es: "Volver al inicio", en: "Back to start" },
  status: { es: "Ahora: Full Stack Developer en Anphis", en: "Now: Full Stack Developer at Anphis" },
  welcomeLead: {
    es: "Construyo aplicaciones web que llegan a producción y siguen siendo fáciles de mantener. Este es mi escritorio: abre las carpetas o sigue la visita guiada.",
    en: "I build web applications that reach production and stay easy to maintain. This is my desktop: open the folders or follow the guided tour.",
  },
  welcomeHint: { es: "Puedes arrastrar las ventanas", en: "You can drag the windows" },
  welcomeStart: { es: "Empezar la visita →", en: "Start the tour →" },
  tourOpen: { es: "abrir", en: "open" },
  tourSeen: { es: "visto ✓", en: "seen ✓" },
  aboutTitleLead: { es: "Software útil,", en: "Useful software," },
  aboutTitleAccent: { es: "bien hecho", en: "well made" },
  journeyTitleLead: { es: "De la FP a", en: "From vocational school to" },
  journeyTitleAccent: { es: "producción", en: "production" },
  methodTitleLead: { es: "Agentes de IA,", en: "AI agents," },
  methodTitleAccent: { es: "criterio humano", en: "human judgment" },
  methodDiagram: {
    es: "Flujo de trabajo: alcance, tareas en paralelo, revisión y producción",
    en: "Workflow: scope, parallel tasks, review and production",
  },
  flowScope: { es: "alcance", en: "scope" },
  flowTask: { es: "tarea", en: "task" },
  flowReview: { es: "revisión", en: "review" },
  projectsHint: { es: "Abre un proyecto para ver los detalles.", en: "Open a project to see the details." },
  factWhere: { es: "dónde", en: "where" },
  factWhen: { es: "cuándo", en: "when" },
  factRole: { es: "rol", en: "role" },
  cvDownload: { es: "Descargar PDF", en: "Download PDF" },
  cvMeta: { es: "1 página · en inglés", en: "1 page · English" },
  contactTitleLead: { es: "¿", en: "Let's " },
  contactTitleAccent: { es: "Hablamos", en: "talk" },
  contactTitleTail: { es: "?", en: "" },
  contactText: {
    es: "Si te interesa hablar de producto, desarrollo o IA aplicada, escríbeme.",
    en: "If you'd like to talk about product, development or applied AI, write to me.",
  },
  copy: { es: "Copiar", en: "Copy" },
  copied: { es: "Copiado", en: "Copied" },
  copyFailed: { es: "Selecciona la dirección para copiarla", en: "Select the address to copy it" },
  trashText: { es: "Lo que sobraba en la web anterior.", en: "What was left over from the previous site." },
} satisfies Record<string, LocalizedText>;

export const WINDOWS: Record<WindowId, WindowMeta> = {
  welcome: { title: { es: "bienvenida.txt", en: "welcome.txt" }, width: "520px" },
  about: { title: { es: "Sobre mí", en: "About me" }, width: "540px" },
  journey: { title: { es: "Recorrido", en: "Journey" }, width: "560px" },
  method: { title: { es: "Cómo trabajo", en: "How I work" }, width: "580px" },
  projects: { title: { es: "Proyectos", en: "Projects" }, width: "520px" },
  cv: { title: { es: PROFILE.cvFileName, en: PROFILE.cvFileName }, width: "460px" },
  contact: { title: { es: "contacto.txt", en: "contact.txt" }, width: "480px" },
  "project-platform": { title: { es: "plataforma-gestion", en: "management-platform" }, width: "520px" },
  "project-evolx": { title: { es: "evolx-fitlab", en: "evolx-fitlab" }, width: "520px" },
  trash: { title: { es: "Papelera", en: "Trash" }, width: "420px" },
};

/** Short names used by the tour list and the "Next" buttons. */
export const TOUR_LABELS: Record<TourWindowId, { name: LocalizedText; summary: LocalizedText }> = {
  about: { name: { es: "Sobre mí", en: "About me" }, summary: { es: "Quién soy y con qué trabajo", en: "Who I am and what I work with" } },
  journey: { name: { es: "Recorrido", en: "Journey" }, summary: { es: "De la FP a producción", en: "From vocational school to production" } },
  method: { name: { es: "Cómo trabajo", en: "How I work" }, summary: { es: "Agentes de IA y criterio humano", en: "AI agents and human judgment" } },
  projects: { name: { es: "Proyectos", en: "Projects" }, summary: { es: "Lo que he construido", en: "What I've built" } },
  cv: { name: { es: "CV", en: "CV" }, summary: { es: "Una página, en PDF", en: "One page, as a PDF" } },
  contact: { name: { es: "Contacto", en: "Contact" }, summary: { es: "Escríbeme", en: "Write to me" } },
};

export const DESKTOP_ICONS: DesktopIconItem[] = [
  { window: "about", label: { es: "Sobre mí", en: "About me" }, glyph: "folder" },
  { window: "journey", label: { es: "Recorrido", en: "Journey" }, glyph: "folder" },
  { window: "method", label: { es: "Cómo trabajo", en: "How I work" }, glyph: "folder" },
  { window: "projects", label: { es: "Proyectos", en: "Projects" }, glyph: "folder-warm" },
  { window: "cv", label: { es: PROFILE.cvFileName, en: PROFILE.cvFileName }, glyph: "pdf" },
  { window: "contact", label: { es: "contacto.txt", en: "contact.txt" }, glyph: "txt" },
  { window: "trash", label: { es: "Papelera", en: "Trash" }, glyph: "trash" },
];

export const ABOUT = {
  paragraphs: [
    {
      es: "Trabajo en Anphis, donde desarrollo y mantengo un producto real en producción: desde la interfaz hasta la base de datos y la infraestructura en Google Cloud.",
      en: "I work at Anphis, where I build and maintain a real production product: from the interface to the database and the infrastructure on Google Cloud.",
    },
    {
      es: "Me gusta pensar el diseño antes de programar y dejar el código fácil de entender para quien venga después. Estudio Ingeniería Informática en la UOC.",
      en: "I like to think the design through before coding and to leave code that is easy to understand for whoever comes next. I study Computer Engineering at UOC.",
    },
  ],
  stack: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Google Cloud", "Docker", "Python"],
} satisfies { paragraphs: LocalizedText[]; stack: string[] };

export const JOURNEY: JourneyStep[] = [
  {
    period: { es: "2022 — 2024", en: "2022 — 2024" },
    title: { es: "Técnico Superior en DAM", en: "Higher Diploma in App Development" },
    place: "Campus Cámara FP",
    text: {
      es: "Java, C#, bases de datos y desarrollo multiplataforma. Nota final 9 y Premio a la Excelencia Académica.",
      en: "Java, C#, databases and cross-platform development. Final grade 9/10 and the Academic Excellence Award.",
    },
  },
  {
    period: { es: "2024", en: "2024" },
    title: { es: "Prácticas en desarrollo", en: "Software development internship" },
    place: "Laberit",
    text: {
      es: "Primer equipo real: .NET MAUI, Spring Boot y servicios REST.",
      en: "My first real team: .NET MAUI, Spring Boot and REST services.",
    },
  },
  {
    period: { es: "2024 — hoy", en: "2024 — now" },
    title: { es: "Full Stack Developer", en: "Full Stack Developer" },
    place: "Anphis",
    text: {
      es: "Producto en producción de punta a punta, con Next.js, TypeScript, PostgreSQL y Google Cloud.",
      en: "A production product end to end, with Next.js, TypeScript, PostgreSQL and Google Cloud.",
    },
    current: true,
  },
  {
    period: { es: "2024 — 2025", en: "2024 — 2025" },
    title: { es: "Especialización en IA y Big Data", en: "Specialization in AI and Big Data" },
    place: "IES Abastos",
    text: {
      es: "Python, redes neuronales y análisis de datos. Proyecto final: EvolX-FitLab.",
      en: "Python, neural networks and data analysis. Final project: EvolX-FitLab.",
    },
  },
  {
    period: { es: "2025 — hoy", en: "2025 — now" },
    title: { es: "Grado en Ingeniería Informática", en: "B.Sc. in Computer Engineering" },
    place: "UOC",
    current: true,
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    title: { es: "Definir el alcance", en: "Define the scope" },
    text: {
      es: "Cada tarea empieza cerrada: qué se cambia, qué no y cómo se comprueba que está bien hecha.",
      en: "Every task starts closed: what changes, what doesn't, and how we check it's done right.",
    },
  },
  {
    title: { es: "Trabajar en paralelo", en: "Work in parallel" },
    text: {
      es: "Varias tareas avanzan a la vez, cada una aislada, sin pisarse entre ellas.",
      en: "Several tasks move forward at once, each one isolated so they never collide.",
    },
  },
  {
    title: { es: "Revisión independiente", en: "Independent review" },
    text: {
      es: "Otro revisor comprueba cada cambio contra lo acordado, con pruebas y capturas de la aplicación real.",
      en: "Another reviewer checks every change against what was agreed, with tests and screenshots of the real app.",
    },
  },
  {
    title: { es: "Yo decido qué sale", en: "I decide what ships" },
    text: {
      es: "Reviso el resultado y apruebo lo que llega a producción. La responsabilidad sigue siendo mía.",
      en: "I review the result and approve what reaches production. The responsibility stays mine.",
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    window: "project-platform",
    title: { es: "Plataforma de gestión en producción", en: "Production management platform" },
    description: {
      es: "Aplicación web que un equipo usa a diario. Arquitectura por dominios, contratos de API tipados y despliegues continuos en Google Cloud y Vercel.",
      en: "A web application a team uses every day. Domain-based architecture, typed API contracts and continuous deployments on Google Cloud and Vercel.",
    },
    place: "Anphis",
    period: { es: "2024 — hoy", en: "2024 — now" },
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Google Cloud"],
    preview: "dashboard",
  },
  {
    window: "project-evolx",
    title: { es: "EvolX-FitLab", en: "EvolX-FitLab" },
    description: {
      es: "Recomienda recetas según tu perfil y tus objetivos nutricionales, con un modelo de red neuronal entrenado para ello.",
      en: "Recommends recipes from your profile and nutrition goals, using a neural network model trained for it.",
    },
    place: "IES Abastos",
    period: { es: "2025", en: "2025" },
    role: { es: "Proyecto final", en: "Final project" },
    stack: ["Next.js", "FastAPI", "MongoDB", "TensorFlow"],
    preview: "recipes",
  },
];

export const TRASH: TrashItem[] = [
  { name: { es: "barras_de_porcentaje.png", en: "percentage_bars.png" }, size: "12 KB" },
  { name: { es: "soft_skills.txt", en: "soft_skills.txt" }, size: "2 KB" },
  { name: { es: "seccion_muy_larga.html", en: "very_long_section.html" }, size: "480 KB" },
];

/** Replaces `{key}` placeholders in a UI string. */
export function fillTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
