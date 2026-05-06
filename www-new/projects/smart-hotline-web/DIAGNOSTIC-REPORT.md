# 🔍 WEBSITE DIAGNOSTIC REPORT - Smart Hotline
**Date:** 2026-04-06  
**Auditor:** GSD Debugger Agent  
**Scope:** Full structural and content comparison FR/EN

---

## 🚨 CRITICAL ISSUES FOUND

### 1. **CONTACT FORMS ARE COMPLETELY DIFFERENT** ⚠️

#### French Contact Form (`/fr/contact`)
- **7 fields:** name, email, phone, company, service dropdown, volume dropdown, message
- **425 lines** of code
- **Full sections:**
  - Trust badges (500+ PME, 98% satisfaction, 24/7, 70% économie)
  - "How we help" section (Analyse Gratuite, Mise en Place Rapide, Support Continu)
  - Quality commitment section
  - Technology section
  - FAQ section
  - Final CTA section

#### English Contact Form (`/en/contact`)
- **ONLY 3 fields:** name, email, message
- **310 lines** of code
- **Missing:** phone, company, service dropdown, volume dropdown
- **Simpler structure:**
  - Hero section
  - Contact info (phone, WhatsApp, email)
  - Simple form
  - FAQ section
  - Trust badges
  - Testimonials
  - Location info

**ISSUE:** The forms are not equivalent! French users get a detailed qualifying form, English users get a basic form. This affects lead quality and conversion tracking.

---

### 2. **SERVICES PAGE - MISSING 6th SERVICE IN FR** ⚠️

#### French Services (`/fr/services`) - 5 services:
1. 📞 Appels Entrants → `/fr/reception`
2. 📢 Appels Sortants → `/fr/emission`
3. 🤖 Agents IA Vocaux → `/fr/agents-ia`
4. 🎧 Support Client → `/fr/support`
5. 🗄️ CRM & Listes → `/fr/crm`

#### English Services (`/en/services`) - 6 services:
1. 📞 Inbound Calls → `/en/inbound`
2. 📢 Outbound Calls → `/en/outbound`
3. 🤖 Voice AI Agents → `/en/ai-agents`
4. 🎧 Customer Support → `/en/support`
5. 🗄️ CRM & Lists → `/en/crm`
6. 🏭 Industry Expertise → `/en/sectors` ← **MISSING IN FR**

**ISSUE:** French version is missing the "Industry Expertise / Secteurs" service link that exists in English.

---

### 3. **PAGE NAMING INCONSISTENCIES** ⚠️

| Purpose | French Path | English Path | Status |
|---------|-------------|--------------|--------|
| Outbound Calls | `/fr/emission` | `/en/outbound` | ⚠️ Different names |
| Inbound Calls | `/fr/reception` | `/en/inbound` | ⚠️ Different names |
| About | `/fr/a-propos` | `/en/about` | ✅ OK (translated) |
| Pricing | `/fr/tarifs` | `/en/pricing` | ✅ OK (translated) |
| Privacy | `/fr/confidentialite` | `/en/privacy` | ✅ OK (translated) |
| Terms | `/fr/cgv` | `/en/terms` | ✅ OK (translated) |
| Sectors | `/fr/secteurs` | `/en/sectors` | ✅ OK |
| Virtual Receptionist | `/fr/receptionniste-virtuelle` | `/en/virtual-receptionist` | ✅ OK |
| Legal | `/fr/mentions-legales` | `/en/legal` | ✅ OK (both exist) |

**ISSUE:** `/fr/emission` and `/en/outbound` have different names but point to the same service. Similarly for `/fr/reception` vs `/en/inbound`. This could confuse users and SEO.

---

### 4. **NAVIGATION MENU - ALIGNED BUT INCOMPLETE** ⚠️

#### French Navigation (`lib/nav.ts`):
```
- Accueil → /fr
- Solutions → /fr/services
  - Appels Entrants → /fr/reception
  - Appels Sortants → /fr/emission
  - Agents IA Vocaux → /fr/agents-ia
  - Support Client → /fr/support
  - CRM & Listes → /fr/crm
- Tarifs → /fr/tarifs
- Secteurs → /fr/secteurs
- À Propos → /fr/a-propos
- Blog → /fr/blog
- Contact → /fr/contact
```

#### English Navigation:
```
- Home → /en
- Solutions → /en/services
  - Inbound Calls → /en/inbound
  - Outbound Calls → /en/outbound
  - AI Voice Agents → /en/ai-agents
  - Customer Support → /en/support
  - CRM & Lists → /en/crm
- Pricing → /en/pricing
- Sectors → /en/sectors
- About → /en/about
- Blog → /en/blog
- Contact → /en/contact
```

