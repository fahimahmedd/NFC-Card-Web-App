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


  var swiper = new Swiper(".cardSwipper", {
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Review Swipper
  // var swiper = new Swiper(".reviewSwipper", {
  //   spaceBetween: 30,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   autoplay: {
  //     delay: 3500,
  //     disableOnInteraction: false,
  //   },
  // });
 
 // Question Category Slider
 var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: "auto",
  spaceBetween: 22,
  centeredSlides: true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    reverseDirection: false,         // added
},
speed: 8000,
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
    if ($(this).scrollTop() > 200) {
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
 // Hero Section 
  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 560) {
  //      $('.sticky-hero').addClass('sticky-hero-2');
  //   } else {
  //      $('.sticky-hero').removeClass('sticky-hero-2');
  //   }
  // });

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