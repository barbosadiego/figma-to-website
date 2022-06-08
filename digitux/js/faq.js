export default function faqAnime() {
  const buttons = document.querySelectorAll('[data-faq]');

  function showText(event) {
    const dd = event.currentTarget.nextElementSibling;
    dd.classList.toggle('show');
  }

  buttons.forEach((item) => {
    item.addEventListener('click', showText);
  });
}
