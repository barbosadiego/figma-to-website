const menuBtn = document.querySelector('[data-menu-btn]');
const closeBtn = document.querySelector('[data-close]');
const logo = document.querySelector('[data-logo] img');
const nav = document.querySelector('[data-nav]');
const menuEl = document.querySelector('[data-menu]');

// active mobile menu
function handleMenu() {
  let state = this.getAttribute('aria-expanded') === 'false';
  this.setAttribute('aria-expanded', state);

  nav.classList.toggle('active')

  if(nav.classList.contains('active')){
    this.setAttribute('aria-label', 'close menu');
    logo.src = '/ttoil/img/logo-dark.svg';
    closeBtn.classList.remove('hidde');
    menuBtn.classList.add('hidde');
    menuEl.classList.remove('hidde');
  } else {
    this.setAttribute('aria-label', 'open menu');
    logo.src = '/ttoil/img/ttoil-logo.png';
    closeBtn.classList.add('hidde');
    menuBtn.classList.remove('hidde');
    menuEl.classList.add('hidde');
  }
}

// events
menuBtn.addEventListener('click', handleMenu);
closeBtn.addEventListener('click', handleMenu);
