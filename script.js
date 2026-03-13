/* ============================================
   Luciano Rodrigues Portfolio - Optimized JS
   Modern, Clean, Efficient, Accessible
   ============================================ */

// I18N Data
const I18N = {
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', tradeshows: 'Trade Shows', certs: 'Certifications', contact: 'Contact' },
    hero: {
      title: 'Luciano Rodrigues de Souza',
      subtitle: 'AI-Driven Procurement & Operations Leader · Strategic Transformation',
      desc: 'I connect governance, technical rigor, and AI to deliver measurable outcomes: transparent tenders, reliable partners, and resilient operations across Europe, LATAM, and Asia.',
      badges: { top: 'Top Performer 2025', middle: 'AI Specialist', bottom: 'Trusted Leader' },
      stats: {
        savings: 'Cumulative Savings', savings_note: 'Across multi-category negotiations',
        rfps: 'RFP/RFQ Led', rfps_note: 'With technical annexes & weighted scoring',
        projects: 'Project Portfolio', projects_note: 'From concept to audited mass production',
        regions: 'Countries', regions_note: 'Europe · LATAM · Asia'
      }
    },
    cta: { connect: "Let's Connect", journey: 'View Journey' },
    about: {
      title: 'Leadership Philosophy',
      subtitle: 'From LATAM operations to global procurement strategy',
      heading: 'Transformation Through Collaboration',
      body: {
        1: 'I design procurement systems that scale: from RFI/RFP playbooks and BidMaps to governance, audits, and supplier development. The result is speed with control — faster decisions, lower risk, and clearer accountability.',
        2: 'My leadership style blends cross-functional facilitation (Engineering, ESG, Legal, Finance, Operations) with data and AI. I focus on three pillars: clarity of requirements, market transparency, and measurable outcomes.'
      },
      philosophy: '"I don't just optimize supply chains — I build cross-functional coalitions that transform how organizations think about procurement."',
      points: {
        1: 'Process Architecture: tender kits, weighted scoring, compliance-by-design',
        2: 'AI & Analytics: smart RFPs, proposal parsing, forecasting, inventory optimization',
        3: 'Supplier Strategy: audits, capability mapping, dual-sourcing & continuity',
        4: 'Stakeholder Trust: transparent dashboards, SLAs, and post-award governance'
      },
      lang: { pt: 'Portuguese (Native)', en: 'English (Native)', es: 'Spanish (Professional)', fr: 'French (Professional)' }
    },
    timeline: { title: 'Professional Journey', subtitle: '15+ years of progressive leadership' },
    projects: { title: 'Featured Projects', subtitle: 'Product development excellence and AI innovation portfolio' },
    tradeshows: {
      title: 'Trade Shows & Global Exhibitions',
      subtitle: 'Exhibitor and strategic buyer across worldwide markets',
      strategy: {
        title: 'Trade Show Strategy & Execution',
        desc: 'Beyond the booth: I co-create with Marketing the end-to-end journey — stand design, narrative & assets; orchestrate meetings, capture qualified leads, and run the post-fair pipeline to real outcomes. In parallel, I negotiate with current and new partners, benchmark technologies, and audit factories for capability & compliance.',
        pillars: {
          1: 'Stand Design & Merchandising',
          2: 'Meetings Orchestration & Lead Capture',
          3: 'Negotiations & Partnering',
          4: 'Tech Discovery & Benchmark',
          5: 'Factory Audits & Capability Mapping',
          6: 'Post-Fair Pipeline, ROI & Governance'
        }
      }
    },
    certs: { title: 'Certifications & Education', subtitle: 'Continuous learning in AI, Data Science, and Strategic Procurement' },
    vol: {
      title: 'Volunteering & Community Impact',
      subtitle: 'Giving back through education and mentorship',
      position: 'Mathematics & English Instructor',
      school: 'Gadsden State Community College',
      desc: 'Mathematics and English tutoring for students in need of academic support. Developed personalized learning plans, mentored diverse student populations, and contributed to community education initiatives. This experience strengthened my communication skills, patience, and ability to explain complex concepts — skills I now apply in procurement training and cross-functional team leadership.'
    },
    github: {
      title: 'GitHub & Data Science Projects',
      subtitle: 'Transforming procurement through code, algorithms, and data-driven insights',
      tagline: 'Python enthusiast leveraging data science to revolutionize procurement decision-making.',
      metrics: { accuracy: 'Prediction Accuracy', cost: 'Cost Reduction', stockout: 'Stockout Reduction' },
      cta: 'View All Repositories'
    },
    contact: { title: "Let's Connect", subtitle: 'Ready to transform your procurement strategy?', email: 'Email', location: 'Location' }
  },
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', projects: 'Projetos', tradeshows: 'Feiras', certs: 'Certificações', contact: 'Contato' },
    hero: {
      title: 'Luciano Rodrigues de Souza',
      subtitle: 'Líder em Procurement & Operações com IA · Transformação Estratégica',
      desc: 'Conecto governança, rigor técnico e IA para entregar resultados mensuráveis: licitações transparentes, parceiros confiáveis e operações resilientes na Europa, LATAM e Ásia.',
      badges: { top: 'Top Performer 2025', middle: 'Especialista em IA', bottom: 'Líder Confiável' },
      stats: {
        savings: 'Economia Acumulada', savings_note: 'Em negociações multi-categoria',
        rfps: 'RFP/RFQ Liderados', rfps_note: 'Com anexos técnicos e scoring ponderado',
        projects: 'Portfólio de Projetos', projects_note: 'Do conceito à produção auditada',
        regions: 'Países', regions_note: 'Europa · LATAM · Ásia'
      }
    },
    cta: { connect: 'Vamos Conversar', journey: 'Ver Trajetória' },
    about: {
      title: 'Filosofia de Liderança',
      subtitle: 'Das operações LATAM à estratégia global de procurement',
      heading: 'Transformação Através da Colaboração',
      body: {
        1: 'Desenho sistemas de procurement escaláveis: desde playbooks de RFI/RFP e BidMaps até governança, auditorias e desenvolvimento de fornecedores. O resultado é velocidade com controle — decisões mais rápidas, menor risco e accountability clara.',
        2: 'Meu estilo de liderança combina facilitação cross-funcional (Engenharia, ESG, Jurídico, Finanças, Operações) com dados e IA. Foco em três pilares: clareza de requisitos, transparência de mercado e resultados mensuráveis.'
      },
      philosophy: '"Não apenas otimizo cadeias de suprimento — construo coalizões cross-funcionais que transformam como as organizações pensam sobre procurement."',
      points: {
        1: 'Arquitetura de Processos: tender kits, scoring ponderado, compliance-by-design',
        2: 'IA & Analytics: RFPs inteligentes, parsing de propostas, forecasting, otimização de estoque',
        3: 'Estratégia de Fornecedores: auditorias, capability mapping, dual-sourcing & continuidade',
        4: 'Confiança de Stakeholders: dashboards transparentes, SLAs e governança pós-award'
      },
      lang: { pt: 'Português (Nativo)', en: 'Inglês (Nativo)', es: 'Espanhol (Profissional)', fr: 'Francês (Profissional)' }
    },
    timeline: { title: 'Trajetória Profissional', subtitle: '15+ anos de liderança progressiva' },
    projects: { title: 'Projetos em Destaque', subtitle: 'Excelência em desenvolvimento de produto e inovação com IA' },
    tradeshows: {
      title: 'Feiras & Exposições Globais',
      subtitle: 'Expositor e comprador estratégico em mercados mundiais',
      strategy: {
        title: 'Estratégia & Execução de Feiras',
        desc: 'Além do estande: co-crio com o Marketing a jornada end-to-end — design do stand, narrativa e materiais; orquestro reuniões, capturo leads qualificados e gerencio o pipeline pós-feira para resultados reais. Em paralelo, negocio com parceiros atuais e novos, faço benchmark de tecnologias e audito fábricas para capacidade e compliance.',
        pillars: {
          1: 'Design de Stand & Merchandising',
          2: 'Orquestração de Reuniões & Captura de Leads',
          3: 'Negociações & Parcerias',
          4: 'Descoberta Tecnológica & Benchmark',
          5: 'Auditorias de Fábrica & Capability Mapping',
          6: 'Pipeline Pós-Feira, ROI & Governança'
        }
      }
    },
    certs: { title: 'Certificações & Educação', subtitle: 'Aprendizado contínuo em IA, Data Science e Procurement Estratégico' },
    vol: {
      title: 'Voluntariado & Impacto Comunitário',
      subtitle: 'Retribuindo através da educação e mentoria',
      position: 'Instrutor de Matemática & Inglês',
      school: 'Gadsden State Community College',
      desc: 'Tutoria de Matemática e Inglês para estudantes necessitando suporte acadêmico. Desenvolvi planos de aprendizado personalizados, mentorei populações diversas de estudantes e contribuí com iniciativas de educação comunitária. Esta experiência fortaleceu minhas habilidades de comunicação, paciência e capacidade de explicar conceitos complexos — habilidades que aplico hoje em treinamento de procurement e liderança de equipes cross-funcionais.'
    },
    github: {
      title: 'Projetos GitHub & Data Science',
      subtitle: 'Transformando procurement através de código, algoritmos e insights data-driven',
      tagline: 'Entusiasta de Python usando data science para revolucionar a tomada de decisão em procurement.',
      metrics: { accuracy: 'Acurácia de Previsão', cost: 'Redução de Custo', stockout: 'Redução de Ruptura' },
      cta: 'Ver Todos os Repositórios'
    },
    contact: { title: 'Vamos Conversar', subtitle: 'Pronto para transformar sua estratégia de procurement?', email: 'Email', location: 'Localização' }
  }
};

