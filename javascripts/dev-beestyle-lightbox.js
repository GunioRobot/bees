$(document).ready(function() {
    // no mobile browsers here
    if (!/android|ipad|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
        // setup each lightbox
        $("div.lightbox").each(function() {
            var lightboxID = $(this).attr("id");
            P7_LSMop(lightboxID,3,0,100,500,1,0,1,0,0,0,5,1,0,1,0,0,0,100,1);
        });
        // initialize lightbox
        P7_LSMinit();
        // attach lightboxes onclick
        $("a.lightbox").each(function() {
            // grab slide number
            var rel = $(this).attr("rel");
            // grab lightbox number
            var rev = $(this).attr("rev");
            // launch lightbox onclick
            $(this).click(function(event) {
                event.preventDefault();
                P7_LSMctrl(rel,rev);
            });
        });
        $(".beeNoteOverlayToggle").each(function() {
            $(this).click(function(event) {
                event.preventDefault();
                // pause lightbox slideshow if running
                P7_LSMctrl("pause");
                // get width of image slide we're toggling on
                var beeNoteWidth = ($(this).parent().siblings().first().width()) - 42;
                // find the overlay associated with this toggle
                var beeNote = $(this).siblings().last();
                // set width of overlay equal to width of image
                $(".beeNoteOverlay").width(beeNoteWidth);
                // toggle note overlay
                beeNote.slideToggle("fast");
                // also ensure overlays closed when switching slides
                // line added to lightbox.js: $(".beeNoteOverlay").each(function() { $(this).hide(); });
            });
        });
    }
});
