// Utilities
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

// Data (stats + strategy)
const statDetailsData = {
  savings: { icon:'fa-piggy-bank', title:'Cumulative Savings Delivered', value:'€1M+', details:[
    'Multi-category strategic sourcing initiatives across direct and indirect spend',
    'Negotiated favorable payment terms (60-90 days) improving cash flow',
    'Should-cost modeling identifying 15-25% cost reduction opportunities',
    'Consolidated supplier base from 200+ to 80 key partners',
    'Zero-based budgeting for CAPEX projects saving ~20%'
  ]},
  rfps: { icon:'fa-file-contract', title:'Strategic Tenders Led', value:'120+', details:[
    'End-to-end RFI/RFP/RFQ process with technical annexes',
    'Weighted scoring: technical, commercial, ESG',
    'E-procurement integration with full audit trail',
    'Cross-functional evaluation committees',
    'Cycle time reduction de 45 para 28 dias'
  ]},
  projects: { icon:'fa-project-diagram', title:'Project Portfolio Value', value:'€10M+', details:[
    'New product development from concept to mass production',
    'Licensed portfolio launches (Blaupunkt, etc.)',
    'Factory audits & supplier capability assessments',
    'Quality systems (ISO 9001, compliance frameworks)',
    'Logistics optimization & customs compliance'
  ]},
  regions: { icon:'fa-globe', title:'Global Operations Coverage', value:'20+', details:[
    'Europe · LATAM · Asia coverage',
    'Multi-cultural negotiation experience',
    'Local market knowledge and supplier mapping',
    'Time zone coordination 24/7',
    'Dual sourcing & continuity planning'
  ]}
};

const strategyDetailsData = {
  1:{ title:'Stand Design & Merchandising', subtitle:'Creating immersive brand experiences', icon:'fa-drafting-compass', sections:[
      {title:'Strategic Approach', items:['Booth concept com Marketing','Fluxo de tráfego otimizado','Hierarquia de produtos','Iluminação e VM premium','Estações de demo']},
      {title:'Execução Técnica', items:['3D renderings aprovados','Componentes modulares','Sinalização digital','Logística para 500+ SKUs','Supervisão on-site']}
  ]},
  2:{ title:'Meetings & Lead Capture', subtitle:'Maximizing ROI through engagement', icon:'fa-calendar-check', sections:[
      {title:'Pré-Evento', items:['Lista-alvo 200+ prospects','Agenda com lembretes','Briefing da equipa de vendas','Pitches por segmento','Lead scoring']},
      {title:'No Evento', items:['Slots de 30 min','CRM mobile','Follow-up < 4h','Notas padronizadas','Daily huddles']}
  ]},
  3:{ title:'Negotiations & Partnering', subtitle:'Building supplier relationships', icon:'fa-handshake-angle', sections:[
      {title:'Parceria', items:['Qualificação inicial','Term sheet (MOQ, prazos, exclusividade)','Preço com breaks e rebates','Quality Agreement','NDA & IP']},
      {title:'Contrato', items:['MSA','SoW','SLA com penalidades/incentivos','Força maior & continuidade','Cláusulas de saída']}
  ]},
  4:{ title:'Tech Discovery & Benchmark', subtitle:'Ahead of innovation', icon:'fa-microchip', sections:[
      {title:'Inteligência de Mercado', items:['Scouting 50+ booths','Teardowns competitivos','Benchmark de custos','Tendências (IoT, Sustentabilidade)','Patentes & FTO']},
      {title:'Avaliação Técnica', items:['Amostras p/ testes','Consultas de engenharia','DFM em protótipos','Certificações (CE, FCC)','Roadmap & P&D']}
  ]},
  5:{ title:'Factory Audits & Capability', subtitle:'Operational excellence', icon:'fa-industry', sections:[
      {title:'Auditoria', items:['ISO 9001','Capacidade (linhas/turnos)','Manutenção & calibração','Skills & training','Ambiente & resíduos']},
      {title:'Risco', items:['Saúde financeira','Resiliência (dual source)','Social compliance (BSCI)','Cibersegurança','BCP/DRP']}
  ]},
  6:{ title:'Pipeline, ROI & Governance', subtitle:'From leads to revenue', icon:'fa-chart-line', sections:[
      {title:'Pipeline', items:['Hot/Warm/Cold','CRM & cadências','Estimativa de valor + prob. ganho','Handover regional','Revisões semanais (30 dias)']},
      {title:'Métricas', items:['Custo por lead','Conversão lead→pedido','Tamanho médio de negócio','Time-to-close','ROI anual']}
  ]}
};

