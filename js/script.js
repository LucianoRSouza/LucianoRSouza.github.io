/* Luciano Rodrigues Portfolio - Google Translate Optimized */

const PG_state = { images: [], index: 0 };
const CardSlides = new Map();
let savedScrollPosition = 0;

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* Stat Details Data */
const StatDetailsData = {
  savings: {
    icon: "fa-piggy-bank",
    title: "Cumulative Savings Delivered",
    value: "€475K+",
    details: [
      "€327K verified savings in 2025 across multi-category negotiations",
      "€148K projected savings for 2026",
      "GPL fuel optimization delivering €150K+ in last negotiation",
      "Strategic procurement governance with measurable ROI",
      "Multi-cluster cost reduction initiatives"
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

function openStatModal(key) {
  const data = StatDetailsData[key];
  if (!data) return;

  $('#statModalIcon').className = `fas ${data.icon}`;
  $('#statModalTitle').textContent = data.title;
  $('#statModalValue').textContent = data.value;
  $('#statModalDetails').innerHTML = data.details.map(it => `<li>${it}</li>`).join('');
  $('#statModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStatModal() {
  const overlay = $('#statModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function openStrategyModal(num) {
  const data = StrategyDetailsData[num];
  if (!data) return;

  $('#strategyDetailIcon').className = `fas ${data.icon}`;
  $('#strategyDetailTitle').textContent = data.title;
  $('#strategyDetailSubtitle').textContent = data.subtitle;

  const body = data.sections.map(sec => {
    const items = sec.items.map(li => `<li>${li}</li>`).join('');
    return `<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${items}</ul></div>`;
  }).join('');

  $('#strategyDetailBody').innerHTML = body;
  $('#strategyDetailOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStrategyModal() {
  const overlay = $('#strategyDetailOverlay');
  if (!overlay) return;

  const card = overlay.querySelector('.strategy-detail-card');
  const body = overlay.querySelector('.strategy-detail-body');
  if (card) { card.scrollTop = 0; card.scrollTo(0, 0); }
  if (body) { body.scrollTop = 0; body.scrollTo(0, 0); }
  overlay.scrollTop = 0;

  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function updateCardDots(card, idx) {
  const dots = card.querySelectorAll('.gallery-dot');
  dots.forEach((dot, i) => {
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

  if (slides[PG_state.index]) slides[PG_state.index].classList.remove('active');
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }

  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;

  if (slides[PG_state.index]) slides[PG_state.index].classList.add('active');
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

  if (slides[PG_state.index]) slides[PG_state.index].classList.remove('active');
  if (dots[PG_state.index]) {
    dots[PG_state.index].classList.remove('active');
    dots[PG_state.index].style.transform = 'scale(1)';
    dots[PG_state.index].style.background = 'rgba(212, 175, 55, 0.34)';
    dots[PG_state.index].style.boxShadow = 'none';
  }

  PG_state.index = idx;

  if (slides[PG_state.index]) slides[PG_state.index].classList.add('active');
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
    images = csv.split(',').map(s => s.trim()).filter(Boolean);
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
      state.imgEl.onload = () => { state.imgEl.style.opacity = '1'; };
      updateCardDots(card, state.idx);
    }, 160);
  }
  function start() {
    stop();
    if (auto && state.images.length > 1) state.timer = setInterval(tick, state.interval);
  }
  function stop() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
  }

  on(card, 'mouseenter', () => { state.paused = true; });
  on(card, 'mouseleave', () => { state.paused = false; });

  const clickable = card.querySelector('.gallery-overlay') || container;
  on(clickable, 'click', (e) => {
    e.stopPropagation();
    openProjectGalleryFromCard(card);
  });

  start();
}

function openProjectGalleryFromCard(card) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
  const modal = $('#projectGalleryModal');
  if (!modal) return;

  let images = [];
  const csv = card.getAttribute('data-images') || '';
  if (csv.trim()) {
    images = csv.split(',').map(s => s.trim()).filter(Boolean);
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
    dot.addEventListener('click', () => goToProjectSlide(idx));
    dotsContainer.appendChild(dot);
  });

  PG_state.images = images.slice();
  PG_state.index = 0;
}

function closeProjectGallery() {
  const modal = $('#projectGalleryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (savedScrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
        savedScrollPosition = 0;
      }, 10);
    }
  }
}

