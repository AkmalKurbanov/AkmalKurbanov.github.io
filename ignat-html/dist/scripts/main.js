"use strict";

$(document).ready(function () {

	$("._payments_form ._input_group label").click(function () {
		$(this).parents("._payments_form").find("._input_group").not(this).removeClass("-active");
		$(this).parent().addClass('-active');
	});
	// checkbox

	$('._tab_navs').on('click', 'ul > li._tab_link', function () {
		if (!$(this).hasClass('-active')) {
			var accordionTabs = $(this).closest('._tab_navs');
			accordionTabs.find('.-open').removeClass('-open');

			$(this).next().toggleClass('-open');
			accordionTabs.find('.-active').removeClass('-active');
			$(this).addClass('-active');
		}
	});
	// Tabs Profile

	$('._modal').magnificPopup({
		type: 'inline',
		midClick: true,
		closeMarkup: "<button title='%title%' type='button' class='_close_mfp mfp-close'></button>",
		tClose: "Закрыть (Esc)",
		mainClass: 'mfp-3d-unfold',
		removalDelay: 500
	});
	// Modals Reg&Forg

	if ($('body').is('.index')) {
		setTimeout(function () {
			if ($('#popunder').length) {
				$.magnificPopup.open({
					items: {
						src: '#popunder'
					},
					type: 'inline',
					midClick: true,
					closeMarkup: "<button title='%title%' type='button' class='_close_mfp mfp-close'></button>",
					tClose: "Закрыть (Esc)",
					mainClass: 'mfp-3d-unfold',
					removalDelay: 500
				});
			}
		}, 1000);
	};
	// Popunder main

	$("._social a").tooltip({
		position: { my: "center top-47", at: "bottom center" }
	});

	$(".arch_accordion ._title").click(function () {
		$(this).toggleClass('-opened');
		$(this).next().toggleClass('-show');
	});

	$("._iner_accordion li").click(function () {
		$(this).parents("._iner_accordion").find("li").not(this).removeClass("-opened").next().removeClass("-show");
		$(this).toggleClass('-opened');
		$(this).next().toggleClass('-show');
	});

	$('._slider_bot_page').each(function (idx, item) {
		var carouselId = "slider-pag-bot-" + idx;
		this.id = carouselId;
		$(this).slick({
			slidesToShow: 4,
			infinite: false,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	});

	$('._slider_bot_page_nav').each(function (idx, item) {
		var carouselId = "slider-pag-botnav" + idx;
		this.id = carouselId;
		$(this).slick({
			slidesToShow: 4,
			prevArrow: "<button class='_sl_navs -prev'><i class='fa fa-angle-right'></i></button>",
			nextArrow: "<button class='_sl_navs -next'><i class='fa fa-angle-left'></i></button>",
			infinite: false,
			// appendArrows: "._sl_nav_b",
			dots: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	});

	$('._slider_2').each(function (idx, item) {
		var carouselId = "slider-2-" + idx;
		this.id = carouselId;
		$(this).slick({
			vertical: true,
			slidesToShow: 2,
			prevArrow: "<button class='_sl_navs -prev'><i class='fa fa-angle-up'></i></button>",
			nextArrow: "<button class='_sl_navs -next'><i class='fa fa-angle-down'></i></button>",
			infinite: false
		});
	});

	$('._slider_3').each(function (idx, item) {
		var carouselId = "slider-3-" + idx;
		this.id = carouselId;
		$(this).slick({
			vertical: true,
			slidesToShow: 3,
			prevArrow: "<button class='_sl_navs -prev'><i class='fa fa-angle-up'></i></button>",
			nextArrow: "<button class='_sl_navs -next'><i class='fa fa-angle-down'></i></button>",
			infinite: false
		});
	});

	$('._slider_4').each(function (idx, item) {
		var carouselId = "slider-4-" + idx;
		this.id = carouselId;
		$(this).slick({
			vertical: true,
			slidesToShow: 4,
			prevArrow: "<button class='_sl_navs -prev'><i class='fa fa-angle-up'></i></button>",
			nextArrow: "<button class='_sl_navs -next'><i class='fa fa-angle-down'></i></button>",
			infinite: false
		});
	});

	$('._slider_page_5').each(function (idx, item) {
		var carouselId = "slider-page5-" + idx;
		this.id = carouselId;
		$(this).slick({
			vertical: true,
			slidesToShow: 5,
			slidesToScroll: 5,
			arrows: false,
			dots: true,
			infinite: false
		});
	});

	$('#slpg').slick({
		vertical: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		dots: true,
		infinite: false
	});

	$('.grid-stack').gridstack({
		cell_height: 200,
		vertical_margin: 20,
		disableResize: true,
		disableDrag: true,
		minWidth: 1024,
		animate: true
	});
	// Grid


	$('._language_select').click(function () {
		$(this).toggleClass('-open');
	});
	// Lang

	$('._language_select li').click(function () {
		var setLang = $('._language_select').data('location'),
		    dataLangSelect = $(this).data('lang');
		$('._language_select').data('location', dataLangSelect);

		$('ul li').removeClass('-active');
		$(this).toggleClass('-active');
	});
	// Lang choise

	$("._navtrigger").click(function () {
		$('._navtrigger').toggleClass('-active');
		$("._mobile_nav").toggleClass('-mobile');
	});
	// Mobile nav

	var find1 = $('.main_top ._head').find('._menu ul').html();
	var find2 = $('.main_top ._meta').find('._enter').html();
	var find3 = $('.main_top ._foot').find('._menu ul').html();
	var find4 = $('.main_top ._foot').find('._social').html();
	$("._mobile_nav").html("<ul class='_first'>" + find1 + "</ul><div class='_enter'>" + find2 + "</div><ul class='_second'>" + find3 + "</ul>" + "<div class='_social'>" + find4 + "</div>");
	// Mobile nav finder

	$(".main_top ._search").click(function () {
		$('._search_wrap').toggleClass('-active');
		$('._navtrigger').removeClass('-active');
		$("._mobile_nav").removeClass('-mobile');
	});
	$("._search_wrap ._close").click(function () {
		$('._search_wrap').removeClass('-active');
	});
	// Search

	$('._popupvideo').magnificPopup({
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
				}
			},
			srcAction: 'iframe_src'
		}
	});
});

var cubeShare = {
	title: 'Ignat.io',
	width: 600,
	height: 400,

	init: function init() {
		var share = document.querySelectorAll('.share-btn');
		for (var i = 0, l = share.length; i < l; i++) {
			var url = share[i].getAttribute('data-url') || location.href,
			    title = share[i].getAttribute('data-title') || '',
			    desc = share[i].getAttribute('data-desc') || '',
			    el = share[i].querySelectorAll('a');

			for (var a = 0, al = el.length; a < al; a++) {
				var id = el[a].getAttribute('data-id');
				if (id) this.addEventListener(el[a], 'click', { id: id, url: url, title: title, desc: desc });
			}
		}
	},

	addEventListener: function addEventListener(el, eventName, opt) {

		var _this = this,
		    handler = function handler() {
			_this.share(opt.id, opt.url, opt.title, opt.desc);
		};

		if (el.addEventListener) {
			el.addEventListener(eventName, handler);
		} else {
			el.attachEvent('on' + eventName, function () {
				handler.call(el);
			});
		}
	},

	share: function share(id, url, title, desc) {
		url = encodeURIComponent(url);
		desc = encodeURIComponent(desc);
		title = encodeURIComponent(title);

		switch (id) {
			case 'fb':
				this.popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + url, this.title, this.width, this.height);
				break;

			case 'vk':
				this.popupCenter('https://vk.com/share.php?url=' + url + '&description=' + title + '. ' + desc, this.title, this.width, this.height);
				break;

			case 'tw':
				var text = title || desc || '';
				if (title.length > 0 && desc.length > 0) text = title + ' - ' + desc;
				if (text.length > 0) text = '&text=' + text;

				this.popupCenter('https://twitter.com/intent/tweet?url=' + url + text, this.title, this.width, this.height);
				break;

			case 'gp':
				this.popupCenter('https://plus.google.com/share?url=' + url, this.title, this.width, this.height);
				break;

			case 'in':
				this.popupCenter('https://www.linkedin.com/shareArticle?mini=true&url=' + url, this.title, this.width, this.height);
				break;

			case 'mail':
				var text = title || desc || '';
				if (title.length > 0 && desc.length > 0) text = title + ' - ' + desc;
				if (text.length > 0) text = text + ' / ';
				if (title.length > 0) title = title + ' / ';

				var mail = 'mailto:?Subject=' + title + this.title + '&body=' + text + url;
				this.newTab(mail);
				break;

			default:
				break;
		};
	},

	newTab: function newTab(url) {
		var win = window.open(url, '_blank');
		win.focus();
	},

	popupCenter: function popupCenter(url, title, w, h) {
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = width / 2 - w / 2 + dualScreenLeft;
		var top = height / 3 - h / 3 + dualScreenTop;

		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		if (window.focus) {
			newWindow.focus();
		}
	}
};

