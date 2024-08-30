export default function decorate(block) {
  const items = block.querySelectorAll('div > div');
  items.forEach((item) => {
    const imgContainer = item.querySelector('div:first-child');
    const linkContainer = item.querySelector('div:last-child');

    if (imgContainer && linkContainer) {
      const link = linkContainer.querySelector('a');
      const heading = document.createElement('h2');
      heading.innerHTML = link.innerHTML.replace('## ', '');
      link.innerHTML = '';
      link.appendChild(heading);

      linkContainer.classList.add('cards-blue-link');
      link.classList.add('cards-blue-link-text');

      const wrapper = document.createElement('div');
      wrapper.classList.add('cards-blue-item');
      wrapper.appendChild(imgContainer);
      wrapper.appendChild(linkContainer);
      item.replaceWith(wrapper);
    }
  });
}
