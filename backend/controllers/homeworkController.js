const { v4: uuidv4 } = require("uuid");

let homeworks = [];

exports.addHomework = (req, res) => {
    const { title, className, subjectName, dueDate } = req.body;

    if (!title || !className || !subjectName || !dueDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const homework = {
        id: uuidv4(),
        title,
        className,
        subjectName,
        dueDate
    };

    homeworks.push(homework);

    res.status(201).json({
        success: true,
        message: "Homework Added Successfully",
        homework
    });
};

exports.getHomeworks = (req, res) => {
    res.json(homeworks);
};
