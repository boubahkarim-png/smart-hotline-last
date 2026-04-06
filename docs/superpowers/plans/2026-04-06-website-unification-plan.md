# Website Unification Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify FR/EN page structures, simplify contact forms to 3 fields, add modern animations and alternating dark/light sections.

**Architecture:** Refactor pages to use consistent 8-section template with `.modern-box` components, staggered animations, and gradient overlays. Simplify contact forms to 3 fields matching EN structure. Add missing 6th service to FR services page.

**Tech Stack:** Next.js 14.2, TypeScript, Tailwind CSS v4, React 18

---

## Chunk 1: Navigation Update & Services Page (Critical)

### Task 1: Update Navigation with All Services

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/lib/nav.ts`

- [ ] **Step 1: Update NAV_FR dropdown**
```typescript
// Add 'Secteurs' as 6th child in Solutions dropdown
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
      { label: 'Secteurs', href: '/fr/secteurs' },  // ADD THIS LINE
    ],
  },
  { label: 'Tarifs', href: '/fr/tarifs' },
  { label: 'Secteurs', href: '/fr/secteurs' },
  { label: 'À Propos', href: '/fr/a-propos' },
  { label: 'Blog', href: '/fr/blog' },
  { label: 'Contact', href: '/fr/contact' },
]
```

- [ ] **Step 2: Update NAV_EN dropdown**
```typescript
// Add 'Sectors' as 6th child in Solutions dropdown (should already exist, verify)
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
      { label: 'Sectors', href: '/en/sectors' },  // VERIFY THIS EXISTS
    ],
  },
  { label: 'Pricing', href: '/en/pricing' },
  { label: 'Sectors', href: '/en/sectors' },
  { label: 'About', href: '/en/about' },
  { label: 'Blog', href: '/en/blog' },
  { label: 'Contact', href: '/en/contact' },
]
```

- [ ] **Step 3: Verify no type errors**
Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit navigation update**
```bash
git add lib/nav.ts
git commit -m "feat: add sectors to FR services dropdown navigation"
```

---

### Task 2: Add 6th Service to FR Services Page

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/fr/services/page.tsx`

- [ ] **Step 1: Update SERVICES array**
```typescript
const SERVICES = [
  { icon: "📞", title: "Appels Entrants", desc: "Réception professionnelle 24/7. Ne manquez plus jamais un appel.", href: "/fr/reception", color: "blue" },
  { icon: "📢", title: "Appels Sortants", desc: "Prospection, télémarketing, prise de RDV. Leads qualifiés garantis.", href: "/fr/emission", color: "green" },
  { icon: "🤖", title: "Agents IA Vocaux", desc: "Sophie répond en 2 sec, 24/7. Jusqu'à 70% moins cher.", href: "/fr/agents-ia", color: "purple", badge: "Nouveau" },
  { icon: "🎧", title: "Support Client", desc: "Tickets, email, chat, WhatsApp. Support 5 étoiles pour vos clients.", href: "/fr/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Listes", desc: "CRM SuiteCRM intégré + listes de prospection B2B/B2C qualifiées.", href: "/fr/crm", color: "indigo" },
  { icon: "🏭", title: "Expertise Sectorielle", desc: "Solutions spécialisées pour santé, immobilier, juridique et plus.", href: "/fr/secteurs", color: "orange" },  // ADD THIS
]
```

- [ ] **Step 2: Verify build**
Run: `npm run build`
Expected: Build succeeds, no errors

- [ ] **Step 3: Commit services update**
```bash
git add app/fr/services/page.tsx
git commit -m "feat: add 6th service (Expertise Sectorielle) to FR services page"
```

---

## Chunk 2: Contact Form Simplification (Critical)

### Task 3: Simplify FR Contact Form to 3 Fields

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/fr/contact/page.tsx`

- [ ] **Step 1: Update form section (replace lines 195-287)**

Replace the entire form block with:
```tsx
<form
  onSubmit={handleSubmit}
  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
