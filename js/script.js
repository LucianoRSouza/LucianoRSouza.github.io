// Estado global
const PG_state = {
  images: [],
  index: 0,
  currentLang: "en",
  currentProjectImages: [],
  currentProjectIndex: 0
};

const CardSlides = new Map();

// Helpers
function $(selector, context) {
  return (context || document).querySelector(selector);
}

function $$(selector, context) {
  return Array.from((context || document).querySelectorAll(selector));
}

// Dados
const statDetailsData = {
  savings: {
    icon: "fa-piggy-bank",
    title: "Cumulative Savings Delivered",
    value: "€1M+",
    story: "Within the first 6 months at Details Hospitality, I orchestrated a procurement transformation that delivered over €1 million in cumulative savings through strategic category management and AI-driven supplier optimization.",
    details: [
      "Multi-category strategic sourcing initiatives across direct and indirect spend",
      "Negotiated favorable payment terms (60-90 days) improving cash flow by 23%",
      "Implemented should-cost modeling identifying 15-25% cost reduction opportunities",
      "Consolidated supplier base from 200+ to 80 key strategic partners",
      "Zero-based budgeting approach for CAPEX projects saving 20% on average",
      "AI-powered spend analysis revealing hidden optimization opportunities",
      "Cross-functional cost councils with Engineering, Operations, and Finance"
    ]
  },
  rfps: {
    icon: "fa-file-contract",
    title: "Strategic Tenders Led",
    value: "120+",
    story: "120+ tender processes meticulously structured, documented, and executed with full audit compliance in accordance with Procurement 4.0 standards and international best practices.",
    details: [
      "End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)",
      "Weighted scoring matrices balancing technical (40%), commercial (35%), and ESG (25%) criteria",
      "E-procurement platform integration with full audit trails and digital signatures",
      "Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)",
      "Average cycle time reduction from 45 to 28 days while improving compliance",
      "AI-assisted proposal analysis reducing evaluation time by 40%",
      "Standardized contract templates with dynamic clause libraries",
      "Real-time stakeholder dashboards for transparent decision-making"
    ]
  },
  projects: {
    icon: "fa-project-diagram",
    title: "Project Portfolio Value",
    value: "€10M+",
    story: "A diverse portfolio spanning licensed brand launches, product development from concept to mass production, and AI-driven operational transformations across three continents.",
    details: [
      "New product development from concept to mass production (Blaupunkt, Spear & Jackson, Pininfarina)",
      "Licensed portfolio launches with complete IP management and royalty optimization",
      "Factory audits and supplier capability assessments across Asia (China, Vietnam, Taiwan)",
      "Quality system implementations (ISO 9001, compliance frameworks, ANATEL, CE, FCC)",
      "Cross-border logistics optimization and customs compliance automation",
      "AI-powered demand forecasting reducing inventory carrying costs by 30%",
      "End-to-end supply chain digitization with real-time visibility",
      "Sustainable sourcing initiatives reducing carbon footprint by 25%"
    ]
  },
  regions: {
    icon: "fa-globe",
    title: "Global Operations Coverage",
    value: "20+",
    story: "Operating seamlessly across 20+ countries, leveraging deep cultural understanding and multi-language capabilities to build trust and drive results in diverse markets.",
    details: [
      "Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France",
      "LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay",
      "Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea, Thailand",
      "Multi-cultural negotiation experience and local market knowledge",
      "Time zone coordination for 24/7 project execution and supplier management",
      "Local compliance expertise across trade regulations and certifications",
      "Regional pricing intelligence and market benchmarking capabilities",
      "Cross-cultural team leadership and stakeholder management"
    ]
  }
};

