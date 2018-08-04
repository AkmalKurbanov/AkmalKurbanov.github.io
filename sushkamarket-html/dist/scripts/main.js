'use strict';

$(document).ready(function () {

	var loadin = $('.loader').html();
	$('body').prepend('<div class="loader_in"></div>');
	$('.loader_in').html(loadin);

	var uname = $('._meta ._auth a:first').text().substr(0, 9);
	$('._meta ._auth a:first').text(uname);

	$('._personal ._btn_edit').click(function () {
		$(this).parent().parent().find('.tab2 input, .tab2 textarea').removeAttr('readonly');
		$(this).parent().parent().find('.tab3 ._btn_save').addClass('-show');
		$(this).text("отменить").addClass('-cancel');
	});

	$('._personal ._btn_save').click(function () {
		$(this).parent().parent().find('.tab2 input, .tab2 textarea').attr('readonly', 'readonly');
		$(this).removeClass('-show');
		$(this).parent().parent().find('.tab4 ._btn_edit').text("изменить").removeClass('-cancel');
	});

	var taxRate = 0.02;
	var shippingRate = 15.00;
	var fadeTime = 300;
	$('.product-quantity input').change(function () {
		updateQuantity(this);
	});
	$('.product-removal button').click(function () {
		removeItem(this);
	});
	function recalculateCart() {
		var subtotal = 0;
		$('.product').each(function () {
			subtotal += parseFloat($(this).children('.product-line-price').text());
		});
		var tax = subtotal * taxRate;
		var shipping = subtotal > 0 ? shippingRate : 0;
		var total = subtotal + tax + shipping;
		$('.totals-value').fadeOut(fadeTime, function () {
			$('#cart-subtotal').html(subtotal.toFixed(0));
			// $('#cart-tax').html(tax.toFixed(2));
			// $('#cart-shipping').html(shipping.toFixed(2));
			// $('#cart-total').html(total.toFixed(2));
			if (total == 0) {
				$('.checkout').fadeOut(fadeTime);
			} else {
				$('.checkout').fadeIn(fadeTime);
			}
			$('.totals-value').fadeIn(fadeTime);
		});
	}
	function updateQuantity(quantityInput) {
		var productRow = $(quantityInput).parent().parent();
		var price = parseFloat(productRow.children('.product-price').text());
		var quantity = $(quantityInput).val();
		var linePrice = price * quantity;

		productRow.children('.product-line-price').each(function () {
			$(this).fadeOut(fadeTime, function () {
				$(this).text(linePrice.toFixed(0));
				recalculateCart();
				$(this).fadeIn(fadeTime);
			});
		});
	}
	function removeItem(removeButton) {
		var productRow = $(removeButton).parent().parent();
		productRow.slideUp(fadeTime, function () {
			productRow.remove();
			recalculateCart();
		});
	}

	$('._count_arrow_minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		// var int = parseInt($(this).parents('._price').find('._int').text()) / $input.val();
		// $(this).parents('._price').find('._int').text(int);
		// console.log();
		return false;
	});

	$('._count_arrow_plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		// var int = parseInt($(this).parents('._price').find('._int').text());
		// $(this).parents('._price').find('._int').text(int);
		return false;
	});

	$(window).load(function () {
		$('.loader').fadeOut('slow', function () {
			$(this).remove();
		});
	});
	// preloader

	$("._navtrigger").click(function () {
		$(this).toggleClass('-active');
		$(".mobile_nav").toggleClass('-show');
		$("body").toggleClass('-spaned');
		$("html").toggleClass('-hidden');
	});

	(function () {
		$(".header ._auth").clone().appendTo(".mobile_nav");
		$(".content ._sidebar ._nav_side").clone().appendTo(".mobile_nav");
		$(".header ._nav").clone().appendTo(".mobile_nav");
	})();

	// if ($(window).size();) {}

	$('._slider.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		navSpeed: 1000,
		// animateOut: 'fadeOut',
		loop: true,
		navText: ["<span class='_chevron_left'></span>", "<span class='_chevron_right'></span>"]
	});

	$('._thumb_big.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		navSpeed: 1000,
		// animateOut: 'fadeOut',
		loop: true,
		dotsContainer: '._thumb_small',
		dotsSpeed: 1000,
		navText: ["<span class='fa fa-arrow-circle-left'></span>", "<span class='fa fa-arrow-circle-right'></span>"]
	});

	$('._popular_slider.owl-carousel').owlCarousel({
		items: 4,
		dots: false,
		margin: 20,
		nav: true,
		navSpeed: 1000,
		loop: true,
		navText: ["<span class='_chevron_left'></span>", "<span class='_chevron_right'></span>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});

	var current_fs, next_fs, previous_fs;
	var left, opacity, scale;
	var animating;

	$(".next").click(function () {
		if (animating) return false;
		animating = true;

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		next_fs.show();

		current_fs.animate({ opacity: 0 }, {
			step: function step(now, mx) {

				scale = 1 - (1 - now) * 0.2;

				left = now * 50 + "%";

				opacity = 1 - now;
				current_fs.css({
					'transform': 'scale(' + scale + ')',
					'position': 'absolute'
				});
				next_fs.css({ 'left': left, 'opacity': opacity });
			},
			duration: 800,
			complete: function complete() {
				current_fs.hide();
				animating = false;
			},

			easing: 'easeInOutBack'
		});
	});

	$(".previous").click(function () {
		if (animating) return false;
		animating = true;

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		previous_fs.show();

		current_fs.animate({ opacity: 0 }, {
			step: function step(now, mx) {

				scale = 0.8 + (1 - now) * 0.2;

				left = (1 - now) * 50 + "%";

				opacity = 1 - now;
				current_fs.css({ 'left': left });
				previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
			},
			duration: 800,
			complete: function complete() {
				current_fs.hide();
				animating = false;
			},

			easing: 'easeInOutBack'
		});
	});

	$(".submit").click(function () {
		return false;
	});

	$('._modal').magnificPopup({
		type: 'inline',
		midClick: true,
		showCloseBtn: false,
		tClose: "Закрыть (Esc)",
		mainClass: 'mfp-3d-unfold',
		removalDelay: 500
	});

	$('._btn_close').on('click', function (event) {
		event.preventDefault();
		$.magnificPopup.close();
	});

	$(".validate").validate({
		errorClass: "-invalid",
		validClass: "-success",
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			username: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: ".-pass"
			},
			capcha: "required"
		}
	});
});

(function ($) {
	$.fn.showpreloader = function () {
		$('.loader_in').fadeIn('slow', function () {
			$(this).show();
		});
		return this;
	};
})(jQuery);

(function ($) {
	$.fn.hidepreloader = function () {
		$('.loader_in').fadeOut('slow', function () {
			$(this).hide();
		});
		return this;
	};
})(jQuery);
//# sourceMappingURL=main.js.map
