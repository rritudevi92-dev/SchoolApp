const express = require("express");
const router = express.Router();

const resultController = require("../controllers/resultController");

router.post("/results", resultController.addResult);
router.get("/results", resultController.getResults);

module.exports = router;
