$(window).scroll(function() {
  var hT = $("#skills").offset().top,
    hH = $("#skills").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
    $(".skillbar").each(function(){
      $(this).find(".skillbar-bar").animate({
        width:$(this).attr("data-percent")
      },4000);
    });
  }
});
