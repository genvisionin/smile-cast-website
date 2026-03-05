# Smilecast — Landing Page Specification (v2)
## Updated to match App Design System
## For AI Coding Model Implementation

---

## CRITICAL: DESIGN SYSTEM ALIGNMENT

This landing page must follow the exact same design system as the app.
Stack: Next.js + shadcn/ui + Radix UI + Tailwind CSS + Framer Motion + Lucide icons
Font: Manrope (fallback: Inter, Segoe UI, system-ui, sans-serif)
No arbitrary colors. No custom shadows. No one-off animations.
Every value below is pulled directly from the app design system tokens.

---

## DESIGN TOKENS IN USE

### Colors (semantic tokens only — no hardcoded hex in components)

```css
/* Brand */
--brand-50:  #FFF7F2
--brand-100: #FDEBDD
--brand-200: #F7CFAF
--brand-300: #EEAD84
--brand-400: #E18C62
--brand-500: #D97757   /* Primary action color */
--brand-600: #BF6547   /* Hover state */

/* Neutrals */
--neutral-0:   #FFFFFF
--neutral-50:  #FAFAF9   /* Page background */
--neutral-100: #F4F4F3
--neutral-200: #E7E7E5   /* Default border */
--neutral-300: #D4D4D2   /* Strong border */
--neutral-400: #A3A3A0
--neutral-500: #73736F   /* Secondary text */
--neutral-700: #3D3D3A
--neutral-900: #141413   /* Primary text */

/* Semantic */
--bg-page:       var(--neutral-50)
--bg-surface:    var(--neutral-0)
--text-primary:  var(--neutral-900)
--text-secondary:var(--neutral-500)
--text-inverse:  var(--neutral-0)
--border-default:var(--neutral-200)
--border-strong: var(--neutral-300)
--action-primary-bg:      var(--brand-500)
--action-primary-hover:   var(--brand-600)
--action-primary-text:    var(--neutral-0)
```

### Typography (Manrope — all sizes in rem)

```
display.lg:   56px / 64px  weight 700   → Hero headline
display.md:   48px / 56px  weight 700   → Section big headlines
heading.xl:   40px / 48px  weight 700   → Section headings
heading.lg:   32px / 40px  weight 650   → Card headings, sub-sections
heading.md:   24px / 32px  weight 650   → Card titles
heading.sm:   20px / 28px  weight 600   → Small card titles
body.lg:      18px / 28px  weight 500   → Hero sub-text, key descriptions
body.md:      16px / 24px  weight 500   → General body copy
body.sm:      14px / 20px  weight 500   → Supporting text, captions
label.md:     14px / 20px  weight 600   → Tags, badges, eyebrow text
label.sm:     12px / 16px  weight 600   → Micro labels
```

### Spacing Scale (px)
`2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80`

Section vertical padding: `80px` top/bottom desktop, `48px` mobile
Max content width: `1200px` (`container.xl`)
Wide content: `1320px` (`container.2xl`)

### Border Radius
```
sm:  8px
md:  12px
lg:  16px
xl:  20px
2xl: 24px
```

### Shadows
```
shadow.soft:    0 2px 12px rgba(20,20,19,0.06)   → subtle card depth
shadow.card:    0 8px 24px rgba(20,20,19,0.08)   → cards, feature blocks
shadow.popover: 0 12px 30px rgba(20,20,19,0.12)  → elevated modals, tooltips
```

### Motion (Framer Motion — use these exact values)
```
Timing:
  fast:     120ms  → hover, focus states
  standard: 200ms  → open/close, tab switches, most transitions
  complex:  320ms  → page entry reveals, staged hero animation

Easing:
  default: [0.22, 1, 0.36, 1]   → entries, opens
  exit:    [0.4, 0, 1, 1]       → exits, closes

Entry pattern:
  initial: { opacity: 0, y: 8 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] }

Stagger list:
  staggerChildren: 0.04   → 40ms between children

Reduced motion:
  Always wrap with: useReducedMotion() from Framer Motion
  If reduced motion preferred: skip y translation, keep opacity fade only
```

---

## VISUAL LANGUAGE

