'use strict';

//const fs = require('fs');

let dtVar = new Date();
console.log('=============================> START OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
console.log('-------------------------------------------');

//const sleep = require('system-sleep');
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

/*
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

let itGen = makeRangeIteratorAsGenerator(1, 10, 2); // initially returning iterator called a Generator.

var result = itGen.next();
let ttt;
while (!result.done) {
  //console.log(result.value); // 1 3 5 7 9
  ttt = result.value; // 1 3 5 7 9
  result = itGen.next();
}
console.log("Iterated over sequence of size: ", result.value); // 5
result = itGen.next(); // Object {value: undefined, done: true} - next() called after last iterated element.
*/

// Iterables. We can make our own iterables like this:
var myIterable = {
  *[Symbol.iterator]() {
      yield 1; // return for 1-st call from for .. of loop.
      yield 2; // return for 2-nd call.
      yield 3; // return for 3-rd call.
  }
}

for (let value of myIterable) { 
  console.log(value); 
}
// 1
// 2
// 3
// or use construction [...myIterable] to get array of yield values.
var ttt = [...myIterable]; // ttt will be Array(3) [1, 2, 3]
console.log([...myIterable]); // expected output: Array(3) [1, 2, 3]

// More clear syntax sample.
const iterable1 = new Object();
let tttProp = 'testProperty';
iterable1[tttProp] = 'ttt string'; // create new testPropety simply as sample of new property creation;
// create new property special Symbol.iterator as generator() to create iterable - method with Symbol.iterator key.
iterable1[Symbol.iterator] = function* () {
  yield 4;
  yield 'string 5';
  yield true;
};
ttt = [...iterable1];

/*
 String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects
  all have a Symbol.iterator method.
 Some statements and expressions are expecting iterables, for example
  the for-of loops, spread syntax, yield*, and destructuring assignment e.g.:

for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // get ["a", "b", "c"] array from string.

function* gen() {
  yield* ['a', 'b', 'c'];
}
gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
a; // "a"

*/

// forEach() iterating over array.
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
  let ttt = currentValue;
});


function avg(...args) { // use rest parameter syntax.
  var sum = 0;
  for (let value of args) { // use for ... of loop.
    sum += value;
  }
  return sum / args.length;
}
//ttt = avg(2, 3, 4, 5); // 3.5
// use apply() with arbitraty params
ttt = avg.apply(null, [2, 3, 4, 5]); // 3.5
let numbers = [2,3,4,5];
ttt = avg(numbers); // gives NaN
ttt = avg(null, numbers); // gives NaN
ttt = avg.apply(null, numbers); // gives 3.5
ttt = avg(...numbers); //gives 3.5


console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
