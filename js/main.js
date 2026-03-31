// ── Nav active state ──────────────────────────────────
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ── Mobile menu ───────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');

if (hamburger && sidebar && overlay) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// ── Copy-on-click for code blocks ────────────────────
document.querySelectorAll('pre').forEach(pre => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  btn.style.cssText = `
    position:absolute; top:6px; right:${pre.querySelector('.cmd-label') ? '70' : '6'}px;
    background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12);
    color:#6b7a99; font-size:10px; font-family:inherit; padding:2px 8px;
    border-radius:4px; cursor:pointer; transition:all 0.15s;
    font-family:'IBM Plex Mono',monospace; letter-spacing:0.04em;
  `;
  btn.addEventListener('mouseenter', () => { btn.style.color = '#f0a63a'; });
  btn.addEventListener('mouseleave', () => { btn.style.color = '#6b7a99'; });
  btn.addEventListener('click', () => {
    const clone = pre.cloneNode(true);
    clone.querySelectorAll('.cmd-label, .copy-btn').forEach(el => el.remove());
    const text = clone.innerText
      .replace(/^\$ /gm, '')
      .replace(/^# .+\n/gm, '')
      .trim();
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ Copied';
      btn.style.color = '#3dd68c';
      setTimeout(() => { btn.textContent = 'Copy'; btn.style.color = '#6b7a99'; }, 2000);
    });
  });
  pre.style.position = 'relative';
  pre.appendChild(btn);
});
