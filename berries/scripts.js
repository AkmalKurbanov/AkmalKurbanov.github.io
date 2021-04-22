$(document).ready(function () {
  if (window.screen.width > 1199) {
    $('.bg-wrapper, .footer-wrapper, .main__berries ul li img, .main__berries ul li span').addClass('layer');
    var $scene = $('.wrapper, .content, .coins').parallax({
      scalarX: 10,
      scalarY: 10,
    });
  }

  $('.main__berries ul').addClass('scale');
  $('.central').addClass('central-scale');
  $('header').addClass('slide-top');
  $('footer').addClass('slide-bottom');

  $('.main__berries ul li').on('click', function () {

    var random = Math.floor(Math.random() * 1000);
    var $li = $(this).find('span');
    $li.eq(random % $li.length).addClass("--open");
    $(this).find('.berry').fadeOut();
    var countClass = $('.main__berries ul li span.--open').length;
    if (countClass == 3) {
      $('.main__berries ul li').css('pointer-events', 'none');
      $('.btn').addClass('get');
    } else {
      $('.btn').removeClass('get');
    }

  });






  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

});