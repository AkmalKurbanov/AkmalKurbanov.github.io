'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function ($) {
  var _owl$owlCarousel;

  $('.header__nav ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'Меню'
    },
    extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
    offCanvas: {
      'position': 'right'
    },
    counters: true
  });

  var $icon = $('.js-navtrigger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  API.bind('open:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  API.bind('close:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  if (Modernizr.mq('(max-width: 767px)')) {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      API.close();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
  } else {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
  }

  $('.nav  > li > a').hover(function () {
    $(this).tab('show');
  });

  $('.popup-content').magnificPopup({
    type: 'inline'
  });

  var owl = $('.main-owl');
  owl.owlCarousel((_owl$owlCarousel = {
    items: 1,
    loop: true,
    margin: 10,
    // autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    URLhashListener: true
  }, _defineProperty(_owl$owlCarousel, 'autoplayHoverPause', true), _defineProperty(_owl$owlCarousel, 'startPosition', 'URLHash'), _defineProperty(_owl$owlCarousel, 'nav', true), _defineProperty(_owl$owlCarousel, 'navText', ['', '']), _defineProperty(_owl$owlCarousel, 'dots', true), _defineProperty(_owl$owlCarousel, 'dotsContainer', '.thumb'), _owl$owlCarousel));
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay');
  });

  var owl = $('.slide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay');
  });

  $('.slide2').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 3,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  });

  $('.js-btn').on('click', function (event) {
    event.preventDefault();
    $('.-hide_blog').slideToggle();
    $(this).hide();
  });

  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse').on('show.bs.collapse', function (a) {
    $(a.target).prev('.panel-heading').addClass('active');
  }).on('hide.bs.collapse', function (a) {
    $(a.target).prev('.panel-heading').removeClass('active');
  });

  $('.group_radio_goods').each(function (index, el) {
    $(this).children('.group_radio').addClass('cat' + index);
    console.log('cat' + index);
  });

  $('.tabs-main ul li a').click(function () {
    if ($(this).hasClass('active')) {
      $(this).next().fadeOut();
      $(this).removeClass('active');
    } else {
      $('.tab').hide();
      $('.tabs-main ul li a').removeClass('active');
      $(this).next().fadeIn();
      $(this).addClass('active');
    }
  });

  $('.link-menu-m-open').click(function () {
    if ($(this).hasClass('active')) {
      $(this).children().next().hide();
      $(this).removeClass('active');
      //$('.nav-main').css('height', 'auto');
    } else {
      $('.menu-sub').hide();
      /*var lenght_num = $('.nav-main li').length;
      var l = lenght_num * 40;
      $('.nav-main').css({'height': l+'px'});*/
      $('.link-menu-m-open').removeClass('active');
      $(this).children().next().show();
      $(this).addClass('active');
    }
  });

  // var mainImage = $("#mainImage");
  // $(".popup-content").hover(function(){
  //    var src = $(this).attr("src");
  //     $("#mainImage").attr("src",src);
  // });


  $('.popup-content img').hover(function () {
    var url = $(this).attr('data-img');
    $('#mainImage').attr('src', url);
  }, function () {
    $('#mainImage').attr('src', 'images/change.png');
  });
});