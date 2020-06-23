const emptyObject = () => "ES6!";

if ($(window).width() > "1050") {
  $(".sliderMain__container__sections").slick({
    infinite: true,
    slidesToShow: 1,
    cssEase: "linear",
    autoplaySpeed: 0,
    appendArrows: $(".sliderMain__container__arrows"),
    prevArrow: $(".sliderMain__arrow__left"),
    nextArrow: $(".sliderMain__arrow__right"),
  });
} else {
  $(".sliderMain__container__sections").slick({
    infinite: true,
    slidesToShow: 1,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: false,
    dots: true,
  });
}

if ($(window).width() < "1050" && $(window).width() >= "770") {
  $(".easyMain__section1__items").slick({
    infinite: true,
    slidesToShow: 3,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: false,
    dots: true,
  });
} else if ($(window).width() < "770" && $(window).width() >= "575") {
  $(".easyMain__section1__items").slick({
    infinite: true,
    slidesToShow: 2,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: false,
    dots: true,
  });
} else if ($(window).width() < "575") {
  $(".easyMain__section1__items").slick({
    infinite: true,
    slidesToShow: 1,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: false,
    dots: true,
  });
}

$(".js-tab-trigger-questionsMain").click(function () {
  var id = $(this).attr("data-tab");
  $(this).toggleClass("active");
  $('.js-tab-content-questionsMain[data-tab="' + id + '"]').toggleClass(
    "active"
  );
});

// if ($(window).width() > "768") {
//   $(".educationSlider__content__spikers").slick({
//     infinite: true,
//     slidesToShow: 3,
//     cssEase: "linear",
//     autoplaySpeed: 0,
//     appendArrows: $(".question__route"),
//     prevArrow: $(".educationSlider__content__arrow__left"),
//     nextArrow: $(".educationSlider__content__arrow__right"),
//   });
// } else {
//   $(".educationSlider__content__spikers").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     appendArrows: $(".question__route"),
//     prevArrow: $(".educationSlider__content__arrow__left"),
//     nextArrow: $(".educationSlider__content__arrow__right"),
//   });
// }

emptyObject();
