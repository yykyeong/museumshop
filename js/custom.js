$(function () {


  /* header */
  const indexHeaderArea = $('.index .header-area')
  const categoryMenuArea = $('.category-menu-area')
  const triggerBtn = $('.btn-trigger')
  const mobileWidth = 767
  
  function handleTriggerClick() {
    triggerBtn.toggleClass('is-active')
    
    if (categoryMenuArea.hasClass('is-active')) {
      categoryMenuArea.stop().slideUp(300).removeClass('is-active')
      indexHeaderArea.removeClass('is-active')

    } else {
      categoryMenuArea.stop().slideDown(300).addClass('is-active')
      indexHeaderArea.addClass('is-active')
    }
  }
  
  function handleScreenResize() {
    if ($(window).innerWidth() > mobileWidth) {
      triggerBtn.off('click', handleTriggerClick)
      triggerBtn.on('click', handleTriggerClick)
      $('section,.category-menu-area').on('click', function () {
        categoryMenuArea.stop().slideUp(300).removeClass('is-active');
      })

    } else {
      triggerBtn.off('click', handleTriggerClick)
      $('section').off('click', closeMenu)
      triggerBtn.on('click', openMenu)
      $('section, .btn-category-menu-close').on('click', closeMenu)
    }
  }


  
  
  function openMenu() {
    categoryMenuArea.animate({
      'left': 0
    }, 300)
  }
  
  function closeMenu() {
    categoryMenuArea.animate({
      'left': -300
    }, 300)
  }
  
  $(window).resize(handleScreenResize)
  
  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop()

    if (scrollTop > 180 || categoryMenuArea.hasClass('is-active')){
      indexHeaderArea.addClass('is-active')
    } else {
      indexHeaderArea.removeClass('is-active')
    }
  })


  handleScreenResize()

  
  function stopScroll() {
    $('body').addClass('fixed')
  }
  function playScroll() {
    $('body').removeClass('fixed')
  }


  $('.btn-login').click(function(){
    $('.login.dimmed-layer').removeClass('hidden')
    stopScroll()
  })
  $('.btn-modal-close').click(function(){
    $('.dimmed-layer').addClass('hidden')
    playScroll()
  })


  /* category-list */
  $('.category-item b').click(function () {
    $('.detail-list').slideUp(200)
    $(this).next().stop().slideDown(200)
    $(this).addClass('is-active')
    $(this).parent().siblings().children('b').removeClass('is-active')
  })



  /* search */
  const searchEl = $('.search-btn')
  const searchInputEl = searchEl.find('input')

  searchEl.click(function () {
    $(this).addClass('is-active')
    searchInputEl.focus()
  })

  $(searchInputEl).on('focus', function () {
    searchInputEl.attr('placeholder', '통합검색')
  })

  $(searchInputEl).on('blur', function () {
    searchEl.removeClass('is-active')
    searchInputEl.attr('placeholder', '')
  })



  /* deal_countdown  */
  $(".deal-countdown")
    .countdown("2023/12/25", function (event) {
      $(this).html(
        event.strftime('<span>%DDAY</span> %H : %M : %S')
      )
    })

  /* book_tab */
  $('.tab-list li').click(function () {
    $(this).addClass('is-active')
    $(this).siblings().removeClass('is-active')

    let tab = $(this).attr('data-tab')
    $(".tab-content").removeClass('is-active')
    $('#' + tab).addClass('is-active')
  })

  /* footer */
  $('.lnb-item-title').click(function(){
    $(this).next().stop().slideToggle(200)
    $(this).toggleClass('is-active')
  })

  $('.copyright-group .title').click(function(){
    $('address').toggle()
  })

  /* 위로가기 */
  $(window).scroll(function(){
    if($(this).scrollTop() > 400) {
      $('.topbtn').addClass('is-active')
    } else {
      $('.topbtn').removeClass('is-active')
    }
  })

  $('.topbtn').click(function(){
    $('html, body').animate({scrollTop:0}, 500)
  })

  /* 제품 네비게이션 */
  $('.prd-info-navigation a').click(function(e){
    $(this).addClass('is-active').parent('li').siblings().find('a').removeClass('is-active')
    
    let linkLocation = $(this).attr('href')
    let offsetValue = 200
    $('html, body').animate({
      scrollTop: $(linkLocation).offset().top - offsetValue
    }, 700)

    e.preventDefault()
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

  /* 공유하기 */
  $('.share-btn').click(function(){
    $('.share.dimmed-layer').removeClass('hidden')
    stopScroll()
    stopScroll()
  })
  $('.share-link').click(function(){
    $('.copied-link').show().delay(700).fadeOut()
    playScroll()
  })

  /* 약관동의 */
  $('.agreement-item').click(function(){
    $(this).toggleClass('is-open')
  })

  /* 회원가입_비밀번호 */
  $('.toggle-pw').click(function(){
    $(this).toggleClass('bi-eye')
    const inputType =$(this).parent().children('input').attr('type')
    if(inputType == 'password') {
      $(this).parent().children('input').attr('type','text')
    } else {
      $(this).parent().children('input').attr('type','password')
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
  })

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
  })

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
  })



})