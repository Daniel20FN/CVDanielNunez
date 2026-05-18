import type { CVData, Language, LocalizedText } from "../types/cv";
import { ASSET_PATHS } from "./assets";

export const DEFAULT_LANGUAGE: Language = "es";

export const LANGUAGE_LABELS: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

export function getLocalizedText(copy: LocalizedText, language: Language): string {
  return copy[language];
}

export const cvData: CVData = {
  metaTitle: "Daniel Nunez | Editorial CV",
  brand: "Daniel Nunez",
  availability: {
    es: "Full Stack Developer con foco en producto digital, IA aplicada, SDD/TDD y arquitectura.",
    en: "Full Stack Developer focused on digital product, applied AI, SDD/TDD, and architecture.",
  },
  nav: [
    { id: "inicio", label: { es: "Inicio", en: "Home" } },
    { id: "perfil", label: { es: "Perfil", en: "Profile" } },
    { id: "trayectoria", label: { es: "Trayectoria", en: "Journey" } },
    { id: "proyectos", label: { es: "Proyectos", en: "Projects" } },
    { id: "tecnologias", label: { es: "Tecnologias", en: "Stack" } },
    { id: "contacto", label: { es: "Contacto", en: "Contact" } },
  ],
  heroEyebrow: {
    es: "Valencia, Espana / Full Stack Developer",
    en: "Valencia, Spain / Full Stack Developer",
  },
  heroTitle: {
    es: "Full Stack Developer especializado en Next.js, React, TypeScript, Node.js, Prisma e IA aplicada.",
    en: "Full Stack Developer specialized in Next.js, React, TypeScript, Node.js, Prisma, and applied AI.",
  },
  heroRole: {
    es: "Next.js, React, TypeScript y Node.js, con practicas de arquitectura, calidad, SDD/TDD e IA asistida.",
    en: "Next.js, React, TypeScript, and Node.js, with architecture, quality, SDD/TDD, and AI-assisted practices.",
  },
  heroIntro: {
    es: "Actualmente trabajo en Anphis Servicios de Ingenieria y Tecnologia Aplicada creando soluciones digitales orientadas a producto. Combino frontend moderno, backend robusto, bases de datos y funcionalidades de datos o IA cuando aportan valor real.",
    en: "I currently work at Anphis Servicios de Ingenieria y Tecnologia Aplicada, building product-oriented digital solutions. I combine modern frontend, robust backend, databases, and data or AI features when they add real value.",
  },
  heroActions: [
    { label: { es: "Contactame", en: "Contact me" }, href: "#contacto" },
    {
      label: { es: "LinkedIn", en: "LinkedIn" },
      href: "https://www.linkedin.com/in/daniel-felipe-n%C3%BA%C3%B1ez-moreno-891654297/",
      external: true,
    },
  ],
  heroStats: [
    { value: "3", label: { es: "experiencias profesionales", en: "professional experiences" } },
    { value: "6", label: { es: "proyectos visibles en portfolio", en: "projects visible in portfolio" } },
    { value: "16+", label: { es: "tecnologias y herramientas", en: "technologies and tools" } },
  ],
  featuredTechnologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Prisma",
    "Python",
    "Django",
    "FastAPI",
    "Docker",
    "Databases",
    "AI tools",
    "Git",
  ],
  profileFacts: [
    { label: { es: "Edad", en: "Age" }, value: { es: "20", en: "20" } },
    { label: { es: "Residencia", en: "Location" }, value: { es: "Valencia, Espana", en: "Valencia, Spain" } },
    { label: { es: "Email", en: "Email" }, value: { es: "dnunez200508@gmail.com", en: "dnunez200508@gmail.com" } },
    { label: { es: "Telefono", en: "Phone" }, value: { es: "+34 643 31 93 95", en: "+34 643 31 93 95" } },
  ],
  aboutTitle: {
    es: "Un desarrollador full stack que busca software util, mantenible y bien estructurado.",
    en: "A full stack developer focused on useful, maintainable, well-structured software.",
  },
  aboutBody: [
    {
      es: "Hola, soy Daniel Nunez, Full Stack Developer especializado en aplicaciones web con Next.js, React, TypeScript, Node.js y Prisma. Actualmente trabajo en Anphis Servicios de Ingenieria y Tecnologia Aplicada, construyendo soluciones digitales orientadas a producto.",
      en: "Hi, I am Daniel Nunez, a Full Stack Developer specialized in web applications with Next.js, React, TypeScript, Node.js, and Prisma. I currently work at Anphis Servicios de Ingenieria y Tecnologia Aplicada, building product-oriented digital solutions.",
    },
    {
      es: "Me interesa crear software util, mantenible y bien estructurado, con frontend moderno, backend robusto y funcionalidades de datos o IA cuando aportan valor. Trabajo con diseno tecnico estructurado, buenas practicas de arquitectura, control de calidad y SDD/TDD cuando encajan en el contexto.",
      en: "I care about building useful, maintainable, well-structured software, with modern frontend, robust backend, and data or AI features when they add value. I work with structured technical design, architecture practices, quality control, and SDD/TDD when they fit the context.",
    },
    {
      es: "Uso herramientas de IA y agentes de desarrollo como apoyo para analisis, documentacion, testing y revision de codigo, siempre dentro de un proceso estructurado y manteniendo el criterio tecnico y la responsabilidad sobre las decisiones.",
      en: "I use AI tools and development agents to support analysis, documentation, testing, and code review, always within a structured process while keeping technical judgment and responsibility for the decisions.",
    },
  ],
  profileHighlights: [
    {
      es: "Graduado con Premio a la Excelencia Academica en DAM.",
      en: "Graduated with an Academic Excellence Award in Multiplatform Application Development.",
    },
    {
      es: "Especializacion reciente en Inteligencia Artificial y Big Data.",
      en: "Recent specialization in Artificial Intelligence and Big Data.",
    },
    {
      es: "Experiencia profesional activa en Next.js, React, TypeScript, Node.js, Prisma y bases de datos.",
      en: "Active professional experience with Next.js, React, TypeScript, Node.js, Prisma, and databases.",
    },
  ],
  softSkills: [
    { es: "Trabajo en equipo", en: "Teamwork" },
    { es: "Proactividad", en: "Proactivity" },
    { es: "Co-creacion", en: "Co-creation" },
    { es: "Tolerancia a la presion", en: "Calm under pressure" },
    { es: "Escucha activa y empatia", en: "Active listening and empathy" },
    { es: "Resiliencia", en: "Resilience" },
    { es: "Comunicacion", en: "Communication" },
    { es: "Orientacion a resultados", en: "Results orientation" },
    { es: "Polivalencia y versatilidad", en: "Versatility" },
    { es: "Adaptacion al cambio", en: "Adaptability to change" },
  ],
  experienceTitle: {
    es: "Experiencia, estudios oficiales y formacion complementaria en una misma linea de crecimiento.",
    en: "Experience, formal studies, and complementary learning told as one growth path.",
  },
  experiences: [
    {
      company: "Anphis Servicios de Ingenieria y Tecnologia Aplicada, S.L.",
      role: { es: "Full Stack Developer", en: "Full Stack Developer" },
      period: "08/2024 - Actualidad",
      description: {
        es: "Desarrollo de aplicaciones web full stack utilizando Next.js, React, TypeScript, Node.js y Prisma en un entorno orientado a producto.",
        en: "Full stack web application development using Next.js, React, TypeScript, Node.js, and Prisma in a product-oriented environment.",
      },
      stack: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "Git"],
      highlights: [
        {
          es: "Diseno e implementacion de funcionalidades frontend y backend, integracion con bases de datos y colaboracion en soluciones tecnologicas para clientes.",
          en: "Designed and implemented frontend and backend features, integrated databases, and collaborated on technology solutions for clients.",
        },
        {
          es: "Aplicacion de buenas practicas de desarrollo, mantenibilidad, revision de codigo, mejora continua e IA asistida para analisis, documentacion, testing y revision.",
          en: "Applied development best practices, maintainability, code review, continuous improvement, and AI assistance for analysis, documentation, testing, and review.",
        },
      ],
    },
    {
      company: "Laberit Sistemas",
      role: { es: "Estudiante en practicas", en: "Intern" },
      period: "03/2024 - 05/2024",
      description: {
        es: "Estudiante en practicas dentro de la unidad de SCM, desarrollando principalmente en C# con .NET Framework y .NET MAUI, ademas de Java, Spring Boot, Tomcat y Postman.",
        en: "Intern in the SCM unit, mainly developing in C# with .NET Framework and .NET MAUI, as well as Java, Spring Boot, Tomcat, and Postman.",
      },
      stack: ["C#", ".NET Framework", ".NET MAUI", "Java", "Spring Boot", "Tomcat", "Postman"],
      highlights: [
        {
          es: "Exposicion a stack multiplataforma, backend empresarial y herramientas de apoyo al desarrollo.",
          en: "Exposure to cross-platform stacks, enterprise backend, and development support tools.",
        },
        {
          es: "Primer acercamiento profesional a procesos y ritmo de equipo.",
          en: "First professional exposure to team processes and delivery rhythm.",
        },
      ],
    },
    {
      company: "Smartbox",
      role: { es: "Promotor de ventas", en: "Sales promoter" },
      period: "Temporada de Navidad",
      description: {
        es: "Promotor de ventas durante la temporada de Navidad, responsable del abastecimiento del puesto y de resolver dudas de clientes.",
        en: "Sales promoter during the Christmas season, responsible for keeping the stand stocked and answering customer questions.",
      },
      stack: ["Comunicacion", "Empatia", "Proactividad"],
      highlights: [
        {
          es: "Desarrollo de habilidades comunicativas, empatia y proactividad en atencion directa al cliente.",
          en: "Developed communication, empathy, and proactivity through direct customer-facing work.",
        },
      ],
    },
  ],
  educationTitle: {
    es: "El sitio original diferenciaba educacion oficial y educacion complementaria; ahora ambas quedan estructuradas por separado.",
    en: "The original site separated formal education from complementary education; both are now structured independently.",
  },
  educationGroups: [
    {
      title: { es: "Educacion oficial", en: "Formal education" },
      description: {
        es: "Formacion reglada, grados y titulaciones principales.",
        en: "Formal studies, degrees, and main credentials.",
      },
      items: [
        {
          institution: "Universitat Oberta de Catalunya (UOC)",
          program: { es: "Grado en Ingenieria Informatica", en: "Bachelor in Computer Engineering" },
          period: "2025 - Actualidad",
        },
        {
          institution: "IES Abastos",
          program: { es: "Especializacion en Inteligencia Artificial & Big Data", en: "Specialization in Artificial Intelligence & Big Data" },
          period: "2024 - 2025",
        },
        {
          institution: "Campus Camara FP",
          program: { es: "Tecnico Superior en Desarrollo de Aplicaciones Multiplataforma", en: "Higher Technician in Multiplatform Application Development" },
          period: "2022 - 2024",
          note: { es: "Graduado con Premio a la Excelencia Academica", en: "Graduated with an Academic Excellence Award" },
          resources: [
            {
              label: { es: "Diploma", en: "Diploma" },
              kind: "certificate",
              href: ASSET_PATHS.documents.certificates.diplomaDam,
              assetPath: ASSET_PATHS.documents.certificates.diplomaDam,
              download: true,
              note: {
                es: "Copia local disponible en la app React.",
                en: "Local copy available inside the React app.",
              },
            },
          ],
        },
        {
          institution: "Colegio Bilingue San Juan de Dios",
          program: { es: "Bachiller", en: "High school diploma" },
          period: "2021",
        },
      ],
    },
    {
      title: { es: "Educacion complementaria", en: "Complementary education" },
      description: {
        es: "Cursos y certificados visibles en el portfolio legacy.",
        en: "Courses and certificates visible in the legacy portfolio.",
      },
      items: [
        {
          institution: "SoloLearn",
          program: { es: "Python Beginners", en: "Python Beginners" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.pythonBeginners, assetPath: ASSET_PATHS.documents.certificates.pythonBeginners, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "Intermediate Python", en: "Intermediate Python" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.intermediatePython, assetPath: ASSET_PATHS.documents.certificates.intermediatePython, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "Python Data Structures", en: "Python Data Structures" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.pythonDataStructures, assetPath: ASSET_PATHS.documents.certificates.pythonDataStructures, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "Python Core", en: "Python Core" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.pythonCore, assetPath: ASSET_PATHS.documents.certificates.pythonCore, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "Java", en: "Java" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.java, assetPath: ASSET_PATHS.documents.certificates.java, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "SQL", en: "SQL" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.sql, assetPath: ASSET_PATHS.documents.certificates.sql, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "Kotlin", en: "Kotlin" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "legacy", note: { es: "El sitio legacy lo muestra sin enlace valido.", en: "The legacy site shows it without a valid link." } }],
        },
        {
          institution: "SoloLearn",
          program: { es: "Introduction to C#", en: "Introduction to C#" },
          period: "Curso",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.introductionToCSharp, assetPath: ASSET_PATHS.documents.certificates.introductionToCSharp, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
        {
          institution: "Campus Camara FP",
          program: { es: "Programa 10SK (Soft Skills)", en: "10SK Program (Soft Skills)" },
          period: "Programa",
          resources: [{ label: { es: "Certificado", en: "Certificate" }, kind: "certificate", href: ASSET_PATHS.documents.certificates.softSkills10Sk, assetPath: ASSET_PATHS.documents.certificates.softSkills10Sk, download: true, note: { es: "Copia local lista para descarga.", en: "Local copy ready for download." } }],
        },
      ],
    },
  ],
  projectsTitle: {
    es: "El portfolio migrado ya no es una simple lista: conserva categoria, contexto y recursos visibles del sitio original.",
    en: "The migrated portfolio is no longer a simple list: it preserves category, context, and the resources visible on the original site.",
  },
  projects: [
    {
      title: "EvolX-FitLab",
      category: { es: "Proyecto final / IA aplicada", en: "Final project / Applied AI" },
      description: {
        es: "Aplicacion web full stack desarrollada como proyecto final de la Especializacion en Inteligencia Artificial y Big Data en IES Abastos.",
        en: "Full stack web application developed as the final project for the Artificial Intelligence and Big Data specialization at IES Abastos.",
      },
      summary: {
        es: "Recomienda recetas personalizadas mediante modelos MLP entrenados para distintos momentos del dia, combinando perfiles de usuario, objetivos nutricionales y analisis de datos. El trabajo partio de 500.000 recetas, con limpieza y normalizacion de unas 300.000, perfiles sinteticos y modelos de recomendacion personalizados. May. 2025 - jun. 2025.",
        en: "It recommends personalized recipes using MLP models trained for different times of day, combining user profiles, nutritional goals, and data analysis. The work started from 500,000 recipes, with cleaning and normalization of around 300,000, synthetic profiles, and personalized recommendation models. May 2025 - Jun 2025.",
      },
      href: "#contacto",
      cta: { es: "Consultar proyecto", en: "Ask about project" },
      tags: ["React", "Next.js", "Node.js", "FastAPI", "MongoDB", "Python", "TensorFlow", "Pandas", "Power BI", "JWT"],
      resources: [],
      featured: true,
    },
    {
      title: "Password Cifred",
      category: { es: "React Native", en: "React Native" },
      coverImageAlt: {
        es: "Recursos descargables y demo de Password Cifred",
        en: "Downloadable resources and demo for Password Cifred",
      },
      description: {
        es: "Aplicacion movil mostrada en el sitio original con APK descargable y demo en video.",
        en: "Mobile app presented on the original site with a downloadable APK and video demo.",
      },
      summary: {
        es: "Proyecto mobile del portfolio legacy, pensado como pieza descargable y demostrable.",
        en: "Mobile portfolio project from the legacy site, presented as both downloadable and demonstrable work.",
      },
      href: "#contacto",
      cta: { es: "Consultar proyecto", en: "Ask about project" },
      tags: ["React Native", "APK", "Video demo"],
      resources: [
        {
          label: { es: "APK", en: "APK" },
          kind: "download",
          href: ASSET_PATHS.projects.downloads.passwordCifredApk,
          assetPath: ASSET_PATHS.projects.downloads.passwordCifredApk,
          download: true,
          note: { es: "APK alojado dentro de la app React.", en: "APK hosted inside the React app." },
        },
        {
          label: { es: "Video demo", en: "Video demo" },
          kind: "video",
          href: ASSET_PATHS.projects.media.passwordCifredDemo,
          assetPath: ASSET_PATHS.projects.media.passwordCifredDemo,
          note: { es: "Demo de video abierta desde los assets locales de React.", en: "Video demo opened from React-local assets." },
        },
      ],
    },
    {
      title: "Check In Work App",
      category: { es: "React Native", en: "React Native" },
      coverImageAlt: {
        es: "Demo de video de Check In Work App",
        en: "Video demo for Check In Work App",
      },
      description: {
        es: "Segundo proyecto mobile mostrado como demo en video dentro del portfolio original.",
        en: "Second mobile project shown as a video demo in the original portfolio.",
      },
      summary: {
        es: "Pieza mobile sin landing publica, pero visible como demo dentro del sitio legacy.",
        en: "Mobile piece without a public landing page, but visible as a demo inside the legacy site.",
      },
      href: "#contacto",
      cta: { es: "Pedir contexto", en: "Ask for context" },
      tags: ["React Native", "Workflows", "Video demo"],
      resources: [
        {
          label: { es: "Video demo", en: "Video demo" },
          kind: "video",
          href: ASSET_PATHS.projects.media.checkInWorkDemo,
          assetPath: ASSET_PATHS.projects.media.checkInWorkDemo,
          note: { es: "Demo disponible dentro del arbol public de React.", en: "Demo available inside the React public tree." },
        },
      ],
    },
    {
      title: "Target Codes",
      category: { es: "Web estatica", en: "Static web" },
      coverImagePath: ASSET_PATHS.projects.previews.targetCodes,
      coverImageAlt: {
        es: "Vista previa del proyecto Target Codes",
        en: "Preview image for the Target Codes project",
      },
      description: {
        es: "Landing publicada en Vercel e incluida tal cual en el portfolio legacy.",
        en: "Landing page published on Vercel and included directly in the legacy portfolio.",
      },
      summary: {
        es: "Ejemplo de sitio estatico con salida publica y enlace directo.",
        en: "Example of a static site with a public deployment and direct link.",
      },
      href: "https://targetcodesp.vercel.app/index.html",
      cta: { es: "Ver sitio", en: "Open site" },
      tags: ["Vercel", "Static web"],
      resources: [{ label: { es: "Sitio online", en: "Live site" }, kind: "live", href: "https://targetcodesp.vercel.app/index.html" }],
    },
    {
      title: "Silentium",
      category: { es: "Web estatica", en: "Static web" },
      coverImagePath: ASSET_PATHS.projects.previews.silentium,
      coverImageAlt: {
        es: "Vista previa del proyecto Silentium",
        en: "Preview image for the Silentium project",
      },
      description: {
        es: "Proyecto web enlazado desde el portfolio original con despliegue publico.",
        en: "Web project linked from the original portfolio with a public deployment.",
      },
      summary: {
        es: "Segundo ejemplo de portfolio estatico ya disponible para navegar.",
        en: "Second example of a static portfolio piece already available to browse.",
      },
      href: "https://silentium.vercel.app/",
      cta: { es: "Ver sitio", en: "Open site" },
      tags: ["Vercel", "Static web"],
      resources: [{ label: { es: "Sitio online", en: "Live site" }, kind: "live", href: "https://silentium.vercel.app/" }],
    },
    {
      title: "LearnLeap",
      category: { es: "Proyecto de grado", en: "Graduation project" },
      coverImagePath: ASSET_PATHS.projects.previews.learnLeap,
      coverImageAlt: {
        es: "Vista previa del proyecto LearnLeap",
        en: "Preview image for the LearnLeap project",
      },
      description: {
        es: "Proyecto de grado en Campus Camara FP. Aplicacion e-learning desarrollada con Django, orientada a la gestion de formacion online y aprendizaje digital.",
        en: "Graduation project at Campus Camara FP. E-learning application built with Django, focused on online training management and digital learning.",
      },
      summary: {
        es: "La pieza mas institucional del portfolio legacy, presentada como proyecto academico con presencia publica en learnleap.es.",
        en: "The most formal portfolio piece from the legacy site, presented as an academic project with a public presence at learnleap.es.",
      },
      href: "https://learnleap.es",
      cta: { es: "Explorar proyecto", en: "Explore project" },
      tags: ["Django", "E-learning", "Graduation project"],
      resources: [{ label: { es: "Sitio online", en: "Live site" }, kind: "live", href: "https://learnleap.es" }],
    },
  ],
  skillsTitle: {
    es: "Stack principal para construir aplicaciones web modernas, backend robusto y funcionalidades de datos o IA.",
    en: "Core stack for building modern web applications, robust backend, and data or AI features.",
  },
  skills: [
    { name: "TypeScript", level: 90, category: { es: "Frontend", en: "Frontend" } },
    { name: "React", level: 80, category: { es: "Frontend", en: "Frontend" } },
    { name: "Next.js", level: 80, category: { es: "Frontend", en: "Frontend" } },
    { name: "Node.js", level: 75, category: { es: "Backend", en: "Backend" } },
    { name: "Prisma", level: 75, category: { es: "Backend", en: "Backend" } },
    { name: "Java", level: 80, category: { es: "Backend", en: "Backend" } },
    { name: "SQL", level: 80, category: { es: "Datos", en: "Data" } },
    { name: "CSS", level: 70, category: { es: "Frontend", en: "Frontend" } },
    { name: "C# .NET", level: 65, category: { es: "Backend", en: "Backend" } },
    { name: "React Native", level: 60, category: { es: "Mobile", en: "Mobile" } },
    { name: "Python", level: 60, category: { es: "Backend", en: "Backend" } },
    { name: "Django", level: 55, category: { es: "Backend", en: "Backend" } },
    { name: "Git", level: 50, category: { es: "Workflow", en: "Workflow" } },
    { name: "Docker", level: 45, category: { es: "DevOps", en: "DevOps" } },
  ],
  skillGroups: [
    {
      title: { es: "Frameworks y runtimes asociados", en: "Related frameworks and runtimes" },
      items: ["FastAPI", "Spring Boot", ".NET Framework", ".NET MAUI", "Tomcat", "MongoDB", "Postman"],
    },
    {
      title: { es: "Fortalezas transversales", en: "Cross-functional strengths" },
      items: ["APIs", "Frontend UI", "Databases", "AI-assisted development", "SDD/TDD", "Code review"],
    },
  ],
  contactTitle: {
    es: "Canales directos, assets del CV original y contexto suficiente para abrir una conversacion real.",
    en: "Direct channels, original CV assets, and enough context to start a real conversation.",
  },
  contactIntro: {
    es: "La version legacy ya contenia email, telefono, LinkedIn y un CV descargable. En React esos recursos ahora viven dentro de la app para que los enlaces de documentos y portfolio funcionen sin depender de carpetas externas.",
    en: "The legacy version already contained email, phone, LinkedIn, and a downloadable CV. In React those resources now live inside the app so document and portfolio links work without depending on external folders.",
  },
  contacts: [
    {
      label: { es: "Email", en: "Email" },
      value: "dnunez200508@gmail.com",
      href: "mailto:dnunez200508@gmail.com",
      detail: { es: "Canal principal mostrado en varias secciones del sitio legacy.", en: "Primary channel repeated across several sections of the legacy site." },
    },
    {
      label: { es: "Telefono", en: "Phone" },
      value: "+34 643 31 93 95",
      href: "tel:+34643319395",
      detail: { es: "Contacto directo visible en about y contacto.", en: "Direct contact visible in both about and contact sections." },
    },
    {
      label: { es: "LinkedIn", en: "LinkedIn" },
      value: "daniel-felipe-nunez-moreno",
      href: "https://www.linkedin.com/in/daniel-felipe-n%C3%BA%C3%B1ez-moreno-891654297/",
      detail: { es: "Perfil publico ya enlazado desde el sitio original.", en: "Public profile already linked from the original site." },
    },
  ],
  contactActions: [
    {
      label: { es: "CV PDF ES", en: "CV PDF ES" },
      href: ASSET_PATHS.documents.cv.es,
      download: true,
    },
    {
      label: { es: "CV PDF EN", en: "CV PDF EN" },
      href: ASSET_PATHS.documents.cv.en,
      download: true,
    },
    {
      label: { es: "Abrir LinkedIn", en: "Open LinkedIn" },
      href: "https://www.linkedin.com/in/daniel-felipe-n%C3%BA%C3%B1ez-moreno-891654297/",
      external: true,
    },
  ],
  footer: {
    es: "CV bilingue y data-driven construido para convivir con el sitio legacy sin perder fidelidad de contenido.",
    en: "Bilingual, data-driven CV built to coexist with the legacy site without losing content fidelity.",
  },
};
