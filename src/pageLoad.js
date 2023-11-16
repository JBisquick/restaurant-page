const pageLoad = function() { 
  const container = document.getElementById('content');

  const title = document.createElement('div');
  container.appendChild(title);
  title.textContent = 'Test';

  const summary = document.createElement('div');
  container.appendChild(summary);
  summary.textContent = 'TEST TEST TEST';
}

export default pageLoad;

