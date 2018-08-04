'use strict';

$(document).ready(function () {

  $(window).load(function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
  // preloader

  $('.sticky').append($('.top_main').html());
  $('.top_main ._mnu').waypoint(function () {
    $('.sticky').toggleClass('-visable');
  }, {
    offset: '0%'
  });
  // Sticky nav

  $('.main_slider ._items').owlCarousel({
    dots: true,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: false,
    loop: true,
    navContainer: '._owl_navs',
    navText: ["<div class='_arrow_left'></div>", "<div class='_arrow_right'></div>"],
    items: 1
  });
  // Main Slider

  $('._gallery').each(function () {
    $(this).magnificPopup({
      delegate: '._item a',
      type: 'image',
      gallery: {
        enabled: true,
        tCounter: ''
      },
      tClose: 'Закрыть (Esc)',
      tLoading: 'Загрузка...',
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
    });
  });
  // Gallery

  $('._menu ._item').click(function () {

    if (true) {}
    $(this).toggleClass('-showblock').siblings(".-showblock").removeClass('-showblock');
  });
  // Menu mask

  $("._phone").mask("+7 (999) 999-99-99");
  // Mask

  var $contactForm = $('.validate');
  $contactForm.validationEngine();
  // Validate forms

  $(window).scroll(function () {
    $('.sticky').css('left', 0 - $(this).scrollLeft());
  });
  // fix
});
//# sourceMappingURL=main.js.map
