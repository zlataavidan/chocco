$(document).ready(() => {
  // review carousel
  $('.interactive-avatar__link').on('click', function(event) {
      // disable default anchor behaviour
      event.preventDefault();
      
      // get the review ID from data attribute
      const review = $(this).parent().data('review');

      // clear previous active
      $('.reviews__display-inner.active').removeClass('active');
      $('.reviews__switcher-item.interactive-avatar--active').removeClass('interactive-avatar--active');

      // add new active class
      $(`.reviews__display-inner[data-review='${review}']`).addClass('active');
      $(`.reviews__switcher-item[data-review='${review}']`).addClass('interactive-avatar--active');
  });
      // hamburger menu
      $('.hamburger').on('click', (event) => {
        event.preventDefault();
        $('.menu').toggleClass('active');
      });
});