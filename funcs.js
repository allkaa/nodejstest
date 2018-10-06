'use strict';
let dtVar;
dtVar = new Date();
console.log('=============================> START OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
console.log('-------------------------------------------');

let ttt, fff, aaa;
ttt = this; // empty object
//var f = () => { 'use strict'; return this; };
var f = () => { return this; };
ttt = f();
function fff2() {
  ttt = this; // this: undefined in strict mode BUT global in non-strict mode.
}
aaa = fff2();
ttt - 0;
/*
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0; // this: Person in stict mode.

  setInterval(function growUp() { // repeat body every 1000 miliseconds.
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object (because it's where growUp() is executed.), 
    // which is different from the `this`
    // defined by the Person() constructor. 
    this.age++; // this: Timeout in strict mode.
  }, 1000);
}
var p = new Person();
return;
ttt = 0;
*/

/*
function Person() {
  var that = this; // that refers to this: Person
  that.age = 0;

  setInterval(function growUp() { // repeat body every 1000 miliseconds.
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++; // this: Timeout, that in closures is Person age.
  }, 1000);
}
*/

/*
function Person(){
  this.age = 0; // // `this` properly refers to the Person object.
  // using arrow function.
  setInterval(() => { // repeat body every 1000 miliseconds.
    this.age++; // `this` properly still refers to the Person object.
    console.log(this.age);
  }, 1000);
}
var p = new Person();
return;
ttt = 0;
*/

var adder = {
  base: 3,
  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },
  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = { base: 2 };
    return f.call(b, a); // b with base: 2 will be ignored, initial base: 3 will be used.
  }
};
ttt = adder.add(1);         // This would log to 4
ttt = adder.addThruCall(1); // This would log to 4 still

// Arrow functions do not have their own arguments object it is simply a reference to the arguments of the enclosing scope.
function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is 3 (not 10).
  return f(10);
}
ttt = foo(3); // 6

// In most cases, using rest parameters is a good alternative to using an arguments object.
function foo2(n) { 
  var f = (...args) => args[0] + n; // args[0] = 10, n = 1.
  return f(10); 
}
ttt = foo2(1); // 11

// Arrow functions do not have their own this:
var obj = {
  i: 10,
  b: () => console.log(this.i, this), // `this` refers to Object {}.
  c: function() {
    console.log(this.i, this); // 'this' refers to obj as Object {i: 10, b:, c: }
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

// Arrow functions cannot be used as constructors and will throw an error when used with new.
// Arrow functions do not have a prototype property.
// The `yield` keyword may not be used in an arrow function's body
// (except when permitted within functions further nested within it).
// As a consequence, arrow functions cannot be used as generators.
// Arrow functions can have either a "concise body" (expression) or the usual "block body" {}.
// In a concise body, only an expression is specified, which becomes the implicit return value.
// In a block body, you must use an explicit return statement {... return something}.
// Remember to wrap the object literal in parentheses in case or returning as expression:
var func = () => ({foo: 1});
ttt = func();

// Samples of using arrow function:
let empty = (() => {})(); // An empty arrow function returns undefined

ttt = (() => 'foobar')(); // Returns "foobar" (this is an Immediately Invoked Function Expression see 'IIFE' in glossary).

var simple = a => a > 15 ? 15 : a;
//var simple = (a) => {return a > 15 ? 15 : a;}; // same block body form.
ttt = simple(16); // 15
ttt = simple(10); // 10

let max = (a, b) => a > b ? a : b;
ttt = max(5,13);
// Easy array filtering, mapping, ...
var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]

/*
function myFuncT(arg) {
  console.log(`arg was => ${arg}`);
}
let tmId = setTimeout(myFuncT, 1000, 'funky');
//clearTimeout(tmId);
*/

/*
fff = function myFuncT(arg) {
  console.log(`arg was => ${arg}`);
}
*/
//setTimeout(fff, 1000, 'funky');
//setTimeout((arg) => console.log(`arg was => ${arg}`), 1000, 'funky');


///*
// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  let dtVar1 = new Date();
  console.log('I happen sooner' + " " + dtVar1.getSeconds() + "." + dtVar1.getMilliseconds());
  setTimeout( () => {
    let dtVar2 = new Date();
    // deeper code
    console.log('I happen later' + " " + dtVar2.getSeconds() + "." + dtVar2.getMilliseconds());
  }, 1000);
}, 3000);
//*/

/*
// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});
*/

return;


// Old staff below ===========================================================================================
//const fs = require('fs');

//var sum = Function('a','b', 'return a + b'); // calling Function constructor directly.
//var sum = new Function('a','b', 'c = a + b'); // calling Function constructor directly.
//var sum = Function('a','b', 'c = a + b'); // calling Function constructor directly works exactly same way as above.
///*
function sum2(a, b) {
  let c = a + b; // no return statement used case study.
}
//*/
ttt = sum2(2,4); // returns undefined as `this` object.
ttt = new sum2(2,4); // returns sum as `this` object/
ttt = 0;

// Arrow functions.
//ttt = (a, b) => { return a + b;} // statements as body.
//ttt = (a, b) =>  (a + b); // or expression as body.
aaa = (a, b) =>  a + b; // or same expression as body.
ttt = aaa(2,4); // aaa() is not a constructor can not use `new` and `this` is undefined
ttt = ((a, b) =>  (a + b))(2,4);
ttt = 0;

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

ttt = materials.map(material => material.length);
// expected output: Array (4) [8, 6, 7, 9]
ttt = 0;

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2, 9], {x: c} = {x: a + b}) => a + b + c;
ttt = f(); // 6
ttt = 0;

// Declare the function 'myFunc'
function myFunc(theObject) {
  if (this === undefined) {
    theObject.brand = "Toyota"; // `this' is undefined object argument must be used instead.
  }
  else {
    this.brand = "Kia"; // `this' is object passed thru apply() method.
  }
}

// Declare variable 'mycar'; create and initialize a new Object; assign reference to it to 'mycar'.
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

// Logs 'Honda'
ttt = mycar.brand;

// Pass object reference to the function to ser Toyota.
myFunc(mycar); // for such calling `this` will be undefined.
ttt = mycar.brand;
myFunc.apply(mycar); // for such calling `this` will be undefined as mycar object.
ttt = mycar.brand;
ttt = 0;



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

/*
  In JavaScript, functions are first-class objects, because they can have properties and methods just like any 
  other object. What distinguishes them from other objects is that functions can be called.
  In brief, they are Function objects.
  Every function in JavaScript is a Function object.
  See Function for information on properties and methods of Function objects.

  The Function constructor creates a new Function object.
  Calling the constructor directly can create functions dynamically, but suffers from security and similar
  (but far less significant) performance issues similar to eval.
  However, unlike eval, the Function constructor allows executing code in the global scope,
  prompting better programming habits and allowing for more efficient code minification.
*/

//var sum3 = new Function('a','b', 'return a + b'); // calling Function constructor directly.
// or in this form
//var sum3 = new Function('a,b', 'return a + b');
// or in this form without `new`
//var sum3 = Function('a','b', 'return a + b'); // calling Function constructor directly.
//ttt = sum3(2, 6); // expected: 8



console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
