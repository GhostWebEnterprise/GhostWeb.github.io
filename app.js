document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));

const rail=document.querySelector('[data-swipe]');
const dots=[...document.querySelectorAll('.dots i')];
if(rail){
  const updateDots=()=>{
    const cards=[...rail.children];
    if(!cards.length)return;
    const center=rail.scrollLeft+rail.clientWidth/2;
    let active=0,best=Infinity;
    cards.forEach((card,i)=>{const c=card.offsetLeft+card.offsetWidth/2;const d=Math.abs(c-center);if(d<best){best=d;active=i}});
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===active));
  };
  rail.addEventListener('scroll',()=>requestAnimationFrame(updateDots),{passive:true});
  updateDots();
}

document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  const view=button.dataset.view;
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b===button));
  document.querySelectorAll('[data-panel]').forEach(panel=>panel.classList.toggle('active',panel.dataset.panel===view));
}));