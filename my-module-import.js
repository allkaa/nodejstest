'use strict';
// The import statement is used to import bindings which are exported by another module.
// Imported modules are in strict mode whether you declare them as such or not.
// The import statement cannot be used in embedded scripts unless such script has a type="module".

const myModExported = require('./my-module-export.js');
const myCube = cube(3);

/*
import { cube, foo, graph } from 'my-module-export.js';
graph.options = {
    color:'blue',
    thickness:'3px'
};
*/

//graph.draw();
let aaa = myCube(3); // 27
//console.log(foo);    // 4.555806215962888
