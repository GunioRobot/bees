// set height for non iphone/ipodtouch/ipad device
// so footer sticks to bottom and main divs scroll
var beeScroll = {
    setHeight: function(element) {
        // gather header and footer height
        var header_height = $('header').getHeight();
        var footer_height = $('footer').getHeight();
        var total_height = (header_height + footer_height);
        // gather extra height if present
        if ($('extra')) {
            var extra_display = $('extra').getStyle('display');
            if (extra_display != 'none') {
                var extra_height = $('extra').getHeight();
                var total_height = (total_height + extra_height);
            }
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
        // iphone/ipad do not handle inner scrolling
        if (!(Prototype.Browser.MobileSafari)) {
            $$('.scroll').each(function(s, index) {
                beeScroll.setHeight(s);
            });
        }
    }
}
// set when dom loads
// so we don't have to wait for each last bit of content to load in before the layout assembles itself
document.observe('dom:loaded', function() {
    beeScroll.scrollHeight();
});
// reset after all loads
// if we get some dynamic content loading in after the dom loads, the layout may need to recalculate
Event.observe(window, 'load', function() {
    beeScroll.scrollHeight();
});
// reset on resize
// if the window is resized, the layout definitely needs to recalculate
Event.observe(window, 'resize', function() {
    beeScroll.scrollHeight();
});
