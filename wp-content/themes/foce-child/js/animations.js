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
    }, { threshold: 0.1 }); // Vous pouvez ajuster le seuil selon les besoins
    
    // Sélectionner tous les éléments à observer
    document.querySelectorAll('.fade-in-trigger').forEach(section => {
      observer.observe(section); // Commence à observer les sections sélectionnées
    });
  });
  

  

  




  
  

  
  