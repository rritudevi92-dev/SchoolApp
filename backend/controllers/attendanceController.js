const { v4: uuidv4 } = require("uuid");

let attendance = [];

exports.markAttendance = (req, res) => {
    const { studentName, className, date, status } = req.body;

    if (!studentName || !className || !date || !status) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const record = {
        id: uuidv4(),
        studentName,
        className,
        date,
        status
    };

    attendance.push(record);

    res.status(201).json({
        success: true,
        message: "Attendance Saved",
        record
    });
};

exports.getAttendance = (req, res) => {
    res.json(attendance);
};
