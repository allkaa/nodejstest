'use strict'
// Exported modules are in strict mode whether you declare them as such or not.
// The export statement cannot be used in embedded scripts.

function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}
export { cube, foo, graph };
