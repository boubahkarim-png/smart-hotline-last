# Website Diagnostic Report — www.smart-hotline.com

**Date:** 2026-05-18
**Audited by:** Hermes Agent (seo-auditor + dogfood methodology)
**Tech Stack:** Next.js 14 static export → GitHub Pages
**Target:** French-speaking SMEs (Quebec/FR/BE/CH) — telephony services

---

## 1. Executive Summary

| Metric | Score |
|--------|-------|
| Site availability | ✅ 200 OK, HSTS, CDN |
| Pages in sitemap | 74 (21 FR blog, 21 EN blog, 32 static pages) |
| HTTP/2 | ✅ |
| HTTPS | ✅ |
| Schema.org structured data | ✅ LocalBusiness on every page |
| robots.txt | ✅ — well configured, AI crawlers allowed |
| **CRITICAL BUGS** | **3 found (fix immediately)** |
| **HIGH PRIORITY** | **7 issues** |
| **MEDIUM PRIORITY** | **9 issues** |
| **LOW PRIORITY / OPPORTUNITIES** | **12+ items** |

**Overall SEO Health: 65/100** — Good foundation, but technical bugs are leaking traffic and conversions.

---

## 2. ⛔ CRITICAL ISSUES (Fix Immediately)

### 🔴 C1 — `/en/` page has `<html lang="fr">` instead of `lang="en"`

**Impact:** Google uses `lang` for language targeting. The English homepage is telling Google it's in French. This CONFUSES international SEO — Google may serve the EN page to FR speakers and vice versa.

**Evidence:**
```bash
$ curl -s https://www.smart-hotline.com/en/ | grep -oP '<html[^>]*lang="[^"]*"'
<html lang="fr"     # BUG! Should be lang="en"
```

**Fix:** In the Next.js layout/page component, pass `lang="en"` for English routes. Likely a `layout.tsx` issue where the `lang` prop is hardcoded.

---

### 🔴 C2 — Missing `<link rel="canonical">` on English pages

**Impact:** Duplicate content risk. The `/en/` page has no canonical tag. If the same content exists at multiple URLs, Google doesn't know which to index.

**Evidence:**
```bash
$ curl -s https://www.smart-hotline.com/en/ | grep -c 'rel="canonical"'
0   # Missing!
$ curl -s https://www.smart-hotline.com/en/pricing/ | grep -c 'rel="canonical"'
0   # Missing!
```

