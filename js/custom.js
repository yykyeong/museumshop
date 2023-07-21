$(function () {


  /* header */
  const headerArea = $('.header-area');
  const indexHeaderArea = $('.index .header-area');
  const categoryMenuArea = $('.category-menu-area');
  const triggerBtn = $('.btn-trigger');


  $(window).resize(function () {
    if ($(window).innerWidth() > 767) {
      triggerBtn.click(function () {
        $(this).toggleClass('is-active');
        headerArea.addClass('is-active');
        categoryMenuArea.stop().slideToggle(300).toggleClass('is-active');
      })
      $('section').click(function(){
        triggerBtn.removeClass('is-active')
        categoryMenuArea.stop().slideUp(300);
      });
    } 
    else if ($(window).innerWidth() < 767) {
      triggerBtn.click(function () {
        categoryMenuArea.animate({
          'left': 0
        }, 300);
      })
      $('section, .btn-category-menu-close').click(function () {
        categoryMenuArea.animate({
          'left': -300
        }, 300);
      })
    }
  }).resize();


  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 180) {
      indexHeaderArea.addClass('is-active');
    } else {
      indexHeaderArea.removeClass('is-active');
    }
  });


  $('.prd_detail .header-area').addClass('is-active')


  /* category-list */
  $('.category-item  b').click(function () {
    $('.detail-list').slideUp(200);
    $(this).next().stop().slideDown(200);
    $(this).addClass('is-active');
    $(this).parent().siblings().children('b').removeClass('is-active');
  })



  /* search */
  const searchEl = $('.search-btn');
  const searchInputEl = searchEl.find('input');

  searchEl.click(function () {
    $(this).addClass('is-active');
    searchInputEl.focus();
  })

  $(searchInputEl).on('focus', function () {
    searchInputEl.attr('placeholder', '통합검색');
  });

  $(searchInputEl).on('blur', function () {
    searchEl.removeClass('is-active');
    searchInputEl.attr('placeholder', '');
  });



  /* deal_countdown  */
  $(".deal-countdown")
    .countdown("2023/12/25", function (event) {
      $(this).html(
        event.strftime('<span>%DDAY</span> %H : %M : %S')
      )
    })

  /* book_tab */
  $('.tab-list li').click(function () {
    $(this).addClass('is-active');
    $(this).siblings().removeClass('is-active')

    let tab = $(this).attr('data-tab')
    $(".tab-content").removeClass('is-active')
    $('#' + tab).addClass('is-active')
  })

  /* footer */
  $('.lnb-item-title').click(function(){
    $(this).next().stop().slideToggle(200);
    $(this).toggleClass('is-active');
  })


  $('.copyright-group .title').click(function(){
    $('address').toggle();
  })

  /* 제품 네비게이션 */
  $('.prd-info-navigation a').click(function(e){
    $(this).addClass('is-active').parent('li').siblings().find('a').removeClass('is-active');
    
    let linkLocation = $(this).attr('href');
    let offsetValue = 200
    $('html, body').animate({
      scrollTop: $(linkLocation).offset().top - offsetValue
    }, 700)

    e.preventDefault();
  })


  /* 배송/환불 */
  $('.refund-title').click(function(){
    $(this).toggleClass('is-active')
    $(this).next().stop().slideToggle(200)
  })


  /* 하트 */
  $('.fav-btn').click(function(){
    $(this).children().toggleClass('bi-heart bi-heart-fill')
    $(this).children().css({
      'color': 'red'
    })
  })

  /* 약관동의 */
  $('.agreement-item').click(function(){
    $(this).toggleClass('is-open')
  })

  /* 회원가입_비밀번호 */
  $('.toggle-pw').click(function(){
    $(this).toggleClass('bi-eye');
    const inputType =$(this).parent().children('input').attr('type');
    if(inputType == 'password') {
      $(this).parent().children('input').attr('type','text');
    } else {
      $(this).parent().children('input').attr('type','password');
    }
  })

  /* 장바구니 */
  $('.chkAll-group .btn-clearAll').click(function(){
    $('.cart-item').hide()
  })
  $('.cart-item .btn-clear').click(function(){
    $(this).parent().hide(100)
  })
  $('.chkALl').click(function(){
    $('.chk-status .chk').prop('checked', this.checked)
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
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false
        }
      }
    ]
  });











})