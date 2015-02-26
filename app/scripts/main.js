$(function () {
    //var nj = require('app/templates/template.json');

    //console.log(tj.NAV.MENU_TYPE);
    //if (tj.NAV.MENU_TYPE == 'Canvas') {
        $(document).foundation({
            offcanvas : {
                // Sets method in which off-canvas opens.
                open_method: 'overlap',     // [ move | overlap_single | overlap ]
                // Should the menu close when a menu link is clicked?
                close_on_click : true       // [ true | false ]
            }
        });
        // Account for off-canvas menu height.
        var menu = $('.left-off-canvas-menu');
        $(document).on('resize', function() {
            // Beware with resize handlers...
            //  Throttle & consolidate #perfmatters
            menu.height($(this).height());
        });
        // Initialize height
        $(document).trigger('resize');
    //} else {
    //    $(document).foundation();
    //}
});
