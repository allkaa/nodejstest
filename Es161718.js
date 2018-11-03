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

const map1 = new Map(); // ES2015
Object.keys(cars).forEach(key => {
  map1.set(key, cars[key]);
});

const map = new Map(Object.entries(cars)); // ES2017

aaa = 123;
aaa = aaa.toString().padStart(10); // ES2017: "       123" length will be 10.

/* Object.getOwnPropertyDescriptors(obj) in ES2017
// ES2015
var Car = {
  name: 'BMW',
  price: 1000000,
  set discount(x) {
   this.d = x;
  },
  get discount() {
   return this.d;
  },
 };
 
 //Print details of Car object's 'discount' property
 console.log(Object.getOwnPropertyDescriptor(Car, 'discount')); // ES2017.
 //prints..
 // { 
 //   get: [Function: get],
 //   set: [Function: set],
 //   enumerable: true,
 //   configurable: true
 // }
 
 // Copy Car's properties to ElectricCar using Object.assign
 const ElectricCar = Object.assign({}, Car); // ES2015.
 
 // Print details of ElectricCar object's 'discount' property
 console.log(Object.getOwnPropertyDescriptor(ElectricCar, 'discount')); // ES2017.
 //prints..
 // { 
 //   value: undefined,
 //   writable: true,
 //   enumerable: true,
 //   configurable: true 
 // }
 // Notice that getters and setters are missing in ElectricCar object for 'discount' property !
 
 //Copy Car's properties to ElectricCar2 using Object.defineProperties 
 //and extract Car's properties using Object.getOwnPropertyDescriptors
 const ElectricCar2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(Car));  // ES2017.
 
 //Print details of ElectricCar2 object's 'discount' property
 console.log(Object.getOwnPropertyDescriptor(ElectricCar2, 'discount'));
 //prints..
 // { get: [Function: get],
 //   set: [Function: set],
 //   enumerable: true,
 //   configurable: true 
 // }
 // Notice that getters and setters are present in the ElectricCar2 object for 'discount' property!
*/


// asyn/await/Promse see in Asyn_Await_Promise.js


// ECMAScript 2018

//A "Tag" function returns a custom string literal.
//In this example, greet calls timeGreet() to append Good //Morning/Afternoon/Evening depending on the time of the day.
function greet(hardCodedPartsArray, ...replacementPartsArray) {
  console.log(hardCodedPartsArray); //[ 'Hello ', '!' ]
  console.log(replacementPartsArray); //[ 'Raja' ]
 
 let str = '';
  hardCodedPartsArray.forEach((string, i) => {
   if (i < replacementPartsArray.length) {
    str += `${string} ${replacementPartsArray[i] || ''}`;
   } else {
    str += `${string} ${timeGreet()}`; //<-- append Good morning/afternoon/evening here
   }
  });
  return str;
 }
 
 //Usage:
 const firstName = 'Raja';
 const greetings = greet`Hello ${firstName}!`; //<-- Tagged literal
 
 console.log(greetings); //'Hello  Raja! Good Morning!'
 
 function timeGreet() {
  const hr = new Date().getHours();
  return hr < 12
   ? 'Good Morning!'
   : hr < 18 ? 'Good Afternoon!' : 'Good Evening!';
 }

// Rest properties for Objects.
let {fName, age, ...remaining} = {
  fName: 'john',
  lName: 'smit',
  age:20,
  height: 5.10,
  race: 'martian',
}
console.log(remaining);
// Object {lName: "smit", height: 5.1, race: "martian"}

// Spread properties for Objects.
const person = {fname: 'john', age: 20};
const account = {name: 'bofa', amount: 1000};
const personAndAccount = { ...person, ...account}; // Object {fname: "john", age: 20, name: "bofa", amount: 1000}


dtVar = new Date();
console.log("End of MAIN script ====================================" + " at " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