**Theme:** Light. Warm. Premium clinical.
**Background:** `neutral.50` (#FAFAF9) — warm off-white, not harsh white
**Primary accent:** `brand.500` (#D97757) — clay orange — used for CTAs, highlights, tags
**Cards/surfaces:** `neutral.0` white with `shadow.card`
**Borders:** `neutral.200` default, `neutral.300` strong
**No dark mode on landing page.** App has dark surfaces — landing page is fully light.
**No mint green, no indigo.** Those were from the previous spec. Brand orange is the only accent.

---

## GRID SYSTEM

```
Desktop:  12-column, 24px gutters
Tablet:   8-column, 20px gutters
Mobile:   4-column, 16px gutters

Breakpoints:
  sm:  640px
  md:  768px
  lg:  1024px
  xl:  1200px
  2xl: 1320px
```

---

## SECTION 1 — NAVIGATION (Sticky)

### Behavior
- Fixed top, `z-50`
- Default: transparent background
- On scroll past 64px: `bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-soft`
- Height: 72px → shrinks to 60px on scroll (Framer Motion layout animation, `duration: 120ms`)
- Transition: `standard` timing

### Content
```
LEFT:
  - "Smilecast" wordmark in Manrope weight 700, text-neutral-900
  - Small brand.500 arc icon to the left of wordmark (SVG, simple smile arc, 20px)

CENTER (desktop only):
  - Nav links: Features · Pricing · How It Works · For Dentists
  - Font: label.md (14px weight 600), color: text-secondary
  - Hover: color transitions to text-primary, duration 120ms

RIGHT:
  - "Start free trial" — Button variant: primary, size: md
  - bg: brand.500, text: white, hover: brand.600
  - Radius: xl (20px) — pill shape
```

### Mobile
- Hide center nav
- Hamburger icon (Lucide `Menu`) on right
- Full-screen overlay slide-in from right (`Sheet` from shadcn/ui)
- Sheet background: neutral.0, links stacked vertically, 48px touch targets

---

## SECTION 2 — HERO

### Layout
Max width `container.xl` (1200px). Two columns, 58/42 split.
Left: text content. Right: product visual mockup.
Vertical padding: `80px` top, `64px` bottom.

### Background
`bg-page` (neutral.50). Add a very subtle brand-tinted radial gradient behind the headline:
```css
background: radial-gradient(ellipse 600px 400px at 10% 40%, rgba(217,119,87,0.06) 0%, transparent 70%)
```
No noise texture. No heavy effects. Keep it almost invisible — just a warmth hint.

### Left Column Content

**Eyebrow tag** (label.sm, uppercase, letter-spacing 0.08em):
```
Color: brand.500
Text:  AI-POWERED DENTAL VISUALIZATION
```

**Headline** (display.lg — 56px / 64px, weight 700, text-primary):
```
Show Patients
Their Future Smile.
Before They Commit.
```
Line 3 "Before They Commit." — color: brand.500

**Sub-headline** (body.lg — 18px / 28px, text-secondary, max-width 480px):
```
Smilecast generates hyper-realistic smile simulations in seconds.
Increase case acceptance, reduce consultation time, and give
patients the confidence to say yes — right in the chair.
```

**CTA Row:**
```
Primary button:   "Start 7-day free trial"   — variant: primary, size: lg
Secondary button: "Watch demo"               — variant: ghost, size: lg, Lucide Play icon left
Gap between: 12px
```

**Trust row** (body.sm, text-secondary, flex row, gap 20px, margin-top 24px):
```
✓ No credit card required
✓ Ready in 5 minutes
✓ Cancel anytime
```
Use Lucide `Check` icon in brand.500 for each checkmark.

### Right Column — Product Visual

Floating card mockup. White card (`bg-surface`, `shadow.popover`, `radius.2xl`).
Slight 3D perspective tilt: `perspective(1200px) rotateY(-6deg) rotateX(2deg)` — CSS only, static.

Card shows:
- Patient photo on left half, generated simulation on right half
- Thin branded divider bar with a drag handle centered (Lucide `GripVertical`)
- "Before" label (label.sm, neutral.500) on left
- "After — Veneers B1" label (label.sm, brand.500, weight 600) on right
- Below the image: a row of 3 treatment pill badges in brand.100/brand.500 colors

**Float animation** (Framer Motion, respects reduced motion):
```javascript
animate={{ y: [0, -8, 0] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
```

### Hero Entry Animation (Framer Motion, staggered)
```javascript
// Eyebrow: delay 0
// H1 line 1: delay 0.04
// H1 line 2: delay 0.08
// H1 line 3: delay 0.12
// Sub-headline: delay 0.18
// CTA row: delay 0.24
// Trust row: delay 0.30
// Right mockup: delay 0.16, x: 24 → 0 instead of y

// Each: { initial: {opacity:0, y:8}, animate: {opacity:1, y:0}, transition: {duration:0.32, ease:[0.22,1,0.36,1]} }
```

---

## SECTION 3 — SOCIAL PROOF BAR

### Layout
Full width. `bg-neutral-100`. Border top and bottom `border-neutral-200`.
Padding: `24px` vertical. Single row.

### Content
```
LEFT text (label.md, text-secondary):
  "Trusted by practices across"

CENTER: 4–5 clinic name placeholders as text logos
  Font: Manrope weight 700, color: neutral.400
  Separator: neutral.300 vertical line, 1px, 16px tall
  (Replace with real logos when available)

RIGHT (label.md, text-primary, weight 600):
  "2,400+ simulations generated"
```

Mobile: marquee scroll animation on clinic names.

---

## SECTION 4 — STATS STRIP

### Layout
`bg-surface` white. `shadow.soft`. `radius.xl`. Max width `container.lg` (1024px), centered.
Padding: `48px`. Three stats in a row, separated by `border-neutral-200` vertical dividers.

### Stats (count-up animation on viewport entry, Framer Motion)

```
STAT 1:
Number: 40–60%   — display.md, brand.500, weight 700
Label:  Increase in case acceptance   — body.md, text-secondary
Sub:    Across visualization-enabled practices   — body.sm, text-secondary

STAT 2:
Number: 20 sec   — display.md, brand.500, weight 700
Label:  To generate a simulation   — body.md, text-secondary
Sub:    From photo upload to patient-ready result   — body.sm, text-secondary

STAT 3:
Number: 3×   — display.md, brand.500, weight 700
Label:  More consultations converted   — body.md, text-secondary
Sub:    When patients can see their outcome first   — body.sm, text-secondary
```

---

## SECTION 5 — HOW IT WORKS

### Layout
`bg-page`. Max width `container.xl`.
Section header centered. Below: 3 step cards in a row connected by a dotted `border-neutral-300` line between them.

### Section Header
```
Eyebrow: "SIMPLE WORKFLOW"  — label.sm, brand.500, uppercase
Headline: "Three steps to a confident yes."  — heading.xl, text-primary, centered
Sub: "From photo to shareable patient link — all inside one platform."  — body.lg, text-secondary, centered
```

### Step Cards (Card component: bg-surface, shadow.soft, radius.lg, padding 32px)

**Step 1:**
```
Step badge:   "01" — label.sm, brand.500, bg-brand-50, radius.sm, padding 4px 8px
Icon:         Lucide Camera — 24px, brand.500
Heading:      "Upload the photo"  — heading.sm, text-primary
Body:         "Take a photo chairside or upload an existing one. Any smartphone camera works — no special equipment needed."  — body.md, text-secondary
```

**Step 2:**
```
Step badge:   "02"
Icon:         Lucide Sparkles
Heading:      "Choose the treatment"
Body:         "Select whitening, veneers, straightening, or gum correction. Adjust shade, shape, and intensity with simple controls."
```

**Step 3:**
```
Step badge:   "03"
Icon:         Lucide Share2
Heading:      "Share with your patient"
Body:         "The simulation is ready in 20 seconds. Show it chairside or send a branded link directly to their phone."
```

### Card hover state
```
transition: shadow.soft → shadow.card, border-neutral-200 → border-brand-300
duration: standard (200ms), ease: default
```

---

## SECTION 6 — FEATURE BENTO GRID

### Layout
`bg-neutral-100`. Max width `container.2xl`.
Asymmetric bento grid — 3 column CSS grid, 20px gap. 6 cards total.
Card base: `bg-surface`, `shadow.soft`, `radius.xl`, `border border-neutral-200`.

Grid layout:
```
[ Card 1 — large, col-span 2 ]  [ Card 2 — small, col-span 1 ]
[ Card 3 — small, col-span 1 ]  [ Card 4 — small, col-span 1 ]  [ Card 5 — small, col-span 1 ]  ← 3 across
[ Card 6 — large, col-span 2 ]  [ (empty or card 5 here) ]
```
Adjust layout for clean visual weight — 2+1, then 1+1+1, then 2+1.

### Section Header
```
Eyebrow: "PLATFORM FEATURES"  — label.sm, brand.500
Headline: "Everything your practice needs."  — heading.xl, text-primary
Sub: "Built for the moment a patient decides to say yes."  — body.lg, text-secondary
```

### Card Hover (all cards)
```
initial:  shadow.soft, border-neutral-200
hover:    shadow.card, border-brand-300 (brand.300 = #EEAD84)
scale:    1.0 → 1.01
duration: standard 200ms
```

### Card 1 — LARGE (col-span 2)
```
Tag badge:  "AI VISUALIZATION"  — label.sm, brand.500, bg-brand-50, radius.sm
Heading:    "Hyper-realistic simulations."  — heading.lg, text-primary
Body:       "Every simulation is patient-specific — not stock photos. The AI understands lighting, skin tone, and tooth geometry to produce results that look like real post-treatment photos."  — body.md, text-secondary
Visual:     Inline before/after split image (illustration/mockup), rounded, fills bottom of card
Padding:    32px, extra bottom padding for image
```

### Card 2 — SMALL
```
Tag:     "4 TREATMENTS"
Heading: "Every treatment covered."
Body:    "Whitening · Veneers · Straightening · Gum Correction — all in one platform."
Visual:  4 Lucide icons in a 2×2 grid, each in a brand.50 rounded square
```

### Card 3 — SMALL
```
Tag:     "PATIENT SHARING"
Heading: "Send a link. Close the case."
Body:    "Every simulation gets a branded shareable link. Patients review it at home, show their family, and come back ready to commit."
Visual:  Phone mockup showing patient portal with before/after slider (small illustration)
```

### Card 4 — SMALL
```
Tag:     "COST TRANSPARENCY"
Heading: "Payment breakdown built in."
Body:    "Show patients a clear treatment cost and payment plan right alongside their simulation. No surprises. More trust."
Visual:  Mini payment card UI element illustration (3 plan options, one highlighted in brand.500)
```

### Card 5 — SMALL
```
Tag:     "PATIENT RETENTION"
Heading: "Re-engage after they leave."
Body:    "Send promo codes and offers through the patient portal — even days after their visit. Keep your practice top of mind."
Visual:  Lucide Mail + tag/badge icon combo, brand.500 color
```

### Card 6 — LARGE (col-span 2)
```
Tag:     "YOUR BRAND"
Heading: "Fully branded. Your name, your colors."
Body:    "Every patient link and simulation view carries your clinic's identity. Patients see your name — not ours. Smilecast works invisibly in the background."
Visual:  Two phone mockups side by side — generic (muted) vs branded (clinic logo + colors visible), subtle arrow or vs label between them
```

---

## SECTION 7 — INTERACTIVE BEFORE/AFTER DEMO

### Layout
`bg-surface`. Max width `container.lg` centered.
Centered section header above the demo component.

### Header
```
Eyebrow: "SEE IT IN ACTION"
Headline: "Drag to compare."  — heading.xl
Sub: "This is exactly what your patients will see."  — body.lg, text-secondary
```

### Demo Component
Width: 760px desktop, full-width mobile.
`radius.2xl`, `shadow.popover`, `border border-neutral-200`.
Before/after image slider component — use `react-compare-slider` or custom `clip-path` CSS solution.

Labels:
- "Before" pill — label.sm, neutral.500, bg-neutral-100, radius.sm, absolute positioned
- "After — Veneers · Shade B1" pill — label.sm, brand.500, bg-brand-50, radius.sm

Slider handle:
- 40×40px circle, bg-surface, shadow.card, border-neutral-200
- Lucide `ChevronsLeftRight` icon, neutral.700, 16px

**Auto-animate on load:**
```javascript
// Slider position animates: 50% → 30% → 70% → 50% over 3 seconds
// Pauses on user hover/touch
// Uses Framer Motion animate with ease: "easeInOut"
// Respects reduced motion (skip to static 50% if reduced motion)
```

**Below demo (body.sm, text-secondary, centered, margin-top 16px):**
```
Generated in 18 seconds · Sent to patient's phone instantly
```

---

## SECTION 8 — TREATMENT TYPES

### Layout
`bg-neutral-100`. Max width `container.xl`.
Section header centered. Below: 4-column card grid (2-col tablet, 1-col mobile).

### Header
```
Eyebrow: "TREATMENTS"
Headline: "All the treatments your patients ask about."  — heading.xl
```

### Treatment Cards (Card: bg-surface, shadow.soft, radius.lg, padding 24px)

Use a colored left-border accent (4px, radius on left only) per treatment card.

**Card 1 — Teeth Whitening**
```
Border accent: brand.500
Icon: Lucide Sparkles, brand.500
Heading: "Teeth whitening"  — heading.sm
Details (body.sm, text-secondary):
  · 16 VITA shade options
  · Conservative to maximum intensity
  · Individual tooth exclusion
```

**Card 2 — Veneers**
```
Border accent: brand.400
Icon: Lucide Gem, brand.400
Heading: "Veneers"
Details:
  · 5 tooth shape presets
  · 16 shades · Matte, satin, or gloss
  · 4–8 tooth coverage selection
```

**Card 3 — Teeth Straightening**
```
Border accent: brand.300
Icon: Lucide AlignCenter, brand.300
Heading: "Straightening"
Details:
  · Mild to significant correction
  · Gap closure · Midline alignment
  · Show with or without aligners
```

**Card 4 — Gum Correction**
```
Border accent: neutral.400
Icon: Lucide Activity, neutral.400
Heading: "Gum correction"
Details:
  · 3 correction presets
  · Gummy smile reduction
  · Crown lengthening visualization
```

---

## SECTION 9 — TESTIMONIALS

### Layout
`bg-surface`. Max width `container.xl`.
Section header centered. 3 testimonial cards in a row (1-col on mobile, stacked).

### Header
```
Eyebrow: "FROM THE CHAIR"
Headline: "What dentists are saying."  — heading.xl
```

### Testimonial Cards (Card: bg-neutral-50, shadow.soft, radius.xl, padding 32px, border border-neutral-200)

Quote mark: `"` large, brand.500, display.md, positioned top-left of card, decorative.

**Card 1:**
```
Quote: "We used to spend 20 minutes explaining what veneers could look like. Now we show them in 30 seconds and they're already asking about booking dates."
Name:  Dr. Sarah M.  — label.md, text-primary
Clinic: London, UK  — body.sm, text-secondary
```

**Card 2:**
```
Quote: "The shareable link changed how we close cases. Patients go home, show their partner, and call back the next morning ready to commit."
Name:  Dr. James K.
Clinic: Dubai, UAE
```

**Card 3:**
```
Quote: "Five minutes to set up. Our logo, our colors. Patients think we built it ourselves. That's exactly what we wanted."
Name:  Dr. Priya R.
Clinic: New York, USA
```

*Replace with verified quotes from real beta testers before launch.*

---

## SECTION 10 — PRICING

### Layout
`bg-neutral-100`. Max width `container.xl`.
Section header centered. Monthly/Annual toggle. 3 pricing cards in a row.

### Header
```
Eyebrow: "PRICING"
Headline: "Simple, transparent pricing."  — heading.xl
Sub: "Start free. Scale as your practice grows."  — body.lg, text-secondary
```

### Toggle (shadcn Switch or custom Tabs)
```
"Monthly"  |  Toggle  |  "Annual  · Save 17%"
Annual: show "Save 17%" badge — label.sm, brand.500, bg-brand-50, radius.sm
Toggle default: Monthly
On switch: Framer Motion price number crossfade, duration: standard 200ms
```

### Pricing Cards

**BASE card** (bg-surface, shadow.soft, radius.xl, padding 32px, border border-neutral-200)
```
Plan name:   "Base"  — label.md, text-secondary, uppercase
Price:       "$60"   — display.md, text-primary, weight 700
Period:      "/month"  — body.md, text-secondary  (Annual: "$50/mo · billed annually")
Tagline:     "Perfect for solo practices"  — body.sm, text-secondary
Divider:     border-neutral-200, 1px, margin 24px 0

Simulations: "70 simulations/month"  — heading.sm, text-primary
Quality:     "1K image quality"  — body.sm, text-secondary

Feature list (body.sm, text-primary, Lucide Check 16px brand.500 left):
  ✓ All 4 treatments
  ✓ All sub-controls and shade settings
  ✓ Shareable patient links (30-day expiry)
  ✓ Clinic logo on patient link
  ✓ 1 user seat
  ✓ Email support

CTA: Button variant secondary, size lg, full width
     "Start free trial"
```

**PRO card** (bg-neutral-900, shadow.popover, radius.xl, padding 32px — DARK card, elevated)
```
Badge:       "Most popular"  — label.sm, brand.400, bg-neutral-700, radius.sm, absolute top-right
Plan name:   "Pro"  — label.md, neutral.400, uppercase
Price:       "$99"  — display.md, neutral.0, weight 700
Period:      "/month"  — body.md, neutral.500
Tagline:     "For active cosmetic practices"  — body.sm, neutral.500

Simulations: "150 simulations/month"  — heading.sm, neutral.0
Quality:     "2K image quality"  — body.sm, neutral.400

Feature list (body.sm, neutral.200, Lucide Check 16px brand.400 left):
  ✓ Everything in Base
  ✓ 2K image quality
  ✓ Permanent patient links (no expiry)
  ✓ Before/after slider on patient link
  ✓ Multi-treatment comparison view
  ✓ Analytics dashboard
  ✓ 3 user seats
  ✓ Custom brand colors on patient link
  ✓ Priority generation queue
  ✓ Chat + email support

CTA: Button variant primary (brand.500), size lg, full width
     "Start free trial"
```

**ULTRA card** (bg-surface, shadow.soft, radius.xl, padding 32px, border border-neutral-200)
```
Plan name:   "Ultra"  — label.md, text-secondary, uppercase
Price:       "$159"  — display.md, text-primary, weight 700
Period:      "/month"  — body.md, text-secondary
Tagline:     "For high-volume & multi-dentist clinics"  — body.sm, text-secondary

Simulations: "300 simulations/month"  — heading.sm, text-primary
Quality:     "4K image quality"  — body.sm, text-secondary

Feature list:
  ✓ Everything in Pro
  ✓ 4K image quality
  ✓ 8 user seats
  ✓ White-label patient links (your domain)
  ✓ Promo code & offer sending to patients
  ✓ During-treatment appliance visualization
  ✓ Advanced analytics & ROI estimator
  ✓ Payment plan builder for patients
  ✓ Dedicated onboarding call
  ✓ Priority support — 4hr SLA

CTA: Button variant secondary, size lg, full width
     "Start free trial"
```

**Below cards (body.sm, text-secondary, centered, margin-top 24px):**
```
All plans include a 7-day free trial with 15 simulations.
No credit card required. Cancel anytime.
```

---

## SECTION 11 — FAQ

### Layout
`bg-surface`. Max width `container.md` (768px) centered.
Section header. Accordion list below.

### Header
```
Headline: "Frequently asked questions."  — heading.xl, text-primary
```

### Accordion (shadcn Accordion component — Radix under the hood)
```
Border: border-neutral-200 between items
Item padding: 20px 0
Question: heading.sm, text-primary
Answer: body.md, text-secondary, padding-top 8px
Icon: Lucide ChevronDown, neutral.500, rotates 180° on open (Framer Motion, standard timing)
```

**Q&A Content:**

```
Q: Do I need special equipment or cameras?
A: No. Any smartphone camera works. Take the photo directly in the app or upload an existing one. No dental photography setup required.

Q: How realistic are the simulations?
A: Every simulation is patient-specific — not stock images. The AI reflects the patient's actual lighting, skin tone, and tooth structure in the result.

Q: Can patients view the simulation on their phone?
A: Yes. Every simulation gets a shareable link that opens a mobile-optimized patient view with a before/after comparison slider. Patients can bookmark it and share it with family.

Q: Is patient data secure?
A: All images are stored encrypted. Patient portal access requires email or phone verification. We never use patient images for any purpose other than generating their simulation.

Q: Can I brand it with my clinic logo and colors?
A: Yes, from the Base plan onwards. On Ultra, you can use your own clinic domain.

Q: What treatments can I visualize?
A: Whitening (VITA shade selection), veneers (shape, shade, finish), straightening (alignment, gap closure, arch correction), and gum correction.

Q: Can I send patients offers after they leave?
A: Yes — on the Ultra plan, you can send promo codes through the patient portal days after their visit.

Q: What happens after my free trial ends?
A: We send a reminder on day 5. If you don't upgrade, your account pauses — no charges, no data deleted.
```

---

## SECTION 12 — FINAL CTA

### Layout
`bg-neutral-900` (dark section — contrast from rest of page).
Max width full. Padding: `80px` vertical. Centered content.
Subtle radial brand gradient behind headline:
```css
background: radial-gradient(ellipse 500px 300px at 50% 50%, rgba(217,119,87,0.12) 0%, transparent 70%)
```

### Content
```
Eyebrow:   "GET STARTED"  — label.sm, brand.400, uppercase
Headline:  "The best consultations end with a yes."  — display.md, neutral.0, weight 700, centered
Sub:       "Give your patients the clarity they need to commit. Start your free trial — no credit card, no setup fees."  — body.lg, neutral.400, centered, max-width 520px
```

```
CTA Button: "Start 7-day free trial"  — variant primary (brand.500 bg), size lg
Below button: "15 simulations included · All 4 treatments · Cancel anytime"  — body.sm, neutral.500
```

---

## SECTION 13 — FOOTER

### Layout
`bg-neutral-900`. Padding: `64px` top, `32px` bottom. Max width `container.xl`.
4-column grid above, thin `border-neutral-700` divider, bottom bar below.

### Columns

**Column 1 — Brand (col-span 1)**
```
Smilecast wordmark — Manrope weight 700, neutral.0
Tagline: "AI-powered smile visualization for modern dental practices."  — body.sm, neutral.500
Social row (Lucide icons, 20px, neutral.400, hover neutral.0, 120ms):
  LinkedIn · Instagram · Twitter/X
```

**Column 2 — Product**
```
Header: "Product"  — label.md, neutral.400
Links (body.sm, neutral.500, hover neutral.0, 120ms):
  Features · Pricing · How It Works · Treatments
```

**Column 3 — Company**
```
Header: "Company"
Links: About · Blog · Contact · Book a demo
```

**Column 4 — Legal**
```
Header: "Legal"
Links: Privacy Policy · Terms of Service · GDPR / Data Policy
```

**Bottom bar** (border-top: neutral.700, padding-top 24px):
```
LEFT: "© 2025 Smilecast. All rights reserved."  — body.sm, neutral.500
RIGHT: Privacy · Terms  — body.sm, neutral.500
```

---

## COMPONENT IMPLEMENTATION RULES

These rules are non-negotiable and match the app design system:

```
1. Never hardcode colors — use Tailwind tokens that map to the design system CSS vars
2. Never use arbitrary Tailwind values like w-[732px] — use spacing scale or container classes
3. All buttons must use the shared Button component with defined variants: primary, secondary, ghost
4. All cards must use the Card component with shadow.soft default, shadow.card on hover
5. All animations must use the shared Framer Motion patterns — no one-off random animations
6. Every interactive section needs loading, error, and empty states (not applicable to marketing sections but apply to any dynamic data like pricing toggle)
7. Accordion uses shadcn Accordion (Radix under the hood) — not a custom solution
8. Icons: Lucide only — no other icon library
9. Font: Manrope loaded at app root — do not load it again in this page
10. Reduced motion: wrap ALL Framer Motion animations with useReducedMotion() check
```

---

## COPYWRITING RULES (Consistent with App Design System Tone)

```
Voice:  Confident, clinical-but-warm, no jargon
Case:   Sentence case in all UI text
        ALL-CAPS only for eyebrow/label tags (e.g. "PRICING", "HOW IT WORKS")
Length: Headline max 8 words where possible
        Body copy max 72 characters per line

Principle — lead with outcome, not feature:
  ❌ "Advanced AI-powered visualization"
  ✅ "Patients see their new smile before they commit"

Principle — numbers over adjectives:
  ❌ "Very fast generation"
  ✅ "Ready in 20 seconds"

Action verbs for CTAs: Start · Share · Generate · Book · See · Compare
```
