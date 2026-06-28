const { v4: uuidv4 } = require("uuid");

let books = [];

exports.addBook = (req, res) => {
    const { title, className, subjectName, author } = req.body;

    if (!title || !className || !subjectName || !author) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const book = {
        id: uuidv4(),
        title,
        className,
        subjectName,
        author
    };

    books.push(book);

    res.status(201).json({
        success: true,
        message: "Book Added Successfully",
        book
    });
};

exports.getBooks = (req, res) => {
    res.json(books);
};