function initMobileEnhancements() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) return;

  $$('.stat-box, .strategy-item, .project-card, .gallery-item').forEach(el => {
    on(el, 'touchstart', function(){ this.style.transform = 'scale(0.98)'; }, { passive: true });
    on(el, 'touchend', function(){ this.style.transform = ''; }, { passive: true });
  });

  $$('.project-card').forEach(card => {
    let startX = 0, currentX = 0;
    const gallery = card.querySelector('.gallery-main');
    if (!gallery) return;

    on(gallery, 'touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    on(gallery, 'touchmove', e => { currentX = e.touches[0].clientX; }, { passive: true });
    on(gallery, 'touchend', () => {
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        const state = CardSlides.get(card);
        if (state && state.images.length > 1) {
          state.idx = diff > 0 
            ? (state.idx + 1) % state.images.length
            : (state.idx - 1 + state.images.length) % state.images.length;
          state.imgEl.style.opacity = '0';
          setTimeout(() => {
            state.imgEl.src = state.images[state.idx];
            state.imgEl.onload = () => { state.imgEl.style.opacity = '1'; };
            updateCardDots(card, state.idx);
          }, 160);
        }
      }
    }, { passive: true });
  });
}

function enhanceProjectGalleries() {
  const map = {
    "blaupunkt": ["Blaupunkt_Tools.png","Blaupunkt_Illumiation_booth_HK_Fair.png","Blaupunkt_Illumiation_booth_HK_Fair_1.png","Blaupunkt_Illumiation_booth_HK_Fair_2.png","Blaupunkt_Illumiation_booth_HK_Fair_3.png","Blaupunkt_Illumiation_booth_HK_Fair_4.png"],
    "blaupunkt-power": ["Blaupunkt_Power_Tools.png"],
    "blaupunkt-garden": ["Blaupunkt_Garden_Tools.png"]
  };

  Object.keys(map).forEach(key => {
    const card = document.querySelector(`.project-card[data-gallery="${key}"]`);
    if (!card) return;
    const images = map[key];
    card.setAttribute('data-images', images.join(','));

    const gallery = card.querySelector('.project-gallery');
    if (gallery && !gallery.querySelector('.gallery-dots')) {
      const dots = document.createElement('div');
      dots.className = 'gallery-dots';
      images.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `gallery-dot ${i === 0 ? 'active' : ''}`;
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

function initScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  $$('.animate-on-scroll').forEach(el => io.observe(el));
}

function initNavbarScroll() {
  const navbar = $('#navbar');
  const scrollTopBtn = $('#scrollTop');
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    navbar?.classList.toggle('scrolled', y > 50);
    scrollTopBtn?.classList.toggle('visible', y > 600);
    updateTimelineSpy();
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function initLightbox() {
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  if (!lb || !lbImg) return;
  on(lb, 'click', (e) => { if (e.target === lb) closeLightbox(); });
  on(document, 'keydown', (e) => { if (lb.classList.contains('active') && e.key === 'Escape') closeLightbox(); });
}

function openLightbox(el) {
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  if (!lb || !lbImg) return;
  const img = el?.querySelector?.('img');
  if (!img?.src) return;
  lbImg.src = img.src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = $('#lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  document.body.style.overflow = 'auto';
  if (savedScrollPosition > 0) {
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
      savedScrollPosition = 0;
    }, 10);
  }
}

function initTradeTabs() {
  const tabs = $$('.gallery-tab');
  if (!tabs.length) return;
  tabs.forEach(btn => {
    on(btn, 'click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      $$('.gallery-content').forEach(gc => gc.classList.remove('active'));
      const panel = $('#' + btn.dataset.target);
      panel?.classList.add('active');
    });
  });
}

function showToast(message = '') {
  const t = $('#toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function updateTimelineSpy() {
  const items = $$('.timeline-item');
  if (!items.length) return;
  const logoImg = $('#logo-img');
  const indicators = $$('.indicator-dot');
  if (!logoImg) return;

  let activeIndex = 0;
  let minDistance = Infinity;
  const windowCenter = window.innerHeight / 2;

  items.forEach((item, idx) => {
    const r = item.getBoundingClientRect();
    const itemCenter = r.top + r.height / 2;
    const distance = Math.abs(itemCenter - windowCenter);

    if (distance < minDistance) {
      minDistance = distance;
      activeIndex = idx;
    }

    item.classList.remove('active');
  });

  items[activeIndex].classList.add('active');

  const activeItem = items[activeIndex];
  if (activeItem) {
    const newLogo = activeItem.getAttribute('data-logo');
    const currentSrc = logoImg.getAttribute('src');
    if (newLogo && newLogo !== currentSrc) {
      logoImg.style.opacity = '0';
      setTimeout(() => {
        logoImg.src = newLogo;
        logoImg.onload = () => { logoImg.style.opacity = '1'; };
      }, 160);
    }
  }

  indicators.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
}

function initParticles() {
  const container = $('#particles');
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

/* Loading Screen */
function hideLoading() {
  const loading = $('#loading');
  if (!loading) return;
  if (loading.classList.contains('hidden')) return;
  loading.classList.add('hidden');
  setTimeout(() => {
    if (loading.parentNode) loading.remove();
  }, 400);
}

function initLoading() {
  const loading = $('#loading');
  if (!loading) return;
  setTimeout(hideLoading, 2000);
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(hideLoading, 500);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(hideLoading, 500);
    });
  }
  window.addEventListener('load', () => { hideLoading(); });
  if (window.MutationObserver) {
    let attempts = 0;
    const observer = new MutationObserver((mutations) => {
      attempts++;
      if (attempts > 10 || document.querySelector('.goog-te-menu-frame')) {
        hideLoading();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 3000);
  }
}

function initSmoothAnchors() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initCursor() {
  try {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    if (!cursor || !cursorFollower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
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

    document.querySelectorAll('a, button, .project-card, .stat-box, .strategy-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'var(--gold-light)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--gold)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  } catch(e) { console.log('Cursor init error:', e); }
}

function initStatModals() {
  document.querySelectorAll('.stat-box').forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function() {
      const statKey = this.dataset.stat;
      if (statKey) openStatModal(statKey);
    });
  });
}

function initStrategyItems() {
  document.querySelectorAll('.strategy-item[data-strategy]').forEach(el => {
    el.addEventListener('click', () => {
      const n = Number(el.getAttribute('data-strategy'));
      if (!isNaN(n)) openStrategyModal(n);
    });
  });
}

/* Animated Counters - Todos os contadores do site */
function initCounters() {
  // Seleciona todos os tipos de contadores
  const counterSelectors = [
    '.counter[data-target]',
    '.stat-number[data-target]',
    '.impact-value[data-target]',
    '.strategy-stat-value[data-target]',
    '.sustainability-value[data-target]',
    '.sustainability-highlight-value[data-target]'
  ];
  
  const allCounters = document.querySelectorAll(counterSelectors.join(', '));
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        animateCounter(counter, target, prefix, suffix);
        counterObserver.unobserve(counter);
      }
    });
  }, observerOptions);

  allCounters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target, prefix, suffix) {
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);
    
    element.textContent = prefix + current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = prefix + target + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* Dark Mode */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('darkModeIcon');
  const body = document.body;

  if (!toggle || !icon) return;

  const savedMode = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedMode === 'true' || (savedMode === null && prefersDark)) {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }

    localStorage.setItem('darkMode', isDark);
  });
}

