// open all off-site links in a new tab/window
$(document).ready(function() {
    $("a").attr("target", function() {
        if (this.host == location.host) return "_self";
        else return "_blank;"
    });
});

// animate panels in
/* $(document).ready(function() {
    $(".panel").hide();
    $(".panel").delay(300).show(300).slideUp().slideToggle();
}); */
