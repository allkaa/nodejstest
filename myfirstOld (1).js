'use strict';

var http = require('http');
var dt = require('./myfirstmodule'); // ./ is unix style current direcory (. is current, .. is parent)
//var dt = require('myfirstmodule'); //  Throw error: Cannot find module 'myfirstmodule'

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("req.url is |" + req.url + "| The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

// Console will print the message
console.log('Server running at http://localhost:8080/');
