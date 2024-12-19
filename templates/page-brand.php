<?php

if (!defined('ABSPATH')) {
    exit;
}

/* Template Name: Page — Brand */

get_header(); ?>

<section>
    <div class="container">

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p class="fs-1">Paragraph 1</p>
        <p class="fs-2">Paragraph 2</p>
        <p class="fs-3">Paragraph 3</p>
        <p class="fs-4">Paragraph 4</p>
        <p>Paragraph base</p>
        <p class="fs-5">Paragraph 5</p>
        <p class="fs-6">Paragraph 6</p>

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

        <a href="/home/#TEST">Hyperlink</a>
        <a href="/home/#TEST" class="btn btn-link">Buttonlink</a>

    </div>
</section>

<hr>

<section>
    <div class="container">

        <div class="grid" style="--columns: 2;">
            <div>
                <h2 class="h1" aos="split" aos-split-type="chars" aos-scrub aos-repeat>Title</h2>
                <p aos="split" aos-scrub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero quas ullam, veritatis quam voluptate voluptatum porro ad aliquid quibusdam itaque necessitatibus! Excepturi voluptatem eos accusamus odit reprehenderit provident ipsum.</p>
            </div>
            <div class="order-first">
                <div class="overflow-hidden" aos="scale-out-fade-in" aos-scrub>
                    <img
                        class="img-fluid scale-150"
                        data-speed="auto"
                        src="/wp-content/uploads/aranprime-KbytCpI1i5I-unsplash.jpg"
                        alt="Test Image" />
                </div>
            </div>
        </div>

    </div>
</section>

<hr>

<section>
    <div class="container">

        <div class="grid" style="--columns: 2;">
            <div>
                <h2 class="h1" aos="split" aos-split-type="chars" aos-scrub>Title</h2>
                <p aos="split" aos-scrub>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero quas ullam, veritatis quam voluptate voluptatum porro ad aliquid quibusdam itaque necessitatibus! Excepturi voluptatem eos accusamus odit reprehenderit provident ipsum.</p>
            </div>
            <div>
                <div class="vh-60 overflow-hidden debug" aos="fade" aos-scrub>
                    <img
                        class="img-fluid w-100 min-ph-150 object-fit-cover"
                        data-speed="auto"
                        src="/wp-content/uploads/zhao-yangyang-WpQIcQrZ5TI-unsplash.jpg"
                        alt="Test Image" />
                </div>
            </div>
        </div>

    </div>
</section>

<hr>

<section>
    <div class="container mw-800">

        <div class="grid gap-3" style="--columns: 2;" aos="fade" aos-parent aos-once>
            <button aos-child class="btn btn-snow swipeLink swipeLink--ontop">Snow</button>
            <button aos-child class="btn btn-outline-snow swipeLink swipeLink--ontop">Outline Snow</button>
            <button aos-child class="btn btn-ivory yoyoLink yoyoLink--ontop">Ivory</button>
            <button aos-child class="btn btn-outline-ivory yoyoLink yoyoLink--ontop">Outline Ivory</button>
            <button aos-child class="btn btn-pearl">Pearl</button>
            <button aos-child class="btn btn-outline-pearl">Outline Pearl</button>
            <button aos-child class="btn btn-ash">Ash</button>
            <button aos-child class="btn btn-outline-ash">Outline Ash</button>
            <button aos-child class="btn btn-slate">Slate</button>
            <button aos-child class="btn btn-outline-slate">Outline Slate</button>
            <button aos-child class="btn btn-granite">Granite</button>
            <button aos-child class="btn btn-outline-granite">Outline Granite</button>
            <button aos-child class="btn btn-coal">Coal</button>
            <button aos-child class="btn btn-outline-coal">Outline Coal</button>
            <button aos-child class="btn btn-onyx">Onyx</button>
            <button aos-child class="btn btn-outline-onyx">Outline Onyx</button>
        </div>

    </div>
</section>

<section class="overflow-hidden">
    <img
        class="img-fluid w-100 scale-140  object-fit-cover"
        data-speed="auto"
        src="/wp-content/uploads/daniel-chen-SoNaNOFT974-unsplash.jpg"
        alt="Test Image" />
</section>
<section class="overflow-hidden">
    <img
        class="img-fluid w-100 scale-140  object-fit-cover"
        data-speed="auto"
        src="/wp-content/uploads/daniel-chen-SoNaNOFT974-unsplash.jpg"
        alt="Test Image" />
</section>

<?php get_footer();
