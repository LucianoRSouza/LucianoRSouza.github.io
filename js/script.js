// ==========================
// Luciano Rodrigues — Portfolio JS (corrigido e consolidado)
// ==========================
(function(){
  // ---------- I18N dictionary ----------
  window.I18N = {
    en:{
      nav:{about:'About',experience:'Experience',projects:'Projects',tradeshows:'Trade Shows',certs:'Certifications',contact:'Contact'},
      hero:{title:'Luciano Rodrigues de Souza',subtitle:'AI-Driven Procurement & Operations Leader · Strategic Transformation',desc:'I connect governance, technical rigor, and AI to deliver measurable outcomes: transparent tenders, reliable partners, and resilient operations across Europe, LATAM, and Asia.',badges:{top:'Top Performer 2025',middle:'AI Specialist',bottom:'Trusted Leader'},stats:{savings:'Cumulative Savings',savings_note:'Across multi-category negotiations',rfps:'RFP/RFQ Led',rfps_note:'With technical annexes & weighted scoring',projects:'Project Portfolio',projects_note:'From concept to audited mass production',regions:'Countries',regions_note:'Europe · LATAM · Asia'}},
      cta:{connect:"Let's Connect",journey:'View Journey'},
      about:{title:'Leadership Philosophy',subtitle:'From LATAM operations to global procurement strategy',heading:'Transformation Through Collaboration',body:{1:'I design procurement systems that scale: from RFI/RFP playbooks and BidMaps to governance, audits, and supplier development. The result is speed with control — faster decisions, lower risk, and clearer accountability.',2:'My leadership style blends cross-functional facilitation (Engineering, ESG, Legal, Finance, Operations) with data and AI. I focus on three pillars: clarity of requirements, market transparency, and measurable outcomes.'},philosophy:"I don't just optimize supply chains — I build cross-functional coalitions that transform how organizations think about procurement.",points:{1:'Process Architecture: tender kits, weighted scoring, compliance-by-design',2:'AI & Analytics: smart RFPs, proposal parsing, forecasting, inventory optimization',3:'Supplier Strategy: audits, capability mapping, dual-sourcing & continuity',4:'Stakeholder Trust: transparent dashboards, SLAs, and post-award governance'},lang:{pt:'Portuguese (Native)',en:'English (Native)',es:'Spanish (Professional)',fr:'French (Professional)'}},
      timeline:{title:'Professional Journey',subtitle:'15+ years of progressive leadership',level:{senior:'Senior Level',director:'Director Level',manager:'Manager Level',growth:'Growth Phase'}},
      projects:{title:'Featured Projects',subtitle:'Product development excellence and AI innovation portfolio',view_gallery:'View Gallery'},
      tradeshows:{title:'Trade Shows & Global Exhibitions',subtitle:'Exhibitor and strategic buyer across worldwide markets',strategy:{title:'Trade Show Strategy & Execution',desc:'Beyond the booth: I co-create with Marketing the end-to-end journey — stand design, narrative & assets; orchestrate meetings, capture qualified leads, and run the post-fair pipeline to real outcomes. In parallel, I negotiate with current and new partners, benchmark technologies, and audit factories for capability & compliance.',pillars:{1:'Stand Design & Merchandising',2:'Meetings Orchestration & Lead Capture',3:'Negotiations & Partnering',4:'Tech Discovery & Benchmark',5:'Factory Audits & Capability Mapping',6:'Post-Fair Pipeline, ROI & Governance'}}},
      certs:{title:'Certifications & Education',subtitle:'Continuous learning in AI, Data Science, and Strategic Procurement'},
      framework:{title:'AI-Driven Strategic Procurement Framework',desc:'One-page executive framework on how AI, data, and operational alignment elevate procurement performance.',badge:'Proprietary Methodology'},
      github:{title:'GitHub & Data Science Projects',subtitle:'Transforming procurement through code, algorithms, and data-driven insights',tagline:'Python enthusiast leveraging data science to revolutionize procurement decision-making.',metrics:{accuracy:'Prediction Accuracy',cost:'Cost Reduction',stockout:'Stockout Reduction'},cta:'View All Repositories'},
      contact:{title:"Let's Connect",subtitle:'Ready to transform your procurement strategy?',email:'Email',location:'Location'}
    },
    pt:{
      nav:{about:'Sobre',experience:'Experiência',projects:'Projetos',tradeshows:'Feiras',certs:'Certificações',contact:'Contato'},
      hero:{title:'Luciano Rodrigues de Souza',subtitle:'Procurement & Operações orientados por IA · Transformação Estratégica',desc:'Conecto governança, rigor técnico e IA para gerar resultados mensuráveis: tenders transparentes, parceiros confiáveis e operações resilientes na Europa, LATAM e Ásia.',badges:{top:'Top Performer 2025',middle:'Especialista em IA',bottom:'Líder de Confiança'},stats:{savings:'Poupança Acumulada',savings_note:'Em negociações multi-categoria',rfps:'RFP/RFQ Conduzidos',rfps_note:'Com anexos técnicos e scoring ponderado',projects:'Portfólio de Projetos',projects_note:'Do conceito à produção auditada',regions:'Países',regions_note:'Europa · LATAM · Ásia'}},
      cta:{connect:'Vamos Conversar',journey:'Ver Trajetória'},
      about:{title:'Filosofia de Liderança',subtitle:'Das operações na LATAM à estratégia global de procurement',heading:'Transformação pela Colaboração',body:{1:'Desenho sistemas de procurement escaláveis: playbooks de RFI/RFP e BidMaps até governança, auditorias e desenvolvimento de fornecedores. Resultado: velocidade com controle — decisões mais rápidas, menos risco e responsabilidades claras.',2:'Liderança transversal (Engenharia, ESG, Jurídico, Finanças, Operações) aliada a dados e IA. Foco em: requisitos claros, transparência de mercado e resultados mensuráveis.'},philosophy:'Não apenas otimizo cadeias de suprimento — construo coalizões multifuncionais que transformam a forma de pensar procurement.',points:{1:'Arquitetura de Processos: tender kits, scoring ponderado, compliance-by-design',2:'IA & Analytics: RFPs inteligentes, parsing de propostas, forecasting, inventário',3:'Estratégia de Fornecedores: auditorias, mapeamento de capacidades, dual-sourcing',4:'Confiança em Stakeholders: dashboards transparentes, SLAs e governança pós-contrato'},lang:{pt:'Português (Nativo)',en:'Inglês (Nativo)',es:'Espanhol (Prof.)',fr:'Francês (Prof.)'}},
      timeline:{title:'Trajetória Profissional',subtitle:'15+ anos de liderança progressiva',level:{senior:'Nível Sênior',director:'Diretoria',manager:'Gestão',growth:'Expansão'}},
      projects:{title:'Projetos em Destaque',subtitle:'Excelência em desenvolvimento de produto e inovação com IA',view_gallery:'Ver Galeria'},
      tradeshows:{title:'Feiras & Expos Internacionais',subtitle:'Expositor e comprador estratégico em mercados globais',strategy:{title:'Estratégia & Execução de Feiras',desc:'Além do stand: co-crio com Marketing a jornada ponta a ponta — design, narrativa e assets; orquestro reuniões, qualifico leads e conduzo o pipeline pós-feira. Em paralelo, negocio com parceiros, faço benchmark de tecnologias e audito fábricas.',pillars:{1:'Design de Stand & Merchandising',2:'Reuniões & Captação de Leads',3:'Negociações & Parcerias',4:'Descoberta Tecnológica',5:'Auditorias de Fábrica',6:'Pipeline, ROI & Governança'}}},
      certs:{title:'Certificações & Educação',subtitle:'Aprendizado contínuo em IA, Data Science e Procurement'},
      framework:{title:'Framework Estratégico de Procurement orientado por IA',desc:'Framework executivo one-page que mostra como IA, dados e alinhamento operacional elevam a performance de procurement.',badge:'Metodologia Proprietária'},
      github:{title:'Projetos de GitHub & Data Science',subtitle:'Transformando procurement com código e insights',tagline:'Entusiasta de Python usando data science para decisões em procurement.',metrics:{accuracy:'Acurácia de Previsão',cost:'Redução de Custo',stockout:'Redução de Ruptura'},cta:'Ver Todos os Repositórios'},
      contact:{title:'Vamos Conversar',subtitle:'Pronto para transformar sua estratégia de procurement?',email:'Email',location:'Localização'}
    },
    es:{nav:{about:'Acerca',experience:'Experiencia',projects:'Proyectos',tradeshows:'Ferias',certs:'Certificaciones',contact:'Contacto'},projects:{title:'Proyectos Destacados',subtitle:'Excelencia en desarrollo de producto e innovación con IA',view_gallery:'Ver Galería'},contact:{title:'Conectemos',subtitle:'¿Listo para transformar tu estrategia de compras?',email:'Email',location:'Ubicación'}},
    fr:{nav:{about:'À propos',experience:'Expérience',projects:'Projets',tradeshows:'Salons',certs:'Certifications',contact:'Contact'},projects:{title:'Projets Phares',subtitle:'Excellence en développement produit et innovation IA',view_gallery:'Voir la Galerie'},contact:{title:'Entrons en contact',subtitle:'Prêt à transformer votre stratégie achats?',email:'Email',location:'Localisation'}}
  };

  // ---------- Helpers ----------
  const PG_state = { images:[], index:0, currentLang:'en', origin:null };
  const CardSlides = new Map();
  const $ = (sel, ctx=document)=> ctx.querySelector(sel);
  const $$ = (sel, ctx=document)=> Array.from(ctx.querySelectorAll(sel));
  const on = (el,evt,fn,opts)=> el && el.addEventListener(evt,fn,opts);

  // ---------- Data for Stat modal ----------
  const statDetailsData = {
    savings:{icon:'fa-piggy-bank',title:'Cumulative Savings Delivered',value:'€1M+',details:[
      'Multi-category strategic sourcing initiatives across direct and indirect spend',
      'Negotiated favorable payment terms (60-90 days) improving cash flow',
      'Implemented should-cost modeling identifying 15-25% cost reduction opportunities',
      'Consolidated supplier base from 200+ to 80 key partners',
      'Zero-based budgeting approach for CAPEX projects saving 20% on average']},
    rfps:{icon:'fa-file-contract',title:'Strategic Tenders Led',value:'120+',details:[
      'End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)',
      'Weighted scoring matrices balancing technical (40%), commercial (35%), and ESG (25%) criteria',
      'E-procurement platform integration with full audit trails',
      'Cross-functional evaluation committees (Engineering, Finance, Legal, Operations)',
      'Average cycle time reduction from 45 to 28 days while improving compliance']},
    projects:{icon:'fa-project-diagram',title:'Project Portfolio Value',value:'€10M+',details:[
      'New product development from concept to mass production',
      'Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)',
      'Factory audits and supplier capability assessments across Asia',
      'Quality system implementations (ISO 9001, compliance frameworks)',
      'Cross-border logistics optimization and customs compliance']},
    regions:{icon:'fa-globe',title:'Global Operations Coverage',value:'20+',details:[
      'Europe: Portugal, Spain, Germany, UK, Netherlands, Italy, France',
      'LATAM: Brazil, Argentina, Chile, Colombia, Mexico, Peru, Uruguay',
      'Asia: China, Hong Kong, Taiwan, Vietnam, India, South Korea',
      'Multi-cultural negotiation experience and local market knowledge',
      'Time zone coordination for 24/7 project execution']}
  };

  // ---------- Strategy details (EN base) ----------
  const strategyDetailsData = {
    1:{title:'Stand Design & Merchandising',subtitle:'Creating immersive brand experiences',icon:'fa-drafting-compass',sections:[
      {title:'Strategic Approach',items:[
        'Co-created booth concept with Marketing aligning to brand positioning',
        'Traffic flow optimization for maximum visitor engagement',
        'Product display hierarchy highlighting hero SKUs and new launches',
        'Lighting and visual merchandising for premium brand perception',
        'Interactive demo stations for hands-on product experience']},
      {title:'Technical Execution',items:[
        '3D renderings and mockups approved 60 days prior to event',
        'Modular stand components for reusability across fairs',
        'Digital signage integration with real-time product catalogs',
        'Storage and logistics planning for 500+ SKU displays',
        'On-site supervision during build-up and dismantling']} ]},
    2:{title:'Meetings Orchestration & Lead Capture',subtitle:'Maximizing ROI through structured engagement',icon:'fa-calendar-check',sections:[
      {title:'Pre-Event Planning',items:[
        'Target list development: 200+ qualified prospects per fair',
        'Meeting scheduling system with automated reminders',
        'Sales team briefing with product knowledge sessions',
        'Customized pitch decks by customer segment',
        'Lead scoring criteria defined (budget, timeline, authority)']},
      {title:'On-Site Execution',items:[
        'Structured 30-minute meeting slots with clear agendas',
        'Real-time lead capture via CRM mobile app',
        'Immediate follow-up emails sent within 4 hours',
        'Meeting notes standardized for pipeline visibility',
        'Daily team huddles to adjust strategy based on feedback']} ]},
    3:{title:'Negotiations & Partnering',subtitle:'Building strategic supplier relationships',icon:'fa-handshake-angle',sections:[
      {title:'Partnership Development',items:[
        'Initial qualification: financial stability, capacity, certifications',
        'Term sheet negotiations: MOQ, payment terms, exclusivity clauses',
        'Pricing framework with volume breaks and annual rebates',
        'Quality agreements defining defect rates and corrective actions',
        'IP protection and NDA frameworks for new product development']},
      {title:'Contractual Framework',items:[
        'Master Service Agreements (MSA) with standardized terms',
        'Statement of Work (SoW) templates for project-based work',
        'Service Level Agreements (SLA) with penalty/incentive clauses',
        'Force majeure and business continuity provisions',
        'Exit clauses and knowledge transfer obligations']} ]},
    4:{title:'Tech Discovery & Benchmark',subtitle:'Staying ahead of market innovation',icon:'fa-microchip',sections:[
      {title:'Market Intelligence',items:[
        'Technology scouting across 50+ supplier booths per fair',
        'Competitive product teardowns and feature comparison',
        'Cost benchmarking for similar specifications',
        'Innovation trend mapping (IoT, sustainability, smart features)',
        'Patent landscape analysis for freedom to operate']},
      {title:'Technical Evaluation',items:[
        'Sample collection for lab testing and validation',
        'Engineering team consultations on technical feasibility',
        'Prototype review and DFM feedback',
        'Certification requirements assessment (CE, FCC, ANATEL)',
        'Roadmap alignment with supplier R&D investments']} ]},
    5:{title:'Factory Audits & Capability Mapping',subtitle:'Ensuring operational excellence',icon:'fa-industry',sections:[
      {title:'Audit Framework',items:[
        'ISO 9001 quality management system verification',
        'Production capacity analysis (lines, shifts, utilization)',
        'Equipment maintenance records and calibration certificates',
        'Workforce skill assessment and training programs',
        'Environmental compliance and waste management practices']},
      {title:'Risk Assessment',items:[
        'Financial health check (credit reports, payment history)',
        'Supply chain resilience (dual sourcing, buffer stock)',
        'Social compliance audits (SA8000, BSCI standards)',
        'Cybersecurity protocols for data-sharing partnerships',
        'Business continuity planning and disaster recovery']} ]},
    6:{title:'Post-Fair Pipeline, ROI & Governance',subtitle:'Converting leads into revenue',icon:'fa-chart-line',sections:[
      {title:'Pipeline Management',items:[
        'Lead categorization: Hot (immediate), Warm (3 months), Cold (nurture)',
        'CRM integration with automated follow-up sequences',
        'Opportunity value estimation and win probability scoring',
        'Cross-functional handover to regional sales teams',
        'Weekly pipeline review meetings for first 30 days']},
      {title:'Performance Metrics',items:[
        'Cost per lead calculation (stand cost ÷ qualified leads)',
        'Conversion rate tracking from lead to order',
        'Average deal size comparison vs. non-fair customers',
        'Time-to-close analysis identifying bottlenecks',
        'Annual ROI reporting for marketing budget justification']} ]}
  };

  // ---------- Strategy modal I18N (PT override) ----------
  const STRATEGY_I18N_PT = {
    1:{title:'Design de Stand & Merchandising',subtitle:'Criando experiências de marca imersivas',icon:'fa-drafting-compass',sections:[
      {title:'Abordagem Estratégica',items:[
        'Co-criação do conceito do stand com Marketing alinhado ao posicionamento da marca',
        'Otimização do fluxo de tráfego para máximo engajamento',
        'Hierarquia de exposição destacando SKUs heróis e lançamentos',
        'Iluminação e VM para percepção premium da marca',
        'Estações de demo interativas']},
      {title:'Execução Técnica',items:[
        'Renderizações/mockups 3D aprovados (D-60)',
        'Componentes modulares reutilizáveis',
        'Sinalização digital com catálogos em tempo real',
        'Planeamento de logística/armazenamento para 500+ SKUs',
        'Supervisão on-site (montagem/desmontagem)']} ]},
    2:{title:'Orquestração de Reuniões & Captação de Leads',subtitle:'Maximizando ROI com engajamento estruturado',icon:'fa-calendar-check',sections:[
      {title:'Pré-Evento',items:[
        'Lista-alvo: 200+ prospetos qualificados por feira',
        'Agendamento com lembretes automáticos',
        'Briefing de produto para equipa de vendas',
        'Decks personalizados por segmento',
        'Critérios de lead scoring (BANT)']},
      {title:'No Stand',items:[
        'Slots de 30 min com agenda clara',
        'Captação em CRM móvel',
        'Follow-up em até 4 horas',
        'Notas padronizadas para visibilidade do pipeline',
        'Reuniões diárias para ajustes']}]},
    3:{title:'Negociações & Parcerias',subtitle:'Relacionamentos estratégicos com fornecedores',icon:'fa-handshake-angle',sections:[
      {title:'Parcerias',items:[
        'Qualificação: finanças, capacidade, certificações',
        'Termos: MOQ, prazos, exclusividade',
        'Escalas de preço e rebates anuais',
        'Acordos de qualidade e ações corretivas',
        'Proteção de IP e NDAs']},
      {title:'Contrato',items:[
        'MSA padrão',
        'Modelos de SoW por projeto',
        'SLAs com penalidades/incentivos',
        'Força maior e continuidade',
        'Cláusulas de saída e KT']}]},
    4:{title:'Descoberta Tecnológica & Benchmark',subtitle:'À frente da inovação',icon:'fa-microchip',sections:[
      {title:'Mercado',items:[
        'Scouting em 50+ booths',
        'Teardowns e comparação de features',
        'Benchmark de custos',
        'Tendências (IoT, sustentabilidade, smart)',
        'Análise de patentes']},
      {title:'Avaliação Técnica',items:[
        'Amostras para laboratório',
        'Consultas de viabilidade com engenharia',
        'Revisão/DFM',
        'Requisitos de certificação (CE, FCC, ANATEL)',
        'Alinhamento com P&D do fornecedor']}]},
    5:{title:'Auditorias de Fábrica & Capacidades',subtitle:'Excelência operacional',icon:'fa-industry',sections:[
      {title:'Auditoria',items:[
        'Verificação ISO 9001',
        'Capacidade (linhas/turnos/utilização)',
        'Registos de manutenção/calibração',
        'Treino e competências',
        'Ambiental e resíduos']},
      {title:'Risco',items:[
        'Saúde financeira',
        'Resiliência (dual-sourcing/stock)',
        'Compliance social (SA8000/BSCI)',
        'Cibersegurança',
        'BCP/DR']}]},
    6:{title:'Pipeline Pós-Feira, ROI & Governança',subtitle:'Convertendo leads em receita',icon:'fa-chart-line',sections:[
      {title:'Pipeline',items:[
        'Leads: Quente · Morno · Frio',
        'CRM com sequências de follow-up',
        'Estimativa de valor e probabilidade',
        'Handover regional',
        'Revisões semanais (30 dias)']},
      {title:'Métricas',items:[
        'Custo por lead',
        'Taxa de conversão lead→pedido',
        'Ticket médio vs. fora de feira',
        'Time-to-close e gargalos',
        'Relatório anual de ROI']}]}
  };

  // ---------- Modais (Stats) ----------
  function openStatModal(key){
    const data = statDetailsData[key]; if(!data) return;
    $('#statModalIcon').className = 'fas ' + data.icon;
    $('#statModalTitle').textContent = data.title;
    $('#statModalValue').textContent = data.value;
    $('#statModalDetails').innerHTML = data.details.map(x=>`<li>${x}</li>`).join('');
    $('#statModalOverlay').classList.add('active');
    document.body.style.overflow='hidden';
  }
  function closeStatModal(){ const ov = $('#statModalOverlay'); if(!ov) return; ov.classList.remove('active'); document.body.style.overflow='auto'; }

  // ---------- Modais (Estratégia) ----------
  function openStrategyModal(num){
    const lang = (document.documentElement.lang||'en').slice(0,2);
    const dict = lang==='pt' && STRATEGY_I18N_PT[num] ? STRATEGY_I18N_PT[num] : strategyDetailsData[num];
    if(!dict) return;
    $('#strategyDetailIcon').className = 'fas ' + (dict.icon||'fa-drafting-compass');
    $('#strategyDetailTitle').textContent = dict.title||'';
    $('#strategyDetailSubtitle').textContent = dict.subtitle||'';
    const body = (dict.sections||[]).map(sec=>{
      const items = (sec.items||[]).map(li=>`<li>${li}</li>`).join('');
      return `<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${items}</ul></div>`;
    }).join('');
    $('#strategyDetailBody').innerHTML = body;
    $('#strategyDetailOverlay').classList.add('active');
    document.body.style.overflow='hidden';
  }
  function closeStrategyModal(){ const ov = $('#strategyDetailOverlay'); if(!ov) return; ov.classList.remove('active'); document.body.style.overflow='auto'; }

  // ---------- Galerias de projetos (cards) ----------
  function setupCardAutoSlide(card){
    const container = card.querySelector('.gallery-main'); if(!container) return;
    let images = [];
    const csv = card.getAttribute('data-images')||'';
    if(csv.trim()) images = csv.split(',').map(s=>s.trim()).filter(Boolean); else {
      const main = container.querySelector('img'); if(main && main.src) images=[main.src];
    }
    if(!images.length) return;
    const imgEl = container.querySelector('img');
    const auto = card.getAttribute('data-autoslide')==='true';
    const interval = Math.max(1200, parseInt(card.getAttribute('data-interval')||'2500',10));
    const state = {images, idx:0, timer:null, interval, imgEl, paused:false};
    CardSlides.set(card,state);
    function tick(){ if(state.paused || !auto || state.images.length<=1) return; state.idx=(state.idx+1)%state.images.length; imgEl.style.opacity='0'; setTimeout(()=>{ imgEl.src=state.images[state.idx]; imgEl.onload=()=>{ imgEl.style.opacity='1'; }; const dots=card.querySelectorAll('.gallery-dot'); dots.forEach((d,i)=>d.classList.toggle('active', i===state.idx)); },160); }
    function start(){ stop(); if(auto && state.images.length>1) state.timer=setInterval(tick,state.interval); }
    function stop(){ if(state.timer){ clearInterval(state.timer); state.timer=null; } }
    on(card,'mouseenter',()=>{ state.paused=true; });
    on(card,'mouseleave',()=>{ state.paused=false; });
    const clickable = card.querySelector('.gallery-overlay') || container;
    on(clickable,'click', (e)=>{ e.stopPropagation(); openProjectGalleryFromCard(card); });
    // build dots if not present
    const pg = card.querySelector('.project-gallery');
    if(pg && !pg.querySelector('.gallery-dots')){
      const dotsWrap = document.createElement('div'); dotsWrap.className='gallery-dots';
      images.forEach((_,i)=>{ const dot=document.createElement('div'); dot.className='gallery-dot'+(i===0?' active':''); dotsWrap.appendChild(dot); });
      pg.appendChild(dotsWrap);
    }
    start();
  }

  // ---------- Project gallery modal ----------
  function buildProjectSlides(images){
    const slider = $('#gallerySlider'); const dots = $('#galleryDots'); if(!slider||!dots) return;
    slider.innerHTML=''; dots.innerHTML='';
    images.forEach((src,idx)=>{
      const slide=document.createElement('div'); slide.className='gallery-slide'+(idx===0?' active':'');
      const img=document.createElement('img'); img.alt='Project image '+(idx+1); img.src=src; slide.appendChild(img); slider.appendChild(slide);
      const dot=document.createElement('div'); dot.className='gallery-dot'+(idx===0?' active':''); dot.addEventListener('click',()=>goToProjectSlide(idx)); dots.appendChild(dot);
    });
    PG_state.images = images.slice(); PG_state.index = 0;
  }
  function openProjectGalleryFromCard(card){
    const modal = $('#projectGalleryModal'); if(!modal) return;
    let images=[]; const csv = card.getAttribute('data-images')||'';
    if(csv.trim()){ images = csv.split(',').map(s=>s.trim()).filter(Boolean); }
    else { const main=card.querySelector('.gallery-main img'); if(main&&main.src) images=[main.src]; }
    if(!images.length) return;
    PG_state.origin = 'projects';
    buildProjectSlides(images); modal.classList.add('active'); document.body.style.overflow='hidden';
  }
  function changeProjectSlide(dir){ if(!PG_state.images.length) return; const slides=$$('#gallerySlider .gallery-slide'); const dots=$$('#galleryDots .gallery-dot'); slides[PG_state.index]?.classList.remove('active'); dots[PG_state.index]?.classList.remove('active'); PG_state.index=(PG_state.index+dir+PG_state.images.length)%PG_state.images.length; slides[PG_state.index]?.classList.add('active'); dots[PG_state.index]?.classList.add('active'); }
  function goToProjectSlide(idx){ if(!PG_state.images.length) return; const slides=$$('#gallerySlider .gallery-slide'); const dots=$$('#galleryDots .gallery-dot'); slides[PG_state.index]?.classList.remove('active'); dots[PG_state.index]?.classList.remove('active'); PG_state.index=idx; slides[PG_state.index]?.classList.add('active'); dots[PG_state.index]?.classList.add('active'); }
  function closeProjectGallery(){ const modal=$('#projectGalleryModal'); if(modal){ modal.classList.remove('active'); document.body.style.overflow='auto'; } if(PG_state.origin==='trade'){ const sec=$('#trade-shows'); if(sec) sec.scrollIntoView({behavior:'smooth',block:'start'}); } PG_state.origin=null; }

  // ---------- Lightbox ----------
  function initLightbox(){ const lb=$('#lightbox'); const lbImg=$('#lightbox-img'); if(!lb||!lbImg) return; on(lb,'click',(e)=>{ if(e.target===lb) closeLightbox(); }); on(document,'keydown',(e)=>{ if(lb.classList.contains('active')&&e.key==='Escape') closeLightbox(); }); }
  function openLightbox(el){ const lb=$('#lightbox'); const lbImg=$('#lightbox-img'); if(!lb||!lbImg) return; const img = el?.querySelector?.('img'); if(!img||!img.src) return; lbImg.src=img.src; lb.classList.add('active'); document.body.style.overflow='hidden'; }
  function closeLightbox(){ const lb=$('#lightbox'); if(!lb) return; lb.classList.remove('active'); document.body.style.overflow='auto'; }

  // ---------- Scroll animations ----------
  function initScrollAnimations(){ const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }); }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'}); $$('.animate-on-scroll').forEach(el=>io.observe(el)); }

  // ---------- Navbar + ScrollTop + Timeline Spy (fix não voltar ao primeiro) ----------
  let TL_LAST_ACTIVE = 0;
  function updateTimelineSpy(){
    const items = $$('.timeline-item'); if(!items.length) return; const logoImg=$('#logo-img'); const indicators=$$('.indicator-dot');
    let activeIndex = -1; const H=innerHeight, midTop=H*0.62, midBottom=H*0.38;
    items.forEach((item,idx)=>{ const r=item.getBoundingClientRect(); const onView = r.top<midTop && r.bottom>midBottom; item.classList.toggle('active', onView); if(onView) activeIndex=idx; });
    if(activeIndex===-1) activeIndex = TL_LAST_ACTIVE; TL_LAST_ACTIVE = activeIndex;
    const activeItem = items[activeIndex]; if(activeItem && logoImg){ const newLogo=activeItem.getAttribute('data-logo'); const currentSrc=logoImg.getAttribute('src'); if(newLogo && newLogo!==currentSrc){ logoImg.style.opacity='0'; setTimeout(()=>{ logoImg.src=newLogo; logoImg.onload=()=>{ logoImg.style.opacity='1'; }; },160); } }
    indicators.forEach((dot,idx)=> dot.classList.toggle('active', idx===activeIndex));
  }
  function initNavbarScroll(){ const navbar=$('#navbar'); const scrollTopBtn=$('#scrollTop'); const onScroll=()=>{ const y=scrollY||document.documentElement.scrollTop; navbar?.classList.toggle('scrolled', y>50); scrollTopBtn?.classList.toggle('visible', y>600); updateTimelineSpy(); }; onScroll(); addEventListener('scroll',onScroll,{passive:true}); }

  // ---------- Particles (hero) ----------
  function initParticles(){ const container=$('#particles'); if(!container) return; const count=26; for(let i=0;i<count;i++){ const p=document.createElement('div'); p.className='particle'; p.style.left=(Math.random()*100)+'%'; p.style.top=(Math.random()*100)+'%'; const s=Math.max(3,Math.min(6,3+Math.random()*4)); p.style.width=p.style.height=s+'px'; p.style.opacity=(0.22+Math.random()*0.35).toFixed(2); p.style.animationDelay=(Math.random()*5).toFixed(2)+'s'; p.style.animationDuration=(4+Math.random()*5).toFixed(2)+'s'; p.style.position='absolute'; p.style.background='var(--gold)'; p.style.borderRadius='50%'; p.style.pointerEvents='none'; container.appendChild(p); } }

  // ---------- I18N (translate) ----------
  function translateAll(lang){ PG_state.currentLang=lang; document.documentElement.lang=lang; const dict=(window.I18N&&window.I18N[lang])||(window.I18N&&window.I18N['en'])||{}; $$('[data-i18n]').forEach(el=>{ const path=el.dataset.i18n; const val = path?.split('.').reduce((a,k)=> (a&&a[k]!==undefined? a[k]:undefined), dict); if(val!==undefined) el.textContent=val; }); setTimeout(updateTimelineSpy,100); }
  function markActiveLang(lang){ $$('.lang-btn').forEach(btn=> btn.classList.toggle('active', btn.dataset.lang===lang)); }
  function initLangSwitcher(){ const sw=$('#langSwitcher'); if(!sw) return; on(sw,'click',(e)=>{ const btn=e.target.closest('.lang-btn'); if(!btn) return; const lang=btn.dataset.lang; if(!lang) return; translateAll(lang); markActiveLang(lang); try{ localStorage.setItem('lang',lang); }catch(_){} showToast(`Translated to ${lang.toUpperCase()}`); }); }
  function initI18N(){ try{ const stored=localStorage.getItem('lang'); const browser=(navigator.language||'en').slice(0,2).toLowerCase(); const initial = stored || (['en','pt','es','fr'].includes(browser) ? browser : 'en'); translateAll(initial); markActiveLang(initial); }catch(e){ translateAll('en'); markActiveLang('en'); } }

  // ---------- Loading & Anchors ----------
  function initLoading(){ const loading=$('#loading'); if(!loading) return; addEventListener('load',()=>{ setTimeout(()=>{ loading.classList.add('hidden'); setTimeout(()=>{ try{loading.remove();}catch(_){} },400); },1200); }); }
  function initSmoothAnchors(){ $$('a[href^="#"]').forEach(a=>{ on(a,'click',(e)=>{ const href=a.getAttribute('href'); if(!href || href==='#') return; const target=$(href); if(!target) return; e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }); }); }

  // ---------- Trade tabs / duo ----------
  function initTradeTabs(){ const tabs=$$('.gallery-tab'); if(!tabs.length) return; tabs.forEach(btn=>{ on(btn,'click',()=>{ tabs.forEach(t=>{ t.classList.remove('active'); t.setAttribute('aria-selected','false'); }); btn.classList.add('active'); btn.setAttribute('aria-selected','true'); $$('.gallery-content').forEach(gc=>gc.classList.remove('active')); const panel = $('#'+btn.dataset.target); panel?.classList.add('active'); }); }); }
  const TRADE_GALLERIES={blaupunkt:['./Blaupunkt_Illumiation_booth_HK_Fair.png','./Blaupunkt_Illumiation_booth_HK_Fair_1.png','./Blaupunkt_Illumiation_booth_HK_Fair_2.png','./Blaupunkt_Illumiation_booth_HK_Fair_3.png','./Blaupunkt_Illumiation_booth_HK_Fair_4.png'],ford:['./Ford_lighting_solutions_HK_Intl.png','./Ford_lighting_solutions_HK_Intl_1.png','./Ford_lighting_solutions_HK_Intl_2.png']};
  function openTradeGallery(brand){ PG_state.origin='trade'; const images=(TRADE_GALLERIES[brand]||[]).slice(); if(!images.length) return; buildProjectSlides(images); $('#projectGalleryModal').classList.add('active'); document.body.style.overflow='hidden'; }

  // ---------- Misc enhancements ----------
  function showToast(message=''){ const t=$('#toast'); if(!t) return; t.textContent=message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2800); }
  function initVolunteerEnhancement(){ const section=$('#volunteering'); if(!section) return; if(section.querySelector('.volunteer-hero-image')) return; const header=section.querySelector('.section-header'); if(!header) return; const hero=document.createElement('div'); hero.className='volunteer-hero-image animate-on-scroll visible'; hero.innerHTML='<img src="./gadsdenstatecommunitycollege.jpg" alt="Gadsden State Community College" onerror="this.style.display=\'none\'" />'; header.after(hero); }
  function fixGadsdenImages(){ $$('.cert-logo img').forEach(img=>{ if((img.src||'').includes('Gadsden') || (img.alt||'').includes('Gadsden')){ img.onerror=function(){ this.src='./gadsdenstatecommunitycollege_logo.jpg'; }; } }); }
  function initMobileEnhancements(){ const isTouch = matchMedia('(pointer: coarse)').matches; if(!isTouch) return; $$('.stat-box, .strategy-item, .project-card, .gallery-item').forEach(el=>{ on(el,'touchstart',function(){ this.style.transform='scale(0.98)'; }, {passive:true}); on(el,'touchend',function(){ this.style.transform=''; }, {passive:true}); }); $$('.project-card').forEach(card=>{ let sx=0,cx=0; const gal=card.querySelector('.gallery-main'); if(!gal) return; on(gal,'touchstart',e=>{ sx=e.touches[0].clientX; },{passive:true}); on(gal,'touchmove',e=>{ cx=e.touches[0].clientX; },{passive:true}); on(gal,'touchend',()=>{ const diff=sx-cx; if(Math.abs(diff)>50){ const st=CardSlides.get(card); if(st && st.images.length>1){ st.idx = diff>0 ? (st.idx+1)%st.images.length : (st.idx-1+st.images.length)%st.images.length; st.imgEl.style.opacity='0'; setTimeout(()=>{ st.imgEl.src=st.images[st.idx]; st.imgEl.onload=()=>{ st.imgEl.style.opacity='1'; }; card.querySelectorAll('.gallery-dot').forEach((d,i)=> d.classList.toggle('active', i===st.idx)); },160); } } },{passive:true}); }); }

  // ---------- Boot ----------
  document.addEventListener('DOMContentLoaded', ()=>{
    initLoading();
    initNavbarScroll();
    initScrollAnimations();
    initParticles();
    initSmoothAnchors();
    initLangSwitcher();
    initI18N();
    initTradeTabs();
    initLightbox();
    // Galerias
    $$('.project-card').forEach(setupCardAutoSlide);
    // Extras
    initVolunteerEnhancement();
    fixGadsdenImages();
    initMobileEnhancements();
    // Listeners globais
    on(document,'click',(e)=>{ if(e.target?.id==='statModalOverlay') closeStatModal(); if(e.target?.id==='strategyDetailOverlay') closeStrategyModal(); });
    on(document,'keydown',(e)=>{ if(e.key==='Escape'){ try{closeStatModal();}catch(_){} try{closeStrategyModal();}catch(_){} }});
    // Abrir lightbox em itens de galeria simples
    on(document,'click',(e)=>{ const gm=e.target.closest('.project-card .gallery-main'); if(!gm) return; const card=gm.closest('.project-card'); openProjectGalleryFromCard(card); });
    console.log('✅ Portfolio JS carregado');
  });

  // ---------- Expose globals used in HTML ----------
  window.openStatModal = openStatModal; window.closeStatModal = closeStatModal;
  window.openStrategyModal = openStrategyModal; window.closeStrategyModal = closeStrategyModal;
  window.openLightbox = openLightbox; window.closeLightbox = closeLightbox;
  window.changeProjectSlide = changeProjectSlide; window.goToProjectSlide = goToProjectSlide; window.closeProjectGallery = closeProjectGallery;
  window.openProjectGalleryFromCard = openProjectGalleryFromCard; window.openTradeGallery = openTradeGallery;

  // ---------- Hard failsafe for LOADING (matador) ----------
  setTimeout(()=>{ try{ const l=document.getElementById('loading'); if(l){ l.classList.add('hidden'); setTimeout(()=>{ try{l.remove();}catch(_){}} ,400); } }catch(_){} }, 5000);
})();
