<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Configures theme-specific settings.
 */
function theme_settings()
{
    /**
     * Add support for Backend Styling.
     * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#editor-styles
     */
    add_theme_support('editor-styles');

    /**
     * This function allows to register menus and expose them in the 
     * WordPress admin panel for easy management.
     */
    register_nav_menus(
        array(
            'left-header-navigation'    => 'Left Header Navigation',
            'right-header-navigation'   => 'Right Header Navigation',
            'mobile-header-navigation'  => 'Mobile Header Navigation',
        )
    );

    /**
     * Add support for WordPress Theme logo feature.
     * @link https://developer.wordpress.org/themes/functionality/custom-logo/
     */
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'theme_settings');
