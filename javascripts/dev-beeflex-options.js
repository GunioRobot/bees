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
