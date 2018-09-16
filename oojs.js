'use strict';
//var person0 = {f: "one", s: "two"};
var person0 = {}; // emtpy object.
console.log(person0);
console.log(person0.toString());
console.log(typeof(person0));
// same empty object.
var person01 = new Object();
console.log(person01);
console.log(person01.toString());
console.log(typeof(person01));

//var arr = ["one", "two"];
var arr0 = [];
console.log(arr0);
console.log(arr0.toString());
console.log(typeof(arr0));

var person1 = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.gender + " " + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    // lambda constuction () => {...} can not be used - it have not access to this keyword.
    greeting: function() {
      console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  };
// same as person1 declaration but using new Object() construction.
var person = new Object({
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.gender + " " + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    // lambda constuction () => {...} can not be used - it have not access to this keyword.
    greeting: function() {
      console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  }
);
  console.log(person.name);
  console.log(person['name']); // using bracket notation.
  console.log(person.name[1]);
  console.log(person['name'][1]); // using bracket notation.
  var strVar = 'name';
  console.log(person[strVar][1]); // using bracket notation with variable.
  person.bio();
  person.greeting();

  // Add new property and method
  person["eyes"] = "hazel";
  person.farewell = function() { console.log("Bye everybody!"); };
  console.log(person.eyes);
  person.farewell();

  var person2 = Object.create(person); // peson2 is created based on person as __proto__ .
  console.log(person2.eyes); // using  __proto__ eyes property value.
  person2.farewell();
  person2.eyes = "green"; // creates new property eyes over __proto__ eyes.
  console.log(person2.eyes);

// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);
for (let i in myObj) { // iterate over properties.
  //let myobjttt = myObj.hasOwnProperty(i);
  console.log(i);
}
// Iterate thru all properties in prototype chain.
var objectToInspect;     
var result = [];
for(objectToInspect = myObj; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
}

console.log('----------');
let dtVar = new Date();
console.log('====> END OF PROGRAM' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
