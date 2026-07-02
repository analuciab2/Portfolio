/**
 * main.js — Lógica principal (sin ES modules, compatible con file://)
 * Depende de que data.js se cargue primero (variables globales).
 */

var currentLang = 'es';

/* ── Cursor custom ───────────────────────────────────────── */
function initCursor() {
  var dot  = document.querySelector('.cursor-dot');
  var ring = document.querySelector('.cursor-ring');
  if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return;

  var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Use event delegation for hover states to support dynamically rendered elements
  document.addEventListener('mouseenter', function(e) {
    var target = e.target;
    if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button' || target.closest('.project-card'))) {
      ring.style.width = '52px'; ring.style.height = '52px'; ring.style.opacity = '1';
    }
  }, true);

  document.addEventListener('mouseleave', function(e) {
    var target = e.target;
    if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button' || target.closest('.project-card'))) {
      ring.style.width = '32px'; ring.style.height = '32px'; ring.style.opacity = '0.7';
    }
  }, true);
}

/* ── Navbar ──────────────────────────────────────────────── */
function initNav() {
  var nav  = document.querySelector('.nav');
  var ham  = document.querySelector('.nav__hamburger');
  var menu = document.querySelector('.nav__mobile-menu');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  if (ham && menu) {
    ham.addEventListener('click', function() {
      var open = ham.getAttribute('aria-expanded') === 'true';
      ham.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        ham.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ── Renderizar Bio ──────────────────────────────────────── */
function renderBio() {
  var bioEl = document.querySelector('.about__bio');
  if (!bioEl) return;
  var bio = PORTFOLIO_DATA[currentLang].PERSONA.bio;
  bioEl.innerHTML = bio.map(function(p) { return '<p>' + p + '</p>'; }).join('');
}

/* ── Renderizar Stats ────────────────────────────────────── */
function renderStats() {
  var grid = document.getElementById('stats-grid');
  if (!grid) return;
  grid.innerHTML = ''; // Clear container before re-rendering
  var stats = PORTFOLIO_DATA[currentLang].PERSONA.stats;
  stats.forEach(function(s) {
    var div = document.createElement('div');
    div.className = 'stat-item reveal';
    div.innerHTML = '<div class="stat-item__number">' + s.numero + '</div><div class="stat-item__label">' + s.label + '</div>';
    grid.appendChild(div);
  });
}

/* ── Renderizar Experiencia ──────────────────────────────── */
function renderExperiencia() {
  var list = document.getElementById('timeline-list');
  if (!list) return;
  list.innerHTML = ''; // Clear container before re-rendering

  var expData = PORTFOLIO_DATA[currentLang].EXPERIENCIA;
  expData.forEach(function(exp) {
    var item = document.createElement('article');
    item.className = 'timeline-item reveal';
    item.dataset.tipo = (exp.tipo || []).join(' ');

    var presentStr = currentLang === 'en' ? 'Present' : 'Presente';
    var fechaFin = exp.fechaFin === 'Presente' || exp.fechaFin === 'Present'
      ? '<span class="accent">' + presentStr + '</span>'
      : exp.fechaFin;

    // Translate dynamic tag visual text
    var tagsHtml = (exp.tipo || []).map(function(t) {
      var transTag = UI_TRANSLATIONS[currentLang]["tag_" + t] || t;
      return '<span class="tag">' + transTag + '</span>';
    }).join('');

    item.innerHTML =
      '<div class="timeline-item__date">' +
        '<div class="timeline-item__year">' + fechaFin + '</div>' +
        '<div class="timeline-item__duration">' + exp.fechaInicio + ' — ' + exp.fechaFin + '</div>' +
      '</div>' +
      '<div class="timeline-item__body">' +
        '<h3 class="timeline-item__role">' + exp.rol + '</h3>' +
        '<p class="timeline-item__company">' + exp.empresa + '<span>· ' + exp.lugar + '</span></p>' +
        '<div class="timeline-item__tags">' +
          tagsHtml +
        '</div>' +
        '<ul class="timeline-item__achievements">' +
          (exp.logros || []).map(function(l) { return '<li>' + l + '</li>'; }).join('') +
        '</ul>' +
      '</div>';

    list.appendChild(item);
  });
}

/* ── Renderizar Proyectos ────────────────────────────────── */
function renderProyectos() {
  var grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  grid.innerHTML = ''; // Clear container before re-rendering

  var projData = PORTFOLIO_DATA[currentLang].PROYECTOS_VIDEO;
  projData.forEach(function(proj) {
    var card = document.createElement('article');
    card.className = 'project-card reveal';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    
    var viewVideoLabel = currentLang === 'en' ? 'Watch video: ' : 'Ver video: ';
    card.setAttribute('aria-label', viewVideoLabel + proj.titulo);
    card.dataset.videoUrl = proj.videoUrl;
    card.dataset.titulo   = proj.titulo;
    card.dataset.cliente  = proj.cliente;
    card.dataset.tipo     = proj.tipo;
    card.dataset.rol      = proj.rol;
    card.dataset.año      = proj.año;

    var thumbHtml = proj.thumbnail
      ? '<img src="' + proj.thumbnail + '" alt="Thumbnail de ' + proj.titulo + '" loading="lazy">'
      : '<div class="project-card__thumb--placeholder" aria-hidden="true">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
        '</div>';

    card.innerHTML =
      '<div class="project-card__thumb">' +
        thumbHtml +
        '<div class="project-card__overlay" aria-hidden="true"></div>' +
        '<div class="project-card__play" aria-hidden="true">' +
          '<div class="project-card__play-icon">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="project-card__info">' +
        '<h3 class="project-card__title">' + proj.titulo + '</h3>' +
        '<div class="project-card__meta">' +
          '<span>' + proj.tipo + '</span>' +
          (proj.año ? '<span>·</span><span>' + proj.año + '</span>' : '') +
          (proj.cliente ? '<span>·</span><span>' + proj.cliente + '</span>' : '') +
        '</div>' +
        '<p class="project-card__role">' + proj.rol + '</p>' +
      '</div>';

    grid.appendChild(card);
  });
}

/* ── Renderizar Habilidades ──────────────────────────────── */
function renderHabilidades() {
  var grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = ''; // Clear container before re-rendering

  var skillsData = PORTFOLIO_DATA[currentLang].HABILIDADES;
  skillsData.forEach(function(grupo) {
    var col = document.createElement('div');
    col.className = 'skill-group reveal';
    col.innerHTML =
      '<h3 class="skill-group__title">' + grupo.categoria + '</h3>' +
      '<ul class="skill-list">' +
        grupo.items.map(function(item) { return '<li class="skill-item">' + item + '</li>'; }).join('') +
      '</ul>';
    grid.appendChild(col);
  });

  var langList = document.getElementById('languages-list');
  if (langList) {
    langList.innerHTML = ''; // Clear container before re-rendering
    var idiomasData = PORTFOLIO_DATA[currentLang].IDIOMAS;
    idiomasData.forEach(function(lang) {
      var li = document.createElement('li');
      li.className = 'language-item';
      li.innerHTML = '<span class="language-item__name">' + lang.idioma + '</span>' +
                     '<span class="language-item__level">' + lang.nivel + '</span>';
      langList.appendChild(li);
    });
  }
}

/* ── Renderizar Intérprete ───────────────────────────────── */
function renderInterpreteSection() {
  var interpreteData = PORTFOLIO_DATA[currentLang].HABILIDADES_INTERPRETE;
  var section = document.getElementById('interprete-section');
  if (!section) return;

  if (!interpreteData || !interpreteData.visible) {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  var desc = section.querySelector('#interprete-desc');
  if (desc) desc.textContent = interpreteData.descripcion;

  var list = section.querySelector('#interprete-skills');
  if (list) {
    list.innerHTML = ''; // Clear container before re-rendering
    interpreteData.items.forEach(function(item) {
      var li = document.createElement('li');
      li.className = 'skill-item';
      li.textContent = item;
      list.appendChild(li);
    });
  }

  var link = section.querySelector('#interprete-cv-link');
  if (link) {
    if (interpreteData.cvPdf) {
      link.href = interpreteData.cvPdf;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  }
}

/* ── Renderizar Educación ────────────────────────────────── */
function renderEducacion() {
  var el = document.getElementById('educacion-list');
  if (!el) return;
  el.innerHTML = ''; // Clear container before re-rendering

  var eduData = PORTFOLIO_DATA[currentLang].EDUCACION;
  if (eduData) {
    eduData.forEach(function(ed) {
      var div = document.createElement('div');
      div.className = 'skill-group reveal';
      
      var eduTitle = currentLang === 'en' ? 'Education' : 'Educación';
      div.innerHTML =
        '<h3 class="skill-group__title">' + eduTitle + '</h3>' +
        '<ul class="skill-list">' +
          '<li class="skill-item"><strong style="color:var(--color-text-primary)">' + ed.titulo + '</strong></li>' +
          '<li class="skill-item">' + ed.institucion + ' · ' + ed.año + '</li>' +
        '</ul>';
      el.appendChild(div);
    });
  }

  var certEl = document.getElementById('certificaciones-list');
  if (!certEl) return;
  certEl.innerHTML = ''; // Clear container before re-rendering

  var certData = PORTFOLIO_DATA[currentLang].CERTIFICACIONES;
  if (certData) {
    certData.forEach(function(cert) {
      var div = document.createElement('div');
      div.className = 'skill-group reveal';
      
      var certTitle = currentLang === 'en' ? 'Certifications' : 'Certificaciones';
      div.innerHTML =
        '<h3 class="skill-group__title">' + certTitle + '</h3>' +
        '<ul class="skill-list">' +
          '<li class="skill-item"><strong style="color:var(--color-text-primary)">' + cert.nombre + '</strong></li>' +
          '<li class="skill-item">' + cert.detalle + '</li>' +
        '</ul>';
      certEl.appendChild(div);
    });
  }
}

/* ── Renderizar Contacto ─────────────────────────────────── */
function renderContacto() {
  var c = PORTFOLIO_DATA[currentLang].PERSONA.contacto;
  var emailEl = document.getElementById('contact-email');
  var waEl    = document.getElementById('contact-whatsapp');
  var liEl    = document.getElementById('contact-linkedin');
  var cvBtn   = document.getElementById('cv-download-btn');

  if (emailEl) { emailEl.href = 'mailto:' + c.email; emailEl.querySelector('span').textContent = c.email; }
  if (waEl)    { waEl.href = 'https://wa.me/' + c.whatsapp.replace(/\D/g,''); waEl.querySelector('span').textContent = c.whatsapp; }
  if (liEl)    { liEl.href = c.linkedin; }
  if (cvBtn) {
    if (c.cvPdf) {
      cvBtn.href = c.cvPdf;
      cvBtn.hidden = false;
    } else {
      cvBtn.hidden = true;
    }
  }
}

/* ── Filtros de experiencia ──────────────────────────────── */
function initFilters() {
  var filters = document.querySelectorAll('.filter-btn');

  filters.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tipo = btn.dataset.filter;
      filters.forEach(function(b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      
      // Query items dynamically to support newly rendered content
      var items = document.querySelectorAll('.timeline-item');
      items.forEach(function(item) {
        item.style.display = (tipo === 'all' || (item.dataset.tipo || '').includes(tipo)) ? '' : 'none';
      });
    });
  });
}

function resetFilters() {
  var filters = document.querySelectorAll('.filter-btn');
  filters.forEach(function(b) {
    if (b.dataset.filter === 'all') {
      b.classList.add('is-active');
    } else {
      b.classList.remove('is-active');
    }
  });
}

/* ── Scroll Reveal ───────────────────────────────────────── */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
}

/* ── Video Modal ─────────────────────────────────────────── */
function initVideoModal() {
  var modal    = document.getElementById('video-modal');
  var backdrop = modal && modal.querySelector('.modal__backdrop');
  var closeBtn = modal && modal.querySelector('.modal__close');
  var wrapper  = modal && modal.querySelector('.modal__video-wrapper');
  var titleEl  = modal && modal.querySelector('.modal__title');
  var metaEl   = modal && modal.querySelector('.modal__meta');
  if (!modal) return;

  function openModal(data) {
    titleEl.textContent = data.titulo || '';
    metaEl.innerHTML =
      '<span>' + (data.tipo || '') + '</span>' +
      (data.año ? '<span>·</span><span>' + data.año + '</span>' : '') +
      (data.rol ? '<span>·</span><span>' + data.rol + '</span>' : '');

    var iframe = document.createElement('iframe');
    iframe.src = data.videoUrl + '?autoplay=1&rel=0';
    iframe.allow = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = data.titulo || 'Video';
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);

    modal.classList.add('is-open');
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function() {
      wrapper.innerHTML = '';
      if (!modal.classList.contains('is-open')) modal.setAttribute('hidden', '');
    }, 300);
  }

  // Use event delegation for dynamically created project cards
  document.addEventListener('click', function(e) {
    var card = e.target.closest('.project-card');
    if (!card) return;
    openModal({ videoUrl: card.dataset.videoUrl, titulo: card.dataset.titulo,
                tipo: card.dataset.tipo, año: card.dataset.año, rol: card.dataset.rol });
  });

  document.addEventListener('keydown', function(e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('project-card')) {
      e.preventDefault(); e.target.click();
    }
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  modal.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    var focusable = modal.querySelectorAll('button, [href], iframe, [tabindex]:not([tabindex="-1"])');
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); if (last) last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); if (first) first.focus(); }
  });
}

