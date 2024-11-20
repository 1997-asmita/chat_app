const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    receiverId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
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

module.exports = mongoose.model("chats", ChatSchema);
