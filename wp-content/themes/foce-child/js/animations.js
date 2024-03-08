/* Appliquer le fade-up aux sections dès qu'ils rentrent dans le viewport */

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          return; // Si on a ajouté la classe, sortir de la fonction
        }
  
        // Si on n'est pas en intersection, retirer la classe !
        entry.target.classList.remove('fade-in-section');
      });
    }, { threshold: 0.1 }); 
    
    // Sélectionner tous les éléments à observer
    document.querySelectorAll('.fade-in-trigger').forEach(section => {
      observer.observe(section); // Commence à observer les sections sélectionnées
    });
  });

  
  /* Effet de parallax */

  // Sélectionner le logo et la vidéo
let logoBanner = document.querySelector('.hero-header__hero-logo'); // Assurez-vous que la classe est correcte
let videoBanner = document.querySelector('#background-video'); // Assurez-vous que l'ID est correct

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    // Ajuster la position du logo en fonction du défilement
    logoBanner.style.transform = `translateY(${value / 1.5}px)`; // Le logo descend

    // Ajuster la position de la vidéo en fonction du défilement
    videoBanner.style.transform = `translateY(-${value / 1.5}px)`; // La vidéo monte
});

