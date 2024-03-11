<?php

get_header();
?>

    <main id="primary" class="site-main">

        <section class="hero-header">
    
        <video id="background-video" autoplay loop muted class="hero-header__video">
            <source src="<?php echo get_stylesheet_directory_uri(); ?>/video/Studio+Koukaki-vidéo+header+sans+son+(1).mp4" type="video/mp4">
        </video>

        <!-- Image de secours pour les appareils mobiles ou lorsque la vidéo ne peut pas être chargée -->
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/banner.png" alt="Image de secours" class="fallback-image">

        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" class= "hero-header__hero-logo" data-0="transform: translate3d(0px,0px,0px);" data-500="transform: translate3d(0px,200px,0px);">

        </section>
        <section id="story" class="story"  data-aos="slide-up" data-aos-duration="2000" data-aos-delay="400"> 
        <h2>L'histoire</h2>

            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>

            <!-- AJOUT TEMPLATE CAROUSEL -->
            <?php get_template_part('partials/characters-carousel');?>

            <!-- SECTION LIEU - MOUVEMENT NUAGE -->
            <?php get_template_part('section-lieu-mouvement-nuage');?>

            

        </section>


        <section id="studio"  data-aos="slide-up" data-aos-duration="2000" data-aos-delay="400"> 
            <h2>Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>

            <!-- SECTION NOMINATION DES OSCARS -->
            <?php  get_template_part('section-nomination'); ?>

    </main><!-- #main -->

<?php
get_footer();

