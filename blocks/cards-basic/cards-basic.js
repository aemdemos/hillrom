export default function decorate(block) {
  // Set class for the block container
  block.classList.add('cards-basic');

  // Iterate over each child of the block
  Array.from(block.children).forEach((item) => {
    // Set class for each item
    item.classList.add('card-item');

    // Get the picture and link elements
    const picture = item.querySelector('picture');
    const link = item.querySelector('a');

    // Set classes for picture and link
    if (picture) picture.classList.add('card-image');
    if (link) {
      link.classList.add('read-more-link');
      // Extract the text content and split it
      const [category, ...textParts] = link.textContent.split('##');
      const [title, ...rest] = textParts.join('').split('READ MORE');
      const h2 = document.createElement('h2');
      h2.innerHTML = title.trim().replace(/^(.*?)\s/, '<span class="first-word">$1</span> ');
      h2.classList.add('card-title');
      link.textContent = 'READ MORE';
      link.setAttribute('data-category', category.trim());

      // Create a new div to wrap text content
      const textWrapper = document.createElement('div');
      textWrapper.classList.add('card-text');
      textWrapper.appendChild(h2);
      textWrapper.appendChild(link);

      // Append text wrapper to the item
      item.appendChild(textWrapper);
    }
  });
}
