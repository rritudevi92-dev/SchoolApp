const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notesController");

router.post("/notes", notesController.addNote);
router.get("/notes", notesController.getNotes);

module.exports = router;
