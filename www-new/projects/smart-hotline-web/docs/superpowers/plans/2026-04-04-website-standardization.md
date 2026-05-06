# Complete Website Standardization Implementation Plan

> **For agentic workers:** REQUIRED: Use systematic approach with build testing after each page. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize ALL website pages with unified structure, unique service colors, same number of sections, optimized for lead generation.

**Architecture:** Apply consistent 5-section structure across all pages with service-specific color schemes while maintaining dark/light alternation pattern.

**Tech Stack:** Next.js 14.2, React, TypeScript, Tailwind CSS v4

---

## Unified Page Structure (5 Sections)

**ALL PAGES MUST HAVE:**
1. **HERO** - Gradient background with service color, 550px hero image, CTA buttons
2. **FEATURES** - Light background (white or slate-50), 4-6 feature cards
3. **STATS** - Dark gradient background (slate-900), 4 key metrics
4. **TESTIMONIALS** - Dark background, 3-4 testimonials with stars
5. **FINAL CTA** - Gradient light background, urgency elements, dual CTA buttons

**Color Scheme by Service:**
- Reception (FR) / Inbound (EN): `sky-500` → `blue-600`
- Emission (FR) / Outbound (EN): `emerald-500` → `green-600`
- Agents IA / AI Agents: `violet-500` → `purple-600`
- Support: `teal-500` → `cyan-600`
- CRM: `orange-500` → `amber-600`
- Tarifs / Pricing: `amber-500` → `yellow-600`

---

## Task 1: Audit Current Page Structure

**Files to Check:**
- `/app/fr/page.tsx` (Homepage)
- `/app/fr/reception/page.tsx`
- `/app/fr/emission/page.tsx`
- `/app/fr/agents-ia/page.tsx`
- `/app/fr/support/page.tsx`
- `/app/fr/crm/page.tsx`
- `/app/fr/tarifs/page.tsx`

- [ ] **Step 1: Count sections in each French page**
  Run: `grep -c "<section" app/fr/*.tsx`
  Document current section count

- [ ] **Step 2: Check English pages**
  Run: `grep -c "<section" app/en/*.tsx`
  Document current section count

- [ ] **Step 3: Identify inconsistencies**
  Create comparison table showing section counts

---

## Task 2: Standardize French Homepage (PRIORITY #1)

**File:** `/app/fr/page.tsx`
**Target Structure:** 5 sections (HERO, MOVING MARQUEE, SERVICES, STATS, TESTIMONIALS, AI SECTION, FINAL CTA)

**Homepage is CRITICAL for lead generation!**

- [ ] **Step 1: Read current homepage**
  ```bash
  wc -l app/fr/page.tsx
  grep -n "<section" app/fr/page.tsx
  ```

- [ ] **Step 2: Reorganize to 5 core sections:**
  1. HERO (with gradient background, optimized headline)
  2. MOVING MARQUEE (social proof)
  3. SERVICES (6-box grid, white background)
  4. STATS (dark gradient, big numbers)
  5. TESTIMONIALS + FINAL CTA combined

- [ ] **Step 3: Optimize HERO for conversions**
  - Stronger headline
  - Multiple trust badges
  - Urgency element (trial offer)
  - Clear primary CTA

- [ ] **Step 4: Test build**
  ```bash
  cd /root/projects/smart-hotline-nextjs
  npm run build
  ```

- [ ] **Step 5: Commit if successful**
  ```bash
  git add app/fr/page.tsx
  git commit -m "feat: optimize FR homepage for lead gen"
  ```

---

## Task 3: Standardize French Reception Page

**File:** `/app/fr/reception/page.tsx`
**Color:** Sky blue (`sky-500` to `blue-600`)
**Sections:** HERO, FEATURES, STATS, TESTIMONIALS, FINAL CTA

- [ ] **Step 1: Read current structure**
  ```bash
  grep -n "<section" app/fr/reception/page.tsx | head -10
  ```

- [ ] **Step 2: Ensure 5 sections exist**
  If missing sections, add them
  If extra sections, consolidate them

- [ ] **Step 3: Apply sky blue color scheme**
  - Hero gradient: `from-slate-50 via-white to-sky-50`
  - CTA buttons: `bg-sky-600`
  - Stats gradient: `from-sky-900 to-blue-900`

- [ ] **Step 4: Test build**
  ```bash
  npm run build
  ```

- [ ] **Step 5: Commit**
  ```bash
  git add app/fr/reception/page.tsx
  git commit -m "feat: standardize FR reception page structure"
  ```

---

## Task 4: Standardize French Emission Page

**File:** `/app/fr/emission/page.tsx`
**Color:** Emerald green (`emerald-500` to `green-600`)

