export default function mobileMenu() {
  const menuBtn = document.querySelector('[data-menu]');
  const menu = document.querySelector('[data-links]');
  const links = document.querySelectorAll('[data-links] a');

  const showMenu = () => {
    menu.classList.toggle('active');
  };

  const removeShowMenu = () => {
    menu.classList.remove('active');
  }

  menuBtn.addEventListener('click', showMenu);
  links.forEach((link) => link.addEventListener('click', removeShowMenu));
}
