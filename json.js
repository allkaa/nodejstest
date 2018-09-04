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
try {
  //throw 'Error2';   // String type throw 'Error2'
  //throw 42;         // Number type throw 42
  //throw true;       // Boolean type throw ture
  //throw {errorMsg: "Error code 0010"};
  throw {toString: function() { return "I'm an e object! I report that exception occured."; }};
}
catch (e) {
  //console.log("ERROR catched: " + e.errorMsg);
  //console.log("ERROR catched: " + e.toString);
  console.log("ERROR catched: " + e.toString());
}

console.log('');
dtVar = new Date();
console.log('====> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
