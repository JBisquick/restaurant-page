import bob from '../imgs/bob-belcher.jpg';

const loadHome = function() {
  const container = document.getElementById('content');

  const homeContainer = document.createElement('div');
  container.appendChild(homeContainer);

  const motto = document.createElement('div');
  homeContainer.appendChild(motto);
  motto.textContent = 'I\'m not a hero, I\'m a man who sells burgers';

  const bobPortrait = new Image();
  bobPortrait.src = bob;
  homeContainer.appendChild(bobPortrait);
}

export default loadHome;