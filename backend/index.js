require("dotenv").config();

const express = require("express");
const cors = require("cors");

const loginRoutes = require("./routes/loginRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const registerRoutes = require("./routes/registerRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const classRoutes = require("./routes/classRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const app = express();
const notesRoutes = require("./routes/notesRoutes");
const booksRoutes = require("./routes/booksRoutes")
const attendanceRoutes = require("./routes/attendanceRoutes");;
const homeworkRoutes = require("./routes/homeworkRoutes");
const resultRoutes = require("./routes/resultRoutes");
app.use(cors());
app.use(express.json());
app.use("/api", subjectRoutes);
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);
app.use("/api", teacherRoutes);
app.use("/api", studentRoutes);
app.use("/api", classRoutes);
app.use("/api", notesRoutes);
app.use("/api", booksRoutes);
app.use("/api", attendanceRoutes);
app.use("/api", homeworkRoutes);
app.use("/api", resultRoutes);
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