// Data Structures
const STAT_DETAILS = {
  savings: {
    icon: 'fa-piggy-bank',
    title: 'Cumulative Savings Delivered',
    value: '€1M+',
    details: [
      'Multi-category strategic sourcing initiatives across direct and indirect spend',
      'Negotiated favorable payment terms (60–90 days) improving cash flow',
      'Implemented should-cost modeling identifying 15–25% cost reduction opportunities',
      'Consolidated supplier base from 200+ to 80 key partners',
      'Zero-based budgeting approach for CAPEX projects saving 20% on average'
    ]
  },
  rfps: {
    icon: 'fa-file-contract',
    title: 'Strategic Tenders Led',
    value: '120+',
    details: [
      'End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)',
      'Weighted scoring matrices balancing technical (40%), commercial (35%), and ESG (25%) criteria',
      'E-procurement platform integration with full audit trails',
      'Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)',
      'Average cycle time reduction from 45 to 28 days while improving compliance'
    ]
  },
  projects: {
    icon: 'fa-project-diagram',
    title: 'Project Portfolio Value',
    value: '€10M+',
    details: [
      'New product development from concept to mass production',
      'Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)',
      'Factory audits and supplier capability assessments across Asia',
      'Quality system implementations (ISO 9001, compliance frameworks)',
      'Cross-border logistics optimization and customs compliance'
    ]
  },
  regions: {
    icon: 'fa-globe',
    title: 'Global Operations Coverage',
    value: '20+',
    details: [
      'Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France',
      'LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay',
      'Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea',
      'Multi-cultural negotiation experience and local market knowledge',
      'Time zone coordination for 24/7 project execution'
    ]
  }
};

