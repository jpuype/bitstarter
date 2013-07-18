var fs = require('fs');
var express = require('express');

//var buf = new Buffer(fs.readFileSync('index.html'));
//var txt = buf.toString();
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
