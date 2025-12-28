# Architecture Decision Records (ADRs) - Scenic Forests

This document records the major architectural decisions made during the reconstruction of the Scenic Forests project.

## ADR 001: Use of Vite as Build Tool and Multi-Page Application (MPA)
**Date:** 2025-12-26  
**Status:** Accepted

### Context
The original tutorial project was built using a basic browser-based environment (Scrimba). To make the project professional and ready for modern deployment, a build tool is required.

### Decision
We will use **Vite** with the Vanilla JS template. We will configure `vite.config.js` to support a **Multi-Page Application (MPA)** structure to handle both the Home and Cabins pages effectively.

### Consequences
- **Pros:** Fast development with Hot Module Replacement (HMR), professional bundling, and easy integration with libraries like GSAP and Vitest.
- **Cons:** Requires manual configuration of entry points in `vite.config.js` compared to a standard Single Page Application (SPA).

---

## ADR 002: Symmetrical Multi-language Directory Structure
**Date:** 2025-12-26  
**Status:** Accepted

### Context
The project must support at least two languages (English and Spanish). We considered using the root for English and a subfolder for Spanish, but this creates asymmetrical paths.

### Decision
We will use a **symmetrical directory structure** (`/src/en/` and `/src/es/`). A lightweight redirect script will be placed in the root `index.html`.

### Consequences
- **Pros:** Path consistency. Every language uses the same relative paths to assets (e.g., `../css/main.css`). It simplifies adding a third language in the future.
- **Cons:** Users hitting the base URL require a small redirect to land in a language folder.

---

## ADR 003: Functional-Semantic CSS Architecture (No BEM)
**Date:** 2025-12-26  
**Status:** Accepted

### Context
Standard BEM (Block Element Modifier) naming can become verbose and rigid. The goal is to create a system that is readable, reusable, and easy to maintain.

### Decision
We will adopt a **Functional-Semantic Hybrid** approach:
- Use semantic names for layout sections (e.g., `.hero`, `.testimonials`).
- Use functional/utility classes for modifiers and common components (e.g., `.btn.btn-primary.cta`).
- Enforce clear ownership of spacing: Layout owns space *between* elements; components own space *inside*.

### Consequences
- **Pros:** Cleaner HTML, more intuitive naming, and highly reusable "Stack" and "Container" utilities.
- **Cons:** Requires strict discipline to avoid "class soup" and ensuring spacing variables are used consistently.

---

## ADR 004: Unit Testing with Vitest
**Date:** 2025-12-26  
**Status:** Accepted

### Context
Even for a vanilla project, ensuring that logic (like the language switcher or navigation toggle) works correctly is vital for long-term maintenance.

### Decision
Include **Vitest** in the development stack to allow for unit testing of JavaScript logic.

### Consequences
- **Pros:** Modern, fast testing experience that shares configuration with Vite.
- **Cons:** Small increase in initial project complexity and dependencies.

---

## ADR 005: Native HTML5 Accordion for FAQ
**Date:** 2025-12-28  
**Status:** Accepted

### Context
The FAQ page requires an accordion interface to organize information (Booking, Amenities, Location) without overwhelming the user visually. We need a solution that fits our library-driven approach.

### Decision
We will use the native HTML5 `<details>` and `<summary>` elements to build the accordion component. 

### Consequences
- **Pros:** 
    - **Accessibility (a11y):** Native keyboard support and screen reader compatibility are handled by the browser automatically.
    - **Performance:** Zero JavaScript is required for the toggle logic, reducing the main thread load.
    - **Maintenance:** Extremely simple markup that is easy to replicate across languages.
- **Cons:** 
    - **Animation Limits:** Transitioning the height of a `<details>` element from "closed" to "open" is technically difficult with pure CSS (it usually snaps). We accept this trade-off in favor of accessibility and simplicity, focusing on state-based styling (icons and colors) instead of complex height animations.

---