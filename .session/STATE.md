# STATE: smart-hotline-nextjs
_Last updated: 2026-03-24_

## Current State
ACTIVE PROJECT. Next.js 14.2 website for Smart Hotline Agency deployed on GitHub Pages.

**LIVE SITE:** https://boubahkarim-png.github.io/smart-hotline-last/fr/

**TECH STACK:**
- Next.js 14.2 + TypeScript + Tailwind v4 (CSS-first)
- Static export to GitHub Pages
- Geo-aware content (ipapi.co)

**FEATURES COMPLETE:**
- French/English pages with full navigation
- Geo-aware CTA (phone for CA/US, WhatsApp for others)
- Tawk.to chat integration
- Pricing page with currency detection
- Service pages: reception, emission, agents-ia, support, crm
- SEO metadata optimized
- Video infrastructure with GeoAwareVideo component
- Reusable UI components: Section, SectionTitle, FeaturesGrid, CTASection
- Harmonized backgrounds (light/dark/muted alternation)

**CURRENT WORK:**
- Website harmonization complete
- EN pages need full translation (most are placeholders)

## Decisions Made
- 2026-03-22: Project created from smart-hotline-web
- 2026-03-23: Tailwind v4 CSS-first approach (no config file)
- 2026-03-24: Tawk.to chat added to layouts
- 2026-03-24: Video prompts created in /public/videos/samples/
- 2026-03-24: Created reusable UI components for consistent sections
- 2026-03-24: Standardized background pattern: light → dark → muted

## Current Blockers
- Video generation requires manual work (browser-based AI tools)
- EN pages need full content translation

## Next Steps
1. Complete EN page translations
2. Generate real promotional videos
3. Add more testimonials across all pages
4. Performance optimization

## Session History
- 2026-03-24: Video sample prompts created and pushed to GitHub
- 2026-03-24: .session/STATE.md created (was missing)
- 2026-03-24: Created UI components, expanded FR/EN pages, harmonized structure
