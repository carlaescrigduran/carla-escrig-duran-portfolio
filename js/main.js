/* ═══════════════════════════════════════════════════════════════
   CARLA ESCRIG DURÁN — PORTFOLIO MAIN SCRIPT
   Vanilla JS only · No external dependencies
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── Translations ──────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    /* Nav */
    navHome:        'Home',
    navAbout:       'About',
    navThesis:      'Thesis',
    navAnimation:   'Animation',
    navVisualDev:   'Visual Dev',
    navStoryboard:  'Storyboard',
    navPersonal:    'Personal',
    navContact:     'Contact',
    /* Hero */
    heroGreeting:   "Hello, I'm",
    heroDesc:       'Crafting worlds through movement and imagination — from concept sketches to fully rendered 3D animations.',
    heroCta1:       'View My Work',
    heroCta2:       'Contact Me',
    /* About */
    aboutTitle:     'About Me',
    aboutBio:       "I'm Carla, a 3D animator and concept artist based in Spain, currently completing my degree in Animation. Passionate about bridging the gap between storytelling and technology, I specialise in character animation, environment design, and visual development. My work is driven by a love for expressive movement and narrative depth.",
    skillsTitle:    'Skills & Tools',
    journeyTitle:   'My Journey',
    timelineSwitch: 'Switch to vertical',
    timelineSwitchV:'Switch to horizontal',
    /* Thesis */
    thesisTitle:    'Thesis Work',
    thesisDesc:     "A comprehensive animated short film developed as my Bachelor's thesis, covering the full production pipeline from concept to final render.",
    /* Animation */
    animTitle:      '3D Animation',
    reelLabel:      'Animation Reel 2026',
    reelSub:        'Video will be embedded here',
    tabStepped:     'Stepped',
    tabSpline:      'Spline',
    tabPolish:      'Polish',
    /* Visual dev */
    vdTitle:        'Visual Development',
    vdDesc:         'Concept art, character designs, and world-building work from various projects.',
    viewProject:    'View Project',
    /* Storyboard */
    sbTitle:        'Storyboard',
    comingSoon:     'Coming Soon',
    sbDesc:         'Storyboard panels and animatics from my thesis and personal projects are being curated and will be published soon.',
    /* Personal */
    personalTitle:  'Personal Work',
    personalDesc:   'Creative explorations and passion projects made purely for fun and artistic growth.',
    /* Contact */
    contactTitle:   'Get In Touch',
    contactDesc:    "Open to collaborations, commissions, and job opportunities. Let's create something amazing together!",
    labelName:      'Your Name',
    labelEmail:     'Email Address',
    labelSubject:   'Subject',
    labelMessage:   'Message',
    phName:         'Enter your name',
    phEmail:        'your@email.com',
    phSubject:      "What's this about?",
    phMessage:      'Tell me about your project or idea…',
    submitBtn:      'Send Message ✈',
    formSuccess:    "Message sent! I'll get back to you soon.",
    locationLabel:  'Location',
    locationVal:    'Valencia, Spain',
    emailLabel:     'Email',
    availLabel:     'Availability',
    availVal:       'Open to opportunities',
    toolsUsed:      'Tools used:',
    /* Footer */
    footerRights:   ' All rights reserved.',
    footerMade:     'Made with ❤️ and lots of ☕',
    /* Timeline events */
    tl2002: 'Born in Valencia, Spain 🌟',
    tl2010: 'Started drawing and sketching ✏️',
    tl2015: 'Discovered digital art 🎨',
    tl2018: 'First steps in 3D modeling 🖥️',
    tl2020: 'Enrolled in Animation degree 🎓',
    tl2024: 'Thesis project development 📽️',
    tl2025: 'Graduation & new adventures ✨',
    tl2026: 'Building my professional career 🚀',
  },
  es: {
    /* Nav */
    navHome:        'Inicio',
    navAbout:       'Sobre mí',
    navThesis:      'TFG',
    navAnimation:   'Animación',
    navVisualDev:   'Des. Visual',
    navStoryboard:  'Storyboard',
    navPersonal:    'Personal',
    navContact:     'Contacto',
    /* Hero */
    heroGreeting:   'Hola, soy',
    heroDesc:       'Creando mundos a través del movimiento y la imaginación — desde bocetos conceptuales hasta animaciones 3D totalmente renderizadas.',
    heroCta1:       'Ver mi Trabajo',
    heroCta2:       'Contáctame',
    /* About */
    aboutTitle:     'Sobre Mí',
    aboutBio:       'Soy Carla, animadora 3D y artista conceptual con sede en España, actualmente finalizando mi grado en Animación. Apasionada por unir la narrativa y la tecnología, me especializo en animación de personajes, diseño de entornos y desarrollo visual. Mi trabajo está impulsado por el amor al movimiento expresivo y la profundidad narrativa.',
    skillsTitle:    'Habilidades y Herramientas',
    journeyTitle:   'Mi Trayectoria',
    timelineSwitch: 'Cambiar a vertical',
    timelineSwitchV:'Cambiar a horizontal',
    /* Thesis */
    thesisTitle:    'Trabajo de Fin de Grado',
    thesisDesc:     'Un cortometraje animado completo desarrollado como TFG, que cubre el pipeline de producción completo desde el concepto hasta el renderizado final.',
    /* Animation */
    animTitle:      'Animación 3D',
    reelLabel:      'Reel de Animación 2026',
    reelSub:        'El vídeo se incrustará aquí',
    tabStepped:     'Escalonado',
    tabSpline:      'Spline',
    tabPolish:      'Pulido',
    /* Visual dev */
    vdTitle:        'Desarrollo Visual',
    vdDesc:         'Arte conceptual, diseños de personajes y trabajo de construcción de mundos de varios proyectos.',
    viewProject:    'Ver Proyecto',
    /* Storyboard */
    sbTitle:        'Storyboard',
    comingSoon:     'Próximamente',
    sbDesc:         'Los paneles de storyboard y las animáticas de mi TFG y proyectos personales están siendo curados y se publicarán pronto.',
    /* Personal */
    personalTitle:  'Trabajo Personal',
    personalDesc:   'Exploraciones creativas y proyectos personales realizados puramente por diversión y crecimiento artístico.',
    /* Contact */
    contactTitle:   'Contáctame',
    contactDesc:    '¡Abierta a colaboraciones, encargos y oportunidades de trabajo. ¡Creemos algo increíble juntos!',
    labelName:      'Tu Nombre',
    labelEmail:     'Correo Electrónico',
    labelSubject:   'Asunto',
    labelMessage:   'Mensaje',
    phName:         'Escribe tu nombre',
    phEmail:        'tu@correo.com',
    phSubject:      '¿De qué se trata?',
    phMessage:      'Cuéntame sobre tu proyecto o idea…',
    submitBtn:      'Enviar Mensaje ✈',
    formSuccess:    '¡Mensaje enviado! Te responderé pronto.',
    locationLabel:  'Ubicación',
    locationVal:    'Valencia, España',
    emailLabel:     'Correo',
    availLabel:     'Disponibilidad',
    availVal:       'Abierta a oportunidades',
    toolsUsed:      'Herramientas usadas:',
    /* Footer */
    footerRights:   ' Todos los derechos reservados.',
    footerMade:     'Hecho con ❤️ y mucho ☕',
    /* Timeline events */
    tl2002: 'Nacida en Valencia, España 🌟',
    tl2010: 'Empezó a dibujar y bocetar ✏️',
    tl2015: 'Descubrió el arte digital 🎨',
    tl2018: 'Primeros pasos en modelado 3D 🖥️',
    tl2020: 'Ingresó en el Grado de Animación 🎓',
    tl2024: 'Desarrollo del proyecto de TFG 📽️',
    tl2025: 'Graduación y nuevas aventuras ✨',
    tl2026: 'Construyendo mi carrera profesional 🚀',
  },
};

