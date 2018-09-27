'use strict';

const fs = require('fs');

let dtVar = new Date();
console.log('=============================> START OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
console.log('-------------------------------------------');

const sleep = require('system-sleep');
/*
dtVar = new Date();
console.log('Begin sleep ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
sleep(5 * 1000); // sleep for 5 seconds
dtVar = new Date();
console.log('Sleep ended ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/

/*
// Creation of a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive)
// spaced step apart. Its final return value is the size of the sequence it created.
//
// Once created, an iterator object can be iterated explicitly by repeatedly calling next() method.
// Iterating over an iterator is said "to consume the iterator", because it is generally only possible to do once.
// After a terminating value has been yielded additional calls to next() simply continue to return {done: true}.
//
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  var nextIndex = start;
  var n = 0; // size of the sequence.
  var returned = false;

  var rangeIterator = {
     next: function() {
         var result;
         if (nextIndex < end) {
             result = { value: nextIndex, done: false }
             nextIndex += step;
             n += 1;
         } else if (!returned) { // last call - size of sequence and true will be returned.
             result = { value: n, done: true }
             returned = true;
         } else {  // final value already returned
             result = { done: true }
         }
         return result;
     }
  };
  return rangeIterator;
}

let it = makeRangeIterator(1, 10, 2);

var result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}
console.log("Iterated over sequence of size: ", result.value); // 5
result = it.next(); // Object {done: true} - next() called after last iterated element.
*/

// Same using generators thru function* statement.
// When called initially, generator functions do not execute any of their code, instead returning
// a type of iterator called a Generator.
// When a value is consumed by calling the generator's next method, the Generator function executes until
// it encounters the yield keyword.
function* makeRangeIteratorAsGenerator(start = 0, end = Infinity, step = 1) {
  let n = 0;
  for (let i = start; i < end; i += step) {
      n += 1;
      yield i;
  }
  return n;
}

let itGen = makeRangeIteratorAsGenerator(1, 10, 2);

var result = itGen.next();
while (!result.done) {
  let ttt;
  //console.log(result.value); // 1 3 5 7 9
  ttt = result.value; // 1 3 5 7 9
  result = itGen.next();
}
console.log("Iterated over sequence of size: ", result.value); // 5
result = itGen.next(); // Object {value: undefined, done: true} - next() called after last iterated element.

console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
