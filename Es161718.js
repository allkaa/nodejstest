'strict on';

let dtVar = new Date();
console.log('Begin of MAIN script ====================================' + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

let aaa;

// ECMAScript 2016
const arr = [1,2,3,4,NaN];

aaa = arr.includes(NaN); // true
aaa = arr.indexOf(3);   // 2
aaa = arr.indexOf(NaN); // -1

aaa = Math.pow(2,3);
aaa = 2**3;

// ECMAScript 2017

/*
  Object.values() is a new function that’s similar to Object.keys() but returns all the values of the Object’s own properties excluding any value(s)
  in the prototypical chain.
*/
const cars = {BMW: 3, Tesla: 2, Toyota: 1};
//ES2015
const vals = Object.keys(cars).map(key => cars[key]); // Array(3) [3, 2, 1]
//ES2017 mach simplier!!!
const values = Object.values(cars); // Array(3) [3, 2, 1]

/*
  Object.entries() is related to Object.keys , but instead of returning just keys, it returns both keys and values in the array fashion.
  This makes it very simple to do things like using objects in loops or converting objects into Maps.
*/
// ES 5.1
Object.keys(cars).forEach(key => {
  aaa = 'key: ' + key + ' value: ' + cars[key]; 
});

// ES8 (ES2017)
for (let [key, value] of Object.entries(cars)) {
  aaa = `key: ${key} and value: ${value}`;
}



// ECMAScript 2018
// asyn/await/Promse see in Asyn_Await_Promise.js





dtVar = new Date();
console.log("End of MAIN script ====================================" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
