<?php

if (!defined('ABSPATH')) {
    exit;
}

get_header(); ?>

<section>
    <div class="container">

        <h1 class="text-hell" aos="split-up-clip-down" split-type="chars">Contact Me</h1>

        <div class="overflow-hidden" aos="zoom-fade">
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-3x4 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <div id="test">TEST</div>

        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>

        <div class="overflow-hidden" aos="zoom-fade">
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-4x3 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <a href="#" class="btn btn-marble">Button</a>

    </div>
</section>

<section style="background-color: #000;">
    <div class="overflow-hidden" style="padding: 100px;" curtain>
        <div curtain-target aos-parent aos="split-up-clip-down" split-type="chars" split-from="edges" aos-after aos-reverse aos-scrub>
            <h1 aos-child>Curtain Target</h1>
            <h1 aos-child>Curtain Target</h1>
            <h1 aos-child>Curtain Target</h1>
        </div>
    </div>
</section>

<section>
    <div class="container">

        <h1 class="text-hell" aos="split-up-clip-down" split-type="chars">Contact Me</h1>

        <div id="test">TEST</div>

        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>
        <h4 aos="split-up-chromatic" split-type="chars">Testing Trigger</h4>

        <a href="#" class="btn btn-marble">Button</a>

    </div>
</section>

<?php get_footer();
