<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<header id="app-header" class="position-fixed z-10 w-100 border-bottom py-3">
    <div class="container">
        <div class="row row-cols-3 align-items-center">

            <!-- Menu -->
            <div class="d-flex justify-content-start">
                <?php wp_nav_menu([
                    'theme_location'    => 'left-header-navigation',
                    'container'         => 'nav',
                    'menu_class'        => 'list-unstyled d-flex gap-3',
                ]); ?>
            </div>

            <!-- Logo -->
            <div class="d-flex justify-content-center">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url()); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Menu -->
            <div class="d-flex justify-content-end">
                <?php wp_nav_menu([
                    'theme_location'    => 'right-header-navigation',
                    'container'         => 'nav',
                    'menu_class'        => 'list-unstyled d-flex gap-3',
                ]); ?>
            </div>

        </div>
    </div>
</header>