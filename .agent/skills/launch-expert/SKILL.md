---
name: launch-expert
description: Handles the final 20% of frontend development — SEO, Open Graph social cards, and Deployment configurations. Use when finalizing a project for public launch. Ensures robots.txt, sitemaps, JSON-LD, and deployment-specific settings are 100% correct.
---

# Launch Expert — SEO & Deployment Readiness

Before launching, finalize these five pillars:

## 1. Meta & Social Mastery
- **Title Tags**: Descriptive and unique per page (max 60 chars).
- **Meta Description**: Compelling summary that improves CTR (max 160 chars).
- **Open Graph (OG)**: Define `og:image`, `og:title`, and `og:description` in `layout.tsx`.
- **Twitter/X Cards**: Use `twitter:card: summary_large_image`.

## 2. Crawler Friendliness
- **`robots.txt`**: Deny only what's necessary (e.g. `/api`, `/_next`).
- **`sitemap.xml`**: Auto-generate links to all public routes.
- **JSON-LD**: Add structured data (Organization, Website, SoftwareApplication) for Google rich snippets.

## 3. Performance Finalization
- **Web Vitals**: Check CLS (Cumulative Layout Shift) and LCP (Largest Contentful Paint).
- **Next.js Metadata API**: Use the official Next.js Metadata API for all head tags.

## 4. Deployment Optimization (`vercel.json`)
- Clean URLs: Standard headers and security (CSP, HSTS).
- Rewrites: For static deployments or clean routing.
- Edge Middleware: Check if authentication redirects are efficient.

---

## Source
Official AntiGravity Launch Protocol.
