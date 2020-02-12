$(document).ready(function() {
  $("#mySlider").slick({
    // autoplay: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false
        }
      }
    ]
  });

  new WOW().init();
});
