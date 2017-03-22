var express = require('express');
var router = express.Router();

//creates empty object for result
var result = {};

//performs calculation, depending on variables passed via POST request
router.post('/calculate', function(req, res) {
  if (req.body.type === "add") {
    result.calc = parseFloat(req.body.x) + parseFloat(req.body.y);
  } else if (req.body.type === "subtract") {
    result.calc = parseFloat(req.body.x) - parseFloat(req.body.y);
  } else if (req.body.type === "multiply") {
    result.calc = parseFloat(req.body.x) * parseFloat(req.body.y);
  } else if (req.body.type === "divide") {
    result.calc = parseFloat(req.body.x) / parseFloat(req.body.y);
  }
  res.send(result);
});

module.exports = router;
