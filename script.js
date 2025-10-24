function toggleCard(card) {
  // Supprime "active" de toutes les cartes
  const cards = document.querySelectorAll('.projets .card');
  cards.forEach(c => {
    if(c !== card) c.classList.remove('active');
  });

  // Toggle la classe active sur la carte cliquée
  card.classList.toggle('active');
}