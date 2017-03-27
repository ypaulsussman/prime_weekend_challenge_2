var operator = "";
var val01 = "";
var val02 = "";
var digit = "";
//delete slowReveal?
var slowReveal;

$(document).ready(function() {
  $('#val02').hide();
  addEventListener();

});

function addEventListener() {

  $('.numberButton').on('click', function() {
    digit = $(this).data('digit');
    addToOperand(digit);
  });

  $('#deleteButton').on('click', function() {
    deleteOperand();
  });

  $('.operatorButton').on('click', function() {
    operator = $(this).data('operator');
    $('#val01, #val02').toggle();
    return operator;
  });

  $('#submitButton').on('click', function() {
      var calculation = {
        x: parseFloat(val01),
        y: parseFloat(val02),
        type: operator,
      };
      $.ajax({
      type: 'POST',
      url: '/calculate/calculate',
      data: calculation,
      success: function (response) {
        $('.wait').append('<h2 id = "calcScreen">Calculating...</h2>');
        setTimeout(function() {
          delayedReveal(response);
        }, 3000);
      }
    });
  });

  $('#clearButton').on('click', function() {
      //removes previous answer
      $('.answer').empty();
      //resets calculation variables
      operator = "";
      val01 = "";
      val02 = "";
      digit = "";
      updateDisplay('#val01',val01);
      updateDisplay('#val02',val02);
      $('#val02').hide();
      $('#val01').show();
  });
}//end event listener

function addToOperand(digit) {
  if (!operator){
    //adds value to first operator string
    val01+=digit;
    updateDisplay('#val01',val01);
  } else {
    val02+=digit;
    updateDisplay('#val02',val02);
    //allows calculation requests once second operator has been enterd
    $('#submitButton').attr('disabled', false);
  }
}

function deleteOperand() {
  if (!operator){
    //removes last value of first operator string
    val01 = val01.slice(0,-1);
    updateDisplay('#val01',val01);
  } else{
    val02 = val02.slice(0,-1);
    updateDisplay('#val02',val02);
  }
}

function updateDisplay(display, newValue) {
  $(display).text(newValue);
}

function delayedReveal(response) {
  $('.wait').empty();
  $('.answer').append('<h2 id = "finAnswer"> The answer is: ' + response.calc + '</h2>');
  //freezes "submit" button
  $('#submitButton').attr('disabled', true);
  }
