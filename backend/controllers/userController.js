const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

let users = [];

exports.register = async (req, res) => {
    try {
        const { name, username, password, role } = req.body;

        if (!name || !username || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            id: uuidv4(),
            name,
            username,
            password: hashedPassword,
            role
        };

        users.push(user);

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
