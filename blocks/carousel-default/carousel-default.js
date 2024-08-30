export default function decorate(block) {
  // Add carousel class to the block
  block.classList.add('carousel-default');

  // Create a wrapper for the carousel items
  const wrapper = document.createElement('div');
  wrapper.classList.add('carousel-wrapper');

  // Move all child elements into the wrapper
  while (block.firstChild) {
    wrapper.appendChild(block.firstChild);
  }
  block.appendChild(wrapper);

  // Iterate through all direct child div elements of the wrapper
  const items = wrapper.querySelectorAll(':scope > div');
  items.forEach((item) => {
    item.classList.add('carousel-item');

    // Add image container class
    const imgContainer = item.querySelector(':scope > div:first-child');
    if (imgContainer) {
      imgContainer.classList.add('carousel-image-container');
    }

    // Add text container class
    const textContainer = item.querySelector(':scope > div:last-child');
    if (textContainer) {
      textContainer.classList.add('carousel-text-container');
    }

    // Add title and description classes
    const link = textContainer.querySelector('a');
    if (link) {
      const title = link.textContent.split(/(?=[A-Z])/).slice(0, 2).join('');
      const description = link.textContent.split(/(?=[A-Z])/).slice(2).join('');

      const titleElement = document.createElement('div');
      titleElement.classList.add('carousel-title');
      titleElement.textContent = title;

      const descriptionElement = document.createElement('div');
      descriptionElement.classList.add('carousel-description');
      descriptionElement.textContent = description;

      // Clear the link text and append title and description
      link.textContent = '';
      link.appendChild(titleElement);
      link.appendChild(descriptionElement);
    }
  });

  // Add navigation buttons
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-button', 'prev');
  prevButton.innerHTML = '&#10094;'; // left arrow symbol

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-button', 'next');
  nextButton.innerHTML = '&#10095;'; // right arrow symbol

  block.appendChild(prevButton);
  block.appendChild(nextButton);

  // Add event listeners for navigation buttons
  const scrollAmount = 0;
  const scrollStep = 300;

  prevButton.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
}
