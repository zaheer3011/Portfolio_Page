const mongoose = require("mongoose");
const validator = require("validator");

// Creating user Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },

  email: {
    type: String,
    require: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Enter Valid Email!");
      }
    },
  },
  message: {
    type: String,
    require: true,
    trim: true,
  },
});

// Creating a Model
const User = mongoose.model("User", userSchema);
module.exports = User;
