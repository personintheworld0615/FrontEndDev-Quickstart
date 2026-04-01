# Frontend Quickstart

A Claude Code quickstart for building production-quality frontend projects — no design experience required.

Built on **Next.js 14**, **Tailwind CSS**, and **TypeScript**, deployed to **Vercel**.

---

## Setup

**1. Install Claude Code**
```bash
npm install -g @anthropic-ai/claude-code
```

**2. Clone this quickstart into your project folder**
```bash
git clone <this-repo-url> my-project
cd my-project
```

**3. Start Claude Code**
```bash
claude
```

That's it. The `CLAUDE.md` and all skills load automatically.

---

## What you get

- **Prompt router** — describe what you want in plain English, Claude matches it to the right template and asks at most 2 questions before building
- **Cinematic landing page builder** — 4 aesthetic presets, full design system per preset, scaffolds a complete Next.js site in one conversation
- **3 bundled skills** that activate automatically based on what you ask
- **Self-correcting rules engine** — corrects Claude once, it remembers for the whole project

---

## Example prompts

| What you want | What to say |
|---|---|
| A full landing page | "Build a landing page for my fitness app" |
| A single component | "Build a pricing card with a free and pro tier" |
| Authentication | "Add Google login that redirects to /dashboard" |
| A data dashboard | "Build a dashboard showing monthly revenue and signups" |
| Deploy to Vercel | "Deploy this project to Vercel" |
| Fix a bug | "Fix this error: cannot read property of undefined" |
| Code review | "Review my navbar component" |

---

## Bundled skills

These live in `.claude/skills/` and activate automatically — you never need to name them.

| Skill | Activates when you say |
|---|---|
| `ui-ux-pro-max` | "Choose colors / fonts / set up my design system" |
| `frontend-design` | "Build a component / page / UI" |
| `react-best-practices` | "Review my code / optimize this component" |

---

## Project structure (after scaffolding)

```
app/
  layout.tsx       # fonts, global providers
  page.tsx         # main page
  globals.css      # Tailwind + noise overlay
components/        # split here if page.tsx > 600 lines
public/
.claude/
  skills/          # bundled skills (auto-loaded)
CLAUDE.md          # AI instructions (don't delete)
```

---

## Beginner tips

- **Start with the landing page builder** — just say "build me a landing page" to see what this can do
- **Be vague on purpose** — Claude will ask the right questions, you don't need to be precise
- **Ask for a review after any build** — say "review what you just built" for plain-English feedback
- **CLAUDE.md learns from corrections** — correct Claude once and it remembers for the rest of the project
