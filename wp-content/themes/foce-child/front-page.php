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

        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" class= "hero-header__hero-logo" >

        </section>
        <section id="story" class="story fade-in-trigger"> 
        <h2><span data-aos="slide-up" data-aos-duration="1000ms" data-aos-delay="400ms">L'histoire</span></h2>

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

            <article id="place" class="fade-in-trigger">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="fade-in-trigger"> 
            <h2><span data-aos="slide-up" data-aos-duration="1000ms" data-aos-delay="400ms">Studio Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>

            <!-- SECTION NOMINATION -->
            <?php  get_template_part('section-nomination'); ?>

    </main><!-- #main -->

<?php
get_footer();

