$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        controlsContainer: ".beeSlides"
    });
    $(".beeSlides .next").delay(800).fadeIn("400");
    $(".beeSlides .prev").delay(800).fadeIn("400");
    $(".flex-control-nav").delay(800).fadeIn("400");
});
