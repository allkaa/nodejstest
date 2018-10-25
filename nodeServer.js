'use strict';

const http = require('http');
const urlLegacy = require('url'); // Legacy url module.
//const { URL } = require('url'); // ES6 url module
const fs = require('fs');
const qs = require('querystring');
//const formidable = require('formidable');
const {userInfo} = require('./appWeb.js');

let dtVar = new Date();
console.log('Program starts ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
/*
//var envObj = process.env;
for (let prop in process.env) {
  //console.log(prop + ": " + process.env[prop]);
}
dtVar = new Date();
console.log('==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/

// http://localhost:8081
const hostname = 'localhost';
//const port = process.env.PORT; //  Windows - default port is 1337 for WebApp and 1542 for ConsoleApp;
const port = 8081; // for Linux must be set manually;

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
  //let aaa = new Object();
  // url "/submitFormAK?fname=Alex&sname=Raven" or "/"
  let objUrl = urlLegacy.parse(req.url, true, true); // non standard object.s
  // Verify that it is very first page request or rendering page after GET or POST form submit processed.
  // After POST form submit will be processed rendering page will be as GET.
  // objUrl.search is ? and query e.g. "?fname=Alex&sname=Raven" or ""
  if ((req.method != "POST") && (objUrl.search == "")) { // if req.method == "POST" then ObjUrl.search will be "" always.
    let contType = '';
    if (objUrl.pathname.endsWith('.css')) {
      contType = 'text/css';
    }
    else if (objUrl.pathname.endsWith('.js')) {
      contType = 'application/javascript';
    }
    else if (objUrl.pathname.endsWith('.png')) {
      contType = 'image/png';
    }
    else if (objUrl.pathname.endsWith('.jpg') || objUrl.pathname.endsWith('.jpeg')) {
      contType = 'image/jpeg';
    }
    else if (objUrl.pathname.endsWith('.htm') || objUrl.pathname.endsWith('.html')) {
      contType = 'text/html';
    }
    if (contType == '') {  // default app.html.
      contType = 'text/plain';
      fs.readFile('./app.html', (err, data) => {
        if (err) {
          res.writeHead(200, { 'Content-Type': `${contType}` });
          res.write(`Who cares what the idiot says!\n (c) Paul McCartney`);
          return res.end();
            } // throw err;
        else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          return res.end();
        }
      });
    }
    else {
      fs.readFile('.' + objUrl.pathname, (err, data) => { //'.' + "/path/name.type"
      if (err) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`Who cares what the idiots says!\nWho cares what the idiots do!\n (c) Paul McCartney`);
        return res.end();
          } // throw err;
      else {
          res.writeHead(200, { 'Content-Type': `${contType}` });
          res.write(data);
          return res.end();
        }
      });
    }
  } // end of non-POST method and  empty search ""  case.
  // <==================== end of very first case and rendering results case ================================================>
  // Non empty objUrl.search (search is ? and query) e.g. "?fname=Alex&sname=Raven"
  else {
    // Begin of POST or GET form submit case.
    if (req.url.includes('/submitFormAK') || req.url.includes('/submitFormAK-Ini')) { // For method="post" req.url = "/submitFormAK", for method="get" e.g. req.url = "/submitFormAK?fname=Alex&sname=Raven"
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
          // e.g. body = 'fname=Alex\r\nsname=Raven\r\n' for /submitFormAK   or 'userId=Alex\r\passWord=Raven\r\n' for /submitFormAK-Ini
          /*
          console.log(body);
          let strVar = '';
          for (let i = 0; i < body.length; i++) {
            strVar = strVar + body.charCodeAt(i) + ",";
          }
          console.log(strVar);
          */
          let objBody = qs.parse(body, "\r\n", "="); // using const qs = require('querystring') module.
          //console.log(objBody);
          if (req.url.includes('/submitFormAK-Ini')) {
            let blnOk = false;
            if (objBody.userId == "Unl") {
              if (objBody.passWord == "123qwe!") {
                blnOk = true;
              }
            }
            if (blnOk) {
              fs.readFile('./pages/index.html', (err, data) => {
                if (err) throw err;
                else {
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  res.write(data);
                  return res.end();
                }
              });
            }
            else {
              fs.readFile('./app.html', (err, data) => {
                if (err) throw err;
                else {
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  res.write(data);
                  return res.end();
                }
              });
            }
          } // end of if (req.url.includes('/submitFormAK-Ini'))
          else { // if (req.url.includes('/submitFormAK'))
            fs.readFile('./pages/index.html', (err, data) => { // index.html reading.
              if (err) throw err;
              else { // file index.html read OK -  modify template file.
                let msgOrig = ''; msgT = '';
                for (let i=0; i<data.length; i++) {
                  msgOrig = msgOrig + String.fromCharCode(data[i]);
                }
                let msg = msgOrig.substring(0,msgOrig.indexOf(`</body>`));
                msg += 'LAST ENTERED by method ' + req.method + ':<br />';
                if (objBody.fname == "") msg += 'Name = ' + 'not entered!' + '<br />';
                else msg += 'Name = ' + objBody.fname + '<br />';
                if (objBody.sname == "") msg += 'Surname = ' + 'not entered!' + '<br />';
                else msg += 'Surname = ' + objBody.sname + '<br />';
                msg += msgOrig.substring(msgOrig.indexOf(`</body>`));
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(msg);
                return res.end();
              } // end  of file index.html read OK - modify template file.
            }); // end of file index.html reading.
          } // end of if (req.url.includes('/submitFormAK'))
        }); // end req.on('end', function ()...
      } // end of if req.method == "POST".
      // <==================================== end of POST, begin of GET =====================================>
      else if (req.method = "GET") {
        let q = objUrl.query; // formerly parsed query property object e.g. Object {fname: "Alex", sname: "Raven"}.
        fs.readFile('./index.html', (err, data) => { // file index.html reading.
          if (err) throw err;
          else { // file index.html read OK - modify template file.
            let msgOrig = '';
            for (let i=0; i<data.length; i++) {
              msgOrig = msgOrig + String.fromCharCode(data[i]);
            }
            let msg = msgOrig.substring(0,msgOrig.indexOf(`</body>`));
            msg += 'LAST ENTERED by method ' + req.method + ':<br />';
            if (q.fname == "") msg += 'Name = ' + 'not entered!' + '<br />';
            else msg += 'Name = ' + q.fname + '<br />';
            if (q.sname == "") msg += 'Surname = ' + 'not entered!' + '<br />';
            else msg += 'Surname = ' + q.sname + '<br />';
            msg += msgOrig.substring(msgOrig.indexOf(`</body>`));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(msg);
            return res.end();
          } // end  of file index.html read OK - modify template file.
        }); // end of file index.html reading.
      } // end of req.method = "GET".
    } // end of if req.url.includes('/submitForm...')
    else { // no "/submitFormAK" but search is not emty e.g. "?fname=Alex&sname=Raven"
      // HACKER ATTACK OR FAULTY CLIENT.
      //req.connection.destroy();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(`Who cares what the idiots says!\nWho cares what the idiots do!\n (c) Paul McCartney`);
      return res.end();
    }
    // <==================================== End of POST or GET form submit case.  =====================================>
  } // end of Non empty objUrl.search (is ? and query) e.g. "?fname=Alex&sname=Raven"
}) // end of server.on('request'...)

dtVar = new Date();
console.log('after http.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// Begin accepting connections on the specified port and hostname.
// If hostname is omitted, server will accept connections on the unspecified IPv6 address (::) when IPv6 is available,
// or the unspecified IPv4 address (0.0.0.0) otherwise.
server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`Server running and listening at http://${hostname}:${port}/ ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds()); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});

dtVar = new Date();
console.log('End main PROGAM after server.listen(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
