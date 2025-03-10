// Script per animare gli elementi quando entrano nel viewport
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-appear');
  
  // Observer per le animazioni
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  // Osserva le card
  cards.forEach(card => {
    observer.observe(card);
  });
});
