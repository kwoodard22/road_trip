
function ready() {

  // ================= CAR FUNCTIONALITY =================

    var stopNum = 1;
    $('#start_button').click(function() {
        carToCenter();
        $('#start_button').hide();
    });

    var carToCenter = function() {
    $('#car').animate({left: '42%'}, 2000, function() { // animates car to center & calls questin box
       questionAppear();
      });
    };

    var questionAppear = function() { // makes question box div appear
      $('#question_box').show();
    };

    var carToStart = function() {
      $('#car').animate({left: '-15%'}, 100, function() {
        $('#car').show(function() {
          continueOn.hide();
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

  // ================= QUESTION FUNCTIONALITY =================

    var answer = $('.answer');
    var responseToGuess = $('#responseToGuess');
    var option = $('.option');
    var option1 = $('.option1');
    var option2 = $('.option2');
    var option3 = $('.option3');
    var pointsEarned = $('#pointsEarned');
    var continueOn = $('#continueOn');
    var points = 4;
    var finalScore = 0;
    var guess;


    var pointOrPoints = function() {
      if (points == 1) {
        return " point";
      } else {
        return " points";
      }
    };

    var addPointsAndReset = function(){
      finalScore += points;
      points = 4;
      alert('Your Total Score: ' + finalScore )
    };

    var hideAndClearQuestionInfo = function() {
      $('.option_selections').hide();
      $('.jquery_option_selections').empty();
      $('#responseToGuess').empty();
      $('#pointsEarned').empty();
    };


    continueOn.on('click', function() {
      correctAnswerAdvancement();
      hideAndClearQuestionInfo();
      addPointsAndReset();
      $.getJSON("/next_state",{stop_num: stopNum},function(data){
        stopNum++;
        $('#question_box h2').text("What is the capital of " + data.state + "?");
        for (var i = 0, button; i < data.options.length; i++) {

          if (data.options[i].html_class == "answer") {
            button = $("<button class=" + data.options[i].html_class + " answer>" + data.options[i].capital + "</button>");
             // $('.jquery_option_selections').append("<button class=" + data.options[i].html_class + " answer>" + data.options[i].capital + "</button>");
             $('.jquery_option_selections').append(button);
             button.click(function(event) {
                responseToGuess.text('Correct!');
                pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
                continueOn.show();
              });
            } else {
              button = $("<button class=" + data.options[i].html_class + i + ">" + data.options[i].capital + "</button>");
              $('.jquery_option_selections').append(button);
              button.click(function(event) {
                responseToGuess.text('Nope. It\'s not ' + $(this).text() + '.');
                if (points !== 0) { points--; }
              });
          }
        }
      });
    });

    // $('.jquery_option_selections').on('click', option, function() {
    //   if ($( this ).hasClass( "answer" )) {
    //     alert( 'working!');
    //     responseToGuess.text('Correct!');
    //     pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
    //     continueOn.show();
    //   } else {
    //     responseToGuess.text('Nope. It\'s not ' + this.text() + '.');
    //     if (points !== 0) { points--; }
    //   }
    // });
    
    // Can refactor to to use incorect(), but $(this).text() is coming up BLANK.
    var incorrect = function(button) {
      responseToGuess.text('Nope. It\'s not ' + $(button).text() + '.');
      if (points !== 0) { points--; }
    };

    var correct = function() {
      responseToGuess.text('Correct!');
      pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
      continueOn.show();
    };


    // ==== SPECIFIC TO HTML ====

    answer.on('click', function() {
      correct();
    });
    option1.on('click', function() {
      incorrect(this);
    });
    option2.on('click', function() {
     incorrect(this);
    });
    option3.on('click', function() {
      incorrect(this);
    });
}

$(document).ready(ready);
$(document).on('page:load', ready);

