const { v4: uuidv4 } = require("uuid");
const database = require("../services/database");

exports.addStudent = (req, res) => {
    const { name, email, phone, studentClass, rollNo } = req.body;

    if (!name || !email || !phone || !studentClass || !rollNo) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const student = {
        id: uuidv4(),
        name,
        email,
        phone,
        studentClass,
        rollNo
    };

    database.students.push(student);

    res.status(201).json({
        success: true,
        message: "Student Added Successfully",
        student
    });
};

exports.getStudents = (req, res) => {
    res.json(database.students);
};
