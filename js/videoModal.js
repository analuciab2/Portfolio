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
    // Usar youtube-nocookie para mayor compatibilidad
    const embedUrl = project.videoUrl.replace('www.youtube.com', 'www.youtube-nocookie.com');
    iframe.src             = embedUrl + '?autoplay=1&rel=0';
    iframe.allow           = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title           = project.titulo || 'Video';

    // Fallback: si YouTube bloquea el embed, mostrar botón para abrir en YouTube
    iframe.addEventListener('error', () => showFallback(project.videoUrl));
    // Detectar Error 153 vía mensaje del iframe
    window.addEventListener('message', function onYTMsg(e) {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data?.event === 'onError' && (data?.info === 153 || data?.info === 150 || data?.info === 101)) {
          showFallback(project.videoUrl);
          window.removeEventListener('message', onYTMsg);
        }
      } catch (_) {}
    });

    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);

    modal.classList.add('is-open');
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Foco al botón de cerrar
    closeBtn?.focus();
  }

  function showFallback(videoUrl) {
    // Convertir embed URL a watch URL para el link
    const watchUrl = videoUrl
      .replace('www.youtube-nocookie.com/embed/', 'youtu.be/')
      .replace('www.youtube.com/embed/', 'youtu.be/')
      .split('?')[0];
    // Extraer video ID para el thumbnail
    const videoId = watchUrl.split('/').pop();
    const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    wrapper.innerHTML = `
      <div style="
        position:relative; width:100%; height:100%;
        background: #000 url('${thumb}') center/cover no-repeat;
        display:flex; align-items:center; justify-content:center;
        flex-direction:column; gap:1rem;
      ">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.55);"></div>
        <svg style="position:relative;z-index:1;" width="64" height="64" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.8.3 34 .3 34 .3S12.2.3 7.5 1.7a8.5 8.5 0 0 0-6 6C0 12.4 0 24 0 24s0 11.6 1.5 16.3a8.5 8.5 0 0 0 6 6C12.2 47.7 34 47.7 34 47.7s21.8 0 26.5-1.4a8.5 8.5 0 0 0 6-6C68 35.6 68 24 68 24s0-11.6-1.5-16.3z" fill="#FF0000"/>
          <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
        </svg>
        <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" style="
          position:relative;z-index:1;
          display:inline-flex;align-items:center;gap:.5rem;
          background:#fff;color:#111;
          font-family:sans-serif;font-size:.95rem;font-weight:600;
          padding:.65rem 1.4rem;border-radius:999px;
          text-decoration:none;box-shadow:0 4px 20px rgba(0,0,0,.4);
          transition:transform .15s;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          <svg width="18" height="18" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.8.3 34 .3 34 .3S12.2.3 7.5 1.7a8.5 8.5 0 0 0-6 6C0 12.4 0 24 0 24s0 11.6 1.5 16.3a8.5 8.5 0 0 0 6 6C12.2 47.7 34 47.7 34 47.7s21.8 0 26.5-1.4a8.5 8.5 0 0 0 6-6C68 35.6 68 24 68 24s0-11.6-1.5-16.3z" fill="#FF0000"/>
            <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
          </svg>
          Ver en YouTube
        </a>
      </div>
    `;
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
