'use strict';

$(function () {

    /*
    |--------------------------------------------------------------------------
    | Typed.js
    |--------------------------------------------------------------------------
    */
    // scroll button
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 700);
    }
    $('[data-scroll]').on('click', scrollToSection);

    $('.navigation__link').on('click', function() {
        $('.navigation').removeClass('mobileMenu');
        $('.burger').removeClass('-open');
        $('.navigation__userPanel').removeClass('userPanelShow');
    });
    // scroll button end





    //    burger
    $('.burger').on('click', function () {
        $('.navigation').toggleClass('mobileMenu');
        $('.header__logo span').toggleClass('mobileLogoSpan');
        $('.header__logo').toggleClass('mobileLogo');
        $(this).toggleClass('-open');
        $('.header__login').toggle();
        $('.userbar').toggle();
        $('.navigation__userPanel').toggleClass('userPanelShow');
    });


//    burger end
   setTimeout(function () {
      $(".entry__title").css('display','inline');
   }, 100);
    $(function () {
        $(".entry__title").typed({

            stringsElement: $('#js-typed-strings'),

            // typing speed
            typeSpeed: 30,

            // time before typing starts
            startDelay: 0,

            // backspacing speed
            backSpeed: 0,

            // time before backspacing
            backDelay: 50,

            // loop
            loop: false,

            // false = infinite
            loopCount: false,

            // show cursor
            showCursor: true,

            // character for cursor
            cursorChar: "",

            // attribute to type (null == text)
            attr: null,

            // either html or text
            contentType: 'html',

            // call when done callback function
            callback: function () {

                setTimeout(function () {
                    $('.typed-effect + .typed-cursor').css({
                        'opacity': '0',
                        'animation': 'none'
                    });
                }, 1300);

            },

            // starting callback function before each string
            preStringTyped: function () {},

            //callback for every typed string
            onStringTyped: function () {},

            // callback for reset
            resetCallback: function () {}
        });
    });

    /*
    |--------------------------------------------------------------------------
    | Spoiler Text
    |--------------------------------------------------------------------------
    */

    let containerHeight = document.querySelectorAll(".spoiler__inner");
    let uncoverLink = document.querySelectorAll(".jsSpoilerMore");

    for (let i = 0; i < containerHeight.length; i++) {
        let openData = uncoverLink[i].dataset.open;
        let closeData = uncoverLink[i].dataset.close;
        let curHeight = containerHeight[i].dataset.height;

        uncoverLink[i].innerHTML = openData;
        containerHeight[i].style.maxHeight = curHeight + "px";

        uncoverLink[i].addEventListener("click", function () {
            if (containerHeight[i].classList.contains("-open")) {

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
    | Selectpicker
    |--------------------------------------------------------------------------
    */

    $('.jsSelectPicker').selectpicker();

    /*
    |--------------------------------------------------------------------------
    | jQuery masked input
    |--------------------------------------------------------------------------
    */

    $(".jsMaskedPhone").mask("+7(999)999-99-99", {
        placeholder: " "
    });

    $(".jsMaskedDate").mask("99/99/9999", {
        placeholder: "дд/мм/гггг"
    });

    /*
    |--------------------------------------------------------------------------
    | Test Slider
    |--------------------------------------------------------------------------
    */

    let testSlider = new Swiper('.jsTestSlider', {
        speed: 600,
        mousewheel: false,
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '.jsTestSliderNext',
            prevEl: '.jsTestSliderPrev',
        },
        pagination: {
            el: ".jsDefaultSliderPagination",
            clickable: true,
        },
        touchRatio: 0,
        slidesPerView: 1,

        on: {
            reachEnd: function () {
                $('.test__finish').toggleClass('-show');
            },
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Test Slider counter
    |--------------------------------------------------------------------------
    */

    function hiddenTestFinish() {
        document.querySelector('.test__finish').classList.remove('-show');
    }

    let jsTestSliderPrev = document.querySelector('.jsTestSliderPrev');

    if (jsTestSliderPrev) {
        jsTestSliderPrev.addEventListener('click', function () {
            hiddenTestFinish();
        });
        jsTestSliderPrev.addEventListener('touchstart', function () {
            hiddenTestFinish();
        });
    }

    function intoAnArray(pseudoArray) {
        let array = [];
        for (let i = 0; i < pseudoArray.length; i++) {
            array.push(pseudoArray[i]);
        }
        return array;
    }

    let sliders = document.querySelectorAll('.test');
    sliders = intoAnArray(sliders);
    requestAnimationFrame(function initializationCounter() {
        for (let i = 0; i < sliders.length; i++) {
            let slidesActive;
            let swiperPaginationBullet = sliders[i].querySelectorAll('.swiper-pagination-bullet');
            swiperPaginationBullet = intoAnArray(swiperPaginationBullet);
            for (let i = 0; i < swiperPaginationBullet.length; i++) {
                if (swiperPaginationBullet[i].classList.contains('swiper-pagination-bullet-active')) slidesActive = i + 1;
            };

            sliders[i].querySelector('.jsCounterCurrent').innerHTML = slidesActive;
            sliders[i].querySelector('.jsCounterTotal').innerHTML = swiperPaginationBullet.length;
        };
        requestAnimationFrame(initializationCounter);
    });


    var swiper = new Swiper('.reviewsSlider-js', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.reviewsnavNext',
            prevEl: '.reviewsnavPre',
        },
    });









    $(".youtube").each(function () {
        $(document).delegate('#' + this.id, 'click', function () {
            var iframe_url = "//www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
            var iframe = $('<iframe/>', {
                'allowfullscreen': 'allowfullscreen',
                'frameborder': '0',
                'src': iframe_url
            })
            $(this).append(iframe);
        });
    });



    // $(function () {
    //     $("#datepicker").datepicker();
    //     dateFormat: "d/MM/yy",
    // });
    $('#datepicker').datepicker({
        dateFormat: "d/MM/yy",
        prevText: 'Пред',
        nextText: 'След',
        monthNames: [
            'Январ', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    });















});
