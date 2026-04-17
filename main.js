/* ══════════════════════════════════════════
   PORTFOLIO — ZENAIDA PONTES
   main.js
══════════════════════════════════════════ */

// ── Año en el footer ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Navbar: fondo al hacer scroll ──
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Menú móvil ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ── Animación de entrada (Intersection Observer) ──
const observerConfig = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const animatedEls = document.querySelectorAll(
  '.section-header, .about-text p, .stat-card, .exp-card, .edu-card, .method-card, .project-card, .contact-item, .contact-form, .lang-bars'
);

// Añadir clase base a los elementos
animatedEls.forEach((el, index) => {
  el.classList.add('reveal-on-scroll');
  // Pequeño retardo en cascada para elementos en grupo (como las tarjetas)
  if (el.classList.contains('edu-card') || el.classList.contains('method-card') || el.classList.contains('project-card') || el.classList.contains('exp-card')) {
    el.style.transitionDelay = `${(index % 3) * 150}ms`;
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      
      // Animación especial para las barras de idiomas
      if (entry.target.classList.contains('lang-bars')) {
        const fills = entry.target.querySelectorAll('.lang-bar-fill');
        fills.forEach(fill => {
          fill.style.width = fill.getAttribute('data-width');
        });
      }
      
      revealObserver.unobserve(entry.target);
    }
  });
}, observerConfig);

animatedEls.forEach(el => revealObserver.observe(el));

// ── Enlace activo en la nav según sección visible ──
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

const expCards = document.querySelectorAll('.btn-modal');
const modals = document.querySelectorAll('.modal-overlay');
const closeButtons = document.querySelectorAll('.modal-close');

expCards.forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target');
    const targetModal = document.getElementById(targetId);
    if (targetModal) {
      targetModal.classList.add('active');
    }
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-overlay').classList.remove('active');
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

/* --- CURSOR INTERACTIVO --- */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Añade un pequeño retraso al contorno para que sea fluido
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

/* --- EFECTO 3D TILT EN TODAS LAS CARDS --- */
const cards = document.querySelectorAll('.card, .portfolio-item');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    card.style.transition = 'none'; // Quitar transición suave en hover activo para seguir al ratón

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posición x dentro de la tarjeta
    const y = e.clientY - rect.top;  // Posición y dentro de la tarjeta

    // Coordenadas con origen en el centro de la tarjeta
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calcular grados de rotación (cuanto más al borde, más inclina)
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 grados
    const rotateY = ((x - centerX) / centerX) * 10;

    // Aplicar transformación 3D
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  // Resetear la rotación cuando sale el ratón
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease'; // Que vuelva suavemente
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
});