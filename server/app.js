//requires and globals
var express = require('express');
var app = express();
var path = require('path');
var port = 5001;


app.use(express.static('server/public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.listen(port,function() {
  console.log('listening on port', port);
});