**ISSUE:** Navigation is aligned but the dropdown menus are missing "Sectors" in French services submenu. English services page has 6 services but nav only shows 5.

---

### 5. **HOMEPAGE SERVICES GRID - ALIGNED** ✅

Both homepages show 6 services:
- FR: Réception 24/7, Votre Équipe Vente, Agents IA Vocaux, Support Client, CRM & Listes, **Nos Tarifs**
- EN: Inbound Calls, Outbound Calls, AI Voice Agents, Client Support, CRM & Lists, **Our Pricing**

**NOTE:** Both have "Pricing/Tarifs" as the 6th box, which is good.

---

### 6. **OUTBOUND/EMISSION PAGE - DIFFERENT STRUCTURES** ⚠️

#### French (`/fr/emission`):
- 8 sections: Hero, Stats, Features, How It Works, Testimonials, FAQ, Additional Benefits, Final CTA
- **298 lines**

#### English (`/en/outbound`):
- 8 sections: Hero, Results Stats, Features, How It Works, Industries, Our Process, CTA, Why Choose Us
- **270 lines**
- **EXTRA SECTIONS:** Industries (Real Estate, Insurance, SaaS, Professional Services, Healthcare) and Our Process

**ISSUE:** English page has more detailed content with industry examples. French page has testimonials and FAQ, but no industry breakdown.

---

### 7. **LEGAL PAGES - ALL EXIST** ✅

| Page | FR Path | EN Path | Status |
|------|---------|---------|--------|
| Legal Notice | `/fr/mentions-legales` | `/en/legal` | ✅ Both exist |
| Privacy | `/fr/confidentialite` | `/en/privacy` | ✅ Both exist |
| Terms | `/fr/cgv` | `/en/terms` | ✅ Both exist |

---

### 8. **FORM SESSION CONSISTENCY** ⚠️

Both contact forms:
- ✅ Use CSRF tokens
- ✅ Sanitize inputs
- ✅ Fallback to mailto on API failure
- ✅ Same API endpoint: `https://app.smart-hotline.com/leads/contact.php`

**BUT:**
- FR form sends: name, email, phone, company, service, volume, message
- EN form sends: name, email, message (phone/company/service/volume hardcoded to empty string)

**ISSUE:** Backend may receive incomplete data from English form, affecting lead qualification.

---

## 📊 SUMMARY OF ISSUES

| Issue | Severity | Impact |
|-------|----------|--------|
| Contact forms different fields | 🔴 Critical | Lead quality inconsistency |
| FR Services missing 6th service | 🔴 Critical | Navigation incomplete |
| Outbound/Emission page structure different | 🟡 Medium | Content inconsistency |
| Page naming inconsistencies | 🟡 Medium | SEO confusion |
| Navigation dropdown incomplete | 🟡 Medium | User navigation |

---

## ✅ RECOMMENDED FIXES

### Priority 1 - CRITICAL (Fix First)

1. **Align Contact Forms**
   - Make English form match French form (7 fields)
   - Or create a shared component with language-aware labels
   - Ensure both send same data structure to backend

2. **Add Missing Service to FR Services Page**
   - Add "🏭 Expertise Sectorielle" box to `/fr/services`
   - Link to `/fr/secteurs`
   - Update navigation dropdown to include it

### Priority 2 - MEDIUM (Fix After)

3. **Standardize Outbound/Emission Pages**
   - Add "Industries" section to FR page
   - Or remove from EN page if not needed
   - Ensure both have same structure

4. **Consider URL Consistency**
   - Option A: Keep different names (cultural adaptation)
   - Option B: Use same slugs (`/fr/outbound`, `/en/outbound`)

5. **Update Navigation**
   - Add "Secteurs" to French services dropdown
   - Or add "Sectors" to English dropdown

---

## 🧪 TESTS TO RUN

```bash
# Test all pages return 200
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/fr/services/
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/en/services/
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/fr/contact/
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/en/contact/

# Check form submission
curl -X POST https://app.smart-hotline.com/leads/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","language":"fr"}'
```

---

## 📝 FILES TO MODIFY

### Critical Fixes:
1. `/root/projects/smart-hotline-nextjs/app/en/contact/page.tsx` - Add missing form fields
2. `/root/projects/smart-hotline-nextjs/app/fr/services/page.tsx` - Add 6th service box
3. `/root/projects/smart-hotline-nextjs/lib/nav.ts` - Update navigation dropdowns

### Medium Priority:
4. `/root/projects/smart-hotline-nextjs/app/fr/emission/page.tsx` - Add Industries section
5. `/root/projects/smart-hotline-nextjs/app/en/outbound/page.tsx` - Sync structure with FR

---

**Generated by:** GSD Debugger Agent  
**Next Action:** User must approve fixes before implementation
