<?php

if (!defined('ABSPATH')) {
    exit;
}

// Remove imposed Gutenberg body CSS variables
remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');

// Remove imposed WordPress emoji JS file
remove_action('wp_head', 'print_emoji_detection_script', 7);

if (!function_exists('dequeue_garbage')) {
    function dequeue_garbage()
    {
        // Dequeue imposed Gutenberg CSS file
        wp_dequeue_style('wp-block-library');
    }
    add_action('wp_enqueue_scripts', 'dequeue_garbage');
}
