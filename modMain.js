'use strict';

const unld = require('./unld.js');

var strEnc;
var strDecr;

var strGGuardEnc = "435392";
var strEnc = "249-32308487-2488749";

strDecr = unld.decr(strGGuardEnc, strEnc);
console.log(`The encripted ${strGGuardEnc} ${strEnc}`);
console.log(`The decripted ${strDecr}`);
