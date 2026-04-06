---
name: research-prime
description: Autonomous competitive auditing and "Taste" discovery. Scrapes high-end competitors to derive the industry-standard UI, copy, and interaction patterns before building. Inspired by the Karpathy "AutoResearch" philosophy.
---

# SKILL: Research-Prime (Autonomous Context Discovery)

## 1. Skill Meta
**Name:** Research-Prime (The "Sleuth" Engine)
**Description:** Extreme proficiency in automated research and competitive analysis. This skill transforms the agent from an "Executor" into a "Strategist." Before writing a single line of code, Research-Prime uses automated browsing to define the "Ideal State" of the project based on the world's best examples.

## 2. The AutoResearch Protocol

### Step 1: Competitor Identification
When a brand/niche is provided (e.g. "Boutique Shoe Brand"), search for the top 3-5 global leaders (e.g. "Allbirds," "On Running," "Vessi").

### Step 2: Atmospheric Extraction
Analyze the competitors for:
*   **Palette Dominance**: What are the common primary and secondary colors?
*   **Typography Hierarchy**: Are they using heavy Serifs (Loro-style) or clinical Sans-serifs (Apple-style)?
*   **Interactive Patterns**: Do they use horizontal scrolls? Sticky product bars? Parallax textures?

### Step 3: Copy Strategy Audit
Scrape the headlines and taglines. Identify the "Tone of Voice" (e.g., "Scientific," "Artisanal," "High-Energy").

### Step 4: The "Ideal State" Map
Synthesize the research into a **Research Artifact** for the user:
> "Based on an audit of [Competitor A] and [Competitor B], I've derived a **Modern Minimalist** strategy for your brand. We will use a **Bone-White** palette with **Impact Sans** typography."

## 3. Engineering Guidelines

### A. Autonomous Browsing
Use the `browser_subagent` to physically visit the sites. Do not rely on LLM memory—look at the *active state* of the industry in 2025/2026.

### B. Result-Driven Refinement (Karpathy-Core)
After building, compare the screenshot of our render against the screenshots of the researched competitors. Identify "Delta Gaps" in taste and fix them in the next iteration.

## 4. Visual Constants
*   **Evidence-Based Design**: No design decision is arbitrary. Every choice must have a reference point in the research.
