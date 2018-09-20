'use strict';

// Usning ES2015 classes to create prototype chains.

class Employee {
  constructor(nameEmp, deptEmp) {
    this.name = nameEmp || ''; // constructor property is not possible to change latar for all descendants.
    this.dept = deptEmp || 'general';
  }
  static getcompany() { // define static method.
    return Employee.prototype.company;
  }
}
// Using static methods
let ttt = Employee.getcompany(); // returns undefined.
// Add prototype property.
Employee.prototype.company = 'Roga i Kopyta'; // prototype property is possible to change later for all descendants.
ttt = Employee.getcompany(); // returns Roga i Kopyta

// Sub classing with extends and using super.
class WorkerBee extends Employee {
  constructor(nameW, deptW, projsW) {
    super(nameW, deptW); // use Employee constructor to set properties.
    // `super` must be used before using `this`.
    // projects is specific to WorkerBee.
    this._projects = projsW || [];
  }
  get projects() {
      return this._projects;
  }
  
  set projects(newProjects) {
      this._projects = newProjects;
  }
}
var mark = new WorkerBee('Mark','Marketing', ['self service', 'post offices']);
mark.bonus = 3000; // individual property set.
mark.projects = ['new', 'next']

class Engineer extends WorkerBee {
  constructor(nameE, projsE, machE) {
    super(nameE, 'engineering', projsE); // use Employee constructor to set properties.
    // `super` must be used before using `this`.
    // projects is specific to WorkerBee.
    this._machine = machE || '';
  }
  get machine() {
      return this._machine;
  }
  set machine(newMachine) {
      this._machine = newMachine;
  }
}

var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'KONE');
var isTrue = (jane instanceof Engineer);
Employee.prototype.speciality = 'non-specified'; // property added to prototype will be propagated for all descendants.
jane.speciality = 'guru'; // overlap (hide) Employee.prototype.speciality = 'none' for jane.

Employee.prototype.company = "Vparing Ltd"; // propogates from Employee to jane.


console.log("Stop of Program.");
/*
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
*/




console.log("End of Program.");
