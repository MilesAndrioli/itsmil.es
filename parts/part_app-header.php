<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<header id="app-header">
    <div class="container flex gap-10 items-center justify-between">

        <!-- Menu -->
        <?php wp_nav_menu([
            'theme_location'    => 'left-header-navigation',
            'container'         => 'nav',
            'menu_class'        => 'flex gap-3',
        ]); ?>

        <!-- Logo -->
        <?php if (has_custom_logo()) : ?>
            <div class="max-w-46">
                <?php the_custom_logo(); ?>
            </div>
        <?php else : ?>
            <a href="<?= esc_url(home_url()); ?>">
                <?php bloginfo('name'); ?>
            </a>
        <?php endif; ?>

        <!-- Menu -->
        <?php wp_nav_menu([
            'theme_location'    => 'right-header-navigation',
            'container'         => 'nav',
            'menu_class'        => 'flex gap-3',
        ]); ?>

    </div>
</header>