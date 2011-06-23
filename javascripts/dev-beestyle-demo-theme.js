var beeFilter = {
    beeDark: function() {
        $("body").removeClass("beeLight");
        $("body").addClass("beeDark");
        $("#beeColorToggle a").remove();
        $("#beeColorToggle").append("<a href='javascript:beeFilter.beeLight();'>beeLight</a>");
    },
    beeLight: function() {
        $("body").removeClass("beeDark");
        $("body").addClass("beeLight");
        $("#beeColorToggle a").remove();
        $("#beeColorToggle").append("<a href='javascript:beeFilter.beeDark();'>beeDark</a>");
    }
}
$(document).ready(function() {
    $("#beeColorToggle").append("<a href='javascript:beeFilter.beeDark();'>beeDark</a>");
});
