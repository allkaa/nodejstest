//'use strict';

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

// CLOSURES.
// This does not create closures (only empty temporary one to hold possibel outer variables references).
function TestFunc(x,y){
  return x + y;
}
var tf = TestFunc(3,4);
console.log(tf);

// This construction create globally seen closure keeping outer reference to outer variable testvar=3.
/*
let testvar = 3;
function TestFunc2(x,y){
  return x + y + testvar;
}
var tf2 = TestFunc2(1,1);
console.log(tf2);
*/

// nested function forms closure.
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside; // // Return the inner function, thereby exposing it to outer scopes.
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
  return counter; // // Return the inner function, thereby exposing it to outer scopes.
}
// A closure is created when the inner function is somehow made available to any scope outside the outer function e.g.
var closure_counter = cnt(0); // Create closure a function expression that adds 1 to perserved x value starting from 0.
var result3 = closure_counter(); //  Use closure closure_counter - returns 1.
console.log(result3);
var result3 = closure_counter(); //  Use closure closure_counter - returns 2.
console.log(result3);

// An object containing methods for manipulating the inner variables of the outer function can be returned.
var createPet = function(name) {
  var sex; // outer variable for inner functions (object methods).
  
  return {

    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if( typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female') ) {
        sex = newSex;
      }
    }

  } // end of return.
} // end of function.

var pet = createPet('Vivie');
pet.getName();                  // Vivie
pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver

var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // A secret info we do not want outsiders to be able to modify...
  
  return function() {
    return apiCode;
  };
})();
var apicode = getCode();    // Returns the apiCode.

var createPetWrong = function(name) {  // The outer function defines a variable called "name".
  return {
    setName: function(name) {    // The enclosed function also defines a variable called "name".
      name = name;               // How do we access the "name" defined by the outer function?
    }
  }
}
var petwrong = createPetWrong("Tom");
petwrong.setName("Jerry");

// Using the arguments object.
// The arguments variable is "array-like", but not an array.
// It is array-like in that it has a numbered index and a length property.
// However, it does not possess all of the array-manipulation methods.
function myConcat(separator) {
  var result = ''; // initialize empty output string.
  var i;
  // iterate through arguments skipping the very first - separator itself.
  for (i = 1; i < arguments.length; i++) {
    if (i < arguments.length - 1) {
      result += arguments[i] + separator;
    }
    else {
      result += arguments[i];
    }
  }
  return result;
}
var tmpconcat = myConcat(',', 'Tom', 'Jerry');

// Classical JavaScript default parameter.
function multiplyOld(a, b) {
  b = typeof b !== 'undefined' ?  b : 1; // setting b default if undefined (not exists in parameters).
  return a * b;
}
multiplyOld(5); // 5
multiplyOld(5,2); // 10
// Using new ECMAScript 2015 format for default parameter.
function multiply(a, b = 1) { // setting b default if undefined (not exists in parameters).
  return a * b;
}
multiply(5); // 5
multiply(5,2); // 10

// ECMAScript 2015 ...rest parameters as Array object.
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x); // callback arrow function (x=>multiplier*x) is executed for every element of array theArgs.
}
var arr = multiply(2, 1, 2, 3);

// Arrow functions.
'use strict';
// `this` object (undefined in stirct mode) is created in every function call.
function Person() {
  // The Person() constructor defines `this` as itself (Person).
  //this.age = 0;
  let self = this; // Some choose `that` instead of `self`. 
  self.age = 0;

  return {
    grUp: function growUp() {
      // In nonstrict mode, the growUp() function defines `this` 
      // as the global object (Object), which is different from the `this`
      // defined by the Person() constructor.
      self.age++;
      return self.age;
    }
  }
}
var p = new Person();
var pt = p.grUp();

function PersonArrow() {
  this.age = 8;
  return {
    grUp: () => { // arrow function does not have `this` object.
      this.age++; // `this` properly refers to the PersonArrow {age: 8} object.
      return this.age;
    }
  }
}
var pa = new PersonArrow(); // PersonArrow {age: 8} object will be created.
var pat = pa.grUp();

