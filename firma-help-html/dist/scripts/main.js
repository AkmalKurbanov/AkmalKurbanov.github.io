"use strict";!function(o){o(window).on("load",function(){o(".modalScroll-js").mCustomScrollbar({scrollButtons:{enable:!0}})})}(jQuery),$(".agree-js").on("click",function(){$("#offer").hide()}),$(".agree-js2").on("click",function(){$("#confidentiality").hide()}),$(".agree-js3").on("click",function(){$("#agree").hide(),$.cookie("modal","show",{expires:182}),$("body").removeClass("bodyScroll")}),"show"!==$.cookie("modal")&&($(".modal-agree").show(),$("body").addClass("bodyScroll"));if ($.cookie("questionBox") !== 'clicked') {
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

