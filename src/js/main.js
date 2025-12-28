// Main JavaScript

// ============================================
// Footer Year Auto-Update
// ============================================

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

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

// ============================================
// Reservations Form Logic
// ============================================

const bookingForm = document.getElementById('booking-form');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const successModal = document.getElementById('success-modal');
const modalClose = document.getElementById('modal-close');

if (bookingForm && checkInInput && checkOutInput) {
  // Set minimum date to today for both date inputs
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  checkInInput.setAttribute('min', today);
  checkOutInput.setAttribute('min', today);

  // Update check-out minimum when check-in changes
  checkInInput.addEventListener('change', () => {
    const checkInDate = checkInInput.value;
    if (checkInDate) {
      checkOutInput.setAttribute('min', checkInDate); // Check-out must be after check-in
    }
  });

  // Form submission handler
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Show success modal
    if (successModal) {
      successModal.classList.add('is-visible');
      successModal.setAttribute('aria-hidden', 'false');
      
      // Focus management: move focus to modal
      const modalCard = successModal.querySelector('.modal-card');
      if (modalCard) {
        modalCard.focus();
      }
    }
  });
}

// Modal close handler
if (modalClose && successModal && bookingForm) {
  modalClose.addEventListener('click', () => {
    // Hide modal
    successModal.classList.remove('is-visible');
    successModal.setAttribute('aria-hidden', 'true');
    
    // Reset form
    bookingForm.reset();
    
    // Return focus to form (accessibility)
    const firstInput = bookingForm.querySelector('input');
    if (firstInput) {
      firstInput.focus();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && successModal.classList.contains('is-visible')) {
      successModal.classList.remove('is-visible');
      successModal.setAttribute('aria-hidden', 'true');
      bookingForm.reset();
    }
  });

  // Close modal on overlay click (outside modal card)
  successModal.addEventListener('click', (event) => {
    if (event.target === successModal) {
      successModal.classList.remove('is-visible');
      successModal.setAttribute('aria-hidden', 'true');
      bookingForm.reset();
    }
  });
}
