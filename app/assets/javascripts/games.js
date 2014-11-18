
function ready() {
    var stopNum = 1;
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
    var finalScore = 0;
    var guess;

    var changeAnswerOptions = function(data) {
      
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
      $('.option_selections').hide();
      $('#responseToGuess').hide();
      $('#pointsEarned').hide();
      $('#conintueOn').hide(); // Need this to hide continue button. Always shows
      $.getJSON("/next_state",{stop_num: stopNum},function(data){
        stopNum++;
        $('#question_box h2').text("What is the capital of " + data.state + "?");
        for (var i = 0; i < data.options.length; i++) {
          $('#question_box').append("<button class=" +  data.options[i].html_class + ">" + data.options[i].capital + "</button>")
        };
        
        // $('.answer').text(data.capital);
      })
    })

    option1.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option1.text() + '.');
      if (points != 0) { points--; };
    })
    option2.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option2.text() + '.');
      if (points != 0) { points--; };
    })
    option3.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option3.text() + '.');
      if (points != 0) { points--; };
    })
}

$(document).ready(ready);
$(document).on('page:load', ready);

