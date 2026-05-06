# Promotional Videos Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate 6 promotional videos (3 FR + 3 EN) and integrate into Smart Hotline homepage hero section

**Architecture:** Use multiple free AI video generation tools in parallel, select best quality, integrate with geo-aware video display component

**Tech Stack:** Next.js 14.2, TypeScript, Tailwind v4, GitHub Pages, Video HTML5

---

## Chunk 1: Video Generation Infrastructure

### Task 1: Create Video Directory Structure

**Files:**
- Create: `public/videos/promo/`

- [ ] **Step 1: Create promo video directory**
```bash
mkdir -p /root/projects/smart-hotline-nextjs/public/videos/promo
```

- [ ] **Step 2: Create placeholder videos manifest**
```json
// public/videos/promo/manifest.json
{
  "videos": {
    "brand_fr": { "title": "Brand Introduction FR", "status": "pending" },
    "brand_en": { "title": "Brand Introduction EN", "status": "pending" },
    "agent_fr": { "title": "AI Agent Demo FR", "status": "pending" },
    "agent_en": { "title": "AI Agent Demo EN", "status": "pending" },
    "testimonial_fr": { "title": "Client Testimonial FR", "status": "pending" },
    "testimonial_en": { "title": "Client Testimonial EN", "status": "pending" }
  }
}
```

### Task 2: Create Video Generation Scripts

**Files:**
- Create: `scripts/generate_videos.py`

- [ ] **Step 1: Create video generation helper script**
```python
#!/usr/bin/env python3.11
"""
Video Generation Helper - Creates prompts and instructions for manual video generation
"""
import json
from pathlib import Path

SCRIPTS = {
    "brand_fr": {
        "script": "Smart Hotline, votre partenaire call center au Québec. Des agents humains et IA disponibles 24/7 pour répondre à vos appels. Zéro appel manqué. Contactez-nous dès aujourd'hui.",
        "visual": "Professional call center office, diverse team wearing headsets, warm lighting, modern Montreal workspace",
        "duration": "15-20s"
    },
    "brand_en": {
        "script": "Smart Hotline, your call center partner in Quebec. Human and AI agents available 24/7 to answer your calls. Zero missed calls. Contact us today.",
        "visual": "Professional call center office, diverse team wearing headsets, warm lighting, modern Montreal workspace",
        "duration": "15-20s"
    },
    "agent_fr": {
        "script": "Rencontrez Sophie, notre agent IA vocal. Elle répond en 2 secondes, 24/7, en français et en anglais. Vos clients ne patientent plus. Sophie s'en charge.",
        "visual": "AI avatar with friendly face, tech interface showing voice waves, holographic display, blue and white theme",
        "duration": "20-25s"
    },
    "agent_en": {
        "script": "Meet Sophie, our AI voice agent. She answers in 2 seconds, 24/7, in French and English. Your clients never wait. Sophie handles it.",
        "visual": "AI avatar with friendly face, tech interface showing voice waves, holographic display, blue and white theme",
        "duration": "20-25s"
    },
    "testimonial_fr": {
        "script": "Depuis qu'on travaille avec Smart Hotline, on a zéro appel manqué. Notre taux de conversion a augmenté de 40%. Service exceptionnel!",
        "visual": "Happy business owner in professional office, shaking hands, graphs showing improvement, Canadian business setting",
        "duration": "15-20s"
    },
    "testimonial_en": {
        "script": "Since working with Smart Hotline, we have zero missed calls. Our conversion rate increased by 40%. Exceptional service!",
        "visual": "Happy business owner in professional office, shaking hands, graphs showing improvement, Canadian business setting",
        "duration": "15-20s"
    }
}

TOOLS = [
    {"name": "Hailuo AI", "url": "https://hailuoai.com/", "limit": "Unlimited free"},
    {"name": "HeyGen", "url": "https://heygen.com/", "limit": "1 min/month free"},
    {"name": "D-ID", "url": "https://d-id.com/", "limit": "5 min/month free"},
    {"name": "Kling AI", "url": "https://klingai.com/", "limit": "66 credits/day"},
    {"name": "Synthesia", "url": "https://synthesia.io/", "limit": "1 video free"}
]

def main():
    output_dir = Path("/root/projects/smart-hotline-nextjs/public/videos/promo")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate HTML instruction page
    html = """<!DOCTYPE html>
<html>
<head>
    <title>Smart Hotline Video Generation</title>
    <style>
        body { font-family: system-ui; max-width: 1200px; margin: 0 auto; padding: 20px; }
        .video-card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .script { background: #f5f5f5; padding: 15px; border-radius: 4px; margin: 10px 0; }
        .tools { display: flex; gap: 10px; flex-wrap: wrap; }
        .tool-btn { padding: 10px 20px; background: #0070f3; color: white; border: none; border-radius: 4px; cursor: pointer; }
        h1 { color: #0070f3; }
        h2 { color: #333; }
    </style>
</head>
<body>
    <h1>🎬 Smart Hotline Video Generation</h1>
    <p>Generate 6 videos using free AI tools. Open each tool, paste the script, and download.</p>
"""
    
    for video_id, data in SCRIPTS.items():
        html += f"""
    <div class="video-card">
        <h2>{video_id.replace('_', ' ').title()}</h2>
        <p><strong>Duration:</strong> {data['duration']}</p>
        <div class="script">
            <strong>Script:</strong><br>{data['script']}
        </div>
        <p><strong>Visual Style:</strong> {data['visual']}</p>
        <div class="tools">
"""
        for tool in TOOLS:
            html += f'<a href="{tool["url"]}" target="_blank" class="tool-btn">{tool["name"]} ({tool["limit"]})</a>\n'
        html += "</div></div>\n"
    
    html += """
</body>
</html>"""
    
    (output_dir / "generate.html").write_text(html)
    print(f"Generated: {output_dir / 'generate.html'}")
    
    # Save scripts as JSON
    (output_dir / "scripts.json").write_text(json.dumps(SCRIPTS, indent=2))
    print(f"Generated: {output_dir / 'scripts.json'}")

if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run generation script**
```bash
python3.11 /root/projects/smart-hotline-nextjs/scripts/generate_videos.py
```

---

## Chunk 2: Video Display Component

### Task 3: Create GeoAwareVideo Component

**Files:**
- Create: `components/GeoAwareVideo.tsx`

- [ ] **Step 1: Write the component**
```tsx
'use client'
import { useEffect, useState } from 'react'

