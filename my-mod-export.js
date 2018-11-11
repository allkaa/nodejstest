'use strict';
// Exported modules are in strict mode whether you declare them as such or not.
// The export statement cannot be used in embedded scripts.

// simple CommonJS module. Export arrow function with parameter.
module.exports = (param) => {
  console.log(param);
  return param;
}