<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<div id="app-loader">
    <?php if (has_custom_logo()) : ?>
        <?php
        $logo_id = get_theme_mod('custom_logo');
        $logo_url = wp_get_attachment_image_src($logo_id, 'full')[0];
        ?>
        <img
            class="custom-logo app-loader__image-bg"
            width="250"
            src="<?php echo esc_url($logo_url); ?>"
            alt="<?php bloginfo('name'); ?>" />
        <img
            class="custom-logo app-loader__image-filler"
            width="250"
            src="<?php echo esc_url($logo_url); ?>"
            alt="<?php bloginfo('name'); ?>" />
    <?php else : ?>
        <?php bloginfo('name'); ?>
    <?php endif; ?>
</div>