'use strict';

//const fs = require('fs');

//const sleep = require('system-sleep');
/*
dtVar = new Date();
console.log('Begin sleep ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
sleep(5 * 1000); // sleep for 5 seconds
dtVar = new Date();
console.log('Sleep ended ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/

let dtVar;
dtVar = new Date();
console.log('=============================> START OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
console.log('-------------------------------------------');

let aaa, aaa1, aaa2, aaa3;

/*
// Arrow functions Start Of ============================================================================================
aaa = this; // empty object -  Object {}
//var f = () => { 'use strict'; return this; };
var f = () => { return this; }; // this - Object {}
aaa1 = f();
function ff() {
  aaa3 = this; // this: undefined in strict mode BUT global in non-strict mode.
}
aaa2 = ff();
//return;
*/

/*
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0; // this: Person in stict mode.

  setInterval(function growUp() { // repeat body every 1000 miliseconds.
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object (because it's where growUp() is executed.), 
    // which is different from the `this`
    // defined by the Person() constructor. 
    this.age++; // this: Timeout not a Person in strict mode.
  }, 1000);
}
var p = new Person();
return;
aaa = 0;
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
aaa = 0;
*/

/*
// Convert function Person() to ES2015 class Person.
class Person {
  constructor(ageEmp) {
    this.age = ageEmp || 0; // constructor property is not possible to change later for all descendants.
    // use arrow function for correct refer to Person object.
    setInterval(() => { // repeat body every 1000 miliseconds.
      aaa = this.age++; // `this` properly still refers to the Person object.
    }, 1000);
    }
}
var p = new Person();
return;
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
// Ignoring `this` param in call() or apply() methods.
var adder = {
  base: 3,
  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },
  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = { base: 2 };
    return f.call(b, a); // b with base: 2 as first param will be ignored, initial base: 3 will be used instead.
  }
};
aaa = adder.add(1);         // This would log to 4
aaa = adder.addThruCall(1); // This would log to 4 still
*/

/*
// Arrow functions do not have their own arguments object it is simply a reference to the arguments of the enclosing scope.
function foo1(n) {
  var f = () => arguments[0] + n; // foo1's implicit arguments binding. arguments[0] is 3 (not 10).
  return f(10);
}
aaa = foo1(3); // 6

// In most cases, using rest parameters is a good alternative to using an arguments object.
function foo2(n) { 
  var f = (...args) => args[0] + n; // args[0] = 10, n = 1.
  return f(10); 
}
aaa = foo2(1); // 11

// Arrow functions do not have their own `this`:
var obj1 = {
  i: 10,
  b: () => console.log(this.i, this), // `this` refers to Object {}.
  c: function() {
    console.log(this.i, this); // 'this' refers to obj as Object {i: 10, b:, c: }
  }
}
obj1.b(); // prints undefined, Window {...} (or the global object)
obj1.c(); // prints 10, Object {...}
*/

// Arrow functions cannot be used as constructors and will throw an error when used with new.
// Arrow functions do not have a prototype property.
// The `yield` keyword may not be used in an arrow function's body
// (except when permitted within functions further nested within it).
// As a consequence, arrow functions cannot be used as generators.
// Arrow functions can have either a "concise body" (expression) or the usual "block body" {}.
// In a concise body, only an expression is specified, which becomes the implicit return value.
// In a block body, you must use an explicit return statement {... return something}.

/*
// Remember to wrap the object literal in parentheses in case or returning as expression:
var func = () => ({foo: 1});
aaa = func();

// Samples of using arrow function:
let empty = (() => {})(); // An empty arrow function returns undefined

aaa = (() => 'foobar')(); // Returns "foobar" (it is an Immediately Invoked Function Expression see 'IIFE' in glossary).

var simple = a => a > 15 ? 15 : a;
//var simple = (a) => {return a > 15 ? 15 : a;}; // same block body form.
aaa = simple(16); // 15
aaa = simple(10); // 10

let max = (a, b) => a > b ? a : b;
aaa = max(5,13);
// Easy array filtering, mapping, ...
var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]
*/

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