const STRATEGY_DETAILS = {
  1: {
    title: 'Stand Design & Merchandising',
    subtitle: 'Creating immersive brand experiences',
    icon: 'fa-drafting-compass',
    sections: [
      {
        title: 'Strategic Approach',
        items: [
          'Co-created booth concept with Marketing aligning to brand positioning',
          'Traffic flow optimization for maximum visitor engagement',
          'Product display hierarchy highlighting hero SKUs and new launches',
          'Lighting and visual merchandising for premium brand perception',
          'Interactive demo stations for hands-on product experience'
        ]
      },
      {
        title: 'Technical Execution',
        items: [
          '3D renderings and mockups approved 60 days prior to event',
          'Modular stand components for reusability across fairs',
          'Digital signage integration with real-time product catalogs',
          'Storage and logistics planning for 500+ SKU displays',
          'On-site supervision during build-up and dismantling'
        ]
      }
    ]
  },
  2: {
    title: 'Meetings Orchestration & Lead Capture',
    subtitle: 'Maximizing ROI through structured engagement',
    icon: 'fa-calendar-check',
    sections: [
      {
        title: 'Pre-Event Planning',
        items: [
          'Target list development: 200+ qualified prospects per fair',
          'Meeting scheduling system with automated reminders',
          'Sales team briefing with product knowledge sessions',
          'Customized pitch decks by customer segment',
          'Lead scoring criteria defined (budget, timeline, authority)'
        ]
      },
      {
        title: 'On-Site Execution',
        items: [
          'Structured 30-minute meeting slots with clear agendas',
          'Real-time lead capture via CRM mobile app',
          'Immediate follow-up emails sent within 4 hours',
          'Meeting notes standardized for pipeline visibility',
          'Daily team huddles to adjust strategy based on feedback'
        ]
      }
    ]
  },
  3: {
    title: 'Negotiations & Partnering',
    subtitle: 'Building strategic supplier relationships',
    icon: 'fa-handshake-angle',
    sections: [
      {
        title: 'Partnership Development',
        items: [
          'Initial qualification: financial stability, capacity, certifications',
          'Term sheet negotiations: MOQ, payment terms, exclusivity clauses',
          'Pricing framework with volume breaks and annual rebates',
          'Quality agreements defining defect rates and corrective actions',
          'IP protection and NDA frameworks for new product development'
        ]
      },
      {
        title: 'Contractual Framework',
        items: [
          'Master Service Agreements (MSA) with standardized terms',
          'Statement of Work (SoW) templates for project-based work',
          'Service Level Agreements (SLA) with penalty/incentive clauses',
          'Force majeure and business continuity provisions',
          'Exit clauses and knowledge transfer obligations'
        ]
      }
    ]
  },
  4: {
    title: 'Tech Discovery & Benchmark',
    subtitle: 'Staying ahead of market innovation',
    icon: 'fa-microchip',
    sections: [
      {
        title: 'Market Intelligence',
        items: [
          'Technology scouting across 50+ supplier booths per fair',
          'Competitive product teardowns and feature comparison',
          'Cost benchmarking for similar specifications',
          'Innovation trend mapping (IoT, sustainability, smart features)',
          'Patent landscape analysis for freedom to operate'
        ]
      },
      {
        title: 'Technical Evaluation',
        items: [
          'Sample collection for lab testing and validation',
          'Engineering team consultations on technical feasibility',
          'Prototype review and DFM feedback',
          'Certification requirements assessment (CE, FCC, ANATEL)',
          'Roadmap alignment with supplier R&D investments'
        ]
      }
    ]
  },
  5: {
    title: 'Factory Audits & Capability Mapping',
    subtitle: 'Ensuring operational excellence',
    icon: 'fa-industry',
    sections: [
      {
        title: 'Audit Framework',
        items: [
          'ISO 9001 quality management system verification',
          'Production capacity analysis (lines, shifts, utilization)',
          'Equipment maintenance records and calibration certificates',
          'Workforce skill assessment and training programs',
          'Environmental compliance and waste management practices'
        ]
      },
      {
        title: 'Risk Assessment',
        items: [
          'Financial health check (credit reports, payment history)',
          'Supply chain resilience (dual sourcing, buffer stock)',
          'Social compliance audits (SA8000, BSCI standards)',
          'Cybersecurity protocols for data-sharing partnerships',
          'Business continuity planning and disaster recovery'
        ]
      }
    ]
  },
  6: {
    title: 'Post-Fair Pipeline, ROI & Governance',
    subtitle: 'Converting leads into revenue',
    icon: 'fa-chart-line',
    sections: [
      {
        title: 'Pipeline Management',
        items: [
          'Lead categorization: Hot (immediate), Warm (3 months), Cold (nurture)',
          'CRM integration with automated follow-up sequences',
          'Opportunity value estimation and win probability scoring',
          'Cross-functional handover to regional sales teams',
          'Weekly pipeline review meetings for first 30 days'
        ]
      },
      {
        title: 'Performance Metrics',
        items: [
          'Cost per lead calculation (stand cost ÷ qualified leads)',
          'Conversion rate tracking from lead to order',
          'Average deal size comparison vs. non-fair customers',
          'Time-to-close analysis identifying bottlenecks',
          'Annual ROI reporting for marketing budget justification'
        ]
      }
    ]
  }
};

