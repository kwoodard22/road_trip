
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

    $('.goToLeaderboard').hide()

    var answer = $('.answer');
    var responseToGuess = $('#responseToGuess');
    var option = $('.option');
    var option1 = $('.option1');
    var option2 = $('.option2');
    var option3 = $('.option3');
    var pointsEarned = $('#pointsEarned');
    var continueOn = $('#continueOn');
    var seeFinalScore = $('#finalScore');
    var points = 400;
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
      points = 400;
    };

    var addPoints = function() {
      finalScore += points;
    }

    var hideAndClearQuestionInfo = function() {
      $('.option_selections').hide();
      $('.jquery_option_selections').empty();
      $('#responseToGuess').empty();
      $('#pointsEarned').empty();
    };

    var theEnd = function(state) {

      $('#question_box h2').text("Congrats! You made it across the U.S. to " + state + "!");
    };
    
    var showScore = function(score) {
      $('#pointsYouHave').text("Your final score is:");
      $('#finalScoreDisplay').show().text(score);
    }

    seeFinalScore.on('click', function() {
      $('#finalScore').hide();
      $('.goToLeaderboard').show();
      hideAndClearQuestionInfo();
      addPoints();
      
      //TODO: extract saveScore
      $.post('/scores', {score: { score: finalScore}}, function() {
        //on success.  Should use showScore, but moved to .always due to workaround)

      }, 'json')
      .fail(function() {
        // on failure, show error
        // $('#finalScoreDisplay').show().text(finalScore);
        console.log( "error saving points" );
      })
      .always(function() {
        // WORKAROUND: if not logged in, returns as failure, even though status_code is 200
        showScore(finalScore);
      });

      $.getJSON("/next_state",{stop_num: stopNum},function(data){
        theEnd(data.state);
      });
    });

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
                if (data.the_end == "true") {
                  stopNum--;
                  $('#finalScore').show();
                } else {
                  continueOn.show();
                }
              });
            } else {
              button = $("<button class=" + data.options[i].html_class + i + ">" + data.options[i].capital + "</button>");
              $('.jquery_option_selections').append(button);
              button.click(function(event) {
                responseToGuess.text('Nope. It\'s not ' + $(this).text() + '.');
                if (points !== 0) { (points -= 100); }
              });
          }
        }
      });
    });
    
    // if (data.the_end == "true") {
    //               seeFinalScore.show();
    //             } else {
      
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
    
    var incorrect = function(button) {
      responseToGuess.text('Nope. It\'s not ' + $(button).text() + '.');
      if (points !== 0) { (points -= 100); }
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

