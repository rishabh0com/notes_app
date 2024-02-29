const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    displayImage: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
