# SuiteCRM Integration with Website Forms

## Overview

Lead capture from Smart Hotline website forms → SuiteCRM → Email follow-up via Mautic

---

## FLOW DIAGRAM

```
Website Form (Next.js)
       ↓
   SuiteCRMForm Component
       ↓
   POST /api/leads
       ↓
   ┌──────────────────────────────────────┐
   │  1. Insert to SuiteCRM (leads table) │
   │  2. Sync to Mautic (contacts)        │
   │  3. Trigger email sequence           │
   └──────────────────────────────────────┘
       ↓
   SuiteCRM Dashboard
   http://194.163.187.192:8090
```

---

## FILES CREATED

### 1. Form Component
`/components/SuiteCRMForm.tsx`

Features:
- ✅ Bilingual (FR/EN)
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error handling
- ✅ Modern UI with Tailwind

### 2. API Endpoint
`/pages/api/leads.ts`

Features:
- ✅ SuiteCRM database insertion
- ✅ Mautic sync for email follow-up
- ✅ Email fallback notification
- ✅ Error handling

---

## USAGE IN PAGES

### Contact Page Example

```tsx
// /app/fr/contact/page.tsx

import SuiteCRMForm from '@/components/SuiteCRMForm'

export default function ContactPage() {
  return (
    <main className="py-16">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">
          Demandez une démo gratuite
        </h1>
        <p className="text-slate-600 mb-8">
          Remplissez le formulaire et nous vous recontacterons dans les 24h.
        </p>
        <SuiteCRMForm 
          lang="fr" 
          source="contact-page"
        />
      </div>
    </main>
  )
}
```

### Embed in Existing Page

```tsx
// Add to any page section
<section className="bg-blue-50 py-16">
  <div className="max-w-lg mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-8">
      Parlons de votre projet
    </h2>
    <SuiteCRMForm 
      lang="fr" 
      source="homepage-cta"
    />
  </div>
</section>
```

---

## SUITECRM CONFIGURATION

### Lead Sources to Create

1. Login: http://194.163.187.192:8090
2. Go to: Admin → Dropdown Editor → Lead Source
3. Add:
   - `website-form` - Website Contact Form
   - `popup` - Exit Intent Popup
   - `landing-page` - Landing Pages

### Lead Status Flow

```
New → Assigned → Contacted → Qualified → Proposal → Closed Won
                ↓
            Disqualified (if not interested)
```

### Email Notifications

Setup in SuiteCRM:
1. Admin → Email Settings
2. Configure SMTP (use same as Mautic)
3. Create Workflow:
   - Trigger: New Lead Created
   - Action: Send Email to assigned user
   - Template: "New Lead from Website"

---

## MAUTIC SYNC

### API Credentials

```bash
# OAuth Client (already configured)
Client ID: 6_65b3dkcctwsog0wgcgkk48g48k0wgkwg0k4cgs4wg0gsg0g4g4
Client Secret: 23wigawscnmssg4cw4g800gkccwwk0gcoowwog04w4k0wg4c0g
```

### Mautic Tags Added

- `website-form` - Source tracking
- `lead` - General classification
- `demo-request` - Intent

### Email Sequence Triggered

1. Immediate: Thank you email
2. Day 1: Follow-up with resources
3. Day 3: Check-in
4. Day 7: Offer demo booking

---

## DATABASE SCHEMA

### SuiteCRM leads table (key fields)

```sql
CREATE TABLE leads (
  id CHAR(36) PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email1 VARCHAR(255),
  phone_work VARCHAR(255),
  account_name VARCHAR(255),  -- Company
  description TEXT,            -- Message
  lead_source VARCHAR(255),    -- 'website-form'
  status VARCHAR(100),         -- 'New'
  assigned_user_id CHAR(36),   -- Owner
  date_entered DATETIME,
  date_modified DATETIME,
  deleted TINYINT(1)
);
```

---

## TESTING

### Test the Integration

```bash
# Test form submission
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1 514 555-1234",
    "company": "Test Company",
    "message": "This is a test",
    "source": "test"
  }'

# Check SuiteCRM
curl -s http://194.163.187.192:8090 | head -20

# Check Mautic
curl -s http://194.163.187.192:8084/api/contacts
```

---

## NEXT STEPS

1. [ ] Create `/app/fr/contact/page.tsx` with form
2. [ ] Create `/app/en/contact/page.tsx` with form
3. [ ] Add popup version for exit intent
4. [ ] Configure SuiteCRM workflows
5. [ ] Set up email templates
6. [ ] Test end-to-end flow

---

## ENVIRONMENT VARIABLES NEEDED

Add to `.env.local`:

```bash
SUITECRM_DB_USER=root
SUITECRM_DB_PASSWORD=your_password
MAUTIC_API_KEY=your_api_key
RESEND_API_KEY=your_resend_key  # For email fallback
```

---

*Integration ready: 2026-03-25*
