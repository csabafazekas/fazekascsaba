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
  const skPlural = (n, one, few, many) => (n === 1 ? one : n >= 2 && n <= 4 ? few : many);

  const UI = {
    en: {
      langName: "English",
      nav: { about: "About", experience: "Experience", skills: "Strengths", education: "Education", contact: "Contact" },
      headings: {
        experience: "Experience",
        path: "Career path",
        skills: "Key strengths",
        education: "Education & qualifications",
        degrees: "Degrees",
        qualifications: "Qualifications & training",
        languages: "Languages",
        contact: "Get in touch",
      },
      fullName: (first, last) => `${first} ${last}`,
      present: "Present",
      current: "Current",
      duration: (y, m) => [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" "),
      emailMe: "Email me",
      saveContact: "Save contact",
      copyEmail: "Copy email address",
      copied: "Email address copied",
      copyFailed: "Couldn't copy. Please copy it manually.",
      toggleTheme: "Switch light / dark theme",
      language: "Language",
      backToTop: "Back to top",
      lastUpdated: "Last updated",
      sections: "Sections",
      skipLink: "Skip to content",
    },
    sk: {
      langName: "Slovenčina",
      nav: { about: "O mne", experience: "Skúsenosti", skills: "Silné stránky", education: "Vzdelanie", contact: "Kontakt" },
      headings: {
        experience: "Pracovné skúsenosti",
        path: "Kariérna cesta",
        skills: "Kľúčové silné stránky",
        education: "Vzdelanie a kvalifikácia",
        degrees: "Vysokoškolské vzdelanie",
        qualifications: "Kvalifikácia a ďalšie vzdelávanie",
        languages: "Jazykové znalosti",
        contact: "Spojme sa",
      },
      fullName: (first, last) => `${first} ${last}`,
      present: "súčasnosť",
      current: "Aktuálne",
      duration: (y, m) =>
        [y && `${y} ${skPlural(y, "rok", "roky", "rokov")}`, m && `${m} ${skPlural(m, "mesiac", "mesiace", "mesiacov")}`].filter(Boolean).join(" "),
      emailMe: "Napíšte mi",
      saveContact: "Uložiť kontakt",
      copyEmail: "Kopírovať e-mailovú adresu",
      copied: "E-mailová adresa skopírovaná",
      copyFailed: "Kopírovanie zlyhalo. Skopírujte adresu ručne.",
      toggleTheme: "Prepnúť svetlý / tmavý režim",
      language: "Jazyk",
      backToTop: "Späť hore",
      lastUpdated: "Posledná aktualizácia",
      sections: "Sekcie",
      skipLink: "Preskočiť na obsah",
    },
    hu: {
      langName: "Magyar",
      nav: { about: "Rólam", experience: "Tapasztalat", skills: "Erősségek", education: "Végzettség", contact: "Kapcsolat" },
      headings: {
        experience: "Szakmai tapasztalat",
        path: "Szakmai út",
        skills: "Fő erősségek",
        education: "Végzettség és képesítések",
        degrees: "Felsőfokú végzettség",
        qualifications: "Képesítések és továbbképzések",
        languages: "Nyelvtudás",
        contact: "Vegye fel velem a kapcsolatot",
      },
      fullName: (first, last) => `${last} ${first}`,
      present: "jelenleg",
      current: "Jelenlegi",
      duration: (y, m) => [y && `${y} év`, m && `${m} hónap`].filter(Boolean).join(" "),
      emailMe: "Írjon nekem",
      saveContact: "Névjegy mentése",
      copyEmail: "E-mail-cím másolása",
      copied: "E-mail-cím a vágólapra másolva",
      copyFailed: "A másolás nem sikerült, kérem, másolja ki kézzel.",
      toggleTheme: "Világos / sötét mód",
      language: "Nyelv",
      backToTop: "Vissza az elejére",
      lastUpdated: "Utoljára frissítve",
      sections: "Szakaszok",
      skipLink: "Ugrás a tartalomhoz",
    },
  };

  /* ------------------------------------------------------------------ icons */
  const ICONS = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    leader: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    digital: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    teaching: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  };

  /* ---------------------------------------------------------------- helpers */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const KEYS = { theme: "cv-theme", lang: "cv-lang" };
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
  };
  const ANIM = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window;
  if (ANIM) document.documentElement.classList.add("anim");

  const LANGS = ((DATA.meta && DATA.meta.languages) || ["en"]).filter((l) => UI[l]);
  const DEFAULT_LANG = LANGS.includes(DATA.meta && DATA.meta.defaultLang) ? DATA.meta.defaultLang : LANGS[0];
  const state = { lang: initialLang() };
  let firstRender = true;
  let currentNav = null;

  function initialLang() {
    let param = null;
    try { param = new URLSearchParams(window.location.search).get("lang"); } catch (e) { /* ignore */ }
    if (param && LANGS.includes(param)) return param;
    const saved = store.get(KEYS.lang);
    if (saved && LANGS.includes(saved)) return saved;
    const browser = (navigator.languages || [navigator.language || ""]).map((l) => String(l).slice(0, 2).toLowerCase());
    const match = browser.find((l) => LANGS.includes(l));
    return match || DEFAULT_LANG;
  }

  /** Translate a data value: string | number | array | { en, sk, hu }. */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (Array.isArray(v)) return v;
    if (v[state.lang] != null) return v[state.lang];
    if (v[DEFAULT_LANG] != null) return v[DEFAULT_LANG];
    const first = Object.values(v)[0];
    return first == null ? "" : first;
  }
  const S = (key) => ((UI[state.lang] || UI.en)[key] !== undefined ? (UI[state.lang] || UI.en)[key] : UI.en[key]);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  const prettyUrl = (u) => String(u).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const icon = (name, cls = "") => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.link}</svg>`;
  const ext = 'target="_blank" rel="noopener noreferrer"';
  const telHref = (p) => `tel:${String(p).replace(/[^\d+]/g, "")}`;

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
    const d = parseYM(s);
    if (state.lang === "sk") return `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
    try {
      return new Intl.DateTimeFormat(state.lang, { month: "short", year: "numeric" }).format(d);
    } catch (e) {
      return String(s);
    }
  }
  const range = (a, b) => `<span>${esc(fmtDate(a))} –</span> <span>${esc(fmtDate(b))}</span>`;
  function monthsBetween(start, end) {
    const a = parseYM(start), b = parseYM(end);
    return Math.max(1, (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1);
  }
  function yearsInField() {
    const starts = (DATA.experience || []).map((x) => x.start).filter(Boolean).sort();
    if (!starts.length) return 0;
    return Math.floor(monthsBetween(starts[0], "present") / 12);
  }
  const fill = (text) => String(text).replace(/\{years\}/g, String(yearsInField()));

  /* --------------------------------------------------------------- sections */
  const SECTIONS = [
    ["about", () => true],
    ["experience", () => (DATA.experience || []).length],
    ["skills", () => (DATA.strengths || []).length],
    ["education", () => (DATA.education || []).length || (DATA.qualifications || []).length || (DATA.languages || []).length],
    ["contact", () => !!DATA.profile.email],
  ];
  const activeSections = () => SECTIONS.filter(([, has]) => has()).map(([id]) => id);

  const copyBtn = () =>
    `<button type="button" class="copy-btn" data-action="copy-email" aria-label="${esc(S("copyEmail"))}" title="${esc(S("copyEmail"))}">${icon("copy", "i-copy")}${icon("check", "i-check")}</button>`;

  function renderTopbar() {
    const nav = activeSections()
      .filter((id) => id !== "about")
      .map((id) => `<a href="#${id}" data-nav="${id}">${esc(S("nav")[id])}</a>`)
      .join("");
    $("#topbar-inner").innerHTML = `
      <button type="button" class="brand" data-action="top" aria-label="${esc(S("backToTop"))}">
        <span class="brand-mark" aria-hidden="true">${esc(initials())}</span>
        <span class="brand-name">${esc(fullName())}</span>
      </button>
      <nav class="topnav" aria-label="${esc(S("sections"))}">${nav}</nav>
      <div class="top-controls">
        ${LANGS.length > 1
          ? `<div class="seg" role="group" aria-label="${esc(S("language"))}">${LANGS.map((l) => `<button type="button" data-lang="${l}" lang="${l}" title="${esc(UI[l].langName)}" aria-label="${esc(UI[l].langName)}" aria-pressed="${l === state.lang}">${l.toUpperCase()}</button>`).join("")}</div>`
          : ""}
        <button type="button" class="icon-btn" data-action="theme" aria-label="${esc(S("toggleTheme"))}" title="${esc(S("toggleTheme"))}">${icon("moon", "i-moon")}${icon("sun", "i-sun")}</button>
      </div>`;
  }

  function renderAbout() {
    const p = DATA.profile;
    const name = fullName();
    const summary = toArray(t(p.summary));
    const meta = [
      p.email && `<li>${icon("mail")}<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>${copyBtn()}</li>`,
      p.phone && `<li>${icon("phone")}<a href="${esc(telHref(p.phone))}">${esc(p.phone)}</a></li>`,
      p.location && `<li>${icon("pin")}<span>${esc(t(p.location))}</span></li>`,
      ...(p.socials || []).map((s) => `<li class="meta-social">${icon(s.type)}<a href="${esc(s.url)}" ${ext}>${esc(prettyUrl(s.url))}</a></li>`),
    ].filter(Boolean).join("");
    const facts = (DATA.highlights || []).map((h) => {
      const value = h.auto === "years" ? `${yearsInField()}${h.suffix || ""}` : `${t(h.value)}${h.suffix || ""}`;
      return `<li class="fact reveal"><p class="fact-value">${esc(value)}</p><p class="fact-label">${esc(t(h.label))}</p></li>`;
    }).join("");
    return `<section id="about" class="hero" aria-labelledby="about-title">
      <div class="hero-head">
        <div class="avatar">${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(name)}">` : `<span aria-hidden="true">${esc(initials())}</span>`}</div>
        <div class="hero-id">
          ${p.tagline ? `<p class="tagline">${esc(t(p.tagline))}</p>` : ""}
          <h1 id="about-title" class="name">${esc(name)}</h1>
          <p class="role-title">${esc(t(p.title))}</p>
        </div>
      </div>
      ${summary.length ? `<div class="summary">${summary.map((s) => `<p>${esc(fill(s))}</p>`).join("")}</div>` : ""}
      ${meta ? `<ul class="meta">${meta}</ul>` : ""}
      <div class="hero-actions">
        ${p.email ? `<a class="btn btn-primary" href="mailto:${esc(p.email)}">${icon("send")}<span>${esc(S("emailMe"))}</span></a>` : ""}
      </div>
      ${facts ? `<ul class="facts">${facts}</ul>` : ""}
    </section>`;
  }

  function renderExperience() {
    const items = DATA.experience || [];
    const steps = items
      .slice()
      .sort((a, b) => String(a.start).localeCompare(String(b.start)))
      .map((x) => `<li class="step${x.end === "present" ? " is-current" : ""}">
        <span class="step-year">${esc(String(x.start).slice(0, 4))}</span>
        <span class="step-dot" aria-hidden="true"></span>
        <span class="step-role">${esc(t(x.short || x.role))}</span>
      </li>`)
      .join("");
    const roles = items.map((x) => {
      const months = monthsBetween(x.start, x.end);
      const bullets = toArray(t(x.highlights));
      const isCurrent = x.end === "present";
      return `<li class="role reveal">
        <div class="role-when">
          <p class="role-dates">${range(x.start, x.end)}</p>
          <p class="role-dur">${esc(S("duration")(Math.floor(months / 12), months % 12))}</p>
        </div>
        <div class="role-body">
          <h3 class="role-name">${esc(t(x.role))}${isCurrent ? ` <span class="badge">${esc(S("current"))}</span>` : ""}</h3>
          <p class="role-org">${esc(t(x.org))}${x.location ? `<span class="sep" aria-hidden="true">·</span>${esc(t(x.location))}` : ""}</p>
          ${bullets.length ? `<ul class="bullets">${bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
        </div>
      </li>`;
    }).join("");
    return `<section id="experience" class="section" aria-labelledby="experience-title">
      <h2 id="experience-title" class="section-title">${esc(S("headings").experience)}</h2>
      ${items.length > 1 ? `<div class="path reveal" aria-label="${esc(S("headings").path)}">
        <p class="path-label">${esc(S("headings").path)}</p>
        <ol class="steps" style="--n:${items.length}">${steps}</ol>
      </div>` : ""}
      <ol class="roles">${roles}</ol>
    </section>`;
  }

  function renderStrengths() {
    const cards = (DATA.strengths || []).map((g) => `<div class="card strength reveal">
      <h3 class="card-title"><span class="card-icon">${icon(g.icon)}</span><span>${esc(t(g.title))}</span></h3>
      <ul class="checklist">${toArray(t(g.items)).map((i) => `<li>${icon("check")}<span>${esc(i)}</span></li>`).join("")}</ul>
    </div>`).join("");
    return `<section id="skills" class="section" aria-labelledby="skills-title">
      <h2 id="skills-title" class="section-title">${esc(S("headings").skills)}</h2>
      <div class="strengths">${cards}</div>
    </section>`;
  }

  function renderEducation() {
    const H = S("headings");
    const list = (items) => items.map((e) => `<li>
      <p class="edu-year">${e.year ? esc(e.year) : range(e.start, e.end)}</p>
      <p class="edu-title">${esc(t(e.title))}</p>
      <p class="edu-org">${esc(t(e.org))}</p>
    </li>`).join("");
    const edu = DATA.education || [], quals = DATA.qualifications || [], langs = DATA.languages || [];
    return `<section id="education" class="section" aria-labelledby="education-title">
      <h2 id="education-title" class="section-title">${esc(H.education)}</h2>
      <div class="edu-grid">
        ${edu.length ? `<div class="card edu-card reveal"><h3 class="card-title"><span class="card-icon">${icon("cap")}</span><span>${esc(H.degrees)}</span></h3><ul class="edu-list">${list(edu)}</ul></div>` : ""}
        ${quals.length ? `<div class="card edu-card reveal"><h3 class="card-title"><span class="card-icon">${icon("award")}</span><span>${esc(H.qualifications)}</span></h3><ul class="edu-list">${list(quals)}</ul></div>` : ""}
      </div>
      ${langs.length ? `<div class="card langs reveal">
        <h3 class="card-title"><span class="card-icon">${icon("languages")}</span><span>${esc(H.languages)}</span></h3>
        <ul class="lang-list">${langs.map((l) => `<li>
          <div class="lang-top"><span class="lang-name">${esc(t(l.name))}</span><span class="lang-level">${esc(t(l.level))}</span></div>
          <div class="bar" aria-hidden="true"><span style="--w:${clamp(Number(l.percent) || 0, 0, 100)}%"></span></div>
        </li>`).join("")}</ul>
      </div>` : ""}
    </section>`;
  }

  function renderContact() {
    const p = DATA.profile;
    const text = DATA.contact && DATA.contact.text ? `<p class="contact-text">${esc(t(DATA.contact.text))}</p>` : "";
    return `<section id="contact" class="section" aria-labelledby="contact-title">
      <div class="card contact reveal">
        <h2 id="contact-title" class="section-title">${esc(S("headings").contact)}</h2>
        ${text}
        <p class="contact-email"><a href="mailto:${esc(p.email)}">${esc(p.email)}</a>${copyBtn()}</p>
        ${p.phone ? `<p class="contact-phone">${icon("phone")}<a href="${esc(telHref(p.phone))}">${esc(p.phone)}</a></p>` : ""}
        <div class="contact-actions">
          <a class="btn btn-primary" href="mailto:${esc(p.email)}">${icon("send")}<span>${esc(S("emailMe"))}</span></a>
          <button type="button" class="btn btn-ghost" data-action="vcard">${icon("userPlus")}<span>${esc(S("saveContact"))}</span></button>
        </div>
      </div>
    </section>`;
  }

  const renderFooter = () => `<footer class="site-footer">
      <p>© ${new Date().getFullYear()} ${esc(fullName())}</p>
      ${DATA.meta && DATA.meta.lastUpdated ? `<p>${esc(S("lastUpdated"))}: ${esc(fmtDate(DATA.meta.lastUpdated))}</p>` : ""}
    </footer>`;

  const RENDERERS = { about: renderAbout, experience: renderExperience, skills: renderStrengths, education: renderEducation, contact: renderContact };

  function render() {
    const name = fullName();
    const title = t(DATA.profile.title);
    document.documentElement.lang = state.lang;
    document.title = `${name} · ${title}`;
    const desc = document.querySelector('meta[name="description"]');
    const firstLine = toArray(t(DATA.profile.summary))[0];
    if (desc && firstLine) desc.setAttribute("content", fill(firstLine));
    $(".skip-link").textContent = S("skipLink");

    renderTopbar();
    $("#main").innerHTML = activeSections().map((id) => RENDERERS[id]()).join("") + renderFooter();

    const btt = $("#back-to-top");
    btt.setAttribute("aria-label", S("backToTop"));
    btt.innerHTML = icon("arrowUp");

    setupReveal();
    currentNav = null;
    onScroll();
    firstRender = false;
  }

  /* ------------------------------------------------------------ reveal anim */
  let revealObs = null;
  function setupReveal() {
    if (revealObs) revealObs.disconnect();
    const els = $$(".reveal");
    if (!ANIM || !firstRender) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    els.forEach((el) => revealObs.observe(el));
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
      $("#topbar").classList.toggle("is-scrolled", y > 8);

      const sections = $$("#main > section");
      if (!sections.length) return;
      const line = window.innerHeight * 0.35;
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
  if (systemDark.addEventListener) {
    systemDark.addEventListener("change", () => { if (!store.get(KEYS.theme)) applyTheme(systemDark.matches ? "dark" : "light"); });
  }

  function setLang(lang) {
    if (lang === state.lang || !LANGS.includes(lang)) return;
    state.lang = lang;
    store.set(KEYS.lang, lang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (e) { /* ignore */ }
    render();
    const b = $(`#topbar [data-lang="${lang}"]`);
    if (b) b.focus();
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
    const current = (DATA.experience || []).find((x) => x.end === "present");
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${v(p.lastName)};${v(p.firstName)};;;`,
      `FN:${v(fullName())}`,
      p.title && `TITLE:${v(t(p.title))}`,
      current && `ORG:${v(t(current.org))}`,
      p.email && `EMAIL;TYPE=INTERNET:${v(p.email)}`,
      p.phone && `TEL;TYPE=CELL:${v(p.phone)}`,
      p.location && `ADR;TYPE=WORK:;;;${v(t(p.location))};;;`,
      `URL:${v(window.location.origin + window.location.pathname)}`,
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

  /* ----------------------------------------------------------- event wiring */
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action], [data-lang]");
    if (!el) return;
    if (el.dataset.lang) return setLang(el.dataset.lang);
    switch (el.dataset.action) {
      case "theme": return toggleTheme();
      case "vcard": return downloadVCard();
      case "copy-email": return copyEmail(el);
      case "top":
        window.scrollTo({ top: 0, behavior: ANIM ? "smooth" : "auto" });
        return;
      default:
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  window.addEventListener("beforeprint", () => $$(".reveal").forEach((el) => el.classList.add("is-visible")));

  /* ------------------------------------------------------------------ boot */
  (function setFavicon() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f766e"/><stop offset="1" stop-color="#1e3a8a"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><text x="32" y="33" dominant-baseline="central" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" fill="#fff">${esc(initials())}</text></svg>`;
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
