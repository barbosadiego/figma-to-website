export default function menuMobile() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  function showMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    menu.classList.toggle('show');
    const active = menu.classList.contains('show');
    menuBtn.setAttribute('aria-expanded', active);
    if (active) {
      menuBtn.setAttribute('aria-label', 'Fechar Menu');
    } else {
      menuBtn.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  menuBtn.addEventListener('click', showMenu);
  menuBtn.addEventListener('touchstart', showMenu);
}
