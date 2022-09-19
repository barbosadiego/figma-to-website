export default function slide() {
  const carosselContainer = document.querySelector('[data-slide="carossel"]');
  const slideContainer = document.querySelector('[data-slide="container"]');
  const slideItems = document.querySelectorAll('[data-slide="item"]');
  const previous = document.querySelector('[data-slide="left"]');
  const next = document.querySelector('[data-slide="right"]');

  if (carosselContainer) {
    carosselContainer.addEventListener('mousedown', mouseDown);

    let startX = 0;
    let totalMoviment = 0;
    const { left: initial, right: final, width } = carosselContainer.getBoundingClientRect();

    //move slide item method
    function moveSlide(moviment){
      slideContainer.style.transform = `translate3d(${moviment * 1.7}px,0,0)`;
    }

    //mouse click
    function mouseDown({ clientX }) {
      carosselContainer.style.cursor = 'grabbing';
      startX = clientX - totalMoviment;
      carosselContainer.addEventListener('mousemove', mouseMove);
    }

    //mouse moving
    function mouseMove({ clientX }) {
      carosselContainer.addEventListener('mouseup', mouseUp);
      totalMoviment = clientX - startX;
      moveSlide(totalMoviment)
    }
    
    //mouse click up
    function mouseUp() {
      carosselContainer.style.cursor = 'grab';
      startX = totalMoviment;
      const carosselWidth = window.innerWidth * (slideItems.length - 1)
      
      if (totalMoviment > initial) {
        totalMoviment = 0;
        moveSlide(totalMoviment)
      } else if (Math.abs(totalMoviment) >= (window.innerWidth)){
        totalMoviment = -carosselWidth
        moveSlide(carosselWidth)

        console.log(carosselWidth)
      }
      
      carosselContainer.removeEventListener('mousemove', mouseMove);
    }
  }
}
