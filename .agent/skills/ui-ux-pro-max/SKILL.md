---
name: ui-ux-pro-max
description: Comprehensive design intelligence for building professional UI/UX across multiple platforms and frameworks. Use when designing new pages, creating/refactoring UI components, choosing color schemes, typography, reviewing UI for accessibility/visual consistency, implementing navigation, animations, or responsive behavior. Skip for pure backend, API, database, or infrastructure work.
---

# UI/UX Pro Max — Design Intelligence

## Overview

Comprehensive design guide containing 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, and HTML/CSS).

## When to Apply

**Must Use:**
- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for user experience, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions (style, information hierarchy, brand expression)
- Improving perceived quality, clarity, or usability of interfaces

**Recommended:**
- UI looks unprofessional but reason unclear
- Receiving feedback on usability or experience
- Pre-launch UI quality optimization
- Aligning cross-platform design (Web / iOS / Android)
- Building design systems or reusable component libraries

**Skip:**
- Pure backend logic development
- API or database design only
- Performance optimization unrelated to interface
- Infrastructure or DevOps work
- Non-visual scripts or automation tasks

---

## Rule Categories by Priority (1–10)

| Priority | Category | Impact | Key Checks |
|----------|----------|--------|-----------|
| 1 | Accessibility | CRITICAL | Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels |
| 2 | Touch & Interaction | CRITICAL | Min size 44×44px, 8px+ spacing, Loading feedback |
| 3 | Performance | HIGH | WebP/AVIF, Lazy loading, Reserve space (CLS < 0.1) |
| 4 | Style Selection | HIGH | Match product type, Consistency, SVG icons (no emoji) |
| 5 | Layout & Responsive | HIGH | Mobile-first breakpoints, Viewport meta, No horizontal scroll |
| 6 | Typography & Color | MEDIUM | Base 16px, Line-height 1.5, Semantic color tokens |
| 7 | Animation | MEDIUM | Duration 150–300ms, Motion conveys meaning, Spatial continuity |
| 8 | Forms & Feedback | MEDIUM | Visible labels, Error near field, Helper text, Progressive disclosure |
| 9 | Navigation Patterns | HIGH | Predictable back, Bottom nav ≤5, Deep linking |
| 10 | Charts & Data | LOW | Legends, Tooltips, Accessible colors |

---

## 1. Accessibility (CRITICAL)

- Color contrast minimum 4.5:1 ratio for normal text (large text 3:1)
- Focus states with visible focus rings 2–4px
- Descriptive alt text for meaningful images
- `aria-label` for icon-only buttons
- Tab order matching visual order with full keyboard support
- Labels with `for` attribute on form inputs
- Skip to main content links for keyboard users
- Sequential heading hierarchy (h1→h6)
- Information conveyed by icon/text, not color alone
- Support system text scaling without truncation
- Respect `prefers-reduced-motion` settings
- Meaningful `accessibilityLabel`/`accessibilityHint` for screen readers
- Cancel/back options in modals and multi-step flows
- Keyboard alternatives for drag-and-drop interactions

---

## 2. Touch & Interaction (CRITICAL)

- Minimum touch target **44×44pt (Apple) / 48×48dp (Material)**
- Minimum **8px/8dp gap** between touch targets
- Use click/tap for primary interactions; avoid hover-only reliance
- Disable button during async; show spinner or progress
- Clear error messages near problem area
- Add `cursor-pointer` to clickable elements
- Avoid horizontal swipe on main content
- Use `touch-action: manipulation` to reduce 300ms delay
- Platform-consistent gestures; don't redefine standards
- Don't block system gestures (Control Center, back swipe, etc.)
- Visual feedback on press (ripple/highlight; state layers)
- Haptic feedback for confirmations (avoid overuse)
- Keep primary touch targets away from notch, Dynamic Island, gesture bar, screen edges

---

## 3. Performance (HIGH)

- Use **WebP/AVIF**, responsive images (`srcset`/`sizes`), lazy load non-critical assets
- Declare `width`/`height` or use `aspect-ratio` to prevent layout shift
- `font-display: swap/optional` to avoid invisible text
- Preload only critical fonts; avoid overusing preload
- Lazy load non-hero components via dynamic import
- Split code by route/feature; load third-party scripts `async`/`defer`
- Virtualize lists with 50+ items
- Keep per-frame work under ~16ms for 60fps
- Use skeleton screens instead of long spinners (>1s operations)
- Keep input latency under ~100ms for taps/scrolls
- Use debounce/throttle for high-frequency events
- Provide offline state messaging and basic fallback

---

## 4. Style Selection (HIGH)

- Match style to product type; use same style across all pages
- Use SVG icons (Heroicons, Lucide), **not emojis**
- Choose palette from product/industry
- Align shadows and blur with chosen style
- Respect platform idioms (iOS HIG vs Material)
- Make hover/pressed/disabled states visually distinct on-style
- Use consistent elevation/shadow scale
- Design light/dark variants together for brand consistency
- Use one icon set/visual language across product
- Each screen should have one primary CTA; secondary actions subordinate

