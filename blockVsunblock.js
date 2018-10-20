'use strict';

console.log("Start of main Program " + Date.now())

const fs = require('fs');

//const data = fs.readFileSync('./package.json'); // blocks here until file is read

/*
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
*/

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  console.log("Start of fs.readFile " + Date.now())
  fs.readFile('./package.json', callback);
}

const timeoutScheduled = Date.now();
console.log("Set timeout " + timeoutScheduled)
setTimeout(() => {
  console.log("Start timeout callback " + Date.now())
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);


// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log('callback started ' + startCallback);
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  console.log('callback ended ' + Date.now());
});



console.log("End of main Program " + Date.now())
return;
