'use strict';

const fs = require('fs');
const data = fs.readFileSync('/package.json'); // blocks here until file is read
console.log(data);
// moreWork(); will run after console.log
return;
