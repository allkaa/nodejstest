'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');

var dtVar = new Date();
console.log('Program starts ==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//var envObj = process.env;
for (var prop in process.env) {
  //console.log(prop + ": " + process.env[prop]);
}
var dtVar = new Date();
console.log('==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

var dtVar = new Date();
//console.log('set port=' + process.env.PORT + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//var port = process.env.PORT; //  Windows - default port is 1337 for WebApp and 1542 for ConsoleApp;
var port = 8081; // Linux - no default port.
console.log('set port=' + port + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

var dtVar = new Date();
console.log('before http.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
var objHttpServer = http.createServer(function (req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var objParsed = url.parse(req.url, true);
    var q = objParsed.query; // parsed url query property object e.g. { f: '1', s: '2' }.
    console.log("parsed url query property object:");
    console.log(q);
    let txt = '';
    for (var key in q) {
      txt = txt + key + ":" + q[key] + '<br />';
    }
    var dtVar2 = new Date();
    let msg;
    //res.write('<result><br />|<br />' + txt + '<br />' + dtVar2.getSeconds() + "." + dtVar2.getMilliseconds() +'<br />|</result>');
    msg = '<!DOCTYPE html><html>';
    msg = msg + ' <head><meta charset="utf-8"><title>My test page</title>';
    msg = msg + `<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>`;
    //msg = msg + `<link href="styles/style.css" rel="stylesheet" type="text/css"></head>`;
    msg = msg + `<body>`;
    msg = msg + `<h1>Mozilla is cool</h1>`;
    //file:///home/akaarna/nodejs/images/firefox-icon.png
    //msg = msg + `<img src="https://findicons.com/files/icons/783/mozilla_pack/128/firefox.png" alt="Firefox logo: a flaming fox surrounding the Earth." width="200" >`;
    //msg = msg + `<img src="file:///home/akaarna/nodejs/images/firefox-icon.png" alt="Firefox logo: a flaming fox surrounding the Earth." width="200" >`;
    msg = msg + `<img src="images/firefox-icon.png" alt="Firefox logo: a flaming fox surrounding the Earth." width="200" >`;
    msg = msg + '<br />' + txt;
    msg = msg + `</body></html>`;
    res.write(msg);
    res.end();
}); // return value is HTTP server object.
var dtVar = new Date();
console.log('after http.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
var dtVar = new Date();
objHttpServer.listen(port); // no return value.
console.log('HttpServer.listen(port) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
