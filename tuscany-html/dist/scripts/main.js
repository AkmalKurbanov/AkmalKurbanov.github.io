'use strict';

$(function () {
	if ($('.b_main_slider').length) {
		$(window).on('scroll touchmove', function () {
			var percent = $(window).scrollTop() / ($(window).height() / 2);
			if (percent < 1) {
				percent = parseInt(percent * 100) / 100;
			} else {
				percent = 1;
			}
			$('.b_main_slider ._slider').css({
				'opacity': 1 - percent
			});
		});
	}

	$('.b_main_slider ._slider').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 10000,
		dotsContainer: $('.b_main_slider_placer ._block ._dots')
	});

	$('.b_main_slider_placer ._left_arrow').click(function (e) {
		e.preventDefault();
		$('.b_main_slider ._slider').trigger('prev.owl.carousel');
	});

	$('.b_main_slider_placer ._right_arrow').click(function (e) {
		e.preventDefault();
		$('.b_main_slider ._slider').trigger('next.owl.carousel');
	});

	$('.b_facts').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1000,
		nav: true,
		autoplay: true
	});

	$('.inner_header .b_header ._nav_item_name.-with_dropdown').click(function (e) {
		e.preventDefault();
	});

	$('#contacts_form').validate({
		errorPlacement: function errorPlacement($error, $element) {
			$element.closest('.col-sm-4').append($error);
		}
	});
	$('#order_form').validate({
		errorPlacement: function errorPlacement($error, $element) {
			$element.closest('._row').append($error);
		}
	});
	$('#object_form').validate({
		errorPlacement: function errorPlacement($error, $element) {
			$element.closest('.col-sm-4').append($error);
		}
	});

	$("input[type=tel]").intlTelInput({
		initialCountry: 'ru'
	});

	$('.b_object ._slider').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		nav: true,
		autoplay: true,
		dotsData: true
	});

	$('.only_numbers').keydown(function (e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) || e.keyCode >= 35 && e.keyCode <= 40) {
			return;
		}
		if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});

	$('.b_faq ._questions_item_title').click(function (e) {
		e.preventDefault();
		$('._questions_item').removeClass('-active');
		$(this).parent().addClass('-active');
		$('._questions_item_descr').slideUp();
		$(this).next().slideDown();
	});
});
//# sourceMappingURL=main.js.map
