'use strict';

const fs = require('fs');

let dtVar = new Date();
console.log('Begin of MAIN script ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

fs.readFile('./app.html', (err, data) => {
  setTimeout(() => {
    console.log('setTimeout callback');
  }, 0);
  // setImmediate() is designed to execute a script once the current poll phase completes.
  setImmediate(() => { // will be always executed BEFORE setTimeout insice I/O cycle!
    console.log('setImmediate callback');
  });
  // Any time you call process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved BEFORE the event loop continues.
  process.nextTick(() => {
    console.log('nextTick() callback');
  });
  dtVar = new Date();
  console.log("fs.readFile done " + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  let msg = '';
  if (err) {
    console.log(err);
  }
  else {
    msg += data;
    console.log(msg.substring(0,8));
  }
});


const EventEmitter = require('events');
const util = require('util');

/* Old fashion code.
function MyEmitter() {
  EventEmitter.call(this);
  //this.emit('event'); // does not work.
  // use nextTick to emit the event once a handler is assigned
  process.nextTick(() => {
    this.emit('event');
  });
}
//util.inherits(MyEmitter, EventEmitter);
*/

class MyEmitter extends EventEmitter {
  constructor () {
    super();
    console.log('an event NOT fired because event handler callback is not assigned!' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    //this.emit('event'); // does not work. You can't emit an event from the constructor immediately because the script will not have processed to the point
    // where the user assigns a callback handler to that event.
    // use nextTick to emit the event immediatelly after main script ended and once a handler is assigned.
    // Any time you call process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved BEFORE the event loop continues.
    ///*
    process.nextTick(() => {
      dtVar = new Date();
      console.log('an event fired used process.nextTick()!' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      this.emit('event'); // an event fired AFTER main script!!!
    });
    //*/
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  dtVar = new Date();
  console.log('an event occurred!' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
});
dtVar = new Date();
console.log('an event callback handler assigned!' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//myEmitter.emit('event'); // an event fired in main script!!!

dtVar = new Date();
console.log("End of MAIN script ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
