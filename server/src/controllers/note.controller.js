const NoteModel = require("../models/note.model.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");

// post request for create a note :
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req.query;

  try {
    const createdNote = new NoteModel({
      title,
      content,
      userId,
    });
    await createdNote.save();
    if (createdNote)
      res.send(new ApiResponse(201, createdNote, "Note created successfully!"));
    else throw new ApiError(400, "Note not created!");
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};

// get request for get all notes for particular user :
exports.getAllNotes = async (req, res) => {
  const { userId } = req.query;
  try {
    const notes = await NoteModel.find({ userId });
    if (notes)
      res.send(new ApiResponse(200, notes, "All notes fetched successfully!"));
    else throw new ApiError(400, "Notes not found!");
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};

// find note by Id :
exports.getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await NoteModel.findById(id);
    if (note)
      res.send(new ApiResponse(200, note, "Note fetched successfully!"));
    else throw new ApiError(400, "Note not found!");
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};

// put request for update particular note by Id :
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedNote = await NoteModel.findByIdAndUpdate(id, {
      title,
      content,
    });
    if (updatedNote)
      res.send(new ApiResponse(200, updatedNote, "Note updated successfully!"));
    else throw new ApiError(400, "Note not updated!");
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};

// delete request for delete particular note by Id :
exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await NoteModel.findByIdAndDelete(id);
    if (deletedNote)
      res.send(new ApiResponse(200, deletedNote, "Note deleted successfully!"));
    else throw new ApiError(400, "Note not deleted!");
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};
