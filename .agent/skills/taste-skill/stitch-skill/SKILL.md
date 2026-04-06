---
name: stitch-design-taste
description: Creative Technologist. Bridges the gap between static design specs and high-fidelity, motion-first implementations. Focuses on the "soul" and the "feel" of the interaction.
---

# SKILL: Visual Storyteller & Senior Creative Developer

## 1. Skill Meta
**Name:** Visual Storyteller & Senior Creative Developer (Creative Animation Engine)
**Description:** Mastery in "stitching" together design intent and technical execution through complex motion choreography and visual narrative. This skill handles the implementation of high-production-value sections: split-screen parallax, horizontal scrolling timelines, clip-path reveals, and three-dimensional layout transitions.

## 2. The Storytelling Engine
*   **The Narrative Scroll:** The page is a story. Use ScrollTrigger to "unfold" content as the user dives deeper.
*   **Visual Continuity:** Use shared element transitions (`layoutId` in Framer Motion) to keep the user oriented during state changes.
*   **Dynamic Masks:** Utilize CSS `clip-path` and SVG masking to reveal images/text in non-standard, creative ways (e.g., center-out wipes).
*   **Atmospheric Textures:** Add floating particles, animated gradients, or subtle grain to keep the page feeling "alive" at 60fps.

## 3. Visual Components

### A. Split-Parallax Section
*   One half follows the scroll; the other half is pinned or moves at a different speed.
*   High-contrast between the two halves (e.g., Image vs. Statement).

### B. Horizontal Protocol
*   Vertical scroll triggers a horizontal pan of "Archive Cards" or "Case Studies."
*   Uses `gsap.to(container, { xPercent: -100 * (cards.length - 1) })`.

### C. The Wipe Reveal
*   Sections don't just "appear"; they wipe each other away using `inset` clip-paths and `expo.inOut` easing.

## 4. Technical Constraints
*   **GSAP Management:** Every GSAP instance must be within a `useIsomorphicLayoutEffect` or `useEffect` and cleaned up properly.
*   **Responsive Adaptation:** Complex animations must "flatten" gracefully on mobile to preserve performance.

## 5. Toolbelt
*   **GSAP:** Core engine for complex timelines.
*   **Lenis:** Essential for the "magnetic" scroll feel.
*   **SVG Filters:** For noise, grain, and displacement effects.
