// ============================================
// SCRIPT.JS - Toda a lógica em um arquivo
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. Loading Screen
    setTimeout(function() {
        var loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
        }
    }, 1500);

    // 2. Navbar scroll effect
    var navbar = document.getElementById('navbar');
    var scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop) {
            if (window.scrollY > 500) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        }
    });

    // 3. Scroll animations
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
        observer.observe(el);
    });

    // 4. Particles
    var particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (var i = 0; i < 30; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // 5. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// FUNÇÕES GLOBAIS
// ============================================

// Gallery Tabs
function switchGallery(gallery) {
    // Update tabs
    document.querySelectorAll('.gallery-tab').forEach(function(tab) {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update content
    document.querySelectorAll('.gallery-content').forEach(function(content) {
        content.classList.remove('active');
    });

    var targetGallery = document.getElementById('gallery-' + gallery);
    if (targetGallery) {
        targetGallery.classList.add('active');
    }
}

// Lightbox
function openLightbox(element) {
    var img = element.querySelector('img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toast Notification
function showToast(message) {
    var toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Language Switcher
function changeLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });

    if (event && event.target) {
        event.target.classList.add('active');
    }

    if (lang === 'en') {
        showToast('English is already active');
    } else {
        showToast('Right-click and select "Translate to ' + lang.toUpperCase() + '" for automatic translation');
    }
}