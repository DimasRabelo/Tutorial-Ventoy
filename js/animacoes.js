/* BANNER */
$(document).ready(function () {
  $('.banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true // Opcional, remove as setas para focar no autoplay
  });
});
