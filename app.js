/* ================================
   Carla Escrig Durán — Portfolio JS
   - Dark mode with persistence
   - EN/ES translations (dynamic update)
   - Timeline rendering (2002–2026)
   - Thesis phases rendering (KAIROS)
   - Animation reel embed (Vimeo)
   - Gallery tabs scaffold (Stepped/Spline/Polish) [placeholders]
   - Contact form success message + social links
   ================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const STORAGE_KEYS = {
  theme: "carla_portfolio_theme",
  lang: "carla_portfolio_lang",
};

const state = {
  lang: "en",
  theme: "light",
  animationTab: "stepped",
};

const CONTENT = {
  heroName: "Carla Escrig Durán",
  subtitle: {
    en: "3D animator & Visual Development artist",
    es: "3D animator & Visual Development artist", // (si quieres traducción ES distinta, dímela y lo cambio)
  },
  welcome: {
    en: "", // opcional
    es: "", // opcional
  },

  aboutBio: {
    en: "", // pendiente de tu bio EN
    es: "", // pendiente de tu bio ES
  },

  reelVimeoUrl: "https://vimeo.com/1144153174?share=copy&fl=sv&fe=ci",

  contact: {
    email: "carlaescrigduran@gmail.com",
    instagram: "https://www.instagram.com/carla.escrigduran/",
    artstation: "https://www.artstation.com/carlaescrigduran",
    linkedin: "https://www.linkedin.com/in/carlaescrig",
    youtube: "https://youtube.com/@carlaescrig?si=ucghbvjWiO2SHFw9",
  },
};

const i18n = {
  en: {
    navTitle: "Portfolio",
    brandSubtitle: "3D animator & Visual Development artist",
    homeTitle: "HOME",
    aboutTitle: "ABOUT ME",
    thesisTitle: "THESIS WORK",
    animationTitle: "3D ANIMATION",
    visdevTitle: "VISUAL DEVELOPMENT",
    storyboardTitle: "STORYBOARD",
    storyboardSoon: "Coming soon",
    personalTitle: "PERSONAL WORK",
    contactTitle: "CONTACT",

    jumpTo: "Skip to content",
    ctaContact: "Contact",
    ctaReel: "Watch reel",

    thesisProjectName: "KAIROS",
    thesisProjectIntro:
      "My thesis project was a collaborative journey through the complete animation pipeline. From initial concept sketches to final compositing, I contributed across multiple departments to bring our story to life. Below you can explore my work organized by production phase.",

    tabsStepped: "Stepped",
    tabsSpline: "Spline",
    tabsPolish: "Polish",

    contactName: "Name:",
    contactEmail: "Email:",
    contactMessage: "Message:",
    contactSend: "Send",
    formSuccess: (name) => `Thanks, ${name}! Your message has been sent.`,
  },

  es: {
    navTitle: "Portafolio",
    brandSubtitle: "Animación 3D y Visual Development",
    homeTitle: "INICIO",
    aboutTitle: "SOBRE MÍ",
    thesisTitle: "TESIS",
    animationTitle: "ANIMACIÓN 3D",
    visdevTitle: "DESARROLLO VISUAL",
    storyboardTitle: "STORYBOARD",
    storyboardSoon: "Próximamente",
    personalTitle: "TRABAJO PERSONAL",
    contactTitle: "CONTACTO",

    jumpTo: "Saltar al contenido",
    ctaContact: "Contacto",
    ctaReel: "Ver reel",

    thesisProjectName: "KAIROS",
    thesisProjectIntro:
      "Mi proyecto de tesis fue un viaje colaborativo a través de todo el pipeline de animación. Desde los primeros bocetos conceptuales hasta el compositing final, contribuí en múltiples departamentos para dar vida a nuestra historia. Aquí puedes explorar mi trabajo organizado por fases de producción.",

    tabsStepped: "Stepped",
    tabsSpline: "Spline",
    tabsPolish: "Polish",

    contactName: "Nombre:",
    contactEmail: "Email:",
    contactMessage: "Mensaje:",
    contactSend: "Enviar",
    formSuccess: (name) => `¡Gracias, ${name}! Tu mensaje se ha enviado.`,
  },
};

const timelineData = [
  {
    year: "2002",
    title_en: "The Beginning",
    title_es: "The Beginning",
    text_en:
      "I was born on the 24th of June in 2002, in Barcelona, Spain. I was a naturally curious child and was fascinated by art at a very young age.",
    text_es:
      "I was born on the 24th of June in 2002, in Barcelona, Spain. I was a naturally curious child and was fascinated by art at a very young age.",
  },
  {
    year: "2010",
    title_en: "First Steps in Art",
    title_es: "First Steps in Art",
    text_en:
      "I started exploring drawing and painting. Like all children, I was mesmerized by animated films, and I spent my days drawing princesses, dragons, mermaids, etc.",
    text_es:
      "I started exploring drawing and painting. Like all children, I was mesmerized by animated films, and I spent my days drawing princesses, dragons, mermaids, etc.",
  },
  {
    year: "2015",
    title_en: "Diving into Animation",
    title_es: "Diving into Animation",
    text_en:
      "At that time, I was a fresh teenager, and my personal interests started to flourish. This is when I began to educate myself about the Animation Industry. I knew from that point that I wanted to dedicate my life to this.",
    text_es:
      "At that time, I was a fresh teenager, and my personal interests started to flourish. This is when I began to educate myself about the Animation Industry. I knew from that point that I wanted to dedicate my life to this.",
  },
  {
    year: "2020",
    title_en: "Professional Development",
    title_es: "Professional Development",
    text_en:
      "My first year of college! I was so excited and grateful to be able to study what I had always wanted. I completed the 3D Animation & VFX degree at LaSalle URL. I met amazing colleagues and teachers, and I made super talented friends that we catch up with to this day! Truly, the best years of my life.",
    text_es:
      "My first year of college! I was so excited and grateful to be able to study what I had always wanted. I completed the 3D Animation & VFX degree at LaSalle URL. I met amazing colleagues and teachers, and I made super talented friends that we catch up with to this day! Truly, the best years of my life.",
  },
  {
    year: "2024",
    title_en: "Thesis & Specialization",
    title_es: "Thesis & Specialization",
    text_en:
      "This year, we started working on our thesis project, where I collaborated on character designs, backgrounds, props, storyboards, animatics, texturing, visual effects, and my favorite, 3D animation! It was hard but so fulfilling in the end. You can see more at Thesis Work.",
    text_es:
      "This year, we started working on our thesis project, where I collaborated on character designs, backgrounds, props, storyboards, animatics, texturing, visual effects, and my favorite, 3D animation! It was hard but so fulfilling in the end. You can see more at Thesis Work.",
  },
  {
    year: "2026",
    title_en: "Looking Forward",
    title_es: "Looking Forward",
    text_en:
      "Between 2024 and 2025, I completed a Master's in 3D Animation for Characters that taught me new things and further developed what I had previously studied in college. Now, I'm looking forward to making my first appearance in the animation industry, and I'm so ready to start my journey!",
    text_es:
      "Between 2024 and 2025, I completed a Master's in 3D Animation for Characters that taught me new things and further developed what I had previously studied in college. Now, I'm looking forward to making my first appearance in the animation industry, and I'm so ready to start my journey!",
  },
];

const thesisPhases = [
  {
    group: "FINAL RESULT",
    phase: "Complete Short Film",
    title_en: "Complete Short Film",
    title_es: "Corto final",
    desc_en: "The culmination of our team's hard work - watch the final animated short film.",
    desc_es: "El resultado de todo el trabajo del equipo: mira el corto final.",
    badge: "Final",
  },
  {
    group: "PRE-PRODUCTION",
    phase: "PHASE 1",
    title_en: "Concept Art",
    title_es: "Concept Art",
    desc_en:
      "Character designs, environment concepts, and visual development exploring the look and feel of our story world.",
    desc_es:
      "Diseño de personajes, conceptos de entorno y desarrollo visual para definir el look & feel del mundo.",
    badge: "Pre",
  },
  // Te repetían PHASE 1 dos veces en el texto; lo dejo una sola vez y continúo con el resto.
  {
    group: "PRODUCTION",
    phase: "PHASE 3",
    title_en: "Animatic",
    title_es: "Animatic",
    desc_en:
      "Bringing the storyboard to life with timing, pacing, and rough audio to establish the rhythm of our film.",
    desc_es:
      "Dando vida al storyboard con timing, ritmo y audio provisional para marcar la estructura del corto.",
    badge: "Prod",
  },
  {
    group: "PRODUCTION",
    phase: "PHASE 4",
    title_en: "Layout",
    title_es: "Layout",
    desc_en:
      "3D scene composition and camera work - establishing the staging and cinematography for each shot.",
    desc_es:
      "Composición 3D y cámaras: planteamiento de escena y cinematografía por plano.",
    badge: "Prod",
  },
  {
    group: "PRODUCTION",
    phase: "PHASE 5",
    title_en: "3D Animation",
    title_es: "Animación 3D",
    desc_en:
      "Character performance and movement - bringing emotion and life to every shot through animation.",
    desc_es:
      "Acting y movimiento: emoción y vida en cada plano a través de la animación.",
    badge: "Prod",
  },
  {
    group: "POST-PRODUCTION",
    phase: "PHASE 6",
    title_en: "Visual Effects",
    title_es: "Efectos visuales",
    desc_en:
      "Adding magic and atmosphere - particle systems, simulations, and effects that enhance the story.",
    desc_es:
      "Magia y atmósfera: partículas, simulaciones y efectos que potencian la historia.",
    badge: "Post",
  },
  {
    group: "POST-PRODUCTION",
    phase: "PHASE 7",
    title_en: "Graphic Design",
    title_es: "Diseño gráfico",
    desc_en:
      "Marketing and promotional materials - posters, titles, and branding that represent our project.",
    desc_es:
      "Material promocional: pósters, títulos e identidad visual del proyecto.",
    badge: "Post",
  },
];

// Placeholder galleries (rellenar cuando me des tus items)
const animationGalleries = {
  stepped: [],
  spline: [],
  polish: [],
};

function loadPrefs() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const savedLang = localStorage.getItem(STORAGE_KEYS.lang);

  if (savedTheme === "dark" || savedTheme === "light") state.theme = savedTheme;
  if (savedLang === "en" || savedLang === "es") state.lang = savedLang;
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  applyTheme();
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem(STORAGE_KEYS.lang, state.lang);
  renderI18n();
  renderTimeline();
  renderThesis();
  renderReel();
  renderAnimationTabs();
  renderContactSocial();
}

function toggleLang() {
  setLang(state.lang === "en" ? "es" : "en");
}

function safeText(el, value) {
  if (el) el.textContent = value;
}

function renderI18n() {
  const t = i18n[state.lang];

  // Toggle label shows current language
  safeText($("#lang-toggle"), state.lang.toUpperCase());

  // If nav has h1
  if ($("nav h1")) safeText($("nav h1"), t.navTitle);

  // HOME
  safeText($("#home h2"), t.homeTitle);
  // Add hero content into home if not present yet
  const home = $("#home");
  if (home && !home.querySelector(".hero")) {
    const hero = document.createElement("div");
    hero.className = "hero";

    hero.innerHTML = `
      <h3 class="hero-name" id="hero-name"></h3>
      <p class="hero-subtitle" id="hero-subtitle"></p>
      <div class="hero-actions">
        <a class="btn" href="#contact" id="cta-contact"></a>
        <a class="btn btn--ghost" href="#animation" id="cta-reel"></a>
        <div class="hero-chip" aria-label="Location">
          <span>Barcelona, Spain</span>
        </div>
      </div>
    `;
    // Insert hero at the top of home section
    home.insertBefore(hero, home.firstChild.nextSibling);
  }

  safeText($("#hero-name"), CONTENT.heroName);
  safeText($("#hero-subtitle"), CONTENT.subtitle[state.lang] || CONTENT.subtitle.en);
  safeText($("#cta-contact"), t.ctaContact);
  safeText($("#cta-reel"), t.ctaReel);

  // ABOUT / THESIS / etc headers
  safeText($("#about h2"), t.aboutTitle);
  safeText($("#thesis h2"), t.thesisTitle);
  safeText($("#animation h2"), t.animationTitle);
  safeText($("#visual-development h2"), t.visdevTitle);
  safeText($("#storyboard h2"), t.storyboardTitle);
  safeText($("#storyboard p"), t.storyboardSoon);
  safeText($("#personal-work h2"), t.personalTitle);
  safeText($("#contact h2"), t.contactTitle);

  // Contact form labels
  safeText($("label[for='name']"), t.contactName);
  safeText($("label[for='email']"), t.contactEmail);
  safeText($("label[for='message']"), t.contactMessage);
  safeText($("#contact-form button[type='submit']"), t.contactSend);

  // Add About bio if provided
  const about = $("#about");
  if (about) {
    let bio = about.querySelector("#about-bio");
    if (!bio) {
      bio = document.createElement("p");
      bio.id = "about-bio";
      bio.style.color = "var(--muted)";
      about.insertBefore(bio, $("#timeline"));
    }
    bio.textContent = (CONTENT.aboutBio[state.lang] || "").trim();
    // If empty, avoid awkward blank space
    bio.style.display = bio.textContent ? "block" : "none";
  }

  // Add Thesis intro block
  const thesis = $("#thesis");
  if (thesis) {
    let intro = thesis.querySelector("#thesis-intro");
    if (!intro) {
      intro = document.createElement("div");
      intro.id = "thesis-intro";
      intro.className = "card";
      intro.innerHTML = `
        <p class="card-title" style="margin:0 0 8px;">
          <strong id="thesis-name"></strong>
          <span class="badge" id="thesis-badge">KAIROS</span>
        </p>
        <p id="thesis-text" style="margin:0;color:var(--muted)"></p>
      `;
      thesis.insertBefore(intro, thesis.firstChild.nextSibling);
    }
    safeText($("#thesis-name"), t.thesisProjectName);
    safeText($("#thesis-text"), t.thesisProjectIntro);
  }

  // Make the layout a bit nicer without editing index.html:
  // add classes to form
  $("#contact-form")?.classList.add("form");
}

function renderTimeline() {
  const container = $("#timeline");
  if (!container) return;

  container.classList.add("timeline");
  container.innerHTML = "";

  for (const item of timelineData) {
    const card = document.createElement("div");
    card.className = "timeline-item";

    const year = document.createElement("p");
    year.className = "timeline-year";
    year.textContent = item.year;

    const title = document.createElement("p");
    title.style.margin = "0 0 6px";
    title.style.fontWeight = "600";
    title.textContent = state.lang === "en" ? item.title_en : item.title_es;

    const text = document.createElement("p");
    text.className = "timeline-text";
    text.textContent = state.lang === "en" ? item.text_en : item.text_es;

    card.appendChild(year);
    card.appendChild(title);
    card.appendChild(text);
    container.appendChild(card);
  }
}

function renderThesis() {
  const phases = $("#phases");
  if (!phases) return;

  phases.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "card-grid";
  phases.appendChild(grid);

  for (let i = 0; i < thesisPhases.length; i++) {
    const p = thesisPhases[i];

    const card = document.createElement("article");
    card.className = `card ${i % 2 === 0 ? "" : "card--tilt2"}`;

    const title = state.lang === "en" ? p.title_en : p.title_es;
    const desc = state.lang === "en" ? p.desc_en : p.desc_es;

    card.innerHTML = `
      <p class="card-title">
        <strong>${title}</strong>
        <small>${p.phase}</small>
      </p>
      <div class="badge" style="margin-bottom:10px;">${p.group} • ${p.badge}</div>
      <p style="margin:0;color:var(--muted)">${desc}</p>
    `;

    grid.appendChild(card);
  }
}

function vimeoEmbedFromUrl(url) {
  // Accepts vimeo.com/<id> form, returns player URL
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    const id = parts.find((x) => /^\d+$/.test(x));
    if (!id) return null;
    return `https://player.vimeo.com/video/${id}`;
  } catch {
    return null;
  }
}

function renderReel() {
  const reel = $("#reel");
  if (!reel) return;

  const embed = vimeoEmbedFromUrl(CONTENT.reelVimeoUrl);
  reel.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "media";

  if (!embed) {
    wrapper.innerHTML = `<div class="card"><p style="margin:0;color:var(--muted)">Reel link is missing or invalid.</p></div>`;
    reel.appendChild(wrapper);
    return;
  }

  wrapper.innerHTML = `
    <iframe
      src="${embed}"
      title="Animation Reel"
      allow="autoplay; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  `;
  reel.appendChild(wrapper);
}

function renderAnimationTabs() {
  const container = $("#galleries");
  if (!container) return;

  container.innerHTML = "";

  const t = i18n[state.lang];

  const tabs = document.createElement("div");
  tabs.className = "tabs";
  tabs.setAttribute("role", "tablist");
  tabs.innerHTML = `
    <button class="tab" role="tab" id="tab-stepped" aria-selected="false" data-tab="stepped">${t.tabsStepped}</button>
    <button class="tab" role="tab" id="tab-spline" aria-selected="false" data-tab="spline">${t.tabsSpline}</button>
    <button class="tab" role="tab" id="tab-polish" aria-selected="false" data-tab="polish">${t.tabsPolish}</button>
  `;
  container.appendChild(tabs);

  const grid = document.createElement("div");
  grid.className = "card-grid";
  grid.id = "animation-grid";
  container.appendChild(grid);

  setAnimationTab(state.animationTab);

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tab]");
    if (!btn) return;
    setAnimationTab(btn.dataset.tab);
  });
}

function setAnimationTab(tab) {
  if (!["stepped", "spline", "polish"].includes(tab)) tab = "stepped";
  state.animationTab = tab;

  // aria-selected updates
  $("#tab-stepped")?.setAttribute("aria-selected", tab === "stepped" ? "true" : "false");
  $("#tab-spline")?.setAttribute("aria-selected", tab === "spline" ? "true" : "false");
  $("#tab-polish")?.setAttribute("aria-selected", tab === "polish" ? "true" : "false");

  const grid = $("#animation-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const items = animationGalleries[tab] || [];
  if (!items.length) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p style="margin:0;color:var(--muted)">Add your ${tab} items in <code>app.js</code> (animationGalleries).</p>`;
    grid.appendChild(card);
    return;
  }

  for (const it of items) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <p class="card-title">
        <strong>${it.title}</strong>
        <small>${tab}</small>
      </p>
      <p style="margin:0;color:var(--muted)">${it.type || ""}</p>
    `;
    grid.appendChild(card);
  }
}

function renderContactSocial() {
  // Add social buttons under contact section
  const contact = $("#contact");
  if (!contact) return;

  let row = $("#social-row");
  if (!row) {
    row = document.createElement("div");
    row.id = "social-row";
    row.className = "social-row";
    contact.appendChild(row);
  }

  const icons = {
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>`,
    artstation: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.23 3.2a.9.9 0 0 0-.8-.5H8.7l7.15 12.4a.9.9 0 0 0 .78.45h4.73a.9.9 0 0 0 .78-1.35l-7.92-10.95zM6.3 4.6a.9.9 0 0 0-.78 1.35l.78 1.35h4.9L8.7 3.2H6.3zm2.1 15.2a.9.9 0 0 0 .78.45h4.73l-1.17-2.03H7.3l1.1 1.58zM2.64 14.8a.9.9 0 0 0 .78 1.35h12.06l-1.17-2.03H3.42l-.78.68z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3.5 9h3v12h-3V9zm7 0h2.9v1.64h.04c.4-.76 1.4-1.56 2.88-1.56 3.08 0 3.65 2.03 3.65 4.66V21h-3v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.28V21h-3V9z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 4.8 12 4.8 12 4.8h0s-4 0-6.9.3c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.3 6.6.3s4 0 6.9-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.5C22 9.6 21.8 8 21.8 8zM10 14.8V9.6l5.2 2.6L10 14.8z"/></svg>`,
  };

  const links = [
    { key: "instagram", url: CONTENT.contact.instagram, cls: "social-btn--instagram" },
    { key: "artstation", url: CONTENT.contact.artstation, cls: "social-btn--artstation" },
    { key: "linkedin", url: CONTENT.contact.linkedin, cls: "social-btn--linkedin" },
    { key: "youtube", url: CONTENT.contact.youtube, cls: "social-btn--youtube" },
  ];

  row.innerHTML = "";
  for (const l of links) {
    const a = document.createElement("a");
    a.className = `social-btn ${l.cls}`;
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.setAttribute("aria-label", l.key);
    a.innerHTML = icons[l.key] || l.key;
    row.appendChild(a);
  }

  // Add mailto helper button (optional)
  let mail = $("#mailto-btn");
  if (!mail) {
    mail = document.createElement("a");
    mail.id = "mailto-btn";
    mail.className = "btn";
    mail.style.marginTop = "12px";
    contact.appendChild(mail);
  }
  mail.href = `mailto:${CONTENT.contact.email}`;
  mail.textContent = CONTENT.contact.email;
}

function wireEvents() {
  $("#theme-toggle")?.addEventListener("click", toggleTheme);
  $("#lang-toggle")?.addEventListener("click", toggleLang);

  // Contact form submit
  $("#contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = ($("#name")?.value || "").trim();
    const t = i18n[state.lang];
    const msg = t.formSuccess(name || (state.lang === "en" ? "there" : "¡hola!"));

    let notice = $("#form-notice");
    if (!notice) {
      notice = document.createElement("div");
      notice.id = "form-notice";
      notice.className = "notice";
      $("#contact")?.appendChild(notice);
    }
    notice.textContent = msg;
    e.target.reset();
  });
}

function init() {
  loadPrefs();
  applyTheme();
  setLang(state.lang); // triggers rendering
  wireEvents();
}

init();
