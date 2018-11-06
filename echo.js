'use strict';

const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') { // routing sample.
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
// use e.g.: curl -d "test of echo" localhost:8080/echo
