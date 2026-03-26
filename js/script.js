/****************************************************
 *  JS LIMPO — SEM I18N, 100% GOOGLE TRANSLATE
 *  Todo o conteúdo agora vem do HTML.
 *  Nada é sobrescrito por JS.
 ****************************************************/

/* ============================
 Helpers / Estado Global
============================ */
const PG_state = { images: [], index: 0 };
const CardSlides = new Map();
let savedScrollPosition = 0;

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

/* ============================
 Modais — Stats (textos agora vêm do HTML)
============================ */
function openStatModal(key) {
    const modal = $('#statModalOverlay');
    if (!modal) return;

    const box = document.querySelector(`.stat-box[data-stat="${key}"]`);
    if (!box) return;

    const title = box.querySelector('.stat-label')?.textContent ?? "";
    const value = box.querySelector('.stat-number')?.textContent ?? "";
    const details = box.querySelector('.stat-note')?.textContent ?? "";

    $('#statModalTitle').textContent = title;
    $('#statModalValue').textContent = value;
    $('#statModalDetails').innerHTML = `<li>${details}</li>`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStatModal() {
    const modal = $('#statModalOverlay');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ============================
 Modais — Estratégia (conteúdo extraído do HTML)
============================ */
function openStrategyModal(num) {
    const modal = $('#strategyDetailOverlay');
    if (!modal) return;

    const item = document.querySelector(`.strategy-item[data-strategy="${num}"]`);
    if (!item) return;

    const title = item.querySelector('p')?.textContent ?? "";
    const subtitle = item.querySelector('p')?.textContent ?? "";
    
    $('#strategyDetailTitle').textContent = title;
    $('#strategyDetailSubtitle').textContent = subtitle;

    $('#strategyDetailBody').innerHTML = `
        <div class="strategy-detail-section">
            <ul><li>Content dynamically sourced from HTML and translated via Google Translate.</li></ul>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStrategyModal() {
    const modal = $('#strategyDetailOverlay');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ============================
 Dots dos cards
============================ */
function updateCardDots(card, idx) {
    const dots = card.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => {
        if (i === idx) {
            dot.classList.add('active');
            dot.style.transform = 'scale(1.4)';
            dot.style.background = 'var(--gold)';
            dot.style.boxShadow = '0 0 10px rgba(212,175,55,0.6)';
        } else {
            dot.classList.remove('active');
            dot.style.transform = 'scale(1)';
            dot.style.background = 'rgba(255,255,255,0.5)';
            dot.style.boxShadow = 'none';
        }
    });
}

/* ============================
 Galeria Modal
============================ */
function changeProjectSlide(dir) {
    if (!PG_state.images.length) return;

    const modal = $('#projectGalleryModal');
    const slides = modal.querySelectorAll('.gallery-slide');
    const dots = modal.querySelectorAll('.gallery-dot');

    slides[PG_state.index]?.classList.remove('active');
    dots[PG_state.index]?.classList.remove('active');

    PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;

    slides[PG_state.index]?.classList.add('active');
    dots[PG_state.index]?.classList.add('active');
}

function goToProjectSlide(idx) {
    const modal = $('#projectGalleryModal');
    const slides = modal.querySelectorAll('.gallery-slide');
    const dots = modal.querySelectorAll('.gallery-dot');

    slides[PG_state.index]?.classList.remove('active');
    dots[PG_state.index]?.classList.remove('active');

    PG_state.index = idx;

    slides[idx]?.classList.add('active');
    dots[idx]?.classList.add('active');
}

/* ============================
 Auto Slide dos Cards
============================ */
function setupCardAutoSlide(card) {
    const container = card.querySelector('.gallery-main');
    if (!container) return;

    let images = [];
    const csv = card.getAttribute('data-images') ?? "";

    images = csv.split(',').map(s => s.trim()).filter(Boolean);
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
        if (auto && state.images.length > 1) {
            state.timer = setInterval(tick, state.interval);
        }
    }

    function stop() {
        if (state.timer) clearInterval(state.timer);
        state.timer = null;
    }

    on(card, 'mouseenter', () => (state.paused = true));
    on(card, 'mouseleave', () => (state.paused = false));

    on(container, 'click', () => openProjectGalleryFromCard(card));

    start();
}

/* ============================
 Abrir / Fechar Modal de Galeria
============================ */
function openProjectGalleryFromCard(card) {
    savedScrollPosition = window.scrollY || document.documentElement.scrollTop || 0;

    const modal = $('#projectGalleryModal');
    let images = (card.getAttribute('data-images') || "")
        .split(',').map(s => s.trim()).filter(Boolean);

    if (!images.length) return;

    buildProjectSlides(images);
    modal.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function buildProjectSlides(images) {
    const slider = $('#gallerySlider');
    const dotsContainer = $('#galleryDots');

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    images.forEach((src, idx) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide' + (idx === 0 ? ' active' : '');
        slide.innerHTML = `<img src="${src}" class="img-slide" />`;

        const dot = document.createElement('div');
        dot.className = 'gallery-dot' + (idx === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToProjectSlide(idx));

        slider.appendChild(slide);
        dotsContainer.appendChild(dot);
    });

    PG_state.images = images.slice();
    PG_state.index = 0;
}

function closeProjectGallery() {
    $('#projectGalleryModal')?.classList.remove('active');
    document.body.style.overflow = 'auto';

    if (savedScrollPosition > 0) {
        window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
    }
}

/* ============================
 Outras Rotinas (inalteradas)
============================ */
function initScrollAnimations() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.12 });

    $$('.animate-on-scroll').forEach(el => io.observe(el));
}

function initNavbarScroll() {
    const navbar = $('#navbar');
    const scrollTopBtn = $('#scrollTop');

    const onScroll = () => {
        const y = window.scrollY;
        navbar?.classList.toggle('scrolled', y > 50);
        scrollTopBtn?.classList.toggle('visible', y > 600);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

function initLoading() {
    const loading = $('#loading');
    if (!loading) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => loading.remove(), 400);
        }, 1000);
    });
}

function initSmoothAnchors() {
    $$('a[href^="#"]').forEach(a => {
        on(a, 'click', e => {
            const href = a.getAttribute('href');
            const target = $(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function initLightbox() {
    const lb = $('#lightbox');
    const lbImg = $('#lightbox-img');
    if (!lb || !lbImg) return;

    on(lb, 'click', e => e.target === lb && closeLightbox());
    on(document, 'keydown', e => lb.classList.contains('active') && e.key === 'Escape' && closeLightbox());
}

function openLightbox(el) {
    const img = el.querySelector('img');
    if (!img) return;

    const lb = $('#lightbox');
    const lbImg = $('#lightbox-img');

    lbImg.src = img.src;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = $('#lightbox');
    lb?.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ============================
 Inicialização Geral
============================ */
document.addEventListener('DOMContentLoaded', () => {
    initLoading();
    initNavbarScroll();
    initScrollAnimations();
    initSmoothAnchors();
    initLightbox();

    enhanceProjectGalleries?.();

    $$('.project-card').forEach(setupCardAutoSlide);

    on(document, 'click', e => {
        if (e.target?.id === 'statModalOverlay') closeStatModal();
        if (e.target?.id === 'strategyDetailOverlay') closeStrategyModal();
    });

    on(document, 'keydown', e => {
        if (e.key === 'Escape') {
            closeStatModal();
            closeStrategyModal();
            closeLightbox();
        }
    });
});

/* Expose globally */
window.openStatModal        = openStatModal;
window.closeStatModal       = closeStatModal;
window.openStrategyModal    = openStrategyModal;
window.closeStrategyModal   = closeStrategyModal;
window.changeProjectSlide   = changeProjectSlide;
window.goToProjectSlide     = goToProjectSlide;
window.closeProjectGallery  = closeProjectGallery;
window.openLightbox         = openLightbox;
window.closeLightbox        = closeLightbox;
