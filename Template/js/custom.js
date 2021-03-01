$(function () {
   $('.nav li').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
   }) ;

   $(window).bind('scroll', function () {
       var navHight = $(window).height() - 100;
       if($(window).scrollTop() > navHight){
           $('.navbar').addClass('navbar-fixed-top');
       }else{
           $('.navbar').removeClass('navbar-fixed-top');
       }
   }) ;

   $('.nav li a').click(function () {
      $('html,body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top
      },1000);
   });
   // owl carousel happy-custom
    $('.owl-carousel-custom').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // owl-carousal-client
    $('.owl-carousel-client').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // Start Counter
    $('.counter').counterUp({
        delay: 10,
        time:2000
    });


});