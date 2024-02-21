// animations.js

// Fonction pour ajouter la classe 'visible' aux éléments quand ils entrent dans le viewport

jQuery(function($) {
    // Fonction pour vérifier et révéler les éléments lors du défilement
    const revealOnScroll = function() {
      // Sélectionne tous les éléments ayant la classe 'fade-in'
      const elements = $('.fade-in');
  
      // Utilise une boucle for pour itérer sur tous les éléments sélectionnés
      for (let i = 0; i < elements.length; i++) {
        // Accède à chaque élément individuellement
        const element = $(elements[i]);
  
        // Obtient la position de l'élément actuel par rapport au haut du document
        const elementTop = element.offset().top;
  
        // Obtient la hauteur de la fenêtre du navigateur
        const windowHeight = $(window).height();
  
        // Vérifie si l'élément est visible dans le viewport, à 75% de la hauteur de la fenêtre
        const isVisible = elementTop < $(window).scrollTop() + windowHeight * 0.75;
  
        // Si l'élément est visible, ajoute la classe 'visible'
        if (isVisible) {
          element.addClass('visible');
        }
      }
    };
  
    // Écoute l'événement de défilement sur la fenêtre et appelle revealOnScroll à chaque défilement
    // Utilise .on() au lieu de .scroll() pour attacher le gestionnaire d'événement
    $(window).on('scroll', revealOnScroll);
  
    // Appelle également revealOnScroll au chargement initial au cas où des éléments sont déjà visibles
    revealOnScroll();
  });
  
  
  
  