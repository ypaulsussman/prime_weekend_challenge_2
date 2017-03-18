$(document).ready(function() {
  var operand = "";
  var val01 = "";
  var val02 = "";
  var digit = "";
  $('#val02').hide();
  var slowReveal;

  $('.numberButton').on('click', function() {
  digit = $(this).data('digit');
  if (!operand){
    val01+=digit;
    $('#val01').text(val01);
  } else{
    val02+=digit;
    $('#val02').text(val02);
  }
  });

  $('.deleteButton').on('click', function() {
    if (!operand){
      val01 = val01.slice(0,-1);
      $('#val01').text(val01);
    } else{
      val02 = val02.slice(0,-1);
      $('#val02').text(val02);
    }
  });


  $('.operandButton').on('click', function() {
    operand = $(this).data('operand');
    $('#val01').hide();
    $('#val02').show();
    return operand;
  });

  $('#submitButton').on('click', function() {
    if (val01 && val02 && operand) {
      $('#unfinished').remove();
      var calculation = {
        x: parseFloat(val01),
        y: parseFloat(val02),
        type: operand,
      };
        $.ajax({
        type: 'POST',
        url: '/calculate',
        data: calculation,
        success: function (response) {
          showAnswer(response);
        }
      });
    } else {
      $('.answer').append('<h1 id = "unfinished">finish your calculation!</h1>');
    }
  });

  $('.clear').on('click', '#clearButton', function() {
      $('.answer, .clear').empty();
      operand = "";
      val01 = "";
      val02 = "";
      digit = "";
      $('#val01').text(val01);
      $('#val02').text(val02);
      $('#val02').hide();
      $('#val01').show();
  });

//fuck i hate how kludgy that is...
  function showAnswer(response) {
    $('.wait').append('<h1 id = "calcScreen">Calculating...</h1>').delay(3000).fadeOut(10);
    $('.answer').append('<h1 id = "answer"> The answer is: ' + response.calc + '</h1>'+'<br>'+'<button type="button" id="clearButton">Clear</button>');
    $('.answer').hide();
    $('.answer').delay(3000).fadeIn(10);
  }

});
