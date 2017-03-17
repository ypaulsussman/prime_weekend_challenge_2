$(document).ready(function() {

  var operand = "";

  $('.operandButton').on('click', function() {
    operand = $(this).data('operand');
    return operand;
  });

  $('#submitButton').on('click', function() {
    if ($('#val01').val() && $('#val02').val() && operand) {
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
          console.log(response);
        }
      });
    } else {
      console.log("finish yo calculation!");
    }
  });


});
