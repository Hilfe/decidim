//= require foundation
//= require modernizr
//= require owl.carousel.min
//= require svg4everybody.min
//= require appendAround

//= require decidim/comments/comments

/* globals svg4everybody */

$(document).on('turbolinks:load', () => {
  $(document).foundation();
  $('.js-append').appendAround();
  svg4everybody();
});
