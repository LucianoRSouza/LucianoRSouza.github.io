/* =========================================================
   Luciano Rodrigues — Portfolio JS (CLEAN VERSION — ENGLISH ONLY)
   ========================================================= */

/* -------------------------
   Helpers / Global State
--------------------------*/
const PG_state = { images: [], index: 0 };
const CardSlides = new Map();
let savedScrollPosition = 0;

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* -------------------------
   DATA — Stats / Strategy
   (English Only)
--------------------------*/
const getStatDetailsData = () => ({
  savings: {
    icon: "fa-piggy-bank",
    title: "Cumulative Savings Delivered",
    value: "€1M+",
    details: [
      "Multi-category strategic sourcing initiatives across direct and indirect spend",
      "Negotiated favorable payment terms (60-90 days) improving cash flow",
      "Implemented should-cost modeling identifying 15–25% cost reduction opportunities",
      "Consolidated supplier base from 200+ to 80 key partners",
      "Zero-based budgeting approach for CAPEX projects saving ~20% on average"
    ]
  },
  rfps: {
    icon: "fa-file-contract",
    title: "Strategic Tenders Led",
    value: "120+",
    details: [
      "End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)",
      "Weighted scoring matrices: technical (40%), commercial (35%), ESG (25%)",
      "E-procurement platform integration with full audit trails",
      "Cross-functional evaluation panels (Engineering, Finance, Legal, Operations)",
      "Cycle-time reduction from 45 to 28 days"
    ]
  },
  projects: {
    icon: "fa-project-diagram",
    title: "Project Portfolio Value",
    value: "€10M+",
    details: [
      "New product development from concept to mass production",
      "Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)",
      "Factory audits and capability assessments across Asia",
      "Quality system implementations (ISO 9001, compliance frameworks)",
      "Cross-border logistics and customs compliance"
    ]
  },
  regions: {
    icon: "fa-globe",
    title: "Global Operations Coverage",
    value: "20+",
    details: [
      "Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France",
      "LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay",
      "Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea",
      "Multi-cultural negotiation experience",
      "24/7 multi-timezone coordination"
    ]
  }
});

