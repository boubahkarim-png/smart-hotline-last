# Google Setup Checklist - Smart Hotline

## Current Status (April 7, 2026)

### ✅ Already Configured:
- **Website**: https://www.smart-hotline.com (LIVE)
- **Sitemap**: https://www.smart-hotline.com/sitemap.xml (FIXED)
- **Robots.txt**: All AI bots allowed
- **llms.txt**: AI-optimized content file created
- **Email**: direction@smart-hotline.com (verified)
- **Geo-pricing**: Working for 15+ countries
- **Tawk.to Chat**: Active (ID: 69c14d2a91de1e1c374c9f29)

### ❌ Missing:
- Google Search Console verification
- Google Analytics 4 tracking
- Google Business Profile claim
- Google Ads conversion tracking

---

## STEP 1: Google Search Console Setup (15 min)

### 1.1 Access Search Console
1. Go to: https://search.google.com/search-console
2. Sign in with your Google account
3. Click "Add Property" → Select "URL prefix"
4. Enter: `https://www.smart-hotline.com`

### 1.2 Verification Method (HTML File)
**Option A: Download HTML verification file**
1. Google will provide a file like `google1234567890abcdef.html`
2. Place it in `/root/projects/smart-hotline-nextjs/public/`
3. Rebuild and deploy

**Option B: DNS Verification (Recommended)**
1. Go to your DNS provider
2. Add TXT record:
   ```
   Name: @
   Value: google-site-verification=XXXXXXXXXX
   TTL: 3600
   ```

### 1.3 Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait 24-48 hours for indexing

---

## STEP 2: Google Analytics 4 Setup (20 min)

### 2.1 Create GA4 Property
1. Go to: https://analytics.google.com
2. Click "Create" → "Property"
3. Property name: "Smart Hotline Website"
4. Time zone: Canada/Eastern
5. Currency: CAD

### 2.2 Get Measurement ID
1. After creation, copy the Measurement ID (format: `G-XXXXXXXXXX`)
2. Example: `G-ABC123XYZ9`

### 2.3 Add to Website
Already created: `/root/projects/smart-hotline-nextjs/components/GoogleAnalytics.tsx`

Add to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-ABC123XYZ9
```

Then update layout.tsx to include:
```tsx
import GoogleAnalytics from '@/components/GoogleAnalytics'
// In <body>, add:
<GoogleAnalytics />
```

### 2.4 Verify Installation
1. Install Google Analytics Debugger (Chrome extension)
2. Visit your site
3. Check Real-Time reports in GA4

---

## STEP 3: Google Business Profile (30 min)

### 3.1 Claim or Create Profile
1. Go to: https://business.google.com
2. Search for "Smart Hotline Montreal"
3. If exists: Click "Own this business?"
4. If not: Click "Add your business"

### 3.2 Verification Options
**Most Likely: Postcard Verification**
1. Google will mail a postcard with verification code
2. Takes 5-14 days
3. Enter code when received

**Alternative: Phone Verification**
- Available for some businesses
- Instant verification

### 3.3 Optimize Profile
Add the following:

**Business Name**: Smart Hotline

**Category**: 
- Primary: Call center
- Secondary: Telephone answering service

**Address**: Montreal, QC (use actual address)

**Phone**: +1 514 819-0559

**Website**: https://www.smart-hotline.com

**Hours**: Open 24 hours

**Description**: 
"Partenaire téléphonique pour PME. Téléphonistes, réceptionnistes et agents IA vocaux 24/7. Réception d'appels, support client, CRM intégré. 500+ entreprises nous font confiance."

**Photos**:
- Logo
- Office exterior/interior
- Team photos
- Service screenshots

**Services**:
- Réception d'appels 24/7
- Agents IA vocaux
- Support client multicanal
- CRM SuiteCRM
- Listes B2B/B2C

---

## STEP 4: Google Ads Setup (Optional)

### 4.1 Conversion Tracking
For lead generation campaigns:

1. Create Google Ads account: https://ads.google.com
2. Tools → Conversions → New conversion
3. Type: Website
4. Category: Submit lead form
5. Value: Don't assign value (or use $50-100 per lead)
6. Install conversion tag on `/fr/contact` page

---

## STEP 5: Verify Everything Works

### 5.1 Test Checklist
- [ ] Search Console shows property as verified
- [ ] Sitemap shows "Success" status
- [ ] GA4 Real-Time shows your visits
- [ ] Business Profile shows as "Verified"
- [ ] Search "Smart Hotline Montreal" shows profile

### 5.2 Monitoring Commands
```bash
# Check sitemap
curl https://www.smart-hotline.com/sitemap.xml

# Check robots.txt
curl https://www.smart-hotline.com/robots.txt

# Check llms.txt
curl https://www.smart-hotline.com/llms.txt

# Test site speed
curl -I https://www.smart-hotline.com
```

---

## Credentials Needed

You'll need these accounts:
1. **Google Account** (for all Google services)
2. **Domain DNS Access** (for verification)

Already available:
- GitHub: boubahkarim-png
- Website deployed to GitHub Pages
- Email: direction@smart-hotline.com

---

## Priority Order

1. **HIGH**: Google Search Console (for indexing)
2. **HIGH**: Google Business Profile (for local SEO)
3. **MEDIUM**: Google Analytics 4 (for tracking)
4. **LOW**: Google Ads (when ready for paid marketing)

---

## Expected Timeline

- **Day 1**: Setup all accounts (1-2 hours)
- **Day 1-7**: Google indexes sitemap
- **Day 7-14**: Business Profile verified
- **Day 14-30**: Start appearing in local searches
- **Day 30-90**: Ranking for service keywords

---

## Support

If you need help with any step, let me know! I can:
- Generate HTML verification files
- Add tracking codes to the website
- Help optimize Business Profile
- Set up conversion tracking

## Next Immediate Action

**Do this NOW:**
1. Log into https://search.google.com/search-console
2. Add property for https://www.smart-hotline.com
3. Choose DNS verification method
4. Let me know the verification code or download the HTML file

I'll handle the rest!
