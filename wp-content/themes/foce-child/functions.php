<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('foce-child-style', get_stylesheet_directory_uri() . '/css/index.css', array(), '1.0.0');
}

// Intégration des dépendances
function theme_enqueue_scripts_and_styles() {
    // Swiper
    wp_enqueue_style('swiper-css', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), false, true);

    // AOS
    wp_enqueue_style('aos-css', get_stylesheet_directory_uri() . '/node_modules/aos/dist/aos.css');
    wp_enqueue_script('aos-js', get_stylesheet_directory_uri() . '/node_modules/aos/dist/aos.js', array(), false, true);

    // GSAP
    wp_enqueue_script('gsap-js', get_stylesheet_directory_uri() . '/node_modules/gsap/dist/gsap.min.js', array(), false, true);

    // PARALLAX.JS
    wp_enqueue_script('parallax-js', get_stylesheet_directory_uri() . '/node_modules/parallax-js/dist/parallax.min.js', array(), false, true);
    
    // SKROLLR
    wp_enqueue_script('skrollr-js', get_stylesheet_directory_uri() . '/node_modules/skrollr/dist/skrollr.min.js', array(), false, true);
}

add_action('wp_enqueue_scripts', 'theme_enqueue_scripts_and_styles');

// Gère l'héritage des options du customiseur du thème parent
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // Empêche la mise à jour des mods du thème enfant
    }, 10, 2);

    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}

function foce_child_enqueue_scripts() {
    // Assurez-vous que jQuery est chargé sur le site si nécessaire
    wp_enqueue_script('jquery');
    
    // Ajoute votre script personnalisé sans jQuery comme dépendance
    wp_enqueue_script('foce-child-animations-js', get_stylesheet_directory_uri() . '/js/animations.js', array(), '1.0.0', true);

    // Ajoute custom.js
    wp_enqueue_script('foce-child-custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array(), '1.0.0', true);

}

// Ajoute l'action pour exécuter la fonction définie ci-dessus
add_action('wp_enqueue_scripts', 'foce_child_enqueue_scripts');
