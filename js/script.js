/* =========================================================
   Luciano Rodrigues — Portfolio JS (Versão Definitiva)
   ========================================================= */

/* -------------------------
   Estado Global
--------------------------*/
const PG_state = { images: [], index: 0 };
const CardSlides = new Map();
let savedScrollPosition = 0;

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* -------------------------
   Sistema de Loading - À Prova de Falhas
--------------------------*/
function initLoading() {
  const loading = document.getElementById('loading');
  if (!loading) return;

  // Método 1: Quando DOM estiver pronto (mais rápido)
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    hideLoading(loading);
  } else {
    document.addEventListener('DOMContentLoaded', () => hideLoading(loading));
  }

  // Método 2: Fallback após 3 segundos máximo
  setTimeout(() => hideLoading(loading), 3000);

  // Método 3: Se window.load disparar
  window.addEventListener('load', () => hideLoading(loading));
}

function hideLoading(loading) {
  if (!loading || loading.classList.contains('hidden')) return;
  loading.classList.add('hidden');
  setTimeout(() => {
    if (loading.parentNode) loading.parentNode.removeChild(loading);
  }, 500);
}

/* -------------------------
   Dados — Stats
--------------------------*/
const StatDetailsData = {
  savings: {
    icon: "fa-piggy-bank",
    title: "Cumulative Savings Delivered",
    value: "€1M+",
    details: [
      "Multi-category strategic sourcing initiatives across direct and indirect spend",
      "Negotiated favorable payment terms (60-90 days) improving cash flow",
      "Implemented should-cost modeling identifying 15-25% cost reduction opportunities",
      "Consolidated supplier base from 200+ to 80 key partners",
      "Zero-based budgeting approach for CAPEX projects saving 20% on average"
    ]
  },
  rfps: {
    icon: "fa-file-contract",
    title: "Strategic Tenders Led",
    value: "120+",
    details: [
      "End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)",
      "Weighted scoring matrices balancing technical (40%), commercial (35%), and ESG (25%) criteria",
      "E-procurement platform integration with full audit trails",
      "Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)",
      "Average cycle time reduction from 45 to 28 days while improving compliance"
    ]
  },
  projects: {
    icon: "fa-project-diagram",
    title: "Project Portfolio Value",
    value: "€10M+",
    details: [
      "New product development from concept to mass production",
      "Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)",
      "Factory audits and supplier capability assessments across Asia",
      "Quality system implementations (ISO 9001, compliance frameworks)",
      "Cross-border logistics optimization and customs compliance"
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
      "Multi-cultural negotiation experience and local market knowledge",
      "Time zone coordination for 24/7 project execution"
    ]
  }
};

