'use strict';

const fs = require('fs');

let dtVar = new Date();
console.log('==================================== process.env start' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
let envObj = process.env;
for (let prop in envObj) {
  //console.log(prop + ": " + envObj[prop]);
}
let dtVar = new Date();
console.log('==================================== process.env end' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
/*
let dtVar = new Date();
console.log('==================================== readFileSync' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
let data = fs.readFileSync('../../CW_Document1.html') // 'CW_Document2.html'
let dtVar = new Date();
console.log('==================================== readFileSyncEnd' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/
///*
let dtVar = new Date();
console.log('==================================== readFile' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
// 'C:\Nj\CW_Document1.html' does NOT work - use UNIX style relative path to a filename. Remember, however, that this path will be relative to process.cwd().
//fs.readFile('../../1-Test.txt', function (err, data) { // 'CW_Document1.html'
fs.readFile('superheroes.json', function (err, data) {
  if (err) { // err is null (converted to false) if NO errors occured or Error object (converted to true) if error occured!!!
    console.log(err.stack);
    return;
  }
  let strVar, strVar2, strVar3;
  // data is Buffer class object.Now when TypedArray has been added in ES6, the Buffer class implements the Uint8Array API in a manner
  // that is more optimized and suitable for Node.js' use cases.
  strVar3 = '' + data; // data is Uint8Array (Buffer class) and are converted to string expicitly.
  let dtVar = new Date();
  console.log('==================================== strVar3 = \'\' + data;' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(strVar3);
  console.log('====================================');
  strVar = data.toString(); // data is Uint8Array (Buffer class) and are converted to string using toString() method.
  let dtVar = new Date();
  console.log('==================================== data.toString();' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(strVar);
  console.log('====================================');
  strVar2 = String(data); // Global JavaScript String() function converts the value of an object to a string.
  let dtVar = new Date();
  console.log('==================================== String(data);' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(strVar2);
  console.log('====================================');
});
//*/
let dtVar = new Date();
console.log('==================================== END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
