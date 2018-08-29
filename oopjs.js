'use strict';

// Constructor function. Typically name starts with capital letter e.g. Person
function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
  }

// Constructor call.
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1['age']);
console.log(person1.interests[1]);
person1.bio();
console.log(person1.valueOf());

var myString = 'This is my string.';
console.log(myString);

var person2 = Object.create(person1);
console.log(person2.prototype);

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
console.log(person3.name.first);
console.log(person3.age);
person3.bio();

// Modifying Person constructor prototype (adding new method).
Person.prototype.farewell = function() {
    console.log(this.name.first + ' has left the building. Bye for now!');
  };
person1.farewell();

// Constructor function with only properties. Method will be added later.
function PersTest(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
// Add frirst method in the prototype.
PersTest.prototype.bio = function() {
    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
};
// Add second method in the prototype.
PersTest.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
};

var person4 = new PersTest('Alex', 'Raven', 65, 'male', ['music', 'sports']);
console.log(person4.name.first);
console.log(person4.age);
console.log(person4.interests);
console.log(person4.interests.toString());
var tmpArr = person4.interests;
console.log(tmpArr.toString());
person4.bio();


console.log("End of Program.");