const StrategyDetailsData = {
  1: {
    title: "Stand Design & Merchandising",
    subtitle: "Creating immersive brand experiences",
    icon: "fa-drafting-compass",
    sections: [
      {
        title: "Strategic Approach",
        items: [
          "Co-created booth concept with Marketing aligning to brand positioning",
          "Traffic flow optimization for maximum visitor engagement",
          "Product display hierarchy highlighting hero SKUs and new launches",
          "Lighting and visual merchandising for premium brand perception",
          "Interactive demo stations for hands-on product experience"
        ]
      },
      {
        title: "Technical Execution",
        items: [
          "3D renderings and mockups approved 60 days prior to event",
          "Modular stand components for reusability across fairs",
          "Digital signage integration with real-time product catalogs",
          "Storage and logistics planning for 500+ SKU displays",
          "On-site supervision during build-up and dismantling"
        ]
      }
    ]
  },
  2: {
    title: "Meetings Orchestration & Lead Capture",
    subtitle: "Maximizing ROI through structured engagement",
    icon: "fa-calendar-check",
    sections: [
      {
        title: "Pre-Event Planning",
        items: [
          "Target list development: 200+ qualified prospects per fair",
          "Meeting scheduling system with automated reminders",
          "Sales team briefing with product knowledge sessions",
          "Customized pitch decks by customer segment",
          "Lead scoring criteria defined (budget, timeline, authority)"
        ]
      },
      {
        title: "On-Site Execution",
        items: [
          "Structured 30-minute meeting slots with clear agendas",
          "Real-time lead capture via CRM mobile app",
          "Immediate follow-up emails sent within 4 hours",
          "Meeting notes standardized for pipeline visibility",
          "Daily team huddles to adjust strategy based on feedback"
        ]
      }
    ]
  },
  3: {
    title: "Negotiations & Partnering",
    subtitle: "Building strategic supplier relationships",
    icon: "fa-handshake-angle",
    sections: [
      {
        title: "Partnership Development",
        items: [
          "Initial qualification: financial stability, capacity, certifications",
          "Term sheet negotiations: MOQ, payment terms, exclusivity clauses",
          "Pricing framework with volume breaks and annual rebates",
          "Quality agreements defining defect rates and corrective actions",
          "IP protection and NDA frameworks for new product development"
        ]
      },
      {
        title: "Contractual Framework",
        items: [
          "Master Service Agreements (MSA) with standardized terms",
          "Statement of Work (SoW) templates for project-based work",
          "Service Level Agreements (SLA) with penalty/incentive clauses",
          "Force majeure and business continuity provisions",
          "Exit clauses and knowledge transfer obligations"
        ]
      }
    ]
  },
  4: {
    title: "Tech Discovery & Benchmark",
    subtitle: "Staying ahead of market innovation",
    icon: "fa-microchip",
    sections: [
      {
        title: "Market Intelligence",
        items: [
          "Technology scouting across 50+ supplier booths per fair",
          "Competitive product teardowns and feature comparison",
          "Cost benchmarking for similar specifications",
          "Innovation trend mapping (IoT, sustainability, smart features)",
          "Patent landscape analysis for freedom to operate"
        ]
      },
      {
        title: "Technical Evaluation",
        items: [
          "Sample collection for lab testing and validation",
          "Engineering team consultations on technical feasibility",
          "Prototype review and design for manufacturing (DFM) feedback",
          "Certification requirements assessment (CE, FCC, ANATEL)",
          "Roadmap alignment with supplier R&D investments"
        ]
      }
    ]
  },
  5: {
    title: "Factory Audits & Capability Mapping",
    subtitle: "Ensuring operational excellence",
    icon: "fa-industry",
    sections: [
      {
        title: "Audit Framework",
        items: [
          "ISO 9001 quality management system verification",
          "Production capacity analysis (lines, shifts, utilization)",
          "Equipment maintenance records and calibration certificates",
          "Workforce skill assessment and training programs",
          "Environmental compliance and waste management practices"
        ]
      },
      {
        title: "Risk Assessment",
        items: [
          "Financial health check (credit reports, payment history)",
          "Supply chain resilience (dual sourcing, buffer stock)",
          "Social compliance audits (SA8000, BSCI standards)",
          "Cybersecurity protocols for data-sharing partnerships",
          "Business continuity planning and disaster recovery"
        ]
      }
    ]
  },
  6: {
    title: "Post-Fair Pipeline, ROI & Governance",
    subtitle: "Converting leads into revenue",
    icon: "fa-chart-line",
    sections: [
      {
        title: "Pipeline Management",
        items: [
          "Lead categorization: Hot (immediate), Warm (3 months), Cold (nurture)",
          "CRM integration with automated follow-up sequences",
          "Opportunity value estimation and win probability scoring",
          "Cross-functional handover to regional sales teams",
          "Weekly pipeline review meetings for first 30 days"
        ]
      },
      {
        title: "Performance Metrics",
        items: [
          "Cost per lead calculation (stand cost ÷ qualified leads)",
          "Conversion rate tracking from lead to order",
          "Average deal size comparison vs. non-fair customers",
          "Time-to-close analysis identifying bottlenecks",
          "Annual ROI reporting for marketing budget justification"
        ]
      }
    ]
  }
};

