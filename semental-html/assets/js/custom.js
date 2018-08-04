$(document).ready(function() {

  $(".bxslider").bxSlider({
    pager: false
});
  //Fancybox
  $(".fancybox").fancybox({
    helpers : {
      overlay : {
        locked : false // try changing to true and scrolling around the page
      }
    }
  });
  /* Smooth Scroll */
  $(function() {
    $('a[href*=#]:not([href=#callbackform])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1200);
          return false;
        }
      }
    });
  });

/*появление через время после захода на страницу
  setTimeout(function(){
    $('#rc-phone-form').animate({width:'605%'}).removeClass('closed');
    $('#rc-phone-form-close').removeClass('closed');
  }, 11000);
*/
 $('#rc-phone-icon').click(function(){
   if($(this).hasClass('fa-times')){
    $(this).removeClass('fa-times');
    $(this).addClass('fa-phone');
    $('#rc-phone-form').animate({width:'50px'});
    setTimeout(function(){$('#rc-phone-form').addClass('closed');}, 600);
   } 
   });
  $('#rc-phone-form').click(function(){
    if($(this).hasClass('closed')){
      $('#rc-phone-icon').removeClass('fa-phone');
      $('#rc-phone-icon').addClass('fa-times');
      $('#rc-phone-form').animate({width:'605%'}).removeClass('closed');
      setTimeout(function(){$('#rc-phone-form').addClass('opened');}, 600);
    }
  });

  $('#callback').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310 
     });
  $('#callback').fancybox({
    helpers: {
        overlay: {
            locked: false
        }
    }
});

});