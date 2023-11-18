import loadHome from "./loadHome";
import '../css/title.css';

const loadStartPage = function() { 
  const container = document.getElementById('content');

  const title = document.createElement('div');
  container.appendChild(title);
  title.setAttribute('id','title');
  title.textContent = 'Bob\'s Burgers';

  const tabContainer = document.createElement('div');
  container.appendChild(tabContainer);
  tabContainer.setAttribute('id','tab-container');
  
  const home = document.createElement('div');
  tabContainer.appendChild(home);
  home.setAttribute('id', 'home');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  tabContainer.appendChild(menu);
  menu.setAttribute('id', 'menu');
  menu.textContent = 'Menu';

  const contact = document.createElement('div');
  tabContainer.appendChild(contact);
  contact.setAttribute('id', 'contact');
  contact.textContent = 'Contact';

  loadHome();
}

export default loadStartPage;