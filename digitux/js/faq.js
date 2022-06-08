export default function faqAnime() {
  const buttons = document.querySelectorAll('[data-faq]');

  function showText(event) {
    const dd = event.currentTarget.nextElementSibling;
    const div = event.target;
    dd.classList.toggle('show');

    const active = dd.classList.contains('show');
    div.setAttribute('aria-expanded', active);

    if (active) {
      event.currentTarget
        .querySelector('img')
        .setAttribute('src', './assets/icons/minus.svg');
    } else {
      event.currentTarget
        .querySelector('img')
        .setAttribute('src', './assets/icons/plus.svg');
    }
  }

  buttons.forEach((item) => {
    item.addEventListener('click', showText);
  });
}