/* -------------------------
   Modais — Stats
--------------------------*/
function openStatModal(key) {
  const data = StatDetailsData[key];
  if (!data) return;

  const modalIcon = document.getElementById('statModalIcon');
  const modalTitle = document.getElementById('statModalTitle');
  const modalValue = document.getElementById('statModalValue');
  const modalDetails = document.getElementById('statModalDetails');
  const overlay = document.getElementById('statModalOverlay');

  if (!modalIcon || !modalTitle || !modalValue || !modalDetails || !overlay) return;

  modalIcon.className = 'fas ' + data.icon;
  modalTitle.textContent = data.title;
  modalValue.textContent = data.value;
  modalDetails.innerHTML = data.details.map(function(it) { return '<li>' + it + '</li>'; }).join('');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStatModal() {
  const overlay = document.getElementById('statModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Modais — Estratégia
--------------------------*/
function openStrategyModal(num) {
  const data = StrategyDetailsData[num];
  if (!data) return;

  const iconEl = document.getElementById('strategyDetailIcon');
  const titleEl = document.getElementById('strategyDetailTitle');
  const subtitleEl = document.getElementById('strategyDetailSubtitle');
  const bodyEl = document.getElementById('strategyDetailBody');
  const overlay = document.getElementById('strategyDetailOverlay');

  if (!iconEl || !titleEl || !subtitleEl || !bodyEl || !overlay) return;

  iconEl.className = 'fas ' + data.icon;
  titleEl.textContent = data.title;
  subtitleEl.textContent = data.subtitle;

  var bodyHtml = '';
  for (var i = 0; i < data.sections.length; i++) {
    var sec = data.sections[i];
    var itemsHtml = '';
    for (var j = 0; j < sec.items.length; j++) {
      itemsHtml += '<li>' + sec.items[j] + '</li>';
    }
    bodyHtml += '<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ' + sec.title + '</h4><ul>' + itemsHtml + '</ul></div>';
  }

  bodyEl.innerHTML = bodyHtml;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStrategyModal() {
  const overlay = document.getElementById('strategyDetailOverlay');
  if (!overlay) return;

  const card = overlay.querySelector('.strategy-detail-card');
  const body = overlay.querySelector('.strategy-detail-body');

  if (card) {
    card.scrollTop = 0;
  }
  if (body) {
    body.scrollTop = 0;
  }

  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* -------------------------
   Galerias
--------------------------*/
function updateCardDots(card, idx) {
  const dots = card.querySelectorAll('.gallery-dot');
  dots.forEach(function(dot, i) {
    if (i === idx) {
      dot.classList.add('active');
      dot.style.transform = 'scale(1.4)';
      dot.style.background = 'var(--gold)';
      dot.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.6)';
    } else {
      dot.classList.remove('active');
      dot.style.transform = 'scale(1)';
      dot.style.background = 'rgba(255, 255, 255, 0.5)';
      dot.style.boxShadow = 'none';
    }
  });
}

function changeProjectSlide(dir) {
  if (!PG_state.images.length) return;

  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.remove('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }

  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.add('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.add('active');
    dots[PG_state.index].style.transform = 'scale(1.4)';
    dots[PG_state.index].style.background = 'var(--gold)';
    dots[PG_state.index].style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
  }
}

function goToProjectSlide(idx) {
  if (!PG_state.images.length) return;

  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;

  const slides = modal.querySelectorAll('.gallery-slide');
  const dots = modal.querySelectorAll('.gallery-dot');

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.remove('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }

  PG_state.index = idx;

  if (slides[PG_state.index]) {
    slides[PG_state.index].classList.add('active');
  }
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.add('active');
    dots[PG_state.index].style.transform = 'scale(1.4)';
    dots[PG_state.index].style.background = 'var(--gold)';
    dots[PG_state.index].style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
  }
}

function setupCardAutoSlide(card) {
  const container = card.querySelector('.gallery-main');
  if (!container) return;

  let images = [];
  const csv = card.getAttribute('data-images') || '';
  if (csv.trim()) {
    images = csv.split(',').map(function(s) { return s.trim(); }).filter(function(s) { return s; });
  } else {
    const main = container.querySelector('img');
    if (main && main.src) images = [main.src];
  }
  if (!images.length) return;

  const imgEl = container.querySelector('img');
  const auto = card.getAttribute('data-autoslide') === 'true';
  const interval = Math.max(1200, parseInt(card.getAttribute('data-interval'), 10) || 2500);

  const state = { images: images, idx: 0, timer: null, interval: interval, imgEl: imgEl, paused: false };
  CardSlides.set(card, state);

  function tick() {
    if (state.paused || !auto || state.images.length <= 1) return;
    state.idx = (state.idx + 1) % state.images.length;
    state.imgEl.style.opacity = '0';
    setTimeout(function() {
      state.imgEl.src = state.images[state.idx];
      state.imgEl.onload = function() { state.imgEl.style.opacity = '1'; };
      updateCardDots(card, state.idx);
    }, 160);
  }
  function start() {
    stop();
    if (auto && state.images.length > 1) state.timer = setInterval(tick, state.interval);
  }
  function stop() {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }

  card.addEventListener('mouseenter', function() { state.paused = true; });
  card.addEventListener('mouseleave', function() { state.paused = false; });

  const clickable = card.querySelector('.gallery-overlay') || container;
  clickable.addEventListener('click', function(e) {
    e.stopPropagation();
    openProjectGalleryFromCard(card);
  });

  start();
}

function openProjectGalleryFromCard(card) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;

  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;

  let images = [];
  const csv = card.getAttribute('data-images') || '';
  if (csv.trim()) {
    images = csv.split(',').map(function(s) { return s.trim(); }).filter(function(s) { return s; });
  } else {
    const main = card.querySelector('.gallery-main img');
    if (main && main.src) images = [main.src];
  }
  if (!images.length) return;

  buildProjectSlides(images);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function buildProjectSlides(images) {
  const slider = document.getElementById('gallerySlider');
  const dotsContainer = document.getElementById('galleryDots');
  if (!slider || !dotsContainer) return;

  slider.innerHTML = '';
  dotsContainer.innerHTML = '';

  images.forEach(function(src, idx) {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (idx === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.alt = 'Project image ' + (idx + 1);
    img.src = src;
    slide.appendChild(img);
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'gallery-dot' + (idx === 0 ? ' active' : '');
    if (idx === 0) {
      dot.style.transform = 'scale(1.4)';
      dot.style.background = 'var(--gold)';
      dot.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
    }
    dot.addEventListener('click', function() { goToProjectSlide(idx); });
    dotsContainer.appendChild(dot);
  });

  PG_state.images = images.slice();
  PG_state.index = 0;
}

function closeProjectGallery() {
  const modal = document.getElementById('projectGalleryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    if (savedScrollPosition > 0) {
      setTimeout(function() {
        window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
        savedScrollPosition = 0;
      }, 10);
    }
  }
}

/* -------------------------
   Inicialização de Componentes
--------------------------*/
function initScrollAnimations() {
  const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) { io.observe(el); });
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');

  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (navbar) navbar.classList.toggle('scrolled', y > 50);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', y > 600);
    updateTimelineSpy();
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function scrollToTop() { 
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', function(e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function(e) { 
    if (lb.classList.contains('active') && e.key === 'Escape') closeLightbox(); 
  });
}

function openLightbox(el) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb || !lbImg) return;
  const img = el.querySelector('img');
  if (!img || !img.src) return;
  lbImg.src = img.src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  document.body.style.overflow = 'auto';

  if (savedScrollPosition > 0) {
    setTimeout(function() {
      window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
      savedScrollPosition = 0;
    }, 10);
  }
}

