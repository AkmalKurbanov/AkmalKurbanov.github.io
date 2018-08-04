'use strict';

$(document).ready(function () {

  // mmenu начало
  $('.main__menu ul').clone().appendTo('.mmenu-nav');

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
            scrollTop: target.offset().top - 115
          }, 1000);
          return false;
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
            scrollTop: target.offset().top - 73
          }, 1000);
          return false;
        }
      }
    });
  }
  // mmenu конец

  // tabs start
  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(".tab-menu li").removeClass("active");
    $(this).closest("li").addClass("active");

    var index = $(this).closest("li").index();

    $(".tab-content .tab-content-item").removeClass("active");
    $(".tab-content .tab-content-item").eq(index).addClass("active");
  });
  // tabs end

  // owl-carousel start
  $('.partners-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      950: {
        items: 2
      },
      1080: {
        items: 2
      },
      1380: {
        items: 3
      },
      1900: {
        items: 4
      }
    }
  });

  $(".owl-next, .owl-prev").text("");
  // owl-carousel end

  // sidebar
  (function () {
    // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
    var a = document.querySelector('#aside1'),
        b = null; // селектор блока, который нужно закрепить
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false); // если у html и body высота равна 100%
    function Ascroll() {
      if (b == null) {
        // добавить потомка-обёртку, чтобы убрать зависимость с соседями
        var Sa = getComputedStyle(a, ''),
            s = '';
        for (var i = 0; i < Sa.length; i++) {
          // перечислить стили CSS, которые нужно скопировать с родителя
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; ';
          }
        }
        b = document.createElement('div'); // создать потомка
        b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
        a.insertBefore(b, a.firstChild); // поместить потомка в цепляющийся блок первым
        var l = a.childNodes.length;
        for (var i = 1; i < l; i++) {
          // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
          b.appendChild(a.childNodes[1]);
        }
        a.style.height = b.getBoundingClientRect().height + 'px'; // если под скользящим элементом есть другие блоки, можно своё значение
        a.style.padding = '0';
        a.style.border = '0'; // если элементу присвоен padding или border
      }
      if (a.getBoundingClientRect().top <= 0) {
        // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
        b.className = 'sticky';
      } else {
        b.className = '';
      }
      window.addEventListener('resize', function () {
        a.children[0].style.width = getComputedStyle(a, '').width;
      }, false); // если изменить размер окна браузера, измениться ширина элемента
    }
  })();
  // sidebar end

  // select начало
  $('select').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  // select конец
});