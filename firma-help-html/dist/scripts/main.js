"use strict";!function(o){o(window).on("load",function(){o(".modalScroll-js").mCustomScrollbar({scrollButtons:{enable:!0}})})}(jQuery),if ($.cookie("questionBox") !== 'clicked') {
    setTimeout(function () {
        $('.questionBox').addClass('askQuestion');
    }, 30000);

    $('.questionBox__close').on('click', function () {
        $('.questionBox').removeClass('askQuestion');
        $.cookie('questionBox', 'clicked', { expires: 300 });
    });
    $('.questionBox a').on('click', function () {
        $.cookie('questionBox', 'clicked', { expires: 300 });
    });
}

