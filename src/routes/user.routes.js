const express = require("express");
const userController = require("../controllers/user.controller.js");

const userRoutes = express.Router();

// post request for register a user :
userRoutes.post("/register", userController.registerUser);

// post request for login a user :
userRoutes.post("/login", userController.loginUser);

module.exports = userRoutes;