'use strict';

const fs = require('fs');

// setImmediate() is designed to execute a script once the current poll phase completes.

let dtVar = new Date();
console.log('Begin of PROGRAM text ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

fs.readFile('./app.html', (err, data) => {
  dtVar = new Date();
  console.log("fs.readFile done " + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    if (err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
});



dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
