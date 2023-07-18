$(function () {




  /* deal_countdown  */
  $(".deal-countdown")
  .countdown("2023/12/25", function(event){
    $(this).html(
      event.strftime('<span>%DDAY</span> %H : %M : %S')
    )
  })




  /* visual */
  $('.visual-list').slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    speed: 300,
    pauseOnHover: true
  });

  /* best */
  $('.best-group .prd-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,


    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  /* new */
  $('.new-group .prd-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,


    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      }
    ]
  });











})