---

## 5. Layout & Responsive (HIGH)

- `width=device-width initial-scale=1` (never disable zoom)
- Design mobile-first, then scale up
- Use systematic breakpoints (375 / 768 / 1024 / 1440)
- Minimum **16px body text** on mobile (avoids iOS auto-zoom)
- Mobile 35–60 chars per line; desktop 60–75 chars
- No horizontal scroll on mobile
- Use **4pt/8dp incremental spacing system**
- Consistent `max-width` on desktop (max-w-6xl / 7xl)
- Fixed navbar/bottom bar must reserve safe padding
- Prefer `min-h-dvh` over `100vh` on mobile

---

## 6. Typography & Color (MEDIUM)

- Use 1.5–1.75 line-height for body text
- Limit to 65–75 characters per line
- Match heading/body font personalities
- Consistent type scale (e.g. 12 14 16 18 24 32)
- Darker text on light backgrounds (e.g. slate-900 on white)
- Define semantic color tokens (primary, secondary, error, surface)
- Dark mode uses desaturated/lighter tonal variants
- Test contrast separately for light/dark; must meet 4.5:1 (AA) or 7:1 (AAA)
- Include icon/text for functional color; avoid color-only meaning
- Use tabular/monospaced figures for data columns

---

## 7. Animation (MEDIUM)

- Use **150–300ms** for micro-interactions; complex transitions ≤400ms
- Use `transform`/`opacity` only; avoid animating `width`/`height`/`top`/`left`
- Show skeleton or progress when loading exceeds 300ms
- Animate 1–2 key elements per view max
- Use `ease-out` for entering, `ease-in` for exiting
- Every animation must express cause-effect relationship, not just decorative
- Maintain spatial continuity in page/screen transitions
- Exit animations shorter than enter (~60–70% of enter duration)
- Stagger list/grid item entrance by 30–50ms per item
- Animations must be interruptible; never block user input during animation

---

## 8. Forms & Feedback (MEDIUM)

- Visible label per input (not placeholder-only)
- Show error below the related field
- Loading then success/error state on submit
- Mark required fields (e.g. asterisk)
- Auto-dismiss toasts in 3–5s
- Confirm before destructive actions
- Validate on blur (not keystroke)
- Use semantic input types to trigger correct mobile keyboard
- Allow undo for destructive or bulk actions
- Error messages must state cause + how to fix
- Auto-focus first invalid field after submit error
- Mobile input height ≥44px for touch targets

---

## 9. Navigation Patterns (HIGH)

- Bottom navigation **max 5 items**; use labels with icons
- Use drawer/sidebar for secondary navigation
- Back navigation must be predictable and consistent; preserve scroll/state
- All key screens must be reachable via deep link / URL
- iOS: use bottom Tab Bar for top-level navigation
- Android: use Top App Bar with navigation icon
- Navigation items must have both icon and text label
- Current location visually highlighted in navigation
- Modals must offer clear close/dismiss affordance
- Web: use breadcrumbs for 3+ level deep hierarchies
- Never silently reset navigation stack or jump to home
- Navigation placement must stay same across all pages

---

## 10. Charts & Data (LOW)

- Match chart type to data type (trend → line, comparison → bar, proportion → pie/donut)
- Use accessible color palettes; avoid red/green only pairs
- Provide table alternative for accessibility
- Always show legend; position near chart
- Provide tooltips/data labels on hover/tap showing exact values
- Label axes with units and readable scale
- Charts must reflow or simplify on small screens
- Show meaningful empty state when no data exists
- For 1000+ data points, aggregate or sample; provide drill-down
- Avoid pie/donut for >5 categories; switch to bar chart
- Legends should be clickable to toggle series visibility

---

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent family and style
- [ ] Official brand assets with correct proportions
- [ ] Pressed-state visuals don't shift layout or cause jitter
- [ ] Semantic theme tokens used consistently

### Interaction
- [ ] All tappable elements provide pressed feedback
- [ ] Touch targets meet minimum size (44×44pt iOS, 48×48dp Android)
- [ ] Micro-interaction timing in 150–300ms range
- [ ] Disabled states visually clear and non-interactive
- [ ] Screen reader focus order matches visual order

### Light/Dark Mode
- [ ] Primary text contrast ≥4.5:1 in both modes
- [ ] Secondary text contrast ≥3:1 in both modes
- [ ] Dividers/borders and states distinguishable in both modes
- [ ] Modal/drawer scrim opacity strong enough (typically 40–60% black)
- [ ] Both themes tested before delivery

### Layout
- [ ] Safe areas respected for headers, tab bars, bottom CTA bars
- [ ] Scroll content not hidden behind fixed/sticky bars
- [ ] Verified on small phone, large phone, tablet (portrait + landscape)
- [ ] 4/8dp spacing rhythm maintained across component, section, page levels

### Accessibility
- [ ] All meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, and clear error messages
- [ ] Color not the only indicator
- [ ] Reduced motion and dynamic text size supported

---

## Source

Original skill by nextlevelbuilder: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
