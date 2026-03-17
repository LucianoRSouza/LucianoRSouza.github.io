
// ===== Helpers & State =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, evt, fn, opts) => el && el.addEventListener(evt, fn, opts);

let TIMELINE_ACTIVE_INDEX = 0;
const PG_state = { images: [], index: 0, currentLang: 'en', origin: null };
const CardSlides = new Map();

// ===== Data (kept concise, original EN copy preserved) =====
const statDetailsData = {
  savings: { icon:"fa-piggy-bank", title:"Cumulative Savings Delivered", value:"€1M+", details:[
    "Multi-category strategic sourcing initiatives across direct and indirect spend",
    "Negotiated favorable payment terms (60-90 days) improving cash flow",
    "Should-cost modeling identifying 15-25% cost reduction opportunities",
    "Consolidated supplier base from 200+ to 80 key partners",
    "Zero-based budgeting approach for CAPEX projects saving ~20%"
  ]},
  rfps: { icon:"fa-file-contract", title:"Strategic Tenders Led", value:"120+", details:[
    "End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)",
    "Weighted scoring matrices (technical/commercial/ESG)",
    "E-procurement integration with full audit trails",
    "Cross-functional evaluation committees",
    "Cycle time reduction from 45 to 28 days"
  ]},
  projects: { icon:"fa-project-diagram", title:"Project Portfolio Value", value:"€10M+", details:[
    "New product development from concept to mass production",
    "Licensed portfolio launches (Blaupunkt, Spear & Jackson, Pininfarina)",
    "Factory audits & capability assessments",
    "Quality systems (ISO 9001, compliance frameworks)",
    "Cross-border logistics optimization"
  ]},
  regions: { icon:"fa-globe", title:"Global Operations Coverage", value:"20+", details:[
    "Europe · LATAM · Asia",
    "Multi-cultural negotiation & local market knowledge",
    "24/7 time-zone coordination"
  ]}
};

const strategyDetailsData = {
  1:{ title:"Stand Design & Merchandising", subtitle:"Creating immersive brand experiences", icon:"fa-drafting-compass",
      sections:[
        { title:"Strategic Approach", items:[
          "Co-created booth concept with Marketing aligned to brand",
          "Traffic flow optimization",
          "Product display hierarchy",
          "Lighting and visual merchandising",
          "Interactive demo stations"
        ]},
        { title:"Technical Execution", items:[
          "3D renders & mockups approved 60 days prior",
          "Modular components for reusability",
          "Digital signage integration",
          "Storage/logistics for 500+ SKU displays",
          "On-site supervision"
        ]}
      ]},
  2:{ title:"Meetings Orchestration & Lead Capture", subtitle:"Maximizing ROI through structured engagement", icon:"fa-calendar-check",
      sections:[
        { title:"Pre-Event Planning", items:[
          "Target list (200+ prospects)", "Automated scheduling/reminders",
          "Sales briefing & product sessions", "Segmented pitch decks",
          "Lead scoring criteria"
        ]},
        { title:"On-Site Execution", items:[
          "Structured 30-min slots", "Real-time CRM lead capture",
          "Follow-up in < 4 hours", "Standardized meeting notes", "Daily team huddles"
        ]}
      ]},
  3:{ title:"Negotiations & Partnering", subtitle:"Building strategic supplier relationships", icon:"fa-handshake-angle",
      sections:[
        { title:"Partnership Development", items:[
          "Qualification (financials, capacity, certifications)",
          "Term sheets: MOQ, payment, exclusivity",
          "Pricing framework with volume breaks",
          "Quality agreements & corrective actions",
          "IP protection & NDAs"
        ]},
        { title:"Contractual Framework", items:[
          "MSA", "SoW templates", "SLAs (penalties/incentives)",
          "Force majeure & continuity", "Exit clauses & knowledge transfer"
        ]}
      ]},
  4:{ title:"Tech Discovery & Benchmark", subtitle:"Staying ahead of market innovation", icon:"fa-microchip",
      sections:[
        { title:"Market Intelligence", items:["Scouting 50+ booths", "Teardowns & feature comparison", "Cost benchmarking", "Trend mapping", "Patent landscape"]},
        { title:"Technical Evaluation", items:["Samples & lab testing", "Engineering feasibility", "DFM feedback", "Certifications (CE/FCC/ANATEL)", "R&D roadmap alignment"]}
      ]},
  5:{ title:"Factory Audits & Capability Mapping", subtitle:"Ensuring operational excellence", icon:"fa-industry",
      sections:[
        { title:"Audit Framework", items:["ISO 9001", "Capacity analysis", "Maintenance & calibration", "Workforce skills", "Environmental compliance"]},
        { title:"Risk Assessment", items:["Financial health", "Supply resilience", "Social audits", "Cybersecurity", "Business continuity"]}
      ]},
  6:{ title:"Post-Fair Pipeline, ROI & Governance", subtitle:"Converting leads into revenue", icon:"fa-chart-line",
      sections:[
        { title:"Pipeline Management", items:["Lead categorization", "CRM sequences", "Opportunity scoring", "Handover to regions", "Weekly reviews"]},
        { title:"Performance Metrics", items:["Cost per lead", "Conversion rate", "Average deal size", "Time-to-close", "Annual ROI report"]}
      ]}
};

