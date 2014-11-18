
function ready() {
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

    // Adding question functionality

    // if id == option then wrong guess, but if id == answer, then right
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

    // var jq_answer = $('.jq_answer');
    var jq_option0 = $('.jq_option0');
    var jq_option1 = $('.jq_option1');
    var jq_option2 = $('.jq_option2');
    var jq_option3 = $('.jq_option3');

    var pointOrPoints = function() {
      if (points == 1) {
        return " point";
      } else {
        return " points";
      }
    };


    continueOn.on('click', function() {
      correctAnswerAdvancement();
      $('.option_selections').hide(); // ???
      $('.jquery_option_selections').empty(); // GOOD
      $('#responseToGuess').empty();
      $('#pointsEarned').empty();
      $.getJSON("/next_state",{stop_num: stopNum},function(data){
        stopNum++;
        $('#question_box h2').text("What is the capital of " + data.state + "?");
        for (var i = 0, button; i < data.options.length; i++) {
          if (data.options[i].html_class == "answer") {
            button = $("<button class=" + data.options[i].html_class + " answer>" + data.options[i].capital + "</button>")
             // $('.jquery_option_selections').append("<button class=" + data.options[i].html_class + " answer>" + data.options[i].capital + "</button>");
             $('.jquery_option_selections').append(button);
             button.click(function(event) {
                responseToGuess.text('Correct!');
                pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
                continueOn.show();
              })
            } else {
              button = $("<button class=" + data.options[i].html_class + i + ">" + data.options[i].capital + "</button>")
              $('.jquery_option_selections').append(button);
              button.click(function(event) {
                responseToGuess.text('Nope. It\'s not ' + $(this).text() + '.');
                if (points !== 0) { points--; }
              })
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

// delete all the code!!!
    

    $('.jq_answer').click(function() {
      alert( 'working!');
      responseToGuess.text('Correct!');
      pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
      continueOn.show();
    });
    jq_option0.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option.text() + '.');
      if (points !== 0) { points--; }
    });
    jq_option1.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option.text() + '.');
      if (points !== 0) { points--; }
    });
    jq_option2.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option.text() + '.');
      if (points !== 0) { points--; }
    });
    jq_option3.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option.text() + '.');
      if (points !== 0) { points--; }
    });

    // Works with the html class and the jquery div
    answer.on('click', function(event) {
      responseToGuess.text('Correct!');
      pointsEarned.text( 'You earned ' + points + pointOrPoints() + '.');
      continueOn.show();
    });
    option1.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option1.text() + '.');
      if (points !== 0) { points--; }
    });
    option1.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option1.text() + '.');
      if (points !== 0) { points--; }
    });
    option2.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option2.text() + '.');
      if (points !== 0) { points--; }
    });
    option3.on('click', function(event) {
      responseToGuess.text('Nope. It\'s not ' + option3.text() + '.');
      if (points !== 0) { points--; }
    });
}

$(document).ready(ready);
$(document).on('page:load', ready);

