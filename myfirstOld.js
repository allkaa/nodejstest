'use strict';

const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];

var theProtoObj = {f: 1, s: 2};
var handler = 1;
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return 'd ' + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
console.log(obj.handler);
console.log(obj.prop_42);
console.log(obj.toString());

var foo = {a: 'alpha', 2: 'two'};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // SyntaxError: missing ) after argument list
console.log(foo["2"]); // Intellisense construction.
//console.log(foo[a]); // ReferenceError: a is not defined
console.log(foo['a']); // alpha
console.log(foo['2']); // two
