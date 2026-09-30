# Mohammed Mazher - Portfolio

A premium, modern portfolio designed for a Transformational L&D Leader & Technology Builder.

## Project Architecture

This project is built using:
- **React 18**
- **Vite**
- **React Router v6**
- **Lucide React** (icons)
- **Vanilla CSS**

It employs an architecture optimized for easy maintainability by non-developers. All content is abstracted into `src/content.js`.

## Setup & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## Editing Content

Please read [CONTENT.md](./CONTENT.md) for detailed instructions on how to update the text, projects, and bio without editing the code.

## Future-proofing

The system is designed so you can later add components for:
- Blogs/Articles (Add a new route and a `blogs` array in `content.js`)
- Testimonials (Add to `content.js` and render on the `About` or `Home` page)
- Downloadable resources (Link PDFs in `content.js`)

## Deployment

You can deploy this site on **GitHub Pages**, **Vercel**, or **Netlify**.
For GitHub Pages, see the instructions in `CONTENT.md`.
