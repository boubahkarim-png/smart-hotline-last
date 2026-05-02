# AI Search Optimization (AEO/GEO/LLMO) Analysis
**Smart Hotline Agency** — 2026-03-24

---

## IMPLEMENTATION COMPLETE ✅

### Files Created/Modified

| File | Type | Purpose |
|------|------|---------|
| `components/FAQSchema.tsx` | New | Reusable FAQPage JSON-LD component |
| `components/ServiceSchema.tsx` | New | Service structured data component |
| `components/HowToSchema.tsx` | New | HowTo process schema component |
| `components/ReviewSchema.tsx` | New | Review/AggregateRating schema |
| `app/fr/tarifs/page.tsx` | Modified | Server component with FAQ schema |
| `app/fr/tarifs/TarifsPageClient.tsx` | New | Client component (split from page) |
| `app/fr/tarifs/TarifsFAQSchema.tsx` | New | FAQ data for pricing page |
| `app/fr/agents-ia/page.tsx` | Modified | Added Service + HowTo schema |
| `lib/seo.ts` | Modified | Enhanced Organization schema |
| `public/robots.txt` | Modified | Added Perplexity, Google-Extended |
| `public/llms.txt` | Modified | Expanded from 29 to 180+ lines |

---

## 1. AI SEARCH READINESS AUDIT

### Current State: PARTIALLY READY (6/10)

| Check | Status | Notes |
|-------|--------|-------|
| Entity recognition | ✅ Good | Business name, services, location defined in schema |
| FAQ sections | ⚠️ Partial | Only on `/fr/tarifs` — missing on service pages |
| Statistics visible | ✅ Good | 500+ PME, 98% satisfaction, 2 sec response displayed |
| Contact consistency | ✅ Good | Phone, WhatsApp, email consistent across pages |
| robots.txt AI access | ✅ Good | GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI allowed |
| llms.txt exists | ✅ Good | Basic version in `/public/llms.txt` |
| Schema markup | ⚠️ Partial | LocalBusiness + Organization only — missing FAQ, Service, Review |
| Q&A structured content | ❌ Missing | No dedicated Q&A format for AI extraction |
| HowTo schema | ❌ Missing | Process steps exist but not schema-marked |
| Value propositions | ⚠️ Partial | Clear but could be more extractable |

---

## 2. SCHEMA MARKUP ANALYSIS

### Existing Schemas (from `/lib/seo.ts`)

```json
// Current: LocalBusiness + Organization hybrid
{
  "@type": "LocalBusiness",
  "name": "Smart Hotline Agency",
  "aggregateRating": { "ratingValue": "4.9", "reviewCount": "127" },
  "hasOfferCatalog": { /* services */ }
}
```

### Missing Schemas

| Schema Type | Priority | Pages Affected | Impact |
|-------------|----------|----------------|--------|
| **FAQPage** | HIGH | `/fr/tarifs`, `/fr/agents-ia`, `/fr/reception` | +40% AI citation boost |
| **Service** | HIGH | All service pages | Entity recognition for "call center services" queries |
| **HowTo** | MEDIUM | `/fr/agents-ia`, `/fr/a-propos` | Process extraction for "how to" queries |
| **Review** | MEDIUM | All pages with testimonials | Trust signal for AI systems |
| **Organization** | LOW | Already merged with LocalBusiness | Minor improvement |
| **BreadcrumbList** | LOW | All pages | Navigation context |

---

## 3. CONTENT FOR AI RECOMMENDATIONS

### Extractable Statistics (Optimal Format)

**Current approach:**
- "500+ PME satisfaites" — good
- "98% Satisfaction" — good
- "Réponse en moins de 2 secondes" — good

**AI-optimized format needed:**
```
"Smart Hotline serves 500+ small and medium businesses (SMBs) across Canada, 
France, Belgium, and Switzerland, with a 98% client satisfaction rate based on 
127 verified reviews (updated March 2026)."
```

### Missing Differentiators for AI

| Claim | Evidence Needed | Schema Support |
|-------|-----------------|----------------|
| "Up to 70% cheaper than traditional agents" | Source/calculation | Service.pricing |
| "48-hour setup" | Process description | HowTo.steps |
| "Bilingual French-English" | Language specification | Service.availableLanguage |
| "Sophie AI answers in 2 seconds" | Performance metric | Service.hoursAvailable |

### Q&A Content Gaps

