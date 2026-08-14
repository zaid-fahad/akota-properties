# Akota Properties — Agent Guidelines & Project Manual

This document defines coding standards, repository architecture, GitHub workflow conventions, and operational instructions for Antigravity AI agent pair programming on the **Akota Properties (একতা প্রপার্টিজ)** codebase.

---

## 🛠 Technology Stack & Core Dependencies

- **Framework**: React 19 (Vite SPA)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), Vanilla CSS utilities
- **Typography**: Google Fonts (`Hind Siliguri` for Bengali & `Outfit` for English/Metrics)
- **Routing**: `react-router-dom` v7
- **SEO & Meta**: `react-helmet-async` with Schema.org `RealEstateAgent` JSON-LD structured data
- **Icons**: `lucide-react`

---

## 📁 Directory Structure & Architecture

```
src/
├── assets/             # Project branding assets & visual graphics
├── data/               # Centralized dataset (projectData.js)
├── components/
│   └── blocks/         # Modular, reusable block components
│       ├── SEOHead.jsx
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── ShareComparison.jsx
│       ├── CostCalculator.jsx
│       ├── AmenitiesGrid.jsx
│       ├── FloorPlanViewer.jsx
│       ├── UnitAvailability.jsx
│       ├── VirtualGallery.jsx
│       ├── TestimonialsFAQ.jsx
│       ├── BookingModal.jsx
│       ├── BrochureModal.jsx
│       └── FloatingQuickContact.jsx
├── pages/              # Top-level page views (HomePage, ProjectsPage, FloorPlansPage, BenefitsPage, ContactPage, NotFoundPage)
└── routes/             # Route configurations (AppRoutes.jsx)
```

---

## 🌿 GitHub Branch & Workflow Conventions

1. **Branch Hierarchy**:
   - `main`: Production release branch. Must remain stable and clean.
   - `dev`: Primary integration branch for active development.
   - `username/#issuenum-feature`: Feature branches (e.g. `zaid-fahad/#1-seo-sitemap`).
   - `username/#issuenum-bugfix`: Bugfix branches.

2. **Commit & PR Guidelines**:
   - Create GitHub issues prior to feature/bugfix implementation.
   - Assign issues to yourself (`@me`).
   - All Pull Requests must target `dev` first before merging into `main`.
   - **Ask before creating a Pull Request**: Not every commit needs a PR. Confirm with the user first.
   - **No Emojis** in commit titles, issue descriptions, or PR body summaries.

---

## 🎨 UI/UX Design System Rules

- **Color Palette**: Emerald (`emerald-600`, `emerald-700`), Slate (`slate-900`, `slate-50`), Teal accents.
- **Glassmorphism**: Use `backdrop-blur-md`, `glass-card`, and refined border highlights (`border-white/10` or `border-slate-100`).
- **Micro-Animations**: Use smooth hover transitions, card lift effects (`hover:-translate-y-1`), and subtle focus states.
- **Accessibility & Responsiveness**: Mobile-first responsive layouts with dedicated touch-friendly drawers and floating quick action triggers.

---

## 🧪 Build & Verification Commands

- **Development Server**: `npm run dev -- --host`
- **Production Build Check**: `npm run build`
- **Lint Check**: `npm run lint`