/*
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
*/

/*
// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});
*/

//return;
// Arrow functions End Of ============================================================================================


// Old staff below ===========================================================================================

//var sum = Function('a','b', 'return a + b'); // calling Function constructor directly.
//var sum = new Function('a','b', 'c = a + b'); // calling Function constructor directly.
//var sum = Function('a','b', 'c = a + b'); // calling Function constructor directly works exactly same way as above.

/*
// No return used case.
function sum2(a, b) {
  let c = a + b; // no return statement used - case study.
}
aaa = sum2(2,4); // returns undefined as `this` object.
aaa = new sum2(2,4); // returns sum2 as `this` object/
aaa = 0;
*/

/*
// Arrow functions.
//aaa = (a, b) => { return a + b;} // statements as body.
//aaa = (a, b) =>  (a + b); // or expression as body.
aaa = (a, b) =>  a + b; // or same expression as body.
aaa = aaa(2,4); // aaa() is not a constructor can not use `new` and `this` is undefined
aaa = ((a, b) =>  (a + b))(2,4);
aaa = 0;

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

aaa = materials.map(material => material.length);
// expected output: Array (4) [8, 6, 7, 9]
aaa = 0;

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2, 9], {x: c} = {x: a + b}) => a + b + c;
aaa = f(); // 6
aaa = 0;
*/

/*
// Using apply() method.
// Declare the function 'myFuncCar'
function myFuncCar(theObject) {
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
aaa = mycar.brand;

// Pass object reference to the function to ser Toyota.
myFuncCar(mycar); // for such calling `this` will be undefined.
aaa = mycar.brand;
myFuncCar.apply(mycar); // for such calling `this` will be  mycar object.
aaa = mycar.brand;
aaa = 0;
*/

/*
// conditional hoisting is not recommended.
var hoisted = "foo" in this; // returns false or true.
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (true) { // foo will not hoisted despite true of false.
  function foo(){ return 1; }
}
*/

// Defining method functions.
// Getter (accessor) and setter functions.
/*
var obj = {
  log: ['a', 'b', 'c'],
  get latest() { // pseudo-property latest for object obj.
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
}
aaa = obj.latest; // expected output: "c"
delete obj.latest; // delete pseudo-property latest.
*/

/*
// To append a getter to an existing object later at any time, use Object.defineProperty().
var o = {a: 0};
Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } }); // adding getter with property name b.
aaa = o.b; // Runs the getter, which yields a + 1 (which is 1)

// Using a computed property name.
var expr = 'foo';
var obj = {
  get [expr]() { return 'bar'; }
};
aaa = obj.foo; // "bar"
aaa = obj[expr]; // "bar"
*/

/*
// get Vs. defineProperty
// using class.
class Example {
  get hello() {
    return 'world';
  }
}
const obj = new Example();
aaa = obj.hello; // "world"
aaa = Object.getOwnPropertyDescriptor(obj, 'hello'); // undefined obj does not have property hello - prototype has,
aaa = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello'); // prototype has.
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }

class Example2 {
}
const obj2 = new Example2();
Object.defineProperty(obj2, 'hello', { get: function() { return 'world';}});
aaa = obj2.hello; // "world"
aaa = Object.getOwnPropertyDescriptor(obj2, 'hello'); // hello - obj2 has it,
aaa = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj2), 'hello'); // prototype has not.
*/

