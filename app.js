const $ = (sel, root = document) => root.querySelector(sel);

const STORAGE_KEYS = {
  theme: "carla_portfolio_theme",
  lang: "carla_portfolio_lang",
};

const state = {
  lang: "en",
  theme: "light",
  animationTab: "stepped",
};

const yearColors = {
  "2002": "linear-gradient(135deg, #ff6b6b, #ffa07a)",
  "2010": "linear-gradient(135deg, #ffe66d, #ffa07a)",
  "2015": "linear-gradient(135deg, #4ecdc4, #a8e6cf)",
  "2020": "linear-gradient(135deg, #667eea, #764ba2)",
  "2024": "linear-gradient(135deg, #4ecdc4, #667eea)",
  "2026": "linear-gradient(135deg, #ffa07a, #667eea)",
};

const CONTENT = {
  heroName: "Carla Escrig Durán",
  subtitle: {
    en: "3D animator & Visual Development artist",
    es: "Animación 3D y Visual Development",
  },
  welcome: { en: "", es: "" },

  animationReelSrc: "https://vimeo.com/1144153174",
  visdevReelSrc: "Reels/2425_CarlaEscrig_Concept_Reel_V5.mp4",

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
    navTitle: "CARLA ESCRIG DURÁN",
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

    ctaContact: "Contact",
    ctaReel: "Watch reel",
    heroLocation: "Barcelona, Spain",
    homeWelcome: "Welcome to my portfolio!",
    homeCtaAnimation: "Animation Reel",
    homeCtaVisdev: "Visual Development",
    skipToContent: "Skip to content",
    aboutIntro:
      "Passionate about animation since my childhood and dreaming of working in it one day. I am becoming a professional 3D animator and Visual Development artist. I am a hardworking person and I give my 100% to any project I work on.",
    personalIntro: "My creative explorations.",
    navHome: "HOME",
    navAbout: "ABOUT ME",
    navThesis: "THESIS WORK",
    navAnimation: "3D ANIMATION",
    navVisdev: "VISUAL DEVELOPMENT",
    navStoryboard: "STORYBOARD",
    navPersonal: "PERSONAL WORK",
    navContact: "CONTACT",
    pageTitleHome: "Carla Escrig Durán - Portfolio",
    pageTitleAbout: "About Me - Carla Escrig Duran",
    pageTitleThesis: "Thesis - Carla Escrig Duran",
    pageTitleAnimation: "Animation - Carla Escrig Duran",
    pageTitleVisdev: "Visual Development - Carla Escrig Duran",
    pageTitleStoryboard: "Storyboard - Carla Escrig Duran",
    pageTitlePersonal: "Personal Work - Carla Escrig Duran",
    pageTitleContact: "Contact - Carla Escrig Duran",

    tabsStepped: "Stepped",
    tabsSpline: "Spline",
    tabsPolish: "Polish",

    thesisProjectName: "KAIROS",
    thesisProjectIntro:
      "My thesis project was a collaborative journey through the complete animation pipeline. From initial concept sketches to final compositing, I contributed across multiple departments to bring our story to life. Below you can explore my work organized by production phase.",

    contactName: "Name:",
    contactEmail: "Email:",
    contactMessage: "Message:",
    contactSend: "Send",
    formSuccess: (name) => `Thanks, ${name}! Your message has been sent.`,

    modalPet: "The Pet Medium",
    modalMerce: "Mercè: Barcelona Màgica",
    modalPlaceholder: "Content will appear here once you share your images/videos (Imgur/Vimeo).",
    modalSubBrief: "The Brief",
    modalSubCharacters: "Character Exploration",
    modalSubProps: "Props & Vehicles",
    modalSubEnv: "Environment & Lighting",
    modalSubInspo: "Inspiration",
    modalSubChar: "Character Design",
    modalSubEnv2: "Environment Design",
    modalSubProps2: "Props & Details",
    modalSubFinal: "Final Illustrations",
    reelTitle: "Animation Reel",
    visdevReelTitle: "Visual Development Reel",
    reelInvalid: "Reel link is missing or invalid.",
    langToggleAria: "Switch to Spanish",
    closeLabel: "Close",
  },

  es: {
    navTitle: "CARLA ESCRIG DURÁN",
    brandSubtitle: "Animadora 3D y artista de desarrollo visual",
    homeTitle: "INICIO",
    aboutTitle: "SOBRE MÍ",
    thesisTitle: "TESIS",
    animationTitle: "ANIMACIÓN 3D",
    visdevTitle: "DESARROLLO VISUAL",
    storyboardTitle: "STORYBOARD",
    storyboardSoon: "Próximamente",
    personalTitle: "TRABAJO PERSONAL",
    contactTitle: "CONTACTO",

    ctaContact: "Contacto",
    ctaReel: "Ver reel",
    heroLocation: "Barcelona, España",
    homeWelcome: "¡Bienvenida/o a mi portafolio!",
    homeCtaAnimation: "Reel de animación",
    homeCtaVisdev: "Desarrollo visual",
    skipToContent: "Saltar al contenido",
    aboutIntro:
      "Apasionada por la animación desde la infancia y soñando con trabajar en este sector. Me estoy formando como profesional en animación 3D y desarrollo visual. Soy una persona trabajadora y doy el 100% en cada proyecto en el que participo.",
    personalIntro: "Mis exploraciones creativas.",
    navHome: "INICIO",
    navAbout: "SOBRE MÍ",
    navThesis: "TESIS",
    navAnimation: "ANIMACIÓN 3D",
    navVisdev: "DESARROLLO VISUAL",
    navStoryboard: "STORYBOARD",
    navPersonal: "TRABAJO PERSONAL",
    navContact: "CONTACTO",
    pageTitleHome: "Carla Escrig Durán - Portafolio",
    pageTitleAbout: "Sobre Mi - Carla Escrig Duran",
    pageTitleThesis: "Tesis - Carla Escrig Duran",
    pageTitleAnimation: "Animacion - Carla Escrig Duran",
    pageTitleVisdev: "Desarrollo Visual - Carla Escrig Duran",
    pageTitleStoryboard: "Storyboard - Carla Escrig Duran",
    pageTitlePersonal: "Trabajo Personal - Carla Escrig Duran",
    pageTitleContact: "Contacto - Carla Escrig Duran",

    tabsStepped: "Bloqueo",
    tabsSpline: "Spline",
    tabsPolish: "Pulido",

    thesisProjectName: "KAIROS",
    thesisProjectIntro:
      "Mi proyecto de tesis fue un viaje colaborativo a través de todo el pipeline de animación. Desde los primeros bocetos conceptuales hasta el compositing final, contribuí en múltiples departamentos para dar vida a nuestra historia. Aquí puedes explorar mi trabajo organizado por fases de producción.",

    contactName: "Nombre:",
    contactEmail: "Correo electrónico:",
    contactMessage: "Mensaje:",
    contactSend: "Enviar",
    formSuccess: (name) => `¡Gracias, ${name}! Tu mensaje se ha enviado.`,

    modalPet: "The Pet Medium",
    modalMerce: "Mercè: Barcelona Màgica",
    modalPlaceholder: "El contenido aparecerá aquí cuando compartas tus imágenes/vídeos (Imgur/Vimeo).",
    modalSubBrief: "El brief",
    modalSubCharacters: "Exploración de personajes",
    modalSubProps: "Props y vehículos",
    modalSubEnv: "Entorno e iluminación",
    modalSubInspo: "Inspiración",
    modalSubChar: "Diseño de personaje",
    modalSubEnv2: "Diseño de entorno",
    modalSubProps2: "Props y detalles",
    modalSubFinal: "Ilustraciones finales",
    reelTitle: "Reel de animación",
    visdevReelTitle: "Reel de desarrollo visual",
    reelInvalid: "Falta el enlace del reel o no es válido.",
    langToggleAria: "Cambiar a ingles",
    closeLabel: "Cerrar",
  },
};

