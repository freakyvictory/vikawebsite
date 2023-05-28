$(function () {
  $(".slider__inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1600,
  })
})
$(function () {
  $(".works__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  })
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".works__inner",
    dots: true,
    centerMode: true,
    slick-dots: '<button class="slick-dots slider-nav"></button>',
    focusOnSelect: true,
  })
})

// $('.works__inner').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.works__inner',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
