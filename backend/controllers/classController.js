const { v4: uuidv4 } = require("uuid");

let classes = [];

exports.addClass = (req, res) => {
    const { className } = req.body;

    if (!className) {
        return res.status(400).json({
            success: false,
            message: "Class name is required"
        });
    }

    const newClass = {
        id: uuidv4(),
        className
    };

    classes.push(newClass);

    res.status(201).json({
        success: true,
        message: "Class Added Successfully",
        class: newClass
    });
};

exports.getClasses = (req, res) => {
    res.json(classes);
};
