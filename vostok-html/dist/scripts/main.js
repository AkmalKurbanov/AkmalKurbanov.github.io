'use strict';

$('.owl-carousel').owlCarousel({
  items: 3,
  slideSpeed: 500,
  autoplay: false,
  margin: 35,
  autoplayTimeout: 4500,
  loop: true,
  mouseDrag: true,
  dots: false,
  nav: true,
  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
});
(function ($) {

  function doAnimations(elems) {

    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
          $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  var $myCarousel = $('#carousel-example-generic'),
      $firstAnimatingElems = $myCarousel.find('.item:first').find('[data-animation ^= \'animated\']');

  doAnimations($firstAnimatingElems);

  $myCarousel.carousel({
    interval: 4000
  });

  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find('[data-animation ^= \'animated\']');
    doAnimations($animatingElems);
  });
})(jQuery);

if ($('#back-to-top').length) {
  var scrollTrigger = 100,
      // px
  backToTop = function backToTop() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
  };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}

$('.print-button').on('click', function () {
  window.print();
  return false;
});
//# sourceMappingURL=main.js.map
