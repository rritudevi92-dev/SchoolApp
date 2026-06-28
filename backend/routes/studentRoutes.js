const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.post("/students", studentController.addStudent);
router.get("/students", studentController.getStudents);

module.exports = router;
