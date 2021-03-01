/* global $, alert, console */

$(function () {

	'use strict';
/********************* NAVBAR SCROLL **********************/
	    $(window).bind('scroll', function() {
        var navHeight = $(window).height();
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('navbar-fixed-top');
        } else {
            $('.navbar-default').removeClass('navbar-fixed-top');
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

/********************** WATCH THE VIDEO **********************/

$('.click-play').click(function () {
    $('.bloxPopup').lightboxController({
        appendRegion:   '.contentWrap',
		opened:			function(){console.log("overlay opened");},
		closed:			function(){console.log("overlay closed");}
    });

});

/********************** PROGRESS PAR **********************/
     setTimeout(function(){
    $('.progress-bar').each(function() {
        var me = $(this);
        var pe =  $(this).children('.precent-value');
        var perc = me.attr("aria-valuenow");
        var current_perc = 0;
        var progress = setInterval(function() {
            if (current_perc>=perc) {
                clearInterval(progress);
            } else {
                current_perc +=1;
                me.css('width', (current_perc)+'%');
            }
            pe.text((current_perc)+'%');
        },90);
    });
}, 700);



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

    $('.owl-carousel').owlCarousel({
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




});