const TIMELINE_DATA = [
  {
    id: 'details',
    logo: 'Details_Symbol.jpg',
    date: '2024 – Present',
    level: 'Senior Level',
    title: 'Strategic Procurement & Operations Lead',
    company: 'Details Hospitality (Arrow Global Group)',
    description: 'Leading procurement transformation for luxury hospitality sector across Europe and LATAM. Implementing AI-driven sourcing strategies and supplier consolidation initiatives.',
    achievements: ['Reduced procurement cycle time by 35%', 'Implemented e-procurement platform', 'Established strategic supplier partnerships'],
    skills: ['Strategic Sourcing', 'AI Implementation', 'Supplier Management', 'Cross-border Operations']
  },
  {
    id: 'skn-global',
    logo: 'SKN_Global.jpg',
    date: '2019 – 2024',
    level: 'Director Level',
    title: 'Global Procurement Director',
    company: 'SKN Global',
    description: 'Directed global procurement strategy across 20+ countries, managing €50M+ annual spend. Led digital transformation and sustainability initiatives.',
    achievements: ['Achieved €1.2M cumulative savings', 'Led 120+ RFPs with 95% compliance rate', 'Built supplier network across 3 continents'],
    skills: ['Global Strategy', 'Team Leadership', 'Digital Transformation', 'ESG Compliance']
  },
  {
    id: 'skn-europe',
    logo: 'SKN_Europe.jpg',
    date: '2015 – 2019',
    level: 'Manager Level',
    title: 'Procurement Manager – Europe',
    company: 'SKN Europe',
    description: 'Managed European procurement operations, focusing on licensed brands (Blaupunkt, Spear & Jackson) and new product development.',
    achievements: ['Launched 15+ licensed products', 'Established quality control frameworks', 'Optimized logistics across EU markets'],
    skills: ['Product Development', 'License Management', 'Quality Systems', 'EU Regulations']
  },
  {
    id: 'skn-brasil',
    logo: 'SKN_Brasil.jpg',
    date: '2009 – 2015',
    level: 'Growth Phase',
    title: 'Operations & Procurement Specialist',
    company: 'SKN Brasil',
    description: 'Started procurement career managing local operations, supplier relationships, and import/export compliance for LATAM markets.',
    achievements: ['Built supplier base from scratch', 'Implemented import compliance system', 'Supported 300% revenue growth'],
    skills: ['Local Sourcing', 'Import/Export', 'Compliance', 'Operations Management']
  }
];

