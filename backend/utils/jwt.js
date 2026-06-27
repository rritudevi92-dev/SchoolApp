const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "SchoolApp_2026_Super_Secret_Key";

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        SECRET,
        {
            expiresIn: "7d"
        }
    );
}

module.exports = {
    generateToken
};
