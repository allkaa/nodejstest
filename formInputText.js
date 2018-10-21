'use strict';

var http = require('http');
//var formidable = require('formidable');
//var fs = require('fs');
var qs = require('querystring');
var port = 8081; //process.env.port || 1337;

var server = http.createServer(function (req, res) {
  req.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.log('NB!!! Nodejs server request error message and stack treace to strerr');
    console.error(err.stack);
    res.statusCode = 400; // sending 'HTTP/1.1 400 Bad Request'
    res.end()
  });
  res.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.log('NB!!! Nodejs server response error message and stack treace to strerr');
    console.error(err.stack);
  });
  if (req.url.includes('/submitTest')) { // (req.url == '/submitTest')
    var body = '';
    req.on('data', function (data) {
      body += data;
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
      if (body.length > 1e6) {
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST.
        req.connection.destroy();
      }
    });
    req.on('end', function () {
      // e.g. body = 'fname=Al\r\nsname=Kaarna\r\n'
      console.log(body);
      var strVar = '';
      for (var i = 0; i < body.length; i++) {
        strVar = strVar + body.charCodeAt(i) + ",";
      }
      console.log(strVar);
      var objBody = qs.parse(body, "\r\n", "=");
      console.log(objBody);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('form ' + req.method + ' method info read' + '<br />');
      res.write('Name = ' + objBody.fname + '<br />');
      res.write('Surname = ' + objBody.sname);
      return res.end();
    });
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="submitTest" method="post" enctype="text/plain">'); // method="post"
    res.write('First name:<br /> <input type="text" name="fname"><br />');
    res.write('Last name:<br /> <input type="text" name="sname"><br />');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
});

server.listen(port, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`Server running at http://${port}/`); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});