const PROJECTS_DATA = [
  {
    id: 'blaupunkt',
    title: 'Blaupunkt Licensed Portfolio',
    description: 'Full product line development and sourcing for iconic German audio brand across consumer electronics.',
    images: ['blaupunkt_1.jpg', 'blaupunkt_2.jpg', 'blaupunkt_3.jpg'],
    highlights: '15+ SKUs launched · €3M revenue · Asia-EU supply chain',
    tags: ['Licensing', 'Consumer Electronics', 'Global Sourcing']
  },
  {
    id: 'ford',
    title: 'Ford Lighting Systems',
    description: 'Automotive lighting product development and manufacturing partnership with Ford Motor Company.',
    images: ['ford_1.jpg', 'ford_2.jpg'],
    highlights: 'OEM certified · IATF 16949 compliance · 500K units/year',
    tags: ['Automotive', 'OEM', 'Quality Systems']
  },
  {
    id: 'ai-forecasting',
    title: 'AI Demand Forecasting',
    description: 'Machine learning model for inventory optimization and demand prediction using Python and TensorFlow.',
    images: ['ai_1.jpg', 'ai_2.jpg'],
    highlights: '40% stockout reduction · 95% accuracy · Python/ML',
    tags: ['AI/ML', 'Python', 'Data Science', 'Inventory Optimization']
  }
];

const CERTS_DATA = [
  {
    logo: 'usp_logo.png',
    title: 'MBA in Data Science & AI',
    institution: 'University of São Paulo (USP) / Einstein',
    date: '2024',
    description: 'Advanced program covering machine learning, deep learning, neural networks, and AI applications in business.',
    aiApplications: ['Predictive analytics for demand forecasting', 'NLP for contract analysis', 'Computer vision for quality control']
  },
  {
    logo: 'fiap_logo.png',
    title: 'AI for Business Leaders',
    institution: 'FIAP',
    date: '2023',
    description: 'Strategic AI implementation for business transformation and decision-making automation.',
    aiApplications: ['AI strategy framework', 'Automation roadmap', 'ROI measurement']
  },
  {
    logo: 'gadsden_logo.png',
    title: 'Associate Degree',
    institution: 'Gadsden State Community College',
    date: '1999-2001',
    description: 'Foundation in mathematics, English, and computer science with focus on analytical skills.',
    aiApplications: ['Statistical analysis foundation', 'Technical communication', 'Problem-solving methodology']
  }
];

const REPOS_DATA = [
  { name: 'procurement-ml', description: 'Machine learning models for procurement optimization' },
  { name: 'demand-forecasting', description: 'Time series forecasting with LSTM networks' },
  { name: 'supplier-scoring', description: 'Multi-criteria supplier evaluation system' },
  { name: 'rfp-automation', description: 'Automated RFP generation and analysis tools' }
];

// State Management
const state = {
  currentLang: 'en',
  currentSlide: 0,
  projectImages: [],
  autoSlideIntervals: new Map()
};

// DOM Utilities
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts = {}) => el?.addEventListener(evt, fn, opts);

// Loading Screen
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

// Navigation
function initNavbar() {
  const navbar = $('#navbar');
  const scrollTop = $('#scrollTop');

  let ticking = false;
  on(window, 'scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        navbar?.classList.toggle('scrolled', y > 50);
        scrollTop?.classList.toggle('visible', y > 600);
        updateTimelineSpy();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  on($('#scrollTop'), 'click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Smooth Anchors
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

// Language Switcher
function initLanguageSwitcher() {
  const switcher = $('#langSwitcher');
  if (!switcher) return;

  on(switcher, 'click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;

    const lang = btn.dataset.lang;
    if (!lang || lang === state.currentLang) return;

    setLanguage(lang);
    $$('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
    showToast(`Language: ${lang.toUpperCase()}`);
  });

  // Initialize with stored or browser language
  const stored = localStorage.getItem('lang');
  const browser = navigator.language.slice(0, 2).toLowerCase();
  const initial = stored || (['en', 'pt', 'es', 'fr'].includes(browser) ? browser : 'en');
  setLanguage(initial);
  $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === initial));
}

function setLanguage(lang) {
  state.currentLang = lang;
  document.documentElement.lang = lang;
  const dict = I18N[lang] || I18N.en;

  $$('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n;
    const value = path.split('.').reduce((acc, key) => acc?.[key], dict);
    if (value !== undefined) el.textContent = value;
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

// Toast Notification
function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Stat Modals
function initStatModals() {
  $$('.stat-box').forEach(box => {
    on(box, 'click', () => {
      const key = box.dataset.stat;
      if (!STAT_DETAILS[key]) return;
      openStatModal(key);
    });
  });

  on($('#statModalClose'), 'click', closeStatModal);
  on($('#statModalOverlay'), 'click', (e) => {
    if (e.target === e.currentTarget) closeStatModal();
  });
}

function openStatModal(key) {
  const data = STAT_DETAILS[key];
  const overlay = $('#statModalOverlay');
  const icon = $('#statModalIcon');
  const title = $('#statModalTitle');
  const value = $('#statModalValue');
  const details = $('#statModalDetails');

  if (!overlay || !data) return;

  icon.className = `fas ${data.icon}`;
  title.textContent = data.title;
  value.textContent = data.value;
  details.innerHTML = data.details.map(item => `<li>${item}</li>`).join('');

  overlay.hidden = false;
  // Trigger reflow
  overlay.offsetHeight;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStatModal() {
  const overlay = $('#statModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }, 250);
}

// Strategy Modals
function initStrategyModals() {
  $$('.strategy-item').forEach(item => {
    on(item, 'click', () => {
      const num = item.dataset.strategy;
      if (!STRATEGY_DETAILS[num]) return;
      openStrategyModal(num);
    });
  });

  on($('#strategyModalClose'), 'click', closeStrategyModal);
  on($('#strategyModalOverlay'), 'click', (e) => {
    if (e.target === e.currentTarget) closeStrategyModal();
  });
}

function openStrategyModal(num) {
  const data = STRATEGY_DETAILS[num];
  const overlay = $('#strategyModalOverlay');
  const icon = $('#strategyModalIcon');
  const title = $('#strategyModalTitle');
  const subtitle = $('#strategyModalSubtitle');
  const body = $('#strategyModalBody');

  if (!overlay || !data) return;

  icon.className = `fas ${data.icon}`;
  title.textContent = data.title;
  subtitle.textContent = data.subtitle;

  body.innerHTML = data.sections.map(section => `
    <div class="strategy-section">
      <h4><i class="fas fa-chevron-right"></i> ${section.title}</h4>
      <ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `).join('');

  overlay.hidden = false;
  overlay.offsetHeight;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStrategyModal() {
  const overlay = $('#strategyModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }, 250);
}

// Project Gallery Modal
function initProjectGallery() {
  on($('#projectModalClose'), 'click', closeProjectModal);
  on($('#projectModalOverlay'), 'click', (e) => {
    if (e.target === e.currentTarget) closeProjectModal();
  });
  on($('#sliderPrev'), 'click', () => changeSlide(-1));
  on($('#sliderNext'), 'click', () => changeSlide(1));

  // Keyboard navigation
  on(document, 'keydown', (e) => {
    if ($('#projectModalOverlay')?.classList.contains('active')) {
      if (e.key === 'ArrowLeft') changeSlide(-1);
      if (e.key === 'ArrowRight') changeSlide(1);
      if (e.key === 'Escape') closeProjectModal();
    }
    if (e.key === 'Escape') {
      closeStatModal();
      closeStrategyModal();
    }
  });
}

function openProjectModal(images, startIndex = 0) {
  state.projectImages = images;
  state.currentSlide = startIndex;

  const overlay = $('#projectModalOverlay');
  const container = $('#sliderContainer');
  const dotsContainer = $('#sliderDots');

  if (!overlay || !container) return;

  container.innerHTML = images.map((src, i) => `
    <div class="slider-slide ${i === startIndex ? 'active' : ''}">
      <img src="${src}" alt="Project image ${i + 1}" loading="lazy">
    </div>
  `).join('');

  dotsContainer.innerHTML = images.map((_, i) => `
    <div class="slider-dot ${i === startIndex ? 'active' : ''}" data-index="${i}"></div>
  `).join('');

  $$('.slider-dot').forEach((dot, i) => {
    on(dot, 'click', () => goToSlide(i));
  });

  overlay.hidden = false;
  overlay.offsetHeight;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeSlide(dir) {
  if (!state.projectImages.length) return;
  const newIndex = (state.currentSlide + dir + state.projectImages.length) % state.projectImages.length;
  goToSlide(newIndex);
}

function goToSlide(index) {
  const slides = $$('.slider-slide');
  const dots = $$('.slider-dot');

  slides[state.currentSlide]?.classList.remove('active');
  dots[state.currentSlide]?.classList.remove('active');

  state.currentSlide = index;

  slides[index]?.classList.add('active');
  dots[index]?.classList.add('active');
}

function closeProjectModal() {
  const overlay = $('#projectModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }, 250);
}

// Lightbox
function initLightbox() {
  on($('#lightboxClose'), 'click', closeLightbox);
  on($('#lightbox'), 'click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
}

function openLightbox(src) {
  const lightbox = $('#lightbox');
  const img = $('#lightboxImg');
  if (!lightbox || !img) return;

  img.src = src;
  lightbox.hidden = false;
  lightbox.offsetHeight;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = $('#lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('active');
  setTimeout(() => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }, 250);
}

// Timeline Rendering
function renderTimeline() {
  const container = $('#timelineItems');
  if (!container) return;

  container.innerHTML = TIMELINE_DATA.map((item, index) => `
    <div class="timeline-item ${index === 0 ? 'active' : ''}" data-logo="${item.logo}" data-index="${index}">
      <div class="timeline-date">
        <span class="date-range">${item.date}</span>
        <span class="date-level">${item.level}</span>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-company">
          <i class="fas fa-building"></i> ${item.company}
        </div>
        <p class="timeline-description">${item.description}</p>
        <div class="achievement-box">
          <strong>Key Achievements:</strong>
          <ul>${item.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
        <div class="skills-tags">
          ${item.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function updateTimelineSpy() {
  const items = $$('.timeline-item');
  const logoImg = $('#logo-img');
  const dots = $$('.indicator-dot');

  if (!items.length || !logoImg) return;

  const windowHeight = window.innerHeight;
  const centerLine = windowHeight * 0.5;

  let activeIndex = 0;

  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;

    if (itemCenter < centerLine + 100) {
      activeIndex = index;
    }

    item.classList.toggle('active', index === activeIndex);
  });

  const activeItem = items[activeIndex];
  if (activeItem) {
    const newLogo = activeItem.dataset.logo;
    if (newLogo && logoImg.src !== newLogo) {
      logoImg.style.opacity = '0';
      setTimeout(() => {
        logoImg.src = newLogo;
        logoImg.onload = () => { logoImg.style.opacity = '1'; };
      }, 150);
    }
  }

  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
}

// Projects Rendering
function renderProjects() {
  const grid = $('#projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS_DATA.map(project => `
    <div class="project-card" data-images="${project.images.join(',')}">
      <div class="project-gallery">
        <div class="gallery-main">
          <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
        </div>
        <div class="gallery-dots">
          ${project.images.map((_, i) => `<div class="gallery-dot ${i === 0 ? 'active' : ''}"></div>`).join('')}
        </div>
        <div class="gallery-overlay">
          <i class="fas fa-images"></i>
          <span>View Gallery</span>
        </div>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-highlights">${project.highlights}</div>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Setup interactions
  $$('.project-card').forEach(card => {
    const images = card.dataset.images?.split(',') || [];

    // Auto-slide
    if (images.length > 1) {
      let current = 0;
      const imgEl = card.querySelector('.gallery-main img');
      const dots = card.querySelectorAll('.gallery-dot');

      const interval = setInterval(() => {
        current = (current + 1) % images.length;
        if (imgEl) {
          imgEl.style.opacity = '0';
          setTimeout(() => {
            imgEl.src = images[current];
            imgEl.onload = () => { imgEl.style.opacity = '1'; };
          }, 150);
        }
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }, 3000);

      state.autoSlideIntervals.set(card, interval);

      on(card, 'mouseenter', () => clearInterval(interval));
    }

    // Open gallery on click
    on(card, 'click', () => openProjectModal(images));
  });
}

// Trade Show Tabs
function initTradeShowTabs() {
  const tabs = $$('.gallery-tab');
  const contents = $$('.gallery-content');

  tabs.forEach(tab => {
    on(tab, 'click', () => {
      const target = tab.dataset.target;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      contents.forEach(c => {
        c.classList.remove('active');
        c.hidden = c.id !== target;
      });
      $(`#${target}`)?.classList.add('active');
    });
  });
}

// Render Trade Show Galleries
function renderTradeShowGalleries() {
  const blaupunktData = [
    { src: 'blaupunkt_fair_1.jpg', title: 'IFA Berlin 2023', desc: 'Consumer Electronics Show' },
    { src: 'blaupunkt_fair_2.jpg', title: 'CES Las Vegas', desc: 'Global Tech Showcase' },
    { src: 'blaupunkt_fair_3.jpg', title: 'Hong Kong Electronics', desc: 'Asia Sourcing Fair' }
  ];

  const fordData = [
    { src: 'ford_fair_1.jpg', title: 'Automechanika', desc: 'Automotive Trade Fair' },
    { src: 'ford_fair_2.jpg', title: 'AAPEX Show', desc: 'Auto Parts Expo' }
  ];

  const renderGrid = (data, containerId) => {
    const container = $(`#${containerId}`);
    if (!container) return;

    container.innerHTML = data.map(item => `
      <div class="gallery-item" onclick="openLightbox('${item.src}')">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  };

  renderGrid(blaupunktData, 'blaupunktGrid');
  renderGrid(fordData, 'fordGrid');
}

// Render Certifications
function renderCertifications() {
  const grid = $('#certsGrid');
  if (!grid) return;

  grid.innerHTML = CERTS_DATA.map(cert => `
    <div class="cert-card">
      <div class="cert-header">
        <div class="cert-logo">
          <img src="${cert.logo}" alt="${cert.institution}" loading="lazy">
        </div>
        <div class="cert-title-group">
          <h4>${cert.title}</h4>
          <p class="cert-subtitle">${cert.institution}</p>
          <span class="cert-date"><i class="fas fa-calendar"></i> ${cert.date}</span>
        </div>
      </div>
      <p>${cert.description}</p>
      <div class="ai-application">
        <strong>AI Applications:</strong>
        <ul>${cert.aiApplications.map(app => `<li>${app}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');
}

// Render GitHub Repos
function renderGitHubRepos() {
  const list = $('#repoList');
  if (!list) return;

  list.innerHTML = REPOS_DATA.map(repo => `
    <div class="repo-item">
      <h4><i class="fab fa-python" style="color: var(--gold); margin-right: 8px;"></i> ${repo.name}</h4>
      <p>${repo.description}</p>
    </div>
  `).join('');
}

// Particles Animation
function initParticles() {
  const container = $('#particles');
  if (!container) return;

  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${3 + Math.random() * 4}px;
      height: ${3 + Math.random() * 4}px;
      background: var(--gold);
      border-radius: 50%;
      opacity: ${0.2 + Math.random() * 0.3};
      pointer-events: none;
      animation: float ${4 + Math.random() * 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(p);
  }
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  $$('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Initialize Everything
function init() {
  initLoading();
  initNavbar();
  initSmoothAnchors();
  initLanguageSwitcher();
  initStatModals();
  initStrategyModals();
  initProjectGallery();
  initLightbox();
  initTradeShowTabs();
  initParticles();
  initScrollAnimations();

  // Render dynamic content
  renderTimeline();
  renderProjects();
  renderTradeShowGalleries();
  renderCertifications();
  renderGitHubRepos();

  console.log('✅ Portfolio initialized successfully');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
