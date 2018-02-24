'use strict';

var dtVar;
dtVar = new Date();
console.log('Start program file ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

//const sleep = require('system-sleep');
//sleep(5 * 1000); // sleep for 5 seconds

const unld = require('./unld.js');

var strEnc;
var strDecr;

var strEnc = "123-12345678-1234567";
strDecr = unld.decr(strEnc);
console.log(`The decripted ${strEnc} is ${strDecr}`);

var strEnc = "456-12345678-1234567";
strDecr = unld.decr(strEnc);
console.log(`The decripted ${strEnc} is ${strDecr}`);

var strEnc = "789-12345678-1234567";
strDecr = unld.decr(strEnc);
console.log(`The decripted ${strEnc} is ${strDecr}`);

dtVar = new Date();
console.log('Program file ended ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
