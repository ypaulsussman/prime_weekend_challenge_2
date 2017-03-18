//requires and globals
var express = require('express');         //calls functionality of the express framework
var app = express();                      //makes that functionality accessible as an object
var path = require('path');               //calls functionality of the path module
var bodyParser = require('body-parser');  //calls functionality of the body-parser module
var port = 5001;                          //sets the port

var result = {};                          //creates empty object for result

app.use(express.static('server/public'));   //enables serving static files directly from the "public" directory
app.use(bodyParser.urlencoded({extended: true})); //extracts body portion of incoming requests; exposes it as "req.body" object

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));     //returns "index.html" when client requests along top-level path
});

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


app.listen(port,function() {                                      //enables server to field requests from client
  console.log('listening on port', port);
});
