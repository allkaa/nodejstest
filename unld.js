'use strict';

const addon = require('./addon');

//module.exports.decr = (strEnc) => decrEx(strEnc);

module.exports.decr = (strGGuardEnc, strEnc) => {
  return decrEx(strGGuardEnc, strEnc);
};
/*
module.exports.decr = function(strGGuardEnc, strEnc) {
  return decrEx(strGGuardEnc, strEnc);
};
*/
//console.log(`unld.js module exported function unld.decr() before very first real call with parameter(s)`);

function decrEx(strGGuardEnc, strInEnc) {
  var strOut;
  var strGguardIn, strNumberIn; // var strJulian;
  var strReturn, strGGuard, strTicNum, strCheckDigits;
  var strArr; // intVar, i;
  var strGGuardArr, strJulianArr, strTicNumArr, strCheckDigitsArr;

  //console.log(`input: ${strGGuardEnc} ${strInEnc}`);

  strOut="";
  if (typeof(strGGuardEnc) != "string") return "ERROR2";
  if (typeof(strInEnc) != "string") return "ERROR3";

  // e.g. strGGuardEnc="123456" and strEnc = "123-12345678-1234567"
  strGguardIn = String(strGGuardEnc);
  strNumberIn = String(strInEnc);
  if (strGguardIn.length != 6)  return "ERROR2";
  if (strNumberIn.length != 20) return "ERROR3";

  //intVar = Number(strGguardIn);
  //console.log(intVar + " " + typeof(intVar));
  if (! Number.isInteger(Number(strGguardIn))) return "ERROR2"; 
  strArr = strNumberIn.split("-");
  if (strArr.length != 3) return "ERROR3";
  if (strArr[0].length != 3) return "ERROR3";
  if (strArr[1].length != 8) return "ERROR3";
  if (strArr[2].length != 7) return "ERROR3";
  if (! Number.isInteger(Number(strArr[0]))) return "ERROR3"; 
  if (! Number.isInteger(Number(strArr[1]))) return "ERROR3"; 
  if (! Number.isInteger(Number(strArr[2]))) return "ERROR3"; 

  //var strGGuardArr, strJulianArr, strTicNumArr, strChcekDigitsArr;
  strGGuardArr = strGguardIn.split("");
  strJulianArr = strArr[0].split("");
  strTicNumArr = strArr[1].split("");
  strCheckDigitsArr = strArr[2].split("");

  strGGuard = addon.unld(strGGuardArr[0], strGGuardArr[1], strGGuardArr[2], strGGuardArr[3], strGGuardArr[4], strGGuardArr[5], "G", "G", strJulianArr[0], strJulianArr[1], strJulianArr[2]); // gGuard.
  //console.log('Return string:', strGGuard + " typeof: " + typeof(strGGuard)); // gguard.
  strTicNum = addon.unld(strTicNumArr[0], strTicNumArr[1], strTicNumArr[2], strTicNumArr[3], strTicNumArr[4], strTicNumArr[5], strTicNumArr[6], strTicNumArr[7], strJulianArr[0], strJulianArr[1], strJulianArr[2]); // external number.
  //console.log('Return string:', strTicNum + " typeof: " + typeof(strTicNum)); // TicNum external number.
  strCheckDigits = addon.unld(strCheckDigitsArr[0], strCheckDigitsArr[1], strCheckDigitsArr[2], strCheckDigitsArr[3], strCheckDigitsArr[4], strCheckDigitsArr[5], strCheckDigitsArr[6], "D", strJulianArr[0], strJulianArr[1], strJulianArr[2]); // check Digits.
  //console.log('Return string:', strCheckDigits + " typeof: " + typeof(strCheckDigits)); // gguard, num, check.
  strOut = strGGuard + " " + strArr[0] + "-" + strTicNum + "-" + strCheckDigits;
  //console.log(`output: ${strOut}`);
  //strArr = strIn.split("-");
  //strOut = strArr[2] + "-" + strArr[1] + "-" + strArr[0];
  
  ExitFunction:
  return strOut;

} // end of function decrEx(strIn).

