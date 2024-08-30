export default function decorate(block) {
  // Add class to the block
  block.classList.add('hillrom-hero');

  // Remove the image from the content
  const picture = block.querySelector('picture');
  if (picture) {
    picture.remove();
  }

  // Add additional classes to child elements
  const innerDiv = block.querySelector('div > div');
  const heading = block.querySelector('h1');
  const paragraphs = block.querySelectorAll('p');

  if (innerDiv) {
    innerDiv.classList.add('hillrom-hero-inner');
  }

  if (heading) {
    heading.classList.add('hillrom-hero-heading');
  }

  paragraphs.forEach((paragraph, index) => {
    paragraph.classList.add('hillrom-hero-text');
    if (index === 0) {
      paragraph.classList.add('hillrom-hero-text-first');
    }
  });
}
