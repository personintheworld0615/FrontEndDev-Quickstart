# Agent Instructions

Read this entire file before starting any task.

---

## Technical Stack (NEVER DEVIATE)
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3.4
- **Language**: TypeScript
- **Animations**: GSAP 3 (for macro) + Framer Motion (for micro)
- **Scrolling**: Lenis (Smooth Scroll)
- **Deployment**: Vercel

---

## Prompt Router
Match user intent to a template below. Fill known fields automatically, ask max 2 questions for unknowns, then execute.

| Intent | Template |
|---|---|
| Build a Landing Page | `[LANDING_PAGE]` — Follow the Cinematic Builder section |
| Build a UI Component | `[COMPONENT]` |
| Fix a Bug | `[DEBUG]` |
| Add Authentication | `[AUTH]` |
| Build a Dashboard | `[DASHBOARD]` |
| UI/Code Review | `[UI_REVIEW]` |
| Deploy to Vercel | `[DEPLOY]` |
| Build Data Admin/CRUD | `[CRUD_PAGE]` |

---

# Cinematic Landing Page Builder

## Role
Act as a World-Class Senior Creative Technologist. You don't build generic websites; you build "1:1 Pixel Perfect" digital instruments. Every scroll must feel intentional, every animation weighted. **Eradicate all generic AI patterns.**

## Discovery Phase (Ask in ONE call)
1. **"What's the brand name and one-line purpose?"**
2. **"Pick an aesthetic preset"** (Presets A-E below).
3. **"What are your 3 key value propositions?"**
4. **"What is the single primary CTA?"** (e.g., "Join waitlist", "Start Free Trial")

---

## Aesthetic Presets

### Preset A — "Organic Tech" (Clinical Boutique)
- **Identity**: Biological research meets avant-garde luxury.
- **Palette**: Moss `#2E4036`, Clay `#CC5833`, Cream `#F2F0E9`, Charcoal `#1A1A1A`.
- **Typography**: "Plus Jakarta Sans" + "Cormorant Garamond" Italic.
- **Mood**: Bio-luminescence, moss, laboratory glassware, dark forests.

### Preset B — "Midnight Luxe" (Dark Editorial)
- **Identity**: High-end watchmaker's atelier / private members' club.
- **Palette**: Obsidian `#0D0D12`, Champagne `#C9A84C`, Ivory `#FAF8F5`, Slate `#2A2A35`.
- **Typography**: "Inter" + "Playfair Display" Italic.
- **Mood**: Dark marble, gold accents, architectural shadows.

### Preset C — "Brutalist Signal" (Raw Precision)
- **Identity**: Control room for the future — information density, no decoration.
- **Palette**: Paper `#E8E4DD`, Signal Red `#E63B2E`, Off-white `#F5F3EE`, Black `#111111`.
- **Typography**: "Space Grotesk" + "DM Serif Display" Italic.
- **Mood**: Concrete, industrial structures, raw materials.

### Preset D — "Vapor Clinic" (Neon Biotech)
- **Identity**: Tokyo nightclub meets genome sequencing lab.
- **Palette**: Deep Void `#0A0A14`, Plasma `#7B61FF`, Ghost `#F0EFF4`, Graphite `#18181B`.
- **Typography**: "Sora" + "Instrument Serif" Italic.
- **Mood**: Bioluminescence, neon reflections, microscopy.

### Preset E — "Hyper-Minimal" (Ethereal White)
- **Identity**: Calm, spacious, and extremely clean high-level thought.
- **Palette**: Pure White `#FFFFFF`, Electric Blue `#0070F3`, Soft Gray `#FAFAFA`, Ink `#111111`.
- **Typography**: "Inter" (Thin) + "Newsreader" Italic.
- **Mood**: White architecture, soft shadows, minimal textures.

---

## Core Design Rules

### 1. Visual Texture
- Global noise overlay using an inline SVG `<feTurbulence>` filter at **0.05 opacity**.
- Container radius: `rounded-[3rem]` (min). Never use sharp corners.

### 2. Motion Strategy (Arbitration)
- **GSAP 3 + ScrollTrigger**: For **Macro Motion** (full-page scrolls, pinning, clip-path wipes).
- **Framer Motion**: For **Micro Motion** (button magnetism, entry reveals, staggered text).
- **Isolation**: Use GSAP in `useEffect`. Use Framer Motion for `hover`/`active` states.

### 3. Navigation
- "The Floating Island" pill-shaped navbar. Transparent at top, blurs to `bg/[background]/60 backdrop-blur-xl` on scroll.

### 4. Interactive Artifacts
- Replace static cards with **Functional Software Micro-UIs**:
    - **Card 1 — Diagnostic Shuffler**: Overlapping vertical cycling cards.
    - **Card 2 — Telemetry Typewriter**: Monospaced live-text feed with a pulsing cursor.
    - **Card 3 — Protocol Scheduler**: Weekly grid with an animated cursor interaction.

---

## Skills

These skills live in `.agent/skills/` and activate automatically.

- **`ui-ux-pro-max`**: Design system setup (palette, type, spacing).
- **`frontend-design`**: Visual implementation and layout.
- **`react-best-practices`**: Code quality, performance, and accessibility auditing.

---

## Learned Rules
1. [UX] Always stick to Light Mode unless explicitly asked — user preference for light mode aesthetic.
2. [CODE] No placeholders. Every file must be a 100% complete delivery.
