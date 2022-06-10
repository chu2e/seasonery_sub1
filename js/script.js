

/*header-nav-sub*/

$(function(){
  $(".nav>li:nth-child(1)").mouseenter(function(){
    $(".sub1").stop().slideDown(300);
  });
  $(".nav>li:nth-child(1)").mouseleave(function(){
    $(".sub1").stop().slideUp(300);
  });
});
$(function(){
  $(".nav>li:nth-child(2)").mouseenter(function(){
    $(".sub2").stop().slideDown(300);
  });
  $(".nav>li:nth-child(2)").mouseleave(function(){
    $(".sub2").stop().slideUp(300);
  });
});


/*header-menubar*/

$(function(){
  $(".menu").mouseenter(function(){
    $(".menubar_sub").stop().slideDown(300);
  });
  $(".menu").mouseleave(function(){
    $(".menubar_sub").stop().slideUp(300);
  });
});




$(function(){
  AOS.init({
    duration: 1200
  });
});
