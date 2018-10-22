'use strict';

const http = require('http');
const urlLegacy = require('url');
const fs = require('fs');
const qs = require('querystring');
//const formidable = require('formidable');

const hostname = 'localhost';
const port = 8081; //process.env.port || 1337;

const server = http.createServer();
server.on('request', (req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse>.
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
  if (req.url.includes('/submitForm')) { // For method="post" req.url = "/submitForm", for method="get" e.g. req.url = "/submitForm?fname=alex&sname=Raven"
    if (req.method == "POST") {
      let body = '';
      req.on('data', function (data) {
        body += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
        if (body.length > 1e6) {
          // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST.
          req.connection.destroy();
        }
      });
      req.on('end', function () {
        // e.g. body = 'fname=Alex\r\nsname=Raven\r\n'
        console.log(body);
        var strVar = '';
        for (var i = 0; i < body.length; i++) {
          strVar = strVar + body.charCodeAt(i) + ",";
        }
        console.log(strVar);
        var objBody = qs.parse(body, "\r\n", "=");
        console.log(objBody);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<htm>`);
        res.write(`<body>`);
        res.write(`<form action="submitForm" method="post" enctype="text/plain">`); // method="post"
        res.write(`First name:<br /> <input type="text" name="fname"><br />`);
        res.write(`Last name:<br /> <input type="text" name="sname"><br />`);
        res.write(`<br /><input type="submit">`);
        res.write(`</form>`);
        res.write('form ' + req.method + ' method info read' + '<br />');
        res.write('Name = ' + objBody.fname + '<br />');
        res.write('Surname = ' + objBody.sname);
        res.write(`</body>`);
        res.write(`</htm>`);
        return res.end();
      });
    }
    else if (req.method = "GET") {
      let objUrl = urlLegacy.parse(req.url, true, true);
      let q = objUrl.query; // parsed url query property object e.g. { fist: '1', second: '2' }.
      //console.log("parsed url query property object:");
      //console.log(q);
      /*
      let txt = '';
      for (let key in q) {
        txt = txt + key + ":" + q[key] + '<br />';
      }
      */
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<htm>`);
      res.write(`<body>`);
      res.write(`<form action="submitForm" method="get" enctype="text/plain">`); // method="post"
      res.write(`First name:<br /> <input type="text" name="fname"><br />`);
      res.write(`Last name:<br /> <input type="text" name="sname"><br />`);
      res.write(`<br /><input type="submit">`);
      res.write(`</form>`);
      res.write('form ' + req.method + ' method info read' + '<br />');
      res.write('Name = ' + q.fname + '<br />');
      res.write('Surname = ' + q.sname);
      res.write(`</body>`);
      res.write(`</htm>`);
      return res.end();
    }
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<htm>`);
    res.write(`<body>`);
    res.write(`<form action="submitForm" method="post" enctype="text/plain">`); // method="post" or method="get",
    res.write(`First name:<br /> <input type="text" name="fname"><br />`);
    res.write(`Last name:<br /> <input type="text" name="sname"><br />`);
    res.write(`<br /><input type="submit">`);
    res.write(`</form>`);
    res.write(`</body>`);
    res.write(`</htm>`);
    return res.end();
  }
});

server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`server.listen: Server running and listening at http://${hostname}:${port}/`); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});
