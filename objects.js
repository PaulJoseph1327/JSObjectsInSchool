var id = 1;
var tmSize = 1;

function Student(firstName, lastName, grade){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
}

function Teacher(firstName, lastName, subject){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

function Section(name, maxSize) {
    this.id = id++;
    this.name = name;
    this.tmSize = tmSize;
    this.tmcSize = 0;
    this.teacher = [];
    this.maxSize = maxSize;
    this.students = [];
    this.currentSize = 0;
    this.sectionSeatsRemaining = this.maxSize;
}