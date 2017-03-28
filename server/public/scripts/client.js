var operator = "";
var val01 = "";
var val02 = "";
var digit = "";

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
    performCalc();
  });

  $('#clearButton').on('click', function() {
      clearAll();
  });
}//end event listener

function addToOperand(digit) {
  if (!operator){
    val01+=digit;
    updateDisplay('#val01',val01);
  } else {
    val02+=digit;
    updateDisplay('#val02',val02);
    $('#submitButton').attr('disabled', false);
  }
}

function deleteOperand() {
  if (!operator){
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

function performCalc() {
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
      $('#val02').text('Calculating...');
      setTimeout(function() {
        delayedReveal(response);
      }, 3000);
    }
  });
}

function delayedReveal(response) {
  val02 = "";
  operator = "";
  $('#val02').empty().hide();
  $('#val01').show();
  val01 = response.calc;
  $('#val01').text(response.calc);
  $('#submitButton').attr('disabled', true);
  }

function clearAll() {
  operator = "";
  val01 = "";
  val02 = "";
  digit = "";
  updateDisplay('#val01',val01);
  updateDisplay('#val02',val02);
  $('#val02').hide();
  $('#val01').show();
}