/*
// Gettrs and Setters.
var language = {
  log: [],
  get current() {
    return this.log;
  },
  set current(name) {
    this.log.push(name);
  },
}
aaa = language.current;
language.current = 'EN';
aaa = language.current; // ['EN']
language.current = 'FA';
aaa = language.current; // ['EN', 'FA']
delete language.current;
Object.defineProperty(language, 'current', {
   get() { return this.log; }, // Using shorthand method names (ES2015 feature).
   set(name) { this.log.push(name); }, 
   configurable: true, // default is false, but true for standard declartion.
   enumerable: true, // default is false, but true for standard declartion.
   });

   Object.defineProperty(language, 'shortM', {
    value: function(i) { return this.log[i]; }, // adding data property shortM as function.
    configurable: true, // default is false, but true for standard declartion.
    enumerable: true, // default is false, but true for standard declartion.
    });

aaa = language.current; // ['EN', 'FA']
language.current = 'EN'; // ['EN', 'FA', 'EN']
aaa = language.shortM(1);
*/

/*
//  Using shorthand method names (ES2015 feature).
var objT = {
  foo: function() {
    return 'foo standard';
  },
  bar: function() {
    return 'bar standard';
  },
  fooShort() { //  shorthand method (ES2015 feature).
     return 'foo short';
  },
  barShort() {
     return 'bar short';
  }
};
*/

/*
// Constructor vs. declaration vs. expression

// A function defined with the Function constructor assigned to the variable multiplyConstructor.
// Create function with name anonymous and assign itn to variable.
let multiplyConstructor = new Function('x', 'y', 'return x * y');

// A standard function declaration of a function named multiplyDeclaration.
// Creates a variable with same name as function name in this case multiplyDeclaration.
// Is hoisted!!!
function multiplyDeclaration(x, y) {
  return x * y;
} // there is no semicolon here!

// A function expression of an anonymous function assigned to the variable.
let multiplyExpAnonym = function(x, y) {
  return x * y;
};

// A function expression of a function named func_name assigned to the variable.
// NB! func_name can be used only within function body.
// Otherwise generate error ReferenceError: func_name is not defined
let multiplyExpNamed = function func_name(x, y) {
  console.log(typeof func_name); // // NB! func_name can be used only within function body.
  return x * y;
};
//aaa = multiplyExpNamed(3,5); // 15
//aaa = func_name(5,6); // Generate error ReferenceError: func_name is not defined
*/

// A function defined by a function expression or by a function declaration inherits the current scope.
// That is, the function forms a closure.
// On the other hand, a function defined by a Function constructor does not inherit any scope other than
// the global scope (which all functions inherit).

/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
/*
let p = 5;
function myFunc() {
    let p = 9;

    function decl() {
      return p;
    }
    var expr = function() {
      return p;
    };
    var construct = new Function('return p'); // p is not defined.

    aaa = decl(); // 9  - for 'decl' by function declaration (current scope)
    aaa = expr(); // 9  - for 'expr' by function expression (current scope)
    aaa = construct(); // Error p is not defined  - for 'cons' by Function constructor (global scope)
}
myFunc();
*/

// Functions defined by function expressions and function declarations are parsed only once,
// while those defined by the Function constructor are not.
// That is, the function body string passed to the Function constructor must be parsed each and every time
// the constructor is called.
// Although a function expression creates a closure every time, the function body is not reparsed,
// so function expressions are still faster than "new Function(...)".
// Therefore the Function constructor should generally be avoided whenever possible.

// Function.prototype.bind()
/*
this.a = 9; // but does not propogate to function f and `this` will be undefined in strict mode.
// In non strict mode `this` will be global object but this.a property will be undefined.
function f() {
  return this.a
}
let b = {
  a: 111,
};
aaa = f(); // ERROR! Cannot read property 'x' of undefined. `this` is undefined.
//aaa = f(b); // ERROR! Cannot read property 'x' of undefined. `this` is undefined. 
//let ff = f.bind(b); // create new function object with `this` as b.
//aaa = ff(); // 111
aaa = f.bind(b)(); // create new function object with `this` as b and call it - give 111
*/

