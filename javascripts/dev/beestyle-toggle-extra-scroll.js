var beeExtra = {
    show: function() {
        jQuery('#extra').show();
        beeScroll.scrollHeight();
        jQuery('#beeExtraToggle a').remove();
        jQuery('#beeExtraToggle').append('<a href="javascript:beeExtra.hide();">hide extra</a>');
    },
    hide: function() {
        jQuery('#extra').hide();
        beeScroll.scrollHeight();
        jQuery('#beeExtraToggle a').remove();
        jQuery('#beeExtraToggle').append('<a href="javascript:beeExtra.show();">show extra</a>');
    }
}
jQuery(document).ready(function(){
    jQuery('#beeExtraToggle').append('<a href="javascript:beeExtra.show();">show extra</a>');
});

// jQuery('#extra').show('slow', function(){ beeScroll.scrollHeight(); });
// jQuery('#extra').hide('slow', function(){ beeScroll.scrollHeight(); });
// better if this is instant - not sliding in/out - due to scrollHeight auto-calc
