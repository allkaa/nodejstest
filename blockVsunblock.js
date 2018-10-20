'use strict';

const fs = require('fs');

//const data = fs.readFileSync('./package.json'); // blocks here until file is read

fs.readFile('./package.json', (err, data) => {
  if (err) throw err;
  else {
    console.log(data);
    let aaa;
    aaa = '';
    for (let i=0; i<data.length; i++) {
      aaa = aaa + String.fromCharCode(data[i]);
    }
    console.log(aaa);
  }
});
// moreWork(); will run before console.log

console.log("End of main Program.")
return;
