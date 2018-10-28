'use strict';

/*
// NB! The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable,
// just that the variable identifier cannot be reassigned.
// For instance, in the case where the content is an object, this means the object's contents (e.g., its parameters) can be altered.
const myArr = [0, 1, 3];
console.log(myArr[1]);
myArr[1] = 10; // OK.
console.log(myArr[1]);

const myObj = { f:0, s:1, t:2};
console.log(myObj.s);
myObj.s = 10; // OK.
console.log(myObj.s);

const myString = "012";
console.log(myString[1]);
//myString[1] = "B"; // read only case!
console.log(myString.charAt(1));
//myString.charAt(1) = "B"; // myString.charAt(1) cannot be left handed!

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.
const req = { first: 1, method: 'POST', url: '/', last: 5 };
const { method, url } = req; // two new constsants - method and url will be set as 'POST' and '/'

//if (true) return;

*/

let dtVar = new Date();
console.log('Begin of PROGRAM text ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const envObj = process.env;
for (let prop in envObj) {
  //console.log(prop + ": " + envObj[prop]);
}
//console.log(prop + " <== for availability test"); // NB! prop is NOT available outside of for/in loop!!!
//dtVar = new Date();
//console.log('====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());


const events = require('events'); // // Import events module.
// Prototype stype.
const myEmitter = new events.EventEmitter(); // prototype style new myEmitter class instance created also works.
// Class style.
//class MyEmitter extends events { } // MyEmitter class is child on events class --> events is function EventEmitter() and it is used as class constructor.
//const myEmitter = new MyEmitter(); // new MyEmitter (EventEmitter child) class instance created.

// Create an event handler for 'connectioin' event as follows.
const connectionHandler = function connected() {
  dtVar = new Date;
  console.log('connection succesful.' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  // Fire the data_received event internally from connection event handler. 
  myEmitter.emit('data_received');
}

// Bind the connection event with the handler.
myEmitter.on('connection', connectionHandler);

/*
// Bind the data_received event with anonymous function.
myEmitter.on('data_received', function () {
  dtVar = new Date;
  console.log('data received succesfully.' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
});
*/

//*
// Bind the data_received event with arrow-function function.
myEmitter.on('data_received', () => {
  dtVar = new Date;
  console.log('data received succesfully.' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
});
//*/

// Test using setTimeout().
dtVar = new Date;
let delay = 3000; // delay in milliseconds.
console.log(`Set ${delay} milliseconds Timeout for an 'connection' event` + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
setTimeout(() => {
  myEmitter.emit('connection'); // fire 'connectoin' event.
}, delay);

dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());


//  Non class (protoype object model) sample.
/*
// Import events module.
const events = require('events');

// Create an eventEmitter class object.
const eventEmitter = new events.EventEmitter(); // new eventEmitter class instance created.

// Create an event handler as follows.
const connectionHandler = function connected() {
  console.log('connection succesful.' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  // Fire the data_received event internally from connection event handler. 
  eventEmitter.emit('data_received');
}

// Bind the connection event with the handler.
eventEmitter.on('connection', connectionHandler);

// Bind the data_received event with the anonymous function.
eventEmitter.on('data_received', function () {
  console.log('data received succesfully.' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
});

// Fire the connection event 
eventEmitter.emit('connection');
*/
