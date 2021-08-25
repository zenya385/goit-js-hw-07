const list = document.querySelector('#categories');

const allItems = list.querySelectorAll('.item');
console.log(`В списке ${allItems.length} категории`);

const allEl = allItems.forEach(item => {
  console.log('---------------------------------------');
  const h2 = item.querySelector('h2').textContent;
  console.log(`Категория: ${h2}`);
  const array2 = item.querySelectorAll('li');
  console.log(`Каличество элементов ${array2.length}`);
});
