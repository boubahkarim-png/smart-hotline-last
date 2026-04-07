# Smart Hotline Brand Guidelines
## Version 1.0 — April 2026

---

## Brand Overview

**Smart Hotline** is a bilingual (French/English) phone partner service for SMBs in Quebec/Canada/Europe, combining human agents with AI voice technology for 24/7 coverage.

### Brand Personality
- **Professional** — Reliable, trustworthy, business-focused
- **Accessible** — Warm, approachable, human connection
- **Innovative** — AI-powered, modern, cutting-edge
- **Local** — Quebec roots, French-first, Canadian proud

### Brand Voice
- Clear and direct, never corporate jargon
- Helpful and solution-oriented
- Conversational but professional
- Bilingual authenticity (French & English)

---

## Brand Colors

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Sky Primary** | `#0EA5E9` | 14, 165, 233 | Primary buttons, links, accents |
| **Sky Dark** | `#0284C7` | 2, 132, 199 | Hover states, secondary |
| **Blue Deep** | `#1E40AF` | 30, 64, 175 | Dark backgrounds, headers |
| **Blue Navy** | `#1E3A8A` | 30, 58, 138 | Text on light, emphasis |

### Secondary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Slate 900** | `#0F172A` | 15, 23, 42 | Body text, dark sections |
| **Slate 600** | `#475569` | 71, 85, 105 | Secondary text |
| **Slate 100** | `#F1F5F9` | 241, 245, 249 | Light backgrounds |
| **White** | `#FFFFFF` | 255, 255, 255 | Cards, backgrounds |

### Accent Colors (Service Categories)

| Service | Color | Hex |
|---------|-------|-----|
| Réception (Inbound) | Sky | `#0EA5E9` |
| Émission (Outbound) | Emerald | `#10B981` |
| Agents IA | Violet | `#8B5CF6` |
| Support | Teal | `#14B8A6` |
| CRM | Orange | `#F97316` |
| Tarifs | Amber | `#F59E0B` |

### Gradient Usage

**Primary Gradient (Hero, CTAs):**
```css
background: linear-gradient(135deg, #0EA5E9 0%, #1E40AF 100%);
```

**Dark Gradient (Sections):**
```css
background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%);
```

---

## Typography

### Primary Font Stack
```css
font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
```

### Headings
- **Weight**: 700-900 (Bold/Black)
- **Line Height**: 1.1 - 1.3
- **Scale**: Fluid type scale with clamp()

### Body Text
- **Weight**: 400-500 (Regular/Medium)
- **Line Height**: 1.5 - 1.7
- **Size**: 16-18px base

### French Typography Notes
- Use proper French quotation marks: « »
- Non-breaking spaces before: : ; ? !
- Accent characters: é è ê ë à â ä ù û ü ç î ï ô ö

---

## Logo Usage

### Logo Versions

1. **Full Logo** (`logo-full.svg`) — 512x512px
   - Use for: Social media, presentations, large displays
   - Contains: Icon + wordmark

2. **Icon Only** (`logo-icon.svg`) — 64x64px
   - Use for: Favicons, app icons, small spaces
   - Contains: Stylized phone with sound waves + AI sparkle

3. **Header Logo** — Inline version
   - Text: "Smart Hotline" with icon
   - Use in: Navigation header

### Logo Clear Space

Minimum padding around logo = 1x icon height

```
┌────────────────────────────┐
│                            │
│    [PADDING = 1x HEIGHT]   │
│                            │
│      ┌──────────┐          │
│      │  [LOGO]  │          │
│      └──────────┘          │
│                            │
└────────────────────────────┘
```

### Logo Don'ts

- ❌ Don't stretch or distort
- ❌ Don't change colors outside brand palette
- ❌ Don't add effects (shadows, glows)
- ❌ Don't rotate
- ❌ Don't place on busy backgrounds
- ❌ Don't use low-resolution versions

---

## Favicon System

### Required Sizes

| Size | Filename | Usage |
|------|----------|-------|
| 16x16 | `favicon-16x16.png` | Browser tab |
| 32x32 | `favicon-32x32.png` | Browser tab (retina) |
| 180x180 | `apple-touch-icon.png` | iOS home screen |
| 192x192 | `android-chrome-192x192.png` | Android |
| 512x512 | `android-chrome-512x512.png` | Android (splash) |
| SVG | `favicon.svg` | Modern browsers |

### Favicon Design

- Use icon-only version (no text)
- High contrast for small sizes
- Recognizable at 16x16px
- Gradient background with white icon

---

## Social Media Assets

### Open Graph Image (1200x630px)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────┐                                          │
│  │ [LOGO] │   Votre Partenaire Téléphonique 24/7    │
│  │  ICON  │                                          │
│  └────────┘   Réception d'appels • Agents IA        │
│               Support client • CRM intégré          │
│                                                      │
│   500+ PME • 98% satisfaction • 24/7/365           │
│                                                      │
│        www.smart-hotline.com                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Twitter Card (1200x600px)

Same layout as OG image, optimized for Twitter's aspect ratio.

### Profile Pictures (400x400px)

- Use icon-only version
- Gradient background
- Centered white icon

---

## UI Components

### Buttons

**Primary:**
```css
background: #0EA5E9;
color: white;
border-radius: 12px;
font-weight: 600;
padding: 12px 24px;
```

**Secondary:**
```css
background: transparent;
border: 2px solid #0EA5E9;
color: #0EA5E9;
```

**Dark (on dark bg):**
```css
background: white;
color: #1E40AF;
```

### Cards

**Light:**
```css
background: white;
border: 1px solid #F1F5F9;
border-radius: 20px;
box-shadow: 0 4px 20px rgba(0,0,0,0.05);
```

**Dark (on dark bg):**
```css
background: rgba(255,255,255,0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.1);
```

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Primary text on white: 21:1 (AAA)
- Secondary text on white: 4.5:1 (AA)
- White text on Sky: 3.2:1 (AA Large)

### Focus States
- Visible focus rings on all interactive elements
- Focus color: Sky Primary (#0EA5E9)
- Minimum 2px outline offset

---

## Do's and Don'ts

### ✅ Do
- Use brand colors consistently
- Maintain clear hierarchy
- Keep whitespace generous
- Use French quotation marks
- Ensure bilingual authenticity

### ❌ Don't
- Use gray on colored backgrounds
- Overuse gradients
- Create visual clutter
- Mix color palettes inconsistently
- Ignore accessibility

---

## File Formats

### Logo Files
- `logo-full.svg` — Full logo, scalable
- `logo-icon.svg` — Icon only, scalable
- `logo-full.png` — 512x512, web
- `logo-icon.png` — 64x64, small spaces

### Favicon Files
- `favicon.svg` — Modern browsers
- `favicon.ico` — Legacy support
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### Social Files
- `og-image.png` — 1200x630
- `twitter-card.png` — 1200x600
- `profile-picture.png` — 400x400

---

## Brand Applications

### Website
- Logo in header (left)
- Primary CTA buttons
- Dark/light section alternation
- Service-specific accent colors

### Email Signatures
```
[Name]
[Title] | Smart Hotline

📧 direction@smart-hotline.com
📞 +1 514 819-0559
💬 wa.me/15148190559

www.smart-hotline.com
```

### Business Cards
```
FRONT:
[Logo Icon]

BACK:
[Name]
[Title]

Smart Hotline
Votre Partenaire Téléphonique 24/7

direction@smart-hotline.com
+1 514 819-0559
www.smart-hotline.com
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-07 | Initial brand guidelines |

---

**Questions?** Contact direction@smart-hotline.com
