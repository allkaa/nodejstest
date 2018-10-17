'use strict';

/*
  Objects in JavaScript.
  Primitives:
    Number
    String
    Boolean
    Symbol (new in ES2015)
    null
    undefined
  Objects:    
    Object
    Function
    Array
    Date
    RegExp
*/

let dtVar;

// Stack, heap, and message queue
// Function calls form a stack of frames.
// Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory.
/*
  A JavaScript runtime uses a message queue, which is a list of messages to be processed.
  Each message has an associated function which gets called in order to handle the message.
  At some point during the event loop, the runtime starts handling the messages on the queue,  starting with the oldest one.
  To do so, the message is removed from the queue and its corresponding function is called
  with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.
  The processing of functions continues until the stack is once again empty.
  Then the event loop will process the next message in the queue (if there is one).
*/
/*
  The event loop got its name because of how it's usually implemented, which usually resembles:
  while (queue.waitForMessage()) {
    queue.processNextMessage();
  }

  Methoe queue.waitForMessage() waits synchronously for a message to arrive if there is none currently.
  Each message is processed completely before any other message is processed. 

  Messages are added anytime an event occurs and there is an event listener attached to it.
  If there is no listener, the event is lost.

  A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks.
  Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query
  or an XHR request to return, it can still process other things like user input. 
  Legacy exceptions exist like alert or synchronous XHR, but it is considered as a good practice to avoid them. 
*/
dtVar = new Date()
console.log('====> START OF PROGRAM message and setTimeout(msg(),delay)' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// Adding message to que (Timeout event).
// Basically, the setTimeout callback event needs to wait for all the code for queued messages to complete
// even though you specified a particular time limit to ZERO for your setTimeout.
/*
  The function setTimeout is called with 2 arguments: a message to add to the queue, and a time value
  (optional; defaults to 0). The time value represents the (minimum) delay after which the message will actually
  be pushed into the queue.
  If there is no other message in the queue, the message is processed right after the delay; however,
  if there are messages, the setTimeout message will have to wait for other messages to be processed.
  For that reason, the second argument indicates a minimum time and not a guaranteed time.
*/
setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  let dtVar2 = new Date();
  console.log("Timeout message ended " + dtVar2.getSeconds() + "." + dtVar2.getMilliseconds());
}, 0); // zero delay!!!, 1000 - one second.

/*
//  Waiting loop.
const s = new Date().getSeconds();
while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
*/

// system-sleep - pause and re-que PROGRAM message to the end of messages que.
///*
const sleep = require('system-sleep');
dtVar = new Date();
console.log('system-sleep started inside PROGRAM message ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
sleep(2 * 1000); // sleep for 2 seconds
dtVar = new Date();
console.log('system-sleep ended inside PROGRAM message ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//*/



dtVar = new Date()
console.log('====> END OF PROGRAM message' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
// Note that function return, which not defined, happens here.
