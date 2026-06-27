const bcrypt = require("bcryptjs");

class User {
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = bcrypt.hashSync(password, 10);
        this.role = role;
    }
}

module.exports = User;
