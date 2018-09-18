'use strict';

// Constructor function. Typically name starts with capital letter e.g. Person
function PersonOld(first, last, age, gender, interests) {
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
var person1 = new PersonOld('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

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

// Modifying PersonOld constructor prototype (adding new method).
PersonOld.prototype.farewell = function() {
    console.log(this.name.first + ' has left the building. Bye for now!');
  };
person1.farewell();

// ====================================================================== //
// Constructor function with only properties. Method will be added later.
function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
// Add frirst method in the prototype.
Person.prototype.bio = function() {
    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
};
// Add second method in the prototype.
Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
};
// Add third method in prototype.
Person.prototype.farewell = function() {
    console.log(this.name.first + ' has left the building. Bye for now!');
  };


console.log("");
var person4 = new Person('Alex', 'Raven', 65, 'male', ['music', 'sports']);
console.log(person4.name.first);
console.log(person4.age);
console.log(person4.interests);
console.log(person4.interests.toString());
var tmpArr = person4.interests;
console.log(tmpArr.toString());
person4.bio(); // use second added prototype method.
person4.greeting(); // use first added prototype method.
person4.farewell(); // use third added prototype method.


// Teacher constuctor calling Person consturtor.
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests); // this will be this value for Person.call constructor.
    this.subject = subject; // add new property - subject.
  };
Teacher.prototype = Object.create(Person.prototype); // must be to use Person methods in Teacher.
 // NB! Teacher own prototype.constructor must be re-created (added) overlap Person prototype.consoructor in __proto__ to include subject property.
Teacher.prototype.constructor = Teacher;
// Create new greetings for Teacher overlapping Person greetings.
Teacher.prototype.greeting = function() {
    var prefix;
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
    console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
  };

var teacher1 = new Teacher('Tricky', 'Teacher', 66, 'male', ['entertainment', 'fun'], 'IT');
console.log(teacher1.name.first);
teacher1.greeting();

// Employee -> [Manager | WorkerBee -> [SalesPerson | Engineer]] case study.
function Employee(nameEmp, deptEmp) {
  this.name = nameEmp || '';
  this.dept = deptEmp || 'general';
}

function Manager(nameM, deptM, repsM) {
  Employee.call(this, nameM, deptM); // call Employee constructor.
  this.reports = repsM || [];
}
Manager.prototype = Object.create(Employee.prototype); // Set reference to Employee prototype.
Manager.prototype.constructor = Manager; // overlap Empoyee constructor with Manager constructor.

/*
function WorkerBee(projs) {
  Employee.call(this); // call Employee constructor.
  this.projects = projs || [];
}
WorkerBee.prototype = Object.create(Employee.prototype); // Set reference to Employee prototype.
WorkerBee.prototype.constructor = WorkerBee; // overlap Empoyee constructor with WorkerBee constructor.
*/
/*
function WorkerBee(name, dept, projs) {
  Employee.call(this); // call Employee constructor.
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;
*/
function WorkerBee(nameW, deptW, projsW) {
  Employee.call(this, nameW, deptW); // call Employee constructor.
  this.projects = projsW || [];
}
WorkerBee.prototype = Object.create(Employee.prototype); // Set reference to Employee prototype.
WorkerBee.prototype.constructor = WorkerBee; // overlap Empoyee constructor with WorkerBee constructor.

/*
function SalesPerson() {
  WorkerBee.call(this); // call WorkerBee constructor.
  this.dept = 'sales';
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype); // Set reference to WorkerBee prototype.
SalesPerson.prototype.constructor = SalesPerson; // overlap WorkerBee constructor with SalesPerson constructor.
*/

/*
function Engineer(mach) {
  WorkerBee.call(this); // call WorkerBee constructor.
  this.dept = 'engineering';
  this.machine = mach || '';
}
Engineer.prototype = Object.create(WorkerBee.prototype) // Set reference to WorkerBee prototype.
Engineer.prototype.constructor = Engineer; // overlap WorkerBee constructor with Engineer constructor.
*/
/*
function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;
*/
function Engineer(nameE, projsE, machE) {
  WorkerBee.call(this, nameE, 'engineering', projsE); // call WorkerBee constructor.
  //this.dept = 'engineering';
  this.machine = machE || '';
}
Engineer.prototype = Object.create(WorkerBee.prototype) // Set reference to WorkerBee prototype.
Engineer.prototype.constructor = Engineer; // overlap WorkerBee constructor with Engineer constructor.

//var jim = new Employee; 
// Parentheses can be omitted if the
// constructor takes no arguments.
// jim.name is ''
// jim.dept is 'general'

//var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

//var mark = new WorkerBee;
// mark.name is ''
// mark.dept is 'general'
// mark.projects is []

//var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

//var jane = new Engineer('Kone');
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'KONE');

/*
mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];

mark.bonus = 3000;
Employee.prototype.specialty = 'none';
*/
Employee.prototype.speciality = 'none';
jane.speciality = 'guru'; // overlap (hide) Employee.prototype.speciality = 'none'

console.log("");
console.log("End of Program.");
