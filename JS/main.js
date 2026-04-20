/* ═══════════════════════════════════════
   MUHAMMAD ROHAIL — PORTFOLIO SCRIPTS
   main.js
═══════════════════════════════════════ */

/* ── LOADER ── */
let pct = 0;
const lfill = document.getElementById('lfill');
const lpct  = document.getElementById('lpct');
const ldr   = document.getElementById('ldr');

const lt = setInterval(() => {
  pct += Math.random() * 18;
  if (pct >= 100) {
    pct = 100;
    clearInterval(lt);
    setTimeout(() => {
      ldr.classList.add('out');
      startHeroCounters();
    }, 500);
  }
  lfill.style.width = pct + '%';
  lpct.textContent  = Math.round(pct) + '%';
}, 120);

/* ── CURSOR ── */
const cur  = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

(function loop() {
  cx += (mx - cx) * .14;
  cy += (my - cy) * .14;
  cur2.style.left = cx + 'px';
  cur2.style.top  = cy + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a,button,.pj,.sk-col,.ex-card,.ab-lk,.cti,.an,.photo-placeholder-btn').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
});

/* ── CANVAS PARTICLES ── */
const canvas = document.getElementById('bgc');
const ctx    = canvas.getContext('2d');
let W, H, pts = [];

function rsz() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
rsz();
addEventListener('resize', rsz);

class Pt {
  constructor() { this.reset(true); }
  reset(init) {
    this.x  = Math.random() * W;
    this.y  = init ? Math.random() * H : (Math.random() < .5 ? -5 : H + 5);
    this.vx = (Math.random() - .5) * .35;
    this.vy = (Math.random() - .5) * .35;
    this.r  = Math.random() * 1.2 + .4;
    this.a  = Math.random() * .3 + .07;
  }
  step() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < -10 || this.x > W + 10 || this.y < -10 || this.y > H + 10) this.reset(false);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(84,197,248,${this.a})`;
    ctx.fill();
  }
}

for (let i = 0; i < 90; i++) pts.push(new Pt());

function frame() {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < pts.length; i++) {
    pts[i].step();
    pts[i].draw();
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 130) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(84,197,248,${.07 * (1 - d / 130)})`;
        ctx.lineWidth   = .5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(frame);
}
frame();

/* ── TYPING ANIMATION ── */
const lines = [
  'Full Stack Mobile Developer_',
  'Flutter & Dart Expert_',
  'Web Developer & Designer_',
  'Problem Solver & Builder_',
  'Founder @ Loftiq.store 🍁_'
];
let li = 0, ci = 0, del = false;
const tel = document.getElementById('typed');

function doType() {
  const c = lines[li];
  if (!del) {
    tel.textContent = c.slice(0, ++ci);
    if (ci === c.length) { del = true; setTimeout(doType, 2200); return; }
  } else {
    tel.textContent = c.slice(0, --ci);
    if (ci === 0) { del = false; li = (li + 1) % lines.length; }
  }
  setTimeout(doType, del ? 48 : 85);
}
setTimeout(doType, 2000);

/* ── TICKER ROW 1 ── */
const skills = ['FLUTTER','FIREBASE','DART','REACT','HTML5','CSS3','JAVASCRIPT','TAILWINDCSS','FIGMA','GIT','MOBILE DEV','WEB DEV','FLUTTER','FIREBASE','DART','REACT','HTML5','CSS3','JAVASCRIPT','TAILWINDCSS','FIGMA','GIT','MOBILE DEV','WEB DEV'];
const seps   = ['✦','◆','▸','×','◇','▹'];
const tk1El  = document.getElementById('tk1');
let tk1html  = '';
skills.forEach((s, i) => {
  const isLit = i % 5 === 0;
  tk1html += `<span class="tk1-item"><span class="tk1-word${isLit ? ' lit' : ''}">${s}</span><span class="tk1-sep">${seps[i % seps.length]}</span></span>`;
});
tk1El.innerHTML = tk1html;

/* ── TICKER ROW 2 ── */
const statuses = [
  {dot:'green', text:'AVAILABLE FOR WORK',   val:'● OPEN'},
  {dot:'blue',  text:'ISLAMABAD, PAKISTAN',  val:'UTC+5'},
  {dot:'amber', text:'FLUTTER PROJECTS',     val:'2+ ACTIVE'},
  {dot:'green', text:'RESPONSE TIME',        val:'< 24 HRS'},
  {dot:'blue',  text:'EXPERIENCE',           val:'2+ YEARS'},
  {dot:'amber', text:'PROJECTS SHIPPED',     val:'6+'},
  {dot:'green', text:'LOFTIQ.STORE',         val:'LIVE 🍁'},
  {dot:'blue',  text:'TIRE MATE FYP',        val:'GRADE A'},
  {dot:'green', text:'AVAILABLE FOR WORK',   val:'● OPEN'},
  {dot:'blue',  text:'ISLAMABAD, PAKISTAN',  val:'UTC+5'},
  {dot:'amber', text:'FLUTTER PROJECTS',     val:'2+ ACTIVE'},
  {dot:'green', text:'RESPONSE TIME',        val:'< 24 HRS'},
  {dot:'blue',  text:'EXPERIENCE',           val:'2+ YEARS'},
  {dot:'amber', text:'PROJECTS SHIPPED',     val:'6+'},
  {dot:'green', text:'LOFTIQ.STORE',         val:'LIVE 🍁'},
  {dot:'blue',  text:'TIRE MATE FYP',        val:'GRADE A'},
];
const tk2El = document.getElementById('tk2');
tk2El.innerHTML = statuses.map(s =>
  `<span class="tk2-item"><span class="tk2-dot ${s.dot}"></span><span class="tk2-text">${s.text}</span><span style="color:rgba(84,197,248,.2);margin:0 4px">/</span><span class="tk2-val">${s.val}</span></span>`
).join('');

