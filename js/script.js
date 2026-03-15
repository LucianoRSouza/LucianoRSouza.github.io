
// I18N (EN + PT minimal for page texts)
window.I18N = {
  en:{nav:{about:'About',experience:'Experience',projects:'Projects',tradeshows:'Trade Shows',certs:'Certifications',contact:'Contact'},
      hero:{title:'Luciano Rodrigues de Souza',subtitle:'AI-Driven Procurement & Operations Leader · Strategic Transformation',desc:'I connect governance, technical rigor, and AI to deliver measurable outcomes: transparent tenders, reliable partners, and resilient operations across Europe, LATAM, and Asia.',badges:{top:'Top Performer 2025',middle:'AI Specialist',bottom:'Trusted Leader'},stats:{savings:'Cumulative Savings',savings_note:'Across multi-category negotiations',rfps:'RFP/RFQ Led',rfps_note:'With technical annexes & weighted scoring',projects:'Project Portfolio',projects_note:'From concept to audited mass production',regions:'Countries',regions_note:'Europe · LATAM · Asia'}},
      cta:{connect:"Let's Connect",journey:'View Journey'},
      timeline:{title:'Professional Journey',subtitle:'15+ years of progressive leadership',level:{senior:'Senior Level',director:'Director Level',manager:'Manager Level',growth:'Growth Phase'}},
      projects:{title:'Featured Projects',subtitle:'Product development excellence and AI innovation portfolio',view_gallery:'View Gallery'},
      tradeshows:{title:'Trade Shows & Global Exhibitions',subtitle:'Exhibitor and strategic buyer across worldwide markets'},
      certs:{title:'Certifications & Education',subtitle:'Continuous learning in AI, Data Science, and Strategic Procurement'},
      vol:{title:'Volunteering & Community Impact',subtitle:'Giving back through education and mentorship'},
      contact:{title:"Let's Connect",subtitle:'Ready to transform your procurement strategy?',email:'Email',location:'Location'}},
  pt:{nav:{about:'Sobre',experience:'Experiência',projects:'Projetos',tradeshows:'Feiras',certs:'Certificações',contact:'Contato'},
      hero:{title:'Luciano Rodrigues de Souza',subtitle:'Procurement & Operações orientados por IA · Transformação Estratégica',desc:'Conecto governança, rigor técnico e IA para gerar resultados mensuráveis: tenders transparentes, parceiros confiáveis e operações resilientes na Europa, LATAM e Ásia.',badges:{top:'Top Performer 2025',middle:'Especialista em IA',bottom:'Líder de Confiança'},stats:{savings:'Poupança Acumulada',savings_note:'Em negociações multi-categoria',rfps:'RFP/RFQ Conduzidos',rfps_note:'Com anexos técnicos e scoring ponderado',projects:'Portfólio de Projetos',projects_note:'Do conceito à produção auditada',regions:'Países',regions_note:'Europa · LATAM · Ásia'}},
      cta:{connect:'Vamos Conversar',journey:'Ver Trajetória'},
      timeline:{title:'Trajetória Profissional',subtitle:'15+ anos de liderança progressiva',level:{senior:'Nível Sénior',director:'Diretoria',manager:'Gestão',growth:'Expansão'}},
      projects:{title:'Projetos em Destaque',subtitle:'Excelência em desenvolvimento de produto e inovação com IA',view_gallery:'Ver Galeria'},
      tradeshows:{title:'Feiras & Expos Internacionais',subtitle:'Expositor e comprador estratégico em mercados globais'},
      certs:{title:'Certificações & Educação',subtitle:'Aprendizado contínuo em IA, Data Science e Procurement'},
      vol:{title:'Voluntariado & Impacto Comunitário',subtitle:'Retribuindo através da educação e mentoria'},
      contact:{title:'Vamos Conversar',subtitle:'Pronto para transformar sua estratégia de procurement?',email:'Email',location:'Localização'}}
};

