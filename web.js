var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlfile = "index.html";
var robots = "robots.txt";

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