const getStrategyDetailsData = () => ({
  1: {
    icon: "fa-drafting-compass",
    title: "Stand Design & Merchandising",
    subtitle: "Creating immersive brand experiences",
    sections: [
      {
        title: "Strategic Approach",
        items: [
          "Co-created booth concept aligned to brand positioning",
          "Traffic flow optimization for greater visitor engagement",
          "Hero SKU display hierarchy",
          "Premium lighting and visual merchandising",
          "Interactive demo stations"
        ]
      },
      {
        title: "Technical Execution",
        items: [
          "3D renderings & mockups approved 60 days prior",
          "Modular reusable stand components",
          "Digital signage integration",
          "SKU logistics planning for +500 SKUs",
          "On-site build-up/dismantling supervision"
        ]
      }
    ]
  },

  2: {
    icon: "fa-calendar-check",
    title: "Meetings Orchestration & Lead Capture",
    subtitle: "Maximizing ROI through structured engagement",
    sections: [
      {
        title: "Pre‑Event Planning",
        items: [
          "200+ qualified prospects per fair",
          "Automated meeting scheduling",
          "Sales-team product briefings",
          "Segment-tailored pitch decks",
          "Lead scoring (budget, timeline, authority)"
        ]
      },
      {
        title: "On‑Site Execution",
        items: [
          "Structured meeting slots with clear agendas",
          "Real-time CRM lead capture",
          "Follow-up emails within 4 hours",
          "Standardized meeting notes for pipeline visibility",
          "Daily stand-up team syncs"
        ]
      }
    ]
  },

  3: {
    icon: "fa-handshake-angle",
    title: "Negotiations & Partnering",
    subtitle: "Building strategic supplier relationships",
    sections: [
      {
        title: "Partnership Development",
        items: [
          "Initial qualification (financial, capacity, certifications)",
          "Term-sheet negotiation: MOQ, payment terms, exclusivity",
          "Pricing framework with volume breaks",
          "Quality agreements & corrective actions",
          "IP & NDA frameworks"
        ]
      },
      {
        title: "Contractual Framework",
        items: [
          "Master Service Agreements",
          "Statement of Work templates",
          "Service Level Agreements",
          "Business continuity & force majeure",
          "Exit clauses & knowledge transfer"
        ]
      }
    ]
  },

  4: {
    icon: "fa-microchip",
    title: "Tech Discovery & Benchmark",
    subtitle: "Staying ahead of market innovation",
    sections: [
      {
        title: "Market Intelligence",
        items: [
          "Technology scouting across 50+ booths",
          "Competitive teardown & feature comparison",
          "Cost benchmarking",
          "Innovation trend mapping",
          "Patent landscape scanning"
        ]
      },
      {
        title: "Technical Evaluation",
        items: [
          "Sample collection & testing",
          "Engineering feasibility reviews",
          "DFM & prototype evaluation",
          "Certification requirements (CE, FCC, ANATEL)",
          "Roadmap alignment with supplier R&D"
        ]
      }
    ]
  },

  5: {
    icon: "fa-industry",
    title: "Factory Audits & Capability Mapping",
    subtitle: "Ensuring operational excellence",
    sections: [
      {
        title: "Audit Framework",
        items: [
          "ISO 9001 quality management verification",
          "Production capacity analysis",
          "Maintenance & calibration logs",
          "Workforce skill assessment",
          "Environmental compliance checks"
        ]
      },
      {
        title: "Risk Assessment",
        items: [
          "Financial health checks",
          "Supply chain resilience (dual sourcing)",
          "Social compliance audits",
          "Cybersecurity protocols",
          "Business continuity planning"
        ]
      }
    ]
  },

  6: {
    icon: "fa-chart-line",
    title: "Post‑Fair Pipeline, ROI & Governance",
    subtitle: "Converting leads into revenue",
    sections: [
      {
        title: "Pipeline Management",
        items: [
          "Lead categorization: Hot / Warm / Cold",
          "CRM‑integrated follow-up sequences",
          "Opportunity value estimation",
          "Handover to regional sales",
          "Weekly pipeline reviews"
        ]
      },
      {
        title: "Performance Metrics",
        items: [
          "Cost per lead monitoring",
          "Lead‑to‑order conversion tracking",
          "Deal-size benchmarks",
          "Time‑to‑close analytics",
          "Annual ROI reporting"
        ]
      }
    ]
  }
});