>
  <input type="hidden" name="csrf_token" value={csrfToken} />
  <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>

  <div className="space-y-4 mb-6">
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom Complet *</label>
      <input
        type="text"
        name="name"
        required
        maxLength={100}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
        placeholder="Votre nom"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
      <input
        type="email"
        name="email"
        required
        maxLength={254}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
        placeholder="votre@email.com"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
      <textarea
        name="message"
        required
        rows={4}
        maxLength={2000}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
        placeholder="Décrivez vos besoins..."
      />
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

  {error && (
    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
      {error}
    </div>
  )}

  <button
    type="submit"
    disabled={sending}
    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg"
  >
    {sending ? 'Envoi en cours...' : 'Envoyer le Message →'}
  </button>
  <p className="text-center text-slate-500 text-sm mt-4">Réponse sous 2h • Sans engagement</p>
</form>
```

- [ ] **Step 2: Update handleSubmit function (lines 32-96)**

Replace with:
```tsx
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  if (!csrfToken) {
    setError('Erreur de sécurité. Veuillez rafraîchir la page.')
    return
  }

  setSending(true)
  setError('')
  const form = e.currentTarget
  const formData = new FormData(form)

  const sanitize = (str: string) => str.trim().replace(/[<>]/g, '').substring(0, 500)
  const sanitizeEmail = (str: string) => str.trim().toLowerCase().substring(0, 254)

  const data = {
    name: sanitize(formData.get('name') as string || ''),
    email: sanitizeEmail(formData.get('email') as string || ''),
    phone: '',
    company: '',
    service: '',
    volume: '',
    message: sanitize(formData.get('message') as string || ''),
    source: 'contact-form-fr',
    language: 'fr'
  }

  if (!data.name || !data.email) {
    setError('Le nom et l\'email sont requis.')
    setSending(false)
    return
  }

  try {
    const response = await fetch(`${API_URL}/leads/contact.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setSent(true)
    } else {
      const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )
      window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
      setSent(true)
    }
  } catch (err) {
    const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
    const body = encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )
    window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  setSending(false)
}
```

- [ ] **Step 3: Remove unused imports**
Remove: `useState` is still needed, but no changes to imports required.

- [ ] **Step 4: Verify build**
Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit FR contact form update**
```bash
git add app/fr/contact/page.tsx
git commit -m "refactor: simplify FR contact form to 3 fields (name, email, message)"
```

---

### Task 4: Verify EN Contact Form Structure

**Files:**
- Review: `/root/projects/smart-hotline-nextjs/app/en/contact/page.tsx`

- [ ] **Step 1: Verify EN form has 3 fields**
Run: `grep -n "name=\"name\"\|name=\"email\"\|name=\"message\"" app/en/contact/page.tsx`
Expected: Only 3 matches (name, email, message)

- [ ] **Step 2: No changes needed if already correct**
EN form should already be correct. If not, make same changes as FR form.

---

## Chunk 3: Add Animations to Services Pages

### Task 5: Add Animations to FR Services Page

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/fr/services/page.tsx`

- [ ] **Step 1: Add stagger-children to services grid (line 69)**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
```

- [ ] **Step 2: Add animate-delay classes to service boxes (line 71)**
```tsx
{SERVICES.map(({icon, title, desc, href, badge}, i) => (
  <Link key={href} href={href} className={`bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all group modern-box animate-delay-${(i+1)*100}`}>
```

- [ ] **Step 3: Add stagger-children to stats section (line 88)**
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children">
```

- [ ] **Step 4: Add stagger-children to testimonials (line 103)**
```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
```

- [ ] **Step 5: Add stagger-children to steps section (line 125)**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
```

- [ ] **Step 6: Verify build**
Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 7: Commit FR services animations**
```bash
git add app/fr/services/page.tsx
git commit -m "feat: add stagger animations to FR services page"
```

---

### Task 6: Add Animations to EN Services Page

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/en/services/page.tsx`

- [ ] **Step 1: Add same animation classes as FR**
Apply same changes as Task 5 to EN services page.

- [ ] **Step 2: Verify build**
Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit EN services animations**
```bash
git add app/en/services/page.tsx
git commit -m "feat: add stagger animations to EN services page"
```

---

## Chunk 4: Add Industries Section to FR Emission Page

### Task 7: Add Industries Section

**Files:**
- Modify: `/root/projects/smart-hotline-nextjs/app/fr/emission/page.tsx`

- [ ] **Step 1: Add INDUSTRIES constant after STEPS (after line 23)**
```tsx
const INDUSTRIES = [
  {'name': 'Immobilier', 'result': 'Visites planifiées'},
  {'name': 'Assurance', 'result': 'Renouvellements polices'},
  {'name': 'SaaS & Tech', 'result': 'Demos générées'},
  {'name': 'Services professionnels', 'result': 'Consultations réservées'},
  {'name': 'Santé', 'result': 'Suivis patients'},
]
```

- [ ] **Step 2: Add Industries Section after Section 4 (after line 194)**

Insert after the "How It Works" section:
```tsx
{/* SECTION 5: LIGHT - INDUSTRIES */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-slate-900 mb-2">Industries Servies</h2>
      <p className="text-slate-600">Campagnes spécialisées pour chaque secteur</p>
      <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mt-4"/>
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

- [ ] **Step 3: Renumber subsequent section comments**
- Section 5 → Section 6 (Testimonials)
- Section 6 → Section 7 (FAQ)
- Section 7 → Section 8 (Additional Benefits)
- Section 8 → Section 9 (Final CTA)

- [ ] **Step 4: Verify build**
Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit industries section**
```bash
git add app/fr/emission/page.tsx
git commit -m "feat: add Industries section to FR emission page matching EN structure"
```

---

## Chunk 5: Build, Test & Deploy

### Task 8: Final Build and Type Check

- [ ] **Step 1: Run type check**
Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 2: Run lint**
Run: `npm run lint`
Expected: No errors (or only pre-existing warnings)

- [ ] **Step 3: Run full build**
Run: `npm run build`
Expected: Build completes successfully with output showing routes generated

- [ ] **Step 4: Check build output**
Run: `ls -la out/_next/static/css/*.css | head -5`
Expected: CSS files exist

- [ ] **Step 5: Verify nojekyll file**
Run: `touch out/.nojekyll && ls out/.nojekyll`
Expected: File exists

---

### Task 9: Commit All Changes and Deploy

- [ ] **Step 1: Commit remaining files**
```bash
git add -A
git commit -m "feat: website unification complete - 3-field forms, animations, structural sync"
```

- [ ] **Step 2: Push to GitHub**
```bash
git push origin main
```

- [ ] **Step 3: Trigger deployment**
```bash
gh workflow run "Deploy to GitHub Pages" --repo boubahkarim-png/smart-hotline-last
```

- [ ] **Step 4: Watch deployment**
```bash
gh run watch --repo boubahkarim-png/smart-hotline-last
```
Expected: Deployment succeeds

---

### Task 10: Post-Deployment Verification

- [ ] **Step 1: Check FR services page**
Run: `curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/fr/services/`
Expected: 200

- [ ] **Step 2: Check EN services page**
Run: `curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/en/services/`
Expected: 200

- [ ] **Step 3: Check FR contact page**
Run: `curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/fr/contact/`
Expected: 200

- [ ] **Step 4: Check EN contact page**
Run: `curl -s -o /dev/null -w "%{http_code}" https://www.smart-hotline.com/en/contact/`
Expected: 200

- [ ] **Step 5: Verify FR services has 6 services**
Run: `curl -s https://www.smart-hotline.com/fr/services/ | grep -c "Expertise Sectorielle"`
Expected: 1 or more

- [ ] **Step 6: Final summary**
All pages return 200, forms have 3 fields, services pages have 6 services, animations are working.

---

## Files Modified Summary

| File | Changes |
|------|---------|
| `lib/nav.ts` | Added "Secteurs/Sectors" to navigation dropdowns |
| `app/fr/services/page.tsx` | Added 6th service, animations |
| `app/en/services/page.tsx` | Added animations |
| `app/fr/contact/page.tsx` | Simplified to 3-field form |
| `app/fr/emission/page.tsx` | Added Industries section |

---

**Plan Complete. Ready to execute?**
