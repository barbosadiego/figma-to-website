export default function scroll() {
  const links = document.querySelectorAll('[data-links] a');

  const handleClick = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    const section = document.querySelector(target);
    const sectionHeight = section.getBoundingClientRect();

    window.scrollTo({
      top: sectionHeight.top,
      behavior: 'smooth',
    });
  };

  links.forEach((link) => link.addEventListener('click', handleClick));
}