function initTradeTabs() {
  const tabs = document.querySelectorAll('.gallery-tab');
  if (!tabs.length) return;

  tabs.forEach(function(btn) {
    btn.addEventListener('click', function() {
      tabs.forEach(function(t) { 
        t.classList.remove('active'); 
        t.setAttribute('aria-selected', 'false'); 
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      document.querySelectorAll('.gallery-content').forEach(function(gc) { gc.classList.remove('active'); });
      const panel = document.getElementById(btn.dataset.target);
      if (panel) panel.classList.add('active');
    });
  });
}

function showToast(message) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}

function updateTimelineSpy() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const logoImg = document.getElementById('logo-img');
  const indicators = document.querySelectorAll('.indicator-dot');
  if (!logoImg) return;

  let activeIndex = 0;
  const windowHeight = window.innerHeight;
  const midTop = windowHeight * 0.62;
  const midBottom = windowHeight * 0.38;

  items.forEach(function(item, idx) {
    const r = item.getBoundingClientRect();
    if (r.top < midTop && r.bottom > midBottom) {
      activeIndex = idx;
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const lastIndex = items.length - 1;
  const lastItem = items[lastIndex];
  const lastItemRect = lastItem ? lastItem.getBoundingClientRect() : null;

  if (lastItemRect && lastItemRect.top < windowHeight * 0.8) {
    activeIndex = lastIndex;
  }

  const activeItem = items[activeIndex];
  if (activeItem) {
    const newLogo = activeItem.getAttribute('data-logo');
    const currentSrc = logoImg.getAttribute('src');
    if (newLogo && newLogo !== currentSrc) {
      logoImg.style.opacity = '0';
      setTimeout(function() {
        logoImg.src = newLogo;
        logoImg.onload = function() { logoImg.style.opacity = '1'; };
      }, 160);
    }
  }

  indicators.forEach(function(dot, idx) { 
    dot.classList.toggle('active', idx === activeIndex); 
  });
}

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 26;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    const s = Math.max(3, Math.min(6, 3 + Math.random() * 4));
    p.style.width = p.style.height = s + 'px';
    p.style.opacity = (0.22 + Math.random() * 0.35).toFixed(2);
    p.style.animationDelay = (Math.random() * 5).toFixed(2) + 's';
    p.style.animationDuration = (4 + Math.random() * 5).toFixed(2) + 's';
    p.style.position = 'absolute';
    p.style.background = 'var(--gold)';
    p.style.borderRadius = '50%';
    p.style.pointerEvents = 'none';
    container.appendChild(p);
  }
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initStatModals() {
  document.querySelectorAll('.stat-box').forEach(function(box) {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function() {
      const statKey = this.dataset.stat;
      if (statKey) openStatModal(statKey);
    });
  });
}

function initStrategyModals() {
  document.querySelectorAll('.strategy-item[data-strategy]').forEach(function(el) {
    el.addEventListener('click', function() {
      const n = Number(el.getAttribute('data-strategy'));
      if (!isNaN(n)) openStrategyModal(n);
    });
  });
}

function initCursor() {
  try {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    if (!cursor || !cursorFollower) return;

    // Não inicializar em touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      followerX += (mouseX - followerX) * 0.08;
      followerY += (mouseY - followerY) * 0.08;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll('a, button, .project-card, .stat-box, .strategy-item').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'var(--gold-light)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      });
      el.addEventListener('mouseleave', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--gold)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  } catch(e) { 
    console.log('Cursor init error:', e); 
  }
}

function initMobileEnhancements() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) return;

  document.querySelectorAll('.stat-box, .strategy-item, .project-card, .gallery-item').forEach(function(el) {
    el.addEventListener('touchstart', function() { this.style.transform = 'scale(0.98)'; }, { passive: true });
    el.addEventListener('touchend', function() { this.style.transform = ''; }, { passive: true });
  });
}