// Toast & Anchors
function showToast(message=''){ const t=$('#toast'); if(!t) return; t.textContent=message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2800); }
function initSmoothAnchors(){ $$('a[href^="#"]').forEach(a=>{ on(a,'click',(e)=>{ const href=a.getAttribute('href'); if(!href||href==='#') return; const target=$(href); if(!target) return; e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }); }); }

// Gadsden image fix
function fixGadsdenImages(){ $$('.cert-logo img').forEach(img=>{ if(img.src.includes('Gadsden')||img.alt.includes('Gadsden')){ img.onerror=function(){ this.src='./gadsdenstatecommunitycollege_logo.jpg'; }; } }); }

// Loading overlay
function initLoading(){
  const loading = document.getElementById('loading');
  if(!loading) return;
  // if document already loaded (in case defer + cache), hide immediately
  const hide = ()=>{ if(!loading.classList.contains('hidden')){ loading.classList.add('hidden'); setTimeout(()=>loading.remove(), 400); } };
  if(document.readyState === 'complete'){ setTimeout(hide, 100); }
  window.addEventListener('load', ()=>{ setTimeout(hide, 300); });
  // safety fallback
  setTimeout(hide, 5000);
}

// Modals (stats)
function openStatModal(key){ const data=statDetailsData[key]; if(!data) return; $('#statModalIcon').className=`fas ${data.icon}`; $('#statModalTitle').textContent=data.title; $('#statModalValue').textContent=data.value; $('#statModalDetails').innerHTML=data.details.map(li=>`<li>${li}</li>`).join(''); $('#statModalOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeStatModal(){ const o=$('#statModalOverlay'); if(!o) return; o.classList.remove('active'); document.body.style.overflow='auto'; }

// Modals (strategy)
function openStrategyModal(n){ const data=strategyDetailsData[n]; if(!data) return; $('#strategyDetailIcon').className=`fas ${data.icon}`; $('#strategyDetailTitle').textContent=data.title; $('#strategyDetailSubtitle').textContent=data.subtitle; const body=data.sections.map(sec=>`<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${sec.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join(''); $('#strategyDetailBody').innerHTML=body; $('#strategyDetailOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeStrategyModal(){ const o=$('#strategyDetailOverlay'); if(!o) return; o.classList.remove('active'); document.body.style.overflow='auto'; }

// Navbar + scroll
function initNavbarScroll(){ const navbar=$('#navbar'); const onScroll=()=>{ const y=window.scrollY||document.documentElement.scrollTop; navbar?.classList.toggle('scrolled', y>50); }; onScroll(); window.addEventListener('scroll', onScroll, {passive:true}); }

// Lightbox (placeholder hooks if needed)
function initLightbox(){}

// Projects (placeholder for autoslide)
function setupCardAutoSlide(){/* no-op in this minimal build */}

// Boot
document.addEventListener('DOMContentLoaded', ()=>{
  initLoading();
  initNavbarScroll();
  initSmoothAnchors();
  // Stats handlers + keyboard
  $$('.stat-box').forEach(box=>{
    box.style.cursor='pointer';
    on(box,'click',()=>{ const k=box.dataset.stat; if(k && statDetailsData[k]) openStatModal(k); });
    on(box,'keydown',(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); const k=box.dataset.stat; if(k && statDetailsData[k]) openStatModal(k); }});
  });
  // Close overlays
  on(document,'click',(e)=>{ if(e.target?.id==='statModalOverlay') closeStatModal(); if(e.target?.id==='strategyDetailOverlay') closeStrategyModal(); });
  on(document,'keydown',(e)=>{ if(e.key==='Escape'){ closeStatModal(); closeStrategyModal(); }});
  fixGadsdenImages();
  console.log('✅ Portfolio JS initialized');
});

// expose
window.openStatModal = openStatModal;
window.closeStatModal = closeStatModal;
window.openStrategyModal = openStrategyModal;
window.closeStrategyModal = closeStrategyModal;
