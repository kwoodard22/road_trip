
function ready() {
    $('#start_button').click(function() {
        carToCenter();
        $('#start_button').hide();
    });

    var carToCenter = function() {
    $('#car').animate({left: '42%'}, 2000, function() {
       questionAppear();
      });
    };

    var questionAppear = function() {
      $('#question_box').show();
    };

    var carToStart = function() {
      $('#car').animate({left: '-15%'}, 100, function() {
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

    // Adding question functionality

    // if id == option then wrong guess, but if id == answer, then right
    var answer = $('.answer');
    var responseToGuess = $('#responseToGuess');
    var option1 = $('.option1');
    var option2 = $('.option2');
    var option3 = $('.option3');
    var pointsEarned = $('#pointsEarned');
    var continueOn = $('#continueOn')
    var points = 4;
    var guess;

    var changeToNextQuestion = function() {
      // need to produce next question - how to get array to go to next state
    };

    var pointOrPoints = function() {
      if (points == 1) {
        return " point";
      } else {
        return " points";
      };
    };

    answer.on('click', function(event) {
      responseToGuess.text('Correct!');
      pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
      continueOn.show();
    })

    continueOn.on('click', function() {
      correctAnswerAdvancement();
    })

    option1.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option1.text() + '.').delay( 800 ).fadeIn( 1000 );
      if (points != 0) { points--; };
    })
    option2.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option2.text() + '.').delay( 800 ).fadeIn( 1000 );
      if (points != 0) { points--; };
    })
    option3.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option3.text() + '.').delay( 800 ).fadeIn( 1000 );
      if (points != 0) { points--; };
    })
}

$(document).ready(ready);
$(document).on('page:load', ready);