function enhanceProjectGalleries() {
  const map = {
    "blaupunkt": [
      "./Blaupunkt_Tools.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_1.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_2.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_3.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_4.png"
    ],
    "blaupunkt-power": ["./Blaupunkt_Power_Tools.png"],
    "blaupunkt-garden": ["./Blaupunkt_Garden_Tools.png"]
  };

  Object.keys(map).forEach(function(key) {
    const card = document.querySelector('.project-card[data-gallery="' + key + '"]');
    if (!card) return;
    const images = map[key];
    card.setAttribute('data-images', images.join(','));

    const gallery = card.querySelector('.project-gallery');
    if (gallery && !gallery.querySelector('.gallery-dots')) {
      const dots = document.createElement('div');
      dots.className = 'gallery-dots';
      images.forEach(function(_, i) {
        const dot = document.createElement('div');
        dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
        if (i === 0) {
          dot.style.transform = 'scale(1.4)';
          dot.style.background = 'var(--gold)';
          dot.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.6)';
        }
        dots.appendChild(dot);
      });
      gallery.appendChild(dots);
    }
  });
}

function initTradeDuoFromExisting() {
  const sec = document.getElementById('trade-shows');
  if (!sec) return;

  const blau = document.querySelector('#gallery-blaupunkt .gallery-item img');
  const ford = document.querySelector('#gallery-ford .gallery-item img');
  const blauSrc = blau ? blau.getAttribute('src') : '';
  const fordSrc = ford ? ford.getAttribute('src') : '';
  if (!blauSrc || !fordSrc) return;
  if (sec.querySelector('.trade-duo')) return;

  const duo = document.createElement('div');
  duo.className = 'trade-duo';
  duo.innerHTML = '<div class="brand-card" data-brand="blaupunkt"><div class="brand-head"><h4>Blaupunkt</h4><i class="fas fa-images" style="color:var(--gold);"></i></div><div class="brand-body"><img src="' + blauSrc + '" alt="Blaupunkt cover"/></div></div><div class="brand-card" data-brand="ford"><div class="brand-head"><h4>Ford Lighting</h4><i class="fas fa-images" style="color:var(--gold);"></i></div><div class="brand-body"><img src="' + fordSrc + '" alt="Ford cover"/></div></div>';

  const tabs = sec.querySelector('.gallery-tabs');
  sec.insertBefore(duo, tabs);

  function openBrand(brand) {
    savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    const panel = document.getElementById(brand === 'blaupunkt' ? 'gallery-blaupunkt' : 'gallery-ford');
    if (!panel) return;
    const imgs = Array.from(panel.querySelectorAll('.gallery-item img')).map(function(i) { return i.getAttribute('src'); }).filter(Boolean);
    if (!imgs.length) return;

    buildProjectSlides(imgs);
    const modal = document.getElementById('projectGalleryModal');
    if (modal) { 
      modal.classList.add('active'); 
      document.body.style.overflow = 'hidden'; 
    }
  }

  duo.querySelector('[data-brand="blaupunkt"]').addEventListener('click', function() { openBrand('blaupunkt'); });
  duo.querySelector('[data-brand="ford"]').addEventListener('click', function() { openBrand('ford'); });
}

