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

$('.works__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.works__inner'
});

// $('.works__inner').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.works__inner',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });