/* =========================================================
   Luciano Rodrigues — Portfolio (v5.fix full)
   Patches + base behaviors para cumprir os requisitos
   ========================================================= */

const PG_state = { images: [], index: 0, currentLang: 'en' };

/* -------------------------
   Helpers
-------------------------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

/* -------------------------
   I18N (apenas modais de stat)
-------------------------- */
const STAT_I18N = {
  en:{
    savings:{title:'Cumulative Savings Delivered',details:[
      'Multi-category strategic sourcing initiatives across direct and indirect spend',
      'Negotiated favorable payment terms (60-90 days) improving cash flow',
      'Implemented should-cost modeling identifying 15-25% cost reduction opportunities',
      'Consolidated supplier base from 200+ to 80 key partners',
      'Zero-based budgeting approach for CAPEX projects saving 20% on average'
    ]},
    rfps:{title:'Strategic Tenders Led',details:[
      'End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)',
      'Weighted scoring matrices balancing technical, commercial, and ESG criteria',
      'E-procurement platform integration with full audit trails',
      'Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)',
      'Cycle time reduction while improving compliance'
    ]},
    projects:{title:'Project Portfolio Value',details:[
      'New product development from concept to mass production',
      'Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)',
      'Factory audits and supplier capability assessments across Asia',
      'Quality system implementations and compliance frameworks',
      'Cross-border logistics optimization and customs compliance'
    ]},
    regions:{title:'Global Operations Coverage',details:[
      'Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France',
      'LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay',
      'Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea',
      'Multi-cultural negotiation experience and local market knowledge',
      'Time zone coordination for 24/7 project execution'
    ]}
  },
  pt:{
    savings:{title:'Poupança Acumulada',details:[
      'Sourcing estratégico multi‑categoria em compras diretas e indiretas',
      'Negociação de prazos de pagamento (60–90 dias) melhorando o cash‑flow',
      'Modelagem de “should‑cost” identificando 15–25% de redução',
      'Consolidação da base de fornecedores de 200+ para ~80 parceiros‑chave',
      'Orçamento base zero para CAPEX com ~20% de economia'
    ]},
    rfps:{title:'RFP/RFQ Conduzidos',details:[
      'Desenho fim‑a‑fim de RFI/RFP/RFQ com anexos técnicos (A1/A2)',
      'Matrizes de “weighted scoring” equilibrando técnico, comercial e ESG',
      'Integração com e‑procurement e trilhas de auditoria',
      'Comitês de avaliação multifuncionais',
      'Redução de lead‑time com melhoria de compliance'
    ]},
    projects:{title:'Valor do Portfólio de Projetos',details:[
      'Desenvolvimento de produto do conceito à produção em massa',
      'Lançamentos licenciados (Blaupunkt, Spear & Jackson, Pininfarina)',
      'Auditorias fabris e mapeamento de capacidades na Ásia',
      'Implementação de sistemas de qualidade e compliance',
      'Otimização logística e compliance aduaneiro'
    ]},
    regions:{title:'Cobertura Operacional Global',details:[
      'Europa: Portugal, Espanha, Alemanha, Reino Unido, Holanda, Itália, França',
      'LATAM: Brasil, Argentina, Chile, Colômbia, México, Peru, Uruguai',
      'Ásia: China, Hong Kong, Taiwan, Vietname, Índia, Coreia do Sul',
      'Negociação multicultural e conhecimento de mercados locais',
      'Coordenação de fusos para execução 24/7'
    ]}
  },
  es:{
    savings:{title:'Ahorro Acumulado',details:[
      'Sourcing estratégico multi‑categoría en gasto directo e indirecto',
      'Negociación de plazos de pago (60–90 días) mejorando el cash‑flow',
      'Modelado “should‑cost” identificando 15–25% de reducción',
      'Consolidación de la base de proveedores de 200+ a ~80 socios clave',
      'Presupuesto base cero en CAPEX con ~20% de ahorro'
    ]},
    rfps:{title:'Licitaciones Dirigidas',details:[
      'Diseño integral de RFI/RFP/RFQ con anexos técnicos (A1/A2)',
      'Matrices de puntuación ponderada equilibrando técnico, comercial y ESG',
      'Integración con e‑procurement y trazabilidad de auditoría',
      'Comités de evaluación multifuncionales',
      'Reducción de tiempos con mayor compliance'
    ]},
    projects:{title:'Valor del Portafolio de Proyectos',details:[
      'Desarrollo de producto del concepto a la producción masiva',
      'Lanzamientos licenciados (Blaupunkt, Spear & Jackson, Pininfarina)',
      'Auditorías de fábricas y evaluación de capacidades en Asia',
      'Implementación de sistemas de calidad y compliance',
      'Optimización logística y cumplimiento aduanero'
    ]},
    regions:{title:'Cobertura Operativa Global',details:[
      'Europa: Portugal, España, Alemania, Reino Unido, Países Bajos, Italia, Francia',
      'LATAM: Brasil, Argentina, Chile, Colombia, México, Perú, Uruguay',
      'Asia: China, Hong Kong, Taiwán, Vietnam, India, Corea del Sur',
      'Experiencia multicultural y conocimiento local',
      'Coordinación de zonas horarias para ejecución 24/7'
    ]}
  },
  fr:{
    savings:{title:'Économies Cumulées',details:[
      'Sourcing stratégique multi‑catégorie (direct/indirect)',
      'Négociation de délais de paiement (60–90 jours) améliorant la trésorerie',
      'Modèle “should‑cost” identifiant 15–25% de réduction',
      'Consolidation des fournisseurs de 200+ à ~80 partenaires clés',
      'Budget base zéro en CAPEX avec ~20% d’économie'
    ]},
    rfps:{title:'Appels d’offres dirigés',details:[
      'Processus RFI/RFP/RFQ de bout en bout avec annexes techniques (A1/A2)',
      'Matrice de scoring pondéré (technique, commercial, ESG)',
      'Intégration e‑procurement et traçabilité',
      'Comités d’évaluation interfonctionnels',
      'Réduction des délais avec meilleur compliance'
    ]},
    projects:{title:'Valeur du Portefeuille de Projets',details:[
      'Développement produit du concept à la production de masse',
      'Lancements sous licence (Blaupunkt, Spear & Jackson, Pininfarina)',
      'Audits d’usines et cartographie des capacités en Asie',
      'Systèmes qualité et cadres de conformité',
      'Optimisation logistique transfrontalière et douanes'
    ]},
    regions:{title:'Couverture Opérationnelle Globale',details:[
      'Europe : Portugal, Espagne, Allemagne, Royaume‑Uni, Pays‑Bas, Italie, France',
      'LATAM : Brésil, Argentine, Chili, Colombie, Mexique, Pérou, Uruguay',
      'Asie : Chine, Hong Kong, Taïwan, Vietnam, Inde, Corée du Sud',
      'Négociations multiculturelles et connaissance locale',
      'Coordination des fuseaux pour exécution 24/7'
    ]}
  }
};

/* -------------------------
   Dados (stat & strategy)
-------------------------- */
const statDetailsData = {
  savings:{icon:'fa-piggy-bank', title:'Cumulative Savings Delivered', value:'€1M+', details:[
    'Multi-category strategic sourcing initiatives across direct and indirect spend',
    'Negotiated favorable payment terms (60-90 days) improving cash flow',
    'Implemented should-cost modeling identifying 15-25% cost reduction opportunities',
    'Consolidated supplier base from 200+ to 80 key partners',
    'Zero-based budgeting approach for CAPEX projects saving 20% on average'
  ]},
  rfps:{icon:'fa-file-contract', title:'Strategic Tenders Led', value:'120+', details:[
    'End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)',
    'Weighted scoring matrices balancing technical, commercial, and ESG criteria',
    'E-procurement platform integration with full audit trails',
    'Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)',
    'Cycle time reduction while improving compliance'
  ]},
  projects:{icon:'fa-project-diagram', title:'Project Portfolio Value', value:'€10M+', details:[
    'New product development from concept to mass production',
    'Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)',
    'Factory audits and supplier capability assessments across Asia',
    'Quality system implementations and compliance frameworks',
    'Cross-border logistics optimization and customs compliance'
  ]},
  regions:{icon:'fa-globe', title:'Global Operations Coverage', value:'20+', details:[
    'Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France',
    'LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay',
    'Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea',
    'Multi-cultural negotiation experience and local market knowledge',
    'Time zone coordination for 24/7 project execution'
  ]}
};

