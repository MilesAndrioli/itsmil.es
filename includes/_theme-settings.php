<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('theme_settings')) {
    /**
     * Configures theme-specific settings.
     */
    function theme_settings()
    {
        /**
         * Add support for Backend Styling.
         *
         * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#editor-styles
         */
        add_theme_support('editor-styles');

        /**
         * This function allows to register menus and expose them in the 
         * WordPress admin panel for easy management.
         */
        register_nav_menus(
            array(
                'app-header-navigation' => esc_html__('App Header Navigation', 'sandtons'),
            )
        );
    }
    add_action('after_setup_theme', 'theme_settings');
}
