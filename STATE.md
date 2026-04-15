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

## Accomplished (Continued)

### Lead Capture System - OPERATIONAL (April 15, 2026)
1. ✅ Database tables created: `suitecrm.leads` + `suitecrm.leads_audit` with full schema
2. ✅ API endpoint working: `https://app.smart-hotline.com/api/leads/contact.php`
3. ✅ Database insertion verified: UUID-based lead storage
4. ✅ Email fallback working: Sends to `direction@smart-hotline.com` if DB fails
5. ✅ Website forms (FR/EN) connected and tested end-to-end
6. ✅ CORS configured for `https://www.smart-hotline.com`

### Database Schema
| Table | Purpose |
|-------|---------|
| `leads` | Main lead storage (36 columns including id, first_name, last_name, email1, phone_work, company, etc.) |
| `leads_audit` | Audit trail for lead actions |

### API Endpoint Details
- **URL**: `https://app.smart-hotline.com/api/leads/contact.php`
- **Method**: POST (JSON)
- **Required Fields**: `name`, `email`
- **Optional Fields**: `phone`, `company`, `service`, `message`, `source`, `language`
- **Response**: JSON with `success`, `id`, `method` (database/email)

## Pending

### Directory Submissions for Backlinks (Manual Step Required)
- Directory submission data prepared in `/docs/directory-submissions.md`
- Playwright browser automation not available on this system (OpenSUSE)
- **Manual submission needed to**:
  1. LiveBusiness.ca (Quebec category)
  2. CanadianBusinessDirectory.ca
  3. TheBusiness.ca (bilingual)
  4. FreeBizAds.ca/quebec
  5. BizLocal.ca
  6. MySheriff.ca/quebec

### SEO Keyword Expansion - COMPLETED (April 15, 2026)
1. ✅ Expanded keywords in seo.ts (100+ keywords FR/EN)
2. ✅ Added hidden keyword div in layout.tsx (SEO crawlable)
3. ✅ Updated service page layouts with targeted keywords:
   - /fr/reception + /en/inbound (reception/call answering)
   - /fr/emission + /en/outbound (outbound/lead generation)
   - /fr/agents-ia + /en/ai-agents (AI voice agents)
4. ✅ Location pages verified (Montreal FR/EN)

### Quebec-Specific Blog Posts - COMPLETED (April 15, 2026)
1. ✅ "Centre d'appels Quebec pour PME" - Quebec French, local references
2. ✅ "Réception téléphonique 24/7 Montreal" - Montreal-focused, 24/7 service
3. ✅ Content uses Quebec vocabulary (char, magasiner, etc.)
4. ✅ Targets long-tail keywords: centre d'appels quebec pour pme, réception téléphonique 24/7 montreal

### SuiteCRM Web Interface
- SuiteCRM installer incomplete (returns 500)
- Full installation requires ~200 database tables
- **Current Status**: Lead capture works via custom API without SuiteCRM UI
- **Next Steps**: Run full web installer OR continue with custom API approach

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
## Server Configuration

### Lead Capture API Location
| Path | Description |
|------|-------------|
| `/srv/www/htdocs/api/leads/contact.php` | Main lead capture endpoint |
| `/srv/www/htdocs/api/leads/test_db.php` | Database connection test |
| `/srv/www/htdocs/api/leads/debug_insert.php` | Debug insert script |

### Database Credentials
| Item | Value |
|------|-------|
| Database | `suitecrm` |
| User | `suitecrm` |
| Password | `SuiteCRM2024!` |

### SuiteCRM Configuration
| File | Status |
|------|--------|
| `/srv/www/htdocs/suitecrm/config.php` | `installer_locked => true` |
| `/srv/www/htdocs/suitecrm/config_si.php` | `setup_db_drop_tables => true` |

---
**Last updated**: April 15, 2026
