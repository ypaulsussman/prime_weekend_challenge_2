$(document).ready(function() {

  var operand = "";

  $('.operandButton').on('click', function() {
    operand = $(this).data('operand');
    return operand;
  });

  $('#submitButton').on('click', function() {
    if ($('#val01').val() && $('#val02').val() && operand) {
      $('#unfinished').remove();
      var calculation = {
        x: $('#val01').val(),
        y: $('#val02').val(),
        type: operand,
      };
        $.ajax({
        type: 'POST',
        url: '/calculate',
        data: calculation,
        success: function (response) {
          $('.answer').append('<h1 id = "answer"> The answer is: ' + response.calc + '</h1>');
          $('.clear').append('<button type="button" id="clearButton">Clear</button>');
        }
      });
    } else {
      $('.answer').append('<h1 id = "unfinished">finish your calculation!</h1>');
    }
  });

  $('.clear').on('click', '#clearButton', function() {
      $('.answer, .clear').empty();
      $('#val01, #val02').val('');
  });


});
