const express = require("express");
const router = express.Router();

const attendanceController = require("../controllers/attendanceController");

router.post("/attendance", attendanceController.markAttendance);
router.get("/attendance", attendanceController.getAttendance);

module.exports = router;
