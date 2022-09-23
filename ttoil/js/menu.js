export default function menuMobile() {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const closeBtn = document.querySelector('[data-close]');
  const logo = document.querySelector('[data-logo] img');
  const nav = document.querySelector('[data-nav]');
  const menuEl = document.querySelector('[data-menu]');
  const header = document.querySelector('header');
  const links = document.querySelectorAll('[data-menu] a[href^="#"]');

  // active mobile menu
  function handleMenu() {
    let state = this.getAttribute('aria-expanded') === 'false';
    this.setAttribute('aria-expanded', state);

    nav.classList.toggle('active');
    header.classList.toggle('active');

    if (nav.classList.contains('active')) {
      this.setAttribute('aria-label', 'close menu');
      logo.src = '/ttoil/img/logo-dark.svg';
      closeBtn.classList.remove('hidde');
      menuBtn.classList.add('hidde');
      menuEl.style.display = 'flex';
    } else {
      this.setAttribute('aria-label', 'open menu');
      logo.src = '/ttoil/img/ttoil-logo.png';
      closeBtn.classList.add('hidde');
      menuBtn.classList.remove('hidde');
      menuEl.style.display = 'none';
    }
  }

  // events
  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  links.forEach(link => link.addEventListener('click', handleMenu))
}
