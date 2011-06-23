var beeColumn = {
    three: function() {
        $(".insert").removeClass("beeColumn2");
        $(".insert").addClass("beeColumn3");
        $("#beeColToggle a").remove();
        $("#beeColToggle").append("<a href='javascript:beeColumn.one();'>one column</a>");
    },
    two: function() {
        $(".insert").addClass("beeColumn2");
        $("#beeColToggle a").remove();
        $("#beeColToggle").append("<a href='javascript:beeColumn.three();'>three columns</a>");
    },
    one: function() {
        $(".insert").removeClass("beeColumn2");
        $(".insert").removeClass("beeColumn3");
        $("#beeColToggle a").remove();
        $("#beeColToggle").append("<a href='javascript:beeColumn.two();'>two columns</a>");
    }
}
$(document).ready(function() {
    $("#beeColToggle").append("<a href='javascript:beeColumn.two();'>two columns</a>");
});
