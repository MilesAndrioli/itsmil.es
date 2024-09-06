<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<header id="app-header" class="position-fixed z-8 w-100 border-bottom py-3">
    <div class="container">
        <div class="d-flex align-items-center justify-content-between gap-5">

            <!-- Menu -->
            <?php wp_nav_menu([
                'theme_location'    => 'left-header-navigation',
                'container'         => 'nav',
                'menu_class'        => 'list-unstyled d-flex gap-3',
            ]); ?>

            <!-- Logo -->
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url()); ?>">
                    <span class="h3"><?php bloginfo('name'); ?></span>
                </a>
            <?php endif; ?>

            <!-- Menu -->
            <?php wp_nav_menu([
                'theme_location'    => 'right-header-navigation',
                'container'         => 'nav',
                'menu_class'        => 'list-unstyled d-flex gap-3',
            ]); ?>

        </div>
    </div>
</header>