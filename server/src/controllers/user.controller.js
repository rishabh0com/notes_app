const UserModel = require("../models/user.model.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// post request for register a user :
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashPass = bcrypt.hashSync(password, 8);

  try {
    const registeredUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashPass,
    });
    await registeredUser.save();
    if (registeredUser)
      res.send(
        new ApiResponse(201, registeredUser, "User registered successfully!")
      );
    else throw new ApiError(400, "User not registered!");
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};

// post request for login a user :
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_KEY, {
          expiresIn: "1h",
        });
        const refreshToken = jwt.sign(
          { id: user._id },
          process.env.REFRESH_KEY,
          { expiresIn: "1d" }
        );
        res.send(
          new ApiResponse(
            200,
            { user, accessToken, refreshToken },
            "User logged in successfully!"
          )
        );
      } else {
        throw new ApiError(401, "Invalid Password!");
      }
    } else {
      throw new ApiError(401, "Invalid Email!");
    }
  } catch (error) {
    res.send({ message: error.message, ...error });
  }
};
