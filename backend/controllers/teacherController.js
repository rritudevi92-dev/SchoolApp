const { v4: uuidv4 } = require("uuid");
const database = require("../services/database");

exports.addTeacher = (req, res) => {
    const { name, email, subject, phone } = req.body;

    if (!name || !email || !subject || !phone) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const teacher = {
        id: uuidv4(),
        name,
        email,
        subject,
        phone
    };

    database.teachers.push(teacher);

    res.status(201).json({
        success: true,
        message: "Teacher Added Successfully",
        teacher
    });
};

exports.getTeachers = (req, res) => {
    res.json(database.teachers);
};
