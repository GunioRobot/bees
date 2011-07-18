var beeMin = {
    out: function() {
        // add min class to main aside
        $(".beeFlex #main aside").addClass("min");
        // wrap panel in a link
        $(".beeFlex #main aside .panel").wrap("<a href='javascript:beeMin.in();' />");
    },
    in: function() {
        // remove min class on main aside
        $(".beeFlex #main aside").removeClass("min");
        // unlink panel divs
        $(".beeFlex #main aside .panel").unwrap();
    }
}
$(document).ready(function() {
    // add minify toggle link
    $("#beeMinToggle").append("<a href='javascript:beeMin.out();'>minify</a>");
});
