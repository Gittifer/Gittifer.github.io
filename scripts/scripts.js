$(window).scroll(function(){
    $(".left").css("opacity", 1 - $(window).scrollTop() / 250);
  });
