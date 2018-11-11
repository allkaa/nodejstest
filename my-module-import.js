'use strict';
// The import statement is used to import bindings which are exported by another module.
// Imported modules are in strict mode whether you declare them as such or not.
// The import statement cannot be used in embedded scripts unless such script has a type="module".


// File is a CommonJS module; it may be converted to an ES6 module.
// Putting it at every require is just not right, as still in many cases it's better to stick to CJS than to ESM.
// So putting such message is quite annoying.
// CJS is great modules format when we want to target pre ES2017 implementations without transpilation
// (it's format that bundles directly with no syntax changes, even to ES3 engines, ESM will always require transpilation step)
// There is no plan to remove or deprecate CJS in Node.js. ESM is being added there as a second format,
// and due to richer functionality of CJS (e.g. public access to cache), one may still prefer to write CJS for Node.js
// programs.
// ESM still doesn't work reliably in many enviroments (e.g. in Node.js it's just behind experimental-flag,
// and it's likely this implementation will change)


// Using CommonJS foobar:
const test = require('./my-mod-export.js')('express-locallibrary-tutorial:server'); // require (load and compile) and AFTER immediately execute imported function.
const {foo, bar, cube} = require('./my-module-export.js');
console.log(foo());
console.log(bar());
let aaa = cube(3); // 27

/*
// Using ES6 foobar:
import {foo, bar} from 'foobar'; // SyntaxError: Unexpected token import!!! in vscode
console.log(foo());
console.log(bar());
*/


return;

/*
const myModExported = require('./my-module-export.js');
let aaa = myModExported.cube(3); // 27
*/

/*
import { cube, foo, graph } from 'my-module-export.js';
graph.options = {
    color:'blue',
    thickness:'3px'
};
*/
//graph.draw();
//console.log(foo);    // 4.555806215962888

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