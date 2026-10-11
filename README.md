# Mohammed Mazher Pasha — Professional L&D Portfolio

Personal portfolio website for **Mohammed Mazher Pasha**, Learning & Development Professional specializing in Learning Technology, AI-Enabled Learning, and Learning Analytics.

## Tech Stack & Architecture

- **Framework**: React 19 + Vite 8
- **Routing**: React Router 7 (`BrowserRouter` with `/My_PersonalPortfolio_Website/` base path and SPA 404 redirection)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS Design System with accessible tokens, responsive breakpoints, and warm off-white aesthetics
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, ProjectCard, ScrollToTop)
├── data/
│   └── portfolioData.js # Central data file for all text, links, and content
├── pages/               # 6 core pages
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ExperiencePage.jsx
│   ├── SkillsPage.jsx
│   ├── CertificatesPage.jsx
│   └── TestimonialsPage.jsx
├── App.jsx              # Main application router with basename support
├── index.css            # Complete design system & responsive styling
└── main.jsx             # React entry point
public/
├── 404.html             # GitHub Pages SPA deep link redirection
└── images/
    └── demo-portrait.jpg # Demo portrait placeholder
```

## Running Locally

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
