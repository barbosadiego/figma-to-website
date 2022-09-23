export default function langMenu() {
  const langBtn = document.querySelector('[data-lang]');

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active');
  }

  ['touchstart', 'click'].forEach((event) => {
    langBtn.addEventListener(event, handleClick);
  });
}
