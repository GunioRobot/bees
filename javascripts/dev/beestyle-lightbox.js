$(document).ready(function() {
    // no mobile browsers here
    if (!/android|ipad|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
        // setup each lightbox
        P7_LSMop('p7LSM_1',3,0,100,500,1,0,1,0,0,0,5,1,0,1,0,0,0,100,1);
        // initialize lightbox
        P7_LSMinit();
        // attach lightboxes onclick
        $(".lightbox").each(function() {
            // grab slide number
            var rel = $(this).attr("rel");
            // grab lightbox number
            var rev = $(this).attr("rev");
            // launch lightbox onclick
            $(this).click(function() {
                P7_LSMctrl(rel,rev);
            });
        });
        $(".beeNoteOverlayToggle").each(function() {
            $(this).click(function() {
                // puase lightbox slideshow if running
                P7_LSMctrl("pause");
                // toggle note overlay
                // todo: this should really apply just to this overlay not all
                $(".beeNoteOverlay").slideToggle("fast");
                // also ensure overlays closed when switching slides
                // line added to lightbox.js: $(".beeNoteOverlay").each(function() { $(this).hide(); });
            });
        });
    }
});
