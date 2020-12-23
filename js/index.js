// NAVBAR
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// COUNTER
$('.counter').counterUp({
  delay: 10,
  time: 2000,
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');
// SERVICES 3D carousel
