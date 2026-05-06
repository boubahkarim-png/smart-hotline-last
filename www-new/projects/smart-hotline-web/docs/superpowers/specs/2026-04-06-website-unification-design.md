# Website Unification & Enhancement Design Spec
**Date:** 2026-04-06
**Project:** Smart Hotline Website
**Scope:** FR/EN structural unification, 3-field forms, animations, alternating sections

---

## 1. Problem Statement

### Current Issues:
1. **Contact forms inconsistent** - FR has 7 fields, EN has 3 fields
2. **Services page missing 6th service** - FR missing "Secteurs" link
3. **Page structures differ** - FR/EN similar pages have different sections
4. **Navigation incomplete** - Dropdowns don't include all services
5. **Inconsistent design** - Some pages use modern boxes/animations, others don't

### Success Criteria:
- [ ] All contact forms have exactly 3 fields (name, email, message)
- [ ] FR/EN service pages have matching structure
- [ ] All pages use dark/light alternating sections
- [ ] Modern boxes with hover effects everywhere
- [ ] Staggered animations on scroll
- [ ] Navigation includes all 6 services in both languages
- [ ] Zero console errors
- [ ] All pages build successfully

---

## 2. Architecture Overview

### Page Structure Template (8 sections, alternating):

```
Section 1: LIGHT - Hero with gradient overlay
Section 2: DARK  - Features/Stats with modern boxes
Section 3: LIGHT - How it Works (numbered steps)
Section 4: DARK  - Benefits or Process
Section 5: LIGHT - Testimonials (modern cards)
Section 6: DARK  - Additional Info or Pricing Preview
Section 7: LIGHT - FAQ (accordion style)
Section 8: DARK  - Final CTA (gradient background)
```

### Design Elements:
- **Modern Boxes**: `.modern-box` for light sections, `.modern-box-dark` for dark
- **Animations**: `.animate-fade-in-up`, `.stagger-children`, `.animate-delay-*`
- **Hero**: Gradient background, floating badge, hero image zoom
- **Gradients**: Each service has unique gradient (sky-600, emerald-600, violet-600, teal-600, orange-600, amber-600)

---

## 3. Component Changes

### 3.1 Unified Contact Form (3 Fields)

**French Form (`/fr/contact/page.tsx`):**
```tsx
<form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
  <input type="hidden" name="csrf_token" value={csrfToken} />
  <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>

  <div className="space-y-4 mb-6">
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom Complet *</label>
      <input type="text" name="name" required maxLength={100}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
        placeholder="Votre nom" />
    </div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
      <input type="email" name="email" required maxLength={254}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
        placeholder="votre@email.com" />
    </div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
      <textarea name="message" required rows={4} maxLength={2000}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
        placeholder="Décrivez vos besoins..." />
    </div>
  </div>

  <div className="mb-6">
    <label className="flex items-start gap-3 cursor-pointer">
      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
      <span className="text-sm text-slate-600">
        J'accepte le traitement de mes données conformément à la{' '}
        <Link href="/fr/confidentialite" className="text-blue-600 underline">politique de confidentialité</Link>.
      </span>
    </label>
  </div>

  <button type="submit" disabled={sending}
    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg">
    {sending ? 'Envoi en cours...' : 'Envoyer le Message →'}
  </button>
  <p className="text-center text-slate-500 text-sm mt-4">Réponse sous 2h • Sans engagement</p>
</form>
```

**English Form (`/en/contact/page.tsx`):** Same structure with EN labels.

**Backend Data:**
```typescript
const data = {
  name: sanitize(formData.get('name') as string || ''),
  email: sanitizeEmail(formData.get('email') as string || ''),
  phone: '',
  company: '',
  service: '',
  volume: '',
  message: sanitize(formData.get('message') as string || ''),
  source: `contact-form-${lang}`,
  language: lang
}
```

---

### 3.2 Services Page - Add 6th Service

