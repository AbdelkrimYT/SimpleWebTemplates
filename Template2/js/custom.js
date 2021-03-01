$(function () {

    $('.navbar-nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }) ;
    //Navbar Fixed top

    $(window).bind('scroll', function () {
        var navHight = $(window).height() - 100;
        if($(window).scrollTop() > navHight){
            $('.navbar').addClass('fixed-top');
        }else{
            $('.navbar').removeClass('fixed-top');
        }
    }) ;

    $('.navbar-nav li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000);
    });

    // Portfolio Section
    $('.portfolio ul li').click(function () {
        var value = $(this).attr("data-filter");
        if(value == 'all'){
            $('.filter').show('1000');
        }else{
            $('.filter').not('.'+value).hide('1000');
            $('.filter').filter('.'+value).show('1000');
        }
    });
    $('.portfolio ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
        $('#progressbar1').LineProgressbar({
            percentage: 70,
            fillBackgroundColor: '#278fee'
        });
        $('#progressbar2').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#278fee'
        });
        $('#progressbar3').LineProgressbar({
            percentage: 95,
            fillBackgroundColor: '#278fee'
        });
});