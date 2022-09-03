const menuBnt = document.querySelector('.menu-btn');

function handleMenu() {

  let state = this.getAttribute('aria-expanded') === 'false';
  this.setAttribute('aria-expanded', state);

  this.getAttribute('aria-label') === 'open menu'
    ? this.setAttribute('aria-label', 'close menu')
    : this.setAttribute('aria-label', 'open menu')
  ;

  const menu = this.nextElementSibling;
  menu.hidden = !menu.hidden;
  
}

menuBnt.addEventListener('click', handleMenu);
