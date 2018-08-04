'use strict';

$(document).ready(function () {

	$(window).load(function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});
	// preloader

	$('._slider ._items').owlCarousel({
		items: 1,
		autoHeight: true,
		autoplay: true,
		loop: true,
		mouseDrag: false,
		dots: true,
		autoplayTimeout: 5000
	});
	// Main slider

	$('._inner_slider ._items').owlCarousel({
		items: 1,
		autoHeight: true,
		autoplay: true,
		mouseDrag: false,
		navContainer: '._owl_nav',
		nav: true,
		dots: true,
		dotsContainer: '._dots_wrap ._items',
		navText: ["<div class='-left'></div>", "<div class='-right'></div>"],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 5000
	});
	// Second slider

	$("._navtrigger").click(function () {
		$(this).toggleClass('-active');
		$("._mnu").toggleClass('-mobile');
	});
	// Mobile Nav

	$('._navs_wrap ._more').click(function () {
		$('._dots_wrap').toggleClass('-show');
	});

	$('._gallery_thumb').owlCarousel({
		items: 1,
		autoHeight: true,
		autoplay: true,
		autoplayTimeout: 3000,
		thumbs: true,
		thumbsPrerendered: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});
});
//# sourceMappingURL=main.js.map
