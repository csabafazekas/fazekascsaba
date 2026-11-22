# Csaba Fazekas · CV

Personal CV website: a single page in **English, Slovak and Hungarian**. It is plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages.

**Live site:** https://csabafazekas.github.io/fazekascsaba/
(direct links: [English](https://csabafazekas.github.io/fazekascsaba/?lang=en) · [Slovensky](https://csabafazekas.github.io/fazekascsaba/?lang=sk) · [Magyarul](https://csabafazekas.github.io/fazekascsaba/?lang=hu))

## What's on the page

- **Hero:** name, role (with a highlighter effect), a short summary, contact details and a tilted monogram card with four floating key facts.
- **Career stairs:** the progression from teacher to principal drawn as rising steps; select a step to jump to that role.
- **Experience timeline** that fills in as you scroll, with 2–3 key points per role.
- **Strengths Venn diagram:** where leadership, digital education and teaching overlap; hover or select an area to highlight it.
- **Training for teaching staff:** topics offered as a trainer (digitalisation, EduPage, cybersecurity, AI and more) with a one-click "ask about training" email.
- **Learning path** (degrees, attestations, courses) and **language rings**.
- **Contact band** with one-click email copy and a "Save contact" vCard.
- **EN / SK / HU switch.** The page opens in the visitor's browser language, and `?lang=sk` / `?lang=hu` links open a specific language. Hungarian uses Hungarian name order and place names (Fazekas Csaba, Fülek).
- **Light / dark theme**, sticky section menu, works on phones; animations switch off for visitors who prefer reduced motion.

## Updating the content

All text lives in [`js/cv-data.js`](js/cv-data.js). Each text is either a plain string or `{ en: "…", sk: "…", hu: "…" }`.

- **New role:** add it to the top of `experience` (dates as `"YYYY-MM"`, `"present"` for the current one). The career path, durations and "years in education" update automatically.
- **Training topics:** edit `training.topics` (title, short text, icon: digital | grid | shield | sparkles | plus).
- **Photo:** add e.g. `assets/photo.jpg` and set `profile.photo: "assets/photo.jpg"`.
- **Phone / LinkedIn:** fill in `profile.phone` or un-comment the LinkedIn line in `profile.socials`.
- **Colours:** change `--accent` (and its dark-mode twin) in `css/style.css`.

Every push to the publishing branch updates the live site within about a minute.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

```
index.html        page shell
css/style.css     styles, themes, responsive & print layout
js/cv-data.js     ← all CV content (EN / SK / HU)
js/app.js         rendering and interactions
404.html          "page not found" page for GitHub Pages
```
