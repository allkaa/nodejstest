'use strict';

let dtVar = new Date();
console.log('Begin of PROGRAM text ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const envObj = process.env;
for (let prop in envObj) {
  //console.log(prop + ": " + envObj[prop]);
}
//console.log(prop + " <== for availability test"); // NB! prop is NOT available outside of for/in loop!!!
//dtVar = new Date();
//console.log('====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());





dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