/* ─── State ─────────────────────────────────────────────────── */
let currentLang      = localStorage.getItem('lang')  || 'en';
let isDarkMode       = localStorage.getItem('theme') === 'dark';
let timelineMode     = 'horizontal';
let typingInterval   = null;
let skillsAnimated   = false;

/* ─── DOM helpers ───────────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ─── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(isDarkMode, /* initial */ true);
  applyLanguage(currentLang, /* initial */ true);
  initNav();
  initScrollReveal();
  initSkillBars();
  initTypingAnimation();
  initTimeline();
  initTabs();
  initVisualDevModal();
  initContactForm();
  initSmoothScroll();
  initActiveNavHighlight();
});

/* ═══════════════════════════════════════════════════════════════
   THEME (Dark / Light mode)
   ═══════════════════════════════════════════════════════════════ */
function applyTheme(dark, initial = false) {
  isDarkMode = dark;
  document.body.classList.toggle('dark-mode', dark);

  const icon = $('#theme-icon');
  if (icon) icon.textContent = dark ? '☀️' : '🌙';

  if (!initial) localStorage.setItem('theme', dark ? 'dark' : 'light');
}

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE SWITCHING
   ═══════════════════════════════════════════════════════════════ */
function applyLanguage(lang, initial = false) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('data-lang', lang);

  const t = TRANSLATIONS[lang];
  const label = $('#lang-label');
  if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';

  /* Update all elements with data-en / data-es text content */
  $$('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text !== null) {
      /* Don't overwrite child elements — only set textContent when safe */
      if (!el.children.length || el.classList.contains('nav-link')) {
        el.textContent = text;
      } else {
        /* Elements with children: set aria-label and leave children alone */
      }
    }
  });

  /* Update placeholders */
  $$('[data-en-placeholder]').forEach(el => {
    const ph = el.getAttribute(`data-${lang}-placeholder`);
    if (ph) el.setAttribute('placeholder', ph);
  });

  if (!initial) localStorage.setItem('lang', lang);
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════ */
function initNav() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navMenu   = $('#nav-menu');
  const themeBtn  = $('#theme-toggle');
  const langBtn   = $('#lang-toggle');

  /* Scroll → add .scrolled class */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* Hamburger */
  hamburger?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  /* Close menu on nav-link click */
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (navMenu.classList.contains('open') &&
        !navbar.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* Theme toggle */
  themeBtn?.addEventListener('click', () => applyTheme(!isDarkMode));

  /* Language toggle */
  langBtn?.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'es' : 'en');
    /* Re-run typing animation with new language strings */
    initTypingAnimation();
    /* Update modal if open */
    updateOpenModal();
  });
}

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = $(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   ACTIVE NAV HIGHLIGHT (IntersectionObserver)
   ═══════════════════════════════════════════════════════════════ */
function initActiveNavHighlight() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL-REVEAL
   ═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = $$('.reveal');

  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   SKILL BARS
   ═══════════════════════════════════════════════════════════════ */
function initSkillBars() {
  const skillSection = $('#about');
  if (!skillSection) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !skillsAnimated) {
        skillsAnimated = true;
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillSection);
}

