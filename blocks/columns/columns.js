export default function decorate(block) {
  // Add class to the main container
  block.classList.add('columns');

  // Add class to each child div
  const childDivs = block.querySelectorAll(':scope > div > div');
  childDivs.forEach((div) => {
    div.classList.add('column');
  });

  // Add class to each list
  const lists = block.querySelectorAll('ul');
  lists.forEach((ul) => {
    ul.classList.add('column-list');
  });

  // Add class to each list item
  const listItems = block.querySelectorAll('li');
  listItems.forEach((li) => {
    li.classList.add('column-list-item');
  });

  // Add class to each paragraph
  const paragraphs = block.querySelectorAll('p');
  paragraphs.forEach((p) => {
    p.classList.add('column-title');
  });

  // Add class to each link
  const links = block.querySelectorAll('a');
  links.forEach((a) => {
    a.classList.add('column-link');
  });
}
