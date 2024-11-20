const mongoose = require("mongoose");
const socketSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    socketId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Socket", socketSchema);
