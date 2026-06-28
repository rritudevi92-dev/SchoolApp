const express = require("express");
const router = express.Router();

const classController = require("../controllers/classController");

router.post("/classes", classController.addClass);
router.get("/classes", classController.getClasses);

module.exports = router;
