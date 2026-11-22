# Csaba Fazekas · CV

Personal CV website: a single page in **English, Slovak and Hungarian**. It is plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages.

**Live site:** https://csabafazekas.github.io/fazekascsaba/
(direct links: [English](https://csabafazekas.github.io/fazekascsaba/?lang=en) · [Slovensky](https://csabafazekas.github.io/fazekascsaba/?lang=sk) · [Magyarul](https://csabafazekas.github.io/fazekascsaba/?lang=hu))

## What's on the page

- **Highlights first:** name, role, a short summary, contact details and four key facts at the top.
- **Career path:** a one-line view of the progression from teacher to principal, followed by each role with 2–3 key points.
- **Key strengths, education & qualifications, languages, contact.**
- **EN / SK / HU switch.** The page opens in the visitor's browser language, and `?lang=sk` / `?lang=hu` links open a specific language. Hungarian uses Hungarian name order and place names (Fazekas Csaba, Fülek).
- **Light / dark theme**, sticky section menu, works on phones.
- **Download CV (PDF):** prints a clean two-page A4 CV in the selected language.
- **Save contact:** downloads a vCard; one click copies the email address.

## Updating the content

All text lives in [`js/cv-data.js`](js/cv-data.js). Each text is either a plain string or `{ en: "…", sk: "…", hu: "…" }`.

- **New role:** add it to the top of `experience` (dates as `"YYYY-MM"`, `"present"` for the current one). The career path, durations and "years in education" update automatically.
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
