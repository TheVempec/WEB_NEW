
   document.addEventListener('DOMContentLoaded', () => {
  const wrapper1 = document.querySelector('.slider-container:nth-of-type(1) .wrapper');
  const prevBtn1 = document.querySelector('.slider-container:nth-of-type(1) .prev');
  const nextBtn1 = document.querySelector('.slider-container:nth-of-type(1) .next');
  const slides1 = wrapper1.querySelectorAll('.slid');
  const slidesPerScroll = 4;
  const gap = 20;

  function getTotalSlideWidth(slide) {
    return slide.offsetWidth + gap;
  }

  const slideWidth1 = getTotalSlideWidth(slides1[0]);

  nextBtn1.addEventListener('click', () => {
    wrapper1.scrollBy({
      left: slideWidth1 * slidesPerScroll,
      behavior: 'smooth'
    });
  });

  prevBtn1.addEventListener('click', () => {
    wrapper1.scrollBy({
      left: -slideWidth1 * slidesPerScroll,
      behavior: 'smooth'
    });
  });


  const wrapper2 = document.querySelector('.slider-container:nth-of-type(2) .wrapper');
  const prevBtn2 = document.querySelector('.prev--Interesting--facts');
  const nextBtn2 = document.querySelector('.next--Interesting--facts');
  const slides2 = wrapper2.querySelectorAll('.slid');
  const slideWidth2 = getTotalSlideWidth(slides2[0]);

  nextBtn2.addEventListener('click', () => {
    wrapper2.scrollBy({
      left: slideWidth2 * slidesPerScroll,
      behavior: 'smooth'
    });
  });

  prevBtn2.addEventListener('click', () => {
    wrapper2.scrollBy({
      left: -slideWidth2 * slidesPerScroll,
      behavior: 'smooth'
    });
  });

  
});