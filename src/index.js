import loadStartPage from './loadPages/loadStartPage';
import loadMenu from './loadPages/loadMenu';
import loadHome from './loadPages/loadHome';
import loadContact from './loadPages/loadContact';
import removeContainer from './loadPages/removeContainer';

loadStartPage();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener('click', function() {
  removeContainer();
  loadHome();
})

menu.addEventListener('click', function() {
  removeContainer();
  loadMenu();
})

contact.addEventListener('click', function() {
  removeContainer();
  loadContact();
})