// Function.prototype.apply()
/*
function f(x, y) {
  return this.a + x + y;
}
let b = {
  a: 111,
};
//aaa = f(222,333); // ERROR! Cannot read property 'x' of undefined. `this` is undefined.
aaa = f.apply(b,[222,333]); // call function f with `this` as b and params as array, gives 666.
*/

// Function.prototype.call()
/*
function f(x, y) {
  return this.a + x + y;
}
let b = {
  a: 111,
};
//aaa = f(222,333); // ERROR! Cannot read property 'x' of undefined. `this` is undefined.
aaa = f.call(b,222,333); // call function f with `this` as b and params as list, gives 666.
*/

// Difference between Function constructor and function declaration.
/*
  Functions created with the Function constructor do not create closures to their creation contexts;
  they always are created in the global scope. When running them, they will only be able to access their own local variables
  and global ones, NOT the ones from the scope in which the Function constructor was created.
  This is different from using eval with code for a function expression.
*/
aaa1 = new Function(); // empty Function object - function anonymous(), methods used thru Function.prototype, closure created.
// or aaa1 = Function(); // same result as above.
let x = 10;
function createFunction1() {
    let x = 20
    // Nested Constructor does not create closure, at this point `this` is undefined,
    let f = new Function('return x;'); // but inside f() 'this` will be global and |x| refers global |x| - Reference Error x is not defined.
    return f();  // inside f() 'this` will be global and |x| refers global |x| - Reference Error x is not defined.
    // But can work thru parameter:
    //let f = new Function('x','return x;'); // 20 works thru parameter.
    //return f(x);
}
function createFunction2() {
    let x = 30;
    // Nested Declaration creates closure that will be  kept.
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f();
}
//aaa2 = createFunction1(); // Reference Error x is not defined or 20.
aaa2 = createFunction2(); // 30 and closure will be created and saved.

// Nested functions and closures.
// An important detail of nested functions in JavaScript is that they can access variables in their parent function's scope:
function parentFunc(x) {
  var a = x;
  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b; 
  }
  return nestedFunc();
}
parentFunc(1); // closure will be garbished.
let aaax = parentFunc(1); // closure will be garbished.
let aaay = parentFunc(2); // closure will be garbished.

function makeFuncM() {
  var name = 'Mozilla';
  function displayName() {
    var aaaTest = name;
  }
  return displayName;
}

aaax = makeFuncM(); // return function displayName() and it's closures.
aaa3 = aaax();

// Closures.
// Whenever JavaScript executes a function, a 'scope' object is created to hold the local variables
// created within that function. It is initialized with any variables passed in as function parameters.
// A brand new scope object is created every time a function starts executing, and , unlike the global object
// (which is accessible as `this` and in browsers as window) these scope objects cannot be directly accessed from
// your JavaScript code. There is no mechanism for iterating over the properties of the current scope object, for example.
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
aaax = makeAdder(5); // return ref to function (b) with a=5 in closure.
aaay = makeAdder(20); // return ref to function (b) with a=20 in closure.
aaa = aaax(6); // 5(in closure) + 6
aaa = aaay(7); // 20(in closure) + 7

/*
So when makeAdder() is called, a scope object is created with one property: a, which is the argument passed
to the makeAdder() function. makeAdder() then returns a newly created function.
Normally JavaScript's garbage collector would clean up the scope object created for makeAdder() at this point,
but the returned function maintains a reference back to that scope object.
As a result, the scope object will not be garbage-collected until there are no more references to the function object
that makeAdder() returned.
In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument.

Scope objects form a chain called the scope chain, similar to the prototype chain used by JavaScript's object system.

A closure is the combination of a function and the scope object in which it was created.
Closures let you save state — as such, they can often be used in place of objects. 
*/

