<?php

if (!defined('ABSPATH')) {
    exit;
}

/* Template Name: Page — Home */

get_header(); ?>

<section>
    <div class="container">

        <!-- ROW -->
        <div class="row row-cols-md-2 gy-4">
            <div>
                <h1 class="fst-faux" aos="split" aos-split-type="chars" aos-scrub>Row</h1>
                <h1 class="fst-italic" aos="split" aos-split-type="chars" aos-scrub>Row</h1>
                <p aos="split" aos-scrub>
                    class="row row-cols-md-2"
                </p>
            </div>
            <div class="order-first">
                <div class="vh-60 overflow-hidden debug" aos="fade" aos-scrub>
                    <img
                        class="img-fluid w-100 min-ph-110 object-fit-cover"
                        data-speed="auto"
                        src="/wp-content/uploads/aranprime-KbytCpI1i5I-unsplash.jpg"
                        alt="Test Image" />
                </div>
            </div>
        </div>

    </div>
</section>

<section>
    <div class="container">

        <!-- GRID -->
        <div class="grid" style="--columns: 2;">
            <div>
                <h2 aos="split" aos-split-type="chars" aos-scrub>Grid</h2>
                <p aos="split" aos-scrub>
                    class="grid" style="--columns: 2;"
                </p>
            </div>
            <div class="order-first">
                <div class="vh-60 overflow-hidden debug" aos="fade" aos-scrub>
                    <img
                        class="img-fluid w-100 min-ph-110 object-fit-cover"
                        data-speed="auto"
                        src="/wp-content/uploads/aranprime-KbytCpI1i5I-unsplash.jpg"
                        alt="Test Image" />
                </div>
            </div>
        </div>
    </div>
</section>

<section class="vh-50 d-flex align-items-center overflow-hidden position-relative">
    <!-- Image -->
    <img src="/wp-content/uploads/daniel-chen-SoNaNOFT974-unsplash.jpg"
        class="img-fluid w-100 position-absolute"
        data-speed="auto">
    <!-- Image Overlay -->
    <div class="img-overlay" style="--bg-color: rgb(0 0 0 / 30%)"></div>
    <!-- Content -->
    <div class="container d-flex align-items-end gap-5" data-speed="1.1">
        <p class="mw-600 fs-6 mb-0" aos="split" aos-scrub>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quos quod, expedita distinctio vitae perferendis, deserunt repudiandae ducimus iusto tempora commodi beatae error quisquam est qui repellat soluta sint facere?</p>
        <h2 class="" aos="split" aos-split-type="chars" aos-split-from="end" aos-scrub>Excellence.</h2>
    </div>
</section>

<section class="vh-50 overflow-hidden">
    <img src="/wp-content/uploads/daniel-chen-SoNaNOFT974-unsplash.jpg"
        class="img-fluid w-100 min-ph-120 object-fit-cover"
        data-speed="auto">
</section>

<section class="vh-50 overflow-hidden debug">
    <img src="/wp-content/uploads/aranprime-KbytCpI1i5I-unsplash.jpg"
        class="img-fluid w-100 min-ph-120 object-fit-cover"
        data-speed="auto">
</section>

<section>
    <div class="container">

        <!-- GRID -->
        <div class="grid">
            <div class="g-col-12 g-col-md-6">
                <h2 aos="split" aos-split-type="chars" aos-scrub>Grid</h2>
                <p aos="split" aos-scrub>
                    class="grid"
                    class="g-col-12 g-col-md-6"
                    class="g-col-12 g-col-md-6"
                </p>
            </div>
            <div class="g-col-12 g-col-md-6 order-first">
                <div class="overflow-hidden" aos="fade" aos-scrub>
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

<?php get_footer();
