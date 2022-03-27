 $(function() {
  $(".l-hamburger__trigger").on('click', function(){
   if($('.l-nav').css('display') === 'none'){
  $('.l-hamburger__trigger').addClass('active');
  $('.l-nav').fadeToggle(500);
  $('body').addClass('l-JSnoscroll');
   } else {
     $(".l-hamburger__trigger").removeClass("active");
     $("body").removeClass("l-JSnoscroll");
     $(".l-nav").fadeOut("slow");
   }
  });
  
 //animate.css 
 new WOW().init();  
 });

 $(window).on('load scroll', function (){
  var box = $('.l-JSbox');
  var isPlay= 'l-JSisPlay';
  box.each(function () {
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if(scrollPos > boxOffset - wh + (wh / 2) ){
      $(this).addClass(isPlay);
    }
  });
});

/*****************************
gotoTop
*****************************/
var gototop = $('#gototop');
var flag = false;
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    if(flag === false){
      flag = true;
      gototop.stop().animate({'bottom':'20px'}, 200);
    }
  }else{
    if(flag){
      flag = false;
      gototop.stop().animate({'bottom': '-60px'}, 200);
    }
  }
});

/*****************************
 Smooth scroll
*****************************/
$('a[href^="#"]').click(function() {
  var href= $(this).attr("href");
  var target = 0;
  var adjust = '';
  if(href == "#" || href == ""){
    target = $('html');
  } else {
    target = $(href);
    //header固定の場合
    adjust = -0;
  }
  var position = target.offset().top + adjust;
  $('body,html').animate({scrollTop:position}, 400, 'swing');
  return false;
});

/*****************************
 slick
*****************************/
	$('.js-slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  dots: true,
  arrows: true,
  infinite: true,
  pauseOnHover: true,
  centerMode:true,
  centerPadding:"20%",
  responsive: [{
    breakpoint: 767,
      settings: {
        centerPadding:"5%",
    }
  }
  ]  
	});

