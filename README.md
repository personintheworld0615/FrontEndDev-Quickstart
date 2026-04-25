# Frontend Quickstart

An **AntiGravity** quickstart for building production-quality frontend projects — no design experience required.

Built on **Next.js 15 (React 19)**, **Tailwind CSS v4**, and **TypeScript**, deployed to **Vercel**.

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
- **Cinematic landing page builder** — 7 aesthetic presets (including **Preset G: Modern Artisanal**), full design system per preset, scaffolds a complete Next.js site in one conversation.
- **7 Bundled Skills** that activate automatically based on user intent.
- **21st.dev Integration** — Instant access to the world's best shadcn/ui React components.
- **Self-correcting rules engine** — corrects the agent once, it remembers for the whole project.

---

## 🔥 Slash Commands (Ultra-Speed)
Type these for instant execution without writing full sentences.

| Command | Action | Mode |
|---|---|---|
| **`/build [concept]`** | Scaffolds a full 100% complete landing page. | Cinematic |
| **`/audit`** | Full UI/UX, Performance, and A11y code audit. | Quality |
| **`/launch`** | Production readiness (SEO + OG Cards). | Devops |
| **`/debug [error]`** | One-shot fix for any tech/build error. | Support |
| **`/crud [model]`** | Scaffolds a full Admin/Dashboard page. | Data |

---

## Example Flow
| What you want | What to say |
|---|---|
| A full site from scratch | **`/build coffee shop`** |
| Deployment | **`/launch`** |

---

## Bundled skills

These live in `.agent/skills/` and activate automatically — they are your elite teammates.

| Skill | Expert Domain |
|---|---|
| **`ui-ux-pro-max`** | Advanced Design Systems (Next-level palettes, fonts, spacing). |
| **`emil-design-eng`** | UI polish, custom easing, and high-fidelity physics. |
| **`impeccable`** | **Output Guard**: Zero placeholders, 100% complete file deliveries. |
| **`pixel-perfect-audit`** | Seniors-only structural and accessibility auditing (WCAG 2.1). |
| **`taste`** | **Aesthetic Suites**: Includes Minimalist, Brutalist, and Boutique styles. |
| **`launch-expert`** | The "Final 20%" (SEO, OG Cards, JSON-LD, Sitemap). |
| **`21st-dev-mcp`** | AI-powered React component generation & registry. |

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
- **Install the 21st.dev MCP** — Run `npx @21st-dev/cli@latest install <client>` to enable magic component generation.
