$(function () {

  var swiper = new Swiper(".heroSwipper", {
    spaceBetween: 5,
    effect: "fade",
    speed: 1500,
    cssEase: 'linear',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  // Review Swipper
  var swiper = new Swiper(".reviewSwipper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  // Back to Top 
  var btn = $('.backtotop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // Header Sticky 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 140) {
       $('.header').addClass('sticky-nav');
    } else {
       $('.header').removeClass('sticky-nav');
    }
  });
  // Hero Section 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('.hero').addClass('sticky-hero');
    } else {
       $('.hero').removeClass('sticky-hero');
    }
  });

});


// Aos Animation
AOS.init();


// lighBox 
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

// VenuBox
new VenoBox({
  selector: '.my-video-links',
});

// Loader 
$(window).on("load", function(){
  $('#loading-screen').fadeOut(500);    
});