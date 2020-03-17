'use strict';

$(document).ready(function () {
	if (Modernizr.mq('(min-width: 1025px)')) {
		$('.wrapper').fullpage({
			scrollBar: true,
			verticalCentered: false,
			afterRender: function afterRender() {
				new WOW().init();
			}
		});
		// $('.-nav .b_section_perspective').append($('.hide_nav').html());

		$(window).load(function () {
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 10,
				mobile: false,
				live: true,
				callback: function callback(box) {},
				scrollContainer: ".b_seventh"
			});
		});

		$(window).scroll(function () {
			var vh = $(window).height();
			if ($(this).scrollTop() >= vh) {
				$('.nav_main').addClass("-show");
			} else {
				$('.nav_main').removeClass("-show");
			}
		});

		// var isMobile = {
		// 	Android: function() {
		// 		return navigator.userAgent.match(/Android/i);
		// 	},
		// 	BlackBerry: function() {
		// 		return navigator.userAgent.match(/BlackBerry/i);
		// 	},
		// 	iOS: function() {
		// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		// 	},
		// 	Opera: function() {
		// 		return navigator.userAgent.match(/Opera Mini/i);
		// 	},
		// 	Windows: function() {
		// 		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
		// 	},
		// 	any: function() {
		// 		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		// 	}
		// };

		// var pageScroll = {
		// 	sectionsHeight: 0,
		// 	activeSection: 1,
		// 	init: function(){
		// 		if( !isMobile.any() ){
		// 			pageScroll.setSectionsHeight();
		// 			$(window).on('touchmove scroll', pageScroll.pageScrolled);
		// 			pageScroll.initScrollListener();
		// 		} else {
		// 			$('html.-touch .b_slider ._slide').css({
		// 				height: $(window).height() - 53
		// 			})
		// 			if( $(window).width() > 767 ){
		// 				$('html.-touch .b_slider ._slide').css({
		// 					height: $(window).height()
		// 				})	
		// 			}
		// 		}
		// 		pageScroll.initSmoothScroll();
		// 	},
		// 	initScrollListener: function(){
		// 		$('body').on({
		// 			'mousewheel DOMMouseScroll': function(event) {
		// 				event.preventDefault();
		// 				event.stopPropagation();
		// 				if (event.originalEvent.wheelDelta > 20 || event.originalEvent.detail < 0) {
		// 					if( $('.b_header ._dot.-active').prev().length ){
		// 						$('.b_header ._dot.-active').prev().click();
		// 						pageScroll.pauseScrollListener();
		// 					}
		// 				}
		// 				if (event.originalEvent.wheelDelta < -20 || event.originalEvent.detail > 0) {
		// 					if( $('.b_header ._dot.-active').next().length ){
		// 						$('.b_header ._dot.-active').next().click();
		// 						pageScroll.pauseScrollListener();
		// 					}
		// 				}
		// 			}
		// 		})
		// 	},
		// 	pauseScrollListener: function(){
		// 		$('body').off('mousewheel DOMMouseScroll');
		// 		setTimeout(pageScroll.initScrollListener,1000);
		// 	},
		// 	setSectionsHeight: function(){
		// 		$('section').css({'height': ($(window).height()) + 'px'});
		// 		$('.b_slider ._slide').css({'height': ($(window).height()) + 'px'});
		// 		pageScroll.sectionsHeight = $( window ).height();
		// 		$(window).resize(function(){
		// 			var windowH = $(window).height();
		// 			var wrapperH = $('section').height();
		// 			var differenceH = windowH - wrapperH;
		// 			var newH = wrapperH + differenceH;
		// 			$('section').css('height', (newH) + 'px');
		// 			$('.b_slider ._slide').css('height', (newH) + 'px');
		// 			pageScroll.sectionsHeight = newH;
		// 		});
		// 	},
		// 	pageScrolled: function(){
		// 		var scrollPosition = $(window).scrollTop(),
		// 		scrollIntroPercent = 0,
		// 		currentSection = parseInt( scrollPosition / pageScroll.sectionsHeight ) + 1,
		// 		reverseScrollIntroPercent,
		// 		style;

		// 		if( currentSection !== pageScroll.activeSection ) {
		// 			pageScroll.activeSection = currentSection;
		// 			pageScroll.sectionChanged();
		// 		}
		// 		scrollIntroPercent = parseInt( scrollPosition / pageScroll.sectionsHeight * 100 ) % 100;
		// 		reverseScrollIntroPercent = 100 - scrollIntroPercent;
		// 		style = 'opacity:' + reverseScrollIntroPercent / 100 + ' ;top:-' + scrollIntroPercent + '%;-webkit-transform: perspective(1600px) rotate3d(1,0,0,' + 90 * scrollIntroPercent / 100 + 'deg); -moz-transform: perspective(1600px) rotate3d(1,0,0,' + 90 * scrollIntroPercent / 100 + 'deg); -ms-transform: perspective(1600px) rotate3d(1,0,0,' + 90 * scrollIntroPercent / 100 + 'deg); -o-transform: perspective(1600px) rotate3d(1,0,0,' + 90 * scrollIntroPercent / 100 + 'deg); transform: perspective(1600px) rotate3d(1,0,0,' + 90 * scrollIntroPercent / 100 + 'deg);';
		// 		$('section:nth-of-type(' + currentSection + ') .b_section_perspective').attr('style', style);
		// 	},
		// 	sectionChanged: function(){
		// 		$('section').each(function(ind){
		// 			ind++;
		// 			if( ind < pageScroll.activeSection ){
		// 				$(this).removeClass('-current').addClass('-prev').find('.b_section_perspective').attr('style', '');
		// 			// $(".nav_main").addClass('-show');
		// 		} else {
		// 			if(ind === pageScroll.activeSection){
		// 				$(this).addClass('-current').removeClass('-prev');
		// 				// $(".nav_main").removeClass('-show');
		// 			} else {
		// 				$(this).removeClass('-current').removeClass('-prev').find('.b_section_perspective').attr('style', '');
		// 			}
		// 		}
		// 	});

		// 		var activeSection = $('section.-current').attr('id');
		// 		$('.b_header ._dot[href="#' + activeSection + '"]').addClass('-active').siblings().removeClass('-active');
		// 		$('.b_header ._nav_item').removeClass('-active');
		// 		$('.b_header ._nav_item[href="#' + activeSection + '"]').addClass('-active');
		// 	},
		// 	initSmoothScroll: function(){
		// 		$('a.smooth_scroll').click(function() {
		// 			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
		// 				var target = $(this.hash);
		// 				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// 				if (target.length) {
		// 					$('html,body').animate({
		// 						scrollTop: target.offset().top
		// 					}, 1000);
		// 					return false;
		// 				}
		// 			}
		// 		});
		// 	}
		// };
		// pageScroll.init();
	} else {}

	$(".navtrigger").click(function () {
		$(".navtrigger").toggleClass('-active');
		$(".b_header").toggleClass('-show');
	});

	$(".b_header").click(function () {
		$(this).removeClass('-show');
		$(".navtrigger").removeClass('-active');
	});

	var detachedSixSect = $('#header_screen6').detach(); //РІС‹СЂРµР·Р°РЅРЅР°СЏ СЃРµРєС†РёСЏ (С‡С‚РѕР±С‹ С„СѓР»РїРµР№РґР¶ РЅРµ Р±РµСЃРёР»СЃСЏ, РїС‹С‚Р°СЏСЃСЊ РїСЂРѕСЃРєСЂРѕР»Р»РёС‚СЊ Рє СЃРєСЂС‹С‚РѕРјСѓ СЌР»РµРјРµРЅС‚Сѓ)
	// $.fn.fullpage.reBuild();
	var dataTabClicks = 0;
	$('[data-tab]').on('click', function (e) {
		e.preventDefault();
		dataTabClicks++;
		if (dataTabClicks < 2) {
			$('#header_screen5').after($(detachedSixSect));
			runWorksSLiders();
			$.fn.fullpage.reBuild();
		}
		$('.b_sixth .close').on('click', function (e) {
			dataTabClicks = 0;
			$('#header_screen6').remove();
			// $.fn.fullpage.reBuild();
			$.fn.fullpage.destroy();
			e.preventDefault();
		});

		$(this).addClass('-active').siblings('[data-tab]').removeClass('-active');
		var dt = $(this).data('tab');
		$('._galery_item').siblings('[data-content=' + dt + ']').addClass('-active').siblings('[data-content]').removeClass('-active');
		// console.log($('._galery_item').siblings('[data-content=' + dt + ']'))
		$("#slider-" + dt).slick('next');
		// $(location).href('#header_screen6'); // Р±С‹Р»Р° РѕС€РёР±РєР°, РїРµСЂРµРґРµР»Р°Р»
		$(location).attr('href', '#header_screen6');
		var url = "#header_screen6";
		$(this).attr('href', url);
	});

	$(window).load(function () {
		$('.loader-wrap').fadeOut('slow', function () {
			$(this).remove();
		});
	});
	// preloader

	$('._dots a[href*="#"]:not([href="#"]),.mouse_icon').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('._slider_iner').each(function (idx, item) {
		var carouselId = "slider-iner-" + idx;
		this.id = carouselId;
		$(this).slick({
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 1000,
			fade: true
		});
		$(this).parent().mouseover(function () {
			$("#slider-iner-" + idx).slick('play');
		});
		$(this).parent().mouseout(function () {
			$("#slider-iner-" + idx).slick('pause');
		});
	});

	function runWorksSLiders() {

		$('.b_sixth ._slider').each(function (idx, item) {
			var carouselId = "slider-" + (idx + 1);
			this.id = carouselId;
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '#slider-thumbs-' + (idx + 1)
			});
		});

		$('.b_sixth ._thumbs').each(function (idx, item) {
			var carouselId = "slider-thumbs-" + (idx + 1);
			this.id = carouselId;
			$(this).slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				asNavFor: '#slider-' + (idx + 1),
				dots: false,
				arrows: false,
				centerMode: true,
				focusOnSelect: true,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}]
			});
		});
	};

	// $('.b_sixth ._slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.b_sixth ._thumbs'
	// });
	// slider


	// $('.b_sixth ._thumbs').slick({
	// 	slidesToShow: 6,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.b_sixth ._slider',
	// 	dots: false,
	// 	arrows: false,
	// 	centerMode: true,
	// 	focusOnSelect: true,
	// 	responsive: [
	// 	{
	// 		breakpoint: 1024,
	// 		settings: {
	// 			slidesToShow: 4,
	// 			slidesToScroll: 1,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 600,
	// 		settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 1,
	// 		}
	// 	}
	// 	]
	// });
	// thumbs

	// $('#video').YTPlayer({
	// 	fitToBackground: true,
	// 	mute: true,
	// 	repeat: true,
	// 	videoId: 'ekXT0MRkBMU'
	// });
	// // video bg

	// console.log($(".video_bg").data('video'))

	// $(".video_slide").YTPlayer();

	var myMap, myPlacemark;

	ymaps.ready(init);

	function init(data) {
		$('#map').html('');
		myMap = new ymaps.Map('map', {
			controls: ["zoomControl", "fullscreenControl", "geolocationControl"],
			center: [55.70903144, 37.60211719],
			behaviors: [],
			zoom: 16
		});

		if (!data.type) {
			myPlacemark = new ymaps.Placemark([55.708877, 37.601804], {
				balloonContentHeader: "Global Star",
				balloonContentBody: "RUSSIA"
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'images/marker.png'
			});
			iconImageSize: [57, 74],
			// iconImageOffset: [30, 50]
			myMap.geoObjects.add(myPlacemark);
			return true;
		};

		if (data.type == 1) {
			ymaps.geolocation.get().then(function (res) {
				var multiRoute = new ymaps.multiRouter.MultiRoute({
					referencePoints: [res.geoObjects.position, [55.70903144, 37.60211719]],
					params: {
						results: 1
					}
				}, {
					boundsAutoApply: true
				});
				myMap.geoObjects.add(multiRoute);
			});
		}

		if (data.type == 2) {
			ymaps.geolocation.get().then(function (res) {
				var multiRoute = new ymaps.multiRouter.MultiRoute({
					referencePoints: [res.geoObjects.position, [55.70903144, 37.60211719]],
					params: {
						results: 1,
						routingMode: 'masstransit'
					}
				}, {
					boundsAutoApply: true
				});
				myMap.geoObjects.add(multiRoute);
			});
		}
	};
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(".player").each(function (idx, item) {
	var tvlId = "player-" + (idx + 1);
	// this.id = tvlId;
	var dt = $(this).data('id');
	$(this).append('<iframe id="' + tvlId + '"src="https://www.youtube.com/embed/' + dt + '?controls=0&showinfo=0&rel=0&autoplay=0&loop=0&playerapiid=' + tvlId + '" frameborder="0" allowfullscreen></iframe>');
});
//# sourceMappingURL=main.js.map
