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

$(".card-img-overlay").hover(function(){
  $(this).animate({
    opacity:1
  },500);
}, function(){
  $(this).animate({
    opacity:0
  },500);
});

$(".coming-soon").hover(function(){
  $(this).css({border: "0 solid #428bca"}).animate({
    borderWidth: 3
  }, 250);
},function () {
  $(this).animate({
    borderWidth: 0
  }, 250);
});

$(".coming-soon").click(function(){
  $(this).html("<h4 class='card-title'>???</h4><h6 class='card-subtitle mb-2 text-muted'>Coming Soon</h6><p class='card-text'>Voice recognition assistant (still defining)</p>");
});




                
