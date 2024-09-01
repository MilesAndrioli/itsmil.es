<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<header id="app-header" class="position-fixed z-1 w-100">
    <div class="container">
        <div class="d-flex align-items-center justify-content-between">
            <?php wp_nav_menu([
                'theme_location' => 'app-header-navigation',
                'container'      => false,
                'menu_class'     => 'list-unstyled m-0 d-flex gap-3'
            ]); ?>
            <h6 class="h3">HEADER</h6>
        </div>
    </div>
</header>