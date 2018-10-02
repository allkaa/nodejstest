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
*/

// This construction create globally seen closure keeping outer reference to outer variable testvar=3.
/*
let testvar = 3;
function TestFunc2(x,y){
  return x + y + testvar;
}
var tf2 = TestFunc2(1,1);
console.log(tf2);
*/

/*
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
*/

let ttt;

/*
function add() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}
ttt = add(); // NaN
ttt = add(2,3,4) // 9

function avg(...args) { // use rest parameter syntax ...args
  var sum = 0;
  for (let value of args) { // use for ... of loop.
    sum += value;
  }
  return sum / args.length;
}
ttt = avg(2, 3, 4, 5); // gives 3.5 ...args Array(4) [2,3,4,5] and this: undefined
// JavaScript lets you call a function with an arbitrary array of arguments, using the apply() method of
// any function object.
 // The first argument to apply() is the object that should be treated as 'this`.
ttt = avg.apply(null, [2, 3, 4, 5]); // 3.5 ...args Array(4) [2,3,4,5] and this: null
let numbers = [2,3,4,5];
ttt = avg(numbers); // gives NaN ...args will be Array(1) [Array(4)] and this: undefined
ttt = avg(null, numbers); // gives NaN ...args will be Array(2) [null, Array(4)] and this: undefined
ttt = avg.apply(null, numbers); // gives 3.5 ...args Array(4) [2,3,4,5] and this: null
// Using the spread operator in the function call.
ttt = avg(...numbers); // 3.5 ...args Array(4) [2,3,4,5] and this: undefined
*/

// Anonymous functions.

// Anonymous function lets you put a full function definition anywhere that you would normally put an expression.
// This enables all sorts of clever tricks. Here's a way of "hiding" some local variables — like block scope in C.
/*
var a = 1;
var b = 2;

// IIFEs (Immediately Invoked Function Expressions) using.
(function() {
  var b = 3; // hiding b in outer scope.
  a += b;
})();

a; // 4
b; // 2
*/

// Recursion
var factorial = function fac(n) {
   return n < 2 ? 1 : n * fac(n - 1); 
  };
ttt = factorial(3);

// Using  IIFEs (Immediately Invoked Function Expressions).
ttt = (function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); 
 })(3);



/*
  Objects in JavaScript:
    Number
    String
    Boolean
    Symbol (new in ES2015)
    Object
        Function
        Array
        Date
        RegExp
    null
    undefined
*/
 
console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
