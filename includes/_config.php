<?php

if (!defined('ABSPATH')) {
    exit;
}

// Disable native WP images responsive sizing
// add_filter( 'wp_calculate_image_srcset', '__return_false' );

function load_custom_page_template($template)
{
    // Check if we're on a single page
    if (is_page()) {
        global $post;

        // Build the custom template path based on the page slug
        $custom_template = get_template_directory() . '/pages/page-' . $post->post_name . '.php';

        // If the custom template file exists, use it
        if (file_exists($custom_template)) {
            return $custom_template;
        }
    }

    // Fallback to the default template
    return $template;
}
add_filter('template_include', 'load_custom_page_template');



function get_image($attachment_id, $size = 'thumbnail', $additional_attributes = [])
{
    $image = wp_get_attachment_image_src($attachment_id, $size);
    if (!$image) {
        return ''; // Return an empty string if no image is found
    }

    // Destructure array to get src, width, and height
    [$src, $width, $height] = $image;

    // Build the basic attributes
    $attributes = [
        'src' => esc_url($src),
        'width' => intval($width),
        'height' => intval($height),
        'alt' => esc_attr(get_post_meta($attachment_id, '_wp_attachment_image_alt', true)),
        'class' => 'img-fluid' // default class, can be overridden or appended in $additional_attributes
    ];

    // Merge additional attributes provided by user
    $attributes = array_merge($attributes, $additional_attributes);

    // Build the HTML string for the image
    $html = '<img ';
    foreach ($attributes as $key => $value) {
        if (is_bool($value) && $value) {
            $html .= sprintf('%s ', $key); // If the value is true (boolean), only output the key
        } else {
            $html .= sprintf('%s="%s" ', $key, esc_attr($value)); // Otherwise, output key="value"
        }
    }
    $html .= '/>';

    return $html;
}
