var Overflow = {
    setWidth: function(element) {
        var body_width = document.viewport.getWidth() - 22;
        var max_width = body_width >= 100 ? body_width : 100;
        element.setStyle({
            width: max_width + 'px'
        });
    },
    setup: function() {
        Overflow.setWidth($('main'));
        if ($('header')) {
            Overflow.setWidth($('header'));
        }
        if ($('footer')) {
            Overflow.setWidth($('footer'));
        }
        if ($('extra')) {
            Overflow.setWidth($('extra'));
        }
    }
}
document.observe('dom:loaded', function() {
    if (BrowserDetect.browser=="Firefox") {
        Overflow.setup();
    }
});
Event.observe(window, 'resize', function() {
    if (BrowserDetect.browser=="Firefox") {
        Overflow.setup();
    }
});
