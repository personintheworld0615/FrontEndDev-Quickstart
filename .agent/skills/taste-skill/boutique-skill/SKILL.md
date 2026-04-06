---
name: boutique-narrative-ui
description: Premium "Modern Artisanal" interfaces. Fuses warm, tactile neutrals with layered "scrapbook" layouts, organic image masking, and high-end narrative spacing. For high-end lifestyle, hospitality, or physical-product brands.
---

# SKILL: Boutique Narrative & Modern Artisanal UI

## 1. Skill Meta
**Name:** Boutique Narrative & Modern Artisanal UI (The "Loro" Paradigm)
**Description:** Extreme proficiency in architecting digital experiences that feel like high-end physical stationery or editorial menus. This skill moves away from "Standard Digital" (White background, rigid grids, generic icons) in favor of a tactile, story-driven, and "imperfect-perfect" aesthetic.

## 2. The Boutique Manifesto
*   **Warm Neutral Foundations**: Pure `#ffffff` (White) is prohibited. Use "Oat" (`#fbf3e0`), "Sand", or "Cream" bases.
*   **The Trinity Typology**: Every build MUST use a three-font mix:
    *   **Hero Serif**: High-character, rounded serif (Fraunces, Newsreader).
    *   **Utility Sans**: Clean, modern sans-serif (Geist, Inter).
    *   **Label Mono**: Monospaced labels (Space Mono, JetBrains Mono) for captions and fine-print.
*   **The "Sticker" Offset**: Break the grid by layering elements. Use `rotate-2` or `rotate-[-1deg]` on small illustrations, text blocks, or "badges" to simulate a scrapbook-style placement.
*   **Organic Masking**: Images should not always be rectangles. Use large, non-uniform border-radii (e.g., `rounded-[4rem_2rem_6rem_3rem]`) or wavy CSS masks.
*   **Narrative Verticality**: Force "Density: 3" spacing. 100px-200px between sections. Every scroll beat is a "Chapter," not a block.

## 3. Engineering Guidelines

### A. Surface & Border Logic
*   **Micro-Texture**: Add a subtle "Noise Overlay" (0.05 opacity) to all sections to remove the "flat digital" feel.
*   **Dot Grids**: Use a repeating dot-matrix background pattern in key descriptive sections.
*   **Line Weights**: Use purely decorative vertical or horizontal dotted lines to separate testimonials or list items.

### B. Typography Logic
*   **Headlines**: Massive scale (8vw+) but controlled density.
*   **Paragraphs**: Keep lines short (max 65ch) and center-aligned ONLY if the typography is serif and the spacing is vast.

### C. Creative Call-to-Actions (CTAs)
*   **Custom Labels**: Avoid generic "Submit" or "Order." Use contextual, punchy labels (e.g., "Secure Your Dozen", "Order for Pickup").
*   **Pill Styling**: Use large, capsule-shaped CTAs with generous horizontal padding.

## 4. CSS Boilerplate (Tailwind)
```css
.boutique-hero {
  @apply bg-[#fbf3e0] text-[#3C2F2F] min-h-[100dvh] flex flex-col justify-center;
}

.sticker-badge {
  @apply inline-block px-4 py-1 bg-[#D97757] text-[#fbf3e0] font-mono text-[10px] rotate-[-2deg] rounded-full;
}
```
