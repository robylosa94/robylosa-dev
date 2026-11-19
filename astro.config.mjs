// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robylosa.dev',
  // English at "/", Italian at "/it/".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', it: 'it' } },
    }),
  ],
});
