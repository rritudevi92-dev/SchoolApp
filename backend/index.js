require("dotenv").config();

const express = require("express");
const cors = require("cors");

const loginRoutes = require("./routes/loginRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", loginRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

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
