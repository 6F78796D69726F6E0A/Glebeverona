
// Shared navigation stays usable without JavaScript.
(() => {
  const header = document.querySelector('.site-header');
  const button = header?.querySelector('.menu-toggle');
  const nav = header?.querySelector('.site-nav');
  if (!header || !button || !nav) return;
  header.classList.add('has-menu');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) setOpen(false); });
  header.addEventListener('focusout', () => setTimeout(() => {
    if (!header.contains(document.activeElement)) setOpen(false);
  }, 0));
  window.matchMedia('(min-width:901px)').addEventListener('change', () => setOpen(false));
})();

// The Azure Retreat: bedroom first, private bathtub second.
(() => {
  const controls = document.querySelector('.room-photo-switch');
  const gallery = document.getElementById('azure-gallery');
  if (!controls || !gallery) return;
  const photos = [...gallery.querySelectorAll('img')];
  const buttons = [...controls.querySelectorAll('button')];
  const showPhoto = id => {
    photos.forEach(photo => { photo.hidden = photo.id !== id; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.photo === id)));
  };
  buttons.forEach(button => button.addEventListener('click', () => showPhoto(button.dataset.photo)));
  showPhoto('azure-bedroom');
  controls.hidden = false;
})();

// Highlight the current section in the Glebe guide.
(() => {
  const root = document.getElementById('verona-guide');
  if (!root || !('IntersectionObserver' in window)) return;
  const links = [...root.querySelectorAll('.vg-aside nav a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    links.forEach(link => {
      if (link.hash === '#' + visible[0].target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  root.querySelectorAll('#guide-content > section[id]').forEach(section => observer.observe(section));
})();
