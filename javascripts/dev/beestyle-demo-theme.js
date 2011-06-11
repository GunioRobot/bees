var beeFilter = {
    beeDark: function() {
        jQuery('body').removeClass('beeLight');
        jQuery('body').addClass('beeDark');
        jQuery('#beeColorToggle a').remove();
        jQuery('#beeColorToggle').append('<a href="javascript:beeFilter.beeLight();">beeLight</a>');
    },
    beeLight: function() {
        jQuery('body').removeClass('beeDark');
        jQuery('body').addClass('beeLight');
        jQuery('#beeColorToggle a').remove();
        jQuery('#beeColorToggle').append('<a href="javascript:beeFilter.beeDark();">beeDark</a>');
    }
}
jQuery(document).ready(function(){
    jQuery('#beeColorToggle').append('<a href="javascript:beeFilter.beeDark();">beeDark</a>');
});
