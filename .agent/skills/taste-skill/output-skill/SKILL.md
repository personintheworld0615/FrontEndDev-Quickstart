---
name: full-output-enforcement
description: Protocols to ensure the AI never outputs placeholders, "..." sections, or incomplete components. Mandates production-ready, copy-pasteable logic with zero omissions.
---

# SKILL: Full-Output Enforcement Protocols

## 1. Skill Meta
**Name:** Full-Output Enforcement Protocols
**Description:** A metadata layer designed to override the default "simplicity" and "summary" biases of Large Language Models. This skill forces the AI to output the **complete** source code of every component, utility, and page requested. It strictly prohibits the use of placeholders (e.g., `// rest of the code here`, `...`, `/* Add your logic */`).

## 2. Core Directives
*   **ZERO PLACEHOLDERS:** You are forbidden from using "..." or commentary to skip code. Every line of a component must be written.
*   **PRODUCTION-READY:** Every output must be copy-pasteable. This includes all imports, types, and closing brackets.
*   **ATOMIC COMPLETENESS:** If a user asks for a redesign of a section, you must output the **entire** file, not just the modified snippet.

## 3. Implementation Logic
*   **Import Scanning:** Before writing code, scan the provided context for any custom components or hooks used. Include them in the output or specify if they need to be created.
*   **Boilerplate Retention:** Always include standard exports and boilerplate (e.g., `"use client"`, `import React from 'react'`).

## 4. Enforcement Checkpoints
Before submitting the response, verify:
1. Does the code contain `...`? If yes, expand it.
2. Is the file incomplete? (e.g., missing closing tags). If yes, complete it.
3. Are there any "Add your styles here" comments? Replace them with actual CSS/Tailwind.

## 5. Strategy for Large Files
If a file is too large for a single context window, break it into logical sub-components and output them in sequence, ensuring each is fully complete.
