export const skillGroups = [
  {
    id: "frontend",
    name: "Frontend / UI",
    color: "#759AFF",
  },
  {
    id: "backend",
    name: "Backend, datos y herramientas",
    color: "#FFD239",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    color: "#F35B50",
  },
  {
    id: "ai",
    name: "IA aplicada",
    color: "#A48AE8",
  },
];

// ==========================================
// NIVELES Y TIPOS DE EXPERIENCIA
// ==========================================

export const experienceLabels = {
  professional: "Experiencia profesional",
  projects: "Proyectos personales",
  guided: "Práctica formativa guiada",
  habitual: "Uso práctico habitual",
  introductory: "Formación y exploración",
};

// ==========================================
// FUENTES DE EXPERIENCIA Y FORMACIÓN
// ==========================================

export const skillSources = {
  trabajo: {
    label: "Experiencia profesional en Salesforce",
  },
  grados: {
    label: "Formación DAM / DAW",
  },
  cursoJS: {
    label: "Curso JavaScript Moderno",
  },
  apvFrontend: {
    label: "APV · Frontend (proyecto guiado)",
    url: "https://github.com/dTasio/apv_frontend_deploy",
  },
  apvBackend: {
    label: "APV · Backend (proyecto guiado)",
    url: "https://github.com/dTasio/apv_backend_deploy",
  },
  masterIA: {
    label: "Máster de Inteligencia Artificial · BIG School",
  },
  usoIA: {
    label: "Uso personal y apoyo en desarrollo",
  },
};

// ==========================================
// INVENTARIO DE TECNOLOGÍAS
// ==========================================

// visible: false permite conservar una tecnología
// en el inventario sin mostrarla como nodo de la red

// Las asociaciones a proyectos propios se gestionan mediante skillIds en projects.js.

