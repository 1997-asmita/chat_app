const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      default: 0,
    },
    gender: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: null,
      required: false,
    },
    is_deleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
