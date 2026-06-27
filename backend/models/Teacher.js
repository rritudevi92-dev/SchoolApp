const User = require("./User");

class Teacher extends User {
    constructor(name, email, password, subject) {
        super(name, email, password, "teacher");
        this.subject = subject;
    }
}

module.exports = Teacher;
