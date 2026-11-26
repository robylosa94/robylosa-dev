// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { demos } from './src/data/playground.ts';

const site = 'https://www.robylosa.dev';

// https://astro.build/config
export default defineConfig({
  site,
  // Every page is a folder ("/it/", "/playground/"): one URL per page, matching vercel.json.
  trailingSlash: 'always',
  // English at "/", Italian at "/it/".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // The demos are static files in public/playground/, so the sitemap doesn't see them on its own.
      customPages: demos.map((d) => `${site}/playground/${d.slug}/`),
      i18n: { defaultLocale: 'en', locales: { en: 'en', it: 'it' } },
    }),
  ],
});
