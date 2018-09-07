'use strict';

const fs = require('fs');

let dtVar = new Date();
console.log('====> process.env start' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
let envObj = process.env;
for (let prop in envObj) {
  //console.log(prop + ": " + envObj[prop]);
}
dtVar = new Date();
console.log('====> process.env end' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//
/*
dtVar = new Date();
console.log('====> readFile' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
// 'C:\Nj\CW_Document1.html' does NOT work - use UNIX style relative path to a filename. Remember, however, that this path will be relative to process.cwd().
//fs.readFile('../../1-Test.txt', function (err, data) { // 'CW_Document1.html'
fs.readFile('./superheroes.json', function (err, data) {
  if (err) { // err is null (converted to false) if NO errors occured or Error object (converted to true) if error occured!!!
    console.log(err.stack);
    return;
  }
  let strVar, strVar2, strVar3;
  // data is Buffer class object.Now when TypedArray has been added in ES6, the Buffer class implements the Uint8Array API in a manner
  // that is more optimized and suitable for Node.js' use cases.
  strVar3 = '' + data; // data is Uint8Array (Buffer class) and are converted to string expicitly.
  dtVar = new Date();
  console.log('====> strVar3 = \'\' + data;' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(strVar3);
  console.log('====================================');
  strVar = data.toString(); // data is Uint8Array (Buffer class) and are converted to string using toString() method.
  dtVar = new Date();
  console.log('====> data.toString();' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(strVar);
  console.log('====================================');
  strVar2 = String(data); // Global JavaScript String() function converts the value of an object to a string.
  dtVar = new Date();
  console.log('====> String(data);' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(strVar2);
  console.log('====================================');
});
//
*/

///*
dtVar = new Date();
console.log('====> readFileSync' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
let data = fs.readFileSync('superheroes.json') // or use fs.readFileSync('./superheroes.json')
dtVar = new Date();
console.log('====> readFileSyncEnd' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//*/

console.log('====================================');
let strVar, strVar2, strVar3;
// data is Buffer class object.Now when TypedArray has been added in ES6, the Buffer class implements the Uint8Array API
// in a manner that is more optimized and suitable for Node.js' use cases.
strVar = '' + data; // data is Uint8Array (Buffer class) and are converted to string expicitly.
//dtVar = new Date();
//console.log('====> strVar = \'\' + data;' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//console.log(strVar);
//console.log('====================================');
strVar2 = data.toString(); // data is Uint8Array (Buffer class) and are converted to string using toString() method.
//dtVar = new Date();
//console.log('====> data.toString();' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//console.log(strVar2);
//console.log('====================================');
strVar3 = String(data); // Global JavaScript String() function converts the value of an object to a string.
//dtVar = new Date();
//console.log('====> String(data);' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
//console.log(strVar3);
console.log('====================================');

for (let i=0; i < strVar.length; i = i + 1) {
//    console.log(strVar[i].charCodeAt()); // Returns a number that is the UTF-16 code unit value at the given index.
}

let objVar = JSON.parse(strVar); // create JavaScript object from JSON string data. NB! \n and spaces ignored.
let strVarJson = JSON.stringify(objVar); // create JSON string data without \n and spaces.
let strVarJson2 = JSON.stringify(objVar,null,"  "); // create JSON string data with \n and indent spaces.
let objVar2 = JSON.parse('"test string1"');
let strVarJson3 = JSON.stringify('test string2')
let objVar3 = JSON.parse("[1,2.3]");
let strVarJson4 = JSON.stringify([3,4,5])

// Function expression.
let baz = function() {
  console.log("baz function expression called");
};

baz(); // call functioini expression.

// Any object which value is not undefined or null (including a Boolean object whose value is false!!!)
// evaluates to true when passed to a conditional statement.
let blnObj = new Boolean(false);
if (blnObj) {
  console.log(blnObj);
}
if (Boolean.prototype.valueOf(blnObj)) { // eval to false.
  console.log(blnObj);
}
if (blnObj == false) { // comarisioin will be equal to true (false eq false).
  console.log(blnObj.toString());
}
let blnObj2 = new Boolean(true);
if (Boolean.prototype.valueOf(blnObj2)) { // also eval to false!!!
  console.log(blnObj2);
}

console.log('');
var bad;
try {
  //throw 'Error2';   // String type throw 'Error2'
  //throw 42;         // Number type throw 42
  //throw true;       // Boolean type throw ture
  //throw {errorMsg: "Error code 0010"};
  // Next statement throws object with overlapped to toSting method.
  //throw {toString: function() { return "I'm an e object! I report that exception occured."; }};
  //throw (new Error("created Error object message")); // implicitly create Error object with name 'Error' and errormsg 'created Error object message'.
  bad = ttt/0; // RefernceError exception thrown - new Error object will be created implicitly with name 'RefernceError' and message 'ttt is not defined'.
}
catch (e) {
  //console.log("ERROR catched: " + e.errorMsg);
  //console.log("ERROR catched: " + e.toString);
  //console.log("ERROR catched: " + e.toString());
  console.log(e.name); // e.name got from __proto__ name as 'Error'.
  console.log(e.message);
}

var arr = [3, 5, 7];
arr.foo = 'hello';
for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo" - properties names.
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7 - array iterable objects.
}

console.log('');
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log('');
console.log(factorial(3));

console.log('');
function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
var f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers); // function f passed as argument to other function cube;
console.log(cube);

// Using Funcion constructor to reate functions dynamically.
var sum = new Function('a', 'b', 'return a + b'); // NB! all formal arguments as strings!!!
console.log(sum(2, 6));

let testvar = 3;
function TestFunc(x,y){
  return x + y + testvar;
}
console.log(TestFunc(1,2));

// nested function forms closure.
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
var fn_inside = outside(3); // Create closure. Think of it like: create a function expression that adds 3 to whatever you give it.
var result = fn_inside(5); //  Use closure fn_inside - returns 8.
console.log(result);
var result1 = outside(3)(5); // 3 for outside, 5 for insice - returns 8 and new closure is created for each call to outside.
console.log(result1);
var result2 = outside(1)(5); // 1 for outside, 5 for inside - returns 6 and new closure is created for each call to outside/
console.log(result2);



// Counter nested function forms closure.
function cnt(x) {
  function counter() {
    x = x + 1;
    return x;
  }
  return counter;
}
var closure_counter = cnt(0); // Create closure a function expression that adds 1 to perserved x value starting from 0.
var result3 = closure_counter(); //  Use closure closure_counter - returns 1.
console.log(result3);
var result3 = closure_counter(); //  Use closure closure_counter - returns 2.
console.log(result3);



console.log('');
dtVar = new Date();
console.log('====> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
