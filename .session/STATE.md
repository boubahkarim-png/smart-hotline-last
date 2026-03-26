# Project State: Smart Hotline Next.js Website

**Project:** Smart Hotline Next.js Website
**Core Value:** Bilingual (FR/EN) agency website with geo-aware content, deployed on GitHub Pages
**Started:** 2026-03-22

---

## Current Position

**Current Phase:** Phase 2 - Content & SEO
**Current Plan:** FR pages complete with 8 sections each, EN pages need review
**Status:** ACTIVE - Live and functional

**Overall Progress:**
```
[████████████████████████████████░░░░░░] 75% (FR pages complete, EN alignment needed)
```

---

## Phase Progress

| Phase | Status | Progress | Blockers |
|-------|--------|----------|----------|
| Phase 1: Core Development | 🟢 Completed | 8/8 | None |
| Phase 2: Content & SEO | 🟡 In Progress | 5/6 | EN alignment needed |
| Phase 3: Performance | ⚪ Not Started | 0/4 | Content completion required |
| Phase 4: Features | ⚪ Not Started | 0/5 | Performance optimization required |

---

## Session History

### 2026-03-26 Session
**Completed:**
- ✅ Removed duplicate FAQ sections from reception and support pages
- ✅ Fixed wrong button colors in duplicate FAQs (blue-600 → sky-600, teal-600 → emerald-700)
- ✅ Added 4th testimonial to all FR service pages (reception, support, crm, secteurs, emission, agents-ia)
- ✅ Verified all FR service pages have exactly 8 sections

**Verification:**
```bash
for page in reception support crm secteurs emission agents-ia; do 
  curl -sL "https://boubahkarim-png.github.io/smart-hotline-last/fr/$page/" | grep -oE '<section[^>]*>' | wc -l
done
# All pages: 8 sections
```

---

## Service Page Colors

| Service | FR Color | EN Color | Status |
|---------|----------|----------|--------|
| Réception/Inbound | sky-600 | sky-600 | ✅ |
| Support | emerald-700 | emerald-700 | ✅ |
| CRM | purple-600 | purple-600 | ✅ |
| Secteurs | amber-600 | - | ✅ |
| Émission/Outbound | emerald-600 | emerald-600 | ✅ |
| Agents IA | violet-600 | violet-600 | ✅ |

---

## Section Pattern

Each service page follows this pattern:
1. **LIGHT** - Hero with image
2. **DARK** - Features/Stats (gradient)
3. **LIGHT** - Stats/How it works
4. **LIGHT** - Benefits/Details
5. **LIGHT** - More content
6. **LIGHT** - Testimonials (4 boxes in md:grid-cols-4)
7. **DARK** - Final CTA (gradient)
8. **LIGHT** - FAQ

---

## Accumulated Context

### Key Decisions
| Decision | Rationale | Date |
|----------|-----------|------|
| Tailwind v4 CSS-first | No config file, auto-scans all files | 2026-03-23 |
| Static export to GitHub Pages | Free hosting, custom domain support | 2026-03-22 |
| Geo-aware CTA (ipapi.co) | Different contact methods by country | 2026-03-22 |
| basePath: /smart-hotline-last | Match GitHub repo name | 2026-03-25 |
| 8 sections per page | L-D-L-L-L-L-D-L pattern | 2026-03-26 |
| 4 testimonials per page | Even grid requirement (md:grid-cols-4) | 2026-03-26 |

### Known Issues
- EN pages may need alignment with FR structure
- Some pages may need hero images

### Technical Debt
- ~~Add more testimonials across all pages~~ ✅ DONE
- Generate real promotional videos
- Add metadata to emission, support, agents-ia pages
- Performance optimization needed

---

## Deploy Process

```bash
cd /root/projects/smart-hotline-nextjs
rm -rf out && npm run build
touch out/.nojekyll
git add -A && git commit -m "message"
git push origin main
# Auto-deploys via GitHub Actions (workflow_dispatch or push)
```

### Verification
```bash
curl -sL "https://boubahkarim-png.github.io/smart-hotline-last/fr/" | grep -oE '<section[^>]*>' | wc -l
# Should return 8
```

---

## Live URLs

- **French**: https://boubahkarim-png.github.io/smart-hotline-last/fr/
- **English**: https://boubahkarim-png.github.io/smart-hotline-last/en/

---

*State initialized: 2026-03-22*
*Last updated: 2026-03-26*
