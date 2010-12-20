var BeeStyle = {
// set height for non iphone/ipodtouch/ipad device
// so footer sticks to bottom and main divs scroll
    setHeight: function(element) {
        // gather header and footer height
        var header_height = $('header').getHeight();
        var footer_height = $('footer').getHeight();
        var total_height = (header_height + footer_height) + 44;
        // gather extra height if present
        if ($('extra')) {
            var extra_height = $('extra').getHeight();
            var total_height = (total_height + extra_height);
        }
        // determine height for scrolling content
        var body_height = document.viewport.getHeight() - total_height;
        var max_height = body_height >= 100 ? body_height : 100;
        // set height for scrolling content
        element.setStyle({
            height: max_height + 'px'
        });
    },
    scrollHeight: function() {
        // todo: iphone/ipodtouch/ipad do not handle inner scrolling
        if (!(BrowserDetect.OS=="iPhone/iPod") && !(BrowserDetect.OS=="iPad")) {
            $$('.scroll').each(function(s, index) {
                BeeStyle.setHeight(s);
            });
        }
    },
// set width in firefox to emulate webkit
// css3 flexible box layout implementation
    setWidth: function(element) {
        // determine width of viewable area
        var body_width = document.viewport.getWidth() - 22;
        var max_width = body_width >= 100 ? body_width : 100;
        // set width of given element
        element.setStyle({
            width: max_width + 'px'
        });
    },
    scrollWidth: function() {
        // todo: required at least through firefox 4b7 possibly longer
        if (BrowserDetect.browser=="Firefox") {
            // set header, footer, and main widths
            BeeStyle.setWidth($('header'));
            BeeStyle.setWidth($('footer'));
            BeeStyle.setWidth($('main'));
            // set extra width if present
            if ($('extra')) {
                BeeStyle.setWidth($('extra'));
            }
        }
    }
}
// set when dom loads
document.observe('dom:loaded', function() {
    BeeStyle.scrollWidth();
    BeeStyle.scrollHeight();
});
// reset after all loads
Event.observe(window, 'load', function() {
    BeeStyle.scrollWidth();
    BeeStyle.scrollHeight();
});
// reset on resize
Event.observe(window, 'resize', function() {
    BeeStyle.scrollWidth();
    BeeStyle.scrollHeight();
});
