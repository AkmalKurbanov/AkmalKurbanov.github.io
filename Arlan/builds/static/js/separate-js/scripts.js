'use strict';

$(function() {

    // Инициализация анимированных ссылок
    LinkAnimation.init();

    // Анимация молекул
    if ($('#parallax_svg').length > 0) {
        MorphSVG(document.getElementById('parallax_svg'), true);
    }

    // Паралакс движение
    var parallax_container = document.getElementsByClassName('parallax')[0];
    var parallax_layers = document.getElementsByClassName('parallax__layer');
    parallaxOnMouse.init(parallax_container, parallax_layers);

    // Взрыв молекул после загрузки страницы
    $(document).ready(function() {
        setTimeout(function () {
            $('#parallax_svg').addClass("show");
        }, 500);
    });

    // Растягиваем лоадер на весь экран
    Loader.resize();

    $(document).ready(function() {
        // Инициализируем ссылки с лоадером
        Loader.init();

        // После загрузки страницы прячем лоадер
        setTimeout(function () {
            Loader.close()
        }, 350);
    });

    /*
    |--------------------------------------------------------------------------
    | jQuery Zoom
    |--------------------------------------------------------------------------
    */

    $('.zoom').zoom();

    /*
    |--------------------------------------------------------------------------
    | Animate On Scroll Library
    |--------------------------------------------------------------------------
    */

    AOS.init();

    /*
    |--------------------------------------------------------------------------
    | Mobile menu
    |--------------------------------------------------------------------------
    */

    $('.burger').click(function() {
        $(this).toggleClass('-opened');
        $('.m-menu').toggleClass('-opened');

        if ($(this).hasClass('-opened')) {
            $('body').css({"overflow": "hidden"});
        } else {
            $('body').css({"overflow": ""});
        }

    });

    $('.m-menu__link').on('click', function(){
        $('.m-menu').toggleClass('-opened');
        $('.burger').toggleClass('-opened');
        $('body').css({"overflow": ""});
    });

    /*
    |--------------------------------------------------------------------------
    | Spoiler Text
    |--------------------------------------------------------------------------
    */

    let containerHeight = document.querySelectorAll(".spoiler__inner");
    let uncoverLink = document.querySelectorAll(".jsSpoilerMore");

    for(let i = 0; i < containerHeight.length; i++){
        let openData = uncoverLink[i].dataset.open;
        let closeData = uncoverLink[i].dataset.close;
        let curHeight = containerHeight[i].dataset.height;

        uncoverLink[i].innerHTML = openData;
        containerHeight[i].style.maxHeight = curHeight + "px";

        uncoverLink[i].addEventListener("click", function(){
            if(containerHeight[i].classList.contains("-open")){

                containerHeight[i].classList.remove("-open");

                uncoverLink[i].innerHTML = openData;

                containerHeight[i].style.maxHeight = curHeight + "px";

            } else {
                containerHeight[i].removeAttribute("style");

                containerHeight[i].classList.add("-open");

                uncoverLink[i].innerHTML = closeData;

            }
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Header
    |--------------------------------------------------------------------------
    */

    var header = $('.header');

    function stickyHeader() {
        if($(this).scrollTop()) { /*height in pixels when the navbar becomes non opaque*/
            header.addClass('-collapsed');
        } else {
            header.removeClass('-collapsed');
        }
    }

    $(window).scroll(stickyHeader);

    $(window).on('load', function() {
        //header.addClass('-collapsed');
    });

    /*
    |--------------------------------------------------------------------------
    | Kitchen Tabs Slider
    |--------------------------------------------------------------------------
    */

    let jsKitchenTabs = new Swiper('.jsKitchenTabs', {
        speed: 200,
        mousewheel: true,
        slidesPerView: 'auto',
        containerModifierClass: 'kitchen-tabs__slider',
        wrapperClass: 'kitchen-tabs__wrapper',
        followFinger: true,
        touchRatio: 1,
        slideClass: 'kitchen-tabs__item',
        freeMode: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.kitchen-tabs__button-next',
            prevEl: '.kitchen-tabs__button-prev',
        },
    });

    /*
    |--------------------------------------------------------------------------
    | Reviews Slider
    |--------------------------------------------------------------------------
    */

	let reviewsSlider = new Swiper('.jsReviewsSlider', {
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 110,
            slideShadows: false,
        },
		speed: 600,
		mousewheel: false,
		loop: true,
		/*autoplay: {
			delay: 1000,
			disableOnInteraction: true,
		},*/
		spaceBetween: 0,
		navigation: {
			nextEl: '.jsReviewsNext',
			prevEl: '.jsReviewsPrev',
		},
		slidesPerView: 1,
	});

    /*
    |--------------------------------------------------------------------------
    | Light Gallery
    |--------------------------------------------------------------------------
    */

	$('.lg').lightGallery({
		selector: ".lg-item",
	});

    /*
    |--------------------------------------------------------------------------
    | Stop Youtube video after closing modal window
    |--------------------------------------------------------------------------
    */

    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var src = $('.jsModalIframe').attr('data-iframe-src');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $('.modal-video, .modal-big-video').on('show.bs.modal', function (e) {
        $('.jsModalIframe').attr('src', src);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $('.modal-video, .modal-big-video').on('hide.bs.modal', function (e) {
        $('.jsModalIframe').attr('src', '');
    });

    /*
    |--------------------------------------------------------------------------
    | Masked Input
    |--------------------------------------------------------------------------
    */

    $(".jsMaskedPhone").mask("+7(999)999-99-99",{placeholder:" "});

});
