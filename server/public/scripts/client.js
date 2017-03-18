$(document).ready(function() {
  var operand = "";
  var val01 = "";
  var val02 = "";
  var digit = "";
  $('#val02').hide();
  var slowReveal;

  $('.numberButton').on('click', function() {
  digit = $(this).data('digit');      //gets numeric value button
  if (!operand){
    val01+=digit;                 //adds value to first operator string
    updateDisplay('#val01',val01);
  } else {
    val02+=digit;
    updateDisplay('#val02',val02);
    $('#submitButton').attr('disabled', false); //allows calculation requests once second operator has been enterd
  }
  });

  $('#deleteButton').on('click', function() {
    if (!operand){
      val01 = val01.slice(0,-1);      //removes last value of first operator string
      updateDisplay('#val01',val01);
    } else{
      val02 = val02.slice(0,-1);
      updateDisplay('#val02',val02);
    }
  });

  $('.operandButton').on('click', function() {
    operand = $(this).data('operand');        //gets operand from button
    $('#val01, #val02').toggle();             //reveals second operator string
    return operand;
  });

  $('#submitButton').on('click', function() {
      var calculation = {         //creates object to pass to server
        x: parseFloat(val01),
        y: parseFloat(val02),
        type: operand,
      };
      $.ajax({
      type: 'POST',
      url: '/calculate/calculate',  //*NOTE* to future YPaul: the need to add a second "calculate" to this path when creating the module really took you a while.
      data: calculation,
      //the below code first appends the "Calculating" text, then after three seconds
          //replaces that text with the answer.
      success: function (response) {
        $('.wait').append('<h2 id = "calcScreen">Calculating...</h2>');
        setTimeout(function() {
          $('.wait').empty();
          $('.answer').append('<h2 id = "finAnswer"> The answer is: ' + response.calc + '</h2>');
          $('#submitButton').attr('disabled', true); //freezes "submit" button
        },3000);
      }
    });
  });

  $('#clearButton').on('click', function() {
      $('.answer').empty();       //removes previous answer
      operand = "";               //resets calculation variables
      val01 = "";
      val02 = "";
      digit = "";
      updateDisplay('#val01',val01);   //refreshes displays
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
