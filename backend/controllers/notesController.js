const { v4: uuidv4 } = require("uuid");

let notes = [];

exports.addNote = (req, res) => {
    const { title, className, subjectName, description } = req.body;

    if (!title || !className || !subjectName) {
        return res.status(400).json({
            success: false,
            message: "Required fields missing"
        });
    }

    const note = {
        id: uuidv4(),
        title,
        className,
        subjectName,
        description
    };

    notes.push(note);

    res.status(201).json({
        success: true,
        message: "Note Added Successfully",
        note
    });
};

exports.getNotes = (req, res) => {
    res.json(notes);
};
