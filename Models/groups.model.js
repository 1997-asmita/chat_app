const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    receiverIds: {
      type: [String],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    groupId: {
      type: Number,
      required: false,
      default: 0,
    },
    groupName: {
      type: String,
      required: false,
      default: null,
    },
    groupAdmins: {
      type: [String],
      required: false,
      default: null,
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

module.exports = mongoose.model("groupChats", GroupSchema);
