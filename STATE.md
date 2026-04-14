# Smart Hotline Next.js - Project State

## Goal
Improve SEO fast for `www.smart-hotline.com` after site replacement caused zero visits. User reported 0 visits after replacing old Google Site with new Next.js website.

## Instructions
- Full SEO diagnostic of website after site replacement
- Fix any SEO issues found
- Enable Google Analytics 4 tracking
- Improve SEO fast through comprehensive analysis

## Discoveries

### Initial Problem Diagnosis
1. **DNS Configuration**: `www.smart-hotline.com` points to GitHub Pages (`boubahkarim-png.github.io`), serving the Next.js static export
2. **Old Site Location**: `app.smart-hotline.com` points to server IP (`194.163.187.192`) showing ViciDial login
3. **Site deployed**: April 9, 2026 (5 days before diagnostic)

### Critical Bugs Found & Fixed

#### Session 1 (Previous)
1. **Sitemap `undefined` hreflang bug**: Two blog posts missing translation links caused `undefined` URLs in sitemap.xml - Fixed in `app/sitemap.ts`
2. **Google Analytics not active**: Fixed in `app/layout.tsx` and created `.env.local` with GA4 ID `G-RTKKH1R9FB`

#### Session 2 (Current - April 14, 2026)
1. **Canonical URL Inconsistencies (FIXED)**:
   - All 6 EN layouts pointed to hardcoded GitHub Pages URLs
   - Fixed: Imported `siteUrl` from `lib/siteConfig.ts`
   - Files: `app/en/*/layout.tsx`

2. **JSON-LD Base URL Wrong (FIXED)**:
   - `components/HowToSchema.tsx` used hardcoded GitHub Pages URL
   - Fixed: Imported `siteUrl` instead

3. **Duplicate SEO Files (FIXED)**:
   - Deleted duplicate `robots.txt` and `sitemap.xml` from root

4. **GitHub Actions Missing Env Var (FIXED)**:
   - Added `NEXT_PUBLIC_SITE_URL: https://www.smart-hotline.com` to workflow
   - Fixed YAML indentation issues

5. **Package.json Hardcoded URL (FIXED)**:
   - `build:netlify` script had `NEXT_PUBLIC_SITE_URL='https://smart-hotline.com'` (no www)
   - Fixed: Removed hardcoded value, now uses env var from GitHub Actions

## Accomplished

### Phase 1 SEO Fixes - COMPLETED
1. Created rollback branch `seo-fixes-phase1`
2. Fixed canonical URLs in 6 EN layout files
3. Fixed JSON-LD base URL in `components/HowToSchema.tsx`
4. Deleted duplicate `robots.txt` and `sitemap.xml` from root
5. Verified TypeScript type check - no errors
6. Verified build test - successful
7. Committed and pushed changes

### Phase 2 Env Configuration - COMPLETED
1. Added `NEXT_PUBLIC_SITE_URL` to GitHub Actions workflow
2. Fixed YAML indentation in deploy.yml
3. Removed hardcoded SITE_URL from package.json build script
4. Verified canonical URLs now show `https://www.smart-hotline.com` correctly

## Verification Results
- ✅ Canonical URLs: `https://www.smart-hotline.com/en/inbound/`
- ✅ Canonical URLs: `https://www.smart-hotline.com/fr/reception/`
- ✅ Canonical URLs: `https://www.smart-hotline.com/en/pricing/`
- ✅ robots.txt: Shows correct sitemap URL
- ✅ sitemap.xml: No more undefined URLs
- ✅ GA4: Tracking enabled with G-RTKKH1R9FB

## Remaining Tasks (Next Week)
- **Phase 3 Performance**:
  - Enable image optimization in `next.config.js`
  - Add lazy loading to images
  - Add preload hints for critical assets

- **Phase 4 Content Enhancement**:
  - Add FAQ schema to 6-8 blog posts
  - Add testimonials component
  - Create Montreal/Quebec pillar page
  - Add pricing page/snippets

## Active Working Context
- **Branch**: main (merged seo-fixes-phase1)
- **Commits**:
  - `9a31038`: fix(seo): canonical URLs and JSON-LD base URL for production domain
  - `08dcaf1`: fix(seo): add NEXT_PUBLIC_SITE_URL to GitHub Actions build
  - `18f4366`: fix(ci): correct YAML indentation for GitHub Actions workflow
  - `cf17675`: fix(seo): remove hardcoded SITE_URL from build script, use env var
- **Rollback**: Can revert via `git reset --hard 985775e`

## Key Files Modified
- `/root/projects/smart-hotline-last/app/en/*/layout.tsx` — 6 EN layout files (canonical URLs)
- `/root/projects/smart-hotline-last/components/HowToSchema.tsx` — JSON-LD schema
- `/root/projects/smart-hotline-last/.github/workflows/deploy.yml` — GitHub Actions workflow
- `/root/projects/smart-hotline-last/package.json` — Build script
- `/root/projects/smart-hotline-last/.env.local` — Local env vars (GA4)

## Delegated Agent Sessions (Completed)
- `bg_abfb73c0`: Analyze on-page SEO — completed
- `bg_061ca483`: Check technical SEO — completed
- `bg_6568fa51`: Research competitor SEO — completed
- `bg_81f7c34f`: Analyze content structure — completed
- `bg_70d488fa`: Find SEO improvement patterns — FAILED (timeout)

**Last updated**: April 14, 2026 14:00 UTC
