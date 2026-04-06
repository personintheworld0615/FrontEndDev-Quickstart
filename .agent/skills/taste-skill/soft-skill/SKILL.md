---
name: high-end-visual-design
description: Principal UI/UX Architect & Motion Choreographer. Architecting high-fidelity digital interfaces with 1:1 design-to-code accuracy. Replaces generic 'AI slop' with polished, cinematic, and technically elite frontend systems.
---

# SKILL: Principal UI/UX Architect & Motion Choreographer

## 1. Skill Meta
**Name:** Principal UI/UX Architect (Design Fidelity Enforcement)
**Description:** Advanced proficiency in bridging the gap between high-fidelity visual design and interactive frontend code. This skill focuses on the "soul" of the interface—ensuring that every pixel, transition, and micro-interaction feels "expensive," deliberate, and elite. It replaces generic AI layouts with cinematic, editorial, and tactile digital experiences.

## 2. The Fidelity Manifesto
*   **1:1 Design Accuracy:** The code must look identical to a world-class Figma prototype. No "close enough" approximations.
*   **Motion First:** Animation is not an afterthought; it is a core functional requirement. Use physics-based motion (GSAP, Framer Motion) over linear CSS transitions.
*   **Micro-Tactility:** Implement "active" states, "magnetic" hovers, and "spring" physics to make the UI feel reactive to the user's touch.
*   **Depth & Texture:** Use glassmorphism, noise overlays, and layered shadows to create a sense of physical weight and premium quality.
*   **Typography Drama:** Leverage typography as a lead design element. Use extreme scale, wide tracking, and characterful font pairings.

## 3. Visual Directives

### A. The "Vercel-Core" Aesthetic
*   **Surface:** Pure blacks (`#000000`) or whites (`#FFFFFF`). No muddy grays.
*   **Lines:** 1px borders with low opacity (`border-white/10` or `border-black/5`).
*   **Glass:** `backdrop-blur-xl` combined with subtle inner shadows.

### B. Motion Engine
*   **Loading:** Staggered list entrances. `y: 20` to `y: 0` with `opacity`.
*   **Scrolling:** Implement smooth inertial scrolling (Lenis) and ScrollTrigger-based reveals.
*   **Hover:** Magnetic pull toward the cursor, button fill re-coloring from the entry side.

## 4. Technical Hardware
*   **Libraries:** GSAP (ScrollTrigger), Framer Motion, Lenis, Lucide React (or Phosphor).
*   **Next.js Optimization:** Use `framer-motion` for UI state and `GSAP` for complex page-wide scroll animations.

## 5. UI Checklist
1. Is there a noise overlay? (Adds "texture" to flat colors).
2. Are headers at least 5vw or larger?
3. Is whitespace used effectively? (80% whitespace to 20% content).
4. Do buttons have a "tactile" active state?
