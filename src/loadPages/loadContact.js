import '../css/contact.css';


const loadContact = function() {
  const container = document.getElementById('content');

  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('id','container');
  homeContainer.setAttribute('class','contact-container');
  container.appendChild(homeContainer);

  const address = document.createElement('div');
  homeContainer.appendChild(address);
  address.textContent = 'Come to 123 Address Street Seymours Bay New Jersey';

  const number = document.createElement('div');
  homeContainer.appendChild(number);
  number.textContent = 'Or Call this Number: (Fake Number)';
}

export default loadContact;