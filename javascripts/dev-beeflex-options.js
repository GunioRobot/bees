var beeSidebars = {
    toggle: function() {
        $(".toggleSidebars").click(function() {
            if ($(this).hasClass("out")) {
                $("#main aside").fadeOut(400);
                $(this).removeClass("out");
                $(this).addClass("in");
                $(this).removeAttr("title");
                $(this).attr("title","show sidebars");
            }
            else {
                $("#main aside").fadeIn(400);
                $(this).removeClass("in");
                $(this).addClass("out");
                $(this).removeAttr("title");
                $(this).attr("title","hide sidebars");
            }
        });
    }
}
// set when dom loads
// so we don't have to wait for each last bit of content to load in before the layout assembles itself
$(document).ready(function() {
    beeSidebars.toggle();
});
/*
$("#main aside").animate({ minWidth: "0", maxWidth: "0", opacity: "0" }, 200, function() {
    $("#main aside").hide();
});
$("#main aside").show(function() {
    $("#main aside").animate({ minWidth: "100px", maxWidth: "200px", opacity: "1.0" }, 200);
});
*/
