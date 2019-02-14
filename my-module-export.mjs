'use strict';
// Exported modules are in strict mode whether you declare them as such or not.
// The export statement cannot be used in embedded scripts.


// simple CommonJS module (let’s call the module 'foobar') :
function foo() {
  return 'hi from foo';
}
function bar() {
  return 'hi from bar';
}

function cubeEx(x) {
  return x * x * x;
}
/*
// simple CommonJS module exports:
module.exports.foo = foo;
module.exports.bar = bar;
module.exports.cube = cubeEx;
*/

///*
//Here is the “equivalent” module written using ES6 syntax:
export function foo() { // SyntaxError: Unexpected token export!!! in vscode.
  return 'bar';
}
export function bar() {
  return 'foo';
}
export function cube() {
  return 'cubeEx';
}
//*/

/*
module.exports.cube = (x) => cubeEx(x);
*/
/*
module.exports.cube = (x) => {
  return cubeEx(x);
}
*/
/*
module.exports.cube = function(x) {
  return cubeEx(x);
}
*/


/*
const foo = Math.PI + Math.SQRT2;
var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}
export { cube, foo, graph };
*/

/*
// simple CommonJS module (let’s call the module 'foobar') :
function foo() {
  return 'bar';
}
function bar() {
  return 'foo';
}
module.exports.foo = foo;
module.exports.bar = bar;

// Using CommonJS foobar:
const {foo, bar} = require('foobar');
console.log(foo());
console.log(bar());


//Here is the “equivalent” module written using ES6 syntax:
export function foo() {
  return 'bar';
}
export function bar() {
  return 'foo';
}

// Using ES6 foobar:
import {foo, bar} from 'foobar';
console.log(foo());
console.log(bar());
*/