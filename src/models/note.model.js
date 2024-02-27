const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
});

const NoteModel = mongoose.model("Note", noteSchema);

module.exports = NoteModel;
