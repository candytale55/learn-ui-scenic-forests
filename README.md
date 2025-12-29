# 🏕️ Scenic Forests

A modern, bilingual (EN/ES) cabin rental website built with Vite, featuring professional UI animations and accessibility-first design.

## 🌟 Project Overview

This project is based on the final project tutorial from Scrimba's [_Learn UI Design_](https://scrimba.com/learn-ui-design-c024) course. While the original tutorial covered the Home and Cabins pages, I significantly expanded and refactored the project to include:

- **New Pages:** FAQ and Reservations pages with custom functionality
- **Bilingual Support:** Full English and Spanish translations with symmetrical directory structure (`/en/` and `/es/`)
- **Modern Tooling:** Vite-based build system with HMR and optimized production builds
- **Professional Animations:** GSAP-powered entrance animations with staggered timing
- **Accessibility:** Native HTML5 accordion, proper ARIA labels, and keyboard navigation support

**Completed:** December 2025

## 🚀 Live Demo

Visit the live site: [https://scenic-forests-refactor.netlify.app/en/index.html](https://scenic-forests-refactor.netlify.app/en/index.html)

## ✨ Key Features

### Original Tutorial Content (Refactored)

- Home page with hero section and cabin showcase
- Cabins page with detailed cabin cards
- Responsive navigation with mobile hamburger menu
- Mobile-first CSS using semantic-functional hybrid approach

### New Additions

- **FAQ Page:** Native HTML5 `<details>`/`<summary>` accordion with booking, amenities, and location information
- **Reservations Page:** Client-side form with date validation and success modal feedback
- **Bilingual Navigation:** Language switcher with symmetrical URL structure
- **Dynamic Footer:** Auto-updating copyright year via JavaScript
- **Enhanced Animations:** GSAP timeline-based entrance animations for hero text and cabin cards

## 🎨 Content Creation

- **Cabin Images:** Created in Midjourney using custom prompts
- **Text Content:** Original English content and Spanish translations written by me (AI-assisted)

## 🏗️ Architecture & Design Decisions

This project follows a carefully considered architectural approach. For detailed information about the technical decisions made during development, please refer to:

- **[docs/adr.md](docs/adr.md)** - Architecture Decision Records (ADRs) documenting key technical choices including:

  - Vite MPA configuration
  - Symmetrical multi-language structure
  - Functional-Semantic CSS approach (no BEM)
  - Native HTML5 accordion implementation
  - GSAP animation strategy
  - And more...

- **[docs/structure.md](docs/structure.md)** - Project structure and organization

## 🛠️ Tech Stack

- **Build Tool:** Vite
- **Languages:** HTML5, CSS3, Vanilla JavaScript
- **Animation:** [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Testing:** Vitest (unit tests)
- **Deployment:** Netlify

## 📂 Project Structure

```
scenic-forests/
├── docs/                    # Architecture documentation
│   ├── adr.md              # Architecture Decision Records
│   └── structure.md        # Project structure guide
├── src/
│   ├── en/                 # English pages
│   ├── es/                 # Spanish pages
│   ├── css/
│   │   ├── variables.css   # Design tokens
│   │   ├── main.css        # Global styles
│   │   └── components/     # Component styles
│   ├── js/
│   │   └── main.js         # Main application logic
│   └── images/             # Assets
└── public/                 # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd scenic-forests

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

## 🎓 Learning Outcomes

This project demonstrates:

- Modern front-end tooling and build processes
- Responsive design and mobile-first approach
- Internationalization (i18n) with manual multi-language support
- Accessible UI patterns (native HTML elements, ARIA attributes)
- Progressive enhancement and client-side interactivity
- Animation timing and motion design principles
- Clean architecture and separation of concerns

## 📝 License

This project is based on educational material from Scrimba. The refactored code, new pages, translations, and Midjourney-generated images are original work.

---

**Course Reference:** Scrimba's [Learn UI Design](https://scrimba.com/learn-ui-design-c024)
