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




function avg(...args) { // use rest parameter syntax.
  var sum = 0;
  for (let value of args) { // use for ... of loop.
    sum += value;
  }
  return sum / args.length;
}
//ttt = avg(2, 3, 4, 5); // 3.5
// use apply() with arbitraty params
ttt = avg.apply(null, [2, 3, 4, 5]); // 3.5. The first argument to apply() is the object that should be treated as 'this`.
let numbers = [2,3,4,5];
ttt = avg(numbers); // gives NaN
ttt = avg(null, numbers); // gives NaN
ttt = avg.apply(null, numbers); // gives 3.5
ttt = avg(...numbers); //gives 3.5

// 

console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
