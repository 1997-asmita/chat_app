const db = require("../Models/db");

const updateAndInsertSocketRecord = async (condition, payload) => {
  try {
    await db.socket.findOneAndUpdate(condition, payload, {
      upsert: true,
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

const findSocketRecord = async (condition) => {
  try {
    const findSocket = await db.socket.findOne(condition);
    return findSocket;
  } catch (error) {
    throw error;
  }
};

module.exports = { updateAndInsertSocketRecord, findSocketRecord };
