'use strict';

$(document).ready(function () {

  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.phoneContacts, .menu').toggleClass('show');
    $('.leftColWrap').toggleClass('mobileMenu');
    $('.leftCol').toggleClass('mobileMenu-js');
  });
  // hamburger end


  // button up
  $('.upAnchor').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  // button up end

  // nav button
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }
  $('[data-scroll]').on('click', scrollToSection);
  // nav button end

  // active menu
  $('.menu a').click(function () {
    $('li a').removeClass('menu__item--active');
    $(this).addClass('menu__item--active');
    $('.leftCol').removeClass('mobileMenu-js');
    $('.menu, .phoneContacts').removeClass('show');
    $('.leftColWrap').removeClass('mobileMenu');
    $('.hamburger').removeClass('openClose');
  });

  $('.navButtons a').click(function () {
    $('li a').removeClass('navButtons__item--active');
    $(this).addClass('navButtons__item--active');
  });
  // active menu end


  // active menu item on scroll
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.indent').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.menu a.menu__item--active').removeClass('menu__item--active');
        $('.menu a').eq(i).addClass('menu__item--active');
      }
    });
  }).scroll();

  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.indent').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.navButtons a.navButtons__item--active').removeClass('navButtons__item--active');
        $('.navButtons a').eq(i).addClass('navButtons__item--active');
      }
    });
  }).scroll();
  // active menu item on scroll end


  //E-mail Ajax Send
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      $.fancybox.open({
        src: '#thankMessage',
        type: 'inline'
      });
      midClick: true;
    });
    return false;
  });
});