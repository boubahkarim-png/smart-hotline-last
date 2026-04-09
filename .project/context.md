# Context: smart-hotline-nextjs
# Smart Hotline Agency Website
# Last Updated: 2026-04-09

## Project Purpose
Official multilingual website for Smart Hotline Agency - AI-powered call center services.
Serves as primary marketing and conversion platform for Canadian, US, and European markets.

## Critical Constraints
1. **Static Export Only** - Must use `output: 'export'` for GitHub Pages deployment
2. **Multilingual** - French (primary) and English versions required
3. **SEO-Optimized** - Core Web Vitals, sitemap, proper meta tags
4. **Mobile-First** - Responsive design essential for conversion

## Tech Stack
- **Framework**: Next.js 14.2.x (App Router)
- **Styling**: Tailwind CSS v4.2.x (CSS-first, no config file)
- **TypeScript**: 5.x
- **Deployment**: GitHub Pages (static export)
- **CI/CD**: GitHub Actions auto-deploy

## Repository
- **GitHub**: https://github.com/boubahkarim-png/smart-hotline-last
- **Live Site**: https://boubahkarim-png.github.io/smart-hotline-last/fr/

## Key Files
- `next.config.js` - Must have basePath and assetPrefix for GitHub Pages
- `app/` - Next.js 14 App Router structure
- `components/` - Reusable UI components
- `content/` - Multilingual content files
- `public/` - Static assets

## Build & Deploy Process
```bash
cd /root/projects/smart-hotline-nextjs
rm -rf out && npm run build
ls out/_next/static/css/*.css  # Must exist >30KB
touch out/.nojekyll
git add -A && git commit -m "deploy"
git push --force origin main
gh workflow run "Deploy to GitHub Pages" --repo boubahkarim-png/smart-hotline-last
```

## Known Issues & Fixes
1. **CSS Not Loading**: Check basePath in next.config.js
2. **Tailwind v4**: Use `@import "tailwindcss"` in globals.css (NOT @tailwind directives)
3. **Special Characters**: Use actual UTF-8, never Unicode escapes (\uXXXX)
4. **JSX Apostrophes**: Use `&apos;` or `{"'"}` for apostrophes in JSX

## Subagent
- **Type**: web-build
- **Mention**: @web-build

## Related Skills
- frontend-design
- nextjs-developer
- seo-audit
- performance

## Pricing Display Rules (Business Critical)
- FR primary, EN secondary
- Pricing ONLY on /fr/tarifs page
- Service pages link to tarifs (no inline prices)
- Geo-aware: Show CAD/USD for Canada/US, EUR for Europe, CHF for Switzerland

## Never Modify
- basePath in next.config.js (breaks GitHub Pages)
- .nojekyll file (required for GitHub Pages)
- CNAME file (custom domain configuration)
