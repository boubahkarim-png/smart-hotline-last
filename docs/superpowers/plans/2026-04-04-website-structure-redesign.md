# Website Structure Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize all Smart Hotline website pages with unified hero sections, dark/light alternation, and consistent design patterns.

**Architecture:** Apply a unified page structure template across all French and English service pages, ensuring proper hero image display, section alternation (Light → Dark → Light → Dark), and consistent spacing.

**Tech Stack:** Next.js 14.2, React, TypeScript, Tailwind CSS v4

---

## Task 1: Standardize French Support Page Hero Section

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/fr/support/page.tsx:45-76`
- Reference: `/root/projects/smart-hotline-nextjs/app/fr/reception/page.tsx:49-110` (good example)

**Current Issue:** Support page has hero image but lacks gradient background and proper hero structure.

**Changes:**
- [ ] **Step 1: Update hero section gradient background**
  Replace line 45 with:
  ```tsx
  <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
  ```

- [ ] **Step 2: Add hero image container with blur effect**
  Replace lines 61-73 with:
  ```tsx
  <div className="w-full lg:w-1/2 animate-slide-right">
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
      <img src="/images/support-tech.jpg" alt="Support client" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    </div>
  </div>
  ```

- [ ] **Step 3: Update image path**
  Change from `/images/support-hero.jpg` to `/images/support-tech.jpg` (existing file)

- [ ] **Step 4: Increase image max height**
  Change from `maxHeight:'380px'` to `maxHeight:'550px'`

---

## Task 2: Standardize English Support Page Hero Section

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/en/support/page.tsx:45-76`

- [ ] **Step 1: Read the English support page**
  ```bash
  Read file: /root/projects/smart-hotline-nextjs/app/en/support/page.tsx (first 80 lines)
  ```

- [ ] **Step 2: Apply same hero section changes as French version**
  - Update gradient background
  - Add hero image container with blur
  - Update image path to `/images/support-tech.jpg`
  - Increase max height to 550px

---

## Task 3: Verify All French Service Pages Have Hero Images

**Files to Check:**
- `/root/projects/smart-hotline-nextjs/app/fr/reception/page.tsx` ✅
- `/root/projects/smart-hotline-nextjs/app/fr/emission/page.tsx` - CHECK
- `/root/projects/smart-hotline-nextjs/app/fr/agents-ia/page.tsx` ✅
- `/root/projects/smart-hotline-nextjs/app/fr/support/page.tsx` - FIXING
- `/root/projects/smart-hotline-nextjs/app/fr/crm/page.tsx` ✅
- `/root/projects/smart-hotline-nextjs/app/fr/tarifs/page.tsx` - CHECK

- [ ] **Step 1: Check emission page**
  ```bash
  Read: /root/projects/smart-hotline-nextjs/app/fr/emission/page.tsx (lines 45-80)
  ```
  Look for hero image. If missing, add with `/images/telemarketing.jpg`

- [ ] **Step 2: Check tarifs page**
  ```bash
  Read: /root/projects/smart-hotline-nextjs/app/fr/tarifs/page.tsx (first 80 lines)
  ```
  Verify hero structure

---

## Task 4: Verify All English Service Pages Have Hero Images

**Files to Check:**
- `/root/projects/smart-hotline-nextjs/app/en/inbound/page.tsx` - CHECK
- `/root/projects/smart-hotline-nextjs/app/en/outbound/page.tsx` - CHECK
- `/root/projects/smart-hotline-nextjs/app/en/ai-agents/page.tsx` - CHECK
- `/root/projects/smart-hotline-nextjs/app/en/support/page.tsx` - FIXING
- `/root/projects/smart-hotline-nextjs/app/en/crm/page.tsx` - CHECK
- `/root/projects/smart-hotline-nextjs/app/en/pricing/page.tsx` - CHECK

- [ ] **Step 1: Check inbound page**
- [ ] **Step 2: Check outbound page**
- [ ] **Step 3: Check ai-agents page**
- [ ] **Step 4: Check crm page**
- [ ] **Step 5: Check pricing page**

---

## Task 5: Ensure Dark/Light Section Alternation

**Pattern to Apply:**
```
1. HERO - Light gradient (slate-50 via white to color-50)
2. FEATURES - Light (white or slate-50)
3. STATS - Dark (slate-900 gradient)
4. TESTIMONIALS - Dark (slate-900)
5. PROCESS/DETAILS - Light (white or slate-50)
6. CTA - White with dark gradient OR dark gradient
```

- [ ] **Step 1: Audit support page sections**
  Check French and English support pages follow pattern

- [ ] **Step 2: Fix any pages with incorrect alternation**
  Apply standard pattern

---

## Task 6: Test Build

- [ ] **Step 1: Run build**
  ```bash
  cd /root/projects/smart-hotline-nextjs
  npm run build
  ```

- [ ] **Step 2: Verify no errors**
  Check for compilation errors

- [ ] **Step 3: Verify CSS generation**
  ```bash
  ls -lh out/_next/static/css/*.css | grep -E "3[0-9]KB"
  ```
  Ensure CSS files >30KB exist

---

## Task 7: Update CHANGELOG

- [ ] **Step 1: Document all changes made**
  Update `/root/projects/smart-hotline-nextjs/CHANGELOG.md` with:
  - Files modified
  - Changes per file
  - Build test results
  - Any issues encountered

---

## Execution Notes

**Hero Image Standards:**
- Max height: 550px
- Object fit: cover
- Blur effect: `absolute -inset-4 bg-gradient-to-r from-{color}-400 to-{color}-500 rounded-3xl blur-2xl opacity-20`
- Classes: `rounded-3xl shadow-2xl hero-image-zoom`

**Section Spacing Standards:**
- Hero: `py-16 lg:py-24`
- Regular sections: `py-20`
- Stats/badges: `py-10`

**Color Scheme by Service:**
- Reception/Inbound: sky/blue
- Emission/Outbound: emerald/green
- AI Agents: violet/purple
- Support: teal/cyan
- CRM: orange/amber
- Pricing: amber/yellow
