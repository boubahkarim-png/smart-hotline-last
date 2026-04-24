<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Smart Hotline — `last/` Variant (ACTIVE)

## Stack
- Next.js 14.2.35, React 18, App Router
- MDX support (`@next/mdx`), Tailwind 4.2.2
- `mysql2` for SuiteCRM lead capture API
- `fluent-ffmpeg` + `videoshow` for video generation
- `gray-matter` + `remark` + `remark-html` for blog content pipeline

## SEO Architecture
- JSON-LD schemas: LocalBusiness, FAQPage (5 Q&A), HowTo (4 steps), BreadcrumbList
- GA4 tracking: `G-RTKKH1R9FB`
- hreflang tags for FR/EN locales
- robots.txt (allows all, references sitemap)
- sitemap.xml (dynamic + static versions)
- llms.txt (AI search optimized)
- Google Search Console verified

## Tawk.to Live Chat
- Property ID: `69c14d2a91de1e1c374c9f29`
- Widget ID: `1jkdharj3`
- Embedded in `app/layout.tsx` via inline script

## Lead Capture
- Forms POST to `https://app.smart-hotline.com/api/leads/contact.php`
- SuiteCRM DB: `suitecrm.leads` + `suitecrm.leads_audit`
- Email fallback: `direction@smart-hotline.com`
- CORS: `https://www.smart-hotline.com`

## Content
- 44 blog posts: 22 FR + 22 EN
- Quebec-specific vocabulary (char, magasiner, etc.)
- All service pages have FAQ sections for SEO

## Build & Deploy
- Build: `npm run build:production` (sets NEXT_PUBLIC_SITE_URL)
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`)
- Output: static export (84 pages)
- Domain: www.smart-hotline.com

## Key Files
- `app/layout.tsx` — Root layout, SEO schemas, Tawk.to, GA4
- `.env.local` — `NEXT_PUBLIC_TAWK_ID` and other env vars
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `STATE.md` — READ BEFORE ANY TASK

## Rollback
- Git revert: `git revert HEAD` then push — GitHub Actions auto-deploys
- Static export: previous `out/` directory can be re-uploaded manually
- SuiteCRM endpoint: not version-controlled; changes need manual revert on ViciBox server
- For ViciBox server changes: follow vicibox-2/main rollback procedures

## Pending
- SEO performance tracking via GA4
- Blog content expansion (currently 44 posts)
- Potential late2/ feature merges

## Pre-Task Rule
Read `STATE.md` before starting any work in this variant.
