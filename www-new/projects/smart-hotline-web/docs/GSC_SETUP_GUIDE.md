# Google Search Console Setup Guide
## Smart Hotline (https://www.smart-hotline.com)

**Last Updated:** April 2026  
**Website:** https://www.smart-hotline.com  
**Stack:** Next.js 14.2 (Static Export) + GitHub Pages

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [GSC Verification Methods](#gsc-verification-methods)
4. [Step-by-Step Setup](#step-by-step-setup)
5. [Sitemap Submission](#sitemap-submission)
6. [Request Indexing](#request-indexing)
7. [Google Analytics 4 Setup](#google-analytics-4-setup)
8. [Link GA4 to GSC](#link-ga4-to-gsc)
9. [Email Alerts Setup](#email-alerts-setup)
10. [Troubleshooting](#troubleshooting)
11. [Quick Reference](#quick-reference)

---

## Overview

Google Search Console (GSC) is a free tool that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results. This guide covers complete setup for Smart Hotline.

### What You'll Achieve:
- ✅ Property verification in GSC
- ✅ Sitemap submission for automatic indexing
- ✅ Manual indexing requests for priority pages
- ✅ GA4 integration for traffic analytics
- ✅ Email alerts for critical issues

---

## Prerequisites

Before starting, ensure you have:

| Requirement | Details |
|-------------|---------|
| Google Account | Any Gmail or Google Workspace account |
| Domain Access | DNS control for smart-hotline.com (if using DNS verification) |
| GitHub Access | Write access to the repository (if using HTML file method) |
| Code Access | Ability to modify Next.js layout.tsx (if using meta tag method) |

---

## GSC Verification Methods

### Comparison Table

| Method | Best For | Difficulty | Persistence |
|--------|----------|------------|-------------|
| **DNS TXT Record** | Custom domains | ⭐⭐ Medium | ✅ Permanent |
| **HTML File Upload** | GitHub Pages | ⭐ Easy | ✅ Permanent |
| **HTML Meta Tag** | Next.js apps | ⭐⭐ Medium | ✅ Permanent |

### Recommended Method for Smart Hotline

**Primary: DNS TXT Record** - Best for custom domain (smart-hotline.com)  
**Alternative: HTML File Upload** - Good for GitHub Pages static export  
**Fallback: HTML Meta Tag** - Works but requires code changes

---

## Step-by-Step Setup

### Step 1: Access Google Search Console

1. Open browser and go to: **https://search.google.com/search-console**
2. Sign in with your Google account
3. Click **"Start now"** (if first time) or **"Add property"** (if existing user)

### Step 2: Add Property

#### Option A: Domain Property (Recommended)

1. Click **"Add property"** (left sidebar, top)
2. Select **"Domain"** radio button
3. Enter domain: `smart-hotline.com`
4. Click **"Continue"**

> **Note:** Domain property covers all subdomains (www, non-www, http, https)

#### Option B: URL Prefix Property

1. Click **"Add property"**
2. Select **"URL prefix"** radio button
3. Enter URL: `https://www.smart-hotline.com`
4. Click **"Continue"**

### Step 3: Verify Ownership

#### Method 1: DNS TXT Record (Recommended for smart-hotline.com)

**Step 3.1:** Google will display DNS verification instructions

**Step 3.2:** Copy the TXT record value (looks like: `google-site-verification=XXXXXXXXXXXX`)

**Step 3.3:** Log into your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.)

**Step 3.4:** Add DNS record:

```
Type:   TXT
Host:   @ (or smart-hotline.com)
Value:  google-site-verification=XXXXXXXXXXXXXXX
TTL:    3600 (or default)
```

**Step 3.5:** Save DNS record

**Step 3.6:** Return to GSC and click **"Verify"**

> **Note:** DNS propagation can take 5 minutes to 48 hours. If verification fails, wait and retry.

#### Method 2: HTML File Upload (For GitHub Pages)

**Step 3.1:** Download the verification file (e.g., `google1234abcd5678efgh.html`)

**Step 3.2:** Place file in your Next.js `public/` folder:
```
/root/projects/smart-hotline-nextjs/public/google1234abcd5678efgh.html
```

**Step 3.3:** Build and deploy:
```bash
cd /root/projects/smart-hotline-nextjs
npm run build
# Deploy to GitHub Pages
```

**Step 3.4:** Verify file is accessible: `https://www.smart-hotline.com/google1234abcd5678efgh.html`

**Step 3.5:** Return to GSC and click **"Verify"**

#### Method 3: HTML Meta Tag (For Next.js)

**Step 3.1:** Copy the meta tag from GSC:
```html
<meta name="google-site-verification" content="XXXXXXXXXXXXXXX" />
```

**Step 3.2:** Add to Next.js `app/layout.tsx`:

```tsx
// /root/projects/smart-hotline-nextjs/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Smart Hotline | Votre Partenaire Téléphonique 24/7",
  description: "Partenaire téléphonique pour PME...",
  verification: {
    google: "XXXXXXXXXXXXXXX",  // <-- Add this line
  },
}

// ... rest of the file
```

**Alternative (head section):**
```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="XXXXXXXXXXXXXXX" />
        {/* ... existing scripts ... */}
      </head>
      <body>
        {/* ... */}
      </body>
    </html>
  )
}
```

**Step 3.3:** Build and deploy:
```bash
cd /root/projects/smart-hotline-nextjs
npm run build
# Deploy
```

**Step 3.4:** Return to GSC and click **"Verify"**

### Step 4: Confirm Verification

1. After successful verification, you'll see: **"Ownership verified"**
2. Click **"Go to Property"** to access the dashboard
3. Data will start populating within 24-48 hours

---

## Sitemap Submission

### What is a Sitemap?

A sitemap is an XML file listing all important URLs on your website, helping Google discover and index your pages.

### Step 1: Ensure Sitemap Exists

Your sitemap should be accessible at:
- **https://www.smart-hotline.com/sitemap.xml**

Verify it works:
```bash
curl -I https://www.smart-hotline.com/sitemap.xml
```

### Step 2: Submit Sitemap to GSC

1. In GSC dashboard, click **"Sitemaps"** (left sidebar)
2. Enter sitemap URL: `sitemap.xml` (relative to domain)
3. Click **"Submit"**

### Step 3: Verify Sitemap Status

1. Wait 5-10 minutes after submission
2. Check status shows **"Success"**
3. View **"Discovered pages"** count

### Sitemap URLs to Include

Your `sitemap.xml` should reference these priority pages:

| URL | Priority | Change Frequency |
|-----|----------|------------------|
| `/fr/` | 1.0 | daily |
| `/en/` | 1.0 | daily |
| `/fr/agents-ia/` | 0.9 | weekly |
| `/en/ai-agents/` | 0.9 | weekly |
| `/fr/reception/` | 0.9 | weekly |
| `/fr/receptionniste-virtuelle/` | 0.8 | weekly |
| `/en/virtual-receptionist/` | 0.8 | weekly |

---

## Request Indexing

### When to Use Manual Indexing

- New pages launched
- Critical updates to existing pages
- Pages not appearing in index after 7+ days

### Step 1: Access URL Inspection Tool

1. In GSC, use the search bar at top
2. Enter full URL: `https://www.smart-hotline.com/fr/`
3. Press **Enter**

### Step 2: Request Indexing

1. Click **"Request indexing"** button
2. Wait for confirmation message
3. Google will queue the page for crawling

### Step 3: Repeat for Priority Pages

Request indexing for each priority page:

```
https://www.smart-hotline.com/fr/
https://www.smart-hotline.com/en/
https://www.smart-hotline.com/fr/agents-ia/
https://www.smart-hotline.com/en/ai-agents/
https://www.smart-hotline.com/fr/reception/
https://www.smart-hotline.com/fr/receptionniste-virtuelle/
https://www.smart-hotline.com/en/virtual-receptionist/
```

> **Rate Limit:** Google limits indexing requests (10-20 per day). Space out requests if you have many pages.

### Bulk Indexing Tips

For multiple pages:
1. Use sitemap submission (preferred)
2. Link new pages from existing indexed pages
3. Share sitemap URL in robots.txt

---

## Google Analytics 4 Setup

### Create GA4 Property

**Step 1:** Go to Google Analytics: **https://analytics.google.com/**

**Step 2:** Create new property:
1. Click **"Create"** → **"Property"**
2. Enter property name: `Smart Hotline`
3. Select reporting time zone: `(GMT-05:00) Eastern Time`
4. Select currency: `Canadian Dollar (CAD $)`
5. Click **"Next"**

**Step 3:** Business information:
1. Industry category: `Business and Industrial` or `Professional Services`
2. Business size: `Small`
3. Select how you'll use Analytics (check all that apply)
4. Click **"Create"**

**Step 4:** Accept terms of service

### Create Data Stream

**Step 1:** Select platform:
- Click **"Web"**

**Step 2:** Configure stream:
1. Website URL: `https://www.smart-hotline.com`
2. Stream name: `Smart Hotline Website`
3. Enhanced measurement: **Enable** (recommended)
4. Click **"Create stream"**

**Step 3:** Copy Measurement ID:
- Format: `G-XXXXXXXXXX`
- Save this ID for next step

### Add GA4 to Next.js

#### Option 1: Using `next/script` (Recommended)

Edit `app/layout.tsx`:

```tsx
// /root/projects/smart-hotline-nextjs/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your ID

  return (
    <html lang="fr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* ... rest of head ... */}
      </head>
      <body>
        {/* ... body content ... */}
      </body>
    </html>
  )
}
```

#### Option 2: Using Environment Variable

**Step 1:** Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Step 2:** Update `layout.tsx`:
```tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="fr">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Verify GA4 Installation

**Step 1:** Install Google Analytics Debugger (Chrome extension)

**Step 2:** Visit your site with debugger enabled

**Step 3:** Check for tracking events in browser console

**Step 4:** In GA4, go to **"Reports"** → **"Realtime"** - you should see active users

---

## Link GA4 to GSC

### Benefits of Linking

- See search query data in GA4
- View landing page performance in GSC
- Access combined SEO + analytics reports

### Step 1: Access GSC Settings

1. In GA4, go to **"Admin"** (bottom left gear icon)
2. Under **"Property"** column, click **"Search Console Links"**

### Step 2: Link Property

1. Click **"Link"** button
2. Select the GSC property: `smart-hotline.com`
3. Click **"Continue"**
4. Click **"Submit"**

### Step 3: Confirm Link

1. Wait for confirmation
2. Status should show: **"Linked"**

### Step 4: View Combined Reports

1. In GA4, go to **"Reports"** → **"Acquisition"** → **"Search Console"**
2. Reports available:
   - **Queries:** Search terms driving traffic
   - **Landing pages:** Entry points from search
   - **Countries:** Geographic distribution
   - **Devices:** Desktop/mobile/tablet

---

## Email Alerts Setup

### Types of Alerts

| Alert Type | Frequency | Description |
|------------|-----------|-------------|
| Critical issues | Immediate | Site downtime, malware, hacking |
| Enhancement suggestions | Weekly | Optimization opportunities |
| Monthly digest | Monthly | Summary of performance |

### Enable Email Notifications

**Step 1:** Access settings
1. In GSC, click **"Settings"** (gear icon, bottom left)
2. Click **"Preferences"**

**Step 2:** Enable notifications
1. Toggle **"Send email notifications"** to **ON**
2. Select email address (your Google account email)
3. Choose notification types:
   - ✅ Critical issues
   - ✅ New issues
   - ✅ Site performance summary
4. Click **"Save"**

### Set Up Custom Alerts (GA4)

**Step 1:** In GA4, go to **"Admin"** → **"Events"**

**Step 2:** Create custom events for:
- High traffic spikes
- Low conversion rates
- 404 errors

---

## Troubleshooting

### Common Issues & Solutions

#### Issue: DNS Verification Failed

**Symptoms:** "We couldn't verify your domain"

**Solutions:**
1. Wait longer (DNS propagation up to 48 hours)
2. Verify TXT record is correct:
   ```bash
   dig TXT smart-hotline.com +short
   ```
3. Check for typos in TXT value
4. Ensure TXT is on root domain (@), not subdomain

#### Issue: Sitemap Not Processed

**Symptoms:** "Couldn't fetch sitemap"

**Solutions:**
1. Verify sitemap URL is accessible:
   ```bash
   curl https://www.smart-hotline.com/sitemap.xml
   ```
2. Check sitemap format (must be valid XML)
3. Ensure robots.txt doesn't block sitemap
4. Verify sitemap is under 50MB and 50,000 URLs

#### Issue: Pages Not Indexed

**Symptoms:** URLs submitted but not indexed

**Solutions:**
1. Check for noindex meta tags
2. Verify robots.txt allows crawling
3. Submit sitemap again
4. Request indexing manually for priority pages
5. Build internal links from indexed pages
6. Check for duplicate content issues

#### Issue: GA4 Not Tracking

**Symptoms:** No data in GA4 reports

**Solutions:**
1. Verify Measurement ID is correct
2. Check script loads (browser DevTools → Network)
3. Ensure no ad blockers are interfering
4. Wait 24-48 hours for data to populate
5. Use GA4 DebugView for real-time debugging

#### Issue: Wrong Property Type

**Symptoms:** Need to change from URL-prefix to Domain property

**Solutions:**
1. Add new property (Domain type)
2. Verify new property
3. Old property data remains accessible
4. Use 301 redirects if needed

### Verification Commands

```bash
# Check DNS TXT records
dig TXT smart-hotline.com +short

# Verify sitemap accessible
curl -I https://www.smart-hotline.com/sitemap.xml

# Check robots.txt
curl https://www.smart-hotline.com/robots.txt

# Verify page response
curl -I https://www.smart-hotline.com/fr/

# Check for meta tags
curl -s https://www.smart-hotline.com/fr/ | grep -i "google-site-verification"
```

---

## Quick Reference

### GSC URLs

| Resource | URL |
|----------|-----|
| Search Console | https://search.google.com/search-console |
| Analytics | https://analytics.google.com |
| PageSpeed Insights | https://pagespeed.web.dev |
| Rich Results Test | https://search.google.com/test/rich-results |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly |

### Smart Hotline Priority Pages

| Page | URL |
|------|-----|
| French Homepage | https://www.smart-hotline.com/fr/ |
| English Homepage | https://www.smart-hotline.com/en/ |
| French AI Agents | https://www.smart-hotline.com/fr/agents-ia/ |
| English AI Agents | https://www.smart-hotline.com/en/ai-agents/ |
| French Reception | https://www.smart-hotline.com/fr/reception/ |
| French Virtual Receptionist | https://www.smart-hotline.com/fr/receptionniste-virtuelle/ |
| English Virtual Receptionist | https://www.smart-hotline.com/en/virtual-receptionist/ |

### GA4 Integration Code

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### DNS TXT Record Template

```
Type:   TXT
Host:   @
Value:  google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TTL:    3600
```

### robots.txt Template

```txt
# https://www.smart-hotline.com/robots.txt
User-agent: *
Allow: /

Sitemap: https://www.smart-hotline.com/sitemap.xml
```

---

## Checklist

Complete setup checklist:

- [ ] Create GSC account
- [ ] Add property (Domain or URL-prefix)
- [ ] Verify ownership (DNS, HTML file, or meta tag)
- [ ] Submit sitemap.xml
- [ ] Request indexing for priority pages
- [ ] Create GA4 property
- [ ] Add GA4 tracking code to layout.tsx
- [ ] Link GA4 to GSC
- [ ] Enable email notifications
- [ ] Test real-time tracking
- [ ] Verify indexed pages (check in 7 days)

---

## Support

If you encounter issues:

1. **Google Help:** https://support.google.com/webmasters/
2. **GSC Community:** https://support.google.com/webmasters/community
3. **Documentation:** This guide covers common scenarios

---

*Guide created for Smart Hotline - https://www.smart-hotline.com*  
*Version 1.0 - April 2026*
