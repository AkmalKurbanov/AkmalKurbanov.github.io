"use strict";

(function ($) {
  $(window).on('load', function () {
    $('.modalScroll-js').mCustomScrollbar({
      scrollButtons: {
        enable: true
      }
    });
  });
})(jQuery);

$('.agree-js').on('click', function () {
  $('#offer').hide();
});
$('.agree-js2').on('click', function () {
  $('#confidentiality').hide();
});
$('.agree-js3').on('click', function () {
  $('#agree').hide();
  Cookies.set('modal', 'show', {
    expires: 7
  });
  $('body').removeClass('bodyScroll');
});
var modalCookies = Cookies.get('modal');

if (!modalCookies) {
  $('.modal-agree').show();
  $('body').addClass('bodyScroll');
}
//# sourceMappingURL=main.js.map