const strategyDetailsData = {
  1: {
    title: "Stand Design & Merchandising",
    subtitle: "Creating Immersive Brand Experiences That Convert",
    icon: "fa-drafting-compass",
    sections: [
      {
        title: "Strategic Approach",
        items: [
          "Co-created booth concept with Marketing aligning to brand positioning and target audience journey",
          "Traffic flow optimization using heat mapping data for maximum visitor engagement",
          "Product display hierarchy highlighting hero SKUs and new launches with strategic lighting",
          "Lighting and visual merchandising for premium brand perception and emotional connection",
          "Interactive demo stations for hands-on product experience with guided tours"
        ]
      },
      {
        title: "Cross-Functional Collaboration",
        items: [
          "Weekly sync meetings with Marketing, Sales, and Product teams during pre-event phase",
          "Integrated brand storytelling across all touchpoints (digital, physical, human)",
          "Real-time feedback loops with Engineering on product display technical requirements",
          "Budget optimization through shared cost centers with Marketing and Sales departments",
          "Post-event analysis sessions with all stakeholders for continuous improvement"
        ]
      },
      {
        title: "Technical Execution",
        items: [
          "3D renderings and mockups approved 60 days prior to event with stakeholder sign-off",
          "Modular stand components for reusability across fairs reducing costs by 35%",
          "Digital signage integration with real-time product catalogs and QR code tracking",
          "Storage and logistics planning for 500+ SKU displays with inventory accuracy",
          "On-site supervision during build-up and dismantling with safety compliance"
        ]
      }
    ]
  },
  2: {
    title: "Meetings Orchestration & Lead Capture",
    subtitle: "Maximizing ROI Through Structured Engagement",
    icon: "fa-calendar-check",
    sections: [
      {
        title: "Pre-Event Planning",
        items: [
          "Target list development: 200+ qualified prospects per fair using CRM data and AI scoring",
          "Meeting scheduling system with automated reminders and calendar integration",
          "Sales team briefing with product knowledge sessions and objection handling training",
          "Customized pitch decks by customer segment (Enterprise, Mid-Market, SMB)",
          "Lead scoring criteria defined (budget, timeline, authority, need) with weighted values"
        ]
      },
      {
        title: "Cross-Functional Coordination",
        items: [
          "Daily huddles with Sales, Marketing, and Technical teams during the fair",
          "Real-time lead qualification with Engineering support for technical questions",
          "Seamless handover process from booth staff to regional sales managers",
          "Integrated CRM updates with automated workflow triggers for follow-up",
          "Collaborative pipeline building with Finance for deal structure optimization"
        ]
      },
      {
        title: "On-Site Execution",
        items: [
          "Structured 30-minute meeting slots with clear agendas and desired outcomes",
          "Real-time lead capture via CRM mobile app with business card scanning",
          "Immediate follow-up emails sent within 4 hours with personalized content",
          "Meeting notes standardized for pipeline visibility and next action tracking",
          "Daily team huddles to adjust strategy based on feedback and market intelligence"
        ]
      }
    ]
  },
  3: {
    title: "Negotiations & Partnering",
    subtitle: "Building Strategic Supplier Relationships",
    icon: "fa-handshake-angle",
    sections: [
      {
        title: "Partnership Development",
        items: [
          "Initial qualification: financial stability analysis, capacity assessment, certifications verification",
          "Term sheet negotiations: MOQ optimization, payment terms (60-90 days), exclusivity clauses",
          "Pricing framework with volume breaks, annual rebates, and market-adjustment clauses",
          "Quality agreements defining defect rates (PPM targets) and corrective action timelines",
          "IP protection and NDA frameworks for new product development collaborations"
        ]
      },
      {
        title: "Stakeholder Alignment",
        items: [
          "Pre-negotiation alignment meetings with Legal, Finance, and Operations teams",
          "Joint business planning sessions with suppliers and internal category managers",
          "Risk assessment workshops with Compliance and ESG teams for supplier validation",
          "Executive sponsorship alignment for strategic partnership announcements",
          "Cross-functional approval workflows for contract terms and deviations"
        ]
      },
      {
        title: "Contractual Framework",
        items: [
          "Master Service Agreements (MSA) with standardized terms and localized annexes",
          "Statement of Work (SoW) templates for project-based work with milestone payments",
          "Service Level Agreements (SLA) with penalty/incentive clauses tied to KPIs",
          "Force majeure and business continuity provisions with alternative sourcing plans",
          "Exit clauses and knowledge transfer obligations protecting intellectual property"
        ]
      }
    ]
  },
  4: {
    title: "Tech Discovery & Benchmark",
    subtitle: "Staying Ahead of Market Innovation",
    icon: "fa-microchip",
    sections: [
      {
        title: "Market Intelligence",
        items: [
          "Technology scouting across 50+ supplier booths per fair with structured evaluation sheets",
          "Competitive product teardowns and feature comparison matrices",
          "Cost benchmarking for similar specifications using should-cost modeling",
          "Innovation trend mapping (IoT, sustainability, smart features) with patent analysis",
          "Patent landscape analysis for freedom to operate and white space identification"
        ]
      },
      {
        title: "Cross-Functional Evaluation",
        items: [
          "Engineering team consultations on technical feasibility and design for manufacturing",
          "R&D roadmap alignment sessions with supplier innovation pipelines",
          "Quality team involvement in reliability testing and certification requirements",
          "Marketing input on consumer trends and feature prioritization",
          "Finance review of technology investment ROI and total cost of ownership"
        ]
      },
      {
        title: "Technical Evaluation",
        items: [
          "Sample collection for lab testing and validation against specifications",
          "Prototype review and design for manufacturing (DFM) feedback sessions",
          "Certification requirements assessment (CE, FCC, ANATEL, UL) with timeline planning",
          "Roadmap alignment with supplier R&D investments and joint development opportunities",
          "Technology scouting reports distributed to Product Management and Engineering"
        ]
      }
    ]
  },
  5: {
    title: "Factory Audits & Capability Mapping",
    subtitle: "Ensuring Operational Excellence",
    icon: "fa-industry",
    sections: [
      {
        title: "Audit Framework",
        items: [
          "ISO 9001 quality management system verification with gap analysis",
          "Production capacity analysis (lines, shifts, utilization rates, OEE metrics)",
          "Equipment maintenance records and calibration certificates review",
          "Workforce skill assessment and training program evaluation",
          "Environmental compliance and waste management practices audit"
        ]
      },
      {
        title: "Cross-Functional Audit Teams",
        items: [
          "Quality Engineers for technical capability and process control assessment",
          "ESG specialists for social compliance and environmental impact evaluation",
          "Operations managers for capacity planning and flexibility analysis",
          "IT auditors for cybersecurity protocols and data protection measures",
          "Finance representatives for financial health and payment practice verification"
        ]
      },
      {
        title: "Risk Assessment",
        items: [
          "Financial health check (credit reports, payment history, banking references)",
          "Supply chain resilience (dual sourcing, buffer stock, geographic diversification)",
          "Social compliance audits (SA8000, BSCI standards) with worker interviews",
          "Cybersecurity protocols for data-sharing partnerships and IP protection",
          "Business continuity planning and disaster recovery capability assessment"
        ]
      }
    ]
  },
  6: {
    title: "Post-Fair Pipeline, ROI & Governance",
    subtitle: "Converting Leads into Revenue",
    icon: "fa-chart-line",
    sections: [
      {
        title: "Pipeline Management",
        items: [
          "Lead categorization: Hot (immediate), Warm (3 months), Cold (nurture) with scoring",
          "CRM integration with automated follow-up sequences and task assignments",
          "Opportunity value estimation and win probability scoring using historical data",
          "Cross-functional handover to regional sales teams with complete context",
          "Weekly pipeline review meetings for first 30 days with executive sponsorship"
        ]
      },
      {
        title: "Cross-Functional Follow-Up",
        items: [
          "Sales team enablement with technical documentation and competitive positioning",
          "Marketing nurture campaigns tailored to lead segments and interest areas",
          "Product team feedback integration for roadmap prioritization",
          "Finance involvement for deal structuring and payment term negotiations",
          "Operations planning for fulfillment capacity and logistics optimization"
        ]
      },
      {
        title: "Performance Metrics",
        items: [
          "Cost per lead calculation (stand cost / qualified leads) with benchmark comparison",
          "Conversion rate tracking from lead to order with cohort analysis",
          "Average deal size comparison vs. non-fair customers and channel benchmarks",
          "Time-to-close analysis identifying bottlenecks and process improvements",
          "Annual ROI reporting for marketing budget justification and future investment"
        ]
      }
    ]
  }
};

