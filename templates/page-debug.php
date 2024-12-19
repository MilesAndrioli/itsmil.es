<?php

if (!defined('ABSPATH')) {
    exit;
}

/* Template Name: Page — Debug */

get_header(); ?>

<section class="vh-available overflow-hidden position-relative">
    <img src="daniel-chen-SoNaNOFT974-unsplash"
        class="w-100 min-ph-120 object-fit-cover position-absolute"
        data-speed="clamp(auto)">
    <div class="img-overlay"></div>
    <div class="container position-relative h-100 align-content-center">
        <div aos="fade" aos-reverse aos-when="leaving" aos-scrub>
            <h1 aos="split" aos-split-type="chars" aos-scrub>Content</h1>
            <p class="fs-6" aos="split" aos-scrub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita doloremque ipsa maxime earum recusandae, officiis corporis unde debitis neque accusamus ipsum impedit fuga consectetur non provident delectus iusto maiores!</p>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <h1>Debug</h1>
        <h1>Debug</h1>
        <h1>Debug</h1>
        <h1>Debug</h1>
    </div>
</section>

<section aos="fade" aos-reverse aos-when="leaving" aos-scrub>
    <div class="container" aos="split" aos-split-type="chars" aos-scrub>
        <h1>↑ Landscape</h1>
        <h1>Portrait ↓</h1>
        <h1>↑ Landscape</h1>
        <h1>Portrait ↓</h1>
        <h1>↑ Landscape</h1>
        <h1>Portrait ↓</h1>
    </div>
</section>

<section class="vh-60 overflow-hidden">
    <img src="zhao-yangyang-WpQIcQrZ5TI-unsplash"
        class="w-100 min-ph-120 object-fit-cover"
        data-speed="auto">
</section>

<section>
    <div class="container">
        <div class="row row-cols-md-2 gy-5">
            <div class="align-content-end text-end">
                <p class="fs-6">Lorem ipsum <a href="" class="yoyoLink" data-cursor-img="zhao-yangyang-WpQIcQrZ5TI-unsplash">dolor sit amet consectetur</a> adipisicing elit. Facilis expedita doloremque ipsa maxime earum recusandae, officiis corporis unde debitis neque accusamus ipsum impedit fuga consectetur non provident delectus iusto maiores!</p>
            </div>
            <div>
                <div class="ratio-9x16 overflow-hidden position-relative debug">
                    <img src="zhao-yangyang-WpQIcQrZ5TI-unsplash"
                        class="w-100 min-ph-120 object-fit-cover position-absolute"
                        data-speed="auto">
                    <div class="img-overlay"></div>
                    <div class="container position-relative h-100 align-content-center text-center">
                        <h1>Content</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer();
