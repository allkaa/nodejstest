'use strict';

var dtVar = new Date();
console.log('==================================== main PROGRAM Net source text started' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

//var port = process.env.PORT || 1337; // if zero or undefined process.env.PORT then set 1337.
var port = 1337; // if zero or undefined process.env.PORT then set 1337.
const hostname = '127.0.0.1';

const https = require('https');
const fs = require('fs');
const sleep = require('system-sleep');

const options = {
  pfx: fs.readFileSync('../../unl_works.pfx'),
  passphrase: 'unl'
};

const httpsServer = new https.createServer(options);
httpsServer.on('error', (err) => {
  var dtVar = new Date();
  //throw err;
  console.log(`httpsServer 'error' event - error code:` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(err.code);
  console.log('httpsServer error stack:');
  console.log(err.stack);
});

httpsServer.on('connection', (socket) => {
  var dtVar = new Date();
  console.log(`httpsServer 'connection' event - client connected at` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
});

// request is class http.IncomingMessage, response is class http.ServerResponse .
httpsServer.on('request', (request, response) => {
  var dtVar = new Date();
  console.log(`httpsServer callback 'request' event =====================================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  request.on('error', (err) => {
    var dtVar = new Date();
    console.log(`request 'error' event =======================================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    // This prints the error message and stack trace to `stderr`.
    console.log('NB!!! Nodejs server request error message and stack treace to strerr');
    console.error(err.stack);
  });
  response.on('error', (err) => {
    var dtVar = new Date();
    console.log(`response 'error' event =====================================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    // This prints the error message and stack trace to `stderr`.
    console.log('NB!!! Nodejs server response error message and stack treace to strerr');
    console.error(err.stack);
  });
  let body = [];
  request.on('data', (chunk) => {
    var dtVar = new Date();
    console.log(`request 'data' event ======================================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    body.push(chunk);
  });
  request.on('end', () => {
    var dtVar = new Date();
    console.log(`request 'end' event =======================================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    body = Buffer.concat(body).toString();
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);
    console.log('=============== body length in decimals = ' + body.length);
    console.log(body);
    console.log('=============================================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    sleep(3 * 1000); // sleep for 3 seconds.
    var dtVar = new Date();
    console.log(`request 'end' event sends response.write(...)+response.end() at ==================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    response.write(request.url + " " + body);
    response.end();
    console.log(`Client disconnected on request.on 'end' event at` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(request.socket.remoteAddress + ' ' + request.socket.remoteFamily + ' ' + request.socket.remotePort);
    //response.write('test'); // NB!!! for terst olnly emulate response write after end error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  request.on('close', () => {
    var dtVar = new Date();
    console.log(`request 'close' event =======================================` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(`Client disconnected on request.on 'close' event at` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(request.socket.remoteAddress + ' ' + request.socket.remoteFamily + ' ' + request.socket.remotePort);
  });
});

httpsServer.listen(port, hostname, () => {
  var dtVar = new Date();
  console.log('httpsServer listen callback ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log('Nodejs server is started and is listening port ' + port)
  console.log(httpsServer.address());
});

var dtVar = new Date();
console.log('==================================== END OF main PROGRAM Net source text' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