/* Translator Toggle */
function initTranslator() {
  const translatorBtn = document.getElementById('translatorBtn');
  const translateElement = document.getElementById('google_translate_element');
  
  if (!translatorBtn || !translateElement) return;
  
  translatorBtn.addEventListener('click', () => {
    const isVisible = translateElement.style.opacity === '1';
    translateElement.style.opacity = isVisible ? '0' : '1';
    translateElement.style.pointerEvents = isVisible ? 'none' : 'auto';
  });
}

// Initialize Everything
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
  initMobileEnhancements();
  initCursor();
  initStatModals();
  initStrategyItems();
  initCounters();
  initDarkMode();
  initTranslator();

  $$('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('a') || e.target.closest('button')) return;
      openProjectGalleryFromCard(this);
    });
  });

  on(document, 'click', (e) => {
    if (e.target?.id === 'statModalOverlay') closeStatModal();
    if (e.target?.id === 'strategyDetailOverlay') closeStrategyModal();
  });
  on(document, 'keydown', (e) => {
    if (e.key === 'Escape') {
      closeStatModal();
      closeStrategyModal();
    }
  });
});

// Expose functions globally
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
window.openProjectGalleryFromCard = openProjectGalleryFromCard;
window.updateCardDots = updateCardDots;

/* Cert Modal Functions */
function openCertModal(imgSrc,title){const o=document.getElementById('certModalOverlay');const i=document.getElementById('certModalImg');const t=document.getElementById('certModalTitle');if(!o||!i||!t)return;i.src=imgSrc;t.textContent=title;o.classList.add('active');document.body.style.overflow='hidden';document.addEventListener('keydown',certEsc)}
function closeCertModal(){const o=document.getElementById('certModalOverlay');if(!o)return;o.classList.remove('active');document.body.style.overflow='auto';document.removeEventListener('keydown',certEsc);setTimeout(()=>{const i=document.getElementById('certModalImg');if(i)i.src=''},300)}
function certEsc(e){if(e.key==='Escape')closeCertModal()}

