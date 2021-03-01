/*global $, alert, console*/

$(function () {

	'use strict';
    $('html').niceScroll();

    /**********************************
    ********** START NAVBAR **********
    **********************************/
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });

    $('.nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.nav li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });


    /**********************************
    ********** START PORTFOLIO ********
    **********************************/
    $(window).load(function () {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function () {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
            
                /************************** 
******************  LOADING OVERLAY *********************
                ***************************/

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
                /************************** 
****************** SCROLL TOP *********************
                ***************************/
    var scrollButton = $("#scroll-top");
    $("#scroll-top").click(function () {
         $('html, body').animate({scrollTop : 0},1900);
    });

});