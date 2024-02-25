// animations.js

// Fonction pour ajouter la classe 'visible' aux éléments quand ils entrent dans le viewport

// animations.js

// Fonction pour ajouter la classe 'visible' aux éléments quand ils entrent dans le viewport
//document.addEventListener("DOMContentLoaded", function() {
    // Créer un observer pour détecter l'entrée des sections dans le viewport
  //  let observer = new IntersectionObserver((entries, observer) => {
  //    entries.forEach(entry => {
   //     if (entry.isIntersecting) {
   //       entry.target.classList.add('visible');
    //      observer.unobserve(entry.target); // Optionnel: arrêter d'observer une fois visible
     //   }
     // });
    //}, { threshold: 0.1 }); // Seuil pour déclencher l'observation
  
    // Sélectionner toutes les sections à animer
   // const sections = document.querySelectorAll('.fade-in');
  
    // Observer chaque section
    //sections.forEach(section => {
      //observer.observe(section);
   // });
  //});

  jQuery(document).ready(function($) {
    // Déclare une fonction pour vérifier si les sections doivent être affichées avec un effet fade-in
    function checkFadeInSection() {
        var fadeIns = document.querySelectorAll('.fade-in-section');
        
        for (var i = 0; i < fadeIns.length; i++) {
            var elemPos = $(fadeIns[i]).offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            // Déclenche l'animation si l'élément est déjà visible au chargement de la page, ou lors du scroll
            if (scrollTop + windowHeight - 100 > elemPos || windowHeight + 100 > elemPos) {
                $(fadeIns[i]).addClass('fade-in-up');
            }
        }
    }

    // Exécute immédiatement pour vérifier si des éléments doivent être animés au chargement de la page
    checkFadeInSection();

    // Continue de vérifier lors du défilement
    $(window).scroll(function() {
        checkFadeInSection();
    });
});

const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    //console.log(window.scrollY / 2)
    parallax.style.backgroundPositionY = -window.scrollY / 2.45 + "px";
});





  
  

  
  