/**
 * videoModal.js — Modal de video con embed de YouTube/Vimeo
 * Carga el iframe solo al abrir (lazy), libera el video al cerrar.
 */
export function initVideoModal() {
  const modal     = document.getElementById('video-modal');
  const backdrop  = modal?.querySelector('.modal__backdrop');
  const closeBtn  = modal?.querySelector('.modal__close');
  const wrapper   = modal?.querySelector('.modal__video-wrapper');
  const titleEl   = modal?.querySelector('.modal__title');
  const metaEl    = modal?.querySelector('.modal__meta');

  if (!modal) return;

  function openModal(project) {
    titleEl.textContent = project.titulo || '';
    metaEl.innerHTML = `
      <span>${project.tipo || ''}</span>
      ${project.año ? `<span>·</span><span>${project.año}</span>` : ''}
      ${project.rol ? `<span>·</span><span>${project.rol}</span>` : ''}
    `;

    // Crear iframe solo en este momento (lazy)
    const iframe = document.createElement('iframe');
    iframe.src             = project.videoUrl + '?autoplay=1&rel=0';
    iframe.allow           = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title           = project.titulo || 'Video';
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);

    modal.classList.add('is-open');
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Foco al botón de cerrar
    closeBtn?.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Destruir iframe para pausar el video
    setTimeout(() => {
      wrapper.innerHTML = '';
      if (!modal.classList.contains('is-open')) {
        modal.setAttribute('hidden', '');
      }
    }, 300);
  }

  // Click en tarjetas de proyecto
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    openModal({
      videoUrl: card.dataset.videoUrl,
      titulo:   card.dataset.titulo,
      tipo:     card.dataset.tipo,
      año:      card.dataset.año,
      rol:      card.dataset.rol,
    });
  });

  // Teclado en tarjetas (Enter / Space)
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('project-card')) {
      e.preventDefault();
      e.target.click();
    }
    // Cerrar con Escape
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  // Trampa de foco dentro del modal
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('button, [href], iframe, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
  });
}
