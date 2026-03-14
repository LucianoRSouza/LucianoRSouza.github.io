

// === Enhancements: Blaupunkt mapping (strict) + mobile badges per timeline item ===
(function(){
  function fixBlaupunktGalleriesStrict(){
    const tools=['./Blaupunkt_Tools.png','./Blaupunkt_Power_Tools.png','./Blaupunkt_Garden_Tools.png'];
    const power=['./Blaupunkt_Power_Tools.png'];
    const garden=['./Blaupunkt_Garden_Tools.png'];
    const set=(key,arr)=>{const el=document.querySelector(`.project-card[data-gallery="${key}"]`); if(el) el.setAttribute('data-images', arr.join(','));};
    set('blaupunkt-tools', tools); set('blaupunkt-power', power); set('blaupunkt-garden', garden);
  }
  function injectTimelineMobileBadges(){
    if(window.matchMedia && !window.matchMedia('(max-width: 768px)').matches) return;
    document.querySelectorAll('.timeline-item').forEach(it=>{
      if(it.querySelector('.timeline-badge-mobile')) return;
      const src=it.getAttribute('data-logo'); if(!src) return;
      const badge=document.createElement('div'); badge.className='timeline-badge-mobile';
      const im=document.createElement('img'); im.src=src; im.alt='Company';
      badge.appendChild(im); it.appendChild(badge);
    });
  }
  document.addEventListener('DOMContentLoaded',()=>{ try{fixBlaupunktGalleriesStrict()}catch(_){ } try{injectTimelineMobileBadges()}catch(_){ } });
})();
