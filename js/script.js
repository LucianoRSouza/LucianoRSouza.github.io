/**
 * Luciano Rodrigues Portfolio - Main JavaScript
 * Version: 2.0.0
 * Date: 2026-04-06
 * 
 * Features:
 * - Modular architecture using IIFE pattern
 * - Intersection Observer for scroll animations
 * - Event delegation for performance
 * - Custom cursor with requestAnimationFrame
 * - Lazy loading with native loading attribute
 * - Dark mode with localStorage persistence
 * - Counter animations with Intersection Observer
 */

(function() {
  'use strict';

  // ============================================
  // CONFIGURATION
  // ============================================
  const CONFIG = {
    animation: {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      duration: 600
    },
    cursor: {
      enabled: !window.matchMedia('(pointer: coarse)').matches,
      smoothness: 0.15
    },
    counter: {
      duration: 2000,
      easing: 'easeOutExpo'
    }
  };

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  const Utils = {
    /**
     * Debounce function to limit execution rate
     * @param {Function} func - Function to debounce
     * @param {number} wait - Milliseconds to wait
     * @returns {Function}
     */
    debounce(func, wait = 100) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    /**
     * Throttle function to limit execution rate
     * @param {Function} func - Function to throttle
     * @param {number} limit - Milliseconds between executions
     * @returns {Function}
     */
    throttle(func, limit = 100) {
      let inThrottle;
      return function executedFunction(...args) {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    /**
     * Easing function for animations
     * @param {number} t - Time (0-1)
     * @returns {number}
     */
    easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },

    /**
     * Animate number counter
     * @param {HTMLElement} element - Element to animate
     * @param {number} target - Target value
     * @param {number} duration - Animation duration
     * @param {string} prefix - Prefix for number
     * @param {string} suffix - Suffix for number
     */
    animateCounter(element, target, duration, prefix = '', suffix = '') {
      const startTime = performance.now();
      const startValue = 0;

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = this.easeOutExpo(progress);
        const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

        element.textContent = `${prefix}${currentValue}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  };

  // ============================================
  // LOADING SCREEN MODULE
  // ============================================
  const LoadingModule = (function() {
    const loading = document.getElementById('loading');

    function init() {
      if (!loading) return;

      // Hide loading screen after content loads
      const hideLoading = () => {
        loading.classList.add('hidden');
        document.body.style.overflow = '';
      };

      // Fallback timeout to ensure loading screen hides
      setTimeout(hideLoading, 2000);

      // Hide when page is fully loaded
      if (document.readyState === 'complete') {
        hideLoading();
      } else {
        window.addEventListener('load', hideLoading, { once: true });
      }
    }

    return { init };
  })();

  // ============================================
  // CUSTOM CURSOR MODULE
  // ============================================
  const CursorModule = (function() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    let rafId = null;
    let isActive = false;

    function updateCursor() {
      if (!isActive) return;

      // Smooth interpolation
      cursorX += (mouseX - cursorX) * CONFIG.cursor.smoothness;
      cursorY += (mouseY - cursorY) * CONFIG.cursor.smoothness;
      followerX += (mouseX - followerX) * (CONFIG.cursor.smoothness * 0.5);
      followerY += (mouseY - followerY) * (CONFIG.cursor.smoothness * 0.5);

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(updateCursor);
    }

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isActive) {
        isActive = true;
        updateCursor();
      }
    }

    function handleMouseEnter(e) {
      if (e.target.matches('a, button, [role="button"], .stat-box')) {
        follower.classList.add('hover');
      }
    }

    function handleMouseLeave(e) {
      if (e.target.matches('a, button, [role="button"], .stat-box')) {
        follower.classList.remove('hover');
      }
    }

    function init() {
      if (!CONFIG.cursor.enabled || !cursor || !follower) return;

      document.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Use event delegation for hover effects
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);

      // Cleanup on visibility change
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && rafId) {
          cancelAnimationFrame(rafId);
          isActive = false;
        }
      });
    }

    return { init };
  })();

  // ============================================
  // NAVIGATION MODULE
  // ============================================
  const NavigationModule = (function() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');

    function handleScroll() {
      const scrollY = window.scrollY;

      // Navbar background
      if (navbar) {
        navbar.classList.toggle('scrolled', scrollY > 50);
      }

      // Scroll to top button
      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('visible', scrollY > 500);
      }
    }

    function handleNavClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const offset = navbar ? navbar.offsetHeight + 20 : 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    function init() {
      // Throttled scroll handler
      window.addEventListener('scroll', Utils.throttle(handleScroll, 100), { passive: true });

      // Event delegation for nav links
      document.addEventListener('click', handleNavClick);

      // Scroll to top button
      if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', scrollToTop);
      }

      // Initial check
      handleScroll();
    }

    return { init };
  })();

  // ============================================
  // SCROLL ANIMATIONS MODULE (Intersection Observer)
  // ============================================
  const ScrollAnimationsModule = (function() {
    let observer = null;

    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Handle counter animations
          const counters = entry.target.querySelectorAll('[data-counter]');
          counters.forEach(counter => {
            const target = parseInt(counter.dataset.counter, 10);
            const prefix = counter.dataset.prefix || '';
            const suffix = counter.dataset.suffix || '';
            Utils.animateCounter(counter, target, CONFIG.counter.duration, prefix, suffix);
          });

          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }

    function init() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      if (animatedElements.length === 0) return;

      observer = new IntersectionObserver(handleIntersection, {
        threshold: CONFIG.animation.threshold,
        rootMargin: CONFIG.animation.rootMargin
      });

      animatedElements.forEach(el => observer.observe(el));
    }

    return { init };
  })();

  // ============================================
  // TIMELINE MODULE
  // ============================================
  const TimelineModule = (function() {
    const logoImg = document.getElementById('logo-img');
    const dots = document.querySelectorAll('.indicator-dot');
    let observer = null;

    function updateActiveLogo(index, logoSrc) {
      if (logoImg) {
        logoImg.style.opacity = '0';
        setTimeout(() => {
          logoImg.src = logoSrc;
          logoImg.style.opacity = '1';
        }, 200);
      }

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const item = entry.target;
          const index = parseInt(item.dataset.index, 10);
          const logoSrc = item.dataset.logo;

          // Update active states
          document.querySelectorAll('.timeline-item').forEach(el => {
            el.classList.toggle('active', el === item);
          });

          updateActiveLogo(index, logoSrc);
        }
      });
    }

    function init() {
      const timelineItems = document.querySelectorAll('.timeline-item');
      if (timelineItems.length === 0) return;

      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      });

      timelineItems.forEach(item => observer.observe(item));
    }

    return { init };
  })();

  // ============================================
  // DARK MODE MODULE
  // ============================================
  const DarkModeModule = (function() {
    const toggleBtn = document.getElementById('darkModeToggle');
    const icon = document.getElementById('darkModeIcon');
    const STORAGE_KEY = 'portfolio-theme';

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(STORAGE_KEY, theme);

      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
    }

    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    }

    function init() {
      if (!toggleBtn) return;

      // Check for saved preference or system preference
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme) {
        setTheme(savedTheme);
      } else if (prefersDark) {
        setTheme('dark');
      }

      toggleBtn.addEventListener('click', toggleTheme);

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }

    return { init };
  })();

  // ============================================
  // TRANSLATOR MODULE
  // ============================================
  const TranslatorModule = (function() {
    const translatorBtn = document.getElementById('translatorBtn');
    const translatorDropdown = document.getElementById('google_translate_element');

    function toggleTranslator() {
      if (translatorDropdown) {
        translatorDropdown.classList.toggle('active');
      }
    }

    function init() {
      if (!translatorBtn) return;

      translatorBtn.addEventListener('click', toggleTranslator);

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-controls') && translatorDropdown) {
          translatorDropdown.classList.remove('active');
        }
      });
    }

    return { init };
  })();

  // ============================================
  // STAT BOX MODULE
  // ============================================
  const StatBoxModule = (function() {
    function handleClick(e) {
      const statBox = e.target.closest('.stat-box');
      if (!statBox) return;

      const stat = statBox.dataset.stat;

      // Create and show modal with stat details
      const modal = document.createElement('div');
      modal.className = 'stat-modal';
      modal.innerHTML = `
        <div class="stat-modal-content">
          <button class="stat-modal-close">&times;</button>
          <h3>${statBox.querySelector('.stat-label').textContent}</h3>
          <p class="stat-modal-number">${statBox.querySelector('.stat-number').textContent}</p>
          <p>${statBox.querySelector('.stat-note').textContent}</p>
        </div>
      `;

      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';

      // Close handlers
      const closeModal = () => {
        modal.remove();
        document.body.style.overflow = '';
      };

      modal.querySelector('.stat-modal-close').addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      // Animate in
      requestAnimationFrame(() => {
        modal.style.opacity = '1';
        modal.querySelector('.stat-modal-content').style.transform = 'translateY(0)';
      });
    }

    function init() {
      document.addEventListener('click', handleClick);
    }

    return { init };
  })();

  // ============================================
  // FORM MODULE
  // ============================================
  const FormModule = (function() {
    function handleSubmit(e) {
      const form = e.target;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      // Formspree handles the actual submission
      // This is just for UX feedback
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.background = '#27ae60';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          form.reset();
        }, 2000);
      }, 1000);
    }

    function init() {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', handleSubmit);
      });
    }

    return { init };
  })();

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    // Initialize all modules
    LoadingModule.init();
    CursorModule.init();
    NavigationModule.init();
    ScrollAnimationsModule.init();
    TimelineModule.init();
    DarkModeModule.init();
    TranslatorModule.init();
    StatBoxModule.init();
    FormModule.init();

    console.log('🚀 Portfolio initialized successfully');
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
