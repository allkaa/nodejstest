'use strict';
//var person0 = {f: "one", s: "two"};
var person0 = {};
console.log(person0);
console.log(person0.toString());
console.log(typeof(person0));

//var arr = ["one", "two"];
var arr0 = [];
console.log(arr0);
console.log(arr0.toString());
console.log(typeof(arr0));

var person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.gender + " " + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  };

  console.log(person.name);
  console.log(person['name']); // using bracket notation.
  console.log(person.name[1]);
  console.log(person['name'][1]); // using bracket notation.
  var strVar = 'name';
  console.log(person[strVar][1]); // using bracket notation with variable.
  person.bio();
  person.greeting();
