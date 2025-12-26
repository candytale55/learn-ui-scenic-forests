# Agent Rules: Scenic Forests Reconstruction

## 🚦 Execution Protocol (IMPORTANT)
1. **Passive Role:** The assistant is currently in "Context Absorption" mode.
2. **Wait for Prompt:** Do NOT generate any HTML, CSS, or JS code until I explicitly say: "Execute Build [Section Name]".
3. **Acknowledgment:** Your only immediate response should be a confirmation that you have stored these rules and the variable system.

## 🎯 Primary Goal
Reconstruct the legacy "Scenic Forests" project into a professional, accessible, and maintainable multi-language site using a Semantic-Functional hybrid CSS approach and Vite.

## 🏗️ Architectural Rules
1. **Tooling:** Vite-based workflow. Assume a directory-based multi-language structure (e.g., `/en/`, `/es/`).
2. **Style Reset:** Apply `box-sizing: border-box`. Normalize images: `max-width: 100%; display: block;`.
3. **Mobile-First:** Baseline viewport is 390px. Use `min-width` media queries for scaling.
4. **Nomenclature:** Use Semantic names for sections (`.hero`, `.amenities`) and Functional modifiers for components (e.g., `.btn.btn-primary.cta`). NO BEM.
5. **Separation of Concerns:** 
   - `variables.css` (The tokens provided above)
   - `main.css` (Global resets and layout)
   - `components/` (nav.css, buttons.css, cabin-cards.css)

## ♿ Accessibility & Quality Standards
1. **Semantic HTML5:** Use `<main>`, `<section>`, `<article>`, and `<header>`.
2. **Interactive Elements:** Navigation toggles and "Exit" buttons must be `<button>` elements with appropriate `aria-label` and `aria-expanded` attributes.
3. **Heading Hierarchy:** No skipping levels. Ensure H1 -> H2 -> H3 flow.
4. **Clean GSAP:** Animate content (spans/text), not the layout containers themselves.

## 📐 Spacing & Layout Rules
1. **Ownership:** Layout owns space BETWEEN elements (via `.stack` or `gap`). Components own space INSIDE (padding).
2. **Section Spacing:** Sections own vertical rhythm via `padding: var(--section-padding) 0;`.
3. **Vp Units:** Use `min-height: 100svh` for full-screen sections.
