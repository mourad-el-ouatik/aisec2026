const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>40));
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open')}
function tick(){const d=new Date('2026-05-17T09:00:00').getTime()-Date.now();if(d<=0)return;document.getElementById('days').textContent=String(Math.floor(d/86400000)).padStart(2,'0');document.getElementById('hours').textContent=String(Math.floor(d%86400000/3600000)).padStart(2,'0');document.getElementById('mins').textContent=String(Math.floor(d%3600000/60000)).padStart(2,'0');document.getElementById('secs').textContent=String(Math.floor(d%60000/1000)).padStart(2,'0')}
tick();setInterval(tick,1000);
function switchTab(btn,id){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.program-content').forEach(c=>c.classList.remove('active'));btn.classList.add('active');document.getElementById(id).classList.add('active')}
let cur=0;
const track=document.getElementById('editionsTrack');
const slides=track.querySelectorAll('.edition-slide');
const dotsEl=document.getElementById('sliderDots');
function pv(){return window.innerWidth<600?1:window.innerWidth<900?2:3}
function buildDots(){dotsEl.innerHTML='';const tot=Math.ceil(slides.length/pv());for(let i=0;i<tot;i++){const d=document.createElement('div');d.className='slider-dot'+(i===cur?' active':'');d.onclick=()=>goTo(i);dotsEl.appendChild(d)}}
function goTo(idx){cur=Math.max(0,Math.min(idx,Math.ceil(slides.length/pv())-1));track.style.transform=`translateX(-${cur*(slides[0].offsetWidth+24)*pv()}px)`;buildDots()}
function slideEditions(d){goTo(cur+d)}
buildDots();
window.addEventListener('resize',()=>{buildDots();goTo(0)});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

(function(){
  const track   = document.getElementById('spTrack');
  const dotsEl  = document.getElementById('spDots');
  if(!track || !dotsEl) return;

  let spCur = 0;

  /* how many columns are visible at once */
  function visibleCols(){
    const vw = document.querySelector('.sp-viewport').offsetWidth;
    const cardW = parseInt(getComputedStyle(track).gridAutoColumns) || 220;
    const gap   = 20;
    return Math.max(1, Math.floor((vw + gap) / (cardW + gap)));
  }

  /* total columns in the grid  */
  function totalCols(){
    const cards  = track.querySelectorAll('.speaker-card');
    const rows   = window.innerWidth <= 600 ? 1 : 2;
    return Math.ceil(cards.length / rows);
  }

  function maxStep(){ return Math.max(0, totalCols() - visibleCols()); }

  function buildSpDots(){
    dotsEl.innerHTML='';
    const steps = maxStep() + 1;
    for(let i=0;i<steps;i++){
      const b=document.createElement('button');
      b.className='sp-dot'+(i===spCur?' active':'');
      b.onclick=()=>goSp(i);
      dotsEl.appendChild(b);
    }
  }

  function goSp(idx){
    spCur = Math.max(0, Math.min(idx, maxStep()));
    const cardW = parseInt(getComputedStyle(track).gridAutoColumns) || 220;
    const gap   = 20;
    track.style.transform = `translateX(-${spCur * (cardW + gap)}px)`;
    buildSpDots();
  }

  window.shiftSpeakers = function(dir){ goSp(spCur + dir); };

  /* auto-advance every 3 s */
  let autoTimer = setInterval(()=>{
    goSp(spCur >= maxStep() ? 0 : spCur + 1);
  }, 3000);

  /* pause on hover */
  const wrapper = document.querySelector('.speakers-slider-wrapper');
  if(wrapper){
    wrapper.addEventListener('mouseenter',()=>clearInterval(autoTimer));
    wrapper.addEventListener('mouseleave',()=>{
      autoTimer = setInterval(()=>{
        goSp(spCur >= maxStep() ? 0 : spCur + 1);
      }, 3000);
    });
  }

  /* touch/swipe */
  let touchX=0;
  track.addEventListener('touchstart',e=>{ touchX=e.touches[0].clientX; },{passive:true});
  track.addEventListener('touchend',e=>{
    const dx=touchX-e.changedTouches[0].clientX;
    if(Math.abs(dx)>40) goSp(spCur + (dx>0?1:-1));
  },{passive:true});

  buildSpDots();
  window.addEventListener('resize',()=>{ buildSpDots(); goSp(0); });
})();