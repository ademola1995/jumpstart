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




var  scroll = 0;
 $(window) .scroll(function (){
    Var scrollTop = $(this) .$scrollTop();
if (scroll > scrollTop + 50){
    var top = $('.navbar') .navbar(height);
}
  

 }
    