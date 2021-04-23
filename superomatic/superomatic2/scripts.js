$(document).ready(function () {
  $('.text').addClass('text-scale');
  $('.main__cell img').addClass('cell');
  $('.girls').addClass('girls-scale');
  $('.girls-mob').addClass('girls-mob-scale');

  $('.main__cell-inner').on('click', function () {
    $(this).addClass('fliped');
    $('.main__cell-inner').css({
      'pointer-events': 'none'
    });
    setTimeout(function () {
      $('.popup').addClass('--open');
    }, 1500);
  });
  $('.main__cell-inner--one-hundred').on('click', function () {
    $('.get-prise--one-hundred').addClass('get-prise-js ');
  });
  $('.main__cell-inner--free-spin').on('click', function () {
    $('.get-prise--free-spin').addClass('get-prise-js ');
  });
  $('.main__cell-inner--fifty').on('click', function () {
    $('.get-prise--fifty').addClass('get-prise-js ');
  });

});