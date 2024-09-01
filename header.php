<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

<!doctype html>
<html <?php language_attributes(); ?> data-theme="dark">

<head>
    <!-- Required Meta Tags -->
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Emoji Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐳</text></svg>">

    <?php wp_head(); ?>
</head>

<body <?= body_class(); ?>>

    <!-- App Wrapper -->
    <div id="app-wrapper" data-barba="wrapper">

        <!-- App Loader -->
        <?php get_template_part('parts/app-loader'); ?>

        <!-- App Filter VFX -->
        <div id="app-filter"></div>

        <!-- Scroll Progress Indicator -->
        <?php get_template_part('parts/scroll-progress'); ?>

        <!-- App Header -->
        <?php get_template_part('parts/app-header'); ?>

        <!-- App Navigation -->
        <?php get_template_part('parts/app-navigation'); ?>

        <!-- Scroll Smoother -->
        <div id="smooth-wrapper">
            <div id="smooth-content">

                <!-- App Noise VFX -->
                <div id="app-noise"></div>

                <!-- App Main -->
                <main id="app-main" data-barba="container" data-barba-namespace="<?= get_the_title(); ?>">