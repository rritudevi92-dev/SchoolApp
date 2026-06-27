const User = require("./User");

class Admin extends User {
    constructor(name, email, password) {
        super(name, email, password, "admin");
    }
}

module.exports = Admin;
