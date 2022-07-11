var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.ages = function () {
    console.log(`${this.name} is of ${this.age} Age.`);
}

function Teacher(subject) {
    Person.call(this, subject);
    this.subject = subject;
}

Teacher.prototype.teaches = function () {
    console.log(`${this.name} Teaches ${this.subject} Subject`);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher("CS");

him.initialize("Rahul", 25);
him.ages();
him.teaches();

