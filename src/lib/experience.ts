import { getCollection, type CollectionEntry } from 'astro:content';

export type Job = CollectionEntry<'experience'>;

/** Jobs, most recent first. */
export async function getJobs(): Promise<Job[]> {
  const jobs = await getCollection('experience');
  return jobs.sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
}

/** "2024 — now" (the word for "now" comes from the caller's language). */
export function years(job: Job, now = 'now'): string {
  const { start, end } = job.data;
  return `${start.getUTCFullYear()} — ${end ? end.getUTCFullYear() : now}`;
}

/** First part of "Milan, Italy" — or of the Italian location on /it/. */
export function city(job: Job, lang: 'en' | 'it' = 'en'): string | undefined {
  const loc = lang === 'it' ? (job.data.it?.location ?? job.data.location) : job.data.location;
  return loc?.split(',')[0];
}
