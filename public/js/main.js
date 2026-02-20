// ── Mobile Menu ─────────────────────────────────────────
const toggle = document.getElementById('menu-toggle');
const menu   = document.getElementById('mobile-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Menü öffnen' : 'Menü schließen');
  });
}

// ── Active Nav Link ─────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
