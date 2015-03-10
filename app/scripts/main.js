$(function () {
    $(document).foundation(
        { offcanvas : {
            // Sets method in which off-canvas opens.
            open_method: 'move',     // [ move | overlap_single | overlap ]
            // Should the menu close when a menu link is clicked?
            close_on_click : true       // [ true | false ]
        }}
    );
    /* If "vh" not supported on your target browsers:
        uncomment the following, and
        comment-out the line with "height: 100vh;" in main.scss
    // Account for off-canvas menu height.
    var menu = $('.left-off-canvas-menu');

    $(document).on('resize', function() {
        // Beware with resize handlers...
        //  Throttle & consolidate #perfmatters
        menu.height($(this).height());
    });
    // Initialize height
    $(document).trigger('resize');
    */
});
