'use strict';

let dtVar = new Date();
console.log('==================================== main PROGRAM NetTlsSsl source text started' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const fs = require('fs');
const querystring = require('querystring');
const sleep = require('system-sleep');

let port; //const port = 1337;
let hostname; //const hostname = '127.0.0.1';
let confInfo = fs.readFileSync('./config.txt', 'ascii'); // or 'utf8' .
//console.log(confInfo);
let objConfInfo = querystring.parse(confInfo, '&', '=', { maxKeys: 10 }); // defaults are  '&', '=', { maxKeys: 1000 }
// Note: The object returned by the querystring.parse() method does not prototypically inherit from the JavaScript Object.
// This means that typical Object methods such as obj.toString(), obj.hasOwnProperty(), and others are not defined and will not work.
//console.log(objConfInfo.port);
//console.log(objConfInfo.host);
port = Number.parseInt(objConfInfo.port);
if (!Number.isNaN(port)) {
  console.log(`Port parameter: ${port}`);
}
else {
  console.log(`Wrong port parameter: ${objConfInfo.port}`);
  return;
}
if (typeof (objConfInfo.host) !== 'string') {
  console.log(`Wrong host parameter: ${objConfInfo.host}`);
  return;
}
else {
  if (objConfInfo.host.length == 0) {
    console.log(`Empty host parameter: ${objConfInfo.host}`);
    return;
  }
  else {
    hostname = objConfInfo.host;
    console.log(`Host parameter: ${hostname}`);
  }
}

//return;  // NB!!! for test only!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

dtVar = new Date();
console.log(`Get tsl module require('tls') ` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
// Implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols.
// TLS/SSL is a public/private key infrastructure (PKI).
const tls = require('tls');
//console.log(tls.getCiphers());
//console.log(tls.DEFAULT_ECDH_CURVE);

dtVar = new Date();
console.log('tls.createServer' + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const options = {
  pfx: fs.readFileSync('./unl_works.pfx'),
  passphrase: 'unl'
};

// tls.Server class is a subclass of net.Server that accepts encrypted connections using TLS or SSL.
const server = new tls.Server(options); // socket 'data' event handler must be set.
// Server 'error' listener (event handler).
server.on('error', (err) => {
  dtVar = new Date();
  //throw err;
  console.log(`Server 'error' event - error code:` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(err.code);
  console.log('server error stack:');
  console.log(err.stack);
});

// Server 'connection' listener (event handler).
server.on('connection', (socket) => { // socket is an instance of net.Socket.
  dtVar = new Date();
  console.log(`Server 'connection' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  //console.log(socket.address());
});

// Server 'secureConnection' listener (event handler).
// The 'secureConnection' event is emitted after the handshaking process for a new connection has successfully completed.
// The listener callback is passed a single argument when called: tlsSocket < tls.TLSSocket > The established TLS socket.
server.on('secureConnection', (tlsSocket) => { // tlsSocket  is an instance of net.Socket.
  // The tls.TLSSocket is a subclass of net.Socket that performs transparent encryption of written data and all required TLS negotiation.
  // Instances of tls.TLSSocket implement the duplex Stream interface.
  // Note: Methods that return TLS connection metadata e.g. tls.TLSSocket.getPeerCertificate() will only return data while the connection is open.
  dtVar = new Date();
  console.log(`Server 'secureConnection' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  //console.log(tlsSocket.address());
  //console.log(tlsSocket.getCipher());
  //console.log(tlsSocket.getEphemeralKeyInfo()); //  It returns null when the key exchange is not ephemeral. 
  console.log(tlsSocket.getProtocol());
  // tlsSocket listeners (event handlers).
  // tlsSocket 'error' listener.
  tlsSocket.on('error', (err) => {
    dtVar = new Date();
    console.log(`tlsSocket 'error' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    //throw err;
    if (err.code == 'ECONNRESET') {
      console.log("tlsSocket 'error' event - Client Aborted Connection ");
    }
    else {
      console.log("tlsSocket 'error' event - other error code (non ECONNRESET) ");
      console.log('tlsSocket error code:');
      console.log(err.code);
      console.log('tlsSocket error stack:');
      console.log(err.stack);
    }
    console.log('tlsSocket.destroy() ' + tlsSocket.remoteAddress + ' ' + tlsSocket.remoteFamily + ' ' + tlsSocket.remotePort);
    tlsSocket.destroy();
  });
  // tlsSocket 'end' listener.
  // Emitted when the other end of the socket sends a FIN packet, thus ending the readable side of the socket.
  // By default (allowHalfOpen is false) the socket will send a FIN packet back and destroy its file descriptor once it has written out its pending write queue.
  // However, if allowHalfOpen is set to true, the socket will not automatically end() its writable side, allowing the user to write arbitrary amounts of data.
  // The user must call end() explicitly to close the connection (i.e. sending a FIN packet back).
  tlsSocket.on('end', () => {
    dtVar = new Date();
    console.log("tlsSocket 'end' event - Client Disconnected" + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(tlsSocket.remoteAddress + ' ' + tlsSocket.remoteFamily + ' ' + tlsSocket.remotePort);
  });
  // tlsSocket 'data' listener (event handler).
  // NB! Adding event handler tlsSocket.on('data') both 'readable' event and 'data' event will be activated but 'data' work faster!!!
  tlsSocket.on('data', function (data) { // data: Uint8Array(...) [...]
    dtVar = new Date();
    console.log(`tlsSocket 'data' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    let msgInfo = '';
    msgInfo += data; // data Buffer will be converted to string msgInfo explicitly.
    // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
    if (msgInfo.length > 1e6) {
      // Memory FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST!!!
      tlsSocket.end(); // send empty message "" back to client.
      tlsSocket.destroy();
    }
    dtVar = new Date();
    console.log(`Received ${msgInfo.length} bytes of msgInfo using event tlsSocket.on data.` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log('|' + msgInfo + '|');
    sleep(1 * 1000); // simulte processing time sleep for 1 seconds.
    dtVar = new Date();
    console.log(`Awaiking after sleep tlsSocket 'data' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    tlsSocket.write('Info tlsSocket.on data received:\r\n' + '|' + msgInfo + '|');
    tlsSocket.end(); // send empty message "" to client.
    dtVar = new Date();
    console.log('finished tlsSocket.on data processing with client' + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(tlsSocket.remoteAddress + ' ' + tlsSocket.remoteFamily + ' ' + tlsSocket.remotePort);
  });
});

//const port = 1337;
//const hostname = '127.0.0.1';
server.listen(port, hostname, () => { // server.listen(port, '127.0.0.1', ...
  dtVar = new Date();
  console.log('Server server.listen() callback event - server bound to port ' + port + ', hostname ' + hostname + " ==> " +
    dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  //console.log(server.address());
});

dtVar = new Date();
console.log('==================================== END OF main PROGRAM NetTlsSsl source text' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

/*
//const net = require('net');
// Start server with socket Readable stream in paused mode.
//const server = net.createServer({ allowHalfOpen: false, pauseOnConnect: true }); // socket 'readable' event handler must be set.
If allowHalfOpen is true, then the socket won't automatically send a FIN packet when the other end of the socket sends a FIN packet.
The socket becomes non-readable, but still writable. You should call the end() method explicitly. See 'end' event for more information.
If pauseOnConnect is true, then the socket associated with each incoming connection will be paused, and no data will be read from its handle.
This allows connections to be passed between processes without any data being read by the original process. To begin reading data from
a paused socket, call resume().
NB!!! It is not correct for socket to use both 'readable' event with socket.read() method and 'data' event.
// Start server with socket Readable stream in flowing mode.
//const server = net.createServer({allowHalfOpen: false, pauseOnConnect: false}); // socket 'data' event handler must be set.
//const server = new net.Server({ allowHalfOpen: false, pauseOnConnect: false }); // socket 'data' event handler must be set.
// Server 'connection' listener (event handler).
server.on('connection', (socket) => { // socket is an instance of net.Socket.
  dtVar = new Date();
  console.log(`Server 'connection' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  // Socket listeners (event handlers).
  // Socket 'error' listener.
  socket.on('error', (err) => {
    dtVar = new Date();
    console.log(`socket 'error' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    //throw err;
    if (err.code == 'ECONNRESET') {
      console.log("Socket 'error' event - Client Aborted Connection ");
    }
    else {
      console.log("Socket 'error' event - other error code (non ECONNRESET) ");
      console.log('socket error code:');
      console.log(err.code);
      console.log('socket error stack:');
      console.log(err.stack);
    }
    console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
    socket.destroy();
  });
  // Socket 'end' listener.
  socket.on('end', () => {
    dtVar = new Date();
    console.log("Socket 'end' event - Client Disconnected" + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
  });
  ///*
  // Socket 'readable' listener (event handler).
  // If socket Readable stream is in paused mode use socket.on('readable') event handler and socket.read() method.
  socket.on('readable', () => {
    dtVar = new Date();
    console.log(`socket 'readable' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    socket.setEncoding('utf8');
    let chunk;
    while (null !== (chunk = socket.read())) {
      console.log(`Received ${chunk.length} bytes of chunk using socket.on readable + socket.read().` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      console.log('|' + chunk + '|');
      socket.write('Info socket.on readable + socket.read() received:\r\n' + '|' + chunk + '|');
      socket.end(); // send empty message "" back to client.
      console.log('finished socket.on readable + socket.read() processing with client' + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
      console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
    }
    console.log(`Received null as chunk using socket.on readable + socket.read().` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  });
  //
  //
  // Socket 'data' listener (event handler).
  // NB! Adding event handler socket.on('data') both 'readable' event and 'data' event will be activated but 'data' work faster!!!
  let msgInfo = '';
  socket.on('data', function (data) {
    dtVar = new Date();
    console.log(`socket 'data' event` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    msgInfo += data;
    // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
    if (msgInfo.length > 1e6) {
      // Memory FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST!!!
      socket.end(); // send empty message "" back to client.
      socket.destroy();
    }
    dtVar = new Date();
    console.log(`Received ${msgInfo.length} bytes of msgInfo using event socket.on data.` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log('|' + msgInfo + '|');
    //let strVar;
    //strlet = fs.readFileSync('../../Protocol sample.txt', 'ascii'); // or 'utf8' .
    //for (let i = 0; i < 9000000000; i++) {
    //  //console.log(i);
    //  // more statements
    //}
    //console.log(strVar);
    //console.log(" EOF "  + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    sleep(10 * 1000); // sleep for 5 seconds.
    dtVar = new Date();
    console.log(`Awaiking after sleep` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    socket.write('Info socket.on data received:\r\n' + '|' + msgInfo + '|');
    socket.end(); // send empty message "" to client.
    dtVar = new Date();
    console.log('finished socket.on data processing with client' + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
  });
  //
  // Server 'connection' listener (event handler) continued working immediate after connection before (any?) socket events.
  dtVar = new Date();
  console.log(`Server 'connection' event continued - client connected at` + " ==> " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
  // work with socket immediate after connection.
  //socket.write('echo info below:\r\n');
  //socket.pipe(socket); // echo thru pipe.
  //socket.end(); // send empty message "" to client.
  //console.log('finished processing with client');
  //console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
}); // End of Server 'connection' listener (event handler).
*/
