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

if (document.documentElement.clientWidth > 1024) {
  $(document).ready(function () {
    $('.js-intro-slider').slick({
      prevArrow: '.js-intro-prev',
      nextArrow: '.js-intro-next',
    });
  });

  $(document).ready(function () {
    $('.js-business-slider').slick({
      infinite: true,
      prevArrow: '.js-business-prev',
      nextArrow: '.js-business-next',
    });
  });

  $(document).ready(function () {
    $('.js-certificates-slider').slick({
      prevArrow: '.js-certificates-prev',
      nextArrow: '.js-certificates-next',
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  });
}

openMenu = document.querySelector('.js-open-menu');
openMenu.addEventListener('click', function () {
  menu = document.querySelector('.menu');
  menu.classList.toggle('open-menu');
});
