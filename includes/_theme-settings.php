<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('theme_settings')) {
    function theme_settings()
    {
        /**
         * Add support for Backend Styling.
         *
         * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#editor-styles
         */
        add_theme_support('editor-styles');
    }
    add_action('after_setup_theme', 'theme_settings');
}
