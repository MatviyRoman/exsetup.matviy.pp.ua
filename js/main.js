$(document).ready(function() {
  $("#mySlider").slick({
    autoplay: true,
    dots: false,
    arrows: true,
    asNavFor: "#mySlider2",
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $("#mySlider2").slick({
    // autoplay: true,
    dots: false,
    arrows: false,
    asNavFor: "#mySlider",
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
