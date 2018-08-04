'use strict';

$(document).ready(function () {

	// scroll
	$('.main').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors: ['1', '2', '3', '4', '5', '6'],
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['', ''],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: true,
		loopHorizontal: false,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 0,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: false,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: false,
		verticalCentered: false,
		fixedElements: '#header',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' }

	});
	// fullpage

	// smooth
	$('a.smooth_scroll').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	// smooth

	$("#bgVideo").YTPlayer({
		videoURL: 'http://youtu.be/OSo_oPORnOc',
		containment: '#bgVideo',
		autoPlay: 1,
		mute: true,
		showControls: false,
		startAt: 0,
		showYTLogo: false,
		pauseOnScroll: false,
		loop: true,
		realfullscreen: true,
		repeat: true,
		opacity: 1
	});
	$("#bgVideo2").YTPlayer({
		videoURL: 'http://youtu.be/OSo_oPORnOc',
		containment: '#bgVideo2',
		autoPlay: true,
		mute: true,
		showControls: false,
		startAt: 0,
		showYTLogo: false,
		pauseOnScroll: false,
		loop: true,
		opacity: 1
	});
	$("#bgVideo3").YTPlayer({
		videoURL: 'http://youtu.be/8LiT2huOMhw',
		containment: '#bgVideo3',
		autoPlay: true,
		mute: true,
		showControls: false,
		startAt: 0,
		showYTLogo: false,
		pauseOnScroll: false,
		loop: true,
		opacity: 1
	});
	$("#bgVideo4").YTPlayer({
		videoURL: 'http://youtu.be/OSo_oPORnOc',
		containment: '#bgVideo4',
		autoPlay: true,
		mute: true,
		showControls: false,
		startAt: 0,
		showYTLogo: false,
		pauseOnScroll: false,
		loop: true,
		opacity: 1
	});
	$("#bgVideo5").YTPlayer({
		videoURL: 'http://youtu.be/OSo_oPORnOc',
		containment: '#bgVideo5',
		autoPlay: true,
		mute: true,
		showControls: false,
		startAt: 0,
		showYTLogo: false,
		loop: true,
		pauseOnScroll: true,
		opacity: 1
	});

	// popup
	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300
		}
	});
	// 

	// popup
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true
	});
	// 


	// toggle menu
	$('.toggle').click(function () {
		$('#nav').toggleClass('open');
		$('.topline__menu').toggleClass('menu-open');
	});
	//

	// menu
	$('#pull').on('click', function (e) {
		e.preventDefault();
		$('#submenu').slideToggle(500);
	});
	$(window).resize(function () {
		if (innerWidth >= 480) {
			if ($('#submenu').css('display') == 'none') {
				$('#submenu').removeAttr('style');
			}
		}
	});
	// menu

	// tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
			    index = $(this).closest('li').index();

			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		});
	})(jQuery);
	// 

	// active
	$('.tabs li a').click(function () {
		$('.tabs li a').removeClass("active");
		$(this).addClass("active");
	});
	// 

	// carousel
	$('.js-carousel').owlCarousel({
		loop: true,
		margin: 10,
		navText: [''],
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	//

	//carousel
	$('.js-loop').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		navText: [''],
		nav: true,
		margin: 10
	});
	//

	// scroll
	(function ($) {
		$(window).on("load", function () {
			$(".content").mCustomScrollbar();
		});
	})(jQuery);
	// scroll
}); //end ready

// var duration = 300;
// var easing = "swing";

// $(document).ready(function(){
//   $('#pull').click(function(){
//     if (is_fold($(this))){
//       fold_in($(this));
//     } else {
//       fold_out($(this));
//     }
//   });
// });