/* -------------------------
   Modal — Stats
--------------------------*/
function openStatModal(key) {
  const data = getStatDetailsData()[key];
  if (!data) return;

  $('#statModalIcon').className = `fas ${data.icon}`;
  $('#statModalTitle').textContent = data.title;
  $('#statModalValue').textContent = data.value;
  $('#statModalDetails').innerHTML = data.details
    .map(it => `<li>${it}</li>`).join('');

  $('#statModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStatModal() {
  $('#statModalOverlay')?.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Modal — Strategy
--------------------------*/
function openStrategyModal(num) {
  const data = getStrategyDetailsData()[num];
  if (!data) return;

  $('#strategyDetailIcon').className = `fas ${data.icon}`;
  $('#strategyDetailTitle').textContent = data.title;
  $('#strategyDetailSubtitle').textContent = data.subtitle;

  const html = data.sections.map(sec => {
    const items = sec.items.map(i => `<li>${i}</li>`).join('');
    return `<div class="strategy-detail-section">
        <h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4>
        <ul>${items}</ul>
    </div>`;
  }).join('');

  $('#strategyDetailBody').innerHTML = html;
  $('#strategyDetailOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStrategyModal() {
  const overlay = $('#strategyDetailOverlay');
  if (!overlay) return;

  const card = overlay.querySelector('.strategy-detail-card');
  const body = overlay.querySelector('.strategy-detail-body');

  if (card) card.scrollTop = 0;
  if (body) body.scrollTop = 0;

  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Project Card Gallery Dots
--------------------------*/
function updateCardDots(card, idx) {
  const dots = card.querySelectorAll('.gallery-dot');
  dots.forEach((dot, i) => {
    if (i === idx) {
      dot.classList.add('active');
      dot.style.transform = 'scale(1.4)';
      dot.style.background = 'var(--gold)';
      dot.style.boxShadow = '0 0 10px rgba(212,175,55,.6)';
    } else {
      dot.classList.remove('active');
      dot.style.transform = 'scale(1)';
      dot.style.background = 'rgba(255,255,255,0.5)';
      dot.style.boxShadow = 'none';
    }
  });
}

/* -------------------------
   Modal: Project Gallery
--------------------------*/
function changeProjectSlide(dir) {
  if (!PG_state.images.length) return;

  const modal = $('#projectGalleryModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');

  slides[PG_state.index]?.classList.remove('active');
  dots[PG_state.index]?.classList.remove('active');

  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;

  slides[PG_state.index]?.classList.add('active');
  dots[PG_state.index]?.classList.add('active');
}

function goToProjectSlide(idx) {
  if (!PG_state.images.length) return;

  const modal = $('#projectGalleryModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');

  slides[PG_state.index]?.classList.remove('active');
  dots[PG_state.index]?.classList.remove('active');

  PG_state.index = idx;

  slides[idx]?.classList.add('active');
  dots[idx]?.classList.add('active');
}

function openProjectGalleryFromCard(card) {
  savedScrollPosition = window.scrollY;

  const modal = $('#projectGalleryModal');
  let images = [];

  const csv = card.getAttribute('data-images') || "";
  if (csv.trim()) {
    images = csv.split(',').map(i => i.trim());
  } else {
    const main = card.querySelector('.gallery-main img');
    if (main?.src) images = [main.src];
  }

  if (!images.length) return;

  buildProjectSlides(images);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function buildProjectSlides(images) {
  const slider = $('#gallerySlider');
  const dotsContainer = $('#galleryDots');
  if (!slider || !dotsContainer) return;

  slider.innerHTML = '';
  dotsContainer.innerHTML = '';

  images.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (idx === 0 ? ' active' : '');

    const img = document.createElement('img');
    img.src = src;
    slide.appendChild(img);
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'gallery-dot' + (idx === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToProjectSlide(idx));
    dotsContainer.appendChild(dot);
  });

  PG_state.images = images.slice();
  PG_state.index = 0;
}

function closeProjectGallery() {
  $('#projectGalleryModal').classList.remove('active');
  document.body.style.overflow = 'auto';

  if (savedScrollPosition > 0) {
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition });
      savedScrollPosition = 0;
    }, 10);
  }
}

/* -------------------------
   Mobile Touch Enhancements
--------------------------*/
function initMobileEnhancements() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) return;

  $$('.stat-box, .strategy-item, .project-card, .gallery-item')
    .forEach(el => {
      on(el, 'touchstart', function () {
        this.style.transform = 'scale(0.98)';
      }, { passive: true });

      on(el, 'touchend', function () {
        this.style.transform = '';
      }, { passive: true });
    });
}

