# Mohammed Mazher Pasha - Portfolio Content & Maintenance Guide

Welcome to your newly rebuilt personal portfolio! This website is built using **React 19**, **Vite**, and **React Router 7**, styled with modern, accessible **Vanilla CSS** and **Lucide React** icons.

All website information is organized in one central, easy-to-edit file:
📁 `src/data/portfolioData.js`

You do **not** need to touch React components or HTML/CSS to update your content.

---

## 1. Updating Your Personal Information & Links
Open `src/data/portfolioData.js` and locate the `personalInfo` section:
- **Email:** Update `contactEmail` (e.g., `mailto:yourname@gmail.com`) and `emailDisplay`.
- **LinkedIn:** Update `linkedIn` with your actual profile URL (e.g., `https://www.linkedin.com/in/mohammed-mazher-pasha`).
- **Location:** Update `location`.

## 2. Replacing the Demo Photograph With Your Real Photo
Currently, the website uses a warm, friendly demo photograph located at:
`public/images/demo-portrait.jpg`

To use your actual photo:
1. Save your photograph as a JPG or PNG.
2. Place it in the `public/images/` folder (for example, `public/images/my-photo.jpg`).
3. In `src/data/portfolioData.js`, update:
   ```javascript
   isDemoPhoto: false,
   photoUrl: "images/my-photo.jpg",
   ```
4. Save the file. The demo banner will automatically disappear and your photo will be displayed!

## 3. Adding Your Experience Details
In `src/data/portfolioData.js`, locate `experienceAreas`:
- You can add or modify your employer names, organization titles, date ranges, and bullet points.

## 4. Adding Verified Certificates
In `src/data/portfolioData.js`, locate `certificatePlaceholders`:
- Once you obtain or locate your verified credentials, you can add them with their title, issuing organization, completion date, and optional verification links.

## 5. Adding Genuine Testimonials
In `src/data/portfolioData.js`, locate `testimonialsNotice`:
- When you receive recommendations from managers, colleagues, or workshop participants, you can add testimonial cards directly.

---

## Running the Website Locally

1. Open your terminal in this project folder.
2. Run:
   ```bash
   npm run dev
   ```
3. Open the `http://localhost:5173/My_PersonalPortfolio_Website/` link in your browser.

---

## Testing the Production Build

To test the build that GitHub Pages runs:
```bash
npm run build
```
The compiled files will be output to the `dist` folder.
