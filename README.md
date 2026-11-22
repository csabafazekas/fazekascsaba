# Personal CV website

An interactive, single-page CV. It is plain HTML, CSS and JavaScript with no build step, so it works on GitHub Pages as is.

## Features

- **One data file.** Every bit of text lives in [`js/cv-data.js`](js/cv-data.js). Edit that file and the whole page updates.
- **English / Hungarian toggle.** Text can be a plain string or `{ en, hu }`. The choice is remembered, and `?lang=hu` links straight to the Hungarian version.
- **Light & dark theme.** Follows the system setting by default; the toggle remembers your choice.
- **Skill highlighting.** Click any skill or tag to highlight every role and project that uses it, then jump to the matches.
- **Experience timeline.** Durations are calculated automatically, and each role has expandable details.
- **Projects.** Filter by category; click a card to open a detail dialog.
- **Animated touches.** Typed role line, counters, skill meters and reveal-on-scroll. All of them switch off for visitors who prefer reduced motion.
- **Download PDF.** The print stylesheet turns the page into a clean A4 CV (about two pages in English).
- **Save contact.** Downloads a vCard (`.vcf`) generated from your details.
- **Contact form.** Opens the visitor's email app with the message pre-filled; no backend needed.
- Responsive (sticky section bar on phones), keyboard accessible, with a scroll-spy navigation.

## Make it yours

1. Open `js/cv-data.js` and replace the **sample content** (profile, experience, skills, projects, education, languages, etc.).
2. Optional: add a photo, e.g. `assets/photo.jpg`, and set `profile.photo: "assets/photo.jpg"`.
3. Set `meta.sampleContent: false` to remove the "sample content" banner.
4. For an English-only page, set `meta.languages: ["en"]`.
5. To change the accent colour, edit `--accent` (light theme) and its dark-theme twin in `css/style.css`.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish with GitHub Pages

1. Push to GitHub.
2. In the repository go to **Settings → Pages**, choose **Deploy from a branch**, pick your branch and the `/ (root)` folder.
3. The site will be published at `https://<username>.github.io/<repository>/`.
   To get the shorter `https://<username>.github.io/`, name the repository `<username>.github.io`.

## Files

```
index.html        page shell
css/style.css     styles, themes, responsive & print layout
js/cv-data.js     ← your content
js/app.js         rendering and interactions (no edits needed)
```
