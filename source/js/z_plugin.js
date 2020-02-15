// 作品輪播-Slick carousel
$(function() {
  $('.jq_carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function() {
    $('.jq_carousel').slick('resize');
  });
});
