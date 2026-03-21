/**
 * Luciano Rodrigues Portfolio - Final Optimized Version
 * Architecture: Modular Pattern with Namespace Protection
 * Features: I18N, Gallery System, Timeline Spy, Modal Management
 * Performance: Lazy loading, Event delegation, RAF optimizations
 */

(function(global) {
  'use strict';

  // ==========================================================================
  // CONFIGURATION
  // ==========================================================================
  const CONFIG = {
    selectors: {
      navbar: '#navbar',
      langSwitcher: '#langSwitcher',
      timelineItems: '.c-timeline-item',
      projectCards: '.c-project-card',
      galleryModal: '#projectGalleryModal',
      statModal: '#statModalOverlay',
      strategyModal: '#strategyDetailOverlay',
      scrollTop: '#scrollTop',
      loading: '#loading'
    },
    classes: {
      active: 'is-active',
      visible: 'is-visible',
      scrolled: 'is-scrolled',
      hidden: 'is-hidden'
    },
    timings: {
      scrollThrottle: 16, // RAF ~60fps
      resizeDebounce: 250,
      animationDelay: 100
    },
    i18n: {
      defaultLang: 'en',
      supported: ['en', 'pt', 'es', 'fr']
    }
  };

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  const State = {
    currentLang: CONFIG.i18n.defaultLang,
    gallery: {
      images: [],
      currentIndex: 0
    },
    cardSlides: new Map(),
    scrollPosition: 0,
    isScrolling: false,
    
    setLanguage(lang) {
      if (CONFIG.i18n.supported.includes(lang)) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        return true;
      }
      return false;
    }
  };

  // ==========================================================================
  // UTILITY FUNCTIONS
  // ==========================================================================
  const Utils = {
    $(selector, context = document) {
      return context.querySelector(selector);
    },
    
    $$(selector, context = document) {
      return Array.from(context.querySelectorAll(selector));
    },
    
    debounce(fn, delay) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    },
    
    throttle(fn, limit) {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          fn.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },
    
    trapFocus(element) {
      const focusable = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      
      element.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    },
    
    saveScrollPosition() {
      State.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.overflow = 'hidden';
    },
    
    restoreScrollPosition() {
      document.body.style.overflow = '';
      if (State.scrollPosition > 0) {
        window.scrollTo({ top: State.scrollPosition, behavior: 'instant' });
        State.scrollPosition = 0;
      }
    }
  };

  // ==========================================================================
  // I18N SYSTEM
  // ==========================================================================
  const I18N = {
    data: window.I18N || {},
    
    translate(lang) {
      if (!State.setLanguage(lang)) return;
      
      const dictionary = this.data[lang] || this.data[CONFIG.i18n.defaultLang];
      
      Utils.$$('[data-i18n]').forEach(el => {
        const path = el.dataset.i18n;
        const value = this.getNestedValue(dictionary, path);
        if (value !== undefined) {
          el.textContent = value;
        }
      });
      
      this.updateActiveButton(lang);
      this.savePreference(lang);
      Toast.show(`Translated to ${lang.toUpperCase()}`);
    },
    
    getNestedValue(obj, path) {
      return path.split('.').reduce((acc, key) => 
        acc && acc[key] !== undefined ? acc[key] : undefined, obj
      );
    },
    
    updateActiveButton(lang) {
      Utils.$$('.c-lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive);
      });
    },
    
    savePreference(lang) {
      try {
        localStorage.setItem('portfolio-lang', lang);
      } catch (e) {
        // Silent fail for private mode
      }
    },
    
    loadPreference() {
      try {
        const stored = localStorage.getItem('portfolio-lang');
        const browser = navigator.language?.slice(0, 2).toLowerCase();
        return stored || (CONFIG.i18n.supported.includes(browser) ? browser : CONFIG.i18n.defaultLang);
      } catch (e) {
        return CONFIG.i18n.defaultLang;
      }
    },
    
    init() {
      const initialLang = this.loadPreference();
      this.translate(initialLang);
    }
  };

  // ==========================================================================
  // GALLERY SYSTEM
  // ==========================================================================
  const Gallery = {
    modal: null,
    slider: null,
    dotsContainer: null,
    
    init() {
      this.modal = Utils.$(CONFIG.selectors.galleryModal);
      if (!this.modal) return;
      
      this.slider = Utils.$('#gallerySlider', this.modal);
      this.dotsContainer = Utils.$('#galleryDots', this.modal);
      
      // Event delegation for project cards
      document.addEventListener('click', (e) => {
        const card = e.target.closest(CONFIG.selectors.projectCards);
        if (card) this.openFromCard(card);
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!this.modal.classList.contains(CONFIG.classes.active)) return;
        
        switch(e.key) {
          case 'ArrowLeft': this.changeSlide(-1); break;
          case 'ArrowRight': this.changeSlide(1); break;
          case 'Escape': this.close(); break;
        }
      });
    },
    
    openFromCard(card) {
      Utils.saveScrollPosition();
      
      const csv = card.dataset.images || '';
      const images = csv.split(',').map(s => s.trim()).filter(Boolean);
      
      if (!images.length) {
        const mainImg = Utils.$('.c-project-card__image img', card);
        if (mainImg?.src) images.push(mainImg.src);
      }
      
      if (images.length) {
        this.buildSlides(images);
        this.modal.classList.add(CONFIG.classes.active);
        Utils.trapFocus(this.modal);
      }
    },
    
    buildSlides(images) {
      State.gallery.images = images;
      State.gallery.currentIndex = 0;
      
      this.slider.innerHTML = '';
      this.dotsContainer.innerHTML = '';
      
      images.forEach((src, idx) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = `gallery-slide ${idx === 0 ? CONFIG.classes.active : ''}`;
        slide.innerHTML = `<img src="${src}" alt="Project image ${idx + 1}" loading="lazy"/>`;
        this.slider.appendChild(slide);
        
        // Dot
        const dot = document.createElement('button');
        dot.className = `c-gallery-dot ${idx === 0 ? CONFIG.classes.active : ''}`;
        dot.setAttribute('aria-label', `Go to image ${idx + 1}`);
        dot.addEventListener('click', () => this.goToSlide(idx));
        this.dotsContainer.appendChild(dot);
      });
    },
    
    changeSlide(direction) {
      const newIndex = (State.gallery.currentIndex + direction + State.gallery.images.length) 
        % State.gallery.images.length;
      this.goToSlide(newIndex);
    },
    
    goToSlide(index) {
      const slides = Utils.$$('.gallery-slide', this.slider);
      const dots = Utils.$$('.c-gallery-dot', this.dotsContainer);
      
      // Remove active states
      slides[State.gallery.currentIndex]?.classList.remove(CONFIG.classes.active);
      dots[State.gallery.currentIndex]?.classList.remove(CONFIG.classes.active);
      
      // Add new active states
      State.gallery.currentIndex = index;
      slides[index]?.classList.add(CONFIG.classes.active);
      dots[index]?.classList.add(CONFIG.classes.active);
    },
    
    close() {
      this.modal.classList.remove(CONFIG.classes.active);
      Utils.restoreScrollPosition();
    }
  };

  // ==========================================================================
  // CARD AUTO-SLIDE SYSTEM
  // ==========================================================================
  const CardSlider = {
    init() {
      Utils.$$(CONFIG.selectors.projectCards).forEach(card => this.setupCard(card));
    },
    
    setupCard(card) {
      const container = Utils.$('.c-project-card__image', card);
      if (!container) return;
      
      const csv = card.dataset.images || '';
      const images = csv.split(',').map(s => s.trim()).filter(Boolean);
      if (images.length <= 1) return;
      
      const imgEl = Utils.$('img', container);
      const interval = Math.max(1200, parseInt(card.dataset.interval, 10) || 2500);
      const autoSlide = card.dataset.autoslide === 'true';
      
      const state = {
        images,
        currentIndex: 0,
        timer: null,
        interval,
        isPaused: false
      };
      
      State.cardSlides.set(card, state);
      
      if (autoSlide) this.start(card);
      
      // Pause on hover
      card.addEventListener('mouseenter', () => {
        state.isPaused = true;
      });
      
      card.addEventListener('mouseleave', () => {
        state.isPaused = false;
      });
      
      // Touch support
      this.addTouchSupport(card, state, imgEl);
    },
    
    start(card) {
      const state = State.cardSlides.get(card);
      if (!state || state.timer) return;
      
      state.timer = setInterval(() => this.tick(card), state.interval);
    },
    
    stop(card) {
      const state = State.cardSlides.get(card);
      if (state?.timer) {
        clearInterval(state.timer);
        state.timer = null;
      }
    },
    
    tick(card) {
      const state = State.cardSlides.get(card);
      if (!state || state.isPaused) return;
      
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
      this.updateImage(card, state);
    },
    
    updateImage(card, state) {
      const imgEl = Utils.$('.c-project-card__image img', card);
      if (!imgEl) return;
      
      imgEl.style.opacity = '0';
      setTimeout(() => {
        imgEl.src = state.images[state.currentIndex];
        imgEl.onload = () => {
          imgEl.style.opacity = '1';
        };
      }, 160);
    },
    
    addTouchSupport(card, state, imgEl) {
      let startX = 0;
      let currentX = 0;
      
      const gallery = Utils.$('.c-project-card__image', card);
      if (!gallery) return;
      
      gallery.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      }, { passive: true });
      
      gallery.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
      }, { passive: true });
      
      gallery.addEventListener('touchend', () => {
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            state.currentIndex = (state.currentIndex + 1) % state.images.length;
          } else {
            state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
          }
          this.updateImage(card, state);
        }
      }, { passive: true });
    }
  };

  // ==========================================================================
  // TIMELINE SPY SYSTEM
  // ==========================================================================
  const TimelineSpy = {
    items: [],
    logoImg: null,
    indicators: [],
    
    init() {
      this.items = Utils.$$(CONFIG.selectors.timelineItems);
      this.logoImg = Utils.$('#logo-img');
      this.indicators = Utils.$$('.indicator-dot');
      
      if (!this.items.length || !this.logoImg) return;
      
      window.addEventListener('scroll', 
        Utils.throttle(() => this.update(), CONFIG.timings.scrollThrottle), 
        { passive: true }
      );
      
      this.update();
    },
    
    update() {
      const windowHeight = window.innerHeight;
      const midTop = windowHeight * 0.62;
      const midBottom = windowHeight * 0.38;
      
      let activeIndex = 0;
      
      this.items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        const isActive = rect.top < midTop && rect.bottom > midBottom;
        
        item.classList.toggle('is-active', isActive);
        if (isActive) activeIndex = idx;
      });
      
      // Check if last item is near visible
      const lastItem = this.items[this.items.length - 1];
      if (lastItem?.getBoundingClientRect().top < windowHeight * 0.8) {
        activeIndex = this.items.length - 1;
      }
      
      this.updateLogo(activeIndex);
      this.updateIndicators(activeIndex);
    },
    
    updateLogo(index) {
      const activeItem = this.items[index];
      if (!activeItem) return;
      
      const newLogo = activeItem.dataset.logo;
      if (newLogo && newLogo !== this.logoImg.src) {
        this.logoImg.style.opacity = '0';
        setTimeout(() => {
          this.logoImg.src = newLogo;
          this.logoImg.onload = () => {
            this.logoImg.style.opacity = '1';
          };
        }, 160);
      }
    },
    
    updateIndicators(index) {
      this.indicators.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === index);
      });
    }
  };

  // ==========================================================================
  // MODAL SYSTEMS
  // ==========================================================================
  const Modals = {
    init() {
      this.initStatModals();
      this.initStrategyModals();
    },
    
    initStatModals() {
      const data = this.getStatData();
      
      Utils.$$('.c-stat-box').forEach(box => {
        box.addEventListener('click', () => {
          const key = box.dataset.stat;
          if (data[key]) this.openStatModal(data[key]);
        });
      });
    },
    
    openStatModal(data) {
      const modal = Utils.$(CONFIG.selectors.statModal);
      if (!modal) return;
      
      const lang = State.currentLang;
      
      Utils.$('#statModalIcon', modal).className = `fas ${data.icon}`;
      Utils.$('#statModalTitle', modal).textContent = data.title[lang] || data.title.en;
      Utils.$('#statModalValue', modal).textContent = data.value;
      Utils.$('#statModalDetails', modal).innerHTML = 
        (data.details[lang] || data.details.en)
          .map(item => `<li>${item}</li>`)
          .join('');
      
      Utils.saveScrollPosition();
      modal.classList.add(CONFIG.classes.active);
      Utils.trapFocus(modal);
    },
    
    initStrategyModals() {
      const data = this.getStrategyData();
      
      Utils.$$('[data-strategy]').forEach(item => {
        item.addEventListener('click', () => {
          const num = parseInt(item.dataset.strategy, 10);
          if (data[num]) this.openStrategyModal(data[num]);
        });
      });
    },
    
    openStrategyModal(data) {
      const modal = Utils.$(CONFIG.selectors.strategyModal);
      if (!modal) return;
      
      const lang = State.currentLang;
      
      Utils.$('#strategyDetailIcon', modal).className = `fas ${data.icon}`;
      Utils.$('#strategyDetailTitle', modal).textContent = data.title[lang] || data.title.en;
      Utils.$('#strategyDetailSubtitle', modal).textContent = data.subtitle[lang] || data.subtitle.en;
      
      const sections = data.sections[lang] || data.sections.en;
      Utils.$('#strategyDetailBody', modal).innerHTML = sections
        .map(sec => `
          <div class="strategy-detail-section">
            <h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4>
            <ul>${sec.items.map(li => `<li>${li}</li>`).join('')}</ul>
          </div>
        `).join('');
      
      Utils.saveScrollPosition();
      modal.classList.add(CONFIG.classes.active);
      Utils.trapFocus(modal);
    },
    
    close(type) {
      const selector = type === 'stat' ? CONFIG.selectors.statModal : CONFIG.selectors.strategyModal;
      const modal = Utils.$(selector);
      if (modal) {
        modal.classList.remove(CONFIG.classes.active);
        Utils.restoreScrollPosition();
      }
    },
    
    // Data methods (simplified - full data in original)
    getStatData() {
      return window.StatDetailsData || {};
    },
    
    getStrategyData() {
      return window.StrategyDetailsData || {};
    }
  };

  // ==========================================================================
  // SCROLL EFFECTS
  // ==========================================================================
  const ScrollEffects = {
    init() {
      this.initNavbarScroll();
      this.initScrollAnimations();
      this.initScrollToTop();
    },
    
    initNavbarScroll() {
      const navbar = Utils.$(CONFIG.selectors.navbar);
      const scrollTopBtn = Utils.$(CONFIG.selectors.scrollTop);
      
      const handler = Utils.throttle(() => {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        navbar?.classList.toggle(CONFIG.classes.scrolled, y > 50);
        scrollTopBtn?.classList.toggle(CONFIG.classes.visible, y > 600);
      }, CONFIG.timings.scrollThrottle);
      
      window.addEventListener('scroll', handler, { passive: true });
      handler();
    },
    
    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(CONFIG.classes.visible);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      });
      
      Utils.$$('.u-animate-on-scroll').forEach(el => observer.observe(el));
    },
    
    initScrollToTop() {
      const btn = Utils.$(CONFIG.selectors.scrollTop);
      if (!btn) return;
      
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================
  const Toast = {
    element: null,
    timeout: null,
    
    init() {
      this.element = Utils.$('#toast');
    },
    
    show(message, duration = 2800) {
      if (!this.element) return;
      
      clearTimeout(this.timeout);
      this.element.textContent = message;
      this.element.classList.add('is-visible');
      
      this.timeout = setTimeout(() => {
        this.element.classList.remove('is-visible');
      }, duration);
    }
  };

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  const App = {
    init() {
      // Core systems
      I18N.init();
      Gallery.init();
      CardSlider.init();
      TimelineSpy.init();
      Modals.init();
      ScrollEffects.init();
      Toast.init();
      
      // Loading screen
      this.handleLoading();
      
      // Smooth scroll for anchor links
      this.initSmoothScroll();
      
      // Mobile menu
      this.initMobileMenu();
      
      console.log('✅ Portfolio initialized successfully');
    },
    
    handleLoading() {
      const loading = Utils.$(CONFIG.selectors.loading);
      if (!loading) return;
      
      window.addEventListener('load', () => {
        setTimeout(() => {
          loading.classList.add(CONFIG.classes.hidden);
          setTimeout(() => loading.remove(), 400);
        }, 1200);
      });
    },
    
    initSmoothScroll() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        
        const target = Utils.$(href);
        if (!target) return;
        
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
    
    initMobileMenu() {
      const toggle = Utils.$('#navToggle');
      const menu = Utils.$('#navMenu');
      
      if (!toggle || !menu) return;
      
      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen);
      });
    }
  };

  // ==========================================================================
  // PUBLIC API
  // ==========================================================================
  global.Portfolio = {
    init: () => App.init(),
    changeLanguage: (lang) => I18N.translate(lang),
    openGallery: (brand) => {
      if (global.openTradeGallery) global.openTradeGallery(brand);
    },
    closeModals: () => {
      Modals.close('stat');
      Modals.close('strategy');
      Gallery.close();
    }
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }

})(window);
