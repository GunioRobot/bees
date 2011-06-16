// open all off-site links in a new tab/window
jQuery(document).ready(function() {
    jQuery("a").attr("target", function() {
        if (this.host == location.host) return "_self";
        else return "_blank;"
    });
});

// animate panels in
/* jQuery(document).ready(function() {
    jQuery(".panel").hide();
    jQuery(".panel").delay(300).show(300).slideUp().slideToggle();
}); */
