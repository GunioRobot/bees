var BeeStyle = {
// set height for non iphone/ipodtouch/ipad devices so that footer sticks to bottom and main divs scroll
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
    scrollHeight: function() {
        $$('.scroll').each(function(s, index) {
            BeeStyle.setHeight(s);
        });
    },
// set width in firefox to emulate webkit css3 flexible box layout implementation
    setWidth: function(element) {
        var body_width = document.viewport.getWidth() - 22;
        var max_width = body_width >= 100 ? body_width : 100;
        element.setStyle({
            width: max_width + 'px'
        });
    },
    scrollWidth: function() {
        BeeStyle.setWidth($('main'));
        if ($('header')) {
            BeeStyle.setWidth($('header'));
        }
        if ($('footer')) {
            BeeStyle.setWidth($('footer'));
        }
        if ($('extra')) {
            BeeStyle.setWidth($('extra'));
        }
    }
}
// set height (for non iphone/ipodtouch/ipad devices) and width (for firefox) on domload
document.observe('dom:loaded', function() {
    if (BrowserDetect.browser=="Firefox") {
        BeeStyle.scrollWidth();
    }
    if (!(BrowserDetect.OS=="iPhone/iPod") && !(BrowserDetect.OS=="iPad")) {
        BeeStyle.scrollHeight();
    }
});
// set height (for non iphone/ipodtouch/ipad devices) and width (for firefox) on resize
Event.observe(window, 'resize', function() {
    if (BrowserDetect.browser=="Firefox") {
        BeeStyle.scrollWidth();
    }
    if (!(BrowserDetect.OS=="iPhone/iPod") && !(BrowserDetect.OS=="iPad")) {
        BeeStyle.scrollHeight();
    }
});
