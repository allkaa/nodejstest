'use strict';

//var sleep = require('sleep');
//sleep.sleep(n): sleep for n seconds
//sleep.msleep(n): sleep for n miliseconds
//sleep.usleep(n): sleep for n microseconds (1 second is 1000000 microseconds)
//sleep(5);


var dtVar;
dtVar = new Date();
console.log('Start program file ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const sleep = require('system-sleep');
sleep(5 * 1000); // sleep for 5 seconds

dtVar = new Date();
console.log('Program file ended ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
