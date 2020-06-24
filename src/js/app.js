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

// easyMain
const easyMain = (num) => {
  $(".easyMain__section1__items").slick({
    infinite: true,
    slidesToShow: num,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: false,
    dots: true,
  });
};
if ($(window).width() < "1050" && $(window).width() >= "770") {
  easyMain(3);
} else if ($(window).width() < "770" && $(window).width() >= "575") {
  easyMain(2);
} else if ($(window).width() < "575") {
  easyMain(1);
}

if ($(window).width() < "1050") {
  $(".cards__inner").slick({
    infinite: true,
    slidesToShow: 3,
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

$(".scopeMain__content__second__text").click(function () {
  $(this).addClass("active");
  $(".scopeMain__input").addClass("active");
});

$(".scopeMain__content__btn").click(function () {
  $.ajax({
    method: "POST",
    url: "https://portal2.agentology.ru/api/agentology/",
    dataType: "json",
    data: {
      key: "a9fb7d0b-d818-4e24-d499-dda5cb02dc6f",
      operation: "user.registration",
      data: JSON.stringify({
        login: $(".scopeMain__content__input").val(),
        referer: $(".scopeMain__input").val(),
        type: "physical",
      }),
    },
  }).done(function (msg) {
    console.log("Sample of data:", msg);
  });
});

emptyObject();
