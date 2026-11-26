# robylosa.dev

Personal site of Roberto Losa — built with [Astro](https://astro.build), static output, almost no JS.

## Requirements

Node **>= 22.23** (see `.nvmrc`): run `nvm use` first.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Dev server at http://localhost:4321       |
| `npm run build`   | Build the static site into `dist/`        |
| `npm run preview` | Serve the built site locally              |
| `npm run check`   | Type-check `.astro` and `.ts` files       |

## Where things live

Home: intro, work, skills, how I work with AI, contact. Plus the playground at `/playground/`.

- `src/content/experience/*.md` — one file per job (frontmatter = facts, body = description). Add a job by adding a file.
- `src/data/site.ts` — profile, links, email, CV path, intro text, skills, education.
- `src/data/ai.ts` — the "How I work with AI" section and the case study, in English and Italian.
- `src/components/` — Header, Hero, Work, Skills, AiWorkflow, Contact (with footer), Playground (the demo index).
- `src/styles/global.css` — colour tokens (light/dark), fonts (Archivo variable + IBM Plex Mono), shared styles.
- `og/` — social preview images (home and playground, English + Italian) in the site's style. Edit `og/og.html`, then run `./og/build.sh` to regenerate the PNGs in `public/og/` (needs Google Chrome and `npm install`, for the fonts). Page titles and meta descriptions live in `src/data/site.ts` (home) and `src/i18n/index.ts` (`pgTitle`, `pgLead`).
- `src/data/playground.ts` — the playground demos (slug, title, libraries used); thumbnails in `src/assets/playground/`.
- `public/playground/<slug>/` — the demos themselves: plain HTML/CSS/JS pages served as-is, with a shared top bar (`public/playground/topbar.css`).
- `cv/` — the CV (Italian + English, light + dark) in the site's style. Edit `cv/cv.html`, then run `./cv/build.sh` to regenerate the four PDFs in `public/files/` (needs Google Chrome).

## Languages

English lives at `/`, Italian at `/it/` (switch in the header).

- Interface labels: `src/i18n/index.ts` (`ui`).
- Italian site texts (intro, roles, skill labels, soft skills, AI…): the `it` block at the end of `src/data/site.ts`.
- Italian job descriptions: the `it:` field in each `src/content/experience/*.md`.

## Deploy

Hosted on Vercel, deployed on every push to `main`. `vercel.json` redirects the old `playground.robylosa.dev` (and its demo URLs) to `/playground/`.

One URL per page, so Google doesn't see duplicates:

- `vercel.json` redirects `robylosa.dev` to `www.robylosa.dev` and adds the trailing slash (`/it` → `/it/`); Astro uses `trailingSlash: 'always'` to match.
- Every page has a `<link rel="canonical">` (from `src/layouts/Base.astro`, or written by hand in each `public/playground/<slug>/index.html`: add one to any new demo).
- The light CV PDFs send a `Link: rel="canonical"` header pointing to the dark ones the site links to.