cubeShare.init();

$(document).ready(function () {
	var urlf = $(".share-btn").data("url");
	var urlp = "http://graph.facebook.com/?id=" + urlf;
	$.getJSON(urlp, function (data) {
		var cn = data.shares;
		$(".share-btn ._fb ._count").html(cn);
	});
});

$('._grid ._block').each(function (idx, item) {
	var hexx = "hex-" + idx;
	var bgc = $(this).css("background-color");
	this.id = hexx;
	var tohex = rgb2hex(bgc);
	var finto = hexToRgbA(tohex);
	$(this).children("._sd_long").css({
		background: "linear-gradient(0deg, " + tohex + " 34%, " + tohex + " 19%," + finto + " 100%)"
	});
});
function rgb2hex(orig) {
	var rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
	return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
}
function hexToRgbA(hex) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [c >> 16 & 255, c >> 8 & 255, c & 255].join(',') + ',0)';
	}
}

/*
$(document).ready(function(){
	$('.share-btn a').on('click', function() {
		var id = $(this).data('id');
		if(id) {
			var data = $(this).parent('.share-btn');
			var url = data.data('url') || location.href, title = data.data('title') || '', desc = data.data('desc') || '';
			cubeShare.share(id, url, title, desc);
		}
	});
});
*/
//# sourceMappingURL=main.js.map
