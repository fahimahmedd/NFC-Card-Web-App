$(function () {

  // Counter
  $(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });


  // Hero Swipper
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
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    reverseDirection: false,      
},
speed: 8000,
});


// Webcard Swipper Js
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2",{
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
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