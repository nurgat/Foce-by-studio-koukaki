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
    }, { threshold: 0.2 }); // Augmentation du seuil pour retarder l'activation
    
    // Sélectionner tous les éléments à observer
    document.querySelectorAll('.fade-in-trigger').forEach(section => {
      observer.observe(section); // Commence à observer les sections sélectionnées
    });
  });

  /* Appliquer un effet de parallax avec l'image de la bannière et le logo */

  let logoBanner = document.querySelector('.banner img')
  
  window.addEventListener('scroll', () => {

    let value = window.scrollY;

    logoBanner.style.marginTop = value / 2.6 + "px";

  });
