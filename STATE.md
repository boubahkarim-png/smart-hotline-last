# Smart Hotline Next.js - Project State

## Goal
1. **SEO Ranking**: Get www.smart-hotline.com to first page of Google and AI search engines
2. **SuiteCRM Integration**: Connect website contact form to SuiteCRM for lead capture (standalone)
3. **Tawk.to Chat**: Keep live chat widget working
4. **Content Humanization**: Ensure content not detected as AI-generated

## Accomplished

### SEO Enhancements - COMPLETED (April 15, 2026)
1. ✅ Added FAQPage structured data (5 Q&A about pricing, AI agents, setup)
2. ✅ Added HowTo structured data (4-step onboarding guide)
3. ✅ Added BreadcrumbList structured data
4. ✅ Verified all SEO schemas on live site via Google Rich Results Test

### Tawk.to Chat - RESTORED & VERIFIED
1. ✅ Tawk.to script preserved in `app/layout.tsx`
2. ✅ Live site verified: `tawk.to` appearing in HTML
3. ✅ Property ID: `69c14d2a91de1e1c374c9f29`
4. ✅ Widget ID: `1jkdharj3`

### Deployment Pipeline - FIXED
1. ✅ Added `build:netlify` script to package.json (was causing GitHub Actions failure)
2. ✅ GitHub Actions workflow now builds and deploys successfully
3. ✅ Live site updated with all changes

### SEO Checklist
| Item | Status |
|------|--------|
| robots.txt | ✅ Allows all, has sitemap |
| sitemap.xml | ✅ Dynamic + static versions |
| GA4 (G-RTKKH1R9FB) | ✅ Configured |
| Canonical URLs | ✅ Set for FR/EN |
| hreflang tags | ✅ All locales |
| JSON-LD: LocalBusiness | ✅ Active |
| JSON-LD: FAQPage | ✅ Active (5 Q&A) |
| JSON-LD: HowTo | ✅ Active (4 steps) |
| JSON-LD: BreadcrumbList | ✅ Active |
| llms.txt | ✅ AI search optimized |
| Google Search Console | ✅ Verified |

## Pending

### SuiteCRM Integration
- Database `suitecrm` created with user `suitecrm`
- Tables `leads` and `leads_audit` created manually
- API endpoint `/srv/www/htdocs/api/leads/contact.php` working
- **NOT COMPLETED**: SuiteCRM web installation wizard (browser automation timed out)
- **Alternative**: Continue with custom API endpoint or retry SuiteCRM installation

## Key Files
- `/app/layout.tsx` — Root layout with SEO schemas + Tawk.to script
- `/.env.local` — Contains `NEXT_PUBLIC_TAWK_ID`
- `/package.json` — Build scripts including `build:netlify`
- `/.github/workflows/deploy.yml` — GitHub Actions deployment

## Tawk.to Configuration Reference
| Property | Value |
|----------|-------|
| Property ID | `69c14d2a91de1e1c374c9f29` |
| Widget ID | `1jkdharj3` |
| Dashboard | https://dashboard.tawk.to |
| Embed URL | `https://embed.tawk.to/69c14d2a91de1e1c374c9f29/1jkdharj3` |

---
**Last updated**: April 15, 2026
