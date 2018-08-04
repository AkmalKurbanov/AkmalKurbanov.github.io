'use strict';

(function ($) {
  var bsMajorVer = 0;
  var bsMinorVer = 0;

  $.extend(true, $.validator, {
    prototype: {
      defaultShowErrors: function defaultShowErrors() {
        var _this = this;
        var bsVersion = $.fn.tooltip.Constructor.VERSION;

        if (bsVersion) {
          bsVersion = bsVersion.split('.');
          bsMajorVer = parseInt(bsVersion[0]);
          bsMinorVer = parseInt(bsVersion[1]);
        }

        $.each(this.errorList, function (index, value) {
          if (bsMajorVer === 3 && bsMinorVer >= 3) {
            var $currentElement = $(value.element);
            if ($currentElement.data('bs.tooltip') !== undefined) {
              $currentElement.data('bs.tooltip').options.title = value.message;
            } else {
              $currentElement.tooltip(_this.applyTooltipOptions(value.element, value.message));
            }

            $(value.element).removeClass(_this.settings.validClass).addClass(_this.settings.errorClass).tooltip('show');
          } else {
            $(value.element).removeClass(_this.settings.validClass).addClass(_this.settings.errorClass).tooltip(bsMajorVer === 4 ? 'dispose' : 'destroy').tooltip(_this.applyTooltipOptions(value.element, value.message)).tooltip('show');
          }

          if (_this.settings.highlight) {
            _this.settings.highlight.call(_this, value.element, _this.settings.errorClass, _this.settings.validClass);
          }
        });

        $.each(_this.validElements(), function (index, value) {
          $(value).removeClass(_this.settings.errorClass).addClass(_this.settings.validClass).tooltip(bsMajorVer === 4 ? 'dispose' : 'destroy');

          if (_this.settings.unhighlight) {
            _this.settings.unhighlight.call(_this, value, _this.settings.errorClass, _this.settings.validClass);
          }
        });
      },

      applyTooltipOptions: function applyTooltipOptions(element, message) {
        var defaults;

        if (bsMajorVer === 4) {
          defaults = $.fn.tooltip.Constructor.Default;
        } else if (bsMajorVer === 3) {
          defaults = $.fn.tooltip.Constructor.DEFAULTS;
        } else {
          defaults = $.fn.tooltip.defaults;
        }

        var options = {
          animation: $(element).data('animation') || defaults.animation,
          html: $(element).data('html') || defaults.html,
          placement: $(element).data('placement') || defaults.placement,
          selector: $(element).data('selector') || defaults.selector,
          title: $(element).attr('title') || message,
          trigger: $.trim('manual ' + ($(element).data('trigger') || '')),
          delay: $(element).data('delay') || defaults.delay,
          container: $(element).data('container') || defaults.container
        };

        if (this.settings.tooltip_options && this.settings.tooltip_options[element.name]) {
          $.extend(options, this.settings.tooltip_options[element.name]);
        }
        if (this.settings.tooltip_options && this.settings.tooltip_options['_all_']) {
          $.extend(options, this.settings.tooltip_options['_all_']);
        }
        return options;
      }
    }
  });
})(jQuery);

$(document).ready(function () {

  $('.popup-link').magnificPopup({
    tClose: 'Закрыть (Esc)',
    type: 'inline',
    midClick: true
  });

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
        center: [48.701567, 44.497518],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([48.701567, 44.497518], {
          balloonContentHeader: 'Matreshka',
          balloonContentBody: 'Волгоград, улица Канунникова, 13'

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
        center: [48.701567, 44.497518],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([48.701567, 44.497518], {
          balloonContentHeader: 'Matreshka',
          balloonContentBody: 'Волгоград, улица Канунникова, 13'
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

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
    callback: function callback(box) {},
    scrollContainer: null
  });
  wow.init();

  jQuery.extend(jQuery.validator.messages, {
    required: "Это поле обязательно для заполнения",
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

  $(".p_phone").mask("+7 (999) 999-99-99");

  $('.js-mail').each(function (index) {
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
              src: '#submite'
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
//# sourceMappingURL=main.js.map
