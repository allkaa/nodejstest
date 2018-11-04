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

// Streams can be readable, writable, or both. All streams are instances of EventEmitter.
const stream = require('stream'); // accessing stream module.
// Normally all streams created by Node.js APIs operate exclusively on strings and Buffer (or Uint8Array) objects.
// Stream instances may be switched into object mode using the objectMode option when the stream is created.

// using streams in a Node.js application that implements an HTTP server.
const http = require('http');
const server = http.createServer((req, res) => {
  // req is an http.IncomingMessage, which is a Readable Stream.
  // res is an http.ServerResponse, which is a Writable Stream.

  let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8'); // Uint8Array

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  // the end event indicates that the entire body has been received
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // write back something interesting to the user:
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});
server.listen(1337);
// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"



dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

