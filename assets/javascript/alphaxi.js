$(document).ready(function() {
    // all custom jQuery will go here

    $("#button").click(function(){
      $(this).css("font-weight","bold");
    });


    $(".photo").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });


    $('a img').animate({opacity: 0.5});

    $('a img').hover(function(){
      $(this).stop().animate({opacity:1});
    }, function(){
      $(this).stop().animate({opacity: 0.5});
    });
});