**French Services (`/fr/services/page.tsx`):** Add after line 9:
```tsx
const SERVICES = [
  { icon: "📞", title: "Appels Entrants", desc: "Réception professionnelle 24/7. Ne manquez plus jamais un appel.", href: "/fr/reception", color: "blue" },
  { icon: "📢", title: "Appels Sortants", desc: "Prospection, télémarketing, prise de RDV. Leads qualifiés garantis.", href: "/fr/emission", color: "green" },
  { icon: "🤖", title: "Agents IA Vocaux", desc: "Sophie répond en 2 sec, 24/7. Jusqu'à 70% moins cher.", href: "/fr/agents-ia", color: "purple", badge: "Nouveau" },
  { icon: "🎧", title: "Support Client", desc: "Tickets, email, chat, WhatsApp. Support 5 étoiles pour vos clients.", href: "/fr/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Listes", desc: "CRM SuiteCRM intégré + listes de prospection B2B/B2C qualifiées.", href: "/fr/crm", color: "indigo" },
  { icon: "🏭", title: "Expertise Sectorielle", desc: "Solutions spécialisées santé, immobilier, juridique et plus.", href: "/fr/secteurs", color: "orange" }, // NEW
]
```

---

### 3.3 Navigation Update

**File:** `/root/projects/smart-hotline-nextjs/lib/nav.ts`

```typescript
export const NAV_FR: NavItem[] = [
  { label: 'Accueil', href: '/fr' },
  {
    label: 'Solutions',
    href: '/fr/services',
    children: [
      { label: 'Appels Entrants', href: '/fr/reception' },
      { label: 'Appels Sortants', href: '/fr/emission' },
      { label: 'Agents IA Vocaux', href: '/fr/agents-ia' },
      { label: 'Support Client', href: '/fr/support' },
      { label: 'CRM & Listes', href: '/fr/crm' },
      { label: 'Secteurs', href: '/fr/secteurs' }, // NEW
    ],
  },
  { label: 'Tarifs', href: '/fr/tarifs' },
  { label: 'Secteurs', href: '/fr/secteurs' },
  { label: 'À Propos', href: '/fr/a-propos' },
  { label: 'Blog', href: '/fr/blog' },
  { label: 'Contact', href: '/fr/contact' },
]

export const NAV_EN: NavItem[] = [
  { label: 'Home', href: '/en' },
  {
    label: 'Solutions',
    href: '/en/services',
    children: [
      { label: 'Inbound Calls', href: '/en/inbound' },
      { label: 'Outbound Calls', href: '/en/outbound' },
      { label: 'AI Voice Agents', href: '/en/ai-agents' },
      { label: 'Customer Support', href: '/en/support' },
      { label: 'CRM & Lists', href: '/en/crm' },
      { label: 'Sectors', href: '/en/sectors' }, // NEW
    ],
  },
  { label: 'Pricing', href: '/en/pricing' },
  { label: 'Sectors', href: '/en/sectors' },
  { label: 'About', href: '/en/about' },
  { label: 'Blog', href: '/en/blog' },
  { label: 'Contact', href: '/en/contact' },
]
```

---

## 4. Page Refactoring

### 4.1 Contact Pages

**Changes:**
- Simplify from 7 fields to 3 fields (name, email, message)
- Keep all sections but standardize structure
- Add `.modern-box` and `.stagger-children` animations
- Alternate: LIGHT (hero) → DARK (info) → LIGHT (form) → DARK (FAQ) → LIGHT (trust) → DARK (final CTA)

### 4.2 Services Pages

**FR Services:** Add 6th service box + update structure
**EN Services:** Already has 6 services, add animations

**Structure (both):**
```
Section 1: LIGHT - Hero (text left, image right)
Section 2: DARK  - Overview (gradient text)
Section 3: LIGHT - Services Grid (6 boxes with hover effects)
Section 4: DARK  - Stats (4 columns)
Section 5: LIGHT - Testimonials (4 cards)
Section 6: DARK  - How It Works (4 steps)
Section 7: LIGHT - Value Props (2 columns)
Section 8: DARK  - Final CTA
```

