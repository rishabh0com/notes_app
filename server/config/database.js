require("dotenv").config();

const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log("Error from Databse",err));

module.exports = connection;
