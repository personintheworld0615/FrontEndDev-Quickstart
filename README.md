# Frontend Quickstart

An **AntiGravity** quickstart for building production-quality frontend projects — no design experience required.

Built on **Next.js 15 (React 19)**, **Tailwind CSS v4**, and **TypeScript**, deployed to **Vercel**.

---

## 🚀 Supercharge Your Agent (Recommended)
To get the most out of this Quickstart, we recommend adding these **Elite MCPs** to your chat client (Claude, Cursor, etc.):

| MCP | Purpose | Setup Link |
|---|---|---|
| **Dribbble** | Inspiration & Visual Style Extraction | [Install Dribbble MCP](https://mcp.pipedream.com/app/dribbble) |
| **Tavily** | Technical Research & Documentation Search | [Install Tavily MCP](https://mcp.pipedream.com/app/tavily) |
| **21st-dev** | World-Class React Components | (Pre-configured) |
| **StitchMCP** | Design Systems & Mockups | (Pre-configured) |

---

## ⌨️ Impeccable Command Palette
Use these commands to trigger specific design workflows. Format: `/impeccable [command]`

### 🛠️ Create & Shape
- **`teach`**: Teach Impeccable who your product is for (Run this first!).
- **`craft`**: Shape the design, then build it, all in one flow.
- **`shape`**: Discovery-driven design brief before building.

### 🔍 Evaluate & Audit
- **`audit`**: Technical quality check (Performance, A11y, Design).
- **`critique`**: Design review with scoring and persona tests.

### 💅 Refine & Polish
- **`animate`**: Add purposeful state-based motion.
- **`overdrive`**: Push limits with shaders, physics, and 60fps motion.
- **`typeset`**: Fix typography, hierarchy, and consistency.
- **`layout`**: Fix visual rhythm, spacing, and grids.
- **`bolder` / `quieter`**: Adjust the visual "volume" of the design.
- **`delight`**: Add small, memorable personality moments.

### 🏗️ Harden & System
- **`harden`**: Production-ready pass (edge cases, error states, i18n).
- **`optimize`**: Fix LCP, bundle size, and rendering performance.
- **`onboard`**: Design first-run paths and empty states.
- **`extract`**: Pull components/tokens into your design system.
- **`document`**: Generate a `DESIGN.md` for team-wide brand consistency.

---

## 🎛️ Active Controls (The Dials)
Control the "vibe" by asking me to adjust these dials (1–10):
- **Design Variance**: (1 = Symmetrical · 10 = Artsy Chaos)
- **Motion Intensity**: (1 = Static · 10 = Cinematic)
- **Visual Density**: (1 = Airy · 10 = Packed Dashboard)

---

## 💎 Bundled Skills
These live in `.agent/skills/` and activate automatically to ensure your site avoids "AI Slop."

| Skill | Expert Domain |
|---|---|
| **`impeccable`** | **Design Director**: Sets brand personality and kills generic defaults. |
| **`taste`** | **Design Engineer**: Enforces high-end layouts, OKLCH colors, and bento grids. |
| **`emil-design-eng`** | **Interaction Specialist**: Focuses on micro-animations and "invisible correctness." |
| **`full-output`** | **Output Guard**: Zero placeholders. 100% complete file deliveries. |
| **`minimalist-ui`** | **Aesthetic**: Notion/Linear vibes. Warm monochrome and crisp structure. |
| **`industrial-ui`** | **Aesthetic**: Swiss typography, mechanical language, and sharp contrast. |
| **`launch-expert`** | **Final Polish**: SEO, Open Graph, Sitemap, and Metadata. |

---

## 🎨 Image-First Pipeline
1.  **Generate**: *"Generate a reference board for a luxury brand."*
2.  **Analyze**: *"Analyze the 'Concept Spine' of that image."*
3.  **Code**: *"Implement the section exactly like the reference."*

---

## Project Structure
```
app/
  layout.tsx       # fonts, global providers
  page.tsx         # main page
  globals.css      # Tailwind + noise overlay
components/        # extracted leaf components
.agent/
  skills/          # bundled skills (auto-loaded)
AGENT.md           # Core instructions for the agent
```

---

## Pro Tips
- **Always start with `/impeccable teach`** — it creates a `.impeccable.md` file that guides all future work.
- **Avoid "AI Purple"** — the `taste` skill automatically bans oversaturated purple/blue gradients.
- **Use `min-h-[100dvh]`** — never use `h-screen` for heroes (it breaks on mobile). I do this by default.
- **Ask for a review** — after any build, say "audit what you just built" for senior-level feedback.
