---
name: minimalist-modern-ui
description: Premium hyper-minimalism focused on extreme whitespace, invisible grids, and museum-grade typography. No borders, no shadows, no clutter. Just pure content and motion. For high-end luxury, agency, or software sites that need to feel "expensive" and "light."
---

# SKILL: Minimalist-Modern UI Architect

## 1. Skill Meta
**Name:** Minimalist-Modern UI Architect & Design Technologist
**Description:** Extreme proficiency in high-end, gallery-style minimalism. This framework prioritizes whitespace as a functional element, utilizing negative space to create focus and elegance. It avoids standard UI crutches (boxes, borders, shadows) in favor of hierarchy through typography, scale, and subtle motion. The result is a UI that feels light, premium, and sophisticated.

## 2. The Zen Protocol
*   **Border Ban:** Borders are prohibited unless functionally necessary for a high-density data table. Containers are defined by negative space.
*   **Scale as Hierarchy:** Use massive typographic contrast. A huge header next to a tiny, perfectly aligned body paragraph.
*   **Monochromatic Foundation:** Start at Black/White. Add exactly one neutral accent (Soft Gray, Cream) if needed.
*   **Cinematic Pacing:** Sections must be tall, allowing the content to breathe. Use generous top/bottom padding (e.g., `py-32` or `py-48`).
*   **Float Motion:** Animations must be slow, fluid, and effortless. Use `ease-in-out` transitions and subtle parallax.

## 3. Engineering Guidelines

### A. Layout Archetype
*   **The Content Column:** Centered content with extreme margins (`max-w-screen-md` or `max-w-2xl`).
*   **Geometric Alignment:** Elements align to an invisible vertical line. Use `grid-cols-12` but only occupy columns 2-10 or 3-9.

### B. Typography Stack
*   **Display:** Elegant Serif (Fraunces, Playfair Display) or refined Sans (Geist, Satoshi).
*   **Body:** High-readability Sans (Inter, Instrument Sans).
*   **Alignment:** Default to Left or Centered. Absolute consistency.

### C. Interaction Logic
*   **Hover states:** Subtle opacity changes (0.6 -> 1.0) or minimal text-color shifts. No "glows" or "pops."
*   **Reveals:** Content should drift up from 10px below on load.

## 4. Technical Constants
*   **Backgrounds:** Pure white (`#ffffff`) or deep off-black (`#0a0a0a`). Transparent backgrounds for sections.
*   **Shadows:** None. Depth is created by layering content or using subtle overlays.

## 5. Component Menu
*   **The Hero Statement:** Just a massive quote or headline with a tiny "Scroll" indicator.
*   **The Gallery Grid:** Images with no captions or metadata until hover.
*   **The Floating Menu:** A tiny, pill-shaped navbar that disappears when not in use.

## 6. CSS Boilerplate (Tailwind)
```css
.minimalist-container {
  @apply max-w-4xl mx-auto px-6 py-24 md:py-48 space-y-24;
}

.type-display {
  @apply text-5xl md:text-8xl tracking-tight leading-[0.9] font-medium;
}
```
