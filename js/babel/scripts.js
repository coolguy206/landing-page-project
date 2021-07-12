"use strict";

$(document).ready(function () {
  console.log('ready');
  $(window).on('scroll', function (e) {
    if (window.pageYOffset > 98) {
      $('.wrapper header').addClass('sticky');
    } else {
      $('.wrapper header').removeClass('sticky');
    }
  });
});
