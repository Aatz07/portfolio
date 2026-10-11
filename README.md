# Aatiq Ali Portfolio

This is the first static version of the portfolio shell. It is built with plain HTML, CSS, and JavaScript because Node/npm are not installed on this machine yet.

## Open It

Open `index.html` directly in your browser.

## Replace Content

Most placeholder content lives in `script.js`:

- `facts`
- `education`
- `experience`
- `projects`
- `skillGroups`
- `gallery`
- `socials`

Update the email links in `index.html` and `script.js`, replace `resume.pdf` with your real resume file, and swap the image URLs with your own project screenshots, gallery photos, and professional portrait.

## Later Next.js Migration

When Node.js is installed, this can be moved into a Next.js structure:

- `index.html` sections become React components.
- Arrays in `script.js` become `data/portfolio.ts`.
- `styles.css` can either remain global CSS or be translated into Tailwind classes.
- The animation behavior can move to Motion/Framer Motion components.
