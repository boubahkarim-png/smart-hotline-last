# Homepage Redesign Plan - FR/EN

**Date**: 2026-04-06
**Priority**: CRITICAL
**Goal**: Match or exceed CRM page design quality with proper dark/light alternation

---

## Current State Analysis

### FR Homepage Current Pattern:
1. LIGHT - Hero (bg-gradient-to-br from-slate-50)
2. DARK - Moving marquee (bg-gradient-to-r from-sky-600) - SHORT
3. LIGHT - Services (bg-slate-50)
4. **NEXT SECTIONS UNKNOWN** - Need to read full file

### CRM Page Reference Pattern (EXCELLENT):
1. LIGHT - Hero (bg-gradient-to-br from-slate-50 via-white to-orange-50)
2. DARK - Features (bg-gradient-to-br from-slate-900 via-orange-950)
3. DARK - Additional Features (bg-gradient-to-br from-slate-900)
4. LIGHT - Benefits (bg-gradient-to-br from-slate-50) - with border-t-4
5. DARK - Testimonials (bg-gradient-to-br from-slate-900)
6. DARK - CTA (bg-gradient-to-br from-slate-900 via-orange-900)
7. LIGHT - FAQ (bg-white)

---

## Required Changes

### 1. **Add More Dark Sections**
- Current: Too many consecutive light sections
- Target: No more than 2 consecutive light sections
- Add: Stats section as DARK
- Add: Testimonials section as DARK
- Add: Benefits/Features as DARK

### 2. **Add Visual Separators**
- Add `border-t-4 border-slate-900` between major sections
- Add `border-t-4 border-COLOR-600` for brand accent
- Increase spacing: py-24 instead of py-20

### 3. **Diversify Backgrounds**
- Use different dark gradients:
  - Slate-900 via sky-950 (for hero-related)
  - Slate-900 via blue-950 (for services)
  - Slate-900 via indigo-950 (for testimonials)
- Mix solid dark (bg-slate-900) with gradients

### 4. **Apply to BOTH Languages**
- FR: /app/fr/page.tsx
- EN: /app/en/page.tsx (or /app/page.tsx)

---

## Proposed New Pattern (Homepage)

```
1. LIGHT - Hero with badges
   bg-gradient-to-br from-slate-50 via-white to-sky-50

2. DARK - Moving marquee (keep)
   bg-gradient-to-r from-sky-600 to-blue-700
   border-t-4 border-sky-500

3. DARK - Services Grid (CONVERT to dark)
   bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900
   Cards: bg-white/10 backdrop-blur
   border-t-4 border-blue-600

4. LIGHT - Stats
   bg-white border-t-4 border-slate-200

5. DARK - How It Works
   bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900
   border-t-4 border-indigo-600

6. LIGHT - Benefits
   bg-white py-24

7. DARK - Testimonials
   bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900
   border-t-4 border-blue-700

8. DARK - Final CTA
   bg-gradient-to-br from-sky-900 to-sky-700

9. LIGHT - FAQ
   bg-white border-t border-slate-100
```

---

## Skills Being Used

1. **brainstorming** - Understanding requirements and user intent
2. **frontend-design** - Applying design principles and anti-patterns to avoid
3. **audit** - Checking quality, accessibility, contrast
4. **nextlevelbuilder** - UI/UX optimization patterns
5. **verification-before-completion** - Ensuring changes work before claiming done

---

## Implementation Steps

### Step 1: Read Full Homepage Files
- Read complete FR homepage
- Read complete EN homepage
- Document all current sections

### Step 2: Apply Dark/Light Pattern
- Convert services section to DARK
- Add new DARK sections for stats/process
- Convert testimonials to DARK
- Add visual separators (border-t-4)

### Step 3: Ensure Text Readability
- All dark sections: text-white, text-blue-200, text-sky-200
- Cards: bg-white/10 backdrop-blur border-white/20
- Headings: font-bold text-white

### Step 4: Build and Test
- npm run build
- Check for errors
- Deploy

### Step 5: Verify Live Site
- Check contrast ratios
- Verify section alternation
- Test on mobile

---

## Success Criteria

- [ ] No more than 2 consecutive light sections
- [ ] All text on dark backgrounds readable (WCAG AA)
- [ ] Clear visual separators between sections
- [ ] Diverse backgrounds (not all slate-900)
- [ ] Both FR and EN homepages updated
- [ ] Deployed successfully
- [ ] Live site verified

---

## Anti-Patterns to AVOID

From frontend-design skill:
- ❌ Gray text on dark backgrounds
- ❌ Nested cards in cards
- ❌ Same spacing everywhere
- ❌ Generic fonts
- ❌ Gradient text for "impact"
- ❌ Glassmorphism everywhere
- ❌ Hero metrics template

---

**Status**: READY TO IMPLEMENT
**Next Action**: Read full homepage files and begin transformation