/* -------------------------
   Auto-Slide for Cards
--------------------------*/
function setupCardAutoSlide(card) {
  const container = card.querySelector('.gallery-main');
  if (!container) return;

  let images = [];
  const csv = card.getAttribute('data-images') || '';

  if (csv.trim()) {
    images = csv.split(',').map(s => s.trim());
  } else {
    const main = container.querySelector('img');
    if (main?.src) images = [main.src];
  }

  if (!images.length) return;

  const imgEl = container.querySelector('img');
  const auto = card.getAttribute('data-autoslide') === 'true';
  const interval = Math.max(1200, parseInt(card.getAttribute('data-interval'), 10) || 2500);

  const state = { images, idx: 0, timer: null, interval, imgEl, paused: false };
  CardSlides.set(card, state);

  function tick() {
    if (state.paused || !auto || state.images.length <= 1) return;

    state.idx = (state.idx + 1) % state.images.length;
    state.imgEl.style.opacity = '0';

    setTimeout(() => {
      state.imgEl.src = state.images[state.idx];
      state.imgEl.onload = () => (state.imgEl.style.opacity = '1');
      updateCardDots(card, state.idx);
    }, 160);
  }

  function start() {
    stop();
    if (auto && state.images.length > 1)
      state.timer = setInterval(tick, state.interval);
  }

  function stop() {
    if (state.timer) clearInterval(state.timer);
    state.timer = null;
  }

  on(card, 'mouseenter', () => (state.paused = true));
  on(card, 'mouseleave', () => (state.paused = false));

  const clickable = card.querySelector('.gallery-overlay') || container;
  on(clickable, 'click', e => {
    e.stopPropagation();
    openProjectGalleryFromCard(card);
  });

  start();
}

/* -------------------------
   Volunteer Enhancement
--------------------------*/
function initVolunteerEnhancement() {
  const section = $('#volunteering');
  if (!section) return;

  if (section.querySelector('.volunteer-hero-image')) return;

  const header = section.querySelector('.section-header');
  if (!header) return;

  const hero = document.createElement('div');
  hero.className = 'volunteer-hero-image animate-on-scroll visible';
  hero.innerHTML =
    `<img src="./gadsdenstatecommunitycollege.jpg" alt="Gadsden State Community College" />`;

  header.after(hero);
}

/* -------------------------
   Fix Gadsden Images
--------------------------*/
function fixGadsdenImages() {
  $$('.cert-logo img').forEach(img => {
    if (img.alt.includes('Gadsden')) {
      img.onerror = function () {
        this.src = './gadsdenstatecommunitycollege_logo.jpg';
      };
    }
  });
}

/* -------------------------
   Scroll Animations
--------------------------*/
function initScrollAnimations() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  $$('.animate-on-scroll').forEach(el => io.observe(el));
}

/* -------------------------
   Navbar Scroll Spy
--------------------------*/
function initNavbarScroll() {
  const navbar = $('#navbar');
  const scrollTopBtn = $('#scrollTop');

  const onScroll = () => {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 50);
    scrollTopBtn?.classList.toggle('visible', y > 600);
    updateTimelineSpy();
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* -------------------------
   Lightbox
--------------------------*/
function initLightbox() {
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  if (!lb || !lbImg) return;

  on(lb, 'click', e => e.target === lb && closeLightbox());
  on(document, 'keydown', e => lb.classList.contains('active') && e.key === 'Escape' && closeLightbox());
}

function openLightbox(el) {
  savedScrollPosition = window.scrollY;

  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  const img = el?.querySelector('img');

  if (!lb || !lbImg || !img?.src) return;

  lbImg.src = img.src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = $('#lightbox');
  lb.classList.remove('active');
  document.body.style.overflow = 'auto';

  if (savedScrollPosition > 0) {
    setTimeout(() => window.scrollTo({ top: savedScrollPosition }), 10);
    savedScrollPosition = 0;
  }
}

/* -------------------------
   Trade Tabs
--------------------------*/
function initTradeTabs() {
  const tabs = $$('.gallery-tab');
  if (!tabs.length) return;

  tabs.forEach(btn => {
    on(btn, 'click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      $$('.gallery-content').forEach(c => c.classList.remove('active'));
      $('#' + btn.dataset.target)?.classList.add('active');
    });
  });
}

