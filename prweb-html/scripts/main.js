'use strict';

$(window).scroll(function () {
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');else sticky.removeClass('fixed');
});

$(document).ready(function () {

  $('.header__menu ul').clone().appendTo('.mmenu-nav');

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
    var init = function init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [48.706413, 44.463310],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([48.706413, 44.463310], {
          balloonContentHeader: 'Freeway-bike.ru',
          balloonContentBody: 'Волгоград, ул. яблочная, 38а'

        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };

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
    var myMap, myPlacemark;

    ymaps.ready(init);

    ;
  } else {
    var _init = function _init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [55.857437, 37.411921],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([55.857437, 37.411921], {
          balloonContentHeader: '',
          balloonContentBody: 'г.Москва ул.Героев-Панфиловцев д. 22 корпус 1'
        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };

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
    var myMap, myPlacemark;

    ymaps.ready(_init);

    ;
  }

  $('.js-examples').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }

    }
  });

  $('.js-blog').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3500
  });

  $('.js-side').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });

  $('.js-sidee').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2500,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });

  $('.js-auto').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 1500,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });

  $('.js-center').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: -90,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

    responsive: {
      0: {
        items: 1,
        сenter: false,
        margin: 10
      },
      600: {
        items: 2
      },
      960: {
        items: 2
      },
      1200: {
        items: 2
      }
    }

  });

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    tClose: 'Закрыть (Esc)',
    margin: 0,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
      tPrev: 'Назад',
      tNext: 'Вперед'
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline',
    tClose: 'Закрыть (Esc)',
    tLoading: 'Загрузка...'
  });

  $('.popup-other').magnificPopup({
    type: 'iframe',
    tClose: 'Закрыть (Esc)',
    tLoading: 'Загрузка...'
  });

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function callback(box) {},
    scrollContainer: null
  });
  wow.init();

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
  });

  jQuery.extend(jQuery.validator.messages, {
    required: "Это поля обязательно для заполнения",
    remote: "Please fix this field.",
    email: "Пожалуйста введите правильный Email.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
  });

  $(".p_phone").mask("8-999-999-99-99");

  $('js-mail').each(function (index) {
    $(this).validate({
      rules: {
        email: {
          required: false,
          email: true
        }
      },
      submitHandler: function submitHandler(form) {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(form).serialize()
        }).done(function () {
          $.magnificPopup.open({
            items: {
              src: '#submit'
            },
            type: 'inline',
            midClick: true
          });
          setTimeout(function () {
            $.magnificPopup.close();
          }, 3000);
        });
        return false;
      }
    });
  });
});