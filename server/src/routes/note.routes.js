const express = require("express");
const notesController = require("../controllers/note.controller.js");

const noteRoutes = express.Router();


// route for get all notes for particular user :
noteRoutes.get("/", notesController.getAllNotes);

// route for find note by Id :
noteRoutes.get("/:id", notesController.getNoteById);

// route for create note :
noteRoutes.post("/create", notesController.createNote);

// route for update particular note by Id :
noteRoutes.put("/update/:id", notesController.updateNote);

// route for delete particular note by Id :
noteRoutes.delete("/delete/:id", notesController.deleteNote);

module.exports = noteRoutes;