// Module pattern using closures:
// Creating object counter having "private" var privateCouter and changeBy(val) method in closure and
// three "public" methods increment(), decrement() and value().
var counter = (function() { // IIFE anonymous function creats closure with pirvateCountere and changeBy(val), returning Object.
  var privateCounter = 0; // "private" variable property in closure.
  function changeBy(val) { // "private" method in closure.
    privateCounter += val;
  }
  return { // returns Object with three properties - increment, decrement and value.
    increment: function() { // "public" method.
      changeBy(1);
    },
    decrement: function() { // "public" method.
      changeBy(-1);
    },
    value: function() { // "public" method.
      return privateCounter;
    }
  };   
})(); // Immediately Invoked Function Expression see 'IIFE'.

aaa = counter.value(); // logs 0
counter.increment();
counter.increment();
aaa = counter.value(); // logs 2
counter.decrement();
aaa = counter.value(); // logs 1
/*
Above shared lexical environment is created in the body of an anonymous function, which is executed as soon
as it has been defined.
The lexical environment contains two private items: a variable called privateCounter and a function called changeBy.
Neither of these private items can be accessed directly from outside the anonymous function.
Instead, they must be accessed by the three public functions that are returned from the anonymous wrapper.
Those three public functions are closures that share the same environment.
Thanks to JavaScript's lexical scoping, they each have access to the privateCounter variable and changeBy function.
*/
/*
Using closures in this way provides a number of benefits that are normally associated with object-oriented programming --
 in particular, data hiding and encapsulation.
*/


/*
Closure Scope ChainSection
For every closure we have three scopes:-
    Local Scope ( Own scope)
    Outer Functions Scope
    Global Scope
*/
// NB! All closures have access to all outer function scopes within which they were declared.
// global scope
let e = 10;
function sumA(a){
  // outer functions scope
  return function(b){
    // outer functions scope
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

aaa = sumA(1)(2)(3)(4); // log 20

// We can also write with named functions:
// global scope
e = 30;
function sumN(a){
  // outer functions scope
  return function sum2(b){
    // outer functions scope
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}
var s = sumN(1); // return sum2(b) with closure 1
var s1 = s(2); // return sum3(c) with closure 2
var s2 = s1(3); // return sum4(d) with closure 3
var s3 = s2(4); // return 40 = 1 + 2 + 3 + 4 + 40 (global scope e)
aaa = s3; //log 40
aaa = sumA(1)(2)(3)(4); //log 40

// Closures in loop.
aaa = "";
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    //aaa = aaa + function() {return item.help;}() + "; "; // with decalred anonymous function  IIFE.
    aaa = aaa + (() => item.help)() + "; "; // with arrow function  IIFE.
  }
}
setupHelp();

// Functions inherit from Function.prototype 
// (which has methods call, bind, etc.)
// doSomething ---> Function.prototype ---> Object.prototype ---> null
function myFuncSampe() {
  return 777;
}
//var o = new myFuncSampe(); // JavaScript actually just does:
var o = new Object();
o.prototype = myFuncSampe.prototype;
myFuncSampe.call(o);

// Arrays inherit from Array.prototype 
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// myArrSample ---> Array.prototype ---> Object.prototype ---> null
var myArrSample = ['yo', 'whadup', '?'];

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// myObjSample ---> Object.prototype ---> null
var myObjSample = {a: 1};

/*
In conclusion:
It is essential to understand the prototypal inheritance model before writing complex code that makes use of it.
Also, be aware of the length of the prototype chains in your code and break them up if necessary to avoid possible
 performance problems.
Further, the native prototypes should never be extended unless it is for the sake of compatibility with newer
 JavaScript features.
*/

// Strict mode specifics.
// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
//obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
//obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
//fixed.newProp = 'ohai'; // throws a TypeError

var oDuplicateProps = { p: 1, p: 2 }; // !!! NO syntax error, olny last p: 2 will be set.
delete oDuplicateProps.p; // no p will be after this action.

//function sumDuplicateParameters(a, a, c) { // SyntaxError: Duplicate parameter name not allowed in this context.
function sumDuplicateParameters(a, b, c) {
    'use strict';
  return a + a + c;
}

//var aOctalNumber = 010; // SyntaxError: Octal literals are not allowed in strict mode.
var aOctalNumber = 0o10; // ES2015: Octal numbers - NOT 010 as earlier.

// Strict mode in ECMAScript 2015 forbids setting properties on primitive values:
//aaa = false;
//aaa.true = '';         // TypeError: Cannot create property 'true' on boolean 'false'
//(14).sailing = 'home';   // TypeError: Cannot create property 'sailing' on number '14'
//'with'.you = 'far away'; // TypeError: Cannot create property 'you' on string 'with'

// Eval
var xEval = 17;
var evalX = eval("var xEval = 42; xEval;");

// strict mode forbids deleting plain names. delete name in strict mode is a syntax error.
var xToDel;
//delete xToDel; // SyntaxError: Delete of an unqualified identifier in strict mode.

// Strict mode code doesn't alias properties of arguments objects created within it.
function fNonArgumentsAliasing(a) {
  //'use strict';
  a = 42;
  return [a, arguments[0]];
}
var aaaNonAragAli = fNonArgumentsAliasing(17);

// Template literals (template stings).
var aTempLiter = 5;
var bTempLiter = 10;
// Multiline string with placeholders ${expression} sample:
//console.log(`Fifteen is ${aTempLiter + bTempLiter} and
//not ${2 * aTempLiter + bTempLiter}.`);
aaa = `Fifteen is ${aTempLiter + bTempLiter} and
not ${2 * aTempLiter + bTempLiter}.`;
console.log(aaa);
// "Fifteen is 15 and
// not 20."
aaa = (`\`` === '`'); // --> true. Escape for ` is \`

// Tagged templates.
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression in our example,
  // but it is empty ("") in our case, so disregard.
  var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}
