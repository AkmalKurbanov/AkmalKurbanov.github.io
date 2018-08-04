'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
	var _$$owlCarousel;

	// mmenu начало
	$('.header__menu-right ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: '<img src=\'images/logo-mmenu.jpg\' alt=\'\' />'
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

	if (Modernizr.mq('(max-width: 1199px)')) {
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

	if (Modernizr.mq('(max-width: 767px)')) {
		var init = function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [55.755814, 37.617635],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
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
	}
	// mmenu конец


	// owl-carousel начало
	$('.js-main-slider').owlCarousel((_$$owlCarousel = {
		loop: true,
		margin: 27,
		nav: true,
		items: 5,
		dots: false
	}, _defineProperty(_$$owlCarousel, 'nav', true), _defineProperty(_$$owlCarousel, 'navText', ['<img src="images/arrow-left.png" alt="" />', '<img src="images/arrow-right.png" alt="" />']), _defineProperty(_$$owlCarousel, 'responsive', {
		0: {
			items: 1
		},
		400: {
			items: 2
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}), _$$owlCarousel));
	// owl-carousel конец


	// drop search начало
	$('.hider').click(function () {
		$('#hidden').slideToggle('slow');
		return false;
	});
	// drop search конец


	// select начало
	function DropDown(el) {
		this.dd = el;
		this.placeholder = this.dd.children('span');
		this.opts = this.dd.find('ul.drop li');
		this.val = '';
		this.index = -1;
		this.initEvents();
	}

	DropDown.prototype = {
		initEvents: function initEvents() {
			var obj = this;
			obj.dd.on('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(this).toggleClass('active');
			});
			obj.opts.on('click', function () {
				var opt = $(this);
				obj.val = opt.text();
				obj.index = opt.index();
				obj.placeholder.text(obj.val);
				opt.siblings().removeClass('selected');
				opt.filter(':contains("' + obj.val + '")').addClass('selected');
			}).change();
		},
		getValue: function getValue() {
			return this.val;
		},
		getIndex: function getIndex() {
			return this.index;
		}
	};

	$(function () {
		// create new variable for each menu
		var dd1 = new DropDown($('#noble-gases'));
		// var dd2 = new DropDown($('#other-gases'));
		$(document).click(function () {
			// close menu on document click
			$('.wrap-drop').removeClass('active');
		});
	});
	// select конец


	// range начало
	// $( ".range .item").each( function( index, element) {
	//     $( element).children(".amount").attr( "id", "r_l_"+index++);
	//     $( element).children(".amount_1").attr( "id", "r_r_"+index++);
	//     $( element).children(".slider").attr( "id", "slider_r_"+index++);

	//     var $from = $( "r_l_"+index++ );
	//     var $to = $( "r_r_"+index++ );
	//     var $slider = $( "slider_r_"+index++ );
	// });

	var $from = $('#first');
	var $to = $('#first1');
	var $slider = $('#slider');
	$slider.slider({
		range: true,
		min: 18,
		max: 81,
		values: [18, 81],
		slide: function slide(event, ui) {
			$from.val(ui.values[0]);
			$to.val(ui.values[1]);
		}
	});
	$from.val($slider.slider('values', 0));
	$to.val($slider.slider('values', 1));

	$from.change(function () {
		var val1 = parseInt($from.val());
		var val2 = parseInt($to.val());
		val1 = val1 < val2 ? val1 : val2;
		$slider.slider('values', 0, val1);
	});
	$to.change(function () {
		var val1 = parseInt($from.val());
		var val2 = parseInt($to.val());
		val2 = val2 > val1 ? val2 : val1;
		$slider.slider('values', 1, val2);
	});

	var $from1 = $('#second');
	var $to1 = $('#second1');
	var $slider1 = $('#slider2');
	$slider1.slider({
		range: true,
		min: 128,
		max: 210,
		values: [128, 210],
		slide: function slide(event, ui) {
			$from1.val(ui.values[0]);
			$to1.val(ui.values[1]);
		}
	});
	$from1.val($slider1.slider('values', 0));
	$to1.val($slider1.slider('values', 1));

	$from1.change(function () {
		var val1 = parseInt($from1.val());
		var val2 = parseInt($to1.val());
		val1 = val1 < val2 ? val1 : val2;
		$slider1.slider('values', 0, val1);
	});
	$to1.change(function () {
		var val1 = parseInt($from1.val());
		var val2 = parseInt($to1.val());
		val2 = val2 > val1 ? val2 : val1;
		$slider1.slider('values', 1, val2);
	});

	var $from2 = $('#third');
	var $to2 = $('#third1');
	var $slider2 = $('#slider3');
	$slider2.slider({
		range: true,
		min: 0,
		max: 8,
		values: [0, 8],
		slide: function slide(event, ui) {
			$from2.val(ui.values[0]);
			$to2.val(ui.values[1]);
		}
	});
	$from2.val($slider2.slider('values', 0));
	$to2.val($slider2.slider('values', 1));

	$from2.change(function () {
		var val1 = parseInt($from2.val());
		var val2 = parseInt($to2.val());
		val1 = val1 < val2 ? val1 : val2;
		$slider2.slider('values', 0, val1);
	});
	$to2.change(function () {
		var val1 = parseInt($from2.val());
		var val2 = parseInt($to2.val());
		val2 = val2 > val1 ? val2 : val1;
		$slider2.slider('values', 1, val2);
	});

	var $from3 = $('#fourth');
	var $to3 = $('#fourth1');
	var $slider3 = $('#slider4');
	$slider3.slider({
		range: true,
		min: 1,
		max: 9999,
		values: [1, 9999],
		slide: function slide(event, ui) {
			$from3.val(ui.values[0]);
			$to3.val(ui.values[1]);
		}
	});
	$from3.val($slider3.slider('values', 0));
	$to3.val($slider3.slider('values', 1));

	$from3.change(function () {
		var val1 = parseInt($from3.val());
		var val2 = parseInt($to3.val());
		val1 = val1 < val2 ? val1 : val2;
		$slider3.slider('values', 0, val1);
	});
	$to3.change(function () {
		var val1 = parseInt($from3.val());
		var val2 = parseInt($to3.val());
		val2 = val2 > val1 ? val2 : val1;
		$slider3.slider('values', 1, val2);
	});

	// var $from = $( '#fifth' );
	// var $to = $( '#fifth1' );
	// var $slider = $( '#slider5' );
	// $slider.slider({
	// 	range: true,
	// 	min: 1,
	// 	max: 9999,
	// 	values: [ 1, 9999 ],
	// 	slide: function( event, ui ) {
	// 		$from.val(ui.values[ 0 ]);
	// 		$to.val(ui.values[ 1 ]);
	// 	}
	// });
	// $from.val($slider.slider( 'values', 0 ));
	// $to.val($slider.slider( 'values', 1 ));

	// $from.change(function(){
	// 	var val1 = parseInt($from.val());
	// 	var val2 = parseInt($to.val());
	// 	val1 = val1 < val2 ? val1 : val2;
	// 	$slider.slider( 'values', 0, val1 );
	// });
	// $to.change(function(){
	// 	var val1 = parseInt($from.val());
	// 	var val2 = parseInt($to.val());
	// 	val2 = val2 > val1 ? val2 : val1;
	// 	$slider.slider( 'values', 1, val2 );
	// })


	// range конец

});