const timelineData = [
  {
    year: "2002",
    title: { en: "The Beginning", es: "El inicio" },
    icon: "🌱",
    visual: { en: "Birthplace: Barcelona", es: "Lugar de nacimiento: Barcelona" },
    text: {
      en: "I was born on the 24th of June in 2002, in Barcelona, Spain. I was a naturally curious child and was fascinated by art at a very young age.",
      es: "Nací el 24 de junio de 2002 en Barcelona, España. Desde muy pequeña fui curiosa y el arte me fascinó desde temprano.",
    },
    media: { type: "img", src: "aboutimages/2002.jpg", alt: "Carla in childhood" },
  },
  {
    year: "2010",
    title: { en: "First Steps in Art", es: "Primeros pasos en el arte" },
    icon: "🎨",
    visual: { en: "Sketchbooks and painting", es: "Cuadernos y pintura" },
    text: {
      en: "I started exploring drawing and painting. Like all children, I was mesmerized by animated films, and I spent my days drawing princesses, dragons, mermaids, etc.",
      es: "Empecé a explorar el dibujo y la pintura. Como a cualquier niña, me encantaban las pelis de animación y pasaba el día dibujando princesas, dragones, sirenas, etc.",
    },
    media: { type: "img", src: "aboutimages/2010.jpg", alt: "Carla drawing in early years" },
  },
  {
    year: "2015",
    title: { en: "Diving into Animation", es: "Sumergiéndome en la animación" },
    icon: "🎬",
    visual: { en: "Discovering animation industry", es: "Descubriendo la industria de animación" },
    text: {
      en: "As a teenager, my interests started to flourish. I began educating myself about the animation industry, and I knew I wanted to dedicate my life to it.",
      es: "En la adolescencia mis intereses empezaron a crecer. Empecé a aprender por mi cuenta sobre la industria de la animación y supe que quería dedicarme a ello.",
    },
    media: { type: "img", src: "aboutimages/2015.jpg", alt: "Carla exploring animation" },
  },
  {
    year: "2020",
    title: { en: "Professional Development", es: "Desarrollo profesional" },
    icon: "🎓",
    visual: { en: "University and teamwork", es: "Universidad y trabajo en equipo" },
    text: {
      en: "My first year of college. I completed the 3D Animation & VFX degree at LaSalle URL and met amazing colleagues and teachers.",
      es: "Mi primer año de universidad. Cursé el grado de Animación 3D y VFX en LaSalle URL y conocí a compañeras/os y profes increíbles.",
    },
    media: {
      type: "img",
      src: "aboutimages/2020.jpg",
      alt: "Carla during university years",
      position: "50% 35%",
    },
  },
  {
    year: "2024",
    title: { en: "Thesis & Specialization", es: "Tesis y especialización" },
    icon: "🧩",
    visual: { en: "Multidisciplinary thesis production", es: "Producción de tesis multidisciplinar" },
    text: {
      en: "We started our thesis project. I collaborated on designs, backgrounds, props, storyboards, animatics, texturing, VFX and 3D animation.",
      es: "Empezamos el proyecto de tesis. Participé en diseño, fondos, props, storyboards, animatics, texturizado, VFX y animación 3D.",
    },
    media: { type: "img", src: "aboutimages/2024.png", alt: "Carla working on thesis" },
  },
  {
    year: "2026",
    title: { en: "Looking Forward", es: "Mirando al futuro" },
    icon: "🚀",
    visual: { en: "Master's degree and next step", es: "Máster y siguiente etapa profesional" },
    text: {
      en: "After completing a Master's in 3D Animation for Characters, I’m ready to start my journey in the animation industry.",
      es: "Tras completar un Máster en Animación 3D de personajes, estoy lista para empezar mi camino en la industria de la animación.",
    },
    media: { type: "video-file", src: "aboutimages/2026.mp4" },
  },
];

