'use strict';

$(document).ready(function () {

	// active header menu начало
	$('.sidebar  ul li a').click(function () {
		$('.sidebar ul li a').removeClass('active');
		$(this).addClass('active');
	});
	// active header menu конец


	// menu начало

	$('.toggle').click(function () {
		$('#nav').toggleClass('open');
		$('.sidebar').toggleClass('menu-open');
	});

	// menu конец


	// slider начало
	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		center: true
	});
	//slider конец

	// hidden elements начало

	$(function () {
		$('.js-share').click(function () {
			$('.js-share-open').slideDown('');
		});
		$('.js-search').click(function () {
			$('.js-search-open').slideDown('');
		});
		$('.js-close').click(function () {
			$('.js-share-open').hide('');
		});
		$('.js-close').click(function () {
			$('.js-search-open').hide('');
		});
	});
	// hidden elements конец


	// instagram начало
	var userFeed = new Instafeed({
		get: 'user',
		userId: '1767489556',
		accessToken: '1767489556.1677ed0.e219b52c11054439a4bf8d517516d5c8',
		resolution: 'standard_resolution',
		template: '<li><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /><ul class="insta-info"><li class="likes">{{likes}}</li><li class="comments">{{comments}}</li></ul></a></li>',
		sortBy: 'most-recent',
		limit: 8,
		links: true
	});
	userFeed.run();
	// instagram конец
	// 

});