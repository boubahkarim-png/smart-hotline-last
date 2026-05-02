// Main JavaScript for Smart Hotline Bilingual Website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const isExpanded = mobileMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      mobileToggle.textContent = isExpanded ? '✕' : '☰';
    });
  }
  
  // Dropdown Handling (Mobile & Desktop)
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (toggle && menu) {
      // Toggle dropdown on click (mobile) and hover (desktop)
      toggle.addEventListener('click', function(e) {
        // Prevent link navigation if toggle is also a link
        e.preventDefault();
        
        // Close all other dropdowns first
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      });
      
      // Close dropdown when clicking on a dropdown link
      const dropdownLinks = menu.querySelectorAll('a');
      dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
          dropdown.classList.remove('active');
        });
      });
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
  // Handle dropdown hover on desktop (768px+)
  let mediaQuery = window.matchMedia('(min-width: 768px)');
  
  function handleDesktopHover(e) {
    if (e.matches) {
      // Desktop: Use hover
      dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
          dropdown.addEventListener('mouseenter', function() {
            dropdown.classList.add('active');
          });
          
          dropdown.addEventListener('mouseleave', function() {
            dropdown.classList.remove('active');
          });
          
          // Remove click listeners added for mobile
          toggle.replaceWith(toggle.cloneNode(true));
        }
      });
    } else {
      // Mobile: Use click
      dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
          toggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdowns.forEach(otherDropdown => {
              if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
              }
            });
            dropdown.classList.toggle('active');
          });
        }
      });
    }
  }
  
  // Initial check
  handleDesktopHover(mediaQuery);
  // Listen for changes
  mediaQuery.addListener(handleDesktopHover);
  
  // Smooth Scroll Behavior for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form Validation
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        // Remove previous error states
        removeFieldError(field);
        
        // Check if field has value
        if (!field.value.trim()) {
          isValid = false;
          showFieldError(field, 'Ce champ est obligatoire');
        }
        // Validate email fields
        else if (field.type === 'email' && !isValidEmail(field.value)) {
          isValid = false;
          showFieldError(field, 'Veuillez entrer une adresse email valide');
        }
        // Validate phone fields
        else if (field.type === 'tel' && !isValidPhone(field.value)) {
          isValid = false;
          showFieldError(field, 'Veuillez entrer un numéro de téléphone valide');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        // Focus first invalid field
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });
    
    // Real-time validation for better UX
    form.querySelectorAll('[required]').forEach(field => {
      field.addEventListener('blur', function() {
        removeFieldError(this);
        if (!this.value.trim()) {
          showFieldError(this, 'Ce champ est obligatoire');
        }
      });
      
      field.addEventListener('input', function() {
        removeFieldError(this);
      });
    });
  });
  
  // Error display functions
  function showFieldError(field, message) {
    field.classList.add('is-invalid');
    field.style.borderColor = 'var(--error-color)';
    
    // Create or update error message element
    let errorElement = field.parentElement.querySelector('.field-error');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'field-error';
      field.parentElement.appendChild(errorElement);
    }
    errorElement.textContent = message;
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
  }
  
  function removeFieldError(field) {
    field.classList.remove('is-invalid');
    field.style.borderColor = '';
    const errorElement = field.parentElement.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Validation helper functions
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    // Basic phone validation: at least 10 digits, optional + prefix
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    return phoneRegex.test(phone);
  }
  
  // Accessibility: Keyboard navigation for mobile menu
  if (mobileToggle) {
    mobileToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }
  
  // Handle responsive nav links
  function handleNavLinkClick() {
    // Close mobile menu when a link is clicked
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.textContent = '☰';
      }
    }
  }
  
  // Add click handler to all nav links
  document.querySelectorAll('.mobile-menu a, .main-nav a').forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
  });
  
  // Initialize: Hide desktop nav on mobile if we're on mobile
  const desktopNav = document.querySelector('.desktop-nav');
  if (desktopNav) {
    if (window.innerWidth < 768) {
      desktopNav.style.display = 'none';
    }
  }
});

// Expose validation functions globally if needed
window.SmartHotline = {
  validateEmail: isValidEmail,
  validatePhone: isValidPhone
};