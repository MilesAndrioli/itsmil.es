<?php

/** 
 * Prevent direct access to the file. This script should only be included by 
 * WordPress, which defines the 'ABSPATH' constant as part of its environment 
 * setup. If 'ABSPATH' is not defined, terminate script execution immediately to 
 * ensure security.
 * @link https://hoolite.be/wordpress/how-to-implement-wordpress-abspath-check/
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define theme version from style.css.
if ( ! defined( '_VER' ) ) {
	define( '_VER', wp_get_theme()->get( 'Version' ) );
}

// Enqueue frontend assets.
if ( ! function_exists( 'enqueue_frontend_dist' ) ) {
    function enqueue_frontend_dist() {

        wp_enqueue_style(
            'frontend',
            get_template_directory_uri() . '/dist/css/frontend.css',
            array(), _VER, 'all'
        );

        wp_enqueue_script(
            'frontend',
            get_template_directory_uri() . '/dist/js/frontend.js',
            array(), _VER, true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'enqueue_frontend_dist' );

// Enqueue backend assets.
if ( ! function_exists( 'enqueue_backend_dist' ) ) {
    function enqueue_backend_dist() {
        
        add_editor_style( 'dist/css/backend.css' );
        
        wp_enqueue_script(
            'backend',
            get_template_directory_uri() . '/dist/js/backend.js',
            array(), _VER, true
        );
    }
}
add_action( 'enqueue_block_editor_assets', 'enqueue_backend_dist' );

// Auto-load PHP files from the 'includes' directory.
foreach ( glob( get_template_directory() . '/includes/_*.php' ) as $file ) {
    require_once $file;
}
