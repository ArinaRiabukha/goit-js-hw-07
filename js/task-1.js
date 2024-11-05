const allCategories= document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(category => {
  const title= category.querySelector('h2');
  const items= category.querySelectorAll('ul li');

  items.forEach(item => {
    item.classList.add('styled-items');
  });

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
});

