'use strict';

$(window).on("load", function (e) {
	$('.preloader').fadeOut('slow', function () {
		$(this).remove();
	});
});

$(document).ready(function () {

	$('.js-object').owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		dots: false,
		nav: true,
		navText: [''],
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

	$('.js-brand').owlCarousel({
		items: 6,
		loop: true,
		margin: 33,
		autoWidth: true,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: false,
		nav: true,
		navText: ['']
	});

	$('.js-main-slider').owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		dots: true,
		nav: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		mouseDrag: false

	});

	$('.js-drop').on('click', function (event) {
		event.preventDefault();
		$('.js-drop').not(this).parent().removeClass('open');
		$('.js-drop').not(this).next().slideUp();
		$(this).parent().toggleClass('open');
		$(this).next().slideToggle();
	});

	$('.js-nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('.js-nav-toggle').not(this).removeClass('-active');
		$('.js-nav-toggle').not(this).next().slideUp();
		$(this).toggleClass('-active');
		$(this).next().slideToggle();
	});

	var catal = $('.header__bottom .js-dropdown-menu').html();
	var mnav = $('.header__bottom .js-in-mobile').html();

	$('.mmenu-nav ul').html('<li><a>Каталог</a><ul>' + catal + '</ul></li>' + mnav);

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: 'Меню'
		},
		extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
		offCanvas: {
			'position': 'left'
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

	var taxRate = 0;
	var shippingRate = 0;
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
			$('#cart-subtotal').html(subtotal.toFixed(2));
			$('#cart-tax').html(tax.toFixed(2));
			$('#cart-shipping').html(shipping.toFixed(2));
			$('#cart-total').html(total.toFixed(2));
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
				$(this).text(linePrice.toFixed(2));
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
});
//# sourceMappingURL=main.js.map
