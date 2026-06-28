const express = require("express");
const router = express.Router();

const homeworkController = require("../controllers/homeworkController");

router.post("/homeworks", homeworkController.addHomework);
router.get("/homeworks", homeworkController.getHomeworks);

module.exports = router;
