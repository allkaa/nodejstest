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

// Basic literal string creation
var varStr1 = `In JavaScript '\n' is a line-feed.`;
console.log(varStr1);

// Multiline strings
varStr1 = `In JavaScript template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;
 console.log(varStr1);

// String interpolation
var name = 'Bob', time = 'today';
varStr1 = `Hello ${name}, how are you ${time}?`
console.log(varStr1);

var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiple lines.

var poem = 
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.';
console.log(poem);

var poem2 = 
`Roses are red, 
Violets are blue. 
Sugar is sweet, 
and so is foo.`;
console.log(poem2);

var myString = '123';
var myNum = Number(myString);
console.log(typeof myNum);

var myNum = 123;
var myString = myNum.toString();
console.log(typeof myString);

// Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true
// when tested as a conditional statement.

var cats = ['Bonya', 'Sima', 'Asa'];
var info = 'My cats names are ';
//var i; // also ok.
for (var i = 0; i < cats.length; i = i + 1) {
    var sep;
    if (i !== cats.length - 1) sep = ', '; else sep = '.';
    info = info + cats[i] + sep;
}
console.log(info + ' Tolal ' + i.toString());

var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
console.log(madeAString);
