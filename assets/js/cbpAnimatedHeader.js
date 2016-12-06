$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('.navbar-default').addClass('cbp-af-header-shrink');
        }
        else{
            $('.navbar-default').removeClass('cbp-af-header-shrink');
        }
    });
});