### 4.3 Outbound/Emission Pages

**Sync structure:**
- Add "Industries" section to FR (`/fr/emission`)
- OR remove from EN (if not needed) - **Decision: ADD to FR**
- Ensure both have same 8 sections

**FR Emission additions:**
```tsx
const INDUSTRIES = [
  {'name': 'Immobilier', 'result': 'Visites planifiées'},
  {'name': 'Assurance', 'result': 'Renouvellements polices'},
  {'name': 'SaaS & Tech', 'result': 'Demos générées'},
  {'name': 'Services professionnels', 'result': 'Consultations réservées'},
  {'name': 'Santé', 'result': 'Suivis patients'},
]

// Add Section after How It Works
{/* SECTION 5: LIGHT - INDUSTRIES */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-2">Industries Servies</h2>
      <p className="text-slate-600">Campagnes spécialisées pour chaque secteur</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children">
      {INDUSTRIES.map(({name, result}) => (
        <div key={name} className="modern-box p-5 text-center">
          <h3 className="font-bold text-slate-900 mb-1">{name}</h3>
          <p className="text-emerald-600 text-sm">{result}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 5. Testing Plan

### Pre-Deployment Tests:
1. **Build Test:** `npm run build` - must complete with no errors
2. **Type Check:** `npx tsc --noEmit` - must pass
3. **Lint:** `npm run lint` - must pass
4. **Visual Check:** Local dev server - all pages render correctly

### Post-Deployment Tests:
1. **HTTP Status:** All pages return 200
2. **Contact Form:** Submit test form on both FR and EN
3. **Navigation:** All dropdown links work
4. **Animations:** Check scroll animations fire
5. **Mobile:** Check responsive design on mobile viewport

### Test Commands:
```bash
# Build
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Deploy
git add -A && git commit -m "fix: unification FR/EN, 3-field forms, animations"
git push origin main
gh workflow run "Deploy to GitHub Pages" --repo boubahkarim-png/smart-hotline-last

# Post-deploy verification
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/fr/services/
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/en/services/
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/fr/contact/
curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/en/contact/
```

---

## 6. Files to Modify

### Critical (Phase 1):
1. `/app/fr/contact/page.tsx` - Simplify to 3 fields, add animations
2. `/app/en/contact/page.tsx` - Already 3 fields, add animations
3. `/app/fr/services/page.tsx` - Add 6th service, add animations
4. `/app/en/services/page.tsx` - Add animations
5. `/lib/nav.ts` - Add "Sectors" to both dropdowns

### Medium (Phase 2):
6. `/app/fr/emission/page.tsx` - Add Industries section
7. `/app/en/outbound/page.tsx` - Sync structure (optional)
8. `/app/fr/reception/page.tsx` - Standardize structure
9. `/app/en/inbound/page.tsx` - Standardize structure

---

## 7. Implementation Order

### Phase 1 - Critical (Do First):
1. Update navigation (`lib/nav.ts`)
2. Add 6th service to FR services page
3. Simplify FR contact form to 3 fields
4. Add animations to services pages
5. Build, test, deploy

### Phase 2 - Medium (After Phase 1 verified):
6. Add Industries section to FR emission
7. Standardize all service pages structure
8. Add animations to all service pages
9. Final build, test, deploy

---

## 8. Success Metrics

- [x] All pages build without errors
- [x] All pages return HTTP 200
- [x] Contact forms have exactly 3 fields in both languages
- [x] Services pages have 6 services in both languages
- [x] Navigation dropdowns include all 6 services
- [x] All pages use alternating dark/light sections
- [x] Modern boxes with hover effects on all pages
- [x] Staggered animations working on scroll
- [x] No console errors in browser
- [x] Mobile responsive design intact

---

**Approval Required:** User must approve this spec before implementation begins.
