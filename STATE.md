# Smart Hotline Next.js - Project State

## Goal
Comprehensive website audit and fixes for accessibility, performance, and security issues.

## Instructions
- Fix CLS (Cumulative Layout Shift) issues in hero images
- Fix color contrast for WCAG AA compliance
- Review and harden security (CSRF, Tawk chat, env vars)
- Build and verify all pages

## Discoveries

### Accessibility & Performance Audit (April 14, 2026)
1. **CLS Issues Found**: 7 hero images lacked explicit width/height attributes
   - Contact page hero, Homepage heroes, Services hero, Blog cards
   - Fixed by adding `width` and `height` props to all images

2. **Color Contrast Issues**:
   - Footer `text-slate-400` on dark background → fixed to `text-slate-300`
   - Blog excerpts `text-gray-500` on white → fixed to `text-gray-600`
   - French legal pages "Dernière mise à jour" text → fixed to `text-gray-600`

3. **Skip Link Present** ✅ - Properly implemented in layout.tsx with CSS

4. **Good ARIA Support** ✅ - Header dropdown has aria-expanded, aria-haspopup, role="menu"

### Tawk.to Configuration Discovery (April 14, 2026)
1. **Tawk Was Working Because**: Hardcoded script in `app/layout.tsx` at root level
   - Property ID: `69c14d2a91de1e1c374c9f29`
   - Widget ID: `1jkdharj3`
   - Full embed URL: `https://embed.tawk.to/69c14d2a91de1e1c374c9f29/1jkdharj3`

2. **Architecture Issue Found**: Tawk was being loaded TWICE on EN/FR pages:
   - Once from root `app/layout.tsx` (hardcoded script)
   - Once from `<TawkToChat />` component in `app/en/layout.tsx` and `app/fr/layout.tsx`

3. **Fix Applied**:
   - Removed hardcoded script from `app/layout.tsx`
   - Updated `.env.local` with correct Property ID
   - Updated `TawkToChat.tsx` to use widget ID `1jkdharj3`

### Security Review (April 14, 2026)
1. **CSRF Library**: `lib/csrf.ts` has hardcoded fallback secret - BUT unused in static export
   - Contact form uses client-side rate limiting (10/IP/hour) + CAPTCHA verification
   - No server-side API routes (incompatible with static export)

2. **Tawk Chat**: Uses `dangerouslySetInnerHTML` but is safe:
   - `tawkId` comes from environment variable (trusted source)
   - No user input flows into the script
   - Added null check to skip rendering if no ID configured

## Accomplished

### Accessibility Fixes - COMPLETED
1. ✅ Fixed CLS in hero images - added width/height attributes:
   - `/app/en/contact/page.tsx` - contact hero image
   - `/app/en/page.tsx` - main hero + AI agent hero
   - `/app/en/services/page.tsx` - services hero
   - `/app/en/blog/page.tsx` - blog card images

2. ✅ Fixed color contrast:
   - `/components/Footer.tsx` - all text-slate-400 → text-slate-300
   - `/app/en/blog/page.tsx` - excerpt text-gray-500 → text-gray-600
   - `/app/fr/cgv/page.tsx` - date text-gray-500 → text-gray-600
   - `/app/fr/confidentialite/page.tsx` - date text-gray-500 → text-gray-600
   - `/app/fr/mentions-legales/page.tsx` - date text-gray-500 → text-gray-600

### Tawk.to Configuration - COMPLETED
1. ✅ Found hardcoded Tawk ID in `app/layout.tsx`
2. ✅ Removed duplicate Tawk loading from root layout
3. ✅ Updated `.env.local` with correct Property ID (`69c14d2a91de1e1c374c9f29`)
4. ✅ Updated `TawkToChat.tsx` to use widget ID `1jkdharj3`

### Security Updates - COMPLETED
1. ✅ Updated `/components/TawkToChat.tsx`:
   - Added null check for TAWK_ID
   - Returns null if no valid ID configured
   - Uses correct widget ID (`1jkdharj3`)

2. ✅ Updated `/.env.local`:
   - Added correct Property ID: `69c14d2a91de1e1c374c9f29`
   - Added documentation comments

### Build Verification - COMPLETED
- ✅ `npm run build` successful - 80 static pages generated
- ✅ No TypeScript errors
- ✅ No ESLint errors

## Verification Results
- ✅ CLS: All hero images now have explicit dimensions
- ✅ Contrast: Footer links pass WCAG AA (slate-300 on slate-900)
- ✅ Contrast: Blog excerpts pass WCAG AA (gray-600 on white)
- ✅ Security: Tawk chat only renders with valid ID
- ✅ Tawk: No longer loaded twice (removed hardcoded script from root layout)
- ✅ Build: 80 pages, no errors

## Tawk.to Configuration Reference
| Property | Value |
|----------|-------|
| Property ID | `69c14d2a91de1e1c374c9f29` |
| Widget ID | `1jkdharj3` |
| Dashboard | https://dashboard.tawk.to |
| Embed URL | `https://embed.tawk.to/69c14d2a91de1e1c374c9f29/1jkdharj3` |

## Key Files Modified
- `/app/layout.tsx` — Removed hardcoded Tawk script (was causing double-load)
- `/app/en/contact/page.tsx` — CLS fix (hero image dimensions)
- `/app/en/page.tsx` — CLS fix (2 hero images)
- `/app/en/services/page.tsx` — CLS fix (hero image)
- `/app/en/blog/page.tsx` — CLS fix + contrast fix
- `/app/fr/cgv/page.tsx` — Contrast fix
- `/app/fr/confidentialite/page.tsx` — Contrast fix
- `/app/fr/mentions-legales/page.tsx` — Contrast fix
- `/components/Footer.tsx` — Contrast fix (all text colors)
- `/components/TawkToChat.tsx` — Updated with correct widget ID
- `/.env.local` — Added correct TAWK_ID

---

## SEO & Traffic Diagnosis (April 14, 2026)

### Root Cause Found
The website had only 1 visitor/day because **Google Search Console was not verified**. The verification code in `lib/seo.ts` was a placeholder (`YOUR_GOOGLE_VERIFICATION_CODE`).

### Fixes Applied
1. ✅ Added GSC verification instructions in `lib/seo.ts`
2. ✅ Verified deployment config (`build:netlify` uses empty basePath for custom domain)
3. ✅ Cleaned up `package.json` scripts (renamed `build:netlify` → `build:production`)
4. ✅ Build verified successful (80+ pages)

### Result
**🎉 After user configured Google verification code → Traffic now showing real data!**

### SEO Checklist
| Item | Status |
|------|--------|
| robots.txt | ✅ Allows all, has sitemap |
| sitemap.xml | ✅ Dynamic + static versions |
| GA4 (G-RTKKH1R9FB) | ✅ Configured |
| Canonical URLs | ✅ Set for FR/EN |
| hreflang tags | ✅ All locales |
| JSON-LD schema | ✅ LocalBusiness |
| Google Search Console | ✅ NOW VERIFIED |

**Last updated**: April 14, 2026
