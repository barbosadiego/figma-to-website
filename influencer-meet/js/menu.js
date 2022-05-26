export default function menuMobile(){
  const menuBtn = document.querySelector('.js-mobile');
  const menu = document.querySelector('.js-menu');

  const showMenu = () => menu.classList.toggle('show')

  menuBtn.addEventListener('click', showMenu)
  console.log(menu)
}