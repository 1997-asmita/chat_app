const db = require("../Models/db");

const allUsers = async (condition) => {
  try {
    const users = await db.User.find(condition, {
      is_deleted: 0,
      deletedAt: 0,
    });

    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = { allUsers };
