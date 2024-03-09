/* Effet de parallax 

  // Sélectionner le logo et la vidéo
let logoBanner = document.querySelector('.hero-header__hero-logo'); // Assurez-vous que la classe est correcte
let videoBanner = document.querySelector('#background-video'); // Assurez-vous que l'ID est correct

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    // Ajuster la position du logo en fonction du défilement
    logoBanner.style.transform = `translateY(${value / 2}px)`; // Le logo descend

    // Ajuster la position de la vidéo en fonction du défilement
    videoBanner.style.transform = `translateY(-${value / 2}px)`; // La vidéo monte
});
*/
