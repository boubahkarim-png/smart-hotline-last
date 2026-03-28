# Project Context: smart-hotline-nextjs

**Last Updated:** 2026-03-28

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14.2 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Deployment | GitHub Pages (Static Export) |
| Build Output | `out/` directory |

---

## Live URL

**Production:** https://boubahkarim-png.github.io/smart-hotline-last/fr/

---

## Current Status

**Completion:** 95%

### Completed
- ✅ Contact webhook deployed and functional
- ✅ Canonical URLs fixed for SEO
- ✅ TypeScript configuration strict mode
- ✅ Tailwind v4 CSS compilation
- ✅ Responsive design implemented

### In Progress
- 🔄 5 missing icons need identification and fix

---

## Current Issues

### 1. Missing Icons (Priority: HIGH)
- **Description:** 5 icons are not rendering in production build
- **Impact:** Visual degradation, unprofessional appearance
- **Location:** TBD - need to identify specific components
- **Action Required:** Audit icon imports, check SVG references

### 2. Build Cache
- **Description:** Stale build artifacts may cause issues
- **Action Required:** Clear `.next/` and `out/` before final build

---

## Success Criteria

### For "Done" Status
1. All icons render correctly on all pages
2. Build completes with zero errors
3. Live site matches development preview
4. All forms submit successfully
5. SEO meta tags verified on all pages
6. Mobile responsive on all breakpoints

---

## Build Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Clear Cache
rm -rf .next out node_modules/.cache

# Full Rebuild
rm -rf .next out && npm run build
```

---

## Deployment Flow

1. Push to `main` branch
2. GitHub Actions triggers build
3. Static files deployed to GitHub Pages
4. Live at: https://boubahkarim-png.github.io/smart-hotline-last/fr/

---

## Notes

- Project uses static export (no server-side rendering)
- French language default (`/fr/` path)
- Contact form uses webhook integration
- All pages have canonical URLs for SEO
