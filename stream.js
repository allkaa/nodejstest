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
//const stream = require('stream');  // accessing stream module. It has functions: PassThrough, Readable and Stream. Prototype EventEmitter.
// Normally all streams created by Node.js APIs operate exclusively on strings and Buffer (or Uint8Array) objects.
// Stream instances may be switched into object mode using the objectMode option when the stream is created.

/*
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
// using curl sending data in POST method body.
// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"
*/

//const stream = require('stream'); // accessing stream module. It has functions: PassThrough, Readable and Writable. Prototype EventEmitter.

/*
const { PassThrough, Writable } = require('stream'); // Destructing.  Functions PassThrough and Writable uset to declare class prototypes.
const passthu = new PassThrough(); // PassThrough class instance _readableState.flowing: null, readable:true, writable:true.
//const writable = new Writable(); // Writable class instance.

passthu.on('data', (chunk) => { // _readableState.flowing: true arger attacheng listener callbak to event 'data';
  console.log(chunk.toString());
});
passthu.emit('data','test2');
passthu.write('test3');

//passthu.pipe(writable); // pipe passthu to writable. _readableState.flowing: true
//passthu.unpipe(writable); // uppipe passthu from writable. _readableState.flowing: false data may be accumulating within the streams internal buffer.
//passthu.write('test1'); // will not emit 'data' data may be accumulating within the streams internal buffer.
//passthu.resume(); // must be called to make 'data' being emitted
//
*/

const fs = require('fs');
const stream = require('stream'); // accessing stream module. It has functions: PassThrough, Readable and Writable. Prototype EventEmitter.
const readable = new stream.Readable();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt'

/*
writable.write('test msg2');
writable.end('EOF');
*/

//readable.pipe(writable);
let msg = '';
readable.on('data', (chunk) => { // _readableState.flowing: true arger attacheng listener callbak to event 'data';
  //console.log(chunk.toString());
  msg += chunk;
});
readable.on('end', () => {
  //console.log(msg);
  //msg += ' already logged!'
  writable.write(msg);
  writable.end();
});
readable.emit('data','test1\n');
readable.emit('data','EOF');
//readable.emit('end'); // NB! After end of main program script readable 'end' event will be emitted implicitlyl!!!
readable.destroy(); // NB!!! Must be otherwise error thrown.


dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// NB! After end of main program script readable 'end' event will be emitted implicitlyl!!!