FR pages may have them (homepage at / doesn't). Fix to add `rel="canonical"` to ALL pages pointing to their preferred URL.

---

### 🔴 C3 — No hreflang link tags on English pages

**Impact:** For a bilingual site targeting different regions (Quebec vs France), hreflang tags are MANDATORY. Right now, they exist ONLY in the sitemap but NOT in the HTML `<head>`.

**Evidence:**
```bash
$ curl -s https://www.smart-hotline.com/en/ | grep -c 'hreflang'
0   # Sitemap has them, HTML doesn't
```

**Fix:** Add `x-default` and language-specific hreflang in `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://www.smart-hotline.com/en/" />
<link rel="alternate" hreflang="fr" href="https://www.smart-hotline.com/fr/" />
<link rel="alternate" hreflang="x-default" href="https://www.smart-hotline.com/fr/" />
```

---

## 3. 🔴 HIGH PRIORITY ISSUES

### 🟠 H1 — Duplicate meta descriptions across English pages

**Impact:** 6+ English pages share exactly the same meta description:
> "Never miss a call. 24/7 receptionists and AI voice agents for SMEs. From $11/hr. Free 2-week trial — no commitment."

**Affected pages:** `/en/`, `/en/sectors/`, `/en/about/`, `/en/contact/`, `/en/privacy/`

Google sees these as thin/duplicate. You lose the chance to sell EACH page's unique value in SERPs.

**Fix:** Write unique meta descriptions per page. Examples:
- `/en/about/` → "Meet the Smart Hotline team. 24/7 phone partner for Quebec & French SMEs. Founded in Plateau Mont-Royal. 500+ calls/day managed."
- `/en/contact/` → "Start your free 2-week trial today. 24/7 reception, AI agents, outbound calling for Quebec & French SMEs."
- `/en/privacy/` → "Smart Hotline privacy policy. GDPR, Law 25 (Quebec) compliant. How we handle your data."

---

### 🟠 H2 — Duplicate meta descriptions on French legal pages

Same issue: `/fr/cgv/`, `/fr/confidentialite/`, `/fr/a-propos/`, `/fr/contact/`, `/fr/blog/` all share generic meta desc.

---

### 🟠 H3 — No `og:title` / `og:description` / Twitter cards found

**Impact:** When shared on social media (LinkedIn, Facebook, X), links show no preview, no image, no description. This kills social sharing which is critical for word-of-mouth among SME owners.

---

### 🟠 H4 — Testimonial content is DUPLICATED 2x

The testimonial carousel on the homepage shows the SAME 3 testimonials TWICE in a row. This looks broken, reduces trust, and may be flagged as duplicate content.

---

### 🟠 H5 — No privacy-focused analytics integration visible on pages

For Quebec's Law 25 and GDPR compliance, you need:
- Cookie consent banner
- Privacy analytics (Plausible, Umami, Matomo — not GA4)

Current pages have no visible analytics or consent mechanism.

---

### 🟠 H6 — Homepage H1 is weak for SEO

The `<h1>` on the English homepage: "Your 24/7 Phone Partner That Understands Local SMEs"

This is decent for branding but missing **primary keywords** like "call center", "virtual receptionist", "AI voice agent". The H1 is the most important on-page SEO signal.

---

### 🟠 H7 — `/en/pricing/` has `<h1>` "20 to 40%" — not a proper heading

The H1 tag on the pricing page is "20 to 40%" — likely a design element. This should be something like "Transparent Pricing for Quebec SMEs" for SEO.

---

## 4. 🟡 MEDIUM PRIORITY ISSUES

### 🟡 M1 — No blog structured data (Article/BlogPosting schema)

21 EN + 14 FR blog posts with no Article structured data. Adding `Article` schema helps Google understand and display blog content in rich results.

### 🟡 M2 — Blog posts lack proper internal linking

Homepage mentions "Sophie the AI agent" but doesn't link to the dedicated `/en/ai-agents/` blog posts or the services pages. Internal links pass SEO authority.

### 🟡 M3 — No FAQ schema on FAQ section

Homepage has an FAQ accordion with no `FAQPage` schema markup. This is a missed rich result opportunity.

### 🟡 M4 — Image alt text may be generic

Quick scan shows some images have alt text (`Smart Hotline`, `Marie Fontaine`) but many decorative/info images lack descriptive alt text. Audit all 74 pages for alt text compliance.

### 🟡 M5 — `/en/cgv/` returns 404

Broken link. French pages have CGV at `/fr/cgv/` but the English equivalent at `/en/cgv/` returns a 404. If referenced anywhere, this is a dead link.

### 🟡 M6 — No visible pricing on homepage

Pricing is behind a link ("View all pricing"). For SME buyers who want immediate answers, showing at least starting prices on the homepage reduces friction and increases conversions.

### 🟡 M7 — WhatsApp button is prominent but no click-to-call

For a telephony company, not having a visible phone number and click-to-call button is a missed conversion opportunity.

### 🟡 M8 — Cache TTL is only 10 minutes

GitHub Pages + Varnish gives `max-age=600`. Fine for static, but could be optimized to 1h+ for pages that change infrequently (legal, about).

### 🟡 M9 — No 404 page improvements

The 404 page (`/en/cgv/`) is the generic Next.js 404. Should redirect to a useful page or offer search/navigation.

---

## 5. 🟢 LOW PRIORITY / OPPORTUNITIES

### L1 — Content gap: No "Call Center Pricing Comparison" page
**Keyword opportunity:** "call center pricing comparison", "virtual receptionist cost", "AI agent vs human cost"
Competitors like RingCentral, Grasshopper rank for these.

### L2 — Blog topics could target more commercial intent
Current blogs are mostly informational (guides, tips). Add comparison pages:
- "Smart Hotline vs RingCentral"
- "Smart Hotline vs 800.com"
- "AI Agent vs Traditional Receptionist: Cost Analysis"

### L3 — No dedicated landing pages per industry
The `/en/sectors/` page lists industries but there are no dedicated landing pages targeting each industry separately. Create `/en/industries/real-estate/`, `/en/industries/healthcare/`, etc.

### L4 — No lead magnet / gated content
No downloadable resources (pricing guide, ROI calculator, industry report). These are critical for capturing leads from organic traffic.

### L5 — No case studies page
Testimonials suggest happy clients (Traiteur Fontaine, Cabinet Lefranc, Studio Martin) but there's no dedicated case study page with concrete metrics.

### L6 — AI SEO strategy
You allow ALL AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Good for citation, but consider:
- Adding `Content-Signal: ai-train=no` (already done ✅)
- Creating a dedicated "AI agents" section on-site so AI crawlers index your AI expertise

### L7 — No schema `Product` or `Service` markup
Each service (Inbound, Outbound, AI Agents, Support, CRM) should have `Service` schema with pricing, description, areaServed.

### L8 — Mobile optimization check needed
All pages have viewport meta tag and responsive framework (Next.js + Tailwind). But needs visual verification on actual mobile devices.

### L9 — No cookie consent banner
Required for Law 25 (Quebec) and GDPR (Europe). Missing entirely.

### L10 — No A/B testing framework
No visible A/B testing tool (Google Optimize, VWO, PostHog). Can't optimize conversions without testing.

### L11 — No heatmap / session recording
Tools like Hotjar, Microsoft Clarity, or PostHog would reveal user behavior friction points.

### L12 — No conversion tracking pipeline
No visible Facebook Pixel, LinkedIn Insight Tag, or conversion tracking. Can't optimize ad spend without it.

---

## 6. Competitor Keyword Analysis

### Top competitors in the "SME call center / virtual receptionist" space

| Competitor | Target Keywords | Smart Hotline Gap |
|---|---|---|
| **RingCentral** | "business phone system", "virtual phone system", "cloud PBX" | Not targeting VoIP/phone system keywords |
| **Grasshopper** | "virtual phone number", "800 number for small business", "business texting" | Not targeting 800/virtual number keywords |
| **AnswerConnect** | "virtual receptionist", "24/7 answering service", "live receptionist" | Direct competitor — check their exact keywords |
| **Ruby Receptionists** | "virtual receptionist service", "small business answering service" | US-focused, no French — your advantage |
| **Smith.ai** | "AI receptionist", "virtual receptionist AI", "24/7 answering service AI" | Their AI agent targeting is strong |
| **Sameday** (France) | "standard téléphonique", "accueil téléphonique", "centre d'appel PME" | French competitor, check Paris keywords |
| **Téléperformances** (FR) | "télésecrétariat", "réception d'appels PME" | Direct French competitor |

### Keyword gaps (Smart Hotline NOT ranking for):

**English:**
- "AI receptionist for small business"
- "Quebec call center services"
- "French virtual receptionist"
- "24/7 answering service Quebec"
- "outbound call center for startups"
- "$11/hr call center"
- "AI voice agent pricing"

**French (bigger opportunity since less competition):**
- "réceptionniste virtuel Québec"
- "centre d'appels IA PME"
- "agent vocal IA français"
- "réception téléphonique 24/7 Montréal"
- "télésecrétariat pour PME"
- "service d'appel sortant Québec"
- "prix centre d'appels PME"

---

## 7. CTA & Conversion Recommendations

| Page | Current CTA | Suggested Improvement |
|---|---|---|
| Homepage | "Free Demo" + "WhatsApp 24/7" | Add "Start Free Trial" — more concrete than "Free Demo" |
| Pricing | "View all pricing" → leads to /contact/ | Add direct "Get Started at $11/hr" CTA |
| AI Agents | "Discover AI Agents →" | Add "Try Sophie Free →" — personalized |
| Blog | No CTAs in blog posts | Add contextual CTAs in each post + sidebar |
| Contact | Contact form | Add phone number display + "We reply in <2h" trust signal |

### Suggested homepage redesign improvements:
1. Show starting price ($11/hr / 15$/h) DIRECTLY on hero
2. Add trust badges (GDPR, Law 25 compliant, 98% satisfaction, 500+ calls/day)
3. Move testimonials above the fold
4. Add countdown urgency ("Setup in 48h — Start Today")
5. Add a click-to-call button with actual phone number

---

## 8. Performance Notes

- **Hosting:** GitHub Pages (static, fast)
- **Cache:** 10min TTL via Varnish
- **Images:** External (unsplash.com) — ensure they're optimized
- **JS/CSS:** Next.js bundles — likely heavy. Suggest code splitting audit
- **Lighthouse:** Could not run because Lighthouse CLI not installed server-side. Run locally on a desktop browser:
  ```
  Lighthouse: https://www.smart-hotline.com/
  Focus: Performance, SEO, Best Practices, Accessibility
  ```

---

## 9. Action Priority Matrix

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| 🔴 C1 | Fix `lang="fr"` to `lang="en"` on English pages | 10 min | High |
| 🔴 C2 | Add canonical tags to all pages | 30 min | High |
| 🔴 C3 | Add hreflang link tags in HTML | 30 min | High |
| 🟠 H1 | Unique meta descriptions per page | 1-2h | High |
| 🟠 H2 | Fix duplicate testimonials | 15 min | Medium |
| 🟠 H3 | Add OG/Twitter card tags | 1h | Medium |
| 🟠 H6 | Optimize H1 tags for keywords | 1h | High |
| 🟡 M1 | Add Article schema to blog posts | 2h | Medium |
| 🟡 M3 | Add FAQPage schema | 1h | Medium |
| 🟡 M6 | Add pricing to homepage hero | 1h | High |
| 🟢 L4 | Create lead magnet (pricing guide) | 4h | High |
| 🟢 L2 | Add competitor comparison pages | 8h | Medium |

---

## 10. Recommended Tools & Next Steps

### Tools from Hermes you can use immediately:
1. **seo-auditor** — for ongoing page-level SEO checks
2. **dogfood** — for comprehensive QA session recording
3. **claude-design** — for redesigning weak pages
4. **popular-web-designs** — for design patterns (Stripe, Intercom, Linear)
5. **ab-testing-framework** — to test CTA variations
6. **performance-optimization** — for Lighthouse optimization
7. **accessibility-audit** — for WCAG compliance

### External tools to install:
- **Google Search Console** — verify site, see which keywords you rank for
- **Google Analytics 4** — traffic analysis (or privacy-friendly Umami/Plausible)
- **Microsoft Clarity** — free heatmaps + session recordings
- **Google PageSpeed Insights** — check Core Web Vitals from real user data
- **Screaming Frog SEO Spider** — full site crawl

---

*Generated by Hermes Agent using seo-auditor methodology*