/* -------------------------
   Toast Notification
--------------------------*/
function showToast(message = '') {
  const t = $('#toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* -------------------------
   Timeline Scroll Spy
--------------------------*/
function initTimelineSpy() {
  updateTimelineSpy();
}

function updateTimelineSpy() {
  const items = $$('.timeline-item');
  const indicators = $$('.indicator-dot');
  const logoImg = $('#logo-img');

  if (!items.length || !logoImg) return;

  let activeIndex = 0;
  const viewTop = window.innerHeight * 0.38;
  const viewBottom = window.innerHeight * 0.62;

  items.forEach((item, idx) => {
    const r = item.getBoundingClientRect();
    if (r.top < viewBottom && r.bottom > viewTop) activeIndex = idx;
  });

  const activeItem = items[activeIndex];
  const newLogo = activeItem.getAttribute('data-logo');

  if (newLogo && newLogo !== logoImg.src) {
    logoImg.style.opacity = '0';
    setTimeout(() => {
      logoImg.src = newLogo;
      logoImg.onload = () => (logoImg.style.opacity = '1');
    }, 160);
  }

  indicators.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
}

/* -------------------------
   Particles
--------------------------*/
function initParticles() {
  const container = $('#particles');
  if (!container) return;

  const count = 26;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.width = p.style.height = 3 + Math.random() * 4 + 'px';
    p.style.opacity = 0.25 + Math.random() * 0.35;
    p.style.animationDelay = Math.random() * 5 + 's';
    p.style.animationDuration = 4 + Math.random() * 5 + 's';
    container.appendChild(p);
  }
}

/* -------------------------
   Loading
--------------------------*/
function initLoading() {
  const loading = $('#loading');
  if (!loading) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loading.classList.add('hidden');
      setTimeout(() => loading.remove(), 400);
    }, 1200);
  });
}

/* -------------------------
   Smooth Anchors
--------------------------*/
function initSmoothAnchors() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* -------------------------
   Timeline Mobile Headers
--------------------------*/
function initTimelineMobileHeaders() {
  if (window.innerWidth > 1200) return;

  document.querySelectorAll('.timeline-item').forEach(item => {
    if (item.querySelector('.timeline-header')) return;

    const logo = item.getAttribute('data-logo');
    const dateRange = item.querySelector('.date-range')?.textContent || '';
    const dateLevel = item.querySelector('.date-level')?.textContent || '';

    const header = document.createElement('div');
    header.className = 'timeline-header';

    header.innerHTML = `
      <div class="company-logo">
        <img src="${logo}" alt="Company logo">
      </div>
      <div class="date-info">
        <span class="date-range">${dateRange}</span>
        <span class="date-level">${dateLevel}</span>
      </div>
    `;

    const content = item.querySelector('.timeline-content');
    if (content) item.insertBefore(header, content);
  });
}

window.addEventListener('load', initTimelineMobileHeaders);
window.addEventListener('resize', () => {
  clearTimeout(window.timelineResizeTimer);
  window.timelineResizeTimer = setTimeout(initTimelineMobileHeaders, 250);
});

/* -------------------------
   Initialization
--------------------------*/
document.addEventListener('DOMContentLoaded', () => {

  initLoading();
  initNavbarScroll();
  initScrollAnimations();
  initParticles();
  initSmoothAnchors();
  initTradeTabs();
  initLightbox();

  enhanceProjectGalleries();
  $$('.project-card').forEach(setupCardAutoSlide);

  initVolunteerEnhancement();
  fixGadsdenImages();
  initMobileEnhancements();

  on(document, 'click', e => {
    if (e.target?.id === 'statModalOverlay') closeStatModal();
    if (e.target?.id === 'strategyDetailOverlay') closeStrategyModal();
  });

  on(document, 'keydown', e => {
    if (e.key === 'Escape') {
      closeStatModal();
      closeStrategyModal();
    }
  });

  /* Stat Modals */
  document.querySelectorAll('.stat-box').forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
      const key = box.dataset.stat;
      if (key) openStatModal(key);
    });
  });

});

/* -------------------------
   Expose Functions Globally
--------------------------*/
window.openStatModal = openStatModal;
window.closeStatModal = closeStatModal;
window.openStrategyModal = openStrategyModal;
window.closeStrategyModal = closeStrategyModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeProjectSlide = changeProjectSlide;
window.goToProjectSlide = goToProjectSlide;
window.closeProjectGallery = closeProjectGallery;
window.scrollToTop = scrollToTop;
