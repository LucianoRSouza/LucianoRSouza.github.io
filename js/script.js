window.I18N = {
  ;

/* =========================================================
   Luciano Rodrigues — Portfolio JS (consolidado e limpo)
   ========================================================= */

/* -------------------------
   Helpers / Estado Global
--------------------------*/
const PG_state = { images: [], index: 0, currentLang: 'en' };
const CardSlides = new Map();

// NOVO: Variável para salvar posição de scroll
let savedScrollPosition = 0;

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* -------------------------
   Dados — Stats & Estratégia (com tradução)
--------------------------*/

  CardSlides.set(card, state);

  function tick() {
    if (state.paused || !auto || state.images.length <= 1) return;
    state.idx = (state.idx + 1) % state.images.length;
    state.imgEl.style.opacity = '0';
    setTimeout(() => {
      state.imgEl.src = state.images[state.idx];
      state.imgEl.onload = () => { state.imgEl.style.opacity = '1'; };
      // Atualizar dots COM ANIMAÇÃO
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

  on(card, 'mouseenter', () => { state.paused = true; });
  on(card, 'mouseleave', () => { state.paused = false; });

  const clickable = card.querySelector('.gallery-overlay') || container;
  on(clickable, 'click', (e) => {
    e.stopPropagation();
    openProjectGalleryFromCard(card);
  });

  start();
}

// Salvar posição antes de abrir
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
    // Aplica estilos iniciais
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

// Restaurar posição ao fechar
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

/* -------------------------
   Outras melhorias
--------------------------*/
function initMobileEnhancements() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) return;

  $$('.stat-box, .strategy-item, .project-card, .gallery-item').forEach(el => {
    on(el, 'touchstart', function(){ this.style.transform = 'scale(0.98)'; }, { passive: true });
    on(el, 'touchend',   function(){ this.style.transform = '';           }, { passive: true });
  });

  $$('.project-card').forEach(card => {
    let startX = 0, currentX = 0;
    const gallery = card.querySelector('.gallery-main');
    if (!gallery) return;

    on(gallery, 'touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    on(gallery, 'touchmove',  e => { currentX = e.touches[0].clientX; }, { passive: true });
    on(gallery, 'touchend',   () => {
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
    "blaupunkt": [
      "./Blaupunkt_Tools.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_1.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_2.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_3.png",
      "./Blaupunkt_Illumiation_booth_HK_Fair_4.png"
    ],
    "blaupunkt-power": [
      "./Blaupunkt_Power_Tools.png"
    ],
    "blaupunkt-garden": [
      "./Blaupunkt_Garden_Tools.png"
    ]
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

function initVolunteerEnhancement() {
  const section = $('#volunteering');
  if (!section) return;
  if (section.querySelector('.volunteer-hero-image')) return;

  const header = section.querySelector('.section-header');
  if (!header) return;

  const hero = document.createElement('div');
  hero.className = 'volunteer-hero-image animate-on-scroll visible';
  hero.innerHTML = '<img src="./gadsdenstatecommunitycollege.jpg" alt="Gadsden State Community College" onerror="this.style.display=\'none\'" />';
  header.after(hero);
}

function fixGadsdenImages() {
  $$('.cert-logo img').forEach(img => {
    if (img.src.includes('Gadsden') || img.alt.includes('Gadsden')) {
      img.onerror = function () { this.src = './gadsdenstatecommunitycollege_logo.jpg'; };
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

function initTimelineSpy() { updateTimelineSpy(); }

function updateTimelineSpy() {
  const items = $$('.timeline-item');
  if (!items.length) return;
  const logoImg = $('#logo-img');
  const indicators = $$('.indicator-dot');
  if (!logoImg) return;

  let activeIndex = 0;
  const windowHeight = window.innerHeight;
  const midTop = windowHeight * 0.62;
  const midBottom = windowHeight * 0.38;

  items.forEach((item, idx) => {
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
  const lastItemRect = lastItem?.getBoundingClientRect();
  
  if (lastItemRect && lastItemRect.top < windowHeight * 0.8) {
    activeIndex = lastIndex;
  }

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

function translateAll(lang) {
  PG_state.currentLang = lang;
  document.documentElement.lang = lang;
  const dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N['en']) || {};
  $$('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n;
    const value = path?.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
    if (value !== undefined) el.textContent = value;
  });
  setTimeout(updateTimelineSpy, 100);
}

function markActiveLang(lang) {
  $$('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}

function initLangSwitcher() {
  const switcher = $('#langSwitcher');
  if (!switcher) return;
  on(switcher, 'click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.dataset.lang;
    if (!lang) return;
    translateAll(lang);
    markActiveLang(lang);
    try { localStorage.setItem('lang', lang); } catch(e) {}
    showToast(`Translated to ${lang.toUpperCase()}`);
  });
}

function initI18N() {
  try {
    const stored = localStorage.getItem('lang');
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    const initial = stored || (['en', 'pt', 'es', 'fr'].includes(browser) ? browser : 'en');
    translateAll(initial);
    markActiveLang(initial);
  } catch(e) {
    translateAll('en');
    markActiveLang('en');
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initNavbarScroll();
  initScrollAnimations();
  initParticles();
  initSmoothAnchors();

  initLangSwitcher();
  initI18N();

  initTradeTabs();
  initLightbox();

  enhanceProjectGalleries();
  $$('.project-card').forEach(setupCardAutoSlide);

  initVolunteerEnhancement();
  fixGadsdenImages();

  initMobileEnhancements();

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

  // Cursor animation
try {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth follow for main cursor
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            // Slower follow for follower
            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover effects
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
    }
} catch(e) { console.log('Cursor init error:', e); }

console.log('✅ Portfolio JS (consolidado) inicializado');
  
  initStatModals();
});

function initStatModals() {
  document.querySelectorAll('.stat-box').forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function(e) {
      const statKey = this.dataset.stat;
      if (statKey) {
        openStatModal(statKey);
      }
    });
  });
  
  console.log('✅ Stat modals initialized');
}

window.openStatModal        = openStatModal;
window.closeStatModal       = closeStatModal;
window.openStrategyModal    = openStrategyModal;
window.closeStrategyModal   = closeStrategyModal;
window.openLightbox         = openLightbox;
window.closeLightbox        = closeLightbox;
window.changeProjectSlide   = changeProjectSlide;
window.goToProjectSlide     = goToProjectSlide;
window.closeProjectGallery  = closeProjectGallery;
window.scrollToTop          = scrollToTop;

document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){
    try{ closeStatModal(); }catch(_){ }
    try{ closeStrategyModal(); }catch(_){ }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.strategy-item[data-strategy]').forEach(el => {
    el.addEventListener('click', () => {
      const n = Number(el.getAttribute('data-strategy'));
      if (!isNaN(n)) { window.openStrategyModal(n); }
    });
  });
});

function initTradeDuoFromExisting(){
  const sec = document.getElementById('trade-shows');
  if(!sec) return;
  const blau = document.querySelector('#gallery-blaupunkt .gallery-item img');
  const ford = document.querySelector('#gallery-ford .gallery-item img');
  const blauSrc = blau ? blau.getAttribute('src') : '';
  const fordSrc = ford ? ford.getAttribute('src') : '';
  if(!blauSrc || !fordSrc) return;
  if(sec.querySelector('.trade-duo')) return;
  
  const duo = document.createElement('div');
  duo.className = 'trade-duo';
  duo.innerHTML = `
    <div class="brand-card" data-brand="blaupunkt">
      <div class="brand-head"><h4>Blaupunkt</h4><i class="fas fa-images" style="color:var(--gold);"></i></div>
      <div class="brand-body"><img src="${blauSrc}" alt="Blaupunkt cover"/></div>
    </div>
    <div class="brand-card" data-brand="ford">
      <div class="brand-head"><h4>Ford Lighting</h4><i class="fas fa-images" style="color:var(--gold);"></i></div>
      <div class="brand-body"><img src="${fordSrc}" alt="Ford cover"/></div>
    </div>`;
  const tabs = sec.querySelector('.gallery-tabs');
  sec.insertBefore(duo, tabs);
  
  const openBrand = (brand)=>{
    savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    
    const panel = document.getElementById(brand==='blaupunkt' ? 'gallery-blaupunkt' : 'gallery-ford');
    if(!panel) return;
    const imgs = Array.from(panel.querySelectorAll('.gallery-item img')).map(i=> i.getAttribute('src')).filter(Boolean);
    if(!imgs.length) return;
    
    buildProjectSlides(imgs);
    const modal = document.getElementById('projectGalleryModal');
    if(modal){ 
      modal.classList.add('active'); 
      document.body.style.overflow='hidden'; 
    }
  };
  
  duo.querySelector('[data-brand="blaupunkt"]').addEventListener('click', ()=> openBrand('blaupunkt'));
  duo.querySelector('[data-brand="ford"]').addEventListener('click', ()=> openBrand('ford'));
}

function initMobileTimelineLogos(){
  if(!window.matchMedia('(max-width: 1200px)').matches) return;
  document.querySelectorAll('.timeline-item').forEach(item=>{
    if(item.querySelector('.mobile-company-logo')) return;
    const logo = item.getAttribute('data-logo');
    if(!logo) return;
    const img = document.createElement('img');
    img.className = 'mobile-company-logo';
    img.alt = 'Company logo';
    img.src = logo;
    item.appendChild(img);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  try{ initTradeDuoFromExisting(); }catch(e){}
  try{ initMobileTimelineLogos(); }catch(e){}
});

document.addEventListener('DOMContentLoaded',function(){try{var l=localStorage.getItem('lang')||document.documentElement.lang||'en';if(typeof translateAll==='function'){translateAll(l);}}catch(e){}});

document.addEventListener('click',function(e){const gm=e.target.closest('.project-card .gallery-main');if(!gm)return;const card=gm.closest('.project-card');openProjectGalleryFromCard(card);});

const TRADE_GALLERIES={
  blaupunkt:[
    './Blaupunkt_Illumiation_booth_HK_Fair.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_1.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_2.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_3.png',
    './Blaupunkt_Illumiation_booth_HK_Fair_4.png'
  ],
  ford:[
    './Ford_lighting_solutions_HK_Intl.png',
    './Ford_lighting_solutions_HK_Intl_1.png',
    './Ford_lighting_solutions_HK_Intl_2.png'
  ]
};

function openTradeGallery(brand){
  savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
  
  const images = (TRADE_GALLERIES[brand] || []).slice();
  if(!images.length) return;
  
  buildProjectSlides(images);
  document.getElementById('projectGalleryModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
/* -------------------------
   TIMELINE MOBILE - ADICIONAR HEADERS COM LOGO E DATA
   -------------------------*/
function initTimelineMobileHeaders() {
  if (window.innerWidth > 1200) return;
  
  const items = document.querySelectorAll('.timeline-item');
  
  items.forEach(item => {
    // Se já tem header, pula
    if (item.querySelector('.timeline-header')) return;
    
    const company = item.dataset.company;
    const logo = item.dataset.logo;
    const dateRange = item.querySelector('.date-range')?.textContent || '';
    const dateLevel = item.querySelector('.date-level')?.textContent || '';
    
    // Cria o header
    const header = document.createElement('div');
    header.className = 'timeline-header';
    header.innerHTML = `
      <div class="company-logo">
        <img src="${logo}" alt="Company logo" onerror="this.style.display='none'">
      </div>
      <div class="date-info">
        <span class="date-range">${dateRange}</span>
        <span class="date-level">${dateLevel}</span>
      </div>
    `;
    
    // Insere antes do content
    const content = item.querySelector('.timeline-content');
    item.insertBefore(header, content);
  });
}

// Inicializa no load e no resize
window.addEventListener('load', initTimelineMobileHeaders);
window.addEventListener('resize', () => {
  // Debounce simples
  clearTimeout(window.timelineResizeTimer);
  window.timelineResizeTimer = setTimeout(initTimelineMobileHeaders, 250);
});