// Inicialização
function initLoading() {
  const loading = $("#loading");
  if (!loading) return;
  
  window.addEventListener("load", function() {
    setTimeout(function() {
      loading.classList.add("hidden");
      setTimeout(function() {
        loading.remove();
      }, 400);
    }, 1200);
  });
}

function initNavbarScroll() {
  const navbar = $("#navbar");
  const scrollTop = $("#scrollTop");
  
  function update() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (navbar) {
      navbar.classList.toggle("scrolled", scrollY > 50);
    }
    if (scrollTop) {
      scrollTop.classList.toggle("visible", scrollY > 600);
    }
    updateTimelineSpy();
  }
  
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initScrollAnimations() {
  const options = {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);
  
  $$(".animate-on-scroll").forEach(function(el) {
    observer.observe(el);
  });
}

function initParticles() {
  const container = $("#particles");
  if (!container) return;
  
  for (let i = 0; i < 26; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = (100 * Math.random()) + "%";
    particle.style.top = (100 * Math.random()) + "%";
    const size = Math.max(3, Math.min(6, 3 + 4 * Math.random()));
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.opacity = (0.22 + 0.35 * Math.random()).toFixed(2);
    particle.style.animationDelay = (5 * Math.random()).toFixed(2) + "s";
    particle.style.animationDuration = (4 + 5 * Math.random()).toFixed(2) + "s";
    particle.style.position = "absolute";
    particle.style.background = "var(--gold)";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    container.appendChild(particle);
  }
}

