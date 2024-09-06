<?php

if (!defined('ABSPATH')) {
    exit;
}

/* Template Name: Page — Home */

get_header(); ?>

<section>
    <div class="container-md">
        <a href="/home/#TEST">Hyperlink</a>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
    </div>
</section>

<section>
    <div class="container-narrow">
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <p>Lorem ipsum dolor sit amet, adipisicing elit. Soluta facere aliquid nisi laudantium placeat, iusto temporibus repellat eum ad. Reprehenderit at, facere dicta aspernatur animi sit quos adipisci? Delectus, adipisci!</p>
        <p>Lorem ipsum dolor sit amet, adipisicing elit. Soluta facere aliquid nisi laudantium placeat, iusto temporibus repellat eum ad. Reprehenderit at, facere dicta aspernatur animi sit quos adipisci? Delectus, adipisci!</p>
    </div>
</section>

<section id="TEST">
    <div class="container">
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
        <h1>TEST</h1>
    </div>
</section>

<section class="bg-primary">
    <div class="container" aos="split-up-clip-down" aos-parent aos-scrub split-type="chars">
        <h1 aos-child>TEST</h1>
        <h1 aos-child>TEST</h1>
        <h1 aos-child>TEST</h1>
        <h1 aos-child>TEST</h1>
    </div>
</section>

<?php get_footer();