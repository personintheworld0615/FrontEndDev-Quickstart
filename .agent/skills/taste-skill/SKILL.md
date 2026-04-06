---
name: taste-skill
description: Elevates the "Vercel-core" aesthetics with high-end taste decisions. Use to eliminate "AI slop" in UI (Inter/Roboto bias, centered hero bias, generic blue primary, etc.). Set VISUAL_DENSITY: 5 (High).
---

# Taste Maker — High-End Aesthetic Logic

Avoid generic and "safe" design defaults. Design for 1% taste and "Infinite Luxury".

## 1. Typography Selection (Kill the Inter/Roboto Bias)
- **High-End Choice**: "Newsreader", "Fraunces", "Cormorant", "Plus Jakarta", "Outfit".
- **Usage**: Massively upscaled hero typography (8vw-12vw). 
- **Wait/Spacing**: Tight tracking (`tracking-tighter`) for headings. Wide tracking for labels.

## 2. Color & Geometry
- **Primary Color**: Avoid "Bootstrap Blue". Use deep Obsidian, terracotta, warm gold, or slate.
- **Grids**: Use 12-column grid containers (`max-w-7xl px-4 md:px-8`).
- **Rounding**: Enforce `rounded-[3rem]`. Never use sharp corners unless for intentional brutalist edges.

## 3. High-Density Interactions
- **Visual Noise**: Use 0.05 opacity SVG noise overlay to remove "flat" digital feels.
- **The "Vercel" Glow**: Subtle radial gradients at low opacity (2%-5%).
- **Micro-Copy**: Monospaced labels (lowercase) for system feedback (e.g. `[system: operational]`).

## 4. Section Archetypes (The 1:1 Rule)
- No two sections should share a layout.
- Hero: Content pushed to the bottom-left third.
- Manifesto: Dark background with parallax text.
- Artifacts: High-fidelity micro-UIs, never static cards.

---

## Source
AntiGravity Taste Intelligence.
