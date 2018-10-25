'use strict';
// Exported modules are in strict mode whether you declare them as such or not.
// The export statement cannot be used in embedded scripts.

// simple CommonJS module (let’s call the module 'foobar') :
function userInfoEx(objBody) {
  let msg = '';
  if (objBody.fname == "") msg += 'Name = ' + 'not entered!' + '<br />';
  else msg += 'Name = ' + objBody.fname + '<br />';
  if (objBody.sname == "") msg += 'Surname = ' + 'not entered!' + '<br />';
  else msg += 'Surname = ' + objBody.sname + '<br />';
  return msg;
}
//module.exports.userInfo = userInfo;
module.exports.userInfo = userInfoEx;
