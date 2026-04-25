# Agent Instructions

Read this entire file before starting any task.

---

## ⚡ Quick-Triggers (Slash Commands)
- `/build [concept]` — Scaffolds a full 100% complete landing page.
- `/audit` — Triggers a full UI/UX, accessibility, and code-best-practices review.
- `/launch` — Activates **Launch Protocol** (SEO, OG Cards, Vercel Config).
- `/debug [error]` — One-shot fix for any tech/build error.
- `/crud [model]` — Scaffolds a full Admin/Dashboard page.

---

## Technical Stack (NEVER DEVIATE)
- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS v4 (Unified @theme CSS-variables)
- **Language**: TypeScript (Strict Mode)
- **Animations**: GSAP 3 (for macro) + Framer Motion (for micro)
- **Scrolling**: Lenis (Smooth Scroll)
- **Deployment**: Vercel / Netlify

---

## Prompt Router
Match user intent to a shortcut or template. Fill known fields automatically, ask max 2 questions for unknowns, then execute.

## Zero-Prompt Mode
If the user provides ONLY a brand/concept (e.g. `/build coffee`), **skip all questions**. 
1. Use `ui-ux-pro-max` to derive the best industry palette/fonts.
2. Build the 100% complete page immediately.

## Shortcut Map
| Command | Intent |
|---|---|
| `/build [brand]` | `[LANDING_PAGE]` (Skip discovery if brand provided) |
| `/debug [error]` | `[DEBUG]` |
| `/audit` | `[UI_REVIEW]` |
| `/launch` | `[DEPLOY]` + `[LAUNCH_EXPERT]` |
| `/crud [model]` | `[CRUD_PAGE]` |

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

### Preset F — "Earthly Presence" (Retro-Organic)
- **Identity**: Human-centric, tactile, and warm. A move away from cold digital towards "scrapbook" craft.
- **Palette**: Terracotta `#D97757`, Oat `#E6D5C3`, Sage `#7D8F7B`, Deep Earth `#3C2F2F`.
- **Typography**: "Fraunces" (Variable) + "Space Mono".
- **Mood**: Paper grain, torn edges, organic shapes, film photography.

### Preset G — "Modern Artisanal" (Boutique Narrative)
- **Identity**: Premium high-end lifestyle / Hospitality. Fuses warm neutrals with layered layouts.
- **Palette**: Warm Oat `#fbf3e0`, Midnight Navy `#1A1A2E`, Coral Accent `#FF7F50`, Charcoal `#2A2A2A`.
- **Typography**: "Newsreader" + "Space Mono" (Label Mono).
- **Mood**: Sticker-style offsets, organic masking, tactile textures, extreme narrative whitespace.

### Preset H — "The Warm Hearth" (Gourmet Lifestyle)
- **Identity**: Local bakeries, cafes, and restaurants. Tactile, immersive, and appetizing.
- **Palette**: Crust Brown `#4B3621`, Sage `#7D8F7B`, Wine Red `#722F37`, Cream `#FFFDD0`.
- **Typography**: "Fraunces" (Variable) + "JetBrains Mono".
- **Mood**: High-density menus, live sourdough clocks, atmospheric grain, 1:1 food textures.

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
    - **Card 4 — Narrative Scroll**: Horizontal parallax track that reveals steps as the user scrolls.

### 5. 2025 Architecture & Performance
- **Component Pattern**: Use **Tailwind v4 @theme** for all colors, fonts, and radii. Components should be self-contained and leverage the global CSS design system.
- **Zero-Layout-Shift (CLS)**: Every animation must be audited for CLS. Use absolute positioning or transforms, never animating layout props (width/height/margin) directly.
- **Automated Audits**: Include a `scripts/audit.ts` that runs Lighthouse and Playwright for accessibility (a11y) and performance checks.

---

## Skills

These skills live in `.agent/skills/` and activate automatically. They are your elite teammates.

| **Domain** | **Skill** | **Expert Domain** |
|---|---|---|
| **Experience Design** | `ui-ux-pro-max` | Comprehensive design intelligence, accessibility, and user flow optimization. |
| **Visual Aesthetics** | `taste` | **Modular Taste Suite**: Includes `minimalist-ui`, `industrial-brutalist-ui`, and `high-end-visual-design`. |
| **Design Engineering** | `emil-design-eng` | UI polish, custom easing, and "invisible details" that make software feel great. |
| **Implementation** | `frontend-design` | Visual implementation, component architecture, and GSAP/Framer Motion integration. |
| **Audit & Refactor** | `pixel-perfect-audit` | Structural auditing, prop-drilling elimination, and senior-level architecture cleanup. |
| **Code Ethics** | `react-best-practices` | Performance, a11y auditing, React 19 standards, and elimination of CLS. |
| **Output Guard** | `impeccable` | Strictly enforces **zero placeholders** and 100% complete file deliveries through modular guards. |
| **Launch Protocol** | `launch-expert` | SEO (JSON-LD, Sitemap), Open Graph social cards, and Vercel/Deployment config. |
| **Component Magic** | `21st-dev-mcp` | Direct access to world-class shadcn/ui components via the 21st.dev registry. |

---

## Learned Rules
1. [UX] Always stick to Light Mode unless explicitly asked — user preference for light mode aesthetic.
2. [CODE] No placeholders. Every file must be a 100% complete delivery.
3. [DESIGN] For Artisanal builds (Preset G), utilize "Sticker Offsets" and "Arched Masking" to break the 12-column grid and simulate a physical scrapbook feel.
4. [QUALITY] Run `/audit` (Pixel-Perfect Sentinel) on every build to verify 1:1 CLS checks and WCAG 2.1 compliance.
5. [COMPLETENESS] Every generated website must be substantial (aiming for 3,000–4,000 lines of combined code and content) to ensure a "production-ready" feel and eliminate AI-generated "slop." This includes detailed sections, interactive components, and exhaustive styling.