const thesisPhases = [
  {
    group: { en: "FINAL RESULT", es: "RESULTADO FINAL" },
    phase: { en: "Complete Short Film", es: "Corto completo" },
    title: { en: "Complete Short Film", es: "Corto final" },
    desc: {
      en: "The culmination of our team's hard work - watch the final animated short film.",
      es: "El resultado final del trabajo del equipo: mira el corto final.",
    },
    link: "https://www.youtube.com/watch?v=crrNnPeQyTs",
  },
  {
    group: { en: "PRE-PRODUCTION", es: "PREPRODUCCIÓN" },
    phase: { en: "PHASE 1", es: "FASE 1" },
    title: { en: "Concept Art", es: "Arte conceptual" },
    desc: {
      en: "Character designs, environment concepts, and visual development exploring the look and feel of our story world.",
      es: "Diseño de personajes, conceptos de entorno y desarrollo visual para definir el estilo visual del mundo.",
    },
  },
  {
    group: { en: "PRODUCTION", es: "PRODUCCIÓN" },
    phase: { en: "PHASE 3", es: "FASE 3" },
    title: { en: "Animatic", es: "Animática" },
    desc: {
      en: "Bringing the storyboard to life with timing, pacing, and rough audio to establish the rhythm of our film.",
      es: "Dando vida al storyboard con timing, ritmo y audio provisional para definir la estructura del corto.",
    },
  },
  {
    group: { en: "PRODUCTION", es: "PRODUCCIÓN" },
    phase: { en: "PHASE 4", es: "FASE 4" },
    title: { en: "Layout", es: "Composición" },
    desc: {
      en: "3D scene composition and camera work - establishing the staging and cinematography for each shot.",
      es: "Composición 3D y cámaras: planteamiento y cinematografía por plano.",
    },
  },
  {
    group: { en: "PRODUCTION", es: "PRODUCCIÓN" },
    phase: { en: "PHASE 5", es: "FASE 5" },
    title: { en: "3D Animation", es: "Animación 3D" },
    desc: {
      en: "Character performance and movement - bringing emotion and life to every shot through animation.",
      es: "Acting y movimiento: emoción y vida en cada plano a través de la animación.",
    },
  },
  {
    group: { en: "POST-PRODUCTION", es: "POSTPRODUCCIÓN" },
    phase: { en: "PHASE 6", es: "FASE 6" },
    title: { en: "Visual Effects", es: "Efectos visuales" },
    desc: {
      en: "Adding magic and atmosphere - particle systems, simulations, and effects that enhance the story.",
      es: "Magia y atmósfera: partículas, simulaciones y efectos que potencian la historia.",
    },
  },
  {
    group: { en: "POST-PRODUCTION", es: "POSTPRODUCCIÓN" },
    phase: { en: "PHASE 7", es: "FASE 7" },
    title: { en: "Graphic Design", es: "Diseño gráfico" },
    desc: {
      en: "Marketing and promotional materials - posters, titles, and branding that represent our project.",
      es: "Material promocional: pósters, títulos e identidad del proyecto.",
    },
  },
];

