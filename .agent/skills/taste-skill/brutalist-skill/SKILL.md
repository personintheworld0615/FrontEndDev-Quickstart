---
name: industrial-brutalist-ui
description: Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites that need to feel like declassified blueprints.
---

# SKILL: Industrial Brutalism & Tactical Telemetry UI

## 1. Skill Meta
**Name:** Industrial Brutalism & Tactical Telemetry Interface Engineering
**Description:** Advanced proficiency in architecting web interfaces that synthesize mid-century Swiss Typographic design, industrial manufacturing manuals, and retro-futuristic aerospace/military terminal interfaces. This discipline requires absolute mastery over rigid modular grids, extreme typographic scale contrast, purely utilitarian color palettes, and the programmatic simulation of analog degradation (halftones, CRT scanlines, bitmap dithering). The objective is to construct digital environments that project raw functionality, mechanical precision, and high data density, deliberately discarding conventional consumer UI patterns.

## 2. Core Directive: The Brutalist Manifesto
*   **Total Grid Determinism:** Every element must align to a strict modular 8-pixel or 4-pixel grid. No floating elements. Borders are used to define every box.
*   **Typographic Brutality:** Use massive scale for headers (e.g., 88px) paired with tiny, precise data labels (e.g., 10px). No middle ground.
*   **Utilitarian Palette:** Default to a high-contrast monochromatic base (Zinc-950/Zinc-50). Use single-bit accent colors: Safety Orange, Phosphorus Green, or Alert Red.
*   **Declassified Aesthetic:** UI should feel like a declassified government document or a restricted terminal. Use monospaced fonts for labels, numbers, and technical metadata.
*   **Mechanical Motion:** Animations must be sharp, linear, and "clicky." No smooth easing. Use step-based reveals and blinking cursors.

## 3. Visual Engineering Rules

### A. Surface & Border Logic
*   **Container Design:** Use `border-[0.5px]` or `border-[1px]` for all containers. Avoid rounded corners (`rounded-none`).
*   **Grid Overlays:** Implement a global background grid using a subtle 1px repeating pattern or SVG pattern.
*   **Mechanical Depth:** Instead of box-shadows, use "hard offsets." A 2px or 4px solid offset in a contrasting color (e.g., `shadow-[4px_4px_0px_#000000]`).

### B. Typography Stack
*   **Primary Display:** High-impact Sans-Serif Neogrotesk (Geist, Inter, or Arial Black for the "Default" feel). Over-track for headers (`tracking-tightest`).
*   **Secondary/Technical:** Monospace (JetBrains Mono, Geist Mono). Mandatory for all numbers, labels, and small text.
*   **Hierarchy:** Headers must be at least 4x the size of the body text.

### C. Tactical Textures
*   **CRT Filter:** Use an overlay SVG with a scanning line animation.
*   **Grain/Noise:** Apply a subtle noise texture to the entire background.
*   **Bitmap Dithering:** Use dithered gradients instead of smooth CSS linear-gradients.

## 4. Technical Constraints
*   **Border Styling:** Standardize `border-zinc-800` for dark mode and `border-zinc-200` for light mode.
*   **Padding:** Use strict, consistent spacing (4, 8, 16, 24, 32px).
*   **Interactions:** Hover states should be immediate color inversions or border-width changes. No transitions.

## 5. Component Menu
*   **The Command Console:** A fixed-height container with scrolling monospace logs and blinking status indicators.
*   **Metric Cluster:** A dense grouping of 3-4 numbers with wide-tracked monospace labels and "Status: OK" tags.
*   **Tactical Bento:** A grid where every cell is a self-contained module with a title bar and a border.
*   **Blueprint Background:** A background that looks like a technical drawing with measurement arrows and coordinate markers.

## 6. CSS Boilerplate (Tailwind)
```css
@layer utilities {
  .brutalist-border {
    @apply border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)];
  }
}
```
