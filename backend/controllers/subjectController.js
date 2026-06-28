const { v4: uuidv4 } = require("uuid");

let subjects = [];

exports.addSubject = (req, res) => {
    const { subjectName, className } = req.body;

    if (!subjectName || !className) {
        return res.status(400).json({
            success: false,
            message: "Subject name and class are required"
        });
    }

    const subject = {
        id: uuidv4(),
        subjectName,
        className
    };

    subjects.push(subject);

    res.status(201).json({
        success: true,
        message: "Subject Added Successfully",
        subject
    });
};

exports.getSubjects = (req, res) => {
    res.json(subjects);
};