// Localized details for stat modals
const STAT_DATA = {
  en:{savings:{icon:'fa-piggy-bank',title:'Cumulative Savings Delivered',value:'€1M+',details:['Multi-category strategic sourcing across direct and indirect spend','Favorable payment terms (60–90 days) improving cash flow','Should‑cost modeling with 15–25% reduction opportunities','Supplier base consolidation from 200+ to 80 key partners','Zero‑based budgeting on CAPEX saving ~20%']},
      rfps:{icon:'fa-file-contract',title:'Strategic Tenders Led',value:'120+',details:['End‑to‑end RFI/RFP/RFQ with technical annexes (A1/A2)','Weighted scoring (technical, commercial, ESG)','E‑procurement integration with audit trail','Cross‑functional evaluation committees','Cycle time reduced 45 → 28 days']},
      projects:{icon:'fa-project-diagram',title:'Project Portfolio Value',value:'€10M+',details:['NPD from concept to mass production','Licensed launches (Blaupunkt, S&J, Pininfarina)','Factory audits & capability assessments in Asia','Quality systems (ISO 9001, compliance)','Logistics optimization & customs compliance']},
      regions:{icon:'fa-globe',title:'Global Operations Coverage',value:'20+',details:['Europe: PT, ES, DE, UK, NL, IT, FR','LATAM: BR, AR, CL, CO, MX, PE, UY','Asia: CN, HK, TW, VN, IN, KR','Multi‑cultural negotiations','Time zone orchestration 24/7']}}
  ,pt:{savings:{icon:'fa-piggy-bank',title:'Poupança Acumulada Entregue',value:'€1M+',details:['Sourcing estratégico multi‑categorias (direto/indireto)','Prazos de pagamento (60–90 dias), melhor fluxo de caixa','Should‑cost com oportunidades de 15–25%','Consolidação de 200+ para 80 parceiros‑chave','Orçamentação base‑zero em CAPEX (≈20%)']},
      rfps:{icon:'fa-file-contract',title:'Tenders Estratégicos Conduzidos',value:'120+',details:['RFI/RFP/RFQ ponta‑a‑ponta com anexos A1/A2','Matriz ponderada (técnico, comercial, ESG)','Integração e‑procurement com trilha de auditoria','Comitês de avaliação multifuncionais','Ciclo médio 45 → 28 dias']},
      projects:{icon:'fa-project-diagram',title:'Valor do Portefólio de Projetos',value:'€10M+',details:['Desenvolvimento do conceito à produção','Lançamentos licenciados (Blaupunkt, S&J, Pininfarina)','Auditorias e avaliação de capacidades na Ásia','Sistemas de qualidade (ISO 9001, compliance)','Otimização logística e aduaneira']},
      regions:{icon:'fa-globe',title:'Cobertura Operacional Global',value:'20+',details:['Europa: PT, ES, DE, UK, NL, IT, FR','LATAM: BR, AR, CL, CO, MX, PE, UY','Ásia: CN, HK, TW, VN, IN, KR','Negociações multiculturais','Orquestração de fusos 24/7']}}
};

const $ = (s,ctx=document)=>ctx.querySelector(s); const $$=(s,ctx=document)=>Array.from(ctx.querySelectorAll(s));
const PG = {lang:'en', images:[], index:0};

function translateAll(lang){ PG.lang=lang; document.documentElement.lang=lang; const dict = (window.I18N[lang]||window.I18N.en)||{}; $$('[data-i18n]').forEach(el=>{const path=el.dataset.i18n; const val=path.split('.').reduce((a,k)=> a&&a[k]!=null?a[k]:undefined, dict); if(val!==undefined) el.textContent=val;}); }

function initLang(){ const stored=localStorage.getItem('lang'); const browser=(navigator.language||'en').slice(0,2).toLowerCase(); const initial= stored || (['en','pt'].includes(browser)?browser:'en'); translateAll(initial); }