// ===== Stat Modal =====
function openStatModal(key){
  const d = statDetailsData[key]; if(!d) return;
  $('#statModalIcon').className = `fas ${d.icon}`;
  $('#statModalTitle').textContent = d.title;
  $('#statModalValue').textContent = d.value;
  $('#statModalDetails').innerHTML = (d.details||[]).map(x=>`<li>${x}</li>`).join('');
  $('#statModalOverlay').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeStatModal(){ const o=$('#statModalOverlay'); if(!o) return; o.classList.remove('active'); document.body.style.overflow='auto'; }

// ===== Strategy Modal =====
function openStrategyModal(num){
  const d = strategyDetailsData[num]; if(!d) return;
  $('#strategyDetailIcon').className = `fas ${d.icon}`;
  $('#strategyDetailTitle').textContent = d.title;
  $('#strategyDetailSubtitle').textContent = d.subtitle;
  const html = (d.sections||[]).map(sec=>{
    const items = (sec.items||[]).map(li=>`<li>${li}</li>`).join('');
    return `<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${items}</ul></div>`;
  }).join('');
  $('#strategyDetailBody').innerHTML = html;
  $('#strategyDetailOverlay').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeStrategyModal(){ const o=$('#strategyDetailOverlay'); if(!o) return; o.classList.remove('active'); document.body.style.overflow='auto'; }

// ===== Lightbox =====
function openLightbox(el){ const lb=$('#lightbox'), img=$('#lightbox-img'); if(!lb||!img) return; const s=el?.querySelector?.('img')?.src; if(!s) return; img.src=s; lb.classList.add('active'); document.body.style.overflow='hidden'; }
function closeLightbox(){ const lb=$('#lightbox'); if(!lb) return; lb.classList.remove('active'); document.body.style.overflow='auto'; }

// ===== Project Gallery (modal) =====
function buildProjectSlides(images){
  const slider=$('#gallerySlider'), dotsC=$('#galleryDots'); if(!slider||!dotsC) return;
  slider.innerHTML=''; dotsC.innerHTML='';
  images.forEach((src,i)=>{
    const slide=document.createElement('div'); slide.className='gallery-slide'+(i===0?' active':'');
    const img=document.createElement('img'); img.alt='Project image '+(i+1); img.src=src; slide.appendChild(img); slider.appendChild(slide);
    const dot=document.createElement('div'); dot.className='gallery-dot'+(i===0?' active':''); dot.addEventListener('click',()=>goToProjectSlide(i)); dotsC.appendChild(dot);
  });
  PG_state.images=images.slice(); PG_state.index=0;
}
function openProjectGalleryFromCard(card){
  const modal=$('#projectGalleryModal'); if(!modal) return;
  let images=[]; const csv=card.getAttribute('data-images')||'';
  if(csv.trim()) images = csv.split(',').map(s=>s.trim()).filter(Boolean);
  else { const m=card.querySelector('.gallery-main img'); if(m?.src) images=[m.src]; }
  if(!images.length) return;
  PG_state.origin='projects';
  buildProjectSlides(images);
  modal.classList.add('active');
  document.body.style.overflow='hidden';
}
function changeProjectSlide(dir){
  if(!PG_state.images.length) return;
  const slides=$$('#gallerySlider .gallery-slide'); const dots=$$('#galleryDots .gallery-dot');
  slides[PG_state.index]?.classList.remove('active'); dots[PG_state.index]?.classList.remove('active');
  PG_state.index=(PG_state.index+dir+PG_state.images.length)%PG_state.images.length;
  slides[PG_state.index]?.classList.add('active'); dots[PG_state.index]?.classList.add('active');
}
function goToProjectSlide(idx){
  if(!PG_state.images.length) return;
  const slides=$$('#gallerySlider .gallery-slide'); const dots=$$('#galleryDots .gallery-dot');
  slides[PG_state.index]?.classList.remove('active'); dots[PG_state.index]?.classList.remove('active');
  PG_state.index=idx; slides[PG_state.index]?.classList.add('active'); dots[PG_state.index]?.classList.add('active');
}
function closeProjectGallery(){
  const modal=$('#projectGalleryModal'); if(modal){ modal.classList.remove('active'); document.body.style.overflow='auto'; }
  if(PG_state.origin==='trade'){ const sec=document.getElementById('trade-shows'); if(sec) sec.scrollIntoView({behavior:'smooth', block:'start'}); }
  PG_state.origin=null;
}

// ===== Timeline Spy (logo) =====
function updateTimelineSpy(){
  const items=$$('.timeline-item'); if(!items.length) return;
  const logoImg=$('#logo-img'); const indicators=$$('.indicator-dot'); if(!logoImg) return;
  let activeIndex=TIMELINE_ACTIVE_INDEX;
  const windowHeight=window.innerHeight, midTop=windowHeight*0.62, midBottom=windowHeight*0.38;
  items.forEach((item,idx)=>{ const r=item.getBoundingClientRect(); if(r.top<midTop && r.bottom>midBottom){ activeIndex=idx; item.classList.add('active'); } else { item.classList.remove('active'); }});
  TIMELINE_ACTIVE_INDEX=activeIndex;
  const activeItem=items[activeIndex];
  if(activeItem){ const newLogo=activeItem.getAttribute('data-logo'); const currentSrc=logoImg.getAttribute('src'); if(newLogo && newLogo!==currentSrc){ logoImg.style.opacity='0'; setTimeout(()=>{ logoImg.src=newLogo; logoImg.onload=()=>{ logoImg.style.opacity='1'; }; },160); } }
  indicators.forEach((dot,idx)=>dot.classList.toggle('active', idx===activeIndex));
}

// ===== Particles (hero) small & safe =====
function initParticles(){ const c=$('#particles'); if(!c) return; for(let i=0;i<20;i++){ const p=document.createElement('div'); p.style.cssText='position:absolute;border-radius:50%;background:var(--gold);pointer-events:none;'; p.style.left=Math.random()*100+'%'; p.style.top=Math.random()*100+'%'; const s=3+Math.random()*4; p.style.width=p.style.height=s+'px'; p.style.opacity=(0.22+Math.random()*0.35).toFixed(2); c.appendChild(p);} }

// ===== I18N (site dictionary já está no HTML) =====
function translateAll(lang){ PG_state.currentLang=lang; document.documentElement.lang=lang; const dict=(window.I18N&&window.I18N[lang])||(window.I18N&&window.I18N['en'])||{}; $$('[data-i18n]').forEach(el=>{ const path=el.dataset.i18n; const val=path?.split('.').reduce((a,k)=> (a&&a[k]!==undefined?a[k]:undefined), dict); if(val!==undefined) el.textContent=val; }); setTimeout(updateTimelineSpy,100); }
function markActiveLang(lang){ $$('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang)); }
function initLangSwitcher(){ const sw=$('#langSwitcher'); if(!sw) return; on(sw,'click',e=>{ const btn=e.target.closest('.lang-btn'); if(!btn) return; const lang=btn.dataset.lang; translateAll(lang); markActiveLang(lang); try{ localStorage.setItem('lang', lang);}catch(_){} }); }
function initI18N(){ try{ const stored=localStorage.getItem('lang'); const browser=(navigator.language||'en').slice(0,2).toLowerCase(); const initial=stored||( ['en','pt','es','fr'].includes(browser)?browser:'en'); translateAll(initial); markActiveLang(initial);}catch(e){ translateAll('en'); markActiveLang('en'); } }

// ===== Navbar / Scroll =====
function initNavbarScroll(){ const navbar=$('#navbar'); const scrollTopBtn=$('#scrollTop'); const onScroll=()=>{ const y=window.scrollY||document.documentElement.scrollTop; navbar?.classList.toggle('scrolled', y>50); scrollTopBtn?.classList.toggle('visible', y>600); updateTimelineSpy(); }; onScroll(); window.addEventListener('scroll', onScroll, {passive:true}); }
function scrollToTop(){ window.scrollTo({top:0, behavior:'smooth'}); }

// ===== Smooth anchors =====
function initSmoothAnchors(){ $$('a[href^="#"]').forEach(a=>{ on(a,'click',e=>{ const href=a.getAttribute('href'); if(!href||href==='#') return; const target=$(href); if(!target) return; e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }); }); }

// ===== Lightbox binding =====
function initLightbox(){ const lb=$('#lightbox'); const lbImg=$('#lightbox-img'); if(!lb||!lbImg) return; on(lb,'click',e=>{ if(e.target===lb) closeLightbox(); }); on(document,'keydown',e=>{ if(lb.classList.contains('active') && e.key==='Escape') closeLightbox(); }); }

// ===== Trade tabs =====
function initTradeTabs(){ const tabs=$$('.gallery-tab'); if(!tabs.length) return; tabs.forEach(btn=>{ on(btn,'click',()=>{ tabs.forEach(t=>{ t.classList.remove('active'); t.setAttribute('aria-selected','false'); }); btn.classList.add('active'); btn.setAttribute('aria-selected','true'); $$('.gallery-content').forEach(gc=>gc.classList.remove('active')); const panel = $('#'+btn.dataset.target); panel?.classList.add('active'); }); }); }

// ===== Project cards autoslide (kept identical behavior) =====
function setupCardAutoSlide(card){ const container=card.querySelector('.gallery-main'); if(!container) return; let images=[]; const csv=card.getAttribute('data-images')||''; if(csv.trim()) images=csv.split(',').map(s=>s.trim()).filter(Boolean); else { const main=container.querySelector('img'); if(main?.src) images=[main.src]; } if(!images.length) return; const imgEl=container.querySelector('img'); const auto=card.getAttribute('data-autoslide')==='true'; const interval=Math.max(1200, parseInt(card.getAttribute('data-interval'),10)||2500); const state={images, idx:0, timer:null, interval, imgEl, paused:false}; CardSlides.set(card,state);
  function tick(){ if(state.paused || !auto || state.images.length<=1) return; state.idx=(state.idx+1)%state.images.length; state.imgEl.style.opacity='0'; setTimeout(()=>{ state.imgEl.src=state.images[state.idx]; state.imgEl.onload=()=>{ state.imgEl.style.opacity='1'; }; const dots=card.querySelectorAll('.gallery-dot'); dots.forEach((d,i)=> d.classList.toggle('active', i===state.idx)); },160); }
  function start(){ stop(); if(auto && state.images.length>1) state.timer=setInterval(tick, state.interval); }
  function stop(){ if(state.timer){ clearInterval(state.timer); state.timer=null; } }
  on(card,'mouseenter',()=>{ state.paused=true; }); on(card,'mouseleave',()=>{ state.paused=false; });
  const clickable = card.querySelector('.gallery-overlay') || container; on(clickable,'click', (e)=>{ e.stopPropagation(); openProjectGalleryFromCard(card); });
  // add dots on card if missing
  const gallery=card.querySelector('.project-gallery'); if(gallery && !gallery.querySelector('.gallery-dots')){ const dots=document.createElement('div'); dots.className='gallery-dots'; images.forEach((_,i)=>{ const dot=document.createElement('div'); dot.className='gallery-dot'+(i===0?' active':''); dots.appendChild(dot); }); gallery.appendChild(dots); }
  start();
}

// ===== Loading (original) =====
function initLoading(){ const loading=$('#loading'); if(!loading) return; window.addEventListener('load', ()=>{ setTimeout(()=>{ loading.classList.add('hidden'); setTimeout(()=> loading.remove(), 400); }, 1200); }); }

// --- Loading overlay robust fallback (prevents stuck overlay) ---
(function(){
  const loading = document.getElementById('loading');
  if(!loading) return;
  function hide(){ if(!loading || loading.classList.contains('hidden')) return; loading.classList.add('hidden'); setTimeout(()=>{ try{ loading.remove(); }catch(_){ } }, 400); }
  if(document.readyState==='complete' || document.readyState==='interactive') setTimeout(hide, 1200);
  else document.addEventListener('DOMContentLoaded', ()=> setTimeout(hide, 1500));
  setTimeout(hide, 5000); // kill-switch
})();

// ===== Bootstrap =====
document.addEventListener('DOMContentLoaded', ()=>{
  initLoading();
  initNavbarScroll();
  initSmoothAnchors();
  initLightbox();
  initTradeTabs();
  initParticles();
  initLangSwitcher();
  initI18N();
  $$('.project-card').forEach(setupCardAutoSlide);
  // Close by clicking outside overlays
  on(document,'click',(e)=>{ if(e.target?.id==='statModalOverlay') closeStatModal(); if(e.target?.id==='strategyDetailOverlay') closeStrategyModal(); });
  on(document,'keydown',(e)=>{ if(e.key==='Escape'){ closeStatModal(); closeStrategyModal(); }});
});

// ===== Expose globals for inline handlers in HTML =====
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
