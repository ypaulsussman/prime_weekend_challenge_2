//requires and globals
var express = require('express');         //calls functionality of the express framework
var app = express();                      //makes that functionality accessible as an object
var path = require('path');               //calls functionality of the path module
var bodyParser = require('body-parser');  //calls functionality of the body-parser module
var calculate = require('./modules/calculate.js'); //calls functionality of the calculate module


var port = 5001;                          //sets the port

app.use(express.static('server/public'));   //enables serving static files directly from the "public" directory
app.use(bodyParser.urlencoded({extended: true})); //extracts body portion of incoming requests; exposes it as "req.body" object
app.use('/calculate', calculate);                  // when you make a request along the /calculate path,
                                                        //this enables the functions inside the 'calculate' variable (i.e. the module above)

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));     //returns "index.html" when client requests along top-level path
});


app.listen(port,function() {                                      //enables server to field requests from client
  console.log('listening on port', port);
});
