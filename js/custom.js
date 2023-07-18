$(function(){


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
  $('.prd-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true,
    dots: false,


    responsive: [
      {
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