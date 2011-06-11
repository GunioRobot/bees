var beeColumn = {
    three: function() {
        jQuery('.insert').removeClass('beeColumn2');
        jQuery('.insert').addClass('beeColumn3');
        jQuery('#beeColToggle a').remove();
        jQuery('#beeColToggle').append('<a href="javascript:beeColumn.one();">one column</a>');
    },
    two: function() {
        jQuery('.insert').addClass('beeColumn2');
        jQuery('#beeColToggle a').remove();
        jQuery('#beeColToggle').append('<a href="javascript:beeColumn.three();">three columns</a>');
    },
    one: function() {
        jQuery('.insert').removeClass('beeColumn2');
        jQuery('.insert').removeClass('beeColumn3');
        jQuery('#beeColToggle a').remove();
        jQuery('#beeColToggle').append('<a href="javascript:beeColumn.two();">two columns</a>');
    }
}
jQuery(document).ready(function(){
    jQuery('#beeColToggle').append('<a href="javascript:beeColumn.two();">two columns</a>');
});
