app.post('/calculate', function(req, res) {                       //performs calculation, depending on variables passed via POST request
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
