$(function () {
    "use strict";
    new WOW().init();
    $("#mainnav").find("a").on("click", function () {
        var e = $(this).attr("data-scroll"),
            t = $('[data-anchor="' + e + '"]').offset().top;
        return $("body,html").animate({
            scrollTop: t
        }, 750), !1
    })
    if ($(window).width() < 767) {
        $('#services .row').owlCarousel();
        $('#portfolio .row').owlCarousel();
    }
});