'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from express!')
});

app.listen(8000, () => {
  console.log('Example express app listening on port 8000!')
});

console.log('End of main program.');