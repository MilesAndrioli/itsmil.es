<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php echo body_class(); ?>>

    <!-- App Wrapper -->
    <div id="app-wrapper">

        <!-- App Loader -->
        <?php get_template_part('parts/app-loader'); ?>

        <!-- App Noise VFX -->
        <?php get_template_part('parts/app-noise'); ?>

        <!-- App Filter VFX -->
        <?php get_template_part('parts/app-filter'); ?>

        <!-- App Header -->
        <?php get_template_part('parts/app-header'); ?>

        <!-- Scroll Smoother -->
        <div id="smooth-wrapper">
            <div id="smooth-content">

                <!-- App Main -->
                <main id="app-main">