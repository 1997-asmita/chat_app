const {
  storeSingleMessage,
  getAllSingleMessage,
} = require("../Services/chats.service");
const { errorMessage, successMessage } = require("../Services/status.service");

const sendSingleMessage = async (req, res) => {
  try {
    const payload = req.body;

    const sendMessage = await storeSingleMessage(payload);
    return successMessage(
      res,
      sendMessage,
      "Message sent successfully",
      200,
      "success"
    );
  } catch (error) {
    return errorMessage(res, error.message, 500);
  }
};

const getOneToOneUserMessages = async (req, res) => {
  try {
    const getAll = await getAllSingleMessage({
      $or: [
        { senderId: req.query.senderId, receiverId: req.query.receiverId },
        { senderId: req.query.receiverId, receiverId: req.query.senderId },
      ],
      is_deleted: false,
      deletedAt: null,
    });

    return successMessage(
      res,
      getAll,
      "Message received successfully",
      200,
      "success"
    );
  } catch (error) {
    return errorMessage(res, error.message, 500);
  }
};

module.exports = { sendSingleMessage, getOneToOneUserMessages };