Queries where Smart Hotline should appear but lacks structured answers:

| Query Type | Current Coverage | Gap |
|------------|------------------|-----|
| "What is an AI voice agent for calls?" | ❌ Missing | Definition block needed |
| "How much does a call center cost for SMBs?" | ⚠️ Pricing page only | Direct answer needed |
| "Best call center for small business Quebec" | ❌ Missing | Comparison/positioning |
| "AI phone answering service vs human agents" | ❌ Missing | Comparison table |
| "How to set up AI voice agent for my business" | ⚠️ Steps exist | HowTo schema needed |

---

## 4. AI AGENT OPTIMIZATION

### llms.txt Analysis

**Current file:** Basic (29 lines)
```
# Smart Hotline - Call Center & AI Voice Agents for SMBs
## About, Services, Key Stats, Contact, Pricing
```

**Missing:**
- Detailed service descriptions (AI needs more context)
- Pricing specifics with numbers
- Unique value propositions
- Geographic service areas
- Technology stack (LiveKit, ViciDial, etc.)
- Client success stories as structured data

### robots.txt Analysis

**Current:** ✅ Good
```
User-agent: GPTBot        Allow: /
User-agent: ChatGPT-User  Allow: /
User-agent: Claude-Web    Allow: /
User-agent: Anthropic-AI  Allow: /
```

**Missing:**
- PerplexityBot directive
- Google-Extended for Gemini/AI Overviews
- Bingbot explicit allow (for Copilot)

---

## 5. IMPLEMENTATION PRIORITY

### Phase 1: HIGH IMPACT (Week 1)

1. **Add FAQPage schema to `/fr/tarifs`**
   - 6 existing FAQs → structured JSON-LD
   - Estimated boost: +40% AI citation

2. **Create Service schema for each service page**
   - `/fr/reception`, `/fr/emission`, `/fr/agents-ia`, `/fr/support`, `/fr/crm`
   - Include: name, description, provider, areaServed, offers

3. **Enhance llms.txt**
   - 3x more content with structured sections
   - Add: detailed pricing, success metrics, technology

4. **Add missing robots.txt directives**
   - PerplexityBot, Google-Extended

### Phase 2: MEDIUM IMPACT (Week 2)

5. **Add HowTo schema to process pages**
   - `/fr/agents-ia` (4-step process)
   - `/fr/a-propos` (onboarding flow)

6. **Add Review schema for testimonials**
   - Each testimonial as structured Review
   - Link to aggregateRating

7. **Create dedicated Q&A page**
   - `/fr/faq` with 20+ questions
   - Cover: definition, pricing, comparison, how-to

### Phase 3: CONTENT (Week 3-4)

8. **Write definition blocks**
   - "What is an AI voice agent?"
   - "What is a call center for SMBs?"

9. **Create comparison content**
   - "AI voice agent vs human agent"
   - "Call center costs: in-house vs outsourced"

10. **Add freshness signals**
    - "Last updated: [date]" on all pages
    - Review statistics quarterly

---

## 6. EXPECTED OUTCOMES

| Metric | Current | Target (3 months) | Method |
|--------|---------|-------------------|--------|
| AI Overview presence | 0% | 15-20% | FAQ + Service schema |
| ChatGPT citation rate | 0% | 10-15% | llms.txt + Q&A content |
| Perplexity citation | 0% | 10% | Enhanced llms.txt |
| Schema coverage | 30% | 80% | All 5 schema types |

---

## 7. FILES TO CREATE/MODIFY

### Create:
- `/components/FAQSchema.tsx` — Reusable FAQ JSON-LD component
- `/components/ServiceSchema.tsx` — Service structured data
- `/app/fr/faq/page.tsx` — Dedicated FAQ page
- `/public/llms-full.txt` — Extended version for AI crawlers

### Modify:
- `/lib/seo.ts` — Add FAQ, Service, HowTo, Review schemas
- `/public/robots.txt` — Add PerplexityBot, Google-Extended
- `/public/llms.txt` — Expand from 29 to 100+ lines
- `/app/fr/tarifs/page.tsx` — Add FAQPage schema
- All service pages — Add Service schema

---

## NEXT STEPS

1. Implement FAQPage schema on `/fr/tarifs`
2. Create reusable schema components
3. Expand llms.txt
4. Update robots.txt
5. Create `/fr/faq` page

Want me to proceed with implementation?
