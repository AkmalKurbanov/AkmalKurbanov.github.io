'use strict';

$(document).ready(function () {

	$(window).load(function () {
		$('.preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});

	$('.popup-link').magnificPopup({
		type: 'inline',
		midClick: true
	});

	$('.header__wrap--menu ul').clone().appendTo('.mmenu-nav');

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

	if (Modernizr.mq('(max-width: 992px)')) {
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

	$('.js-gallery').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			tPrev: 'Пред (Left arrow key)',
			tNext: 'След (Right arrow key)',
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
		}
	});

	if (Modernizr.mq('(max-width: 767px)')) {
		var init = function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [55.804626, 37.373428],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([55.804626, 37.373428], {
					balloonContentHeader: 'KidsLab',
					balloonContentBody: 'Москва, ул. 2-я Мякининская, дом 9'
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'images/marker.png',
					iconImageSize: [35, 55]
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};

		var myMap, myPlacemark;

		ymaps.ready(init);
		;
	} else {
		var _init = function _init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [55.804476, 37.370518],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([55.804626, 37.373428], {
					balloonContentHeader: 'KidsLab',
					balloonContentBody: 'Москва, ул. 2-я Мякининская, дом 9'
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'images/marker.png',
					iconImageSize: [35, 55]
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};

		var myMap, myPlacemark;

		ymaps.ready(_init);
		;
	}
});
//# sourceMappingURL=main.js.map
