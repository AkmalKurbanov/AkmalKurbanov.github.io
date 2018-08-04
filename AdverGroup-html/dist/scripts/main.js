'use strict';

$(document).ready(function () {

  // clickEffect //////////////////////////////////////////////////////////////////
  var clickEffect = {
    init: function init() {
      $(document).on('click', function (e) {
        $('<div class="flabCursor">').css({
          top: e.clientY,
          left: e.clientX
        }).appendTo($(document.body)).on('animationend webkitAnimationEnd', function () {
          $(this).remove();
        });
      });
    }
  };
  clickEffect.init();
  // clickEffect end //////////////////////////////////////////////////////////////////


  // equalizer click toggleClass //////////////////////////////////////////////////////////////////
  $('.equalizer-js').on('click', function () {
    $('.equalizer-js').toggleClass('equalizerOff');
  });
  var audio = document.querySelector("audio");
  audio.volume = 0.4;
  // equalizer click toggleClass //////////////////////////////////////////////////////////////////

  // right panel //////////////////////////////////////////////////////////////
  if (Modernizr.mq('(min-width: 992px)')) {
    $('body').scroll(function () {
      var head_h = $('.flabHeader').height();
      var windowTop = $('body').scrollTop();
      if (head_h < windowTop) {
        $('.flabApperance').addClass('flabShow');
      } else {
        $('.flabApperance').removeClass('flabShow');
      }
    });
  };
  // right panel end //////////////////////////////////////////////////////////////

  // smooth scroll down //////////////////////////////////////////////////////////////
  $(".flabSmooth").click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 800);
  });
  // smooth scroll down end //////////////////////////////////////////////////////////////

  // menu header //////////////////////////////////////////////////////////////
  $('.flabHamburger, .flabAgTrigger').on('click', function () {
    $('.flabHiddenMnu').addClass('flabHiddenMnu--open');
    $('.flabHiddenMnu').removeClass('flabHiddenMnu--close');
  });

  $('.close-js').on('click', function () {
    $('.flabHiddenMnu').addClass('flabHiddenMnu--close');
    $('.flabHiddenMnu').removeClass('flabHiddenMnu--open');
  });

  $('.angle-js').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('angle-jsRotate');
  });
  // menu header end //////////////////////////////////////////////////////////////

  // swiper //////////////////////////////////////////////////////////////////

  // slider on main page
  var swiper = new Swiper('.mainSlider-js', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  // slider on main page //////////////////////////////////////////////////////////////////

  // slider of current works //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabCurrent-js', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1
      }
    }
  });
  // slider of current works end //////////////////////////////////////////////////////////////////

  // slider of flabRewards //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabRewards-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      }
    }
  });
  // slider of flabRewards end //////////////////////////////////////////////////////////////////

  // slider of flabPartners //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabPartners-js', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });
  // slider of flabPartners end //////////////////////////////////////////////////////////////////

  // slider of flabReviews
  var swiper = new Swiper('.flabReviews-js', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 100,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1
      }
    }
  });
  // slider of flabReviews end //////////////////////////////////////////////////////////////////

  // slider of flabReviews //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabSecurities-js', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1199: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  // slider of flabReviews end //////////////////////////////////////////////////////////////////

  // slider of flabBlog //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabBlog-js', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  // slider of flabBlog end //////////////////////////////////////////////////////////////////

  // slider of flabMainSlider //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabMainSlider-js', {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    loopedSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
  // slider of flabMainSlider end //////////////////////////////////////////////////////////////////

  // swiper end //////////////////////////////////////////////////////////////////

  // portfolio filter //////////////////////////////////////////////////////////////////
  $(window).on('load', function () {
    var filterSelector = '*';

    var $grid = $('.flabPortfolio__grid').isotope({
      itemSelector: '.flabPortfolio__item',
      layoutMode: 'fitRows',

      fitRows: {
        gutter: 30
      },
      sortBy: 'selector',
      getSortData: {
        selector: function selector(itemElem) {
          return !$(itemElem).is(filterSelector);
        }
      }
    });

    var $items = $grid.find('.flabPortfolio__item');

    // bind button click
    $('.flabPortfolio__filters ul').on('click', 'li', function () {
      filterSelector = $(this).attr('data-filter');
      $grid.isotope('updateSortData').isotope();
      // change is-filtered-out class
      $items.filter(filterSelector).removeClass('is-filtered-out');
      $items.not(filterSelector).addClass('is-filtered-out');
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });

    // portfolio filter  end //////////////////////////////////////////////////////////////////

    // select portfolio  //////////////////////////////////////////////////////////////////
    $('.select-js').on('click', function () {
      $('.backgroundBlack').addClass('dbbg');
      $('.flabPortfolio__filters').slideDown();
    });

    $('.flabPortfolio__filters ul li a').on('click', function () {
      $('.flabPortfolio__filters').slideUp();
      $('.backgroundBlack').removeClass('dbbg');
    });
  });
  // select portfolio end  //////////////////////////////////////////////////////////////////

  // tabs vacancy //////////////////////////////////////////////////////////////////
  (function ($) {
    $('.vacancyTabs-js').addClass('active').find('> li:eq(0)').addClass('current');

    $('.vacancyTabs-js li a').click(function (g) {
      var tab = $(this).closest('.flabTab'),
          index = $(this).closest('li').index();

      tab.find('vacancyTabs-js > li > a').removeClass('flabTabCurrent');
      $(this).closest('a').addClass('flabTabCurrent');

      tab.find('.flabTabContent-js').find('.tabItems-js').not('.tabItems-js:eq(' + index + ')').slideUp();
      tab.find('.flabTabContent-js').find('.tabItems-js:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

  // tabs vacancy end //////////////////////////////////////////////////////////////////

  // audio volume //////////////////////////////////////////////////////////////////
  $('.equalizer-js').click(function () {
    if ($('#audio').get(0).muted == false) {
      $('#audio').get(0).muted = true;
    } else {
      $('#audio').get(0).muted = false;
    }
  });
  // audio volume end //////////////////////////////////////////////////////////////////

  // malihu scroll //////////////////////////////////////////////////////////////////
  $('.navMenu-js').mCustomScrollbar({
    theme: 'themeMalihu'
  });
  // malihu scroll end //////////////////////////////////////////////////////////////////


  // services 3d card //////////////////////////////////////////////////////////////////
  // (function handleHover() {
  //   let win = $(window);
  //   let el = $();
  //   let children = $();
  //   let w = 0;
  //   let h = 0;
  //   let ratio = 0.10;

  //   let absoluteOffsetX = 0, absoluteOffsetY = 0, relativeOffsetX = 0, relativeOffsetY = 0;

  //   $('.3dCArd-js').on('mouseenter', function(e) {
  //     el = $(this);
  //     children = el.children();
  //     w = el.outerWidth();
  //     h = el.outerHeight();

  //     console.log('mouseenter');
  //   }).on('mousemove', function(e) {
  //     absoluteOffsetX = e.offsetX - w/2;
  //     absoluteOffsetY = e.offsetY - h/2;
  //     relativeOffsetX = absoluteOffsetX * 40 / w * 2 * ratio;
  //     relativeOffsetY = absoluteOffsetY * 40 / h * 2 * ratio;

  //     children.css({
  //       'transform': `rotateY(${relativeOffsetX}deg) rotateX(${relativeOffsetY * -1}deg)`,
  //       'transition': '.05s',
  //     });

  //     $(this).find('h2,p,a,.surfacing').css('transform','translateX('+relativeOffsetX+'px');

  //   }).on('mouseleave', function() {
  //     children.css({
  //       'transform': 'none',
  //       'transition': '1s',
  //     });
  //   });

  // })();
  // services 3d card end //////////////////////////////////////////////////////////////////

});