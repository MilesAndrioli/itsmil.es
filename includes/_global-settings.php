<?php

if (!defined('ABSPATH')) {
    exit;
}

// Remove Adminbar Bump
add_action('get_header', function () {
    remove_action('wp_head', '_admin_bar_bump_cb');
});

// Disable native WordPress image optimizations
add_filter('big_image_size_threshold', '__return_false');
