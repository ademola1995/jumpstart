$(document).ready(function(){
    // Jumbotron background and text scroll every 4s with Slick plug-in
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
    });




var  $scrollDist = 0;
 $(window).scroll(function (){
    Var $scrollTop = $(this).$scrollTop();
if ($scrollDist > $scrollTop + 50){
  var heightTop = $('.navbar').navbar('height');
  $('.navbar').animate({top: '-' + heightTop}, 150);
}
  
 }
    