const strategyDetailsData = {
  1:{title:'Stand Design & Merchandising', subtitle:'Creating immersive brand experiences', icon:'fa-drafting-compass', sections:[
    {title:'Strategic Approach', items:[
      'Co-created booth concept with Marketing aligning to brand positioning',
      'Traffic flow optimization for maximum visitor engagement',
      'Product display hierarchy highlighting hero SKUs and new launches',
      'Lighting and visual merchandising for premium brand perception',
      'Interactive demo stations for hands-on product experience'
    ]},
    {title:'Technical Execution', items:[
      '3D renderings and mockups approved 60 days prior to event',
      'Modular stand components for reusability across fairs',
      'Digital signage integration with real-time product catalogs',
      'Storage and logistics planning for 500+ SKU displays',
      'On-site supervision during build-up and dismantling'
    ]}
  ]},
  2:{title:'Meetings Orchestration & Lead Capture', subtitle:'Maximizing ROI through structured engagement', icon:'fa-calendar-check', sections:[
    {title:'Pre-Event Planning', items:[
      'Target list development: 200+ qualified prospects per fair',
      'Meeting scheduling system with automated reminders',
      'Sales team briefing with product knowledge sessions',
      'Customized pitch decks by customer segment',
      'Lead scoring criteria defined (budget, timeline, authority)'
    ]},
    {title:'On-Site Execution', items:[
      'Structured 30-minute meeting slots with clear agendas',
      'Real-time lead capture via CRM mobile app',
      'Immediate follow-up emails sent within 4 hours',
      'Meeting notes standardized for pipeline visibility',
      'Daily team huddles to adjust strategy based on feedback'
    ]}
  ]},
  3:{title:'Negotiations & Partnering', subtitle:'Building strategic supplier relationships', icon:'fa-handshake-angle', sections:[
    {title:'Partnership Development', items:[
      'Initial qualification: financial stability, capacity, certifications',
      'Term sheet negotiations: MOQ, payment terms, exclusivity clauses',
      'Pricing framework with volume breaks and annual rebates',
      'Quality agreements defining defect rates and corrective actions',
      'IP protection and NDA frameworks for new product development'
    ]},
    {title:'Contractual Framework', items:[
      'Master Service Agreements (MSA) with standardized terms',
      'Statement of Work (SoW) templates for project-based work',
      'Service Level Agreements (SLA) with penalty/incentive clauses',
      'Force majeure and business continuity provisions',
      'Exit clauses and knowledge transfer obligations'
    ]}
  ]},
  4:{title:'Tech Discovery & Benchmark', subtitle:'Staying ahead of market innovation', icon:'fa-microchip', sections:[
    {title:'Market Intelligence', items:[
      'Technology scouting across 50+ supplier booths per fair',
      'Competitive product teardowns and feature comparison',
      'Cost benchmarking for similar specifications',
      'Innovation trend mapping (IoT, sustainability, smart features)',
      'Patent landscape analysis for freedom to operate'
    ]},
    {title:'Technical Evaluation', items:[
      'Sample collection for lab testing and validation',
      'Engineering team consultations on technical feasibility',
      'Prototype review and design for manufacturing (DFM) feedback',
      'Certification requirements assessment (CE, FCC, ANATEL)',
      'Roadmap alignment with supplier R&D investments'
    ]}
  ]},
  5:{title:'Factory Audits & Capability Mapping', subtitle:'Ensuring operational excellence', icon:'fa-industry', sections:[
    {title:'Audit Framework', items:[
      'ISO 9001 quality management system verification',
      'Production capacity analysis (lines, shifts, utilization)',
      'Equipment maintenance records and calibration certificates',
      'Workforce skill assessment and training programs',
      'Environmental compliance and waste management practices'
    ]},
    {title:'Risk Assessment', items:[
      'Financial health check (credit reports, payment history)',
      'Supply chain resilience (dual sourcing, buffer stock)',
      'Social compliance audits (SA8000, BSCI standards)',
      'Cybersecurity protocols for data-sharing partnerships',
      'Business continuity planning and disaster recovery'
    ]}
  ]},
  6:{title:'Post-Fair Pipeline, ROI & Governance', subtitle:'Converting leads into revenue', icon:'fa-chart-line', sections:[
    {title:'Pipeline Management', items:[
      'Lead categorization: Hot (immediate), Warm (3 months), Cold (nurture)',
      'CRM integration with automated follow-up sequences',
      'Opportunity value estimation and win probability scoring',
      'Cross-functional handover to regional sales teams',
      'Weekly pipeline review meetings for first 30 days'
    ]},
    {title:'Performance Metrics', items:[
      'Cost per lead calculation (stand cost ÷ qualified leads)',
      'Conversion rate tracking from lead to order',
      'Average deal size comparison vs. non-fair customers',
      'Time-to-close analysis identifying bottlenecks',
      'Annual ROI reporting for marketing budget justification'
    ]}
  ]}
};

