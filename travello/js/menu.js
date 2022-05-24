export default function mobileMenu() {
  const menuBtn = document.getElementById('mobile-menu');
  const links = document.getElementById('links');
  const menuLinks = document.querySelectorAll('#links a');
  const line = document.querySelector('.line');

  const showMenu = () => {
    links.classList.toggle('show');
  };

  const hideMenu = () => links.classList.remove('show');

  menuBtn.addEventListener('click', showMenu);
  menuLinks.forEach((link) => link.addEventListener('click', hideMenu));
}