type VideoKey = 'brand' | 'agent' | 'testimonial'

interface GeoAwareVideoProps {
  videoKey: VideoKey
  className?: string
  poster?: string
}

export default function GeoAwareVideo({ videoKey, className = '', poster }: GeoAwareVideoProps) {
  const [lang, setLang] = useState<'fr' | 'en'>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if we're on FR or EN route
    const path = window.location.pathname
    const isFrench = path.includes('/fr') || !path.includes('/en')
    setLang(isFrench ? 'fr' : 'en')
  }, [])

  if (!mounted) {
    return (
      <div className={`bg-slate-200 animate-pulse rounded-2xl ${className}`}>
        <div className="w-full h-full min-h-[200px]" />
      </div>
    )
  }

  const videoSrc = `/videos/promo/${videoKey}_${lang}.mp4`
  const posterSrc = poster || `/videos/promo/${videoKey}_${lang}_poster.jpg`

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={`w-full h-auto rounded-2xl ${className}`}
      poster={posterSrc}
    >
      <source src={videoSrc} type="video/mp4" />
      <p>Your browser does not support the video tag.</p>
    </video>
  )
}
```

### Task 4: Create VideoHero Section Component

**Files:**
- Create: `components/VideoHero.tsx`

- [ ] **Step 1: Write the video hero component**
```tsx
'use client'
import GeoAwareVideo from './GeoAwareVideo'

export default function VideoHero() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-slate-100">
      <GeoAwareVideo
        videoKey="brand"
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Smart Hotline
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-xl">
          Votre partenaire call center au Québec
        </p>
      </div>
    </section>
  )
}
```

---

## Chunk 3: Homepage Integration

### Task 5: Integrate Video into Homepage

**Files:**
- Modify: `app/fr/page.tsx`
- Modify: `app/en/page.tsx`

- [ ] **Step 1: Add import to French homepage**
At the top of `app/fr/page.tsx`, add:
```tsx
import VideoHero from '@/components/VideoHero'
```

- [ ] **Step 2: Add VideoHero to French homepage layout**
In the hero section area (after line 30), add:
```tsx
{/* VIDEO HERO SECTION */}
<section className="py-8 lg:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <VideoHero />
  </div>
