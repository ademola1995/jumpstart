$(document).ready(function(){
  
    $('.carousel').slick({
      slidesToScroll:1,
     autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
    draggable: false,
      pauseOnFocus: false,
     pauseOnHover: false,
    });
   


var  $scrollDist = 0;
  $(window).scroll(function (){
    var $scrollTop = $(this).scrollTop();
{if ($scrollTop - $scrollDist > 50)
 var heightTop = $('.navbar').css('height');
  $('.navbar').animate({top: '-' + heightTop}, 150);
 $scrollDist = $scrollTop;
  } else if($scrollDist - $scrollTop > 50 ){
    $('.navbar').animate({top:'0px'},150);
    $scrollDist = $scrollTop;
    
}
});
});  
