export default function windowDesktop() {
  const footer = document.querySelector('[data-footer="mobile"]');
  const tablet = matchMedia('(min-width:768px)');

  const applyMatch = () => {
    tablet.matches 
      ? footer.style.display = 'none'
      : footer.style.display = 'grid'
    ;
  }

  function debounce(func, wait){
    let timeout;
    return function(){
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    }
  }
  
  window.addEventListener('resize', debounce(applyMatch, 50))
}
