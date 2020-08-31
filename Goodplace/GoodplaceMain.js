$(function(){
  $('.red_circle').mouseenter(function(){
    $('.red_circle_word').text('서울으로 가볼까요? 원을 클릭해주세요!');
  });
  $('.red_circle').mouseleave(function(){
    $('.red_circle_word').text('지역을 선택해주세요:)');
  });
});


$(function(){
  $('.red_circle1').mouseenter(function(){
    $('.red_circle_word').text('울산으로 가볼까요? 원을 클릭해주세요!');
  });
  $('.red_circle1').mouseleave(function(){
    $('.red_circle_word').text('지역을 선택해주세요:)');
  });
});
