"use strict";

(function ($) {
	$(window).on("load", function () {
		$(".mcs-horizontal-example").mCustomScrollbar({
			axis: "x",
			theme: "dark-3"
		});
	});
})(jQuery);

$(document).ready(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(700).fadeOut("slow");

	// setTimeout(function() {
	// 	$('.spinner').fadeOut("slow");

	// 	setTimeout(function() {
	// 		$('#prelaoder').fadeOut("slow"); 

	// 		setTimeout(function() {
	// 			$('.content-block').addClass('animated fadeInDown').fadeIn("slow");
	// 			$('#footer').fadeIn('slow');

	// 		}, 900);
	// 	}, 700);
	// }, 700);

	$('#phone').mask('+7 (999) 999-99-99');

	$(".nilo__item").matchHeight();

	$('.dropdown').on('show.bs.dropdown', function () {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	$('.dropdown').on('hide.bs.dropdown', function () {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	if (Modernizr.mq('(max-width: 992px)')) {
		$('.js_menu_toggle').addClass('-active');
		$('.menu').addClass('-hide');
		$('.content').addClass('-show');
	} else {
		$('.js_menu_toggle').removeClass('-active');
		$('.menu').removeClass('-hide');
		$('.content').removeClass('-show');
	}
	$(window).resize(function () {
		if (Modernizr.mq('(max-width: 992px)')) {
			$('.js_menu_toggle').addClass('-active');
			$('.menu').addClass('-hide');
			$('.content').addClass('-show');
		} else {
			$('.js_menu_toggle').removeClass('-active');
			$('.menu').removeClass('-hide');
			$('.content').removeClass('-show');
		}
	});

	$('.js_menu_toggle').on('click', function (event) {
		$(this).toggleClass('-active');
		$('.menu').toggleClass('-hide');
		$('.content').toggleClass('-show');
		event.preventDefault();
	});

	$('.gallery__item--items1').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items3').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items4').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items5').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items6').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items7').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items8').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items9').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items10').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items11').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items12').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items13').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items14').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items15').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});

	$('.gallery__item--items16').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			tPrev: 'Назад',
			tNext: 'Вперед',
			preload: [0, 1]
		}
	});
});