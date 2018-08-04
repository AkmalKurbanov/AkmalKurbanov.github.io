'use strict';

$(document).ready(function () {

	$('.js_btn').click(function () {
		$('.tls').toggleClass('-active');
	});

	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
	});

	$('.dropdown').on('show.bs.dropdown', function () {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	$('.dropdown').on('hide.bs.dropdown', function () {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	if (Modernizr.mq('(max-width: 767px)')) {
		$('.js_menu_toggle').addClass('-active');
		$('.menu').addClass('-hide');
		$('.content').addClass('-show');
	} else {
		$('.js_menu_toggle').removeClass('-active');
		$('.menu').removeClass('-hide');
		$('.content').removeClass('-show');
	}
	$(window).resize(function () {
		if (Modernizr.mq('(max-width: 767px)')) {
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
	$(".js_chosen").chosen({
		width: "100%",
		no_results_text: "Не найдено!"
	});

	// $('.chart').easyPieChart({
	// 	lineWidth: 20,
	// 	size: 400,
	// 	lineCap: 'round'
	// });

	var $chart = $('.chart'),
	    size = parseFloat($chart.outerWidth()),
	    clearSet;

	$chart.easyPieChart({
		size: size,
		animate: 1500,
		barColor: '#ffa030',
		lineWidth: 27,
		lineCap: 'butt',
		trackColor: '#373955',
		scaleColor: 'transparent'
	});

	$(window).on('resize', function () {

		size = parseFloat($chart.outerWidth());

		$chart.css({
			height: size
		});

		clearTimeout(clearSet);
		clearSet = setTimeout(function () {
			$chart.removeData('easyPieChart').find('canvas').remove();
			$chart.easyPieChart({
				size: size,
				animate: 1500,
				barColor: '#ffa030',
				lineWidth: 27,
				lineCap: 'butt',
				trackColor: '#373955',
				scaleColor: 'transparent'
			});
		}, 100);
	});

	$('.js-start-rule').on('click', function (event) {
		var mth = Math.floor(Math.random() * 1620 + 900);
		$('.js-hand').css({ 'transform': 'rotate(' + mth.toFixed() + 'deg)', 'transition-duration': '3s' });
		var winsum = $('.js-rule-range input[type="range"]').val() * 3.6;
		winsum = parseInt((winsum / 3.6).toFixed());
		mth = parseInt(((mth - 900) / 3.6).toFixed());
		if (mth < 100) {
			mth = mth;
		}
		if (mth < 200 && mth > 100) {
			mth = mth - 100;
		}
		if (mth < 300 && mth > 200) {
			mth = mth - 200;
		}
		if (mth < 400 && mth > 300) {
			mth = mth - 300;
		}
		if (mth < 500 && mth > 400) {
			mth = mth - 400;
		}
		$('.-rightnavig').text(mth + '%');
		$('.carouselrule__ruller--result').removeClass('-loss');
		if (mth <= winsum) {
			setTimeout(function () {
				$.magnificPopup.open({
					items: {
						src: '#fourth-popup',
						type: 'inline'
					},
					midClick: true,
					closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
				});
			}, 3000);
		} else {
			setTimeout(function () {
				$('.carouselrule__ruller--result').addClass('-loss');
			}, 3000);
		}
		event.preventDefault();
	});

	$('.js-hand').css({ 'transform': 'rotate(' + (180 + $('.js-rule-range input[type="range"]').val() * 3.6).toFixed() + 'deg)' });
	$('.js-rule-range input[type="range"]').rangeslider({
		polyfill: false,
		onInit: function onInit(position, value) {},
		onSlide: function onSlide(position, value) {
			$('.chart').data('easyPieChart').update(value);
			$('.js-percent-res span, .-purchases').text(value + '%');
			$('.js-rule-percent').text(value + '%');
			var nn1 = value / 2;
			$('.js-rule-price').text(nn1.toFixed(3) + '$');
			// $('.js-rule-price').text();
			$('.js-hand').css({ 'transform': 'rotate(' + (180 + value * 3.6).toFixed() + 'deg)', 'transition-duration': '0s' });
		}
	});

	var nnn = 4;
	console.log(nnn.toFixed(2));

	var $rangeslider = $('.js_range_slider');
	var $amount = $('.-purchases');
	var $price = $('.-price_slide');

	$rangeslider.each(function (index) {
		$(this).addClass('-range-id-' + index);
		$('.-range-id-' + index + ' input[type="range"]').rangeslider({
			polyfill: false,
			onSlide: function onSlide(position, value) {
				$('.-range-id-' + index).parent().find(".-purchases").text(value + "%");
				var nn1 = value / 2;
				$('.-range-id-' + index).parent().find(".-price_slide").text(nn1.toFixed(3) + "$");
			}
		});
	});

	$(".scroll").mCustomScrollbar({
		theme: "dark",
		mouseWheelPixels: 80,
		scrollInertia: 0
	});
});
//# sourceMappingURL=main.js.map
