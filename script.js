const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    document.querySelectorAll('.tab').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.tab-panel').forEach(panel => {
      const active = panel.id === `panel-${target}`;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
      if (active) panel.animate(
        [{opacity: 0, transform: 'translateY(8px)'}, {opacity: 1, transform: 'translateY(0)'}],
        {duration: 350, easing: 'ease-out'}
      );
    });
  });
});

// Browsers animate the native disclosure open/close; content also has a subtle reveal animation.
document.querySelectorAll('details.disclosure, details.faq-item').forEach(details => {
  details.addEventListener('toggle', () => {
    const plus = details.querySelector('.plus, summary b');
    if (plus) plus.textContent = details.open ? '−' : '+';
  });
});

const toast = document.querySelector('.toast');
document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      toast.textContent = 'Добавь сюда свою настоящую ссылку Telegram в index.html';
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 2600);
    }
  });
});
