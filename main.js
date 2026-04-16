// main.js - IS093A Semana 02
// Funcionalidad: filtros de proyectos y toggle de menú

// --- Toggle menú mobile ---
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen.toString());
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// --- Filtros de proyectos ---
const filterBtns = document.querySelectorAll('.filter-btn');
const cards      = document.querySelectorAll('.card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Actualizar estado ARIA y clase active
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    // Mostrar/ocultar cards
    cards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.3s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
