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

const http = require('http');

const server = http.createServer();
server.on('request', (request, response) => {
  // the same kind of magic happens here!
  request.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  });
  const { method, url } = request; // request object is an instance of IncomingMessage.
  // url is the full URL without the server, protocol or port. For a typical URL, this means everything after and including the third forward slash.
  const { headers } = request;
  const userAgent = headers['user-agent'];
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  });
  request.on('end', () => {
    // at this point, `body` has the entire request body stored in it as a string.
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
    // The response object is an instance of ServerResponse, which is a WritableStream.
    response.writeHead(200, {
      'Content-Type': 'application/html'
    });
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
  });
});
server.listen(8080); // Activates this server, listening on port 8080.





dtVar = new Date();
console.log("End of PROGRAM text ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

