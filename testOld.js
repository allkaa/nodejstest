// test.js
//const addon = require('./build/Release/addon');
const addon = require('./addon');
var strReturn;
//strReturn = addon.unld("123456", "12345678", "1234567");
// blnOdd = LastDigitDayOfYear % 2; If blnOdd = 0 (false) theb LastDigitDayOfYear is even, but blnOdd = 1 (true) LastDigitDayOfYear if odd */'

var i;

for (i = 0; i <= 9; i++) {
  console.log(`<=== Begin of ${i} ===>`); 
  strReturn = addon.unld("1", "2", "3", "4", "5", "6", "G", "G","1", "2", String(i)); // gGuard.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
  strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "D", "1", "2", String(i)); // check Digits.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
  strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "2", String(i)); // external number.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
  console.log(`<=== End of ${i} ===>`); 
}

  strReturn = addon.unld("2", "3", "4", "5", "6", "7", "8", "1", "2", String(i)); // external number.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.


/*
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "G", "G","1", "2", "3"); // gguard.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "D", "1", "2", "3"); // check digits.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.

strReturn = addon.unld("1", "2", "3", "4", "5", "6", "G", "G","1", "2", "2"); // gguard.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "D", "1", "2", "2"); // check digits.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
*/
