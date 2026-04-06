---
name: pixel-perfect-audit
description: Seniors-only structural and accessibility auditing. Ensures 100% WCAG 2.1 compliance, zero-prop-drilling, and high-performance React 19 standards.
---

# SKILL: Pixel-Perfect Audit & Quality Guard

## 1. Skill Meta
**Name:** Pixel-Perfect Audit (The "Sentinel" Protocol)
**Description:** Extreme proficiency in auditing frontend code for professional standards. This skill moves beyond "working code" and focuses on "excellent code." It eradicates junior patterns (prop-drilling, bad naming, redundant logic) and enforces 2025 performance standards.

## 2. The Sentinel Checklist

### A. Visual Fidelity (The 1:1 Rule)
*   **CLS Check**: Every animation (GSAP/Framer) must be audited for Cumulative Layout Shift. Use `absolute` or `transform` exclusively for movement.
*   **Typography Scale**: Check for 1:1 scale ratios (e.g., 4vw headlines vs 16px body).
*   **Noise Integrity**: Ensure the global noise overlay is at exactly **0.05 opacity**—invisible to the conscious mind, but present in the "feel."

### B. Accessibility (The Human Rule)
*   **Color Contrast**: All text on Oat, Terracotta, or Deep Earth must meet WCAG AA standards.
*   **Aria Labels**: Every interactive element (`/boutique` islands, `/food` menus) must have descriptive `aria-label` or `aria-expanded` states.
*   **Semantic HTML**: Never use generic `<div>`. Use `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.

### C. Architecture (The Senior Rule)
*   **Prop-Drilling**: No more than 2 levels of prop-drilling allowed. Use Context or Jotai for global state (e.g., cart, auth).
*   **Server/Client Boundaries**: Strictly separate "interactive" client components from "static" server components to minimize JS bundle size.
*   **Naming**: Use industry-standard naming (e.g., `BoutiqueHero`, `ArtifactCard`).

## 3. Engineering Guidelines

### A. Automated Review Trigger
When `/audit` is called, run a mental simulation of:
1.  **Lighthouse Performance**: Target 95+.
2.  **Accessibility**: Target 100.
3.  **Best Practices**: Target 100.

### B. Refactor Logic
If a junior pattern is found (e.g., `onClick` on a `div`), the Sentinel must instantly refactor it into a proper `<button>` with the correct utility classes.

## 4. Visual Constants
*   **Performance**: Use `will-change-transform` for all GSAP-heavy elements.
*   **Loading**: Every high-fidelity site must have a custom "Fade-to-Brand" transition effect during hydration.
