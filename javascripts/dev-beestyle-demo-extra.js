var beeExtra = {
    show: function() {
        $("#extra").show();
        beeScroll.scrollHeight();
        $("#beeExtraToggle a").remove();
        $("#beeExtraToggle").append("<a href='javascript:beeExtra.hide();'>hide extra</a>");
    },
    hide: function() {
        $("#extra").hide();
        beeScroll.scrollHeight();
        $("#beeExtraToggle a").remove();
        $("#beeExtraToggle").append("<a href='javascript:beeExtra.show();'>show extra</a>");
    }
}
$(document).ready(function() {
    $("#beeExtraToggle").append("<a href='javascript:beeExtra.show();'>show extra</a>");
});

// $("#extra").show("slow", function() { beeScroll.scrollHeight(); });
// $("#extra").hide("slow", function() { beeScroll.scrollHeight(); });
// better if this is instant - not sliding in/out - due to scrollHeight auto-calc
