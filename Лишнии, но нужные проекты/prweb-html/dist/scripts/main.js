'use strict';

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
    items: 4
  });

  $('.js-blog').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    navText: ['', '']
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
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });

  $('.js-auto').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000
  });

  $('.js-center').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10
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

  // $('.group_radio').click(function() {
  //   $(this).children('.radio').prop( "checked", true );
  // });
  //   $('.group_radio').children('.radio').prop( "checked", false );
  // $('.group_radio').on('click', function(event) {
  //   event.preventDefault();
  //   console.log($(this).siblings().hasClass('cat7'));
  // });
});