/* Article Modal Functions */
const articleContent = {
  'ai-contracts': `<h2>How LLMs Are Revolutionizing Contract Analysis</h2>
    <p><strong>Published:</strong> January 2026 | <strong>Reading time:</strong> 5 minutes</p>
    <h3>The Challenge</h3>
    <p>Legal review of procurement contracts traditionally takes days or even weeks. Legal teams must manually scan hundreds of pages to identify key clauses, risks, and compliance issues. This bottleneck delays critical business decisions and increases exposure to legal risks.</p>
    <h3>The Solution</h3>
    <p>Large Language Models (LLMs) like GPT-4 can now analyze contracts in minutes, extracting key information with remarkable accuracy. At Details Hospitality, I implemented an LLM-based contract parser that:</p>
    <ul>
    <li>Automatically extracts key clauses (termination, liability, payment terms)</li>
    <li>Identifies missing standard protections</li>
    <li>Flags unusual or high-risk language</li>
    <li>Generates executive summaries for stakeholder review</li>
    </ul>
    <h3>Results</h3>
    <p>Contract review time reduced by 80%, from an average of 3 days to 4 hours. Risk detection improved to near 100% for standard clause omissions. Legal team satisfaction increased significantly as they could focus on strategic analysis rather than manual document review.</p>
    <h3>Technical Implementation</h3>
    <p>The solution uses OpenAI's API with carefully crafted prompts that include domain-specific knowledge about hospitality procurement. LangChain handles document chunking for long contracts, and Streamlit provides an intuitive interface for the legal team.</p>`,

  'smart-rfp': `<h2>Building Smart RFPs: From Days to Hours</h2>
    <p><strong>Published:</strong> December 2025 | <strong>Reading time:</strong> 4 minutes</p>
    <h3>The Traditional RFP Problem</h3>
    <p>Creating a comprehensive Request for Proposal traditionally requires procurement professionals to manually compile technical specifications, evaluation criteria, and contractual terms. This process is repetitive, error-prone, and consumes valuable time that could be spent on strategic supplier engagement.</p>
    <h3>AI-Powered RFP Generation</h3>
    <p>By leveraging historical RFP data and LLMs, I developed a system that generates complete RFP documents from simple inputs:</p>
    <ul>
    <li>Category selection (e.g., HVAC maintenance, F&B supplies)</li>
    <li>Basic requirements and constraints</li>
    <li>Budget range and timeline</li>
    </ul>
    <p>The system automatically generates:</p>
    <ul>
    <li>Technical specifications based on category standards</li>
    <li>Weighted scoring matrices</li>
    <li>Standard contractual clauses</li>
    <li>Compliance requirements</li>
    </ul>
    <h3>Impact</h3>
    <p>RFP preparation time reduced by 60%, from 5 days to 2 days on average. More importantly, standardization improved proposal comparability, leading to better supplier selection decisions and an additional 15% in savings through improved competition.</p>`,

  'make-or-buy': `<h2>The Make-or-Buy Decision Framework</h2>
    <p><strong>Published:</strong> November 2025 | <strong>Reading time:</strong> 6 minutes</p>
    <h3>Beyond Simple Cost Comparison</h3>
    <p>The classic make-or-buy decision often relies solely on unit cost comparison. However, this approach misses critical factors like capacity constraints, quality control, intellectual property risks, and strategic alignment.</p>
    <h3>A Multi-Dimensional Framework</h3>
    <p>At Details Hospitality, I developed a comprehensive framework that evaluates make-or-buy decisions across five dimensions:</p>
    <ul>
    <li><strong>Financial:</strong> Total cost of ownership, not just unit price</li>
    <li><strong>Operational:</strong> Capacity, flexibility, and service levels</li>
    <li><strong>Strategic:</strong> Core competency alignment and competitive advantage</li>
    <li><strong>Risk:</strong> Supply chain resilience and compliance exposure</li>
    <li><strong>Capability:</strong> Internal expertise and technology requirements</li>
    </ul>
    <h3>Case Study: In-House Laundry</h3>
    <p>Applying this framework to the laundry operation decision revealed that while outsourcing appeared 20% cheaper on a per-unit basis, internal operation provided better control over quality and turnaround times—critical factors for guest satisfaction in luxury hospitality.</p>
    <h3>The Tool</h3>
    <p>I built an interactive Excel model with Power BI dashboards that allows scenario modeling and sensitivity analysis, enabling data-driven discussions with stakeholders rather than gut-feel decisions.</p>`
};

function openArticleModal(articleId) {
  const overlay = document.getElementById('articleModalOverlay');
  const content = document.getElementById('articleModalContent');
  if (!overlay || !content) return;

  content.innerHTML = articleContent[articleId] || '<p>Article content loading...</p>';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleArticleEsc);
}

function closeArticleModal() {
  const overlay = document.getElementById('articleModalOverlay');
  const content = document.getElementById('articleModalContent');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  document.removeEventListener('keydown', handleArticleEsc);
  // Reset scroll
  if (content) content.scrollTop = 0;
}

function handleArticleEsc(e) {
  if (e.key === 'Escape') closeArticleModal();
}

/* Newsletter Submit Handler */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  showToast('Thank you for subscribing! Check your email for confirmation.');
  e.target.reset();
}
