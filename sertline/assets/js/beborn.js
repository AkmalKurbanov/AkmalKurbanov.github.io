(function($) {
    "use_strict";
  
    /**********************\
     // Theme General scripts
    /************************/
  
  $('.contact-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    return false;
  } else {
    e.preventDefault();
    var name = $('.contact-form').find('input[name="name"]').val();
    var email = $('.contact-form').find('input[name="email"]').val();
    var phone = $('.contact-form').find('input[name="phone"]').val();
    var subject = $('.contact-form').find('input[name="subject"]').val();
    var message = $('.contact-form').find('textarea[name="message"]').val();
    $.ajax({
      type: "POST",
      url: "contact.php",
      data:{
        name:name,
        email:email,
        phone:phone,
        subject:subject,
        message:message
      },
      success: function() {
        $('.contact-form').find('input[name="name"]').val('');
        $('.contact-form').find('input[name="email"]').val('');
        $('.contact-form').find('input[name="phone"]').val('');
        $('.contact-form').find('input[name="subject"]').val('');
        $('.contact-form').find('textarea[name="message"]').val('');
        $('.success-message').css({
          opacity:1
        });
      }
    });

}

})
    $(window).on('load', function() {
        $('#page-loader').fadeOut('fast', function() {
            $(this).remove();
        });
    });
    // Smooth Scrolling
    $('.scrolling, .navbar-brand').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.nav.navbar-nav > li').on('click', 'a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    /// Fix nav top 
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 5) {
            $('#main-nav').addClass('is-scrolling');
        } else {
            $('#main-nav').removeClass('is-scrolling');
        }
    });

    //close collapse nav after select 
    $(".nav.navbar-nav > li ").on('click', 'a', function() {
        $(".navbar-collapse.collapse").removeClass('in');
    });
   
    /// Scroll to top
      var doc_height = $(document).height();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > (doc_height - 100)) {
            $('.scroll-top.active').removeClass('active');
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });
    $('.scroll-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


  
  /**********************\
   // Intro popup video
  /************************/
  $('.play-video').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });


  /**********************\
   // feature slider
  /************************/
  $('.feature-slider').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      margin: 30,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
          1200: {
              items: 3
          },
          980: {
              items: 2
          },
          767: {
              items: 2
          },
          0: {
              items: 1
          },
      }
  });


  /**********************\
   // feature slider
  /************************/
  $('.feature-slider').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      margin: 30,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
          1200: {
              items: 3
          },
          980: {
              items: 2
          },
          767: {
              items: 2
          },
          0: {
              items: 1
          },
      }
  });



  /**********************\
   // testimonil slides
  /************************/
  $('.testimonial-slides').owlCarousel({
      singleItem: true,
      items: 1,
      autoplay: true,
      loop: true,
      smartSpeed: 1000,
      dots: true,
      pagination: true,
  });


  /**********************\
   // benefit slides
  /************************/
  $('.benefit-slides').owlCarousel({
      items: 3,
      dots: true,
      responsive: {
          1200: {
              items: 3
          },
          980: {
              items: 2
          },
          767: {
              items: 2
          },
          0: {
              items: 1
          },
      }
  });


  /**********************\
   // Fun fact count
  /************************/
  $('.count').countTo();

  
  
  /**********************\
   // Twitter Feed Init
  /************************/
  $('.tweet').twittie({
      dateFormat: '%b. %d, %Y',
      template: '<a href="{{url}}" target="_blank">{{tweet}}</a>',
      count: 2,
      hideReplies: true
  });

  
  /**********************\
   // Wow Animation
  /************************/
  if ($(window).width() > 767) {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: false,
      live: true
    });
    wow.init();
  }

  
  /**********************\
  // Parallax Js init 
  /************************/
  if ($(window).width() > 767) {
      $('#fun-facts').parallax("50%", 0.1);
  }else{
    $('#fun-facts').css({
      backgroundAttachment:'scroll'
    });
  }

  
  /**********************\
  // Instafeed.js init 
  /************************/
  var feed = new Instafeed({
      get: 'user',
      userId: 94764,
      accessToken: '94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5',
      limit: 6,
      after: function() {
          var el = document.getElementById('instagram');
      }
  });

  feed.run();
  
  
  // handle theme colors
  $('.switcher-trigger').click(function(){
     $('.switcher-wrap').toggleClass('active');
   });
  
   $(function () {
      var setColor = function (color) {
          $('#theme-color').attr("href", "assets/css/color/" + color + ".css");
      }
      $('.color-switcher ul').on('click', 'li', function () {
          var color = $(this).attr("data-color");
          setColor(color);
          $('.color-switcher ul li').removeClass('active');
          $(this).addClass('active');
      });


  });
    
  



}(jQuery));