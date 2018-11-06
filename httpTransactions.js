'use strict';

let dtVar = new Date();
console.log('Begin of PROGRAM text ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const envObj = process.env;
for (let prop in envObj) {
  //console.log(prop + ": " + envObj[prop]);
}
//console.log(prop + " <== for availability test"); // NB! prop is NOT available outside of for/in loop!!!
//dtVar = new Date();
//console.log('====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const http = require('http');

const server = http.createServer();
server.on('request', (request, response) => {
  // the same kind of magic happens here!
  const { method, url } = request; // request object is an instance of IncomingMessage.
  // url is the full URL without the server, protocol or port. For a typical URL, this means everything after and including the third forward slash.
  const { headers } = request;
  const userAgent = headers['user-agent'];

});





dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

