//requires and globals
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5001;

var toprint = "message returned";
var result = {};

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.post('/calculate', function(req, res) {
  if (req.body.type === "add") {
    result.calc = parseFloat(req.body.x) + parseFloat(req.body.y);
  } else if (req.body.type === "subtract") {
    result.calc = parseFloat(req.body.x) - parseFloat(req.body.y);
  } else if (req.body.type === "multiply") {
    result.calc = parseFloat(req.body.x) * parseFloat(req.body.y);
  } else if (req.body.type === "divide") {
    result.calc = parseFloat(req.body.x) / parseFloat(req.body.y);
  }
  console.log("message received");
  res.send(result);
});


app.listen(port,function() {
  console.log('listening on port', port);
});
