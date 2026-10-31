const cards = document.querySelectorAll('.project-card');

cards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    card.style.setProperty('--pointer-x', x + '%');
  });
});