"use strict";$(document).ready(function(){function e(e){e.preventDefault();var n=$($(this).attr("href"));$("html, body").animate({scrollTop:n.offset().top},700)}jQuery(function(e){var n=e(".scrolltop");e(window).scroll(function(){n["fade"+(e(this).scrollTop()>220?"In":"Out")](500)})}),$(".scrolltop").click(function(){return $("body,html").animate({scrollTop:0},800),!1}),$("[data-scroll]").on("click",e);new Swiper(".mainSlider-js",{loop:!0,effect:"fade",autoplay:{delay:4e3,disableOnInteraction:!1}}),new Swiper(".object-js",{slidesPerView:1,autoplay:{delay:3200,disableOnInteraction:!1}}),new Swiper(".partners-js",{loop:!0,slidesPerView:5,spaceBetween:40,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}});$(".hamburger").click(function(){$(this).toggleClass("openClose"),$(".mnu-js").toggleClass("mobileMnu-js")}),$(".mnu-js").click(function(){$(this).removeClass("mobileMnu-js"),$(".hamburger").removeClass("openClose")});var n;DG.then(function(){n=DG.map("map",{center:[40.938028,72.993273],zoom:17});var e=L.icon({iconUrl:"images/marker.png",iconSize:[80,107]});DG.marker([40.938028,72.993273],{icon:e}).addTo(n).bindPopup("г. Жалал-Абад ул. Б. Осмонова на против стадиона Курманбек ")})});