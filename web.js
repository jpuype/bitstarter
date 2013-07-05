require('fs');OAAOA
var express = require('express');

var buf = new Buffer(fs.readFileSync('index.html'));
var txt = buf.toString();
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
