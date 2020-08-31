$(document).ready(function(){
  $(".outer-menu-item").hover(function(){
    $(".inner-menu",this).stop().slideDown(300);
  },

  function(){
    $(".inner-menu",this).stop().slideUp(300);
  });
})
