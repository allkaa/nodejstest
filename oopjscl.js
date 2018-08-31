'use strict';

class Person {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

//var yyy = "var yyy creates globale property yyy";

//let xxx = "let xxx does not create global property this.xxx";

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han
  
let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now

/*
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      this.name = {
        first,
        last
      };
  
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
    }
  }
*/
// using super.
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests); // use Person constructor to set properties.
      // subject and grade are specific to Teacher
      this._subject = subject;
      this.grade = grade;
    }
    get subject() {
        return this._subject;
    }
    
    set subject(newSubject) {
        this._subject = newSubject;
    }
    // Declare Teacher own farewell method overlapping Person's one.
    farewell() {
        console.log(`Teacher ${this.name.first} has left the building.`);
    };
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Old subject: Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // use Teacher own farewell(), not Person farewell().
console.log(snape.age); // 58
let ttt = snape.subject;
console.log(snape.subject); // Dark arts
snape.subject = "New subject: Set";
console.log(snape.subject); // Dark arts

console.log("End of Program.");
