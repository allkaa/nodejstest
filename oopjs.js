'use strict';

// Object oriented prototype chains study (native for JavaScript).

/*
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
*/

/*
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
*/

// Employee -> [Manager | WorkerBee -> [SalesPerson | Engineer]] case study.
function Employee(nameEmp, deptEmp) {
  this.name = nameEmp || ''; // constructor property is not possible to change latar for all descendants.
  this.dept = deptEmp || 'general';
}
// Static properties and prototype data properties must be defined outside of the constructor declaration.
Employee.staticOKPO = '1001';
// Add static method.
Employee.getcompany = () => {
  return Employee.prototype.company;
}
// Using static methods
let ttt = Employee.getcompany(); // returns undefined.
// Add prototype property.
Employee.prototype.company = 'Roga i Kopyta'; // prototype property is possible to change later for all descendants.
ttt = Employee.getcompany(); // returns Roga i Kopyta

function WorkerBee(nameW, deptW, projsW) {
  Employee.call(this, nameW, deptW); // call Employee constructor.
  this.projects = projsW || [];
}
WorkerBee.prototype = Object.create(Employee.prototype); // Set reference to Employee prototype.
WorkerBee.prototype.constructor = WorkerBee; // overlap Empoyee constructor with WorkerBee constructor.
//WorkerBee -> prototype Employee, constructor WorkerBee -> __proto__ constructor Employee
//WorkerBee.prototype = new Employee; // also works but inheritance chain is not good (duplicates and hided props)

function Engineer(nameE, projsE, machE) {
  WorkerBee.call(this, nameE, 'engineering', projsE); // call WorkerBee constructor.
  this.machine = machE || '';
}
Engineer.prototype = Object.create(WorkerBee.prototype) // Set reference to WorkerBee prototype.
Engineer.prototype.constructor = Engineer; // overlap WorkerBee constructor with Engineer constructor.
//Engineer  -> prototype WorkerBee, constructor Engineer -> __proto__ Employee, constructor WorkerBee -> __proto__ constructor Employee
//Engineer.prototype = new WorkerBee;  // also works but inheritance chain is not good (duplicates and hided props)

//var jane = new Engineer; // Parentheses can be omitted if the constructor takes no arguments.
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'KONE');
var isTrue = (jane instanceof Engineer);

function Manager(nameM, deptM, repsM) {
  Employee.call(this, nameM, deptM); // call Employee constructor.
  this.reports = repsM || [];
}
Manager.prototype = Object.create(Employee.prototype); // Set reference to Employee prototype.
Manager.prototype.constructor = Manager; // overlap Empoyee constructor with Manager constructor.

function SalesPerson(nameS, projS, quotaS) {
  WorkerBee.call(this, nameS, 'sales', projS); // call WorkerBee constructor.
  this.quota = quotaS;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype); // Set reference to WorkerBee prototype.
SalesPerson.prototype.constructor = SalesPerson; // overlap WorkerBee constructor with SalesPerson constructor.

var jim = new Employee('Jim', 'Security'); 
//var jim = new Employee; 
// Parentheses can be omitted if the constructor takes no arguments.
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager('Sally', 'Sales', ['DayReps', 'WeekReps', 'MonthReps']);

var mark = new WorkerBee('Mark','Marketing', ['self service', 'post offices']);
mark.bonus = 3000; // individual property set.

var fred = new SalesPerson('Fred',['mobile'], 100);

Employee.prototype.speciality = 'non-specified'; // property added to prototype will be propagated for all descendants.
jane.speciality = 'guru'; // overlap (hide) Employee.prototype.speciality = 'none' for jane.

Employee.prototype.company = "Vparing Ltd"; // propogates from Employee to jane.

console.log("");
console.log("End of Program.");
