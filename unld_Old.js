'use strict';

//exports.decr = (strEnc) => "d" + strEnc;
module.exports.decr = (strEnc) => decrEx(strEnc);

console.log(`unld.js module exported function unld.decr() before first real call with parameter(s)`);

function decrEx(strIn) {
  var strOut;
  var strArr;

  strArr = strIn.split("-");
  //strOut = "d" + strIn;
  strOut = strArr[2] + "-" + strArr[1] + "-" + strArr[0];

  return strOut;
}

