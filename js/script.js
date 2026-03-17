(function(){
'use strict';

const PG_state={images:[],index:0,currentLang:'en',origin:null};
const CardSlides=new Map();
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
const on=(el,ev,fn,o)=>el&&el.addEventListener(ev,fn,o);


function translateAll(lang){
  try{
    PG_state.currentLang=lang; document.documentElement.lang=lang;
    const dict=(window.I18N&&window.I18N[lang])||(window.I18N&&window.I18N['en'])||{};
    $$('[data-i18n]').forEach(el=>{
      const path=el.dataset.i18n; if(!path) return;
      const val=path.split('.').reduce((a,k)=> (a&&a[k]!==undefined)?a[k]:undefined, dict);
      if(val!==undefined) el.textContent=val;
    });
  }catch(e){}
}
function markActiveLang(lang){ $$('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang)); }
function initI18N(){
  try{
    const stored=localStorage.getItem('lang');
    const browser=(navigator.language||'en').slice(0,2).toLowerCase();
    const initial= stored || (['en','pt','es','fr'].includes(browser)?browser:'en');
    translateAll(initial); markActiveLang(initial);
  }catch(e){ translateAll('en'); markActiveLang('en'); }
}


function initLoading(){ const l=$('#loading'); if(!l) return; addEventListener('load',()=>{ setTimeout(()=>{ l.classList.add('hidden'); setTimeout(()=>{ try{l.remove();}catch(_){ } },400); },1200); }); }
// Kill-switch absoluto (5s)
setTimeout(()=>{ try{ const l=$('#loading'); if(l){ l.classList.add('hidden'); setTimeout(()=>{ try{l.remove();}catch(_){ } },400); } }catch(_){} }, 5000);


let TL_LAST_ACTIVE=0;
function updateTimelineSpy(){
  const items=$$('.timeline-item'); if(!items.length) return;
  const logoImg=$('#logo-img'); const indicators=$$('.indicator-dot');
  let activeIndex=-1; const H=innerHeight, midTop=H*0.62, midBottom=H*0.38;
  items.forEach((it,idx)=>{ const r=it.getBoundingClientRect(); const onView=r.top<midTop && r.bottom>midBottom; it.classList.toggle('active', onView); if(onView) activeIndex=idx; });
  if(activeIndex===-1) activeIndex = TL_LAST_ACTIVE; TL_LAST_ACTIVE=activeIndex;
  const activeItem=items[activeIndex];
  if(activeItem && logoImg){ const newLogo=activeItem.getAttribute('data-logo'); const cur=logoImg.getAttribute('src'); if(newLogo && newLogo!==cur){ logoImg.style.opacity='0'; setTimeout(()=>{ logoImg.src=newLogo; logoImg.onload=()=>{ logoImg.style.opacity='1'; }; },160); } }
  indicators.forEach((d,i)=>d.classList.toggle('active', i===activeIndex));
}
function initNavbarScroll(){ const nav=$('#navbar'); const topBtn=$('#scrollTop'); const onScroll=()=>{ const y=scrollY||document.documentElement.scrollTop; nav?.classList.toggle('scrolled', y>50); topBtn?.classList.toggle('visible', y>600); updateTimelineSpy(); }; onScroll(); addEventListener('scroll',onScroll,{passive:true}); }
function scrollToTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
window.scrollToTop = scrollToTop;


function initSmoothAnchors(){ $$('a[href^="#"]').forEach(a=>{ on(a,'click',(e)=>{ const href=a.getAttribute('href'); if(!href||href==='#') return; const t=$(href); if(!t) return; e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }); }); }


function initLightbox(){ const lb=$('#lightbox'); const img=$('#lightbox-img'); if(!lb||!img) return; on(lb,'click',(e)=>{ if(e.target===lb) closeLightbox(); }); on(document,'keydown',(e)=>{ if(lb.classList.contains('active')&&e.key==='Escape') closeLightbox(); }); }
function openLightbox(el){ const lb=$('#lightbox'); const img=$('#lightbox-img'); if(!lb||!img) return; const im=el?.querySelector?.('img'); if(!im?.src) return; img.src=im.src; lb.classList.add('active'); document.body.style.overflow='hidden'; }
function closeLightbox(){ const lb=$('#lightbox'); if(!lb) return; lb.classList.remove('active'); document.body.style.overflow='auto'; }
window.openLightbox=openLightbox; window.closeLightbox=closeLightbox;


const statDetailsData={
  savings:{icon:'fa-piggy-bank',title:'Cumulative Savings Delivered',value:'€1M+',details:[
    'Multi-category strategic sourcing initiatives across direct and indirect spend',
    'Negotiated favorable payment terms (60-90 days) improving cash flow',
    'Implemented should-cost modeling identifying 15-25% cost reduction opportunities',
    'Consolidated supplier base from 200+ to 80 key partners',
    'Zero-based budgeting approach for CAPEX projects saving 20% on average']},
  rfps:{icon:'fa-file-contract',title:'Strategic Tenders Led',value:'120+',details:[
    'End-to-end RFI/RFP/RFQ process design with technical annexes (A1/A2)',
    'Weighted scoring balancing technical, commercial and ESG',
    'E-procurement platform integration with audit trails',
    'Cross-functional evaluation committees',
    'Cycle time reduction from 45 to 28 days']},
  projects:{icon:'fa-project-diagram',title:'Project Portfolio Value',value:'€10M+',details:[
    'NPD from concept to mass production',
    'Licensed portfolio launches (Blaupunkt, S&J, Pininfarina)',
    'Factory audits and capability assessments',
    'Quality systems (ISO 9001, compliance frameworks)',
    'Cross-border logistics & customs compliance']},
  regions:{icon:'fa-globe',title:'Global Operations Coverage',value:'20+',details:[
    'Europe, LATAM, Asia coverage',
    'Multi-cultural negotiation experience',
    'Local market knowledge & certifications',
    '24/7 project coordination across time zones',
    'Business continuity focus']}
};
function openStatModal(key){ const d=statDetailsData[key]; if(!d) return; $('#statModalIcon').className='fas '+d.icon; $('#statModalTitle').textContent=d.title; $('#statModalValue').textContent=d.value; $('#statModalDetails').innerHTML=d.details.map(x=>`<li>${x}</li>`).join(''); $('#statModalOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeStatModal(){ const ov=$('#statModalOverlay'); if(!ov) return; ov.classList.remove('active'); document.body.style.overflow='auto'; }
function initStatModals(){ $$('.stat-box').forEach(box=>{ box.style.cursor='pointer'; on(box,'click',()=>{ const k=box.dataset.stat; if(k) openStatModal(k); }); }); }
window.openStatModal=openStatModal; window.closeStatModal=closeStatModal;


const STRAT_PT={1:{title:'Design de Stand & Merchandising',subtitle:'Experiências imersivas',icon:'fa-drafting-compass',sections:[{title:'Abordagem',items:['Co-criação com Marketing','Fluxo otimizado','Hero SKUs em destaque','VM premium','Demos interativas']},{title:'Execução',items:['Renderizações D-60','Módulos reutilizáveis','Sinalização digital','Logística 500+ SKUs','Supervisão on-site']}]},2:{title:'Reuniões & Leads',subtitle:'ROI com engajamento estruturado',icon:'fa-calendar-check',sections:[{title:'Pré-evento',items:['Lista-alvo 200+','Agendador com lembretes','Briefing de produto','Decks por segmento','Lead scoring (BANT)']},{title:'No stand',items:['Slots 30 min','Captação em CRM','Follow-up em 4h','Notas padronizadas','Daily huddle']}]}};
const STRAT_BASE={}; // usa dados mínimos; conteúdo principal exibido via STRAT_PT quando pt
function openStrategyModal(n){ const lang=(document.documentElement.lang||'en').slice(0,2); const d=(lang==='pt'&&STRAT_PT[n])||(STRAT_BASE[n]); if(!d) return; $('#strategyDetailIcon').className='fas '+(d.icon||'fa-drafting-compass'); $('#strategyDetailTitle').textContent=d.title||''; $('#strategyDetailSubtitle').textContent=d.subtitle||''; const body=(d.sections||[]).map(sec=>`<div class="strategy-detail-section"><h4><i class="fas fa-chevron-right"></i> ${sec.title}</h4><ul>${(sec.items||[]).map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join(''); $('#strategyDetailBody').innerHTML=body; $('#strategyDetailOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeStrategyModal(){ const ov=$('#strategyDetailOverlay'); if(!ov) return; ov.classList.remove('active'); document.body.style.overflow='auto'; }
window.openStrategyModal=openStrategyModal; window.closeStrategyModal=closeStrategyModal;


function buildProjectSlides(images){ const s=$('#gallerySlider'); const d=$('#galleryDots'); if(!s||!d) return; s.innerHTML=''; d.innerHTML=''; images.forEach((src,i)=>{ const sl=document.createElement('div'); sl.className='gallery-slide'+(i===0?' active':''); const im=document.createElement('img'); im.alt='Project image '+(i+1); im.src=src; sl.appendChild(im); s.appendChild(sl); const dot=document.createElement('div'); dot.className='gallery-dot'+(i===0?' active':''); dot.addEventListener('click',()=>goToProjectSlide(i)); d.appendChild(dot); }); PG_state.images=images.slice(); PG_state.index=0; }
function changeProjectSlide(dir){ if(!PG_state.images.length) return; const slides=$$('#gallerySlider .gallery-slide'); const dots=$$('#galleryDots .gallery-dot'); slides[PG_state.index]?.classList.remove('active'); dots[PG_state.index]?.classList.remove('active'); PG_state.index=(PG_state.index+dir+PG_state.images.length)%PG_state.images.length; slides[PG_state.index]?.classList.add('active'); dots[PG_state.index]?.classList.add('active'); }
function goToProjectSlide(i){ if(!PG_state.images.length) return; const slides=$$('#gallerySlider .gallery-slide'); const dots=$$('#galleryDots .gallery-dot'); slides[PG_state.index]?.classList.remove('active'); dots[PG_state.index]?.classList.remove('active'); PG_state.index=i; slides[PG_state.index]?.classList.add('active'); dots[PG_state.index]?.classList.add('active'); }
function openProjectGalleryFromCard(card){ const modal=$('#projectGalleryModal'); if(!modal) return; let images=[]; const csv=card.getAttribute('data-images')||''; if(csv.trim()) images=csv.split(',').map(s=>s.trim()).filter(Boolean); else { const main=card.querySelector('.gallery-main img'); if(main?.src) images=[main.src]; }
  if(!images.length) return; PG_state.origin='projects'; buildProjectSlides(images); modal.classList.add('active'); document.body.style.overflow='hidden'; }
function closeProjectGallery(){ const m=$('#projectGalleryModal'); if(m){ m.classList.remove('active'); document.body.style.overflow='auto'; } if(PG_state.origin==='trade'){ const sec=$('#trade-shows'); if(sec) sec.scrollIntoView({behavior:'smooth',block:'start'}); } PG_state.origin=null; }
window.changeProjectSlide=changeProjectSlide; window.goToProjectSlide=goToProjectSlide; window.closeProjectGallery=closeProjectGallery; window.openProjectGalleryFromCard=openProjectGalleryFromCard;


function setupCardAutoSlide(card){ const cont=card.querySelector('.gallery-main'); if(!cont) return; let images=[]; const csv=card.getAttribute('data-images')||''; if(csv.trim()) images=csv.split(',').map(s=>s.trim()).filter(Boolean); else { const m=cont.querySelector('img'); if(m?.src) images=[m.src]; }
  if(!images.length) return; const imgEl=cont.querySelector('img'); const auto=(card.getAttribute('data-autoslide')==='true'); const interval=Math.max(1200, parseInt(card.getAttribute('data-interval')||'2500',10)); const st={images, idx:0, timer:null, interval, imgEl, paused:false}; CardSlides.set(card, st);
  function tick(){ if(st.paused||!auto||st.images.length<=1) return; st.idx=(st.idx+1)%st.images.length; imgEl.style.opacity='0'; setTimeout(()=>{ imgEl.src=st.images[st.idx]; imgEl.onload=()=>{ imgEl.style.opacity='1'; }; const dots=card.querySelectorAll('.gallery-dot'); dots.forEach((d,i)=>d.classList.toggle('active', i===st.idx)); },160); }
  function start(){ stop(); if(auto && st.images.length>1) st.timer=setInterval(tick, st.interval); }
  function stop(){ if(st.timer){ clearInterval(st.timer); st.timer=null; } }
  on(card,'mouseenter',()=>{ st.paused=true; }); on(card,'mouseleave',()=>{ st.paused=false; });
  const clickable = card.querySelector('.gallery-overlay') || cont; on(clickable,'click',(e)=>{ e.stopPropagation(); openProjectGalleryFromCard(card); });
  const pg=card.querySelector('.project-gallery'); if(pg && !pg.querySelector('.gallery-dots')){ const dotsWrap=document.createElement('div'); dotsWrap.className='gallery-dots'; images.forEach((_,i)=>{ const dot=document.createElement('div'); dot.className='gallery-dot'+(i===0?' active':''); dotsWrap.appendChild(dot); }); pg.appendChild(dotsWrap); }
  start(); }


function initCustomCursor(){ const c=$('#cursor'); const f=$('#cursorFollower'); if(!c||!f) return; if(matchMedia('(pointer: coarse)').matches){ c.style.display='none'; f.style.display='none'; return; }
  document.body.classList.add('custom-cursor');
  let cx=window.innerWidth/2, cy=window.innerHeight/2, fx=cx, fy=cy; c.style.transform=`translate(${cx}px,${cy}px)`; f.style.transform=`translate(${fx}px,${fy}px)`;
  on(document,'mousemove',e=>{ cx=e.clientX; cy=e.clientY; c.style.transform=`translate(${cx}px,${cy}px)`; });
  (function loop(){ fx += (cx - fx)*0.15; fy += (cy - fy)*0.15; f.style.transform=`translate(${fx}px,${fy}px)`; requestAnimationFrame(loop); })();
  // realce em elementos interativos
  $$('.btn, a, button, .project-card, .gallery-item, .stat-box, .strategy-item').forEach(el=>{
    on(el,'mouseenter',()=>{ c.style.transform+=' scale(1.2)'; f.style.transform+=' scale(1.03)'; });
    on(el,'mouseleave',()=>{ /* reset via next mouse move */ });
  });
}


function initTradeTabs(){ const tabs=$$('.gallery-tab'); if(!tabs.length) return; tabs.forEach(btn=>{ on(btn,'click',()=>{ tabs.forEach(t=>{ t.classList.remove('active'); t.setAttribute('aria-selected','false'); }); btn.classList.add('active'); btn.setAttribute('aria-selected','true'); $$('.gallery-content').forEach(gc=>gc.classList.remove('active')); const p=$('#'+btn.dataset.target); p?.classList.add('active'); }); }); }


function initVolunteerEnhancement(){ const sec=$('#volunteering'); if(!sec) return; const hero=sec.querySelector('.volunteer-hero-image'); if(hero) return; const header=sec.querySelector('.section-header'); if(!header) return; const h=document.createElement('div'); h.className='volunteer-hero-image animate-on-scroll visible'; h.innerHTML='<img src="./gadsdenstatecommunitycollege.jpg" alt="Gadsden State Community College" onerror="this.style.display='none'" />'; header.after(h); }


document.addEventListener('DOMContentLoaded',()=>{
  initLoading();
  initNavbarScroll();
  initSmoothAnchors();
  initLightbox();
  initI18N();
  initTradeTabs();
  initCustomCursor();
  // project cards
  $$('.project-card').forEach(setupCardAutoSlide);
  // stat boxes modal
  initStatModals();
  // close modals on background/Esc
  on(document,'click',(e)=>{ if(e.target?.id==='statModalOverlay') closeStatModal(); if(e.target?.id==='strategyDetailOverlay') closeStrategyModal(); });
  on(document,'keydown',(e)=>{ if(e.key==='Escape'){ try{closeStatModal();}catch(_){} try{closeStrategyModal();}catch(_){} } });
});

})();
