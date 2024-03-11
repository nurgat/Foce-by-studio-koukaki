
    document.addEventListener('DOMContentLoaded', function() {
        var grandNuage = document.querySelector('#grand-nuage');
        var petitNuage = document.querySelector('#petit-nuage');
        var sectionPlace = document.querySelector('#place'); // La section contenant vos nuages
    
        function updateParallax() {
            var scrollY = window.scrollY;
            var sectionStart = sectionPlace.offsetTop - window.innerHeight; // Début de l'animation quand la section est à peine visible
            var scrollPosition = scrollY - sectionStart; // Déplacement à partir du moment où la section devient visible
    
            if (scrollY > sectionStart) { // Commence l'animation seulement si l'utilisateur a défilé jusqu'à la section
                gsap.to(grandNuage, {
                    x: -(scrollPosition * 0.8), // Modifiez le coefficient pour contrôler la vitesse
                    ease: "none",
                    overwrite: 'auto'
                });
                gsap.to(petitNuage, {
                    x: -(scrollPosition * 0.6), // Modifiez le coefficient pour contrôler la vitesse
                    ease: "none",
                    overwrite: 'auto'
                });
            }
        }
    
        window.addEventListener('scroll', updateParallax);
    });
    

