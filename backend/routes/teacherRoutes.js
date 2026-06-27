const express = require("express");
const router = express.Router();

const teacherController = require("../controllers/teacherController");

router.post("/teachers", teacherController.addTeacher);
router.get("/teachers", teacherController.getTeachers);

module.exports = router;
