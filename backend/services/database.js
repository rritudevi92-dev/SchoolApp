const users = [];

function addUser(user) {
    users.push(user);
    return user;
}

function findUser(username) {
    return users.find(user => user.username === username);
}

function getUsers() {
    return users;
}

const teachers = [];
const students = [];
const admins = [];

module.exports = {
    addUser,
    findUser,
    getUsers,
    teachers,
    students,
    admins
};
