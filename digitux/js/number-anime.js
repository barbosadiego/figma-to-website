export default function numberAnime() {
  const numbers = document.querySelectorAll('[data-number]');

  numbers.forEach((number) => {
    const value = Number(number.innerText);
    const increase = Math.floor(value / 10);
    let initValue = 0;
    setInterval(() => {
      initValue += increase;
      number.innerText = `+${initValue}`;
      if (initValue > value) number.innerText = `+${value}`;
    }, 170 * Math.random());
  });
}
