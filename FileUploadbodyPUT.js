'use strict';
var http = require('http');
//var formidable = require('formidable');
//var fs = require('fs');
var qs = require('querystring');

const hostname = 'localhost';
const port = 8081; // process.env.Port;
//const server = http.createServer((req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse> ...}
const server = http.createServer();
server.on('request', (req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse>
  // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
  // or properties from objects, into distinct variables.
  const { method, url, headers } = req;
  const responseBody = { headers, method, url };
  const responceBodyStringify = JSON.stringify(responseBody);
  if (req.url.includes('/fileupload')) { // (req.url == '/fileupload')
    if (method == 'POST') { // if (req.method == 'POST') {
      let body = []; // at this point body as standard Javascript array.
      req.on('data', (chunk) => { // chunk is Uint8Array.
        body.push(chunk); // appends new element to array and set new array length, at this point body as Uint8Array.
      }).on('end', () => {
        console.log('request method = ' + method); // + req.method
        console.log('request url = ' + url); // + req.url
        console.log('=================================================');
        body = Buffer.concat(body).toString(); // Buffer.concat() returns a new Buffer which is the result of concatenating all the Buffer or Uint8Array instances in the list together.
        // at this point, `body` is the entire request body Uint8Array converted into a string
      /*
      // string concat also works.
      var body = ''; // body as string.
      req.on('data', function (data) {
        body += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
        if (body.length > 1e6) {
          // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST.
          req.connection.destroy();
        }
      });
      req.on('end', function () {
        console.log('request method = ' + method); // + req.method
        console.log('request url = ' + url); // + req.url
        console.log('=================================================');
        */
        console.log(body);
        console.log('=================================================');
        res.on('error', (err) => {
          console.error(err);
        });
        // res.statusCode = 404; // Tell the client that the resource wasn't found.
        // response.setHeader('Content-Type', 'application/json');
        // response.setHeader('X-Powered-By', 'bacon');
        res.writeHead(200, { 'Content-Type': 'text/html' }); // res is instance of ServerResponse, which is a WritableStream.
        res.write('form POST method info read' + '<br />');
        return res.end();
      }).on('error', (err) => {
        // This prints the error message and stack trace to `stderr`.
        console.error(err.stack);
      });
    }
    else {
      res.on('error', (err) => {
        console.error(err);
      });
      res.write('form GET read');
      return res.end();
    }
  }
  else {
    req.on('error', (err) => {
      // This prints the error message and stack trace to `stderr`.
      console.error(err.stack);
    });
    res.on('error', (err) => {
      console.error(err);
    });
    console.log('initial request method = ' + method); // + req.method
    console.log('initial request url = ' + url); // + req.url
    res.writeHead(200, { 'Content-Type': 'text/html' }); // res is instance of ServerResponse, which is a WritableStream.
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
})

// Begin accepting connections on the specified port and hostname.
// If hostname is omitted, server will accept connections on the unspecified IPv6 address (::) when IPv6 is available,
// or the unspecified IPv4 address (0.0.0.0) otherwise.
///*
server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`Server running and listening at http://${hostname}:${port}/`); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});
//*/
/*
server.listen(port, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`Server running and listening at http://0.0.0.0:${port}/`); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});
*/