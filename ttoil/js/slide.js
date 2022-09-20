export default function slide() {
  const slidesContainer = document.querySelector('[data-slide="container"]');

  if (slidesContainer) {
    const left = document.querySelector('[data-slide="left"]');
    const right = document.querySelector('[data-slide="right"]');
    let slideItems = document.querySelectorAll('[data-slide="item"]');
    let positions = { startX: 0, totalMoviment: 0 };

    //show previous element of slide
    function previous() {
      const first = slideItems[0];
      slidesContainer.appendChild(first);
      slideItems = document.querySelectorAll('[data-slide="item"]');
    }

    //show next element of slide
    function next() {
      const last = slideItems[slideItems.length - 1];
      slidesContainer.prepend(last);
      slideItems = document.querySelectorAll('[data-slide="item"]');
    }

    //pointer events
    function handleEvent(e) {
      if (e.type === 'touchstart') {
        e.preventDefault(e);
        onStart(e);
        return;
      }
      this.addEventListener('mousedown', onStart);
    }

    function onStart(e) {
      let event = e.type;
      slidesContainer.style.cursor = 'grabbing';
      slideItems.forEach((slide) => (slide.style.transition = 'none'));
      if (event === 'touchstart') {
        positions.startX = e.touches[0].clientX;
        slidesContainer.addEventListener('touchmove', onMove);
        slidesContainer.addEventListener('touchend', onEnd);
      } else {
        positions.startX = e.x;
        this.addEventListener('mousemove', onMove);
        this.addEventListener('mouseup', onEnd);
      }
    }

    function onMove(e) {
      let event = e.type;
      if (event === 'touchmove') {
        positions.totalMoviment = positions.startX - e.touches[0].clientX
      } else {
        positions.totalMoviment = positions.startX - e.x;
      }
      slideItems[1].style.transform = `translate3d(${-positions.totalMoviment}px, 0px, 0px)`;
    }

    function onEnd() {
      if (positions.totalMoviment > 10) previous();
      else if (positions.totalMoviment < 10) next();
      slidesContainer.style.cursor = 'grab';
      this.removeEventListener('mousemove', onMove);
      this.removeEventListener('touchmove', onMove);
      slideItems.forEach((slide) => {
        slide.style.transform = ``;
        slide.style.transition = '.3s';
      });
    }

    //EVENTS
    left.addEventListener('click', previous);
    right.addEventListener('click', next);

    ['click', 'touchstart'].forEach((event) => {
      slidesContainer.addEventListener(event, handleEvent);
    });
  }
}
