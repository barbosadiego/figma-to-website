export default function tabNav() {
  const tabSelectors = document.querySelectorAll('[data-seletor]');
  const items = document.querySelectorAll('[data-item]');
  tabSelectors[0].classList.add('active');
  items[0].classList.add('active');

  function activeTab(index) {
    tabSelectors.forEach((item) => item.classList.remove('active'));
    tabSelectors[index].classList.add('active');

    items.forEach((item) => item.classList.remove('active'));
    items[index].classList.add('active');
  }

  tabSelectors.forEach((item, index) =>
    item.addEventListener('click', () => {
      activeTab(index);
    }),
  );
}
