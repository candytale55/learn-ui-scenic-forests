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

  // Close Menu on Resize (prevents flash when switching between mobile/desktop)
  let resizeTimer;
  window.addEventListener('resize', () => {
    // Disable transitions during resize to prevent flash
    navList.style.transition = 'none';
    
    if (window.innerWidth >= 550) {
      // Desktop: ensure menu is not in "open" state
      navList.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    
    // Re-enable transitions after resize is complete
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      navList.style.transition = '';
    }, 100);
  });
}
