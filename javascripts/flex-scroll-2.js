var Overflow2 = {
    setHeight: function(element) {
        var header_height = $$('header')[0].getHeight();
        var footer_height = $$('footer')[0].getHeight();
        var total_height = (header_height + footer_height) + 44;
        if ($('extra')) {
            var extra_height = $('extra').getHeight();
            var total_height = (total_height + extra_height);
        }
        var body_height = document.viewport.getHeight() - total_height;
        var max_height = body_height >= 100 ? body_height : 100;
        element.setStyle({
            height: max_height + 'px'
        });
    },
    setup: function() {
        $$('.scroll').each(function(s, index) {
            Overflow2.setHeight(s);
        });
    }
}
document.observe('dom:loaded', function() {
    if (!(BrowserDetect.OS=="iPhone/iPod") && !(BrowserDetect.OS=="iPad")) {
        Overflow2.setup();
    }
});
Event.observe(window, 'resize', function() {
    if (!(BrowserDetect.OS=="iPhone/iPod") && !(BrowserDetect.OS=="iPad")) {
        Overflow2.setup();
    }
});
