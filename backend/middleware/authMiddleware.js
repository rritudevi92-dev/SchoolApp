const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "SchoolApp_2026_Super_Secret_Key";

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Denied"
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }
}

module.exports = authMiddleware;
