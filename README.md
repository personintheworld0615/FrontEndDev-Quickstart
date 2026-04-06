# Frontend Quickstart

An **AntiGravity** quickstart for building production-quality frontend projects — no design experience required.

Built on **Next.js 14**, **Tailwind CSS**, and **TypeScript**, deployed to **Vercel**.

---

## Setup

**1. Clone this quickstart into your project folder**
```bash
git clone <this-repo-url> my-project
cd my-project
```

**2. Open in your IDE**
Ensure you have the AntiGravity agent active in this workspace.

**3. Initialize the environment**
The `AGENT.md` and all skills load automatically upon opening the workspace.

---

## What you get

- **Prompt router** — describe what you want in plain English, AntiGravity matches it to the right template and asks at most 2 questions before building.
- **Cinematic landing page builder** — 5 aesthetic presets, full design system per preset, scaffolds a complete Next.js site in one conversation.
- **3 bundled skills** that activate automatically based on user intent.
- **Self-correcting rules engine** — corrects the agent once, it remembers for the whole project.

---

## 🔥 Slash Commands (Ultra-Speed)
Type these for instant execution without writing full sentences.

| Command | Action | Mode |
|---|---|---|
| **`/build [brand]`** | Scaffolds a full 100% complete landing page. | Cinematic |
| **`/ui [type]`** | Builds a high-fidelity component (e.g. `/ui pricing`). | Standard |
| **`/minimalist`** | Activates the **Zen Protocol** (Whitespace, Scale, Hierarchy). | Minimal |
| **`/brutalist`** | Activates **Tactical/Industrial UI** (Grids, Monospace). | Brutalist |
| **`/soft`** | Activates **High-Fidelity/Vercel UI** (Glass, Noise, GSAP). | Cinematic |
| **`/audit`** | Full UI/UX, Performance, and A11y code audit. | Quality |
| **`/launch`** | Production readiness (SEO + Open Graph + Deployment). | Devops |

---

## Example Flow
| What you want | What to say |
|---|---|
| A full site from scratch | **`/build coffee shop`** |
| A specific "Tactical" UI | **`/brutalist dashboard`** |
| A "Zen" portfolio | **`/minimalist gallery`** |
| A high-end Vercel UI | **`/soft hero section`** |
| Deployment | **`/launch`** |

---

## Bundled skills

These live in `.agent/skills/` and activate automatically — they are your elite teammates.

| Skill | Expert Domain |
|---|---|
| **`copywriter-prime`** | High-conversion headlines and eliminating "AI slop" copy. |
| **`ui-ux-pro-max`** | Advanced Design Systems (Next-level palettes, fonts, spacing). |
| **`taste-skill`** | "Vercel-core" aesthetics and high-density UI logic. |
| **`frontend-design`** | Immersive 2025 interactions and GSAP/Framer Motion. |
| **`react-best-practices`** | React 19 standards, performance (CLS), and accessibility. |
| **`launch-expert`** | The "Final 20%" (SEO, OG Cards, JSON-LD, Sitemap). |

---

## Project structure (after scaffolding)

```
app/
  layout.tsx       # fonts, global providers
  page.tsx         # main page
  globals.css      # Tailwind + noise overlay
components/        # split here if page.tsx > 600 lines
public/
.agent/
  skills/          # bundled skills (auto-loaded)
AGENT.md           # AI instructions (don't delete)
```

---

## Pro Tips

- **Start with the landing page builder** — just say "build me a landing page" to see the full power.
- **Minimalist approach** — if you prefer a clean look, ask for "Preset E" or "Hyper-Minimal".
- **Ask for a review after any build** — say "review what you just built" for expert feedback.
- **AGENT.md learns from corrections** — correct the agent once and it remembers for the rest of the project.