// --- Stat boxes modal ---
function openStatModal(key){ const d=(STAT_DATA[PG.lang]||STAT_DATA.en)[key]; if(!d) return; $('#statIcon').className='fas '+d.icon; $('#statTitle').textContent=d.title; $('#statValue').textContent=d.value; $('#statList').innerHTML=d.details.map(x=>`<li>${x}</li>`).join(''); $('#statOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeStatModal(){ $('#statOverlay').classList.remove('active'); document.body.style.overflow='auto'; }
function initStatBoxes(){ $$('.stat-box').forEach(b=>{ const k=b.getAttribute('data-stat'); b.addEventListener('click',()=>openStatModal(k)); b.addEventListener('keypress',e=>{if(e.key==='Enter'||e.key===' ') openStatModal(k);}); }); }

// --- Project cards + gallery ---
function setupCard(card){ const csv=card.getAttribute('data-images')||''; const imgs=csv.split(',').map(s=>s.trim()).filter(Boolean); const overlay=card.querySelector('.gallery-overlay'); const main=card.querySelector('.gallery-main')||card; const open=(e)=>{ e&&e.stopPropagation(); if(!imgs.length){const img=card.querySelector('img'); if(img?.src) imgs.push(img.src);} buildSlides(imgs); $('#pgModal').classList.add('active'); document.body.style.overflow='hidden'; }; (overlay||main).addEventListener('click',open); }
function buildSlides(images){ const slider=$('#pgSlider'); const dots=$('#pgDots'); slider.innerHTML=''; dots.innerHTML=''; PG.images=images.slice(); PG.index=0; images.forEach((src,i)=>{ const s=document.createElement('div'); s.className='gallery-slide'+(i===0?' active':''); const im=new Image(); im.src=src; s.appendChild(im); slider.appendChild(s); const d=document.createElement('div'); d.className='gallery-dot'+(i===0?' active':''); d.addEventListener('click',()=>goSlide(i)); dots.appendChild(d); }); }
function changeSlide(dir){ if(!PG.images.length) return; const slides=$$('.gallery-slide'); const dots=$$('.gallery-dot'); slides[PG.index].classList.remove('active'); dots[PG.index].classList.remove('active'); PG.index=(PG.index+dir+PG.images.length)%PG.images.length; slides[PG.index].classList.add('active'); dots[PG.index].classList.add('active'); }
function goSlide(i){ const slides=$$('.gallery-slide'); const dots=$$('.gallery-dot'); slides[PG.index].classList.remove('active'); dots[PG.index].classList.remove('active'); PG.index=i; slides[PG.index].classList.add('active'); dots[PG.index].classList.add('active'); }
function closeGallery(){ $('#pgModal').classList.remove('active'); document.body.style.overflow='auto'; }

// --- Trade shows duo ---
function initTradeDuo(){ const sec=$('#trade-shows'); if(!sec) return; const blau=$('#gallery-blaupunkt .gallery-item img'); const ford=$('#gallery-ford .gallery-item img'); if(!blau||!ford) return; const duo=document.createElement('div'); duo.className='trade-duo'; duo.innerHTML=`
  <div class="brand-card" data-brand="blaupunkt">
    <div class="brand-head"><h4>Blaupunkt</h4><i class="fas fa-images" style="color:var(--gold);"></i></div>
    <div class="brand-body"><img src="${blau.getAttribute('src')}" alt="Blaupunkt"/></div>
  </div>
  <div class="brand-card" data-brand="ford">
    <div class="brand-head"><h4>Ford Lighting</h4><i class="fas fa-images" style="color:var(--gold);"></i></div>
    <div class="brand-body"><img src="${ford.getAttribute('src')}" alt="Ford Lighting"/></div>
  </div>`; sec.insertBefore(duo, sec.querySelector('.gallery-tabs'));
  const open=(brand)=>{ const panel=$('#'+(brand==='blaupunkt'?'gallery-blaupunkt':'gallery-ford')); const imgs=Array.from(panel.querySelectorAll('.gallery-item img')).map(i=>i.getAttribute('src')).filter(Boolean); buildSlides(imgs); $('#pgModal').classList.add('active'); document.body.style.overflow='hidden'; };
  duo.querySelector('[data-brand="blaupunkt"]').addEventListener('click',()=>open('blaupunkt'));
  duo.querySelector('[data-brand="ford"]').addEventListener('click',()=>open('ford'));
}

// --- Strategy modal (6 boxes) ---
const STRAT = { en:{1:{t:'Stand Design & Merchandising',s:'Creating immersive brand experiences',i:'fa-drafting-compass',u:['Co-created concept with Marketing','Optimized visitor flow','Display hierarchy highlighting hero SKUs','Lighting for premium perception','Interactive demo stations']},2:{t:'Meetings Orchestration & Lead Capture',s:'Maximizing ROI through structured engagement',i:'fa-calendar-check',u:['Target list 200+ prospects','Automated scheduling','Sales briefing','Segmented pitch decks','Lead scoring']},3:{t:'Negotiations & Partnering',s:'Building strategic supplier relationships',i:'fa-handshake-angle',u:['Qualification (finance/capacity)','Terms: MOQ, payment, exclusivity','Pricing with breaks & rebates','Quality agreements & actions','IP/NDA for NPD']},4:{t:'Tech Discovery & Benchmark',s:'Staying ahead of innovation',i:'fa-microchip',u:['Scouting 50+ booths','Competitive teardowns','Cost benchmarks','Trend mapping (IoT/sustainability)','Patent checks']},5:{t:'Factory Audits & Capability Mapping',s:'Ensuring operational excellence',i:'fa-industry',u:['ISO 9001 verification','Capacity analysis','Maintenance & calibration','Workforce skills & training','Environmental compliance']},6:{t:'Post‑Fair Pipeline, ROI & Governance',s:'Converting leads into revenue',i:'fa-chart-line',u:['Hot/Warm/Cold','CRM sequences','Value & probability','Regional handover','Weekly reviews']} },
             pt:{1:{t:'Design de Stand & Merchandising',s:'Experiências de marca imersivas',i:'fa-drafting-compass',u:['Conceito co-criado com Marketing','Fluxo otimizado','Hierarquia de exposição (SKUs herói)','Iluminação premium','Estações de demonstração']},2:{t:'Agenda & Captação de Leads',s:'Maximizando ROI com estrutura',i:'fa-calendar-check',u:['Lista‑alvo 200+','Agendamento automático','Briefing comercial','Pitches por segmento','Scoring de leads']},3:{t:'Negociação & Parcerias',s:'Relações estratégicas',i:'fa-handshake-angle',u:['Qualificação (finanças/capacidades)','Termos: MOQ, pagamento, exclusividade','Pricing com escalas/rebates','Acordos de qualidade','IP/NDA para NPD']},4:{t:'Descoberta Tecnológica & Benchmark',s:'À frente da inovação',i:'fa-microchip',u:['Scouting 50+ stands','Teardowns competitivos','Benchmark de custos','Tendências (IoT/sustentabilidade)','Patentes']},5:{t:'Auditorias & Capacidades',s:'Excelência operacional',i:'fa-industry',u:['Verificação ISO 9001','Análise de capacidade','Manutenção e calibração','Skills & treino','Compliance ambiental']},6:{t:'Pipeline Pós‑Feira, ROI & Governance',s:'Convertendo leads em receita',i:'fa-chart-line',u:['Hot/Warm/Cold','Sequências no CRM','Valor & probabilidade','Handover regional','Revisões semanais']} } };
function openStrategyModal(n){ const d=(STRAT[PG.lang]||STRAT.en)[n]; if(!d) return; $('#strIcon').className='fas '+d.i; $('#strTitle').textContent=d.t; $('#strSub').textContent=d.s; $('#strBody').innerHTML='<ul>'+d.u.map(x=>`<li>${x}</li>`).join('')+'</ul>'; $('#strOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeStrategyModal(){ $('#strOverlay').classList.remove('active'); document.body.style.overflow='auto'; }

// --- Mobile timeline logos outside the card ---
function initMobileLogos(){ if(!window.matchMedia('(max-width: 1200px)').matches) return; $$('.timeline-item').forEach(item=>{ if(item.querySelector('.mobile-company-logo')) return; const logo=item.getAttribute('data-logo'); if(!logo) return; const img=document.createElement('img'); img.src=logo; img.alt='Company logo'; img.className='mobile-company-logo'; item.appendChild(img); }); }

// --- Bootstrap ---
document.addEventListener('DOMContentLoaded',()=>{
  initLang();
  // stat boxes
  initStatBoxes();
  // projects
  $$('.project-card').forEach(setupCard);
  // duo trade shows
  initTradeDuo();
  // mobile logos
  initMobileLogos();
  // esc to close modals
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeGallery(); closeStatModal(); closeStrategyModal(); } });
});

// Expose for inline
window.openStrategyModal=openStrategyModal; window.closeStrategyModal=closeStrategyModal;
window.changeSlide=changeSlide; window.goSlide=goSlide; window.closeGallery=closeGallery;
window.openStatModal=openStatModal; window.closeStatModal=closeStatModal;
