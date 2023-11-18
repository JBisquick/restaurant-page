import '../css/menu.css';

const loadMenu = function() {
  const container = document.getElementById('content');

  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('id','container');
  container.appendChild(homeContainer);

  const menu1 = document.createElement('div');
  homeContainer.appendChild(menu1);
  menu1.textContent = 'Regular';
  
  const price1 = document.createElement('div');
  homeContainer.appendChild(price1);
  price1.textContent = '$5.00';

  const menu2 = document.createElement('div');
  homeContainer.appendChild(menu2);
  menu2.textContent = 'Special';

  const price2 = document.createElement('div');
  homeContainer.appendChild(price2);
  price2.textContent = '$5.95';

  const menu3 = document.createElement('div');
  homeContainer.appendChild(menu3);
  menu3.textContent = 'Cheese';

  const price3 = document.createElement('div');
  homeContainer.appendChild(price3);
  price3.textContent = 'Add.50';

  const menu4 = document.createElement('div');
  homeContainer.appendChild(menu4);
  menu4.textContent = 'Fries';

  const price4 = document.createElement('div');
  homeContainer.appendChild(price4);
  price4.textContent = '$2.00';

  const menu5 = document.createElement('div');
  homeContainer.appendChild(menu5);
  menu5.textContent = 'Side Salad';

  const price5 = document.createElement('div');
  homeContainer.appendChild(price5);
  price5.textContent = '$2.50';

  const menu6 = document.createElement('div');
  homeContainer.appendChild(menu6);
  menu6.textContent = 'Soft Drink';

  const price6 = document.createElement('div');
  homeContainer.appendChild(price6);
  price6.textContent = '$2.00';

  const menu7 = document.createElement('div');
  homeContainer.appendChild(menu7);
  menu7.textContent = 'Beer $4.00';
  
  const price7 = document.createElement('div');
  homeContainer.appendChild(price7);
  price7.textContent = '$4.00';

  const menu8 = document.createElement('div');
  homeContainer.appendChild(menu8);
  menu8.textContent = 'The Burger of the Day: The Burger Ball Pit';

  const price8 = document.createElement('div');
  homeContainer.appendChild(price8);
  price8.textContent = '$5.95';
}

export default loadMenu;