function initMobileTimelineLogos() {
  if (!window.matchMedia('(max-width: 1200px)').matches) return;

  document.querySelectorAll('.timeline-item').forEach(function(item) {
    if (item.querySelector('.mobile-company-logo')) return;
    const logo = item.getAttribute('data-logo');
    if (!logo) return;
    const img = document.createElement('img');
    img.className = 'mobile-company-logo';
    img.alt = 'Company logo';
    img.src = logo;
    item.appendChild(img);
  });
}

function initTimelineMobileHeaders() {
  if (window.innerWidth > 1200) return;

  const items = document.querySelectorAll('.timeline-item');

  items.forEach(function(item) {
    if (item.querySelector('.timeline-header')) return;

    const logo = item.dataset.logo;
    const dateRange = item.querySelector('.date-range') ? item.querySelector('.date-range').textContent : '';
    const dateLevel = item.querySelector('.date-level') ? item.querySelector('.date-level').textContent : '';

    const header = document.createElement('div');
    header.className = 'timeline-header';
    header.innerHTML = '<div class="company-logo"><img src="' + logo + '" alt="Company logo" onerror="this.style.display='none'"></div><div class="date-info"><span class="date-range">' + dateRange + '</span><span class="date-level">' + dateLevel + '</span></div>';

    const content = item.querySelector('.timeline-content');
    item.insertBefore(header, content);
  });
}

/* -------------------------
   Inicialização Principal
--------------------------*/
document.addEventListener('DOMContentLoaded', function() {
  // Iniciar loading imediatamente
  initLoading();

  // Inicializar outros componentes
  initNavbarScroll();
  initScrollAnimations();
  initParticles();
  initSmoothAnchors();
  initTradeTabs();
  initLightbox();
  enhanceProjectGalleries();

  document.querySelectorAll('.project-card').forEach(setupCardAutoSlide);

  initMobileEnhancements();
  initStatModals();
  initStrategyModals();
  initCursor();

  try { initTradeDuoFromExisting(); } catch(e) {}
  try { initMobileTimelineLogos(); } catch(e) {}
  try { initTimelineMobileHeaders(); } catch(e) {}

  // Event listeners globais
  document.addEventListener('click', function(e) {
    if (e.target.id === 'statModalOverlay') closeStatModal();
    if (e.target.id === 'strategyDetailOverlay') closeStrategyModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeStatModal();
      closeStrategyModal();
    }
  });

  console.log('✅ Portfolio JS inicializado com sucesso');
});

// Expor funções globais
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
