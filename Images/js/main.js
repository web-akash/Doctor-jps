// $(document).ready(function () {
//   $(".navbar-toggler").on("click", function () {
//     $("#sidebar").slideToggle();
//   });
// });

// Tushar v1.0.0

$(function () {
  $(".show").on("click", function () {
    $(".sidebar").css("right", "0px");
  });
  $(".close").on("click", function () {
    $(".sidebar").css("right", "-100%");
  });

  $(".banner-main").slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: '<i class="fa-solid fa-arrow-left left-arrow"></i>',
    // nextArrow: '<i class="fa-solid fa-arrow-right right-arrow"></i>',
    pauseOnHover: false,
    arrows: false,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 150) {
      $(".extra-button").fadeIn(200);
    } else {
      $(".extra-button").fadeOut(200);
    }
  });

  $(".extra-btn-top").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });
});

// else if (scrolling > 1500) {
//   $(".extra-button").fadeOut(200);
// }
