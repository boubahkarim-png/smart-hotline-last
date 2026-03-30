# CONTEXT: smart-hotline-nextjs (Website)
# Loaded when current_project = smart-hotline-nextjs

## PROJECT
- Path: /root/projects/smart-hotline-nextjs
- Stack: Next.js 14.2 + Tailwind v4 + TypeScript
- Live: https://boubahkarim-png.github.io/smart-hotline-last/fr/

## TECH STACK
- Next.js 14.2 (static export for GitHub Pages)
- Tailwind CSS v4 (CSS-first, no config file)
- TypeScript 5.x
- Node.js v20.20.0

## TAILWIND V4 NOTES
- globals.css: `@import "tailwindcss"` (NOT @tailwind directives)
- postcss.config.mjs: `"@tailwindcss/postcss": {}`
- No tailwind.config.ts needed (auto-scans)
- Dynamic classes? → add to CSS manually

## DEPLOY PROCESS
```bash
cd /root/projects/smart-hotline-nextjs
rm -rf out && npm run build
ls out/_next/static/css/*.css  # Must exist >30KB
touch out/.nojekyll
git add -A && git commit -m "description"
git push --force origin main
```

## COMMON ISSUES
- CSS not loading: check basePath in next.config.js
- Build fails: check for JSX special characters (use &apos; for apostrophes)
- Python → TSX: NEVER use \u00e0 escapes, use actual UTF-8

## RELATED FILES
- STATE.md — Current status
- .session/PLAN.md — Current task
