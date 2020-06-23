"use strict";

var emptyObject = function emptyObject() {
  return "ES6!";
};

if ($(window).width() > "1050") {
  $(".sliderMain__container__sections").slick({
    infinite: true,
    slidesToShow: 1,
    cssEase: "linear",
    autoplaySpeed: 0,
    appendArrows: $(".sliderMain__container__arrows"),
    prevArrow: $(".sliderMain__arrow__left"),
    nextArrow: $(".sliderMain__arrow__right")
  });
} else {
  $(".sliderMain__container__sections").slick({
    infinite: true,
    slidesToShow: 1,
    cssEase: "linear",
    autoplaySpeed: 0,
    arrows: false,
    dots: true
  });
} // if ($(window).width() > "768") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJlbXB0eU9iamVjdCIsIiQiLCJ3aW5kb3ciLCJ3aWR0aCIsInNsaWNrIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJjc3NFYXNlIiwiYXV0b3BsYXlTcGVlZCIsImFwcGVuZEFycm93cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFycm93cyIsImRvdHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNLE1BQU47QUFBQSxDQUFwQjs7QUFFQSxJQUFJQyxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxLQUFWLEtBQW9CLE1BQXhCLEVBQWdDO0FBQzlCRixFQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0csS0FBdEMsQ0FBNEM7QUFDMUNDLElBQUFBLFFBQVEsRUFBRSxJQURnQztBQUUxQ0MsSUFBQUEsWUFBWSxFQUFFLENBRjRCO0FBRzFDQyxJQUFBQSxPQUFPLEVBQUUsUUFIaUM7QUFJMUNDLElBQUFBLGFBQWEsRUFBRSxDQUoyQjtBQUsxQ0MsSUFBQUEsWUFBWSxFQUFFUixDQUFDLENBQUMsZ0NBQUQsQ0FMMkI7QUFNMUNTLElBQUFBLFNBQVMsRUFBRVQsQ0FBQyxDQUFDLDBCQUFELENBTjhCO0FBTzFDVSxJQUFBQSxTQUFTLEVBQUVWLENBQUMsQ0FBQywyQkFBRDtBQVA4QixHQUE1QztBQVNELENBVkQsTUFVTztBQUNMQSxFQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0csS0FBdEMsQ0FBNEM7QUFDMUNDLElBQUFBLFFBQVEsRUFBRSxJQURnQztBQUUxQ0MsSUFBQUEsWUFBWSxFQUFFLENBRjRCO0FBRzFDQyxJQUFBQSxPQUFPLEVBQUUsUUFIaUM7QUFJMUNDLElBQUFBLGFBQWEsRUFBRSxDQUoyQjtBQUsxQ0ksSUFBQUEsTUFBTSxFQUFFLEtBTGtDO0FBTTFDQyxJQUFBQSxJQUFJLEVBQUU7QUFOb0MsR0FBNUM7QUFRRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBYixXQUFXIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtcHR5T2JqZWN0ID0gKCkgPT4gXCJFUzYhXCI7XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiBcIjEwNTBcIikge1xyXG4gICQoXCIuc2xpZGVyTWFpbl9fY29udGFpbmVyX19zZWN0aW9uc1wiKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIGNzc0Vhc2U6IFwibGluZWFyXCIsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAwLFxyXG4gICAgYXBwZW5kQXJyb3dzOiAkKFwiLnNsaWRlck1haW5fX2NvbnRhaW5lcl9fYXJyb3dzXCIpLFxyXG4gICAgcHJldkFycm93OiAkKFwiLnNsaWRlck1haW5fX2Fycm93X19sZWZ0XCIpLFxyXG4gICAgbmV4dEFycm93OiAkKFwiLnNsaWRlck1haW5fX2Fycm93X19yaWdodFwiKSxcclxuICB9KTtcclxufSBlbHNlIHtcclxuICAkKFwiLnNsaWRlck1haW5fX2NvbnRhaW5lcl9fc2VjdGlvbnNcIikuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBjc3NFYXNlOiBcImxpbmVhclwiLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiBcIjc2OFwiKSB7XHJcbi8vICAgJChcIi5lZHVjYXRpb25TbGlkZXJfX2NvbnRlbnRfX3NwaWtlcnNcIikuc2xpY2soe1xyXG4vLyAgICAgaW5maW5pdGU6IHRydWUsXHJcbi8vICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbi8vICAgICBjc3NFYXNlOiBcImxpbmVhclwiLFxyXG4vLyAgICAgYXV0b3BsYXlTcGVlZDogMCxcclxuLy8gICAgIGFwcGVuZEFycm93czogJChcIi5xdWVzdGlvbl9fcm91dGVcIiksXHJcbi8vICAgICBwcmV2QXJyb3c6ICQoXCIuZWR1Y2F0aW9uU2xpZGVyX19jb250ZW50X19hcnJvd19fbGVmdFwiKSxcclxuLy8gICAgIG5leHRBcnJvdzogJChcIi5lZHVjYXRpb25TbGlkZXJfX2NvbnRlbnRfX2Fycm93X19yaWdodFwiKSxcclxuLy8gICB9KTtcclxuLy8gfSBlbHNlIHtcclxuLy8gICAkKFwiLmVkdWNhdGlvblNsaWRlcl9fY29udGVudF9fc3Bpa2Vyc1wiKS5zbGljayh7XHJcbi8vICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuLy8gICAgIHNsaWRlc1RvU2hvdzogMyxcclxuLy8gICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4vLyAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4vLyAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuLy8gICAgIGFwcGVuZEFycm93czogJChcIi5xdWVzdGlvbl9fcm91dGVcIiksXHJcbi8vICAgICBwcmV2QXJyb3c6ICQoXCIuZWR1Y2F0aW9uU2xpZGVyX19jb250ZW50X19hcnJvd19fbGVmdFwiKSxcclxuLy8gICAgIG5leHRBcnJvdzogJChcIi5lZHVjYXRpb25TbGlkZXJfX2NvbnRlbnRfX2Fycm93X19yaWdodFwiKSxcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuZW1wdHlPYmplY3QoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
