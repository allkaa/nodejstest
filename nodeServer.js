'use strict';

const http = require('http');
const urlLegacy = require('url');
//const { URL } = require('url');
const fs = require('fs');
const qs = require('querystring');
//const formidable = require('formidable');

let dtVar = new Date();
console.log('Program starts ==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//var envObj = process.env;
for (let prop in process.env) {
  //console.log(prop + ": " + process.env[prop]);
}
dtVar = new Date();
console.log('==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const hostname = 'localhost';
//console.log('set port=' + process.env.PORT + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//var port = process.env.PORT; //  Windows - default port is 1337 for WebApp and 1542 for ConsoleApp;
const port = 8081; // process.env.Port;
console.log('set port=' + port);

dtVar = new Date();
console.log('before http.createServer() ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

//const server = http.createServer((req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse> ...}
const server = http.createServer();
server.on('request', (req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse>
  req.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  });
  res.on('error', (err) => {
    console.error(err);
  });
  // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
  // or properties from objects, into distinct variables.
  const { method, url, headers } = req;
  // http://localhost:8081
  //let aaa = new Object();
  let objUrl = urlLegacy.parse(req.url, true, true);
  if ((req.method != "POST") && (objUrl.search == "")) { // if req.method == "POST" then ObjUrl.search will be "" always.
    if (objUrl.pathname.includes('/styles/')) {
      fs.readFile('.' + objUrl.pathname, (err, data) => { //'.' + "/styles/style.css"
        if (err) throw err;
        else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.write(data);
          return res.end();
        }
      });
    }
    else if (objUrl.pathname.includes('/scripts/')) {
      fs.readFile('.' + objUrl.pathname, (err, data) => { //'.' + "/scripts/main.js"
        if (err) throw err;
        else {
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.write(data);
          return res.end();
        }
      });
    }
    else if (objUrl.pathname.includes('/images/')) {
      fs.readFile('.' + objUrl.pathname, (err, data) => { //'.' + "/styles/style.css"
        if (err) throw err;
        else {
          res.writeHead(200, { 'Content-Type': 'image/png' });
          res.write(data);
          return res.end();
        }
      });
    }
    else { // default index.html.
      fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          return res.end();
        }
      });
      }
  } // end of // no query /?first=1...  case.
  // <==================== end of very first case and rendering results case ================================================>
  // Begin of POST or GET form submit case.
  if (req.url.includes('/submitFormAK')) { // For method="post" req.url = "/submitFormAK", for method="get" e.g. req.url = "/submitFormAK?fname=alex&sname=Raven"
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
        /*
        console.log(body);
        let strVar = '';
        for (let i = 0; i < body.length; i++) {
          strVar = strVar + body.charCodeAt(i) + ",";
        }
        console.log(strVar);
        */
        let objBody = qs.parse(body, "\r\n", "="); // using const qs = require('querystring').
        //console.log(objBody);
        fs.readFile('./index.html', (err, data) => { // file index.html reading.
          if (err) throw err;
          else { // file index.html read OK.
            let msgOrig = '';
            for (let i=0; i<data.length; i++) {
              msgOrig = msgOrig + String.fromCharCode(data[i]);
            }
            let msg = msgOrig.substring(0,msgOrig.indexOf(`</body>`));
            msg += 'LAST ENTERED by method ' + req.method + ':<br />';
            msg += 'Name = ' + objBody.fname + '<br />';
            msg += 'Surname = ' + objBody.sname;
            msg += msgOrig.substring(msgOrig.indexOf(`</body>`));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(msg);
            return res.end();
          } // end  of file index.html read OK.
        }); // end of file index.html reading.
      });
    } // end of if req.method == "POST".
    // <==================================== end of POST, begin of GET =====================================>
    else if (req.method = "GET") {
      let q = objUrl.query; // formerly parsed query property object e.g. Object {fname: "Alex", sname: "Raven"}.
      fs.readFile('./index.html', (err, data) => { // file index.html reading.
        if (err) throw err;
        else { // file index.html read OK.
          let msgOrig = '';
          for (let i=0; i<data.length; i++) {
            msgOrig = msgOrig + String.fromCharCode(data[i]);
          }
          let msg = msgOrig.substring(0,msgOrig.indexOf(`</body>`));
          msg += 'LAST ENTERED by method ' + req.method + ':<br />';
          msg += 'Name = ' + q.fname + '<br />';
          msg += 'Surname = ' + q.sname;
          msg += msgOrig.substring(msgOrig.indexOf(`</body>`));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(msg);
          return res.end();
        } // end  of file index.html read OK.
      }); // end of file index.html reading.
    } // end of req.method = "GET".
  } // end of if req.url.includes('/submitForm...')
  // <==================================== End of POST or GET form submit case.  =====================================>
}) // end of server.on('request'...)

dtVar = new Date();
console.log('after http.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// Begin accepting connections on the specified port and hostname.
// If hostname is omitted, server will accept connections on the unspecified IPv6 address (::) when IPv6 is available,
// or the unspecified IPv4 address (0.0.0.0) otherwise.
server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`server.listen: Server running and listening at http://${hostname}:${port}/ ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds()); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});

dtVar = new Date();
console.log('End main PROGAM after server.listen(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
