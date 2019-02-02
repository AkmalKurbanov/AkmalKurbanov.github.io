"use strict";

$(document).ready(function () {

	$("._navtrigger").click(function () {
		$(this).toggleClass('-active');
		$("._nav_mnu").toggleClass('-mobile');
	});

	if (Modernizr.mq('(max-width: 991px)')) {
		$('._show_xs_mnu').click(function () {
			$(this).next().slideToggle();
		});
	}

	$(window).resize(function () {
		if (Modernizr.mq('(min-width: 769px)')) {
			$("._navtrigger").removeClass('-active');
			$("._nav_mnu").removeClass('-mobile');
		}
	});

	$('._search_icon').click(function () {
		$(this).next().toggleClass('-active');
	});

	$('._search_input').keyup(function () {
		var valux = $(this).val();
		valux = $.trim(valux).length;
		if (valux !== 0) {
			$(this).next().css('z-index', '99');
		} else {
			$(this).val('');
			$(this).next().css('z-index', '-99');
		}
	});

	$('._dropdown').click(function () {
		$(this).siblings().removeClass('-active').find('._dropdown_menu').slideUp();
		$(this).toggleClass('-active').find('._dropdown_menu').slideToggle();
	});

	$('._carousel').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		navText: ['<i class="pharmacy-arrow_o_left"></i>', '<i class="pharmacy-arrow_o_right"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1500,
		navSpeed: 1500,
		dragEndSpeed: 1500,
		autoplayHoverPause: true,
		responsive: {
			990: {
				items: 5
			},
			480: {
				items: 3
			}
		}
	});

	$('._video_popup').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src'
		}
	});

	$('._selectize').selectize();
});
//# sourceMappingURL=main.js.map