var output = myTag`That ${ person } is a ${ age } old`;
//var output = myTag(`That ${ person } is a ${ age }`); // Such construction is not tagged temlate and does not work as expeicted.
console.log(output);
// That Mike is a youngster

// Tag functions don't need to return a string, as shown in the following example.
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t0Closure = template`A${0}B${1}C${0}!`;
aaa1 =t0Closure('Y', 'A');  // "AYBACY!"
var t1Closure = template`${0}${1}${0}!`;
aaa2 = t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
aaa3 = t2Closure('Hello', {foo: 'World'});  // "Hello World!"





return;

// Very old staff...
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
aaa = add(); // NaN
aaa = add(2,3,4) // 9

function avg(...args) { // use rest parameter syntax ...args
  var sum = 0;
  for (let value of args) { // use for ... of loop.
    sum += value;
  }
  return sum / args.length;
}
aaa = avg(2, 3, 4, 5); // gives 3.5 ...args Array(4) [2,3,4,5] and this: undefined
// JavaScript lets you call a function with an arbitrary array of arguments, using the apply() method of
// any function object.
 // The first argument to apply() is the object that should be treated as 'this`.
aaa = avg.apply(null, [2, 3, 4, 5]); // 3.5 ...args Array(4) [2,3,4,5] and this: null
let numbers = [2,3,4,5];
aaa = avg(numbers); // gives NaN ...args will be Array(1) [Array(4)] and this: undefined
aaa = avg(null, numbers); // gives NaN ...args will be Array(2) [null, Array(4)] and this: undefined
aaa = avg.apply(null, numbers); // gives 3.5 ...args Array(4) [2,3,4,5] and this: null
// Using the spread operator in the function call.
aaa = avg(...numbers); // 3.5 ...args Array(4) [2,3,4,5] and this: undefined
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

/*
// Recursion
var factorial = function fac(n) {
   return n < 2 ? 1 : n * fac(n - 1); 
  };
aaa = factorial(3);

// Using  IIFEs (Immediately Invoked Function Expressions).
aaa = (function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); 
 })(3);
*/


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
//aaa = sum3(2, 6); // expected: 8



console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
