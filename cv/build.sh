#!/bin/sh
# Renders cv/cv.html to PDF with headless Chrome — Italian + English, light + dark —
# straight into public/files/ so the site serves them.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="../public/files"
mkdir -p "$OUT"
for job in \
  "it:light:Roberto-Losa-CV-italiano.pdf" \
  "en:light:Roberto-Losa-CV-english.pdf" \
  "it:dark:Roberto-Losa-CV-italiano-dark.pdf" \
  "en:dark:Roberto-Losa-CV-english-dark.pdf"; do
  lang="${job%%:*}"; rest="${job#*:}"; theme="${rest%%:*}"; file="${rest#*:}"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --allow-file-access-from-files --virtual-time-budget=4000 \
    --print-to-pdf="$OUT/$file" "file://$PWD/cv.html?lang=$lang&theme=$theme" 2>/dev/null
  echo "→ $OUT/$file"
done
