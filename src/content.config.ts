import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file per job in src/content/experience/.
 * Frontmatter holds the facts; the Markdown body is the description.
 */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: ({ image }) => z.object({
    company: z.string(),
    /** Path to the company logo, relative to the .md file (e.g. ../../assets/logos/iliad.svg). */
    logo: image().optional(),
    role: z.string(),
    start: z.coerce.date(),
    /** Leave empty for the current job. */
    end: z.coerce.date().optional(),
    location: z.string().optional(),
    url: z.url().optional(),
    stack: z.array(z.string()).default([]),
    /** Italian version for /it/: description (Markdown **bold** allowed) and location. */
    it: z
      .object({
        description: z.string(),
        location: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { experience };
