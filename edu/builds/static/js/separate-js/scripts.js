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

    // scroll button end


    $('[data-scroll]').on('click', scrollToSection);


    //    burger
    $('.navigation__link').on('click', function () {
        $('.mobileMenu').removeClass('mobileMenu-open');
        $('body').removeClass('mobileBody-scroll');
        $('.burger').removeClass('-open');
        $('.navigation__userPanel').removeClass('userPanelShow');
        $('.header__logo').removeClass('mobileLogo');
        $('.header__logo span').removeClass('mobileLogoSpan');
        $('body, html').removeClass('mobileBody-scroll');
    });


    $('.burger').on('click', function () {
        $('.header__logo span').toggleClass('mobileLogoSpan');
        $('.header__logo').toggleClass('mobileLogo');
        $(this).toggleClass('-open');
        $('.navigation__userPanel').toggleClass('userPanelShow');
        $('.mobileMenu').toggleClass('mobileMenu-open');
        $('body, html').toggleClass('mobileBody-scroll');
    });

    if ($(window).width() <= 575) {
        $('.burger').on('click', function () {
            $('.header__login, .userbar').toggle();
        });

        $('.navigation__link').on('click', function () {
            $('.header__login, .userbar').show();
        });
    }


    //    burger end


    setTimeout(function () {
        $(".entry__title").css('display', 'inline');
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
            preStringTyped: function () {
            },

            //callback for every typed string
            onStringTyped: function () {
            },

            // callback for reset
            resetCallback: function () {
            }
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
        autoHeight: true,
        navigation: {
            nextEl: '.jsTestSliderNext',
            prevEl: '.jsTestSliderPrev',
        },
        pagination: {
            el: ".jsDefaultSliderPagination",
            clickable: false,
        },
        touchRatio: 0,
        slidesPerView: 1,

        on: {
            reachEnd: function () {
                $('.test__finish').toggleClass('-show');
            },
        }
    });
    $('.jsTestSliderPrev').on('click', function () {
        $('.test__finish').removeClass('-show');
    })

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
            }
            ;

            sliders[i].querySelector('.jsCounterCurrent').innerHTML = slidesActive;
            sliders[i].querySelector('.jsCounterTotal').innerHTML = swiperPaginationBullet.length;
        }
        ;
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


    // maodal window
    $('.test__close').on('click', function () {
        $('.modalWindow').css('display', 'flex');
    });

    $('.closeWindow-js').on('click', function () {
        $('.modalWindow').hide();
    });

    // maodal window end


    // $('.courseItem-js').on('click', function() {
    //     $(this).toggleClass('-active');
    // });


    let buttonDesabled = function () {
        var count = 0
        $('.control__input').each(function (index, value) {

            if ($(value).val() !== '') {
                count += 1
                $('.login__button').attr('disabled', 'disabled');

            }

        });
        if (count === $('.control__input').length) {
            $('.login__button').removeAttr('disabled');
        }

    }

    $(document).ready(function () {
        buttonDesabled()
    });


    $('.control__input').on('input', function (e) {
        buttonDesabled()
    })


});


// coments hide/show


// $('.more-main-js').on('click', function () {
//     $(this).parent().addClass('scroll-js');
//     $(this).remove();
//     $('.scroll-js').stop().animate({
//         scrollTop: $('.scroll-js')[0].scrollHeight
//     }, 2000);
// });


// coments hide/show end


$('#userDropdown').on('click', function () {
    $('#userDropdownMenu').show();
});
$(document).mouseup(function (e) {
    var div = $("#userDropdownMenu");
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.hide();
    }
});

$(document).mouseup(function (e) {
    var div = $(".certificate-wrap");
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.certificate-list').hide();
    }
});


var swiper = new Swiper('.expertSlider-js', {
    slidesPerView: 1,
    autoHeight: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

});




// $('#zoom').on('click', function (e) {
//     e.preventDefault();
//     $('#certificate').css('display', 'flex');
// });


$('.zoom').on('click', function (e) {
    e.preventDefault();
    $('#' + $(this).data('cert')).css('display', 'flex');
});


$('.textarea-trigger').on('click', function () {
    $(this).parent().find('.test__textarea').show().val('');
});


$('.check-trigger').on('click', function () {
    $(this).parent().parent().find('.test__textarea').val('').hide();
});

function getPDF() {
    doCanvas();
}

function doCanvas() {
    html2canvas(document.querySelector("#myDiv")).then(canvas => {
        doPDF(canvas);
    });

}

function doPDF(canvas) {
    var doc = new jsPDF('l', 'mm', [590, 435]);
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.addImage(canvas.toDataURL(), 'PNG', 0, 0, width, height);
    doc.save(cerfName);
    $('#preloader').hide();
}

var cerfName = $('.certificate-desc span').text();

$('.download-pdf').on('click', function (e) {
    e.preventDefault();
    $('#preloader').show();
});


var swiper = new Swiper('.courses-comments-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.comment-next',
        prevEl: '.comment-prev',
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

var widthImgExpert = $('.experts__foto img').width();
var halfWidthImgExpert = (widthImgExpert / 2);

var widthPagination = $('.experts .swiper-pagination').width();
var halfWidthPagination = (widthPagination / 2);
var indentPagination = (halfWidthImgExpert - halfWidthPagination);

$('.experts .swiper-pagination').css('left', indentPagination);


var widthExpertsInfo = $('.experts__info').width();
var widthSwiperNav = $('.experts .swiper-nav').width();
var indentSwiperNav = (widthExpertsInfo - widthSwiperNav);


$('.experts .swiper-nav').css('right', indentSwiperNav);






let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);