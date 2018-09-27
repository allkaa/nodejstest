'use strict';


const fs = require('fs');

let dtVar = new Date();
console.log('=============================> START OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
console.log('-------------------------------------------');

const sleep = require('system-sleep');
/*
dtVar = new Date();
console.log('Begin sleep ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
sleep(5 * 1000); // sleep for 5 seconds
dtVar = new Date();
console.log('Sleep ended ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/





console.log('=========================================================');
dtVar = new Date();
console.log('=============================> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
