# Portfolio Architecture & Content Guide

Welcome to your personal portfolio. This website is built using **React** and **Vite** to ensure fast performance and high maintainability, while keeping the content easy to update for non-developers.

## How to Update Content

All the content for the website is stored in a single, structured file: `src/content.js`. 
You do **not** need to touch the design files or HTML/CSS to update your information.

### 1. General Information & Bio
Open `src/content.js` and edit the `personalInfo` block. You can change your name, title, headline, and links here.
For links, replace `[EMAIL]` and `[LINKEDIN URL]` with your actual contact details.

### 2. Projects & Case Studies
Your projects are listed under the `projects` array. 
To add a new project:
1. Copy an existing project block (from `{` to `},`).
2. Update the `slug` (used for the URL, e.g., `my-new-project`).
3. Fill in the placeholders (`challenge`, `context`, `role`, etc.).
The website will automatically generate a new case study page for it!

### 3. Learning Lab & Thinking
You can add new experiments by adding objects to the `learningLab` array. 
You can add new principles to the `principles` array.

### 4. Resume & Skills
Update your timeline, skills ecosystem, and resume history in their respective sections (`skills`, `timeline`, `resume`) at the bottom of the file.

---

## How to Run Locally

If you want to view your changes on your own computer:
1. Open a terminal in this folder.
2. Run `npm install` (only needed the first time).
3. Run `npm run dev`.
4. Open the `http://localhost:5173` link that appears in your terminal.

## How to Deploy to GitHub Pages

1. Go to your `package.json` and add a `homepage` field at the top:
   `"homepage": "https://<your-github-username>.github.io/<your-repo-name>",`
2. Run `npm install gh-pages --save-dev`.
3. Add these two lines to your `scripts` in `package.json`:
   `"predeploy": "npm run build",`
   `"deploy": "gh-pages -d dist"`
4. Run `npm run deploy` in your terminal.
5. Your website will be live!

Alternatively, you can upload the code to **Vercel** or **Netlify** for automatic deployment every time you push to GitHub. Just connect your repository and they will handle the rest.