- [ ] **Step 1: Check current structure**
- [ ] **Step 2: Apply 5-section template**
- [ ] **Step 3: Use emerald color scheme**
- [ ] **Step 4: Test build**
- [ ] **Step 5: Commit**

---

## Task 5: Standardize French Agents IA Page

**File:** `/app/fr/agents-ia/page.tsx`
**Color:** Violet purple (`violet-500` to `purple-600`)

- [ ] **Step 1: Check current structure**
- [ ] **Step 2: Apply 5-section template**
- [ ] **Step 3: Use violet color scheme**
- [ ] **Step 4: Test build**
- [ ] **Step 5: Commit**

---

## Task 6: Standardize French Support Page

**File:** `/app/fr/support/page.tsx`
**Color:** Teal cyan (`teal-500` to `cyan-600`)
**Status:** Already has hero redesigned ✅

- [ ] **Step 1: Verify 5 sections**
- [ ] **Step 2: Ensure teal color scheme**
- [ ] **Step 3: Add missing sections if needed**
- [ ] **Step 4: Test build**
- [ ] **Step 5: Commit**

---

## Task 7: Standardize French CRM Page

**File:** `/app/fr/crm/page.tsx`
**Color:** Orange amber (`orange-500` to `amber-600`)

- [ ] **Step 1: Check current structure**
- [ ] **Step 2: Apply 5-section template**
- [ ] **Step 3: Use orange color scheme**
- [ ] **Step 4: Test build**
- [ ] **Step 5: Commit**

---

## Task 8: Standardize French Tarifs Page

**File:** `/app/fr/tarifs/page.tsx`
**Color:** Amber yellow (`amber-500` to `yellow-600`)

- [ ] **Step 1: Check current structure**
- [ ] **Step 2: Apply 5-section template**
- [ ] **Step 3: Use amber color scheme**
- [ ] **Step 4: Test build**
- [ ] **Step 5: Commit**

---

## Task 9-15: Apply Same to English Pages

Repeat Tasks 2-8 for:
- `/app/en/page.tsx` (Homepage)
- `/app/en/inbound/page.tsx` (Reception)
- `/app/en/outbound/page.tsx` (Emission)
- `/app/en/ai-agents/page.tsx` (Agents IA)
- `/app/en/support/page.tsx` (Support - already done ✅)
- `/app/en/crm/page.tsx` (CRM)
- `/app/en/pricing/page.tsx` (Tarifs)

- [ ] **Step 1: Apply 5-section structure**
- [ ] **Step 2: Use service-specific colors**
- [ ] **Step 3: Test build**
- [ ] **Step 4: Commit each page separately**

---

## Task 16: Final Build Test and Documentation

- [ ] **Step 1: Run full build**
  ```bash
  cd /root/projects/smart-hotline-nextjs
  npm run build
  ```

- [ ] **Step 2: Verify all pages compile**
  Check build output for all routes

- [ ] **Step 3: Create final changelog**
  Document all pages modified
  List section structure for each
  Note color schemes applied

- [ ] **Step 4: Final commit**
  ```bash
  git add .
  git commit -m "feat: complete website standardization - all pages unified structure"
  ```

---

## Testing Checklist

After each page update, verify:
- [ ] Build passes without errors
- [ ] Page has exactly 5 sections
- [ ] Hero image is 550px max
- [ ] Service color is applied consistently
- [ ] Dark/light alternation is correct
- [ ] All text is readable (sufficient contrast)
- [ ] CTAs are visible and functional

---

## Section Template Code

**HERO:**
```tsx
<section className="bg-gradient-to-br from-slate-50 via-white to-{COLOR}-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
  // Hero content with 550px image
</section>
```

**FEATURES:**
```tsx
<section className="py-20 bg-white">
  // 4-6 feature cards
</section>
```

**STATS:**
```tsx
<section className="bg-gradient-to-br from-slate-900 via-{COLOR}-950 to-{COLOR}-900 py-16 text-white">
  // 4 key metrics
</section>
```

**TESTIMONIALS:**
```tsx
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
  // 3-4 testimonials
</section>
```

**FINAL CTA:**
```tsx
<section className="bg-gradient-to-br from-{COLOR}-50 via-white to-blue-50 py-20">
  // Urgency + dual CTA
</section>
```

---

## Expected Outcome

After completion:
- ✅ All 15 pages have 5 sections
- ✅ Each service has unique color
- ✅ Dark/light alternation consistent
- ✅ Homepage optimized for lead gen
- ✅ Build passes
- ✅ All pages tested
- ✅ Documentation complete

**Estimated Time:** 3-4 hours with systematic approach
