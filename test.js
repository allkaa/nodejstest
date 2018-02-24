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

strReturn = addon.unld("", "2", "3", "4", "5", "6", "G", "G","1", "2", "3"); // gguard.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "", "3", "4", "5", "6", "7", "D", "1", "2", "3"); // check digits.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "", "4", "5", "6", "7", "8", "1", "2", "3"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "", "5", "6", "G", "G","1", "2", "2"); // gguard.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "", "6", "7", "D", "1", "2", "2"); // check digits.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "", "7", "8", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "", "8", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "2", ""); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.

strReturn = addon.unld("A", "2", "3", "4", "5", "6", "G", "G","1", "2", "3"); // gguard.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "A", "3", "4", "5", "6", "7", "D", "1", "2", "3"); // check digits.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "A", "4", "5", "6", "7", "8", "1", "2", "3"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "A", "5", "6", "G", "G","1", "2", "2"); // gguard.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "A", "6", "7", "D", "1", "2", "2"); // check digits.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "A", "7", "8", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "B", "8", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "C", "1", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "D", "2", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "D", "2"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
strReturn = addon.unld("1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "D"); // external number.
console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.

for (i = 0; i <= 9; i++) {
  console.log(`<=== Begin of ${i} ===>`); 
  strReturn = addon.unld(1, 2, 3, 4, 5, 6, "G", "G", 1, 2, i); // gGuard.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
  strReturn = addon.unld(1, 2, 3, 4, 5, 6, 7, "D", 1, 2, i); // check Digits.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
  strReturn = addon.unld(1, 2, 3, 4, 5, 6, 7, 8, 1, 2, i); // external number.
  console.log('Return string:', strReturn + " typeof: " + typeof(strReturn)); // gguard, num, check.
  console.log(`<=== End of ${i} ===>`); 
}
