<?php

if (!defined('ABSPATH')) {
    exit;
}

/* Template Name: Page — Brand */

get_header(); ?>

<section class="mt-50">
    <div class="container">

        <div class="grid text-center" style="--columns: 3;">
            <div>
                First auto-column
                <div class="grid">
                <div>Auto-column</div>
                <div>Auto-column</div>
                </div>
            </div>
            <div>
                Second auto-column
                <div class="grid" style="--columns: 12;">
                <div class="g-col-6">6 of 12</div>
                <div class="g-col-4">4 of 12</div>
                <div class="g-col-2">2 of 12</div>
                </div>
            </div>
            <div>Third auto-column</div>
        </div>

        <div class="row row-cols-2">
            <div>col</div>
            <div>col</div>
            <div>col</div>
            <div>col</div>
        </div>
        <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
        </div>

        <hr class="my-50">

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <hr class="my-50">

        <p class="fs-1">Paragraph 1</p>
        <p class="fs-2">Paragraph 2</p>
        <p class="fs-3">Paragraph 3</p>
        <p class="fs-4">Paragraph 4</p>
        <p>Paragraph base</p>
        <p class="fs-5">Paragraph 5</p>
        <p class="fs-6">Paragraph 6</p>
        
        <hr class="my-50">

        <ul>
            <li>Unordered item</li>
            <li>Unordered item</li>
            <li>Unordered item</li>
        </ul>
        <ol>
            <li>Ordered item</li>
            <li>Ordered item</li>
            <li>Ordered item</li>
        </ol>

        <hr class="my-50">

        <a href="/home/#TEST">Hyperlink</a>

    </div>
</section>

<section class="overflow-hidden">
    <img
        class="img-fluid w-100 scale-140 ratio-32x9 object-fit-cover" 
        data-speed="auto"
        src="/wp-content/uploads/2024/09/daniel-chen-SoNaNOFT974-unsplash.jpg"
        alt="Test Image"
    />
</section>

<section class="mb-50">
    <div class="container">

        <div class="grid gap-3" style="--columns: 2">
            <button class="btn btn-snow">Snow</button>
            <button class="btn btn-outline-snow">Outline Snow</button>

            <button class="btn btn-ivory">Ivory</button>
            <button class="btn btn-outline-ivory">Outline Ivory</button>

            <button class="btn btn-pearl">Pearl</button>
            <button class="btn btn-outline-pearl">Outline Pearl</button>

            <button class="btn btn-ash">Ash</button>
            <button class="btn btn-outline-ash">Outline Ash</button>

            <button class="btn btn-slate">Slate</button>
            <button class="btn btn-outline-slate">Outline Slate</button>

            <button class="btn btn-granite">Granite</button>
            <button class="btn btn-outline-granite">Outline Granite</button>

            <button class="btn btn-coal">Coal</button>
            <button class="btn btn-outline-coal">Outline Coal</button>

            <button class="btn btn-onyx">Onyx</button>
            <button class="btn btn-outline-onyx">Outline Onyx</button>
        </div>

    </div>
</section>

<?php get_footer();