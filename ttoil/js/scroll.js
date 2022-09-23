export default function scroll(){
  const links = document.querySelectorAll('.nav a[href^="#"]');

  links.forEach((link) => link.addEventListener('click', handleClick))
  links.forEach((link) => link.addEventListener('touchstart', handleClick))

  function handleClick(e){
    e.preventDefault();
    const section = e.target.getAttribute('href');
    const pageSection = document.querySelector(section);
    const pageToTop = pageSection.offsetTop;

    window.scrollTo({
      top: pageToTop,
      behavior: 'smooth',
    })
  }
}