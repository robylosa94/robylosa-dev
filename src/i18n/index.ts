import { site } from '../data/site';

/** Site languages. English lives at "/", Italian at "/it/". */
export const languages = { en: 'English', it: 'Italiano' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const homePath: Record<Lang, string> = { en: '/', it: '/it/' };
export const playgroundPath: Record<Lang, string> = { en: '/playground/', it: '/it/playground/' };

/** The same page in another language: "/playground/" ⇄ "/it/playground/", "/" ⇄ "/it/". */
export function pathIn(pathname: string, to: Lang): string {
  const bare = pathname.replace(/^\/it(?=\/|$)/, '') || '/';
  return to === 'it' ? `/it${bare === '/' ? '/' : bare}` : bare;
}

/** Pick the language from a URL path ("/it/…" → it). */
export function langFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/it') ? 'it' : 'en';
}

/** Interface strings (labels, buttons, headings). */
export const ui = {
  en: {
    navWork: 'Work',
    navContact: 'Contact',
    navLabel: 'Sections',
    langLabel: 'Language',
    themeToggle: 'Toggle light or dark theme',
    since: 'since',
    building: 'I build',
    downloadCv: 'Download CV ↓',
    work: 'Work',
    now: 'now',
    current: 'ongoing',
    skills: 'Skills',
    aiWorkflow: 'Artificial intelligence',
    softSkills: 'Soft skills',
    spokenLanguages: 'Spoken languages',
    sayBefore: 'Say ',
    sayAccent: 'ciao',
    sayAfter: '.',
    /** A short accent word can use the wide cut; longer ones stay condensed so they fit. */
    sayWide: true,
    madeIn: 'Made in',
    pgLead: 'A collection of interface experiments — animations, sliders, menus and scroll effects I built to study new techniques.',
    pgCount: 'demos',
    pgOpen: 'Open demo',
    pgBack: 'Back to the homepage',
  },
  it: {
    navWork: 'Esperienza',
    navContact: 'Contatti',
    navLabel: 'Sezioni',
    langLabel: 'Lingua',
    themeToggle: 'Passa al tema chiaro o scuro',
    since: 'dal',
    building: 'Sviluppo',
    downloadCv: 'Scarica CV ↓',
    work: 'Esperienza',
    now: 'oggi',
    current: 'in corso',
    skills: 'Competenze',
    aiWorkflow: 'Intelligenza artificiale',
    softSkills: 'Competenze trasversali',
    spokenLanguages: 'Lingue',
    sayBefore: 'Ci ',
    sayAccent: 'sentiamo',
    sayAfter: '?',
    sayWide: false,
    madeIn: 'Made in',
    pgLead: "Una raccolta di esperimenti di interfaccia: animazioni, slider, menu ed effetti allo scroll che ho realizzato per studiare nuove tecniche.",
    pgCount: 'demo',
    pgOpen: 'Apri la demo',
    pgBack: 'Torna alla home',
  },
} as const;

/** Site texts (from src/data/site.ts) in the requested language. */
export function content(lang: Lang) {
  if (lang === 'it') {
    const it = site.it;
    return {
      title: it.title,
      description: it.description,
      cv: it.cv,
      intro: it.intro,
      mark: it.mark,
      roles: it.roles,
      country: 'Italia',
      skills: site.skills.map((g) => ({ group: it.skillGroups[g.group] ?? g.group, items: g.items })),
      ai: it.ai,
      softSkills: it.softSkills,
      languages: it.languages,
    };
  }
  return {
    title: site.title,
    description: site.description,
    cv: site.cv,
    intro: site.intro,
    mark: site.mark,
    roles: site.roles,
    country: site.location.country,
    skills: site.skills.map((g) => ({ group: g.group, items: g.items })),
    ai: site.ai,
    softSkills: site.softSkills,
    languages: site.languages,
  };
}

/** Tiny inline Markdown for translated descriptions: escapes HTML, turns **x** into <strong>x</strong>. */
export function inlineMarkdown(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
