#!/bin/sh
# Renders og/og.html to the social preview images (1200×630 PNG) in public/og/,
# one per page and language, with the site's real fonts (run `npm install` first).
# Override the browser with CHROME=/path/to/chrome ./og/build.sh
set -e
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="../public/og"
mkdir -p "$OUT"
for job in home:en home:it playground:en playground:it; do
  page="${job%%:*}"; lang="${job#*:}"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --allow-file-access-from-files --virtual-time-budget=4000 --window-size=1200,630 \
    --screenshot="$PWD/$OUT/$page-$lang.png" "file://$PWD/og.html?page=$page&lang=$lang" 2>/dev/null
  echo "→ $OUT/$page-$lang.png"
done