var foo = ['one', 'two', 'three'];
// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];
// with destructuring
//var [first, second, third] = foo; // destruction vars from arrow members.
var [first, ,third] = foo;
// Object properties destruction.
let objDest = { a: 10, b: 20, c: 30 };
var { a, c } = objDest; // destrution vars from object props.
console.log(a); // 10
console.log(c); // 30

// tertial operator.
var status = (a >= 18) ? 'adult' : 'minor';
status = c >= 18 ? 'adult' : 'minor';

// Comma operator.
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];
for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);

var nbrVar = 0777; // 511 in strict mode, octal 777 in non-stirct mode.
nbrVar = 0o777; // ECMA 2015 octal format.

var today = new Date(); // current year.
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set last milliseconds of year 1995.
endYear.setFullYear(today.getFullYear()); // Set year to this year.
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day.
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay; // days left in current year.
//daysLeft = Math.round(daysLeft); //rounded days left in the year.
daysLeft = Math.floor(daysLeft); //rounded days left in the year.

// Strings
// JavaScript automatically converts the string literal or primitive to a temporary String object, calls the method,
// then discards the temporary String object. 
let s = 'foo'; // Creates a String primitive.
console.log(s); // Displays: foo
typeof s; // Returns 'string'.
s = new String('foo'); // Creates a String object.
console.log(s); // Displays: {'0': 'f', '1': 'o', '2': 'o'}
typeof s; // Returns 'object'

var mystring = 'Hello, World!';
var x = mystring.length;
mystring[0] = 'L'; // This has no effect, because strings are immutable to changes.
mystring[0]; // This still returns "H".

// Creating array with non-zero length, but without any items.
let arrayLength = 3;
var arr1 = new Array(arrayLength);
var arr2 = Array(arrayLength); // Array(3);
// This has exactly the same effect
var arr3 = [];
arr3.length = arrayLength;
console.log(arr3);

var aaobj1 = {};
// ...
aaobj1.propo = [1,2,3];
// OR
var aaobj2 = {};
aaobj2 = {propo: [4,5,6]};

//In ES2015, you can use Array.of static method to create arrays with single e.g. Number element.
var arr4 = Array.of(3);
// Index must be integer otherwise property will be created.
var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
console.log(arr[3.4]);   // array property 3.4 is Oranges
console.log(arr['length']);   // brackets notation to access array property length is 0

var array = ['first', 'second', , 'fourth'];

for (i=0; i < array.length; i++) {
  console.log(array[i]);
}
// first
// second
// undefined
// fourth
// Unassigned values are not iterated in a forEach loop.
array.forEach(function(element) {
  console.log(element);
});
// first
// second
// fourth


array.forEach(element => {
  console.log(element);
});
// first
// second
// fourth

/*
callback function is known as iterative methods, because it iterate over the entire array in some fashion.
Each one takes an optional second argument called thisObject.
If provided, thisObject becomes the value of the this keyword inside the body of the callback function.
If not provided, as with other cases where a function is invoked outside of an explicit object context,
this will refer to the global object (window) when using arrow function as callback,
or undefined (NB! also global in NodeJs/JavaScript MS Code) when using normal function as callback.
*/
array.forEach(element => {
  console.log(element);
}, arr);
// first
// second
// fourth

if (array[2] === undefined) { 
  console.log('array[2] is undefined'); // true
} 
// But if manually assign array[2] as undefined.
array = ['first', 'second', undefined, 'fourth'];
array.forEach(function(element) {
  console.log(element);
}, arr);
// first
// second
// undefined
// fourth

// Array prototype methods can be called against other array-like objects. for example:
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
printArguments(1,2,3)

// Array prototype methods can be used on strings as well, since they provide sequential access to their characters
// in a similar way to arrays:
Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr);
});


console.log('');
dtVar = new Date();
console.log('====> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
