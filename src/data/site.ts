/**
 * Everything about Roberto that isn't a job lives here.
 * Jobs live in src/content/experience/*.md.
 */
export const site = {
  name: "Roberto Losa",
  role: "Software Engineer, Frontend",
  company: "iliad",
  since: 2013,
  location: { city: "Lecco", country: "Italy", timeZone: "Europe/Rome" },
  url: "https://www.robylosa.dev",
  /** <title> and meta description of the home page (keep the description under ~160 characters). */
  title: "Roberto Losa — Frontend Engineer in Lecco, Italy",
  description:
    "Roberto Losa, frontend engineer in Lecco building for the web since 2013. Websites, web apps and internal platforms in Vue, React and TypeScript, now at iliad.",

  // TODO: confirm the public email address before going live.
  email: "roby94.losa@tiscali.it",
  /** Served from public/files/ — same URL as the old site, so existing links keep working. */
  cv: "/files/Roberto-Losa-CV-english-dark.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/roberto-losa/",
    github: "https://github.com/robylosa94",
  },
  /** Experiments and demos now live inside this site, at /playground/ (see src/data/playground.ts). */

  /** Intro paragraph. `mark` is highlighted inside it. */
  intro:
    "I've been a frontend developer since 2013. I build websites, web apps and internal platforms for companies in every industry, with one goal that never changes: making complex things simple. I care about every detail, including the ones nobody sees: clean code, solid foundations and interfaces that really work.",
  mark: "making complex things simple",

  /** Hero line "Building ___": the words cycle in this order. */
  roles: [
    "intuitive interfaces",
    "web apps",
    "e-commerce",
    "design systems",
    "internal platforms",
  ],

  /**
   * Toolbox, grouped from the foundations outwards:
   * language → ecosystems (each with its own state/UI libraries) → components → styling
   * → behaviour → build → workflow → design.
   */
  skills: [
    { group: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
    {
      group: "Vue ecosystem",
      items: ["Vue", "Nuxt", "Pinia", "Vuex", "Vuetify"],
    },
    { group: "React ecosystem", items: ["React", "Next.js", "Gatsby"] },
    { group: "Static sites & CMS", items: ["Astro", "Sanity", "Strapi"] },
    { group: "Components & interfaces", items: ["Lit", "Storybook", "Swiper"] },
    {
      group: "Styling",
      items: ["TailwindCSS", "Sass", "Less", "Styled Components", "styled-jsx"],
    },
    {
      group: "Animation & DOM",
      items: ["GSAP", "ScrollTrigger", "Lenis", "Web Animations API", "Barba.js", "Stimulus", "jQuery"],
    },
    {
      group: "Build & tools",
      items: ["Vite", "Webpack", "Gulp", "Grunt", "npm", "yarn", "pnpm"],
    },
    { group: "Versioning & environments", items: ["Git", "SVN", "Docker"] },
    { group: "Design", items: ["Figma", "Zeplin", "Photoshop", "Illustrator"] },
  ],
  /** Soft skills, as a short paragraph rather than a list. */
  softSkills:
    "I'm naturally collaborative, with a real inclination for listening, sharing and teamwork. Precise and organized, in code as much as in process, I bring a positive, steady energy even when problems get tricky. Curious about new technologies and quick to adapt to change, I approach every project with seriousness and determination.",
  /** AI paragraph in the Skills section (the full workflow lives in src/data/ai.ts). */
  ai: "I use AI assistants like Claude Code and Codex every day, from help with writing code to agents and automated workflows, to speed up development: first drafts of components, refactoring, exploring new APIs and documentation — without ever losing control of what ships to production.",
  languages: "Italian (native), English (fluent), German (basic)",

  /**
   * Italian version (/it/) of the texts above. Anything not listed here
   * (name, links, skill names…) is shared between the two languages.
   */
  it: {
    title: "Roberto Losa — Frontend Engineer a Lecco",
    description:
      "Roberto Losa, frontend engineer a Lecco: sviluppo per il web dal 2013. Siti, web app e piattaforme interne con Vue, React e TypeScript, oggi in iliad.",
    cv: "/files/Roberto-Losa-CV-italiano-dark.pdf",
    intro:
      "Faccio il frontend developer dal 2013. Realizzo siti, web app e piattaforme interne per aziende di ogni settore, con un obiettivo che non cambia: rendere semplice ciò che è complesso. Curo ogni dettaglio, anche quelli che non si vedono: codice pulito, basi solide e interfacce che funzionano davvero.",
    mark: "rendere semplice ciò che è complesso",
    roles: [
      "interfacce intuitive",
      "web app",
      "e-commerce",
      "design system",
      "piattaforme interne",
    ],
    /** Italian labels for the skill groups, keyed by the English label. */
    skillGroups: {
      "Languages": "Linguaggi",
      "Vue ecosystem": "Ecosistema Vue",
      "React ecosystem": "Ecosistema React",
      "Static sites & CMS": "Siti statici e CMS",
      "Components & interfaces": "Componenti e interfacce",
      "Styling": "Styling",
      "Animation & DOM": "Animazioni e DOM",
      "Build & tools": "Build e strumenti",
      "Versioning & environments": "Versionamento e ambienti",
      "Design": "Design",
    } as Record<string, string>,
    softSkills:
      "Sono collaborativo per natura, con una spiccata attitudine all'ascolto, alla condivisione e al lavoro di squadra. Preciso e organizzato, nel codice come nei processi, porto un'energia positiva e costante anche quando i problemi si fanno complicati. Curioso verso le nuove tecnologie e veloce ad adattarmi ai cambiamenti, affronto ogni progetto con serietà e determinazione.",
    ai: "Uso ogni giorno assistenti AI come Claude Code e Codex, dal supporto nella scrittura del codice fino ad agenti e flussi di lavoro automatizzati, per accelerare lo sviluppo: prime bozze di componenti, refactoring, studio di nuove API e documentazione, senza mai perdere il controllo su ciò che va in produzione.",
    languages: "italiano (madrelingua), inglese (fluente), tedesco (base)",
  },
} as const;

export type Site = typeof site;
