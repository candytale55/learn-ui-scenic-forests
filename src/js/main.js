// Main JavaScript

// ============================================
// Navigation Toggle Logic
// ============================================

const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const navList = document.getElementById('nav-list');

if (menuBtn && menuClose && navList) {
  // Open Menu
  menuBtn.addEventListener('click', () => {
    navList.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
  });

  // Close Menu
  menuClose.addEventListener('click', () => {
    navList.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });

  // Close Menu on Escape Key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navList.classList.contains('is-open')) {
      navList.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
