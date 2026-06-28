const { v4: uuidv4 } = require("uuid");

let results = [];

exports.addResult = (req, res) => {
    const { studentName, className, subjectName, marks } = req.body;

    if (!studentName || !className || !subjectName || marks === undefined) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const result = {
        id: uuidv4(),
        studentName,
        className,
        subjectName,
        marks
    };

    results.push(result);

    res.status(201).json({
        success: true,
        message: "Result Added Successfully",
        result
    });
};

exports.getResults = (req, res) => {
    res.json(results);
};