</section>
```

- [ ] **Step 3: Add import to English homepage**
At the top of `app/en/page.tsx`, add:
```tsx
import VideoHero from '@/components/VideoHero'
```

- [ ] **Step 4: Add VideoHero to English homepage layout**
Same as French homepage.

---

## Chunk 4: Video Placeholder & Fallback

### Task 6: Create Video Placeholder

**Files:**
- Create: `public/videos/promo/brand_fr.mp4` (placeholder)
- Create: `public/videos/promo/brand_en.mp4` (placeholder)

- [ ] **Step 1: Create placeholder video files**
```bash
# Create a 1-second black video as placeholder
cd /root/projects/smart-hotline-nextjs/public/videos/promo
ffmpeg -f lavfi -i color=c=black:s=1920x1080:d=1 -c:v libx264 -t 1 brand_fr.mp4 2>/dev/null
cp brand_fr.mp4 brand_en.mp4
cp brand_fr.mp4 agent_fr.mp4
cp brand_fr.mp4 agent_en.mp4
cp brand_fr.mp4 testimonial_fr.mp4
cp brand_fr.mp4 testimonial_en.mp4
```

- [ ] **Step 2: Update manifest with placeholder status**
```json
{
  "videos": {
    "brand_fr": { "title": "Brand Introduction FR", "status": "placeholder" },
    "brand_en": { "title": "Brand Introduction EN", "status": "placeholder" },
    "agent_fr": { "title": "AI Agent Demo FR", "status": "placeholder" },
    "agent_en": { "title": "AI Agent Demo EN", "status": "placeholder" },
    "testimonial_fr": { "title": "Client Testimonial FR", "status": "placeholder" },
    "testimonial_en": { "title": "Client Testimonial EN", "status": "placeholder" }
  },
  "note": "Replace placeholder videos with real AI-generated videos"
}
```

---

## Chunk 5: Testing & Deployment

### Task 7: Build and Test

- [ ] **Step 1: Build the project**
```bash
cd /root/projects/smart-hotline-nextjs
npm run build 2>&1 | tail -20
```

- [ ] **Step 2: Verify video files exist**
```bash
ls -la /root/projects/smart-hotline-nextjs/public/videos/promo/
```

- [ ] **Step 3: Verify component imports work**
```bash
grep -r "VideoHero\|GeoAwareVideo" /root/projects/smart-hotline-nextjs/app/
```

### Task 8: Commit and Deploy

- [ ] **Step 1: Commit all changes**
```bash
cd /root/projects/smart-hotline-nextjs
git add -A
git commit -m "feat: add promotional video infrastructure with geo-aware display"
```

- [ ] **Step 2: Push to GitHub**
```bash
git push origin main
```

- [ ] **Step 3: User generates videos manually**
Provide user with `generate.html` to create videos using:
- Hailuo AI (unlimited free)
- HeyGen (best quality)
- D-ID (good lip sync)
- Kling AI (best video quality)

---

## Manual Video Generation Instructions

After deployment, user must:

1. Open `public/videos/promo/generate.html` in browser
2. Click each tool link (Hailuo, HeyGen, etc.)
3. Paste the script for each video
4. Download generated videos
5. Save to `public/videos/promo/` with correct names:
   - `brand_fr.mp4`, `brand_en.mp4`
   - `agent_fr.mp4`, `agent_en.mp4`
   - `testimonial_fr.mp4`, `testimonial_en.mp4`
6. Rebuild and redeploy

---

## Success Criteria

- [ ] 6 video placeholder files created
- [ ] GeoAwareVideo component works
- [ ] VideoHero component renders correctly
- [ ] Homepage shows video section
- [ ] Build succeeds without errors
- [ ] Deployed to GitHub Pages
- [ ] User instructed to generate real videos

---

## Execution Handoff

**Plan complete. Ready to execute using subagent-driven-development.**