/* ── Internacionalización (Traducción) ────────────────────── */
function translateUI() {
  var elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = UI_TRANSLATIONS[currentLang][key];
    if (text !== undefined) {
      el.innerHTML = text;
    }
  });

  var ariaElements = document.querySelectorAll('[data-i18n-aria]');
  ariaElements.forEach(function(el) {
    var key = el.getAttribute('data-i18n-aria');
    var text = UI_TRANSLATIONS[currentLang][key];
    if (text !== undefined) {
      el.setAttribute('aria-label', text);
    }
  });
}

function updateSwitcherButtons() {
  var switchers = document.querySelectorAll('.lang-switcher');
  switchers.forEach(function(switcher) {
    var buttons = switcher.querySelectorAll('.lang-btn');
    buttons.forEach(function(btn) {
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  });
}

function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);

  translateUI();
  updateSwitcherButtons();

  // Re-renderizar componentes dinámicos
  renderBio();
  renderStats();
  renderExperiencia();
  renderProyectos();
  renderHabilidades();
  renderEducacion();
  renderInterpreteSection();
  renderContacto();

  // Resetear filtros al cambiar de idioma
  resetFilters();

  // Re-inicializar Scroll Reveal para observar los nuevos elementos
  initScrollReveal();
}

function initLangSwitcher() {
  // Manejador de clics en el selector de idiomas (Delegación de eventos)
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.lang-btn');
    if (!btn) return;
    var lang = btn.dataset.lang;
    setLanguage(lang);
  });

  // Cargar idioma guardado o por defecto del navegador
  var savedLang = localStorage.getItem('portfolio-lang');
  if (!savedLang) {
    var browserLang = navigator.language || navigator.userLanguage;
    savedLang = (browserLang && browserLang.toLowerCase().startsWith('en')) ? 'en' : 'es';
  }
  setLanguage(savedLang);
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  document.documentElement.classList.remove('no-js');
  initCursor();
  initNav();
  initFilters();
  initVideoModal();
  initLangSwitcher(); // Se encarga del setLanguage inicial y del primer renderizado
  document.getElementById('footer-year').textContent = new Date().getFullYear();
});
