document.addEventListener("DOMContentLoaded", function() {  
    AOS.init({
        duration: 1200, // valeurs en millisecondes
        delay: 100, // valeurs en millisecondes
        startEvent: 'DOMContentLoaded', // démarre l'animation dès que le DOM est chargé
        anchorPlacement: 'top-bottom', // définit comment les éléments sont déclenchés (quand le haut de l'élément est en bas du viewport)
        once: true, // animation ne se joue qu'une fois - quand l'élément apparaît dans le viewport
    });
});
