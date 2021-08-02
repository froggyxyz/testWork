(function ($) {
  $(function () {
    $('#up').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
})(jQuery);

$(document).on('scroll', function () {
  if ($(window).scrollTop() === 0) $('.js-to-top').addClass('d-none');
  else $('.js-to-top').removeClass('d-none');
});

$('.js-intro-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.js-intro-prev',
  nextArrow: '.js-intro-next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

$('.js-business-slider').slick({
  prevArrow: '.js-business-prev',
  nextArrow: '.js-business-next',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        infinite: true,
      },
    },
  ],
});

$('.js-certificates-slider').slick({
  prevArrow: '.js-certificates-prev',
  nextArrow: '.js-certificates-next',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

openMenu = document.querySelector('.js-open-menu');
openMenu.addEventListener('click', function () {
  menu = document.querySelector('.menu');
  menu.classList.toggle('open-menu');
});
