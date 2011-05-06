var beeExtra = {
    show: function() {
        $('extra').show();
        beeScroll.scrollHeight();
        $$('#beeExtraToggle a')[0].remove();
        $('beeExtraToggle').insert('<a href="javascript:beeExtra.hide();">hide extra</a>');
    },
    hide: function() {
        $('extra').hide();
        beeScroll.scrollHeight();
        $$('#beeExtraToggle a')[0].remove();
        $('beeExtraToggle').insert('<a href="javascript:beeExtra.show();">show extra</a>');
    }
}
document.observe('dom:loaded', function() {
    $('beeExtraToggle').insert('<a href="javascript:beeExtra.show();">show extra</a>');
});

// jQuery("#extra").show("slow", function(){ beeScroll.scrollHeight(); });
// jQuery("#extra").hide("slow", function(){ beeScroll.scrollHeight(); });
// better if this is instant - not sliding in/out - due to scrollHeight auto-calc
