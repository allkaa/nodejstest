'use strict';

const http = require('http');
const urlLegacy = require('url');
//const { URL } = require('url');
const fs = require('fs');
//const formidable = require('formidable');
//const qs = require('querystring');

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
  //const responseBody = { headers, method, url };
  //const responceBodyStringify = JSON.stringify(responseBody);
  // http://localhost:8081/home/akaarna/nodejs/images/?first=1&second=2 // URL object objUrl.search = "?first=1&second=2"
  // or req.url = "/home/akaarna/nodejs/images/images/firefox-icon.png" // URL object objUrl.search = ""
  // objUrl.pathname = "/images/firefox-icon.png"
  //let aaa = new Object();
  let objUrl = urlLegacy.parse(req.url, true, true);
  let q = objUrl.query; // parsed url query property object e.g. { fist: '1', second: '2' }.
  //let objParsedNew = new URL(req.url);
  if (objUrl.search == "") {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    //res.write(msg);
    res.end();
  }
  else {
    console.log("parsed url query property object:");
    console.log(q);
    let txt = '';
    for (let key in q) {
      txt = txt + key + ":" + q[key] + '<br />';
    }
    let dtVar2 = new Date();
    let msg;
    //res.write('<result><br />|<br />' + txt + '<br />' + dtVar2.getSeconds() + "." + dtVar2.getMilliseconds() +'<br />|</result>');
    msg = '<!DOCTYPE html><html>';
    msg = msg + ' <head><meta charset="utf-8"><title>My test page</title>';
    msg = msg + `<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>`;
    msg = msg + `<link href="styles/style.css" rel="stylesheet" type="text/css"></head>`;
    msg = msg + `<body>`;
    msg = msg + `<h1>Mozilla is cool</h1>`;
    //file:///home/akaarna/nodejs/images/firefox-icon.png
    //msg = msg + `<img src="https://findicons.com/files/icons/783/mozilla_pack/128/firefox.png" alt="Firefox logo: a flaming fox surrounding the Earth." width="200" >`;
    //msg = msg + `<img src="file:///home/akaarna/nodejs/images/firefox-icon.png" alt="Firefox logo: a flaming fox surrounding the Earth." width="200" >`;
    //msg = msg + `<img src="images/firefox-icon.png" alt="Firefox logo: a flaming fox surrounding the Earth." width="200" >`;
    msg = msg + '<br />' + txt;
    msg = msg + `</body></html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(msg);
    res.end();
  }
})

dtVar = new Date();
console.log('after http.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// Begin accepting connections on the specified port and hostname.
// If hostname is omitted, server will accept connections on the unspecified IPv6 address (::) when IPv6 is available,
// or the unspecified IPv4 address (0.0.0.0) otherwise.
server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  console.log(`server.listen: Server running and listening at http://${hostname}:${port}/`); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});

dtVar = new Date();
console.log('End main PROGAM after server.listen(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
