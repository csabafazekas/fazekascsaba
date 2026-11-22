/* ==========================================================================
   Personal CV: rendering & interactions
   You shouldn't need to edit this file; all content lives in js/cv-data.js.
   ========================================================================== */
(function () {
  "use strict";

  const DATA = window.CV_DATA;
  if (!DATA) {
    document.getElementById("main").innerHTML = '<p class="noscript">Could not load <code>js/cv-data.js</code>.</p>';
    return;
  }

  /* ---------------------------------------------------------------- UI text */
  const UI = {
    en: {
      nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", education: "Education", more: "Personal", contact: "Contact" },
      headings: {
        experience: "Where I've worked",
        skills: "What I work with",
        projects: "Things I've built",
        education: "Education & certifications",
        more: "Languages & interests",
        contact: "Let's work together",
      },
      greeting: "Hi, I'm {name}.",
      fullName: (first, last) => `${first} ${last}`,
      present: "Present",
      duration: (y, m) => [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" "),
      showDetails: "Show details",
      hideDetails: "Hide details",
      skillHint: "Click any skill or tag to highlight where I've used it.",
      levels: ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"],
      usedIn: (n) => `Used in ${n} ${n === 1 ? "role or project" : "roles & projects"}`,
      all: "All",
      filterProjects: "Filter projects",
      filteringBy: "Highlighting",
      matches: (n) => `${n} ${n === 1 ? "match" : "matches"}`,
      jump: "Jump",
      clear: "Clear highlight",
      viewDetails: "View details",
      demo: "Live demo",
      source: "Source code",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      interests: "Interests",
      copyEmail: "Copy email address",
      copied: "Email address copied",
      copyFailed: "Couldn't copy. Please copy it manually.",
      downloadPdf: "Download PDF",
      saveContact: "Save contact",
      toggleTheme: "Switch light / dark theme",
      print: "Print or save as PDF",
      language: "Language",
      form: {
        name: "Your name",
        subject: "Subject (optional)",
        message: "Message",
        send: "Send message",
        note: "Opens your email app with the message ready to send.",
        defaultSubject: "Hello from your CV website",
        required: "Please add your name and a message.",
      },
      labels: { email: "Email", phone: "Phone", location: "Based in" },
      backToTop: "Back to top",
      lastUpdated: "Last updated",
      close: "Close",
      sections: "Sections",
      skipLink: "Skip to content",
      dismiss: "Dismiss",
      sample: "This page shows sample content. Edit {file} to make it yours.",
    },
    hu: {
      nav: { about: "Rólam", experience: "Tapasztalat", skills: "Készségek", projects: "Projektek", education: "Tanulmányok", more: "Személyes", contact: "Kapcsolat" },
      headings: {
        experience: "Ahol eddig dolgoztam",
        skills: "Amivel dolgozom",
        projects: "Amiket építettem",
        education: "Tanulmányok és tanúsítványok",
        more: "Nyelvek és érdeklődési körök",
        contact: "Dolgozzunk együtt",
      },
      greeting: "Szia, {name} vagyok.",
      fullName: (first, last) => `${last} ${first}`,
      present: "jelenleg",
      duration: (y, m) => [y && `${y} év`, m && `${m} hónap`].filter(Boolean).join(" "),
      showDetails: "Részletek",
      hideDetails: "Kevesebb",
      skillHint: "Kattints egy készségre vagy címkére, és megmutatom, hol használtam.",
      levels: ["", "Kezdő", "Alapszint", "Középhaladó", "Haladó", "Szakértő"],
      usedIn: (n) => `${n} munkahelyen vagy projektben használtam`,
      all: "Összes",
      filterProjects: "Projektek szűrése",
      filteringBy: "Kiemelve:",
      matches: (n) => `${n} találat`,
      jump: "Ugrás",
      clear: "Kiemelés törlése",
      viewDetails: "Részletek",
      demo: "Élő demó",
      source: "Forráskód",
      education: "Tanulmányok",
      certifications: "Tanúsítványok",
      languages: "Nyelvek",
      interests: "Érdeklődési körök",
      copyEmail: "E-mail cím másolása",
      copied: "E-mail cím a vágólapra másolva",
      copyFailed: "Nem sikerült másolni, kérlek, másold ki kézzel.",
      downloadPdf: "PDF letöltése",
      saveContact: "Névjegy mentése",
      toggleTheme: "Világos / sötét téma",
      print: "Nyomtatás vagy mentés PDF-ként",
      language: "Nyelv",
      form: {
        name: "Neved",
        subject: "Tárgy (nem kötelező)",
        message: "Üzenet",
        send: "Üzenet küldése",
        note: "Megnyitja a levelezőprogramodat a kész üzenettel.",
        defaultSubject: "Üdv a CV-oldaladról",
        required: "Kérlek, add meg a neved és az üzenetet.",
      },
      labels: { email: "E-mail", phone: "Telefon", location: "Helyszín" },
      backToTop: "Vissza az elejére",
      lastUpdated: "Utoljára frissítve",
      close: "Bezárás",
      sections: "Szakaszok",
      skipLink: "Ugrás a tartalomhoz",
      dismiss: "Elrejtés",
      sample: "Ez az oldal mintatartalmat mutat. Szerkeszd a {file} fájlt, hogy a sajátod legyen.",
    },
  };

  /* ------------------------------------------------------------------ icons */
  const ICONS = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    pointer: '<path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  };

  /* ---------------------------------------------------------------- helpers */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const KEYS = { theme: "cv-theme", lang: "cv-lang", banner: "cv-sample-banner-dismissed" };
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ANIM = !reduceMotion.matches && "IntersectionObserver" in window;
  if (ANIM) document.documentElement.classList.add("anim");

  const LANGS = (DATA.meta && DATA.meta.languages && DATA.meta.languages.length ? DATA.meta.languages : ["en"]).filter((l) => UI[l]);
  const DEFAULT_LANG = (DATA.meta && DATA.meta.defaultLang) || LANGS[0];

  const state = { lang: initialLang(), skill: null, category: "all" };
  let firstRender = true;
  let currentNav = null;

  function initialLang() {
    let param = null;
    try { param = new URLSearchParams(window.location.search).get("lang"); } catch (e) { /* ignore */ }
    if (param && LANGS.includes(param)) return param;
    const saved = store.get(KEYS.lang);
    if (saved && LANGS.includes(saved)) return saved;
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    if (LANGS.includes(nav)) return nav;
    return LANGS.includes(DEFAULT_LANG) ? DEFAULT_LANG : LANGS[0];
  }

  /** Translate a data value: string | number | array | { en, hu }. */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (Array.isArray(v)) return v;
    if (v[state.lang] != null) return v[state.lang];
    if (v[DEFAULT_LANG] != null) return v[DEFAULT_LANG];
    const first = Object.values(v)[0];
    return first == null ? "" : first;
  }
  /** UI string lookup with English fallback. */
  const S = (key) => ((UI[state.lang] || UI.en)[key] !== undefined ? (UI[state.lang] || UI.en)[key] : UI.en[key]);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).trim().toLowerCase();
  const pad = (n) => String(n).padStart(2, "0");
  const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  const prettyUrl = (u) => String(u).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const icon = (name, cls = "") => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.link}</svg>`;
  const ext = 'target="_blank" rel="noopener noreferrer"';

  const fullName = () => S("fullName")(DATA.profile.firstName, DATA.profile.lastName);
  const initials = () => fullName().split(/\s+/).filter(Boolean).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  /* ------------------------------------------------------------------ dates */
  function parseYM(s) {
    if (!s || s === "present") return new Date();
    const [y, m] = String(s).split("-").map(Number);
    return new Date(y, (m || 1) - 1, 1);
  }
  function fmtDate(s) {
    if (!s || s === "present") return S("present");
    if (/^\d{4}$/.test(String(s))) return String(s);
    try {
      return new Intl.DateTimeFormat(state.lang, { month: "short", year: "numeric" }).format(parseYM(s));
    } catch (e) {
      return String(s);
    }
  }
  function monthsBetween(start, end) {
    const a = parseYM(start), b = parseYM(end);
    return Math.max(1, (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1);
  }

  /* ----------------------------------------------------------------- skills */
  const skillKey = (item) => item.key || (typeof item.name === "string" ? item.name : item.name.en || Object.values(item.name)[0]);
  const SKILLS = new Map();
  (DATA.skills || []).forEach((cat) => (cat.items || []).forEach((item) => SKILLS.set(norm(skillKey(item)), item)));
  const tagLabel = (tag) => { const s = SKILLS.get(norm(tag)); return s ? t(s.name) : tag; };
  const normTags = (tags) => (tags || []).map(norm).join("|");
  const taggedItems = () => [...(DATA.experience || []), ...(DATA.projects || [])];
  const usageCount = (key) => taggedItems().filter((x) => (x.tags || []).some((tg) => norm(tg) === norm(key))).length;

  function statValue(s) {
    switch (s.auto) {
      case "years": {
        const starts = (DATA.experience || []).map((x) => parseYM(x.start).getTime());
        if (!starts.length) return 0;
        return Math.floor(monthsBetween(new Date(Math.min(...starts)).toISOString().slice(0, 7), "present") / 12);
      }
      case "skills": return SKILLS.size;
      case "projects": return (DATA.projects || []).length;
      case "languages": return (DATA.languages || []).length;
      default: return Number(s.value) || 0;
    }
  }

  /* --------------------------------------------------------------- sections */
  const hasInterests = () => toArray(t(DATA.interests)).length > 0;
  const SECTIONS = [
    ["about", () => true],
    ["experience", () => (DATA.experience || []).length],
    ["skills", () => (DATA.skills || []).length],
    ["projects", () => (DATA.projects || []).length],
    ["education", () => (DATA.education || []).length || (DATA.certifications || []).length],
    ["more", () => (DATA.languages || []).length || hasInterests()],
    ["contact", () => !!DATA.profile.email],
  ];
  const activeSections = () => SECTIONS.filter(([, has]) => has()).map(([id]) => id);

  const tagsHTML = (tags, cls = "") =>
    tags && tags.length
      ? `<ul class="tags ${cls}">${tags.map((tg) => `<li><button type="button" class="tag" data-skill="${esc(tg)}" aria-pressed="false">${esc(tagLabel(tg))}</button></li>`).join("")}</ul>`
      : "";

  const linksHTML = (links, cls = "plink") => {
    links = links || {};
    return [
      links.demo && `<a class="${cls}" href="${esc(links.demo)}" ${ext}>${icon("external")}<span>${esc(S("demo"))}</span></a>`,
      links.source && `<a class="${cls}" href="${esc(links.source)}" ${ext}>${icon("github")}<span>${esc(S("source"))}</span></a>`,
    ].filter(Boolean).join("");
  };

  const sectionHead = (id, n, extra = "") =>
    `<header class="section-head">
      <p class="eyebrow"><span class="eyebrow-num">${pad(n)}</span><span class="eyebrow-label">${esc(S("nav")[id])}</span></p>
      <h2 id="${id}-title">${esc(S("headings")[id])}</h2>
      ${extra}
    </header>`;

  function renderBanner() {
    const el = $("#sample-banner");
    if (!(DATA.meta && DATA.meta.sampleContent) || store.get(KEYS.banner) === "1") {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML = `<p>${icon("info")}<span>${esc(S("sample")).replace("{file}", "<code>js/cv-data.js</code>")}</span></p>
      <button type="button" class="banner-close" data-action="dismiss-banner" aria-label="${esc(S("dismiss"))}">${icon("x")}</button>`;
  }

  function renderMobileBar() {
    $("#mobile-bar").innerHTML = `
      <button type="button" class="mb-avatar" data-action="top" aria-label="${esc(S("backToTop"))}">${esc(initials())}</button>
      <nav class="mb-nav" aria-label="${esc(S("sections"))}">
        ${activeSections().map((id) => `<a href="#${id}" data-nav="${id}">${esc(S("nav")[id])}</a>`).join("")}
      </nav>
      <button type="button" class="icon-btn" data-action="theme" aria-label="${esc(S("toggleTheme"))}">${icon("moon", "i-moon")}${icon("sun", "i-sun")}</button>`;
  }

  function renderSidebar() {
    const p = DATA.profile;
    const name = fullName();
    const contact = [
      p.email && `<li>${icon("mail")}<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>
        <button type="button" class="copy-btn" data-action="copy-email" aria-label="${esc(S("copyEmail"))}" title="${esc(S("copyEmail"))}">${icon("copy", "i-copy")}${icon("check", "i-check")}</button></li>`,
      p.phone && `<li>${icon("phone")}<a href="tel:${esc(String(p.phone).replace(/[^\d+]/g, ""))}">${esc(p.phone)}</a></li>`,
      p.location && `<li>${icon("pin")}<span>${esc(t(p.location))}</span></li>`,
      p.website && `<li>${icon("globe")}<a href="${esc(p.website)}" ${ext}>${esc(prettyUrl(p.website))}</a></li>`,
    ].filter(Boolean).join("");

    const socials = (p.socials || [])
      .map((s) => `<a class="social" href="${esc(s.url)}" ${ext} aria-label="${esc(s.label)}" title="${esc(s.label)}" data-print="${esc(prettyUrl(s.url))}">${icon(s.type)}</a>`)
      .join("");

    const nav = activeSections()
      .map((id, i) => `<li><a href="#${id}" data-nav="${id}"><span class="num">${pad(i + 1)}</span><span class="line" aria-hidden="true"></span><span class="label">${esc(S("nav")[id])}</span></a></li>`)
      .join("");

    $("#sidebar").innerHTML = `
      <div class="controls">
        ${LANGS.length > 1
          ? `<div class="seg" role="group" aria-label="${esc(S("language"))}">${LANGS.map((l) => `<button type="button" data-lang="${l}" lang="${l}" aria-pressed="${l === state.lang}">${l.toUpperCase()}</button>`).join("")}</div>`
          : "<span></span>"}
        <div class="controls-right">
          <button type="button" class="icon-btn" data-action="theme" aria-label="${esc(S("toggleTheme"))}" title="${esc(S("toggleTheme"))}">${icon("moon", "i-moon")}${icon("sun", "i-sun")}</button>
          <button type="button" class="icon-btn" data-action="print" aria-label="${esc(S("print"))}" title="${esc(S("print"))}">${icon("printer")}</button>
        </div>
      </div>
      <div class="profile">
        <div class="avatar">${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(name)}">` : `<span aria-hidden="true">${esc(initials())}</span>`}</div>
        <div class="profile-text">
          ${p.availability ? `<p class="availability"><span class="dot" aria-hidden="true"></span>${esc(t(p.availability))}</p>` : ""}
          <h1 class="name">${esc(name)}</h1>
          <p class="title">${esc(t(p.title))}</p>
        </div>
      </div>
      ${contact ? `<ul class="contact-list">${contact}</ul>` : ""}
      ${socials ? `<div class="socials">${socials}</div>` : ""}
      <nav class="side-nav" aria-label="${esc(S("sections"))}"><ol>${nav}</ol></nav>
      <div class="side-actions">
        <button type="button" class="btn btn-primary" data-action="print">${icon("download")}<span>${esc(S("downloadPdf"))}</span></button>
        <button type="button" class="btn btn-ghost" data-action="vcard">${icon("userPlus")}<span>${esc(S("saveContact"))}</span></button>
      </div>`;
  }

  function renderAbout(n) {
    const p = DATA.profile, a = DATA.about || {};
    const roles = toArray(t(p.roles));
    const summary = toArray(t(a.summary));
    const stats = (a.stats || []).map((s) => {
      const v = statValue(s);
      return `<div class="stat reveal">
        <p class="stat-num"><span data-count="${v}">${ANIM && firstRender ? 0 : v}</span>${s.suffix ? `<span class="suffix">${esc(s.suffix)}</span>` : ""}</p>
        <p class="stat-label">${esc(t(s.label))}</p>
      </div>`;
    }).join("");
    return `<section id="about" class="section section-about" aria-labelledby="about-title">
      <p class="eyebrow"><span class="eyebrow-num">${pad(n)}</span><span class="eyebrow-label">${esc(S("nav").about)}</span></p>
      <h2 id="about-title" class="hero-title">${esc(S("greeting")).replace("{name}", `<span class="accent">${esc(p.firstName)}</span>`)}</h2>
      ${roles.length ? `<p class="hero-role"><span class="prompt" aria-hidden="true">&gt;</span><span class="typed" aria-hidden="true">${esc(roles[0])}</span><span class="caret" aria-hidden="true"></span><span class="sr-only">${esc(roles.join(", "))}</span></p>` : ""}
      ${summary.length ? `<div class="prose">${summary.map((par) => `<p>${esc(par)}</p>`).join("")}</div>` : ""}
      ${stats ? `<div class="stats">${stats}</div>` : ""}
    </section>`;
  }

  function renderExperience(n) {
    const items = DATA.experience.map((x, i) => {
      const months = monthsBetween(x.start, x.end);
      const hl = toArray(t(x.highlights));
      const open = i === 0;
      const id = `exp-${i}-details`;
      const company = t(x.company);
      const sep = '<span class="sep" aria-hidden="true">·</span>';
      const org = [
        x.url ? `<a href="${esc(x.url)}" ${ext}>${esc(company)}</a>` : `<span class="exp-company">${esc(company)}</span>`,
        x.location && `<span class="exp-meta">${sep}${esc(t(x.location))}</span>`,
        x.type && `<span class="exp-meta">${sep}${esc(t(x.type))}</span>`,
      ].filter(Boolean).join(" ");
      return `<li class="exp reveal${open ? " is-open" : ""}" data-tags="${esc(normTags(x.tags))}">
        <div class="exp-when">
          <p class="exp-dates"><span>${esc(fmtDate(x.start))} –</span> <span>${esc(fmtDate(x.end))}</span></p>
          <p class="exp-dur">${esc(S("duration")(Math.floor(months / 12), months % 12))}</p>
        </div>
        <div class="exp-body">
          <h3 class="exp-role">${esc(t(x.role))}</h3>
          <p class="exp-org">${org}</p>
          ${x.summary ? `<p class="exp-summary">${esc(t(x.summary))}</p>` : ""}
          ${hl.length ? `<div class="exp-details" id="${id}"><div><ul class="highlights">${hl.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div></div>` : ""}
          <div class="exp-foot">
            ${tagsHTML(x.tags)}
            ${hl.length ? `<button type="button" class="exp-toggle" data-action="toggle-exp" aria-expanded="${open}" aria-controls="${id}"><span>${esc(S(open ? "hideDetails" : "showDetails"))}</span>${icon("chevron")}</button>` : ""}
          </div>
        </div>
      </li>`;
    }).join("");
    return `<section id="experience" class="section" aria-labelledby="experience-title">
      ${sectionHead("experience", n)}
      <ol class="timeline">${items}</ol>
    </section>`;
  }

  function renderSkills(n) {
    const levels = S("levels");
    const cards = DATA.skills.map((cat) => `<div class="card skill-card reveal">
      <h3>${esc(t(cat.category))}</h3>
      <ul class="skill-list">${(cat.items || []).map((item) => {
        const key = skillKey(item);
        const count = usageCount(key);
        const lvl = clamp(Number(item.level) || 0, 0, 5);
        return `<li><button type="button" class="skill" data-skill="${esc(key)}" aria-pressed="false"${count ? ` title="${esc(S("usedIn")(count))}"` : ""}>
          <span class="skill-top">
            <span class="skill-name">${esc(t(item.name))}</span>
            <span class="skill-meta">${count ? `<span class="skill-count">${count}×</span>` : ""}<span class="skill-level">${esc(levels[lvl] || "")}</span></span>
          </span>
          <span class="meter" aria-hidden="true">${[1, 2, 3, 4, 5].map((k) => `<i style="--i:${k}"${k <= lvl ? ' class="on"' : ""}></i>`).join("")}</span>
        </button></li>`;
      }).join("")}</ul>
    </div>`).join("");
    return `<section id="skills" class="section" aria-labelledby="skills-title">
      ${sectionHead("skills", n, `<p class="section-sub skill-hint">${icon("pointer")}<span>${esc(S("skillHint"))}</span></p>`)}
      <div class="skills-grid">${cards}</div>
    </section>`;
  }

  const projectCats = () => (DATA.projectCategories || []).filter((c) => (DATA.projects || []).some((p) => p.category === c.id));
  const catLabel = (id) => { const c = (DATA.projectCategories || []).find((x) => x.id === id); return c ? t(c.label) : ""; };

  function renderProjects(n) {
    const cats = projectCats();
    const filters = cats.length > 1
      ? `<div class="filters" role="group" aria-label="${esc(S("filterProjects"))}">
          <button type="button" class="filter-btn" data-category="all" aria-pressed="true">${esc(S("all"))}<span class="count">${DATA.projects.length}</span></button>
          ${cats.map((c) => `<button type="button" class="filter-btn" data-category="${esc(c.id)}" aria-pressed="false">${esc(t(c.label))}<span class="count">${DATA.projects.filter((p) => p.category === c.id).length}</span></button>`).join("")}
        </div>`
      : "";
    const cards = DATA.projects.map((pr, i) => `<article class="card project reveal" data-cat="${esc(pr.category || "")}" data-tags="${esc(normTags(pr.tags))}">
      <div class="project-meta"><span class="project-cat">${esc(catLabel(pr.category))}</span>${pr.year ? `<span class="project-year">${esc(pr.year)}</span>` : ""}</div>
      <h3 class="project-title"><button type="button" data-action="open-project" data-index="${i}">${esc(t(pr.title))}</button></h3>
      <p class="project-desc">${esc(t(pr.description))}</p>
      ${tagsHTML(pr.tags, "tags-sm")}
      <div class="project-actions">
        <span class="project-more" aria-hidden="true">${esc(S("viewDetails"))}${icon("arrowRight")}</span>
        ${linksHTML(pr.links)}
      </div>
    </article>`).join("");
    return `<section id="projects" class="section" aria-labelledby="projects-title">
      ${sectionHead("projects", n)}
      ${filters}
      <div class="project-grid">${cards}</div>
    </section>`;
  }

  function renderEducation(n) {
    const edu = DATA.education || [], certs = DATA.certifications || [];
    const eduHTML = edu.length
      ? `<div class="card info-card reveal">
          <h3 class="card-title">${icon("cap")}<span>${esc(S("education"))}</span></h3>
          <ol class="mini-timeline">${edu.map((e) => `<li>
            <p class="mini-dates">${esc(fmtDate(e.start))} – ${esc(fmtDate(e.end))}</p>
            <h4>${esc(t(e.degree))}</h4>
            <p class="mini-org">${esc(t(e.school))}</p>
            ${e.details ? `<p class="mini-details">${esc(t(e.details))}</p>` : ""}
          </li>`).join("")}</ol>
        </div>`
      : "";
    const certHTML = certs.length
      ? `<div class="card info-card reveal">
          <h3 class="card-title">${icon("award")}<span>${esc(S("certifications"))}</span></h3>
          <ul class="cert-list">${certs.map((c) => `<li>
            <div>
              <p class="cert-name">${c.url ? `<a href="${esc(c.url)}" ${ext}>${esc(t(c.name))}${icon("external", "i-sm")}</a>` : esc(t(c.name))}</p>
              <p class="cert-meta">${esc(t(c.issuer))}</p>
            </div>
            ${c.year ? `<span class="cert-year">${esc(c.year)}</span>` : ""}
          </li>`).join("")}</ul>
        </div>`
      : "";
    return `<section id="education" class="section" aria-labelledby="education-title">
      ${sectionHead("education", n)}
      <div class="two-col">${eduHTML}${certHTML}</div>
    </section>`;
  }

  function renderMore(n) {
    const langs = DATA.languages || [];
    const interests = toArray(t(DATA.interests));
    const langHTML = langs.length
      ? `<div class="card info-card reveal">
          <h3 class="card-title">${icon("chat")}<span>${esc(S("languages"))}</span></h3>
          <ul class="lang-list">${langs.map((l) => `<li>
            <div class="lang-top"><span class="lang-name">${esc(t(l.name))}</span><span class="lang-level">${esc(t(l.level))}</span></div>
            <div class="bar" aria-hidden="true"><span style="--w:${clamp(Number(l.percent) || 0, 0, 100)}%"></span></div>
          </li>`).join("")}</ul>
        </div>`
      : "";
    const intHTML = interests.length
      ? `<div class="card info-card reveal">
          <h3 class="card-title">${icon("heart")}<span>${esc(S("interests"))}</span></h3>
          <ul class="chips">${interests.map((i) => `<li class="chip">${esc(i)}</li>`).join("")}</ul>
        </div>`
      : "";
    return `<section id="more" class="section" aria-labelledby="more-title">
      ${sectionHead("more", n)}
      <div class="two-col">${langHTML}${intHTML}</div>
    </section>`;
  }

  function renderContact(n) {
    const p = DATA.profile, F = S("form"), L = S("labels");
    const rows = [
      `<li><span class="cl-icon">${icon("mail")}</span><span class="cl-text"><span class="cl-label">${esc(L.email)}</span><a class="cl-value" href="mailto:${esc(p.email)}">${esc(p.email)}</a></span>
        <button type="button" class="copy-btn" data-action="copy-email" aria-label="${esc(S("copyEmail"))}" title="${esc(S("copyEmail"))}">${icon("copy", "i-copy")}${icon("check", "i-check")}</button></li>`,
      p.phone && `<li><span class="cl-icon">${icon("phone")}</span><span class="cl-text"><span class="cl-label">${esc(L.phone)}</span><a class="cl-value" href="tel:${esc(String(p.phone).replace(/[^\d+]/g, ""))}">${esc(p.phone)}</a></span></li>`,
      ...(p.socials || []).map((s) => `<li><span class="cl-icon">${icon(s.type)}</span><span class="cl-text"><span class="cl-label">${esc(s.label)}</span><a class="cl-value" href="${esc(s.url)}" ${ext}>${esc(prettyUrl(s.url))}</a></span></li>`),
      p.location && `<li><span class="cl-icon">${icon("pin")}</span><span class="cl-text"><span class="cl-label">${esc(L.location)}</span><span class="cl-value">${esc(t(p.location))}</span></span></li>`,
    ].filter(Boolean).join("");
    const text = DATA.contact && DATA.contact.text ? `<p class="section-sub">${esc(t(DATA.contact.text))}</p>` : "";
    return `<section id="contact" class="section" aria-labelledby="contact-title">
      ${sectionHead("contact", n, text)}
      <div class="contact-grid">
        <form class="card contact-form reveal" id="contact-form" novalidate>
          <div class="field"><label for="cf-name">${esc(F.name)}</label><input id="cf-name" name="cf-name" autocomplete="name" required></div>
          <div class="field"><label for="cf-subject">${esc(F.subject)}</label><input id="cf-subject" name="cf-subject"></div>
          <div class="field"><label for="cf-message">${esc(F.message)}</label><textarea id="cf-message" name="cf-message" rows="5" required></textarea></div>
          <p class="form-error" id="cf-error" role="alert" hidden></p>
          <div class="form-foot">
            <button type="submit" class="btn btn-primary">${icon("send")}<span>${esc(F.send)}</span></button>
            <p class="form-note">${esc(F.note)}</p>
          </div>
        </form>
        <div class="card contact-card reveal"><ul class="contact-links">${rows}</ul></div>
      </div>
    </section>`;
  }

  const renderFooter = () => `<footer class="site-footer">
      <p>© ${new Date().getFullYear()} ${esc(fullName())}</p>
      ${DATA.meta && DATA.meta.lastUpdated ? `<p>${esc(S("lastUpdated"))}: ${esc(fmtDate(DATA.meta.lastUpdated))}</p>` : ""}
    </footer>`;

  const RENDERERS = { about: renderAbout, experience: renderExperience, skills: renderSkills, projects: renderProjects, education: renderEducation, more: renderMore, contact: renderContact };

  /* --------------------------------------------------------------- render */
  function captureForm() {
    const ids = ["cf-name", "cf-subject", "cf-message"];
    return ids.reduce((acc, id) => { const el = document.getElementById(id); if (el) acc[id] = el.value; return acc; }, {});
  }
  function restoreForm(values) {
    Object.keys(values).forEach((id) => { const el = document.getElementById(id); if (el) el.value = values[id]; });
  }

  function render() {
    const formValues = captureForm();
    const name = fullName();
    const title = t(DATA.profile.title);
    document.documentElement.lang = state.lang;
    document.title = `${name} · ${title}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", `${name}, ${title}. ${toArray(t((DATA.about || {}).summary))[0] || ""}`.trim());
    $(".skip-link").textContent = S("skipLink");

    renderBanner();
    renderMobileBar();
    renderSidebar();
    $("#main").innerHTML = activeSections().map((id, i) => RENDERERS[id](i + 1)).join("") + renderFooter();

    const btt = $("#back-to-top");
    btt.setAttribute("aria-label", S("backToTop"));
    btt.innerHTML = icon("arrowUp");

    restoreForm(formValues);
    applyFilters();
    setupObservers();
    startTyping();
    currentNav = null;
    onScroll();
    firstRender = false;
  }

  /* ------------------------------------------------------- observers / anim */
  let revealObs = null;
  function setupObservers() {
    if (revealObs) revealObs.disconnect();
    const reveals = $$(".reveal");
    if (!ANIM || !firstRender) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      if (!ANIM) return;
      if (!firstRender) { $$("[data-count]").forEach((el) => { el.textContent = el.dataset.count; }); return; }
    }
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        $$("[data-count]", entry.target).forEach(animateCount);
        revealObs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    reveals.forEach((el) => revealObs.observe(el));
  }

  function animateCount(el) {
    const target = Number(el.dataset.count) || 0;
    const dur = 1100, t0 = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  let typeTimer = null;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $(".typed");
    if (!el) return;
    const roles = toArray(t(DATA.profile.roles));
    if (!ANIM || roles.length < 2) return;
    let r = 0, c = roles[0].length, deleting = false;
    const tick = () => {
      const word = roles[r];
      if (!deleting) {
        if (c < word.length) {
          c += 1;
          el.textContent = word.slice(0, c);
          typeTimer = setTimeout(tick, 55 + Math.random() * 45);
        } else {
          deleting = true;
          typeTimer = setTimeout(tick, 1900);
        }
      } else if (c > 0) {
        c -= 1;
        el.textContent = word.slice(0, c);
        typeTimer = setTimeout(tick, 26);
      } else {
        deleting = false;
        r = (r + 1) % roles.length;
        typeTimer = setTimeout(tick, 320);
      }
    };
    typeTimer = setTimeout(tick, 600);
  }

  /* ------------------------------------------------------- scroll handling */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const doc = document.documentElement;
      const y = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - window.innerHeight;
      $("#progress-bar").style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
      $("#back-to-top").classList.toggle("is-visible", y > 700);

      const sections = $$("#main > section");
      if (!sections.length) return;
      const line = window.innerHeight * 0.38;
      let active = sections[0].id;
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= line) active = s.id; });
      if (max > 0 && y >= max - 4) active = sections[sections.length - 1].id;
      setActiveNav(active);
    });
  }

  function setActiveNav(id) {
    if (!id || id === currentNav) return;
    currentNav = id;
    $$("[data-nav]").forEach((a) => {
      const on = a.dataset.nav === id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    const bar = $(".mb-nav");
    const chip = bar && $(`[data-nav="${id}"]`, bar);
    if (bar && chip && bar.scrollWidth > bar.clientWidth) {
      bar.scrollTo({ left: chip.offsetLeft - bar.clientWidth / 2 + chip.offsetWidth / 2, behavior: ANIM ? "smooth" : "auto" });
    }
  }

  /* ---------------------------------------------------------------- filters */
  function applyFilters() {
    const skill = state.skill ? norm(state.skill) : null;
    let matches = 0;
    $$("[data-tags]").forEach((el) => {
      const hit = !!skill && el.dataset.tags.split("|").includes(skill);
      el.classList.toggle("is-dimmed", !!skill && !hit);
      el.classList.toggle("is-match", hit);
      if (hit) matches += 1;
    });
    $$(".project").forEach((el) => { el.hidden = state.category !== "all" && el.dataset.cat !== state.category; });
    $$("[data-skill]").forEach((b) => b.setAttribute("aria-pressed", String(!!skill && norm(b.dataset.skill) === skill)));
    $$("[data-category]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.category === state.category)));
    renderPill(matches);
  }

  function renderPill(matches) {
    const pill = $("#filter-pill");
    document.body.classList.toggle("has-filter", !!state.skill);
    if (!state.skill) { pill.hidden = true; pill.innerHTML = ""; return; }
    pill.hidden = false;
    pill.innerHTML = `<span class="pill-text">${esc(S("filteringBy"))} <strong>${esc(tagLabel(state.skill))}</strong><span class="pill-count">${esc(S("matches")(matches))}</span></span>
      ${matches ? `<button type="button" class="pill-btn" data-action="jump">${icon("arrowDown")}<span>${esc(S("jump"))}</span></button>` : ""}
      <button type="button" class="pill-btn pill-clear" data-action="clear-filter" aria-label="${esc(S("clear"))}" title="${esc(S("clear"))}">${icon("x")}</button>`;
  }

  function toggleSkill(key) {
    state.skill = state.skill && norm(state.skill) === norm(key) ? null : key;
    if (state.skill) state.category = "all";
    applyFilters();
  }

  function jumpToMatch() {
    const first = $$(".is-match").find((el) => !el.hidden);
    if (!first) return;
    first.scrollIntoView({ behavior: ANIM ? "smooth" : "auto", block: "center" });
    first.classList.remove("flash");
    void first.offsetWidth; // restart the animation
    first.classList.add("flash");
  }

  /* ------------------------------------------------------- theme / language */
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => document.documentElement.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0e1012" : "#f6f5f1");
  }
  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-anim");
    applyTheme(next);
    store.set(KEYS.theme, next);
    setTimeout(() => root.classList.remove("theme-anim"), 450);
  }
  const onSystemTheme = () => { if (!store.get(KEYS.theme)) applyTheme(systemDark.matches ? "dark" : "light"); };
  if (systemDark.addEventListener) systemDark.addEventListener("change", onSystemTheme);

  function setLang(lang) {
    if (lang === state.lang || !LANGS.includes(lang)) return;
    state.lang = lang;
    store.set(KEYS.lang, lang);
    try {
      const url = new URL(window.location.href);
      if (lang === DEFAULT_LANG) url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (e) { /* ignore */ }
    const focusedLang = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.lang : null;
    render();
    if (focusedLang) { const b = $(`#sidebar [data-lang="${lang}"]`); if (b) b.focus(); }
  }

  /* ---------------------------------------------------------------- actions */
  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2400);
  }

  async function copyEmail(btn) {
    const email = DATA.profile.email;
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
      ta.remove();
    }
    toast(ok ? S("copied") : S("copyFailed"));
    if (ok && btn) {
      btn.classList.add("is-copied");
      setTimeout(() => btn.classList.remove("is-copied"), 1600);
    }
  }

  function downloadVCard() {
    const p = DATA.profile;
    const v = (s) => String(s || "").replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${v(p.lastName)};${v(p.firstName)};;;`,
      `FN:${v(`${p.firstName} ${p.lastName}`)}`,
      p.title && `TITLE:${v(t(p.title))}`,
      p.email && `EMAIL;TYPE=INTERNET:${v(p.email)}`,
      p.phone && `TEL;TYPE=CELL:${v(p.phone)}`,
      p.location && `ADR;TYPE=HOME:;;;${v(t(p.location))};;;`,
      p.website && `URL:${v(p.website)}`,
      ...(p.socials || []).map((s) => `URL;TYPE=${v(s.label)}:${v(s.url)}`),
      `REV:${new Date().toISOString()}`,
      "END:VCARD",
    ].filter(Boolean);
    const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${p.firstName}-${p.lastName}.vcf`.replace(/\s+/g, "-");
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function toggleExperience(btn) {
    const item = btn.closest(".exp");
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    $("span", btn).textContent = S(open ? "hideDetails" : "showDetails");
  }

  const modal = $("#project-modal");
  let modalReturnFocus = null;
  function openProject(index) {
    const pr = (DATA.projects || [])[index];
    if (!pr) return;
    const hl = toArray(t(pr.highlights));
    const links = linksHTML(pr.links, "btn btn-ghost");
    modal.innerHTML = `<div class="modal-inner">
      <button type="button" class="icon-btn modal-close" data-action="close-modal" aria-label="${esc(S("close"))}">${icon("x")}</button>
      <p class="eyebrow"><span class="eyebrow-label">${esc(catLabel(pr.category))}</span>${pr.year ? `<span class="eyebrow-num">${esc(pr.year)}</span>` : ""}</p>
      <h3 class="modal-title" id="modal-title">${esc(t(pr.title))}</h3>
      <p class="modal-lead">${esc(t(pr.description))}</p>
      ${pr.details ? `<p class="modal-text">${esc(t(pr.details))}</p>` : ""}
      ${hl.length ? `<ul class="highlights">${hl.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
      ${tagsHTML(pr.tags)}
      ${links ? `<div class="modal-actions">${links}</div>` : ""}
    </div>`;
    modal.setAttribute("aria-labelledby", "modal-title");
    applyFilters();
    modalReturnFocus = document.activeElement;
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
  }
  function closeModal() {
    if (typeof modal.close === "function" && modal.open) modal.close();
    else modal.removeAttribute("open");
  }
  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus();
  });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  /* ----------------------------------------------------------- event wiring */
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action], [data-skill], [data-lang], [data-category]");
    if (!el) return;
    if (el.dataset.lang) return setLang(el.dataset.lang);
    if (el.dataset.category) { state.category = el.dataset.category; return applyFilters(); }
    if (el.dataset.skill !== undefined && !el.dataset.action) {
      toggleSkill(el.dataset.skill);
      if (modal.contains(el)) closeModal();
      return;
    }
    switch (el.dataset.action) {
      case "theme": return toggleTheme();
      case "print": return window.print();
      case "vcard": return downloadVCard();
      case "copy-email": return copyEmail(el);
      case "toggle-exp": return toggleExperience(el);
      case "open-project": return openProject(Number(el.dataset.index));
      case "close-modal": return closeModal();
      case "clear-filter": state.skill = null; return applyFilters();
      case "jump": return jumpToMatch();
      case "top":
        window.scrollTo({ top: 0, behavior: ANIM ? "smooth" : "auto" });
        return;
      case "dismiss-banner":
        store.set(KEYS.banner, "1");
        $("#sample-banner").hidden = true;
        return;
      default:
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.id !== "contact-form") return;
    e.preventDefault();
    const name = $("#cf-name"), subject = $("#cf-subject"), message = $("#cf-message"), err = $("#cf-error");
    const missing = [name, message].filter((f) => !f.value.trim());
    [name, message].forEach((f) => f.setAttribute("aria-invalid", String(missing.includes(f))));
    if (missing.length) {
      err.textContent = S("form").required;
      err.hidden = false;
      missing[0].focus();
      return;
    }
    err.hidden = true;
    const body = `${message.value.trim()}\n\n${name.value.trim()}`;
    const subj = subject.value.trim() || S("form").defaultSubject;
    window.location.href = `mailto:${DATA.profile.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.skill && !(modal.open)) {
      state.skill = null;
      applyFilters();
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  window.addEventListener("beforeprint", () => $$(".reveal").forEach((el) => el.classList.add("is-visible")));

  /* ------------------------------------------------------------------ boot */
  (function setFavicon() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f766e"/><stop offset="1" stop-color="#4338ca"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><text x="32" y="33" dominant-baseline="central" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" fill="#fff">${esc(initials())}</text></svg>`;
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    document.head.appendChild(link);
  })();

  applyTheme(store.get(KEYS.theme) || currentTheme());
  render();

  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
})();
