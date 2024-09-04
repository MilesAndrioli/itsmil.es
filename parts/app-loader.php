<?php

if (!defined('ABSPATH')) {
    exit;
}

if (has_custom_logo()) {
    $logo_id = get_theme_mod('custom_logo');
    $logo_url = wp_get_attachment_image_src($logo_id, 'full')[0];
}

?>

<div id="app-loader">
    <img 
        class="custom-logo app-loader__image-bg"
        width="250"
        src="<?php echo esc_url($logo_url); ?>"
        alt="<?php bloginfo('name'); ?>"
    />
    <img 
        class="custom-logo app-loader__image-filler"
        width="250"
        src="<?php echo esc_url($logo_url); ?>"
        alt="<?php bloginfo('name'); ?>"
    />
</div>
