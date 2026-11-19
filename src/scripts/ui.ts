/** Small client-side helpers shared by components. */

/** The theme on screen: the one picked with the toggle, else the OS setting. */
function isDark(): boolean {
  const theme = document.documentElement.dataset.theme;
  return theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * CV links (marked data-cv) download the PDF matching the theme on screen:
 * "…-dark.pdf" in dark mode, "….pdf" in light mode.
 */
export function syncCvLinks() {
  const dark = isDark();
  document.querySelectorAll<HTMLAnchorElement>('a[data-cv]').forEach((a) => {
    a.href = a.getAttribute('href')!.replace(/(-dark)?\.pdf$/, dark ? '-dark.pdf' : '.pdf');
  });
}

export function toggleTheme() {
  const root = document.documentElement;
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try {
    localStorage.setItem('theme', root.dataset.theme);
  } catch {
    /* storage unavailable: theme just won't persist */
  }
  syncCvLinks();
}
