<?php

if (!defined('ABSPATH')) {
    exit;
}

get_header(); ?>

<section>
    <div class="container">

        <h1 class="text-hell" aos="split-up-clip-down" split-type="chars" aos-ease="elastic.out(1,0.3)">Oops! 404</h1>

        <a href="#" class="yoyoLink">yoyoLink</a>
        <button href="#" class="yoyoLink yoyoLink--ontop">yoyoLink--ontop</button>

        <a href="#" class="swipeLink">swipeLink</a>
        <button href="#" class="swipeLink swipeLink--ontop">swipeLink--ontop</button>

        <button href="#" class="unfoldLink">unfoldLink</button>

        <div class="overflow-hidden" aos="scale-in">
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>
        <h4>Testing Trigger</h4>

        <div id="test">TEST</div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));" aos-parent aos="scale-in-fade-in" aos-once>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
            <div class="overflow-hidden" aos-child>
                <?= get_image(32, 'full', [
                    'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                    'data-speed' => 'auto',
                ]); ?>
            </div>
        </div>

        <h2 class="avec-serif" aos="split-up-clip-down" split-type="chars" aos-scrub>PP Hatton</h2>

        <h3>scale-in while scrolling</h3>
        <div class="overflow-hidden" aos="scale-in" aos-scrub>
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <h3>scale-in</h3>
        <div class="overflow-hidden" aos="scale-in">
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <h3>scale-out</h3>
        <div class="overflow-hidden" aos="scale-in" aos-reverse>
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <h3>scale-in after</h3>
        <div class="overflow-hidden" aos="scale-in" aos-after>
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <h3>scale-out after</h3>
        <div class="overflow-hidden" aos="scale-in" aos-reverse aos-after>
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>

        <div class="overflow-hidden" aos="scale-in" aos-reverse aos-after aos-scrub>
            <?= get_image(32, 'full', [
                'class' => 'img-fluid scale-120 ratio-16x9 object-fit-cover',
                'data-speed' => 'auto',
            ]); ?>
        </div>
        <h3>scale-out after while scrolling</h3>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, nihil. Ea expedita cum, sapiente ipsam corrupti asperiores labore repellat mollitia numquam consectetur nemo voluptatibus accusantium suscipit dolor tenetur temporibus error?</p>

        <a href="#test" class="btn btn-marble">Button</a>

    </div>
</section>

<?php get_footer();
