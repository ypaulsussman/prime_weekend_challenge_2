var express = require('express');
var router = express.Router();

var result = {};

router.post('/calculate', function(req, res) {
  var operation = req.body.type;
  switch (operation) {
    case 'add':
      result.calc = parseFloat(req.body.x) + parseFloat(req.body.y);
      break;
    case 'subtract':
      result.calc = parseFloat(req.body.x) - parseFloat(req.body.y);
      break;
    case 'multiply':
      result.calc = parseFloat(req.body.x) * parseFloat(req.body.y);
      break;
    case 'divide':
      result.calc = parseFloat(req.body.x) / parseFloat(req.body.y);
      break;
      default:
      result.calc = "Somehow you managed not to send an operation...";
  }
  res.send(result);
});

module.exports = router;
