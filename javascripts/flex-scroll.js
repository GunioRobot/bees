var Overflow = {
    setWidth: function(element) {
        var left_width = $('box-2').getWidth();
        var right_width = $('box-3').getWidth();
        var total_width = (left_width + right_width) - 75;
        var body_width = document.viewport.getWidth() - total_width;
        var max_width = body_width >= 100 ? body_width : 100;
        element.setStyle({
            width: max_width + 'px'
        });
    },
    setup: function() {
        Overflow.setWidth($('box-1'));
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
