
$(document).ready(function () {
    $('#start_button').click(function() {
        carToCenter();
    });

    $('#correct_answer').click(function() {
        correctAnswerAdvancement();
    });
});

var carToCenter = function() {
  $('#car').animate({left: '50%'}, 4000);
};

var correctAnswerAdvancement = function() {
  $('#car').animate({left: '100%'}, 4000);
};
