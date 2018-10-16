'use strict';

// window.onload=function(){
// 	$('.preloader').fadeOut('slow',
// 		function(){
// 			$(this).remove()
// 		})
// 	$('.-title').show(600);
// };
$(document).ready(function () {

	$('.js-phone').mask('+7 (999) 999-99-99');

	$('.popup-link').magnificPopup({
		type: 'inline',
		midClick: true
	});

	$('.header__menu ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: '<img src=\'images/logo.png\' alt=\'\' />'
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
				// center: [53.714580,91.422524],
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

	$('.first').owlCarousel({
		items: 1,
		loop: true,
		video: true,
		lazyLoad: true,
		videoWidth: 700,
		videoHeight: 424,
		dots: false,
		pullDrag: true,
		autoWidth: true,
		center: true,
		mouseDrag: false,
		animateIn: true,
		dotsContainer: '.videos__thumbnail',
		merge: false,
		responsive: {
			0: {
				items: 1,
				videoWidth: 300,
				videoHeight: 200,
				mouseDrag: false
			},
			375: {
				items: 1,
				videoWidth: 320,
				videoHeight: 200,
				mouseDrag: false
			},
			425: {
				items: 1,
				videoWidth: 350,
				videoHeight: 200,
				mouseDrag: false
			},
			768: {
				items: 1,
				videoWidth: 700,
				videoHeight: 424
			}

		}
	});

	$('.second').owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		dots: true,
		nav: true,
		center: true,
		navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']

	});

	$('.sj-popup').owlCarousel({
		items: 1,
		loop: false,
		lazyLoad: true,
		dots: true,
		nav: true,
		center: true,
		navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']

	});

	$('.js-third').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		nav: true,
		navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
	});

	$('.third').owlCarousel({
		items: 2,
		margin: 25,
		dots: true,
		nav: true,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

	$('.forth').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		center: true,
		navText: ['<i class=" icon-arrow-left"></i>', '<i class=" icon-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.click').click(function () {
		$('.one').toggleClass('active');
	});

	$('.js-amo').submit(function () {
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'handler.php',
			data: th.serialize()
		}).done(function () {
			$.magnificPopup.open({
				items: {
					src: '#submite',
					type: 'inline'
				},
				midClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
			});
		});
		return false;
	});

	$(".js-mail").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			$.magnificPopup.open({
				items: {
					src: '#submite',
					type: 'inline'
				},
				midClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
			});
		});
		return false;
	});

	// $('.brand__tabs a').click(function() {
	// 	$(this).parent().siblings().removeClass('active');
	// 	$(this).parent().addClass('active');
	// 	$('.brand__visable.-hide').slideToggle();
	// });


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

	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300
		}
	});
});
//# sourceMappingURL=main.js.map
