// set height for non iphone/ipodtouch/ipad device
// so footer sticks to bottom and main divs scroll
var beeScroll = {
    scrollHeight: function() {
        // mobile browsers should not get sticky footer with vertical inner scrolling
        if (!/android|ipad|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
            // gather header and footer height
            var headerHeight = $("#header").height();
            var footerHeight = $("#footer").height();
            var totalHeight = headerHeight + footerHeight + 80;
            // gather extra height if visible
            if ($("#extra").is(":visible")) {
                var extraHeight = $("#extra").height();
                var totalHeight = totalHeight + extraHeight;
            }
            // determine height for scrolling content
            var bodyHeight = $("body").height();
            var finalHeight = bodyHeight - totalHeight;
            // set height for scrolling content
            $(".scroll").height(finalHeight);
        }
    }
}
// set when dom loads
// so we don't have to wait for each last bit of content to load in before the layout assembles itself
$(document).ready(function() {
    beeScroll.scrollHeight();
});
// reset after all loads
// if we get some dynamic content loading in after the dom loads, the layout may need to recalculate
$(window).load(function() {
    beeScroll.scrollHeight();
});
// reset on resize
// if the window is resized, the layout definitely needs to recalculate
$(window).resize(function() {
    beeScroll.scrollHeight();
});
