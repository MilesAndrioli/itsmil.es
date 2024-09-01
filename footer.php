<?php

if (!defined('ABSPATH')) {
    exit;
}

?>

</main> <!-- #appMain -->

<!-- App Footer -->
<?php get_template_part('parts/app-footer'); ?>

<!-- WS Form Dynamic Enqueue Hack
In order to use WS Form with Barba.js
and not disable dynamic enqueue:
Use the most complex form to enqueue
its dependencies across the app. -->
<div class="d-none">
    <?= do_shortcode('[ws_form id="1"]') ?>
</div>

</div> <!-- #smooth-content -->
</div> <!-- #smooth-wrapper -->
</div> <!-- #appWrapper -->
<?php wp_footer(); ?>
</body>

</html>