const db = require("../Models/db");

const storeSingleMessage = async (payload) => {
  try {
    const store = await db.chats.create(payload);
    return store;
  } catch (error) {
    throw error;
  }
};
const getAllSingleMessage = async (payload) => {
  try {
    const allMessages = await db.chats.find(payload);
    return allMessages;
  } catch (error) {
    throw error;
  }
};

module.exports = { storeSingleMessage, getAllSingleMessage };