function animateSkillBars() {
  $$('.skill-fill').forEach(bar => {
    const width = bar.getAttribute('data-width');
    /* Defer to next frame so CSS transition triggers */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { bar.style.width = `${width}%`; });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   TYPING ANIMATION
   ═══════════════════════════════════════════════════════════════ */
const TYPING_STRINGS = {
  en: ['3D Animator', 'Concept Artist', 'Visual Developer', 'Storyteller'],
  es: ['Animadora 3D', 'Artista Conceptual', 'Desarrolladora Visual', 'Narradora'],
};

function initTypingAnimation() {
  const el = $('#typing-text');
  if (!el) return;

  /* Cancel previous animation */
  if (typingInterval) clearTimeout(typingInterval);
  el.textContent = '';

  const strings   = TYPING_STRINGS[currentLang];
  let strIndex  = 0;
  let charIndex = 0;
  let deleting  = false;

  function tick() {
    const current = strings[strIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        typingInterval = setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        strIndex = (strIndex + 1) % strings.length;
        typingInterval = setTimeout(tick, 400);
        return;
      }
    }

    const speed = deleting ? 60 : 90;
    typingInterval = setTimeout(tick, speed);
  }

  typingInterval = setTimeout(tick, 800);
}

/* ═══════════════════════════════════════════════════════════════
   TIMELINE
   ═══════════════════════════════════════════════════════════════ */
function initTimeline() {
  const btn      = $('#timeline-toggle');
  const timeline = $('#timeline');
  if (!btn || !timeline) return;

  btn.addEventListener('click', () => {
    if (timelineMode === 'horizontal') {
      timelineMode = 'vertical';
      timeline.setAttribute('data-mode', 'vertical');
      btn.textContent = TRANSLATIONS[currentLang].timelineSwitchV;
      btn.setAttribute('aria-pressed', 'true');
    } else {
      timelineMode = 'horizontal';
      timeline.setAttribute('data-mode', 'horizontal');
      btn.textContent = TRANSLATIONS[currentLang].timelineSwitch;
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   TABS (Animation section)
   ═══════════════════════════════════════════════════════════════ */
function initTabs() {
  const tabBtns   = $$('.tab-btn');
  const tabPanels = $$('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('tab-panel--active'));

      btn.classList.add('tab-btn--active');
      btn.setAttribute('aria-selected', 'true');

      const panel = $(`#tab-${tabId}`);
      if (panel) panel.classList.add('tab-panel--active');
    });

    /* Keyboard: arrow navigation */
    btn.addEventListener('keydown', e => {
      let idx = tabBtns.indexOf(btn);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        tabBtns[(idx + 1) % tabBtns.length].focus();
        tabBtns[(idx + 1) % tabBtns.length].click();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        tabBtns[(idx - 1 + tabBtns.length) % tabBtns.length].focus();
        tabBtns[(idx - 1 + tabBtns.length) % tabBtns.length].click();
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   VISUAL DEVELOPMENT MODAL
   ═══════════════════════════════════════════════════════════════ */
/* Map project key → gradient classes for modal gallery */
const PROJECT_IMGS = {
  'forest-spirits':    ['vd-img--1', 'phase-img--3'],
  'neon-city':         ['vd-img--2', 'phase-img--11'],
  'sea-wanderer':      ['vd-img--3', 'phase-img--5'],
  'dreamscape':        ['vd-img--4', 'phase-img--7'],
  'stone-golem':       ['vd-img--5', 'phase-img--9'],
  'solarpunk-village': ['vd-img--6', 'phase-img--13'],
};

let activeProjectCard = null;

function initVisualDevModal() {
  const overlay = $('#modal-overlay');
  const closeBtn = $('#modal-close');

  /* Open on card click or Enter/Space */
  $$('.vd-card').forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  /* Close */
  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay && !overlay.hidden) closeModal();
  });
}

function openModal(card) {
  const overlay   = $('#modal-overlay');
  const titleEl   = $('#modal-title');
  const descEl    = $('#modal-desc');
  const toolsEl   = $('#modal-tools-list');
  const galleryEl = $('#modal-gallery');
  const toolsLabel = $('#modal-overlay .modal-tools strong');

  if (!overlay) return;

  const lang     = currentLang;
  const title    = card.getAttribute(`data-title-${lang}`);
  const desc     = card.getAttribute(`data-desc-${lang}`);
  const tools    = card.getAttribute('data-tools');
  const project  = card.getAttribute('data-project');

  titleEl.textContent = title || '';
  descEl.textContent  = desc  || '';
  toolsEl.textContent = tools || '';
  if (toolsLabel) toolsLabel.textContent = TRANSLATIONS[lang].toolsUsed;

  /* Build gallery */
  galleryEl.innerHTML = '';
  const imgClasses = PROJECT_IMGS[project] || ['vd-img--1'];
  imgClasses.forEach(cls => {
    const div = document.createElement('div');
    div.className = `modal-gallery-img ${cls}`;
    div.setAttribute('aria-hidden', 'true');
    galleryEl.appendChild(div);
  });

  activeProjectCard = card;
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';

  /* Focus close button */
  setTimeout(() => $('#modal-close')?.focus(), 50);
}

function closeModal() {
  const overlay = $('#modal-overlay');
  if (!overlay) return;
  overlay.hidden = true;
  document.body.style.overflow = '';
  if (activeProjectCard) {
    activeProjectCard.focus();
    activeProjectCard = null;
  }
}

function updateOpenModal() {
  const overlay = $('#modal-overlay');
  if (overlay && !overlay.hidden && activeProjectCard) {
    openModal(activeProjectCard);
  }
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form    = $('#contact-form');
  const success = $('#form-success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateForm(form)) {
      /* Simulate async submission */
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = currentLang === 'en' ? 'Sending…' : 'Enviando…';
      submitBtn.disabled = true;

      setTimeout(() => {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        if (success) {
          success.textContent = '';
          const icon = document.createElement('span');
          icon.setAttribute('aria-hidden', 'true');
          icon.textContent = '🎉 ';
          const msg = document.createElement('span');
          msg.textContent = TRANSLATIONS[currentLang].formSuccess;
          success.appendChild(icon);
          success.appendChild(msg);
          success.hidden = false;

          setTimeout(() => { success.hidden = true; }, 6000);
        }
      }, 1200);
    }
  });

  /* Live validation on blur */
  $$('input[required], textarea[required]', form).forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });
}