function initSmoothAnchors() {
  $$('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      const href = anchor.getAttribute("href");
      if (href && href !== "#") {
        const target = $(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
  }, 2800);
}

function initTimelineSpy() {
  updateTimelineSpy();
}

function updateTimelineSpy() {
  const items = $$(".timeline-item");
  if (!items.length) return;
  
  const logoImg = $("#logo-img");
  const dots = $$(".indicator-dot");
  if (!logoImg) return;
  
  let activeIndex = 0;
  const viewportHeight = window.innerHeight;
  const upperThreshold = 0.62 * viewportHeight;
  const lowerThreshold = 0.38 * viewportHeight;
  
  items.forEach(function(item, index) {
    const rect = item.getBoundingClientRect();
    if (rect.top < upperThreshold && rect.bottom > lowerThreshold) {
      activeIndex = index;
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  
  const activeItem = items[activeIndex];
  if (activeItem) {
    const newLogo = activeItem.getAttribute("data-logo");
    const currentLogo = logoImg.getAttribute("src");
    if (newLogo && newLogo !== currentLogo) {
      logoImg.style.opacity = "0";
      setTimeout(function() {
        logoImg.src = newLogo;
        logoImg.onload = function() {
          logoImg.style.opacity = "1";
        };
      }, 160);
    }
  }
  
  dots.forEach(function(dot, index) {
    dot.classList.toggle("active", index === activeIndex);
  });
}

function initLangSwitcher() {
  const switcher = $("#langSwitcher");
  if (!switcher) return;
  
  switcher.addEventListener("click", function(e) {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    
    const lang = btn.dataset.lang;
    if (!lang) return;
    
    $$(".lang-btn").forEach(function(b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    showToast("Language: " + lang.toUpperCase());
  });
}

function initTradeTabs() {
  const tabs = $$(".gallery-tab");
  if (!tabs.length) return;
  
  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      tabs.forEach(function(t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      
      $$(".gallery-content").forEach(function(content) {
        content.classList.remove("active");
      });
      
      const targetId = tab.dataset.target;
      const target = $("#" + targetId);
      if (target) {
        target.classList.add("active");
      }
    });
  });
}

// Modais
function openStatModal(statKey) {
  const data = statDetailsData[statKey];
  if (!data) return;
  
  const overlay = $("#statModalOverlay");
  const icon = $("#statModalIcon");
  const title = $("#statModalTitle");
  const story = $("#statModalStory");
  const value = $("#statModalValue");
  const details = $("#statModalDetails");
  
  if (!overlay) return;
  
  icon.className = "fas " + data.icon;
  title.textContent = data.title;
  story.textContent = data.story;
  value.textContent = data.value;
  details.innerHTML = data.details.map(function(item) {
    return "<li>" + item + "</li>";
  }).join("");
  
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeStatModal() {
  const overlay = $("#statModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function openStrategyModal(id) {
  const data = strategyDetailsData[id];
  if (!data) return;
  
  const overlay = $("#strategyDetailOverlay");
  const icon = $("#strategyDetailIcon");
  const title = $("#strategyDetailTitle");
  const subtitle = $("#strategyDetailSubtitle");
  const body = $("#strategyDetailBody");
  
  if (!overlay) return;
  
  icon.className = "fas " + data.icon;
  title.textContent = data.title;
  subtitle.textContent = data.subtitle;
  body.innerHTML = data.sections.map(function(section) {
    return '<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ' + 
           section.title + '</h4><ul>' + 
           section.items.map(function(item) {
             return "<li>" + item + "</li>";
           }).join("") + 
           "</ul></div>";
  }).join("");
  
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeStrategyModal() {
  const overlay = $("#strategyDetailOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Galerias de projetos
function initProjectGalleries() {
  $$(".project-card[data-gallery]").forEach(setupCardAutoSlide);
}

function setupCardAutoSlide(card) {
  const main = card.querySelector(".gallery-main");
  if (!main) return;
  
  let images = [];
  const dataAttr = card.getAttribute("data-images") || "";
  
  if (dataAttr.trim().length) {
    images = dataAttr.split(",").map(function(s) {
      return s.trim();
    }).filter(Boolean);
  } else {
    const img = main.querySelector("img");
    if (img && img.src) {
      images = [img.src];
    }
  }
  
  if (!images.length) return;
  
  const imgEl = main.querySelector("img");
  if (!imgEl) return;
  
  const state = {
    images: images,
    idx: 0,
    timer: null,
    interval: 2500,
    imgEl: imgEl,
    paused: false
  };
  
  CardSlides.set(card, state);
  
  const dotsContainer = document.createElement("div");
  dotsContainer.className = "gallery-dots";
  images.forEach(function(_, idx) {
    const dot = document.createElement("div");
    dot.className = "gallery-dot" + (idx === 0 ? " active" : "");
    dotsContainer.appendChild(dot);
  });
  
  const gallery = card.querySelector(".project-gallery");
  if (gallery) {
    gallery.appendChild(dotsContainer);
  }
  
  function nextSlide() {
    if (state.paused || state.images.length <= 1) return;
    state.idx = (state.idx + 1) % state.images.length;
    imgEl.style.opacity = "0";
    setTimeout(function() {
      imgEl.src = state.images[state.idx];
      imgEl.onload = function() {
        imgEl.style.opacity = "1";
      };
      const dots = card.querySelectorAll(".gallery-dot");
      dots.forEach(function(dot, idx) {
        dot.classList.toggle("active", idx === state.idx);
      });
    }, 160);
  }
  
  function start() {
    stop();
    if (state.images.length > 1) {
      state.timer = setInterval(nextSlide, state.interval);
    }
  }
  
  function stop() {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }
  
  card.addEventListener("mouseenter", function() {
    state.paused = true;
  });
  
  card.addEventListener("mouseleave", function() {
    state.paused = false;
  });
  
  start();
}

function openProjectGallery(element) {
  const card = element.closest(".project-card");
  if (!card) return;
  
  const dataAttr = card.getAttribute("data-images") || "";
  if (!dataAttr.trim().length) return;
  
  const images = dataAttr.split(",").map(function(s) {
    return s.trim();
  }).filter(Boolean);
  
  if (!images.length) return;
  
  PG_state.currentProjectImages = images;
  PG_state.currentProjectIndex = 0;
  
  const modal = $("#projectGalleryModal");
  const slider = $("#gallerySlider");
  const dots = $("#galleryDots");
  
  if (!modal || !slider || !dots) return;
  
  slider.innerHTML = "";
  dots.innerHTML = "";
  
  images.forEach(function(src, idx) {
    const slide = document.createElement("div");
    slide.className = "gallery-slide" + (idx === 0 ? " active" : "");
    const img = document.createElement("img");
    img.alt = "Project image " + (idx + 1);
    img.src = src;
    slide.appendChild(img);
    slider.appendChild(slide);
    
    const dot = document.createElement("div");
    dot.className = "gallery-dot" + (idx === 0 ? " active" : "");
    dot.onclick = function() {
      goToProjectSlide(idx);
    };
    dots.appendChild(dot);
  });
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeProjectSlide(direction) {
  if (!PG_state.currentProjectImages.length) return;
  
  const slides = $$(".gallery-slide");
  const dots = $$("#galleryDots .gallery-dot");
  
  slides[PG_state.currentProjectIndex]?.classList.remove("active");
  dots[PG_state.currentProjectIndex]?.classList.remove("active");
  
  PG_state.currentProjectIndex = (PG_state.currentProjectIndex + direction + PG_state.currentProjectImages.length) % PG_state.currentProjectImages.length;
  
  slides[PG_state.currentProjectIndex]?.classList.add("active");
  dots[PG_state.currentProjectIndex]?.classList.add("active");
}

function goToProjectSlide(index) {
  if (!PG_state.currentProjectImages.length) return;
  
  const slides = $$(".gallery-slide");
  const dots = $$("#galleryDots .gallery-dot");
  
  slides[PG_state.currentProjectIndex]?.classList.remove("active");
  dots[PG_state.currentProjectIndex]?.classList.remove("active");
  
  PG_state.currentProjectIndex = index;
  
  slides[PG_state.currentProjectIndex]?.classList.add("active");
  dots[PG_state.currentProjectIndex]?.classList.add("active");
}

function closeProjectGallery() {
  const modal = $("#projectGalleryModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Lightbox
function openLightbox(element) {
  const lightbox = $("#lightbox");
  const img = $("#lightbox-img");
  
  if (!lightbox || !img) return;
  
  let src = "";
  if (element && element.querySelector) {
    const thumb = element.querySelector("img");
    if (thumb) {
      src = thumb.src;
    }
  }
  
  if (src) {
    img.src = src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const lightbox = $("#lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Event listeners globais
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeStatModal();
    closeStrategyModal();
    closeProjectGallery();
    closeLightbox();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("Inicializando portfolio...");
  initLoading();
  initNavbarScroll();
  initScrollAnimations();
  initParticles();
  initSmoothAnchors();
  initLangSwitcher();
  initTradeTabs();
  initTimelineSpy();
  initProjectGalleries();
  console.log("Sistema inicializado");
});

// Exportar funções globais
window.openStatModal = openStatModal;
window.closeStatModal = closeStatModal;
window.openStrategyModal = openStrategyModal;
window.closeStrategyModal = closeStrategyModal;
window.openProjectGallery = openProjectGallery;
window.closeProjectGallery = closeProjectGallery;
window.changeProjectSlide = changeProjectSlide;
window.goToProjectSlide = goToProjectSlide;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.scrollToTop = scrollToTop;
