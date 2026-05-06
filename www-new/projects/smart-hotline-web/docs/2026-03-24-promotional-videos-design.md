# Design Spec: Smart Hotline Promotional Videos

**Date:** 2026-03-24
**Project:** smart-hotline-nextjs
**Status:** Draft - Pending Approval

---

## Overview

Generate 3 promotional videos (FR + EN = 6 total) for Smart Hotline homepage hero section, using free AI tools with real-looking people talking and moving.

---

## Requirements

| Requirement | Value |
|-------------|-------|
| Video Types | Testimonial, Explainer, Brand |
| Languages | French + English (separate videos) |
| Duration | 15-30 seconds each |
| Quality | Homepage/web quality |
| Budget | $0 (free tools only) |
| Hosting | GitHub Pages |
| Placement | Homepage hero section |
| Deadline | Today |

---

## Approach: Test All Free Tools

We will generate test videos from multiple free AI tools and select the best quality.

### Tools to Test

| Tool | Free Tier | Quality | Pros | Cons |
|------|-----------|---------|------|------|
| **Hailuo AI** | Unlimited | Good | No limits, fast | Web-only access |
| **HeyGen** | 1 min/month | Excellent | Realistic avatars | Very limited free |
| **D-ID** | 5 min/month | Very Good | Good lip sync | Watermark |
| **Synthesia** | 1 video | Excellent | Best quality | Only 1 free |
| **Kling AI** | 66 credits/day | Excellent | Best video quality | Daily limit |
| **Luma** | 30/month | Good | Fast generation | Monthly limit |

### Test Plan

1. **Phase 1:** Generate 1 test video from each tool (6 test videos)
2. **Phase 2:** Compare quality, select best 2-3 tools
3. **Phase 3:** Generate full 6 videos (3 FR + 3 EN)
4. **Phase 4:** Integrate into homepage

---

## Video Scripts

### Video 1: Brand Introduction (15-20s)

**French:**
> "Smart Hotline, votre partenaire call center au Québec. Des agents humains et IA disponibles 24/7 pour répondre à vos appels. Zéro appel manqué. Contactez-nous dès aujourd'hui."

**English:**
> "Smart Hotline, your call center partner in Quebec. Human and AI agents available 24/7 to answer your calls. Zero missed calls. Contact us today."

**Visual Style:** Professional office, diverse team, warm lighting

---

### Video 2: AI Agent Demo (20-25s)

**French:**
> "Rencontrez Sophie, notre agent IA vocal. Elle répond en 2 secondes, 24/7, en français et en anglais. Vos clients ne patientent plus. Sophie s'en charge."

**English:**
> "Meet Sophie, our AI voice agent. She answers in 2 seconds, 24/7, in French and English. Your clients never wait. Sophie handles it."

**Visual Style:** Tech interface, AI avatar, voice waves

---

### Video 3: Client Testimonial (15-20s)

**French:**
> "Depuis qu'on travaille avec Smart Hotline, on a zéro appel manqué. Notre taux de conversion a augmenté de 40%. Service exceptionnel!"

**English:**
> "Since working with Smart Hotline, we have zero missed calls. Our conversion rate increased by 40%. Exceptional service!"

**Visual Style:** Happy business owner, office setting, graphs

---

## Technical Implementation

### File Structure

```
public/videos/
├── samples/           # Generation prompts (existing)
├── promo/
│   ├── brand_fr.mp4
│   ├── brand_en.mp4
│   ├── agent_fr.mp4
│   ├── agent_en.mp4
│   ├── testimonial_fr.mp4
│   └── testimonial_en.mp4
└── smart_hotline_promo.webm  # Existing video
```

### Homepage Integration

```tsx
// app/fr/page.tsx - Hero section
<section className="relative">
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="w-full h-[400px] object-cover rounded-2xl"
  >
    <source src="/videos/promo/brand_fr.mp4" type="video/mp4" />
  </video>
</section>
```

### Geo-aware Video Display

- Canadian/French IP → French video
- Other IPs → English video
- Fallback to poster image

---

## Test Cases

### Test 1: Video Generation
- [ ] Generate test video with Hailuo AI
- [ ] Generate test video with HeyGen
- [ ] Generate test video with D-ID
- [ ] Generate test video with Kling
- [ ] Compare quality and select best tool

### Test 2: Video Playback
- [ ] Video plays on homepage (FR)
- [ ] Video plays on homepage (EN)
- [ ] Video loops correctly
- [ ] Mobile responsive
- [ ] No layout shift

### Test 3: Geo Detection
- [ ] Canadian IP shows French video
- [ ] US IP shows English video
- [ ] Other IP shows English video
- [ ] Fallback works if geo fails

### Test 4: Performance
- [ ] Video loads under 3 seconds
- [ ] No CLS (Cumulative Layout Shift)
- [ ] Autoplay works (muted)
- [ ] Poster image shows while loading

---

## Success Criteria

1. ✅ 6 videos generated (3 FR + 3 EN)
2. ✅ Videos display on homepage
3. ✅ Geo-aware switching works
4. ✅ Mobile responsive
5. ✅ Page load time < 3s
6. ✅ No console errors

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Free tools have watermarks | Test all tools, use best quality |
| Videos too large | Compress to <5MB each |
| VPS has no display | User generates on personal device |
| AI avatars look fake | Use best tools (HeyGen, Synthesia) |
| Quota limits | Space out generation across tools |

---

## Next Steps

1. User reviews this spec
2. Generate test videos from each tool
3. Select best tool based on quality
4. Generate final 6 videos
5. Integrate into homepage
6. Deploy to GitHub Pages
7. User approves before going live

---

## Approval

- [ ] User approves this design
- [ ] Ready to proceed with implementation
