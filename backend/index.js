const loginRoutes = require("./routes/loginRoutes");require("dotenv").config();const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());app.use("/api", loginRoutes);
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("School Management Backend Running...");
});
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "School Management API Working"
    });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
