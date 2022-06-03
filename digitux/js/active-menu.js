export default function activeMenu() {
  const links = document.querySelectorAll('.header__menu a');
  const adress = window.location.href;

  links.forEach((link) => {
    if (link.href === adress) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
