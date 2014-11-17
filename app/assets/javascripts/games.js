
$(document).ready(function () {
    $('#start_button').click(function() {
        carToCenter();
    });

    $('#correct_answer').click(function() {
        correctAnswerAdvancement();
    });
});

var carToCenter = function() {
  $('#car').animate({left: '580px'}, 2000, function() {
    questionAppear();
  });
};

var questionAppear = function() {
  $('#question_box').show();
};

var carToStart = function() {
  $('#car').animate({left: '-10%'}, 500, function() {
    $('#car').show(function() {
      carToCenter();
    });
  });
};

var correctAnswerAdvancement = function() {
  $('#question_box').hide();
  $('#car').animate({left: '100%'}, 2000, function() {
    $('#car').hide(function() {
      carToStart();
    });
  });
};