/* random glitch flicker on row1 */
setInterval(() => {
  const words = document.querySelectorAll('.tk1-word');
  const rnd   = words[Math.floor(Math.random() * words.length)];
  rnd.classList.add('lit');
  setTimeout(() => rnd.classList.remove('lit'), 600);
}, 800);

/* ── NAV SCROLL & MOBILE ── */
addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('sc', scrollY > 60);
});

const ham  = document.getElementById('hamburger');
const mMenu = document.getElementById('mobile-menu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mMenu.classList.toggle('open');
});
document.querySelectorAll('#mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    ham.classList.remove('open');
    mMenu.classList.remove('open');
  });
});

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(e => {
  e.forEach(el => { if (el.isIntersecting) { el.target.classList.add('v'); obs.unobserve(el.target); } });
}, { threshold: .1 });
document.querySelectorAll('.r').forEach(el => obs.observe(el));

/* ── COUNTER ANIMATION (about) ── */
const cobs = new IntersectionObserver(e => {
  e.forEach(el => {
    if (el.isIntersecting) { animCount(el.target); cobs.unobserve(el.target); }
  });
}, { threshold: .5 });
document.querySelectorAll('[data-target]').forEach(el => cobs.observe(el));

function animCount(el) {
  const t = +el.dataset.target;
  let c   = 0;
  const step = t / 50;
  const iv = setInterval(() => {
    c = Math.min(c + step, t);
    el.textContent = Math.round(c) + (t === 100 ? '%' : '+');
    if (c >= t) clearInterval(iv);
  }, 30);
}

/* ── HERO COUNTERS (after loader) ── */
function startHeroCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const t = +el.dataset.count;
    let c   = 0;
    const iv = setInterval(() => {
      c = Math.min(c + 1, t);
      el.textContent = c + (t === 100 ? '%' : '+');
      if (c >= t) clearInterval(iv);
    }, 60);
  });
}

/* ── SKILL BARS ── */
const sobs = new IntersectionObserver(e => {
  e.forEach(el => {
    if (el.isIntersecting) {
      el.target.querySelectorAll('.sk-fill').forEach(b => {
        setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 100);
      });
      sobs.unobserve(el.target);
    }
  });
}, { threshold: .2 });
document.querySelectorAll('.sk-col').forEach(el => sobs.observe(el));

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ── CONTACT FORM ── */
emailjs.init('tYwXvRCbokSOaahwq');

document.getElementById('cf').addEventListener('submit', async e => {
  e.preventDefault();
  const b = document.getElementById('fsb');
  b.textContent = 'SENDING...';
  b.style.opacity = '.7';
  b.style.pointerEvents = 'none';

  try {
    await emailjs.send('service_lzm1iuy', 'template_ban01ol', {
      from_name:  document.getElementById('fn').value,
      from_email: document.getElementById('fe').value,
      message:    document.getElementById('fm').value,
    });
    b.textContent = 'SENT ✓';
    b.style.opacity = '1';
    document.getElementById('fok').style.display = 'block';
    document.getElementById('fn').value = '';
    document.getElementById('fe').value = '';
    document.getElementById('fm').value = '';
    setTimeout(() => {
      b.textContent = 'SEND MESSAGE →';
      b.style.pointerEvents = 'auto';
      document.getElementById('fok').style.display = 'none';
    }, 5000);
  } catch(err) {
    b.textContent = 'FAILED — TRY WHATSAPP';
    b.style.opacity = '1';
    b.style.pointerEvents = 'auto';
    b.style.background = '#ff4444';
    setTimeout(() => {
      b.textContent = 'SEND MESSAGE →';
      b.style.background = 'var(--blue)';
    }, 4000);
  }
});

/* ── PHOTO UPLOAD ── */
document.getElementById('photo-upload').addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById('hero-photo');
    const placeholder = document.getElementById('photo-placeholder');
    img.src = e.target.result;
    img.style.display = 'block';
    placeholder.style.display = 'none';
    // also update avatar in about card
    const av = document.querySelector('.ab-av');
    av.innerHTML = `<img src="${e.target.result}" alt="Muhammad Rohail" style="width:100%;height:100%;object-fit:cover;">`;
  };
  reader.readAsDataURL(file);
});