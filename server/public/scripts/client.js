$(document).ready(function() {
  var operand = "";
  var val01 = "";
  var val02 = "";
  var digit = "";
  $('#val02').hide();
  var slowReveal;

  $('.numberButton').on('click', function() {
  //gets numeric value button
  digit = $(this).data('digit');
  if (!operand){
    //adds value to first operator string
    val01+=digit;
    updateDisplay('#val01',val01);
  } else {
    val02+=digit;
    updateDisplay('#val02',val02);
    //allows calculation requests once second operator has been enterd
    $('#submitButton').attr('disabled', false);
  }
  });

  $('#deleteButton').on('click', function() {
    if (!operand){
      //removes last value of first operator string
      val01 = val01.slice(0,-1);
      updateDisplay('#val01',val01);
    } else{
      val02 = val02.slice(0,-1);
      updateDisplay('#val02',val02);
    }
  });

  $('.operandButton').on('click', function() {
    //gets operand from button
    operand = $(this).data('operand');
    //reveals second operator string
    $('#val01, #val02').toggle();
    return operand;
  });

  $('#submitButton').on('click', function() {
      //creates object to pass to server
      var calculation = {
        x: parseFloat(val01),
        y: parseFloat(val02),
        type: operand,
      };
      $.ajax({
      type: 'POST',
      url: '/calculate/calculate',  //*NOTE* to future YPaul: the need to add a second "calculate" to this path when creating the module really took you a while.
      //the below code first appends the "Calculating" text, then after three seconds
          //replaces that text with the answer.
      data: calculation,
      success: function (response) {
        $('.wait').append('<h2 id = "calcScreen">Calculating...</h2>');
        setTimeout(function() {
          $('.wait').empty();
          $('.answer').append('<h2 id = "finAnswer"> The answer is: ' + response.calc + '</h2>');
          //freezes "submit" button
          $('#submitButton').attr('disabled', true);
        },3000);
      }
    });
  });

  $('#clearButton').on('click', function() {
      //removes previous answer
      $('.answer').empty();
      //resets calculation variables
      operand = "";
      val01 = "";
      val02 = "";
      digit = "";
      //refreshes displays
      updateDisplay('#val01',val01);
      updateDisplay('#val02',val02);
      $('#val02').hide();
      $('#val01').show();
  });

});

//I'm sorry I couldn't refactor the code above more thoroughly...let me know
//if there's anything else you'd recommend!
function updateDisplay(display, newValue) {
  $(display).text(newValue);
}
