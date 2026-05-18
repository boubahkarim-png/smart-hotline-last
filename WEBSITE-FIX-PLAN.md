# Website SEO & UX Improvement Plan — Smart Hotline

**Repo:** `smart-hotline-late2`
**Source:** `/root/projects/01-smart-hotline/late2/`
**Framework:** Next.js 14.2 (static export)
**Domain:** www.smart-hotline.com → GitHub Pages
**Basepath:** `/smart-hotline-late2`

---

## Architecture Overview

The site is a bilingual (FR/EN) Next.js App Router project:

- **Root layout** (`app/layout.tsx`) — `<html lang="fr">` hardcoded (BUG!), contains JSON-LD schema
- **EN layout** (`app/en/layout.tsx`) — OG tags, alternates/canonical (pointing to wrong GitHub Pages URL)
- **FR layout** (`app/fr/layout.tsx`) — Same issue
- **Each page** has its own metadata exported (overrides layouts)
- **SEO lib** (`lib/seo.ts`) — `generateMetadata()` function + JSON-LD constants
- **Sitemap** (`app/sitemap.ts`) — correct structure, wrong base URL (GitHub Pages)
- **Robots** (`app/robots.ts`) — wrong base URL
- **Middleware** (`middleware.ts`) — language detection/redirect, works correctly
- **Geo system** — detects visitor country, shows phone/WhatsApp based on location, adjusts prices (CAD/USD/EUR/CHF)
- **Components** — Header, Footer, Popup, TawkToChat, GeoAwareCTA, GeoHeroSubtitle

---

## CRITICAL BUGS (Fix FIRST)

### BUG 1: `app/layout.tsx` hardcodes `<html lang="fr">`

This propagates to ALL pages including EN. Need to make `lang` dynamic.

**Root cause:** Root layout is a server component. It can't access the route params by default in Next.js App Router. The `lang` flows through `app/[lang]/layout.tsx` but the root `app/layout.tsx` wraps everything.

**Fix approach:** Pass lang via the children layout using a metadata approach or detect from the segment path.

### BUG 2: Canonical URLs point to GitHub Pages not the custom domain

`lib/seo.ts` line: `const BASE_URL = 'https://boubahkarim-png.github.io/smart-hotline-late2'`
Should be: `https://www.smart-hotline.com`

This affects:
- `alternates.canonical` in FR layout, EN layout, and all pages
- `seo.ts` canonical paths
- `sitemap.ts` base URL
- `robots.ts` sitemap URL

### BUG 3: No hreflang in HTML `<head>` (only in sitemap)

The `lib/seo.ts` `generateMetadata()` already exports hreflang alternates via `alternates.languages`, but NOT all pages import/use it.

---

## Files to Modify (Complete List)

```
late2/app/layout.tsx              — Root layout (fix lang, schemas)
late2/app/en/layout.tsx           — EN layout (fix canonical URL, add dynamic meta)
late2/app/fr/layout.tsx           — FR layout (fix canonical URL, add dynamic meta)
late2/lib/seo.ts                  — Fix BASE_URL, improve descriptions/keywords
late2/lib/i18n.ts                 — Add SEO translations
late2/app/sitemap.ts              — Fix BASE_URL
late2/app/robots.ts               — Fix BASE_URL
late2/app/en/page.tsx             — EN home (unique meta desc, optimize H1)
late2/app/fr/page.tsx             — FR home (unique meta desc, optimize H1)
late2/app/en/pricing/page.tsx     — Fix H1 from "20 to 40%" to proper heading
late2/app/fr/tarifs/page.tsx      — FR pricing fix
late2/app/en/ai-agents/page.tsx   — Add unique meta
late2/app/fr/agents-ia/page.tsx   — Add unique meta
late2/app/en/inbound/page.tsx     — Add unique meta
late2/app/fr/reception/page.tsx   — Add unique meta
late2/app/en/outbound/page.tsx    — Add unique meta
late2/app/fr/emission/page.tsx    — Add unique meta
late2/app/en/support/page.tsx     — Add unique meta
late2/app/fr/support/page.tsx     — Add unique meta
late2/app/en/crm/page.tsx         — Add unique meta
late2/app/fr/crm/page.tsx         — Add unique meta
late2/app/en/about/page.tsx       — Add unique meta
late2/app/fr/a-propos/page.tsx    — Add unique meta
late2/app/en/contact/page.tsx     — Add unique meta
late2/app/fr/contact/page.tsx     — Add unique meta
late2/app/en/legal/page.tsx       — Add unique meta
late2/app/fr/mentions-legales/page.tsx — Add unique meta
late2/app/en/privacy/page.tsx     — Add unique meta
late2/app/fr/confidentialite/page.tsx  — Add unique meta
late2/app/en/terms/page.tsx       — Add unique meta
late2/app/fr/cgv/page.tsx         — Add unique meta
late2/app/en/sectors/page.tsx     — Add unique meta
late2/app/fr/secteurs/page.tsx    — Add unique meta
late2/app/en/services/page.tsx    — Add unique meta
late2/app/fr/services/page.tsx    — Add unique meta
late2/app/en/blog/page.tsx        — Add Article schema, unique meta
late2/app/fr/blog/page.tsx        — Add Article schema, unique meta
late2/components/FAQSchema.tsx    — Add FAQPage schema
late2/app/globals.css             — Minor fixes if needed
```

---

## Execution Plan

### Phase 1: Fix CRITICAL bugs (5 tasks)
### Phase 2: Fix HIGH priority issues (8 tasks)
### Phase 3: Fix MEDIUM priority issues (10 tasks)
### Phase 4: Build + Deploy + Validate
### Phase 5: Independent 3-agent validation