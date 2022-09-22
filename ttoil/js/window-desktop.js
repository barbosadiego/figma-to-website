export default function windowDesktop() {
  const footer = document.querySelector('[data-footer="mobile"]');
  const desktopFooter = document.querySelector('[data-footer="desktop"]');
  const tablet = matchMedia('(min-width:768px)');
  console.log(desktopFooter);

  const applyMatch = () => {
    if (tablet.matches) {
      footer.style.display = 'none';
      desktopFooter.style.display = 'unset';
    } else {
      footer.style.display = 'grid';
      desktopFooter.style.display = 'none';
    }
  };

  function debounce(func, wait) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  window.addEventListener('resize', debounce(applyMatch, 50));
  window.addEventListener('DOMContentLoaded', applyMatch);
}
