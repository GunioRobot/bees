var Overflow = {
    setHeight: function(element) {
        var header_height = $('header').getHeight();
        var top_content = $$('#main .content')[0].getHeight();
        var footer_height = $('footer').getHeight();
        var total_height = (header_height + top_content + footer_height) - 75;
        /* if ($('extra')) {
            var extra_height = $('extra').getHeight();
            var total_height = (total_height + extra_height) + 36;
        }
        */
        var body_height = document.viewport.getHeight() - total_height;
        var max_height = body_height >= 100 ? body_height : 100;
        element.setStyle({
            height: max_height + 'px'
        });
    },
    setup: function() { /* only works on slideshow listing page but not slideshow add images page in extra div */
        $$('.scroll').each(function(s, index) {
            Overflow.setHeight(s);
        });
    }
}
document.observe('dom:loaded', function() {
    Overflow.setup();
});
Event.observe(window, 'resize', function() {
    Overflow.setup();
});
