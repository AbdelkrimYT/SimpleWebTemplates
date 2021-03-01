/*global $, alert, console*/

$(function () {
   'use strict';
$('html').niceScroll();
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top 
            }, 900);
            return false;
          }
        }
      });
    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 0;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

    $('.nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.nav li a').click(function () {        $('html,body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
    });




    $('.one.circle').circleProgress({
    value: 0.9
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
    });
        $('.two.circle').circleProgress({
    value: .85
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
    });
        $('.three.circle').circleProgress({
    value: .8
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
    });
        $('.foure.circle').circleProgress({
    value: .7
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
    });



    var scrollButton = $("#scroll-top");
    $("#scroll-top").click(function () {
         $('html, body').animate({scrollTop : 0},1900);
    });


    $(window).load(function () {
        $('.loading-overlay .sk-cube-grid').fadeOut(2000,
            function () {
                $(this).parent().fadeOut(2000,
                    function () {
                        $('body').css("overflow", "auto");
                        $(this).remove();
                    });
            });
    });

});