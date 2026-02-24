/* ============================================================
   AISEC CONFERENCE — Centralized JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Preloader ──────────────────────────────────────────────
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
        setTimeout(function () { preloader.style.display = 'none'; }, 400);
      }, 300);
    });
  }

  // ── Navbar scroll ──────────────────────────────────────────
  const nav = document.getElementById('conf-nav');
  if (nav) {
    function updateNav() {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ── Mobile menu ────────────────────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    // close on link click
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Back to top ────────────────────────────────────────────
  const btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    btt.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Fade-in on scroll ──────────────────────────────────────
  const faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    faders.forEach(function (el) { io.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Schedule tabs ──────────────────────────────────────────
  document.querySelectorAll('.schedule-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.dataset.tab;
      document.querySelectorAll('.schedule-tab-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.schedule-content').forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });

  // ── Countdown timer ────────────────────────────────────────
  const countdownEl = document.getElementById('conf-countdown');
  if (countdownEl) {
    const target = new Date('2026-05-15T09:00:00');
    function updateCountdown() {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        countdownEl.innerHTML = '<span style="font-family:var(--font-mono);color:var(--accent)">Event is Live!</span>';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

});
