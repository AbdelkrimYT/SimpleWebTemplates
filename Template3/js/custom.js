$(function () {
    $(".toggle").click(function () {
        $(".nav").slideToggle();
    });
    /* Start Our Work */
    $(".button").click( function () {
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("1000");
        }else{
            $(".filter").not("." + value).hide("1000");
            $(".filter").filter("." + value).show("1000");
        }
    });

    /* Add Class Active For Link Work */

    $(".work .button").click( function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});