function loadPrefs() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
  if (savedTheme === "dark" || savedTheme === "light") state.theme = savedTheme;
  if (savedLang === "en" || savedLang === "es") state.lang = savedLang;
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;

  const fab = $("#fab-theme");
  if (fab) fab.textContent = state.theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  const fab = $("#fab-theme");
  fab?.classList.add("is-rotating");
  setTimeout(() => fab?.classList.remove("is-rotating"), 560);

  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  applyTheme();
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem(STORAGE_KEYS.lang, state.lang);
  renderAll();
}

function toggleLang() {
  setLang(state.lang === "en" ? "es" : "en");
}

function ensureHero() {
  return;
}

function renderI18n() {
  const t = i18n[state.lang];
  document.documentElement.lang = state.lang;

  const pageTitles = {
    "index.html": t.pageTitleHome,
    "about.html": t.pageTitleAbout,
    "thesis.html": t.pageTitleThesis,
    "animation.html": t.pageTitleAnimation,
    "visual-development.html": t.pageTitleVisdev,
    "storyboard.html": t.pageTitleStoryboard,
    "personal-work.html": t.pageTitlePersonal,
    "contact.html": t.pageTitleContact,
  };
  const pageFile = window.location.pathname.split("/").pop() || "index.html";
  if (pageTitles[pageFile]) {
    document.title = pageTitles[pageFile];
  }

  const skipLink = $(".skip-link");
  if (skipLink) {
    skipLink.textContent = t.skipToContent;
  }

  // top nav (if present)
  const navH1 = $("nav h1");
  if (navH1) navH1.textContent = t.navTitle;
  const brandSmall = $("nav small");
  if (brandSmall) brandSmall.textContent = t.brandSubtitle;

  const navMap = {
    "index.html": t.navHome,
    "about.html": t.navAbout,
    "thesis.html": t.navThesis,
    "animation.html": t.navAnimation,
    "visual-development.html": t.navVisdev,
    "storyboard.html": t.navStoryboard,
    "personal-work.html": t.navPersonal,
    "contact.html": t.navContact,
  };

  document.querySelectorAll(".menu-links a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && navMap[href]) {
      link.textContent = navMap[href];
    }
  });

  // section headers
  $("#home h2") && ($("#home h2").textContent = t.homeTitle);
  $("#home p") && ($("#home p").textContent = t.homeWelcome);
  $("#home-cta-animation") && ($("#home-cta-animation").textContent = t.homeCtaAnimation);
  $("#home-cta-visdev") && ($("#home-cta-visdev").textContent = t.homeCtaVisdev);
  $("#about h2") && ($("#about h2").textContent = t.aboutTitle);
  $(".about-intro") && ($(".about-intro").textContent = t.aboutIntro);
  $("#thesis h2") && ($("#thesis h2").textContent = t.thesisTitle);
  $("#animation h2") && ($("#animation h2").textContent = t.animationTitle);
  $("#visual-development h2") && ($("#visual-development h2").textContent = t.visdevTitle);
  $("#storyboard h2") && ($("#storyboard h2").textContent = t.storyboardTitle);
  $("#storyboard p") && ($("#storyboard p").textContent = t.storyboardSoon);
  $("#personal-work h2") && ($("#personal-work h2").textContent = t.personalTitle);
  $("#personal-work p") && ($("#personal-work p").textContent = t.personalIntro);
  $("#contact h2") && ($("#contact h2").textContent = t.contactTitle);

  const langFab = $("#fab-lang");
  if (langFab) {
    const targetLang = state.lang === "en" ? "ES" : "EN";
    const hoverEmoji = state.lang === "en" ? "🇪🇸" : "🇬🇧";
    langFab.textContent = targetLang;
    langFab.dataset.emoji = hoverEmoji;
    langFab.setAttribute("aria-label", t.langToggleAria);
    langFab.title = `${targetLang} ${hoverEmoji}`;
  }

  // contact labels
  $("label[for='name']") && ($("label[for='name']").textContent = t.contactName);
  $("label[for='email']") && ($("label[for='email']").textContent = t.contactEmail);
  $("label[for='message']") && ($("label[for='message']").textContent = t.contactMessage);
  $("#contact-form button[type='submit']") && ($("#contact-form button[type='submit']").textContent = t.contactSend);

  // Make sure form has class
  $("#contact-form")?.classList.add("form");
}

function renderTimeline() {
  const container = $("#timeline");
  if (!container) return;

  container.classList.add("timeline", "about-timeline");
  container.innerHTML = "";

  timelineData.forEach((item, idx) => {
    const row = document.createElement("article");
    row.className = `timeline-row ${idx % 2 === 0 ? "is-left" : "is-right"}`;
    row.style.setProperty("--dot", yearColors[item.year] || "var(--grad-mint)");

    const title = item.title[state.lang] || item.title.en;
    const text = item.text[state.lang] || item.text.en;
    const visual = (item.visual && (item.visual[state.lang] || item.visual.en)) || title;
    const icon = item.icon || "✨";

    row.innerHTML = `
      <div class="timeline-card">
        <h3>${title}</h3>
        <p class="timeline-text">${text}</p>
      </div>
      <div class="timeline-year-pill">${item.year}</div>
      <div class="timeline-media">
        <div class="timeline-media-inner">
          <div class="timeline-visual" role="img" aria-label="${visual}">
            <span class="timeline-visual-icon">${icon}</span>
            <strong>${title}</strong>
            <small>${visual}</small>
          </div>
        </div>
      </div>
    `;

    if (item.media) {
      const mediaInner = row.querySelector(".timeline-media-inner");
      if (mediaInner && item.media.type === "img") {
        mediaInner.classList.add("has-asset");
        mediaInner.innerHTML = `<img loading="lazy" src="${item.media.src}" alt="${item.media.alt || title}" style="object-position:${item.media.position || "50% 50%"}">`;
      } else if (mediaInner && item.media.type === "video") {
        mediaInner.classList.add("has-asset");
        mediaInner.innerHTML = `<iframe loading="lazy" src="${item.media.src}" title="${title}" allow="autoplay; fullscreen; picture-in-picture"></iframe>`;
      } else if (mediaInner && item.media.type === "video-file") {
        mediaInner.classList.add("has-asset");
        mediaInner.innerHTML = `<video autoplay muted loop playsinline controls preload="metadata" aria-label="${title}"><source src="${item.media.src}" type="video/mp4"></video>`;
      }
    }

    container.appendChild(row);
  });
}

function ensureFloatingControls() {
  if ($(".floating-controls")) return;

  const controls = document.createElement("div");
  controls.className = "floating-controls";
  controls.innerHTML = `
    <button class="fab" id="fab-lang" type="button" aria-label="Toggle language">EN</button>
    <button class="fab" id="fab-theme" type="button" aria-label="Toggle theme">☀️</button>
  `;
  document.body.appendChild(controls);
}

function renderThesis() {
  const phases = $("#phases");
  if (!phases) return;
  phases.innerHTML = "";

  const sections = document.createElement("div");
  sections.className = "thesis-sections";
  phases.appendChild(sections);

  thesisPhases.forEach((p, i) => {
    const phase = document.createElement("article");
    phase.className = "thesis-phase";

    const title = p.title[state.lang] || p.title.en;
    const phaseLabel = p.phase[state.lang] || p.phase.en;
    const groupLabel = p.group[state.lang] || p.group.en;
    const desc = p.desc[state.lang] || p.desc.en;

    phase.innerHTML = `
      <div class="thesis-phase__inner">
        <p class="thesis-phase__index">${String(i + 1).padStart(2, "0")}</p>
        <p class="thesis-phase__meta">${phaseLabel}</p>
        <h3 class="thesis-phase__title">${title}</h3>
        <p class="badge thesis-phase__group">${groupLabel}</p>
        <p class="thesis-phase__desc">${desc}</p>
      </div>
    `;

    sections.appendChild(phase);
  });
}

function vimeoEmbedFromUrl(url) {
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
  const t = i18n[state.lang];

  reel.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "media";
  wrapper.innerHTML = `
    <video autoplay muted loop playsinline controls preload="metadata" aria-label="${t.reelTitle}" width="100%" height="100%">
      <source src="Reels/Carla Escrig Duran 3D Animation Reel.mp4" type="video/mp4">
    </video>
  `;

  reel.appendChild(wrapper);
}

function ensureContactExtras() {
  const contact = $("#contact");
  if (!contact) return;

  // Social row
  if (!$("#social-row")) {
    const row = document.createElement("div");
    row.id = "social-row";
    row.className = "social-row";
    contact.appendChild(row);
  }

  // Mailto button
  if (!$("#mailto-btn")) {
    const mail = document.createElement("a");
    mail.id = "mailto-btn";
    mail.className = "btn contact-email-link";
    contact.appendChild(mail);
  }

  const row = $("#social-row");
  const mail = $("#mailto-btn");
  if (row && mail && row.nextElementSibling !== mail) {
    row.insertAdjacentElement("afterend", mail);
  }
}

function renderContact() {
  ensureContactExtras();

  const row = $("#social-row");
  const mail = $("#mailto-btn");
  if (!row || !mail) return;

  mail.href = `mailto:${CONTENT.contact.email}`;
  mail.textContent = CONTENT.contact.email;

  // Simple icon svgs
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
}

/* ---------- Modals (skeleton + ESC close) ---------- */
function openModal({ title, subtabs }) {
  const root = $("#modal-root");
  if (!root) return;

  const t = i18n[state.lang];

  root.classList.add("is-open");
  root.setAttribute("aria-hidden", "false");

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  const header = document.createElement("div");
  header.className = "modal-header";
  header.innerHTML = `
    <h3 class="modal-title">${title}</h3>
    <button class="modal-close" type="button" aria-label="${t.closeLabel}">✕</button>
  `;

  const body = document.createElement("div");
  body.className = "modal-body";

  const tabs = document.createElement("div");
  tabs.className = "modal-subtabs";
  tabs.innerHTML = subtabs
    .map((st, i) => `<button class="tab" type="button" aria-selected="${i === 0}" data-k="${st.key}">${st.label}</button>`)
    .join("");

  const content = document.createElement("div");
  content.id = "modal-content";
  content.className = "card";
  content.innerHTML = `<p style="margin:0;color:var(--muted)">${t.modalPlaceholder}</p>`;

  body.appendChild(tabs);
  body.appendChild(content);

  modal.appendChild(header);
  modal.appendChild(body);

  root.innerHTML = "";
  root.appendChild(backdrop);
  root.appendChild(modal);

  function close() {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    root.innerHTML = "";
    document.removeEventListener("keydown", onKey);
  }

  function onKey(e) {
    if (e.key === "Escape") close();
  }

  backdrop.addEventListener("click", close);
  header.querySelector(".modal-close")?.addEventListener("click", close);
  document.addEventListener("keydown", onKey);

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-k]");
    if (!btn) return;
    tabs.querySelectorAll("button[data-k]").forEach((b) => b.setAttribute("aria-selected", b === btn));
    content.innerHTML = `<p style="margin:0;color:var(--muted)">${t.modalPlaceholder}</p>`;
  });
}

function renderVisDev() {
  const section = $("#visual-development");
  if (!section) return;

  const t = i18n[state.lang];

  let reel = section.querySelector("#visdev-reel");
  if (!reel) {
    reel = document.createElement("div");
    reel.id = "visdev-reel";
    section.insertAdjacentElement("beforeend", reel);
  }

  reel.innerHTML = `
    <div class="media">
      <video loop playsinline controls preload="metadata" aria-label="${t.visdevReelTitle}">
        <source src="${CONTENT.visdevReelSrc}" type="video/mp4">
      </video>
    </div>
  `;

  // Create buttons if not present
  let wrap = section.querySelector("#visdev-actions");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.id = "visdev-actions";
    wrap.className = "hero-actions";
    section.appendChild(wrap);
  }

  wrap.innerHTML = `
    <button class="btn" type="button" id="open-pet">${t.modalPet}</button>
    <button class="btn btn--ghost" type="button" id="open-merce">${t.modalMerce}</button>
  `;

  $("#open-pet")?.addEventListener("click", () => {
    openModal({
      title: t.modalPet,
      subtabs: [
        { key: "brief", label: t.modalSubBrief },
        { key: "chars", label: t.modalSubCharacters },
        { key: "props", label: t.modalSubProps },
        { key: "env", label: t.modalSubEnv },
      ],
    });
  });

  $("#open-merce")?.addEventListener("click", () => {
    openModal({
      title: t.modalMerce,
      subtabs: [
        { key: "inspo", label: t.modalSubInspo },
        { key: "char", label: t.modalSubChar },
        { key: "env", label: t.modalSubEnv2 },
        { key: "props", label: t.modalSubProps2 },
        { key: "final", label: t.modalSubFinal },
      ],
    });
  });
}

function wireEvents() {
  $("#fab-theme")?.addEventListener("click", toggleTheme);
  $("#fab-lang")?.addEventListener("click", toggleLang);

  $("#theme-toggle")?.addEventListener("click", toggleTheme);
  $("#lang-toggle")?.addEventListener("click", toggleLang);

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

function renderAll() {
  renderI18n();
  renderTimeline();
  renderThesis();
  renderReel();
  renderContact();
  renderVisDev();
}

function init() {
  ensureFloatingControls();
  loadPrefs();
  applyTheme();
  renderAll();
  wireEvents();
}

init();