function validateForm(form) {
  let valid = true;
  $$('input[required], textarea[required]', form).forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function validateField(field) {
  const errorEl = field.nextElementSibling;
  const lang    = currentLang;
  let msg = '';

  if (field.validity.valueMissing) {
    msg = lang === 'en' ? 'This field is required.' : 'Este campo es obligatorio.';
  } else if (field.type === 'email' && field.validity.typeMismatch) {
    msg = lang === 'en' ? 'Please enter a valid email address.' : 'Por favor, introduce un correo válido.';
  }

  if (msg) {
    field.classList.add('error');
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.textContent = msg;
    }
    return false;
  } else {
    field.classList.remove('error');
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.textContent = '';
    }
    return true;
  }
}

/* ═══════════════════════════════════════════════════════════════
   COUNTER ANIMATION (utility, called if stat elements exist)
   ═══════════════════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const startVal = 0;

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(startVal + (target - startVal) * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* Observe stat counters (if they exist in HTML) */
$$('[data-counter]').forEach(el => {
  const target = parseInt(el.getAttribute('data-counter'), 10);
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounter(el, target);
      observer.unobserve(el);
    }
  }, { threshold: 0.5 });
  observer.observe(el);
});

/* ═══════════════════════════════════════════════════════════════
   KEYBOARD TRAP for MODAL (accessibility)
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  const overlay = $('#modal-overlay');
  if (!overlay || overlay.hidden) return;

  if (e.key !== 'Tab') return;

  const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', overlay);
  if (!focusable.length) return;

  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

/* ═══════════════════════════════════════════════════════════════
   HOVER PARALLAX on hero orbs (subtle, respects reduced-motion)
   ═══════════════════════════════════════════════════════════════ */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = $('.hero-section');
  if (!hero) return;

  const orbs = $$('.hero-orb', hero);

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const cx   = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy   = (e.clientY - rect.top)  / rect.height - 0.5;

    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 12;
      orb.style.transform = `translate(${cx * factor}px, ${cy * factor}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    orbs.forEach(orb => {
      orb.style.transform = '';
    });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   PERFORMANCE: defer non-critical operations
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  /* Re-trigger skill bars in case section was already in view */
  if (!skillsAnimated) {
    const aboutSection = $('#about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        skillsAnimated = true;
        animateSkillBars();
      }
    }
  }

  /* Dynamic footer year */
  const footerYear = $('#footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
});

/* ═══════════════════════════════════════════════════════════════
   BACK TO TOP BUTTON
   ═══════════════════════════════════════════════════════════════ */
(function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
