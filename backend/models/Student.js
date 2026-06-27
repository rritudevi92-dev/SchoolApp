const User = require("./User");

class Student extends User {
    constructor(name, email, password, studentClass, rollNo) {
        super(name, email, password, "student");
        this.studentClass = studentClass;
        this.rollNo = rollNo;
    }
}

module.exports = Student;
