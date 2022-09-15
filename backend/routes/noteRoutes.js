const express = require("express");
const {getNoteById, getNotes, createNote, UpdateNote, DeleteNote } = require("../controllers/noteController");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect,getNotes);
router.route("/create").post(protect,createNote);
router.route("/:id").get(getNoteById).put(protect,UpdateNote).delete(protect,DeleteNote);

module.exports = router;