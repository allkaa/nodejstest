'use strict';

let aaa, aaa1, aaa2;

// Usning ES2015 classes to create prototype chains.

class Employee {
  constructor(nameEmp, deptEmp) {
    this._name = nameEmp || ''; // constructor properties is not possible to change latar for all descendants.
    this._dept = deptEmp || 'general';
  }
  get name() { return this._name;}
  set name(newName) {this._name = newName;}
  get dept() {this._dept;}
  set dept(newDept) {this._dept = newDept}
  static getcompany() { // define static method.
    return Employee.prototype.company;
  }
}
// Static class-side properties and prototype data properties must be defined outside of the ClassBody declaration.
Employee.staticOKPO = '1001';
// Using static methods
aaa = Employee.getcompany(); // returns undefined.
// Add prototype property.
Employee.prototype.company = 'Roga i Kopyta'; // prototype property is possible to change later for all descendants.
aaa = Employee.getcompany(); // returns Roga i Kopyta
aaa = new Employee('Juliy','Rome');
aaa1 = aaa.name;

// Sub classing that extends Eployee and using super.
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

// Sub class that extends Workbee and using super.
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

var mark = new WorkerBee('Mark','Marketing', ['self service', 'post offices']);
mark.bonus = 3000; // individual property set.
mark.projects = ['new', 'next']

var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'KONE');
var isTrue = (jane instanceof Engineer); // true.
Employee.prototype.speciality = 'non-specified'; // property added to prototype will be propagated for all descendants.
jane.speciality = 'guru'; // overlap (hide) Employee.prototype.speciality = 'none' for jane.

Employee.prototype.company = "Vparing Ltd"; // propogates from Employee to jane.

// Buit-in object Date modification.
class formatDate extends Date {
  constructor(dateStr) {
    super(dateStr);
  }
  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

aaa = new formatDate('August 19, 1975 23:15:30').getFormattedDate();
// expected output: "19-Aug-1975"






return;

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
let aaa = snape.subject;
console.log(snape.subject); // Dark arts
snape.subject = "New subject: Set";
console.log(snape.subject); // Dark arts
*/



return;

console.log("End of Program.");
