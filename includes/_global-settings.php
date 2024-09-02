<?php

if (!defined('ABSPATH')) {
    exit;
}

// Remove Adminbar Bump
add_action('get_header', function() {
    remove_action('wp_head', '_admin_bar_bump_cb');
});
