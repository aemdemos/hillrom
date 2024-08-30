export default function decorate(block) {
  block.classList.add('carousel-simple');

  const slides = block.querySelectorAll('.carousel-simple > div');
  slides.forEach((slide) => {
    slide.classList.add('carousel-slide');

    const textContainer = slide.querySelector('div:nth-child(2)');
    if (textContainer) {
      textContainer.classList.add('carousel-text');
    }

    const imageContainer = slide.querySelector('div:nth-child(1) picture');
    if (imageContainer) {
      imageContainer.classList.add('carousel-image');
    }
  });

  // Initialize Carousel
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');
  block.appendChild(carouselContainer);

  slides.forEach((slide) => {
    carouselContainer.appendChild(slide);
  });

  // Carousel navigation buttons
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-nav', 'carousel-prev');
  prevButton.innerHTML = '‹';
  block.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-nav', 'carousel-next');
  nextButton.innerHTML = '›';
  block.appendChild(nextButton);

  let currentIndex = 0;

  const updateCarousel = () => {
    const slideWidth = slides[0].offsetWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}
