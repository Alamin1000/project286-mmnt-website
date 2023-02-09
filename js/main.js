(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".x-active").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
  $(".testimonial-sldier-active").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<span class="fal fa-chevron-left fa-2x"></span>',
      '<span class="fal fa-chevron-right fa-2x"></span>',
    ],
  });
  $(".hero-slider-active").owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<span class="fal fa-chevron-left fa-2x"></span>',
      '<span class="fal fa-chevron-right fa-2x"></span>',
    ],
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});