export const skills = [
  // ==========================================
  // FRONTEND Y UI
  // ==========================================

  {
    id: "html",
    name: "HTML",
    group: "frontend",
    experience: "professional",
    description: "Estructura y semántica de interfaces web.",
    sources: ["grados", "cursoJS", "trabajo"],
  },
  {
    id: "css",
    name: "CSS",
    group: "frontend",
    experience: "professional",
    description: "Estilos, layouts y diseño responsive.",
    sources: ["grados", "cursoJS", "trabajo"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    group: "frontend",
    experience: "professional",
    description: "Lógica, eventos, DOM, asincronía y APIs.",
    sources: ["grados", "cursoJS", "trabajo"],
  },
  {
    id: "react",
    name: "React",
    group: "frontend",
    experience: "projects",
    description: "Interfaces con componentes, estado y hooks.",
    sources: ["cursoJS", "apvFrontend"],
  },
  {
    id: "react-router",
    name: "React Router",
    group: "frontend",
    experience: "projects",
    description: "Navegación y rutas en aplicaciones React.",
    sources: ["cursoJS", "apvFrontend"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    group: "frontend",
    experience: "projects",
    description: "Construcción de interfaces con clases de utilidad.",
    sources: ["cursoJS", "apvFrontend"],
  },
  {
    id: "vue",
    name: "Vue.js",
    group: "frontend",
    experience: "guided",
    description: "Componentes e interfaces trabajados en formación.",
    sources: ["grados", "cursoJS"],
  },
  {
    id: "maplibre",
    name: "MapLibre GL JS",
    group: "frontend",
    experience: "projects",
    description: "Mapas interactivos y visualización geográfica.",
    sources: [],
  },

  // ==========================================
  // BACKEND, DATOS Y HERRAMIENTAS
  // ==========================================

  {
    id: "sql",
    name: "SQL",
    group: "backend",
    experience: "professional",
    description: "Consultas y recuperación de datos relacionales.",
    sources: ["grados", "trabajo"],
  },
  {
    id: "node",
    name: "Node.js",
    group: "backend",
    experience: "guided",
    description: "Ejecución de JavaScript en el servidor.",
    sources: ["cursoJS", "apvBackend"],
  },
  {
    id: "express",
    name: "Express",
    group: "backend",
    experience: "guided",
    description: "Servidor, rutas y endpoints HTTP.",
    sources: ["cursoJS", "apvBackend"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    group: "backend",
    experience: "guided",
    description: "Almacenamiento de datos en base de datos NoSQL.",
    sources: ["cursoJS", "apvBackend"],
  },
  {
    id: "mongoose",
    name: "Mongoose",
    group: "backend",
    experience: "guided",
    description: "Modelos y consultas a MongoDB.",
    sources: ["cursoJS", "apvBackend"],
  },
  {
    id: "rest-api",
    name: "APIs REST",
    group: "backend",
    experience: "projects",
    description: "Consumo y desarrollo de endpoints HTTP.",
    sources: ["grados", "cursoJS", "apvBackend"],
  },
  {
    id: "jwt",
    name: "JWT",
    group: "backend",
    experience: "guided",
    description: "Autenticación de usuarios mediante tokens.",
    sources: ["cursoJS", "apvBackend"],
  },
  {
    id: "axios",
    name: "Axios",
    group: "backend",
    experience: "guided",
    description: "Peticiones HTTP entre frontend y backend.",
    sources: ["cursoJS", "apvFrontend"],
  },
  {
    id: "git",
    name: "Git",
    group: "backend",
    experience: "professional",
    description: "Control de versiones, cambios y despliegues.",
    sources: ["trabajo"],
  },
  {
    id: "github",
    name: "GitHub",
    group: "backend",
    experience: "projects",
    description: "Repositorios, documentación y publicación de proyectos.",
    sources: [],
  },

  // ==========================================
  // SALESFORCE
  // ==========================================

  {
    id: "sales-cloud",
    name: "Sales Cloud",
    group: "salesforce",
    experience: "professional",
    description: "Trabajo con procesos y funcionalidades CRM.",
    sources: ["trabajo"],
  },
  {
    id: "salesforce-setup",
    name: "Salesforce Setup",
    group: "salesforce",
    experience: "professional",
    description: "Configuración de usuarios, permisos y jerarquías.",
    sources: ["trabajo"],
  },
  {
    id: "lwc",
    name: "LWC",
    group: "salesforce",
    experience: "professional",
    description: "Desarrollo y mantenimiento de componentes.",
    sources: ["trabajo"],
  },
  {
    id: "aura",
    name: "Aura",
    group: "salesforce",
    experience: "professional",
    description: "Mantenimiento de componentes Salesforce.",
    sources: ["trabajo"],
  },
  {
    id: "apex",
    name: "Apex",
    group: "salesforce",
    experience: "professional",
    description: "Apoyo en desarrollos y lógica de Salesforce.",
    sources: ["trabajo"],
  },
  {
    id: "sfdx",
    name: "SFDX",
    group: "salesforce",
    experience: "professional",
    description: "Herramientas para desarrollo y despliegues.",
    sources: ["trabajo"],
  },

  // ==========================================
  // INTELIGENCIA ARTIFICIAL APLICADA
  // ==========================================

  {
    id: "chatgpt",
    name: "ChatGPT",
    group: "ai",
    experience: "habitual",
    description: "Uso de GPTs, Projects, Skills, Work, Sites y automatizaciones.",
    sources: ["usoIA", "masterIA"],
  },
  {
    id: "codex",
    name: "Codex",
    group: "ai",
    experience: "habitual",
    description: "Asistencia en programación, revisión y mejora del código.",
    sources: ["usoIA", "masterIA"],
  },
  {
    id: "ia-generativa",
    name: "IA generativa",
    group: "ai",
    experience: "introductory",
    description: "LLMs, agentes, n8n, Lovable, Copilot, IA audiovisual y voz.",
    sources: ["usoIA", "masterIA"],
  },

  // ==========================================
  // INVENTARIO COMPLEMENTARIO
  // Tecnologías no visibles como nodos
  // ==========================================

  {
    id: "java",
    name: "Java",
    group: "backend",
    experience: "guided",
    description: "Programación trabajada durante la formación reglada.",
    sources: ["grados"],
    visible: false,
  },
  {
    id: "vite",
    name: "Vite",
    group: "frontend",
    experience: "projects",
    description: "Herramienta de desarrollo y compilación web.",
    sources: ["apvFrontend"],
    visible: false,
  },
  {
    id: "openstreetmap",
    name: "OpenStreetMap",
    group: "frontend",
    experience: "projects",
    description: "Datos cartográficos abiertos.",
    sources: [],
    visible: false,
  },
  {
    id: "overpass",
    name: "Overpass API",
    group: "backend",
    experience: "projects",
    description: "Consultas de datos geográficos de OpenStreetMap.",
    sources: [],
    visible: false,
  },
  {
    id: "open-meteo",
    name: "Open-Meteo",
    group: "backend",
    experience: "projects",
    description: "Consulta de datos meteorológicos y geográficos.",
    sources: [],
    visible: false,
  },
  {
    id: "nodemailer",
    name: "Nodemailer",
    group: "backend",
    experience: "guided",
    description: "Envío de correo electrónico desde Node.js.",
    sources: ["apvBackend"],
    visible: false,
  },
];
