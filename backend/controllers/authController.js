const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "SchoolApp_2026_Super_Secret_Key";

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin123") {

        const token = jwt.sign(
            {
                username: username,
                role: "admin"
            },
            SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.json({
            success: true,
            message: "Login Successful",
            token: token
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid Username or Password"
    });
};
