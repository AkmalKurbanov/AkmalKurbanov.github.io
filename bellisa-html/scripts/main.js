"use strict";

$(document).ready(function () {

  function getVals() {

    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);

    if (slide1 > slide2) {
      var tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "от " + slide1 + " - до " + slide2 + "";
  }

  window.onload = function () {

    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
      var sliders = sliderSections[x].getElementsByTagName("input");
      for (var y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;

          sliders[y].oninput();
        }
      }
    }
  };

  $('.js_btn').click(function () {
    $('.tls').toggleClass('-active');
  });

  $('.popup-content').magnificPopup({
    type: 'inline'
  });

  $('.firstowl').owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: false,
    items: 1,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });

  $('.goods__item .goodsowl').owlCarousel({
    items: 1,
    margin: 20,
    dots: true,
    dotsContainer: '.dotsnav'
  });

  $('.new').owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    items: 4,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  $(".scroll").mCustomScrollbar({
    theme: "dark",
    mouseWheelPixels: 80,
    scrollInertia: 0,
    setLeft: "auto"
  });

  $('.invis').each(function () {
    var hover = $(this);
    hover.hide();
    $("#" + hover.attr('rel')).hover(function () {
      hover.toggle(0);
    });
  });

  $('.new').owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    items: 4,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });

  $('.js-button').click(function () {
    if ($(this).hasClass('.active')) {
      $(this).removeClass('.active');
    } else {
      $('.js-button').removeClass('.active');
      $(this).addClass('active');
    }
  });

  var taxRate = 0;
  var shippingRate = 0;
  var fadeTime = 300;

  $('.product-quantity input').change(function () {
    updateQuantity(this);
  });

  $('.product-removal button').click(function () {
    removeItem(this);
  });

  function recalculateCart() {
    var subtotal = 0;

    $('.product').each(function () {
      subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    var tax = subtotal * taxRate;
    var shipping = subtotal > 0 ? shippingRate : 0;
    var total = subtotal + tax + shipping;

    $('.totals-value').fadeOut(fadeTime, function () {
      $('#cart-subtotal').html(subtotal.toFixed(2));
      $('#cart-tax').html(tax.toFixed(2));
      $('#cart-shipping').html(shipping.toFixed(2));
      $('#cart-total').html(total.toFixed(2));
      if (total == 0) {
        $('.checkout').fadeOut(fadeTime);
      } else {
        $('.checkout').fadeIn(fadeTime);
      }
      $('.totals-value').fadeIn(fadeTime);
    });
  }

  function updateQuantity(quantityInput) {

    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    productRow.children('.product-line-price').each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });
  }

  function removeItem(removeButton) {
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function () {
      productRow.remove();
      recalculateCart();
    });
  }

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
        center: [48.706413, 44.460310],
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
});