'use strict';

$(function () {

	// owl-carousel начало
	$('.comments-slider-js').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		items: 1
	});
	// owl-carousel конец


	// carousel
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		nav: false,
		dots: true,
		focusOnSelect: true
	});

	$('a[data-slide]').click(function (e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.slider-nav').slick('slickGoTo', slideno - 1);
	});
	// carousel end

});