/* -------------------------
   STAT MODAL (open/close + i18n)
-------------------------- */
function openStatModal(key){
  const data = statDetailsData[key];
  const overlay = $('#statModalOverlay');
  if(!data || !overlay) return;

  $('#statModalIcon').className = `fas ${data.icon}`;
  // i18n (título + detalhes)
  const lang = PG_state.currentLang || 'en';
  const tr = (STAT_I18N[lang] && STAT_I18N[lang][key]) || null;
  $('#statModalTitle').textContent = tr ? tr.title : data.title;
  $('#statModalValue').textContent = data.value;
  const list = tr ? tr.details : data.details;
  $('#statModalDetails').innerHTML = list.map(it=>`<li>${it}</li>`).join('');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeStatModal(){
  const overlay = $('#statModalOverlay');
  if(!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}
window.openStatModal = openStatModal;
window.closeStatModal = closeStatModal;

/* -------------------------
   STRATEGY MODAL
-------------------------- */
function openStrategyModal(num){
  const data = strategyDetailsData[num];
  const overlay = $('#strategyDetailOverlay');
  if(!data || !overlay) return;

  $('#strategyDetailIcon').className = `fas ${data.icon}`;
  $('#strategyDetailTitle').textContent = data.title;
  $('#strategyDetailSubtitle').textContent = data.subtitle;
  const body = data.sections.map(sec=>{
    const lis = sec.items.map(li=>`<li>${li}</li>`).join('');
    return `<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${lis}</ul></div>`;
  }).join('');
  $('#strategyDetailBody').innerHTML = body;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeStrategyModal(){
  const overlay = $('#strategyDetailOverlay');
  if(!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}
window.openStrategyModal = openStrategyModal;
window.closeStrategyModal = closeStrategyModal;

/* -------------------------
   PROJECT GALLERY (modal + dots)
-------------------------- */
function buildProjectSlides(images){
  const slider = $('#gallerySlider');
  const dots = $('#galleryDots');
  if(!slider || !dots) return;

  slider.innerHTML = '';
  dots.innerHTML = '';
  images.forEach((src,idx)=>{
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (idx===0?' active':'');
    const img = document.createElement('img');
    img.alt = `Project image ${idx+1}`;
    img.src = src;
    slide.appendChild(img);
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'gallery-dot' + (idx===0?' active':'');
    dot.addEventListener('click', ()=>goToProjectSlide(idx));
    dots.appendChild(dot);
  });
  PG_state.images = images.slice();
  PG_state.index = 0;
}
function openProjectGalleryFromCard(card){
  const modal = $('#projectGalleryModal');
  if(!modal) return;

  let images = [];
  const csv = (card.getAttribute('data-images')||'').trim();
  if(csv){ images = csv.split(',').map(s=>s.trim()).filter(Boolean); }
  else {
    const main = card.querySelector('.gallery-main img');
    if(main?.src) images = [main.src];
  }
  if(!images.length) return;

  buildProjectSlides(images);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function changeProjectSlide(dir){
  if(!PG_state.images.length) return;
  const slides = $$('.gallery-slide');
  const dots = $$('.gallery-dot');
  slides[PG_state.index]?.classList.remove('active');
  dots[PG_state.index]?.classList.remove('active');
  PG_state.index = (PG_state.index + dir + PG_state.images.length) % PG_state.images.length;
  slides[PG_state.index]?.classList.add('active');
  dots[PG_state.index]?.classList.add('active');
}
function goToProjectSlide(idx){
  if(!PG_state.images.length) return;
  const slides = $$('.gallery-slide');
  const dots = $$('.gallery-dot');
  slides[PG_state.index]?.classList.remove('active');
  dots[PG_state.index]?.classList.remove('active');
  PG_state.index = idx;
  slides[PG_state.index]?.classList.add('active');
  dots[PG_state.index]?.classList.add('active');
}
function closeProjectGallery(){
  const modal = $('#projectGalleryModal');
  if(!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}
window.openProjectGalleryFromCard = openProjectGalleryFromCard;
window.closeProjectGallery = closeProjectGallery;
window.changeProjectSlide = changeProjectSlide;
window.goToProjectSlide = goToProjectSlide;

/* Clique robusto no card (abre a galeria mesmo sem overlay) */
document.addEventListener('click',(ev)=>{
  const card = ev.target.closest('.project-card');
  if(!card) return;
  if(ev.target.closest('.gallery-main') || ev.target.closest('.gallery-overlay') || ev.target.closest('.project-image')){
    ev.preventDefault();
    openProjectGalleryFromCard(card);
  }
}, true);

/* -------------------------
   BLAUPUNKT — mapeamento estrito por nome
-------------------------- */
function collectCandidates(){
  const set = new Set();
  $$('img[src]').forEach(img=>set.add(img.getAttribute('src')));
  $$('[data-images]').forEach(el=>{
    (el.getAttribute('data-images')||'')
      .split(',')
      .map(s=>s.trim())
      .filter(Boolean)
      .forEach(s=>set.add(s));
  });
  return Array.from(set).map(s=>s.replace(/\s+/g,' ').trim());
}
function mapBlaupunkt(){
  const all = collectCandidates();
  const isFair   = s => /Illumi|HK_Fair|Booth|Fair/i.test(s);
  const tools    = all.filter(s => /Blaupunkt_.*Tools/i.test(s) && !isFair(s));      // tudo com "Tools" (exceto feiras)
  const power    = all.filter(s => /Power_Tools/i.test(s) && !isFair(s));            // somente Power_Tools
  const garden   = all.filter(s => /Garden_Tools/i.test(s) && !isFair(s));           // somente Garden_Tools

  const set = (key, arr)=>{
    const el = document.querySelector(`.project-card[data-gallery="${key}"]`);
    if(!el) return;
    const list = arr.length ? arr : tools; // fallback nunca vazio
    el.setAttribute('data-images', list.join(','));
  };

  set('blaupunkt-tools', tools);
  set('blaupunkt-power', power);
  set('blaupunkt-garden', garden);
}

/* -------------------------
   JOURNEY — sticky logo (desktop) + badge no mobile
-------------------------- */
function updateTimelineSpy(){
  const items = $$('.timeline-item'); if(!items.length) return;
  const logoImg = $('#logo-img'); if(!logoImg) return;

  let activeIndex = 0;
  const winH = innerHeight;
  const midTop = winH*0.62, midBottom = winH*0.38;

  items.forEach((item,idx)=>{
    const r = item.getBoundingClientRect();
    if(r.top < midTop && r.bottom > midBottom) activeIndex = idx;
  });

  const active = items[activeIndex];
  if(active){
    const newSrc = active.getAttribute('data-logo');
    const cur = logoImg.getAttribute('src');
    if(newSrc && newSrc!==cur){
      logoImg.style.opacity = '0';
      setTimeout(()=>{ logoImg.src = newSrc; logoImg.onload = ()=>{ logoImg.style.opacity='1'; }; }, 140);
    }
  }
}
function initTimelineSpy(){
  updateTimelineSpy();
  window.addEventListener('scroll', updateTimelineSpy, {passive:true});
}
function injectTimelineMobileBadges(){
  if(window.matchMedia && !window.matchMedia('(max-width: 768px)').matches) return;
  $$('.timeline-item').forEach(item=>{
    if(item.querySelector('.timeline-badge-mobile')) return;
    item.style.position = 'relative';
    const src = item.getAttribute('data-logo');
    if(!src) return;
    const badge = document.createElement('div');
    badge.className = 'timeline-badge-mobile';
    const im = document.createElement('img');
    im.src = src; im.alt = 'Company';
    badge.appendChild(im);
    item.appendChild(badge);
  });
}

/* -------------------------
   VOLUNTARIADO — “G” + hero centrado (reforço)
-------------------------- */
function swapVolunteerIconToG(){
  const icon = document.querySelector('.volunteer-icon');
  if(!icon) return;
  icon.innerHTML = '';
  const img = document.createElement('img');
  img.src = './gadsdenstatecommunitycollege_logo.jpg';
  img.alt = 'Gadsden logo';
  img.className = 'g-badge';
  icon.appendChild(img);
}
function fixVolunteerHero(){
  const hero = document.querySelector('.volunteer-hero-image');
  const img  = hero?.querySelector('img');
  if(!hero || !img) return;
  hero.style.maxWidth = '1000px';
  hero.style.margin   = '0 auto 3rem';
  hero.style.border   = '4px solid var(--gold)';
  hero.style.borderRadius = '24px';
  hero.style.overflow = 'hidden';
  img.style.display   = 'block';
  img.style.width     = '100%';
  img.style.height    = 'auto';
  img.style.objectFit = 'cover';
  img.style.objectPosition = 'center center';
}

/* -------------------------
   LANG switcher básico (opcional)
-------------------------- */
function translateAll(lang){
  PG_state.currentLang = lang;
  document.documentElement.lang = lang;
  // Aqui, mantemos apenas a tradução dos modais de stat via STAT_I18N (UI estática permanece)
}
function markActiveLang(lang){
  $$('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
}
function initLangSwitcher(){
  const sw = $('#langSwitcher'); if(!sw) return;
  on(sw,'click',(e)=>{
    const btn = e.target.closest('.lang-btn'); if(!btn) return;
    const lang = btn.dataset.lang || 'en';
    translateAll(lang); markActiveLang(lang);
    try{ localStorage.setItem('lang', lang); }catch(_){}
    const t = $('#toast'); if(t){ t.textContent = `Lang: ${lang.toUpperCase()}`; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 1600); }
  });
  try{
    const stored = localStorage.getItem('lang');
    const browser = (navigator.language||'en').slice(0,2).toLowerCase();
    const initial = stored || (['en','pt','es','fr'].includes(browser) ? browser : 'en');
    translateAll(initial); markActiveLang(initial);
  }catch(_){ translateAll('en'); markActiveLang('en'); }
}

/* -------------------------
   Misc (loading, scroll top, anchors)
-------------------------- */
function initLoading(){
  const el = $('#loading'); if(!el) return;
  window.addEventListener('load', ()=>{ setTimeout(()=>{ el.classList.add('hidden'); setTimeout(()=>el.remove(), 350); }, 800); });
}
function initNavbarScroll(){
  const navbar = $('#navbar'); const topBtn = $('#scrollTop');
  const fn = ()=>{
    const y = window.scrollY || document.documentElement.scrollTop;
    navbar?.classList.toggle('scrolled', y>50);
    topBtn?.classList.toggle('visible', y>600);
  };
  fn(); window.addEventListener('scroll', fn, {passive:true});
}
function scrollToTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
window.scrollToTop = scrollToTop;

/* -------------------------
   Bind strategy items sem inline
-------------------------- */
function initStrategyClick(){
  $$('.strategy-item[data-strategy]').forEach(el=>{
    on(el,'click',()=>{ const n = Number(el.getAttribute('data-strategy')); if(!isNaN(n)) openStrategyModal(n); });
  });
}

/* -------------------------
   Keyboard ESC global
-------------------------- */
document.addEventListener('keydown',(e)=>{
  if(e.key!=='Escape') return;
  try{ closeStatModal(); }catch(_){}
  try{ closeStrategyModal(); }catch(_){}
  const pg = $('#projectGalleryModal');
  if(pg?.classList.contains('active')) closeProjectGallery();
});

/* -------------------------
   DOM Ready
-------------------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  initLoading();
  initNavbarScroll();
  initLangSwitcher();
  initStrategyClick();
  initTimelineSpy();
  injectTimelineMobileBadges();
  mapBlaupunkt();
  swapVolunteerIconToG();
  fixVolunteerHero();

  // Ativa clique dos stat boxes (garantia)
  $$('.stat-box').forEach(b=>{
    b.style.cursor='pointer';
    on(b,'click',()=>{ const key=b.dataset.stat; if(key) openStatModal(key);});
  });

  // Fechar modais por clique fora
  on(document,'click',(e)=>{
    if(e.target?.id==='statModalOverlay') closeStatModal();
    if(e.target?.id==='strategyDetailOverlay') closeStrategyModal();
    if(e.target?.id==='projectGalleryModal') closeProjectGallery();
  });
});
