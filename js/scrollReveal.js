/**
 * scrollReveal.js — IntersectionObserver para fade-up al hacer scroll
 */
export function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar todo si